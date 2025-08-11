"use client";
import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import PageLayout from "@/components/PageLayout";
import { 
  Code2, Database, Shield, Zap, 
  TestTube, Cloud, Eye, Palette, Lock, BarChart3,
  CheckCircle, Lightbulb
} from "lucide-react";

const techSections = [
  {
    icon: Code2,
    title: "Frontend",
    tech: "Next.js 15 (App Router), TypeScript, TailwindCSS, Lucide, Framer Motion",
    why: "Rendu hybride (SSR/ISR), DX rapide, design system utilitaire, animations légères"
  },
  {
    icon: Database,
    title: "Backend & Données",
    tech: "Node.js, Supabase Postgres (RLS), Prisma, Edge Functions",
    why: "Schémas versionnés, migrations propres, politiques RLS strictes"
  },
  {
    icon: Shield,
    title: "Auth & Paiements",
    tech: "Clerk (auth), Stripe (abonnements)",
    why: "Webhooks sécurisés, essais, gestion des plans, portail client Stripe"
  },
  {
    icon: Zap,
    title: "IA & Intégrations",
    tech: "Vercel AI SDK, OpenAI, OpenRouter, workflows d'agents (Claude Code)",
    why: "Prompts versionnés, garde-fous, logs d'inférences"
  },
  {
    icon: TestTube,
    title: "Qualité & Tests",
    tech: "ESLint strict, TS strict, tests unitaires (Zod validation), pré-commit",
    why: "Budget perfs: LCP < 2.5s, CLS < 0.1, Lighthouse ≥ 90 mobile"
  },
  {
    icon: Cloud,
    title: "CI/CD & Hébergement",
    tech: "Vercel (préviews), GitHub Actions (lint/build/test), env secrets",
    why: "Branches protégées, PR review"
  },
  {
    icon: Eye,
    title: "Accessibilité & i18n",
    tech: "Sémantique, focus-visible, labels explicites, contrastes",
    why: "Support prefers-reduced-motion, option i18n FR/EN"
  },
  {
    icon: Palette,
    title: "Design System",
    tech: "Tokens: corail #ff7a7c, bleu #90b4c6, beige #e9e3db, bg #0e1116",
    why: "Rayons, ombres, espacement (xs→xl), composants réutilisables"
  },
  {
    icon: Lock,
    title: "Sécurité",
    tech: "Secrets serveur only, CORS strict, rate-limit endpoints, validation Zod",
    why: "Journalisation erreurs serveur + traçage minimal"
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    tech: "Titres/meta par page, OpenGraph, favicon, analytics léger",
    why: "Robots.txt & sitemap, optimisation référencement"
  }
];

const patterns = [
  "Cards glassmorphiques réutilisables",
  "Modals avec backdrop blur",
  "Toasts système de notifications",
  "Forms avec validation Zod",
  "Loading states avec Suspense",
  "Error boundaries personnalisés"
];

export default function StackPage() {
  return (
    <PageLayout className="px-4 py-16 md:py-20">
      <div className="max-w-screen-lg mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Stack & Outils
          </h1>
          <p className="text-xl opacity-80 mb-2">Production-ready</p>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Un socle moderne, maintenable et orienté produit
          </p>
        </motion.div>

        {/* Tech Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {techSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <GlassCard className="rounded-2xl h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <section.icon className="h-8 w-8 text-accent-coral" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm opacity-60 mb-1">Tech:</p>
                        <p className="text-sm text-gray-800/90 leading-relaxed">
                          {section.tech}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm opacity-60 mb-1">Pourquoi:</p>
                        <p className="text-sm text-gray-800/80 leading-relaxed">
                          {section.why}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Patterns UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16"
        >
          <GlassCard className="rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-accent-coral" />
              <h3 className="font-semibold text-xl">Patterns & Composants</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {patterns.map((pattern, index) => (
                <motion.div
                  key={pattern}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  className="flex items-center gap-2 glass rounded-lg p-3 bg-white/5"
                >
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-800/90">{pattern}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <GlassCard className="rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold mb-3">Stack en évolution constante</h3>
            <p className="text-sm opacity-80">
              Cette stack est continuellement mise à jour selon les projets et les dernières technologies production-ready.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
}