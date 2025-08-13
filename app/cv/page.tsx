"use client";
import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import PageLayout from "@/components/PageLayout";
import { 
  Mail, Linkedin, Github, MapPin, 
  Code, Zap, Briefcase,
  GraduationCap, Star, Printer
} from "lucide-react";

const personalInfo = {
  name: "Bryan Ducrettet",
  title: "Développeur Full-stack & Spécialiste IA",
  email: "ducrettetbryan1@gmail.com",
  linkedin: "https://www.linkedin.com/in/bryan-ducrettet-a27872350/",
  github: "https://github.com/Sakaax",
  location: "Remote • Fuseau CET",
  availability: "Disponible pour freelance et alternance"
};

const skills = {
  frontend: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Supabase", "PostgreSQL", "API REST", "Vercel"],
  ai: ["Vercel AI SDK", "OpenAI API", "OpenRouter", "Prompt Engineering", "RAG"],
  tools: ["Git", "Vercel", "Stripe", "Clerk Auth", "shadcn/ui"]
};

const experiences = [
  {
    period: "2024 - Présent",
    title: "Freelance Full-stack & IA",
    company: "Indépendant",
    location: "Remote",
    description: "Développement de MVP SaaS avec intégrations IA pour startups et PME",
    achievements: [
      "Livraison de 8+ projets MVP complets en 2024",
      "Spécialisation en intégrations IA (OpenAI, Claude, agents)",
      "Stack moderne : Next.js, TypeScript, Supabase, Stripe",
      "Délais respectés : 100% des projets livrés dans les temps"
    ]
  },
  {
    period: "2023 - 2024",
    title: "Transition vers le développement",
    company: "Formation intensive",
    location: "Auto-formation",
    description: "Apprentissage accéléré des technologies web modernes",
    achievements: [
      "Maîtrise de React/Next.js en 6 mois",
      "Premiers projets clients réussis",
      "Création de PromptFix (MVP d'optimisation de prompts)",
      "Construction d'un portfolio technique complet"
    ]
  }
];

const projects = [
  {
    name: "PromptFix",
    period: "2024",
    description: "MVP d'optimisation de prompts IA",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Tailwind"],
    achievements: [
      "Interface intuitive pour l&apos;amélioration de prompts",
      "Intégration API OpenAI pour l&apos;analyse et suggestions",
      "Système d'export et de copie rapide",
      "Déploiement automatisé sur Vercel"
    ]
  },
  {
    name: "Éclipser",
    period: "2024-2025",
    description: "SaaS IA avancé (en développement)",
    tech: ["Next.js", "Supabase", "Stripe", "AI SDK"],
    achievements: [
      "Architecture scalable avec authentification Clerk",
      "Système de paiements Stripe intégré",
      "Interface utilisateur moderne avec glassmorphism",
      "Optimisations performance et SEO"
    ]
  }
];

const education = [
  {
    period: "2023-2024",
    title: "Formation Développement Web",
    institution: "Auto-formation intensive",
    description: "Apprentissage des technologies modernes via projets pratiques",
    skills: ["JavaScript/TypeScript", "React/Next.js", "Databases", "API Design"]
  }
];

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageLayout className="px-4 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header avec actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 no-print"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Curriculum Vitae
              </h1>
              <p className="text-lg opacity-70 mt-2">Bryan Ducrettet • Full-stack & IA</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="btn btn-primary"
              >
                <Printer className="h-4 w-4" />
                Imprimer
              </button>
            </div>
          </div>
        </motion.div>

        {/* En-tête du CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img 
                src="/avatar.jpg" 
                alt="Bryan Ducrettet"
                className="w-24 h-24 rounded-full object-cover border-3 border-white/20 mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">{personalInfo.name}</h1>
                <p className="text-lg text-accent-coral mb-4">{personalInfo.title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm opacity-80">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Github className="h-4 w-4" />
                    <span>GitHub: @Sakaax</span>
                  </div>
                </div>
                <div className="mt-4 p-3 glass rounded-lg bg-white/5">
                  <p className="text-sm font-medium text-accent-coral">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Profil professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-accent-coral" />
              Profil Professionnel
            </h2>
            <p className="text-gray-800/90 leading-relaxed">
              Développeur full-stack spécialisé dans les <strong>SaaS avec IA intégrée</strong>. 
              Expert en livraison rapide de MVP production-ready utilisant Next.js, TypeScript et 
              les dernières technologies d&apos;intelligence artificielle. Passionné par l&apos;création 
              d&apos;applications modernes, scalables et centrées utilisateur.
            </p>
          </GlassCard>
        </motion.div>

        {/* Compétences techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-accent-coral" />
              Compétences Techniques
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-accent-coral">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="px-3 py-1 glass rounded-full text-sm bg-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-accent-coral">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="px-3 py-1 glass rounded-full text-sm bg-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-accent-coral">Intelligence Artificielle</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill) => (
                    <span key={skill} className="px-3 py-1 glass rounded-full text-sm bg-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-accent-coral">Outils & Services</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 glass rounded-full text-sm bg-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Expérience professionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-accent-coral" />
              Expérience Professionnelle
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="glass rounded-lg p-5 bg-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-accent-coral font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-sm opacity-75 mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-800/80 mb-4">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-accent-coral mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Projets significatifs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent-coral" />
              Projets Significatifs
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="glass rounded-lg p-5 bg-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-gray-800/80">{project.description}</p>
                    </div>
                    <span className="text-sm opacity-75 mt-1 md:mt-0">{project.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs glass rounded bg-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-accent-coral mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent-coral" />
              Formation
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass rounded-lg p-4 bg-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{edu.title}</h3>
                      <p className="text-accent-coral text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-sm opacity-75 mt-1 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-sm text-gray-800/80 mb-3">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs glass rounded bg-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center no-print"
        >
          <p className="text-sm opacity-60 mb-4">
            CV généré automatiquement depuis le portfolio • Dernière mise à jour : Août 2025
          </p>
          <div className="flex justify-center gap-4">
            <a href="/about" className="btn btn-secondary text-sm">
              Retour au portfolio
            </a>
            <a href="/contact" className="btn btn-primary text-sm">
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>

      {/* Styles d'impression */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
          
          .glass {
            background: rgba(248, 250, 252, 0.8) !important;
            border: 1px solid #e2e8f0 !important;
            backdrop-filter: none !important;
          }
          
          h1, h2, h3 {
            color: #1a202c !important;
          }
          
          .text-accent-coral {
            color: #e53e3e !important;
          }
          
          p, span, li {
            color: #2d3748 !important;
          }
          
          .opacity-80, .opacity-75, .opacity-60 {
            opacity: 0.8 !important;
          }
        }
      `}</style>
    </PageLayout>
  );
}