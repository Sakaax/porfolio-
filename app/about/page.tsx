"use client";
import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import PageLayout from "@/components/PageLayout";
import { 
  Mail, Linkedin, Code, Clock, 
  Shield, Eye, ArrowRight, Quote, Star,
  Calendar, HelpCircle, FileText
} from "lucide-react";

const whatIBring = [
  {
    icon: Clock,
    title: "Livraison rapide & propre",
    description: "Sprints courts, qualité production, code maintenable"
  },
  {
    icon: Shield,
    title: "Intégrations solides",
    description: "Clerk, Stripe, Supabase, IA - configurations éprouvées"
  },
  {
    icon: Eye,
    title: "UX moderne",
    description: "Performance mobile, accessibilité, animations fluides"
  }
];

const workflowSteps = [
  { step: "Découverte", description: "Analyse besoins & contraintes" },
  { step: "Spécification", description: "Architecture & user stories" },
  { step: "Maquettes", description: "Wireframes & design system" },
  { step: "MVP", description: "Développement iteratif" },
  { step: "Mesure", description: "Analytics & optimisations" }
];

const skills = [
  { category: "Front", items: "Next.js, TypeScript, Tailwind, shadcn" },
  { category: "Back", items: "Node, Supabase Postgres (RLS), Stripe" },
  { category: "IA", items: "Vercel AI SDK, OpenAI/OpenRouter, structuration prompts" }
];

const timeline = [
  {
    period: "2023",
    title: "Débuts freelance",
    description: "Premiers projets clients/POC avec focus qualité"
  },
  {
    period: "2024", 
    title: "Spécialisation IA",
    description: "Intégration agents IA dans SaaS production-ready"
  },
  {
    period: "2024",
    title: "Lancement PromptFix",
    description: "MVP d'optimisation de prompts - retours positifs"
  },
  {
    period: "2025",
    title: "Construction Éclipser",
    description: "SaaS IA avancé - en développement"
  }
];

const testimonials = [
  {
    text: "Livraison rapide avec une attention remarquable aux détails techniques",
    author: "Client SaaS IA",
    role: "Founder"
  },
  {
    text: "Code propre et maintenable, intégrations Stripe/Supabase parfaites",
    author: "Startup B2B",
    role: "CTO"
  }
];

const faqItems = [
  {
    question: "Délais typiques ?",
    answer: "MVP complet: 2-4 semaines. Landing + auth + paiements + IA chat: ~10 jours."
  },
  {
    question: "Stack préférée ?",
    answer: "Next.js 15, TypeScript, Supabase, Clerk, Stripe - stack éprouvée et scalable."
  },
  {
    question: "Modalités ?",
    answer: "Forfait ou TJM selon projet. Facturation fin de semaine, 50% acompte démarrage."
  }
];

export default function AboutPage() {
  return (
    <PageLayout className="px-4 py-16 md:py-20">
      <div className="max-w-screen-lg mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <img 
            src="/avatar.jpg" 
            alt="Bryan Ducrettet - Freelance Full-stack & IA"
            className="mx-auto mb-6 h-24 w-24 rounded-full object-cover border-2 border-white/20"
          />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            À propos — Bryan Ducrettet
          </h1>
          <p className="text-xl opacity-80 mb-8">
            Freelance full-stack, focus SaaS IA & automation (remote/alternance)
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pitch Court */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="rounded-2xl h-full p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-accent-coral" />
                Pitch court
              </h2>
              <p className="text-gray-800/90 leading-relaxed">
                J&apos;aide à concevoir et livrer des <strong>MVP SaaS IA</strong> rapidement, 
                propres et scalables (Next.js, Supabase, Stripe, intégrations IA).
              </p>
            </GlassCard>
          </motion.div>

          {/* Projets Actuels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="rounded-2xl h-full p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-accent-coral" />
                Projets IA en cours
              </h2>
              <ul className="space-y-2 text-gray-800/90">
                <li>• <strong>Éclipser:</strong> SaaS IA avancé</li>
                <li>• <strong>PromptFix:</strong> Optimiseur de prompts</li>
                <li>• Livrables type: landing + auth + paiements + IA chat + démo</li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>

        {/* Ce que j'apporte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Ce que j&apos;apporte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIBring.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
              >
                <GlassCard className="rounded-2xl h-full text-center p-6">
                  <item.icon className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processus de travail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Processus de travail</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="glass rounded-lg px-4 py-3 bg-white/5 mb-2">
                      <div className="font-semibold text-gray-800">{step.step}</div>
                      <div className="text-xs opacity-70 text-gray-700">{step.description}</div>
                    </div>
                  </motion.div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-white/40 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Compétences & Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard className="rounded-2xl p-6 h-full">
              <h2 className="text-xl font-semibold mb-6">Compétences clés</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="font-semibold text-accent-coral min-w-[45px]">
                      {skill.category}:
                    </div>
                    <div className="text-gray-800/90 text-sm">
                      {skill.items}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <GlassCard className="rounded-2xl p-6 h-full">
              <h2 className="text-xl font-semibold mb-6">Timeline</h2>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.period}-${item.title}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.85 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-14 h-8 glass rounded-md flex items-center justify-center text-xs font-semibold bg-white/5">
                      {item.period}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-800">{item.title}</h3>
                      <p className="text-xs opacity-75 text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Témoignages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <GlassCard className="rounded-2xl p-6">
                  <Quote className="h-6 w-6 text-accent-coral mb-3" />
                  <p className="text-gray-800/90 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-coral/60 to-accent-blue/60" />
                    <div>
                      <div className="font-semibold text-sm text-gray-800">{testimonial.author}</div>
                      <div className="text-xs opacity-60 text-gray-700">{testimonial.role}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disponibilités & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-16"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Disponibilités & Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent-coral" />
                  Modalités
                </h3>
                <ul className="space-y-2 text-sm text-gray-800/90">
                  <li>• Remote, fuseau CET</li>
                  <li>• Alternance & missions courtes acceptées</li>
                  <li>• Email: ducrettetbryan1@gmail.com</li>
                  <li>• Réponse &lt; 24h</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="/cv"
                    className="btn btn-primary"
                    aria-label="Voir le CV complet de Bryan"
                  >
                    <FileText className="h-4 w-4" />
                    Voir le CV
                  </a>
                  <a 
                    href="mailto:ducrettetbryan1@gmail.com"
                    className="btn btn-secondary"
                    aria-label="Envoyer un email à Bryan"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bryan-ducrettet-a27872350/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    aria-label="Voir le profil LinkedIn de Bryan"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* FAQ rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-16"
        >
          <GlassCard className="rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-accent-coral" />
              FAQ rapide
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="glass rounded-lg p-4 bg-white/5"
                >
                  <h3 className="font-semibold text-accent-coral mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-800/85">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer légal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 text-sm opacity-60 mb-4">
            <FileText className="h-4 w-4" />
            <span>Mentions légales & RGPD disponibles sur demande</span>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}