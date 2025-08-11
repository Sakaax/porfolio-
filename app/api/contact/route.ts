import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface ContactSubmission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  project: string;
  timeline: string;
  budget: string;
  message: string;
  status: 'nouveau' | 'en_cours' | 'termine' | 'archive';
  notes?: string;
}

const SUBMISSIONS_DIR = path.join(process.cwd(), 'data', 'contact-submissions');
const INDEX_FILE = path.join(SUBMISSIONS_DIR, 'index.json');

// Ensure the submissions directory exists
async function ensureDirectoryExists() {
  try {
    await fs.access(SUBMISSIONS_DIR);
  } catch {
    await fs.mkdir(SUBMISSIONS_DIR, { recursive: true });
    
    // Create initial index file
    const initialIndex: ContactSubmission[] = [];
    await fs.writeFile(INDEX_FILE, JSON.stringify(initialIndex, null, 2));
  }
}

// Generate unique ID
function generateId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `contact_${timestamp}_${random}`;
}

// Load submissions index
async function loadSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(INDEX_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save submissions index
async function saveSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await fs.writeFile(INDEX_FILE, JSON.stringify(submissions, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    await ensureDirectoryExists();

    const body = await request.json();
    const { name, email, project, timeline, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission: ContactSubmission = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      project: project || 'Non spécifié',
      timeline: timeline || 'Non spécifié',
      budget: budget || 'Non spécifié',
      message: message.trim(),
      status: 'nouveau'
    };

    // Load existing submissions
    const submissions = await loadSubmissions();
    
    // Add new submission
    submissions.unshift(submission);
    
    // Keep only last 100 submissions in index
    if (submissions.length > 100) {
      submissions.splice(100);
    }

    // Save updated index
    await saveSubmissions(submissions);

    // Save individual submission file for detailed tracking
    const submissionFile = path.join(SUBMISSIONS_DIR, `${submission.id}.json`);
    await fs.writeFile(submissionFile, JSON.stringify(submission, null, 2));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès!',
        id: submission.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'enregistrement:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'enregistrement' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDirectoryExists();
    const submissions = await loadSubmissions();
    
    // Return only basic info for privacy
    const publicData = submissions.map(s => ({
      id: s.id,
      timestamp: s.timestamp,
      name: s.name,
      project: s.project,
      status: s.status
    }));

    return NextResponse.json({ submissions: publicData });
  } catch (error) {
    console.error('Erreur lors de la lecture:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la lecture' },
      { status: 500 }
    );
  }
}