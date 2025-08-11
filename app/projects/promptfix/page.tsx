"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Github, Zap, FileText, Download, AlertTriangle } from "lucide-react";

const DEMO_URL = "https://prompt-refine-bot.lovable.app";
const CODELENS_URL = "https://codelenss-d95pjl20w-ducrettet-bryans-projects.vercel.app";

const features = [
  {
    icon: Zap,
    title: "Optimisation structurée",
    description: "Analyse et améliore la structure de vos prompts pour de meilleurs résultats",
  },
  {
    icon: FileText,
    title: "Types de prompts",
    description: "Support pour prompts de code, d'agent IA, et de contenu créatif",
  },
  {
    icon: Download,
    title: "Export rapide",
    description: "Copiez ou exportez vos prompts optimisés en un clic",
  },
];

export default function PromptFixPage() {
  const [iframeError, setIframeError] = useState(false);
  const [codeLensError, setCodeLensError] = useState(true); // CodeLens bloque les iframes par défaut

  return (
    <PageLayout className="px-4 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Projets
          </h1>
        </motion.div>

        {/* PromptFix Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              PromptFix
            </h2>
            <p className="text-xl opacity-80 mb-2">
              Optimiseur de prompts IA
            </p>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Collez votre prompt, choisissez un type, obtenez une version optimisée pour de meilleurs résultats
            </p>
          </div>
        </motion.div>

        {/* Demo Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard className="rounded-2xl">
            <div className="text-center py-16">
              <Zap className="h-16 w-16 mx-auto mb-6 text-accent-coral" />
              <h3 className="text-xl font-semibold mb-4">Découvrir PromptFix</h3>
              <p className="text-sm opacity-80 mb-8 max-w-md mx-auto">
                Testez l'optimiseur de prompts IA pour améliorer vos interactions avec l'intelligence artificielle.
              </p>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="h-5 w-5" />
                Voir la démo
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Fonctionnalités</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <GlassCard className="rounded-2xl h-full text-center">
                  <feature.icon className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <GlassCard className="rounded-2xl">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">Informations techniques</h3>
                <div className="space-y-1 text-sm opacity-80">
                  <p><strong>Stack :</strong> Next.js, TypeScript, API OpenAI</p>
                  <p><strong>Statut :</strong> <span className="text-green-400">MVP live</span></p>
                  <p><strong>Déploiement :</strong> Vercel et Lovable</p>
                </div>
              </div>
              {/* Bouton supprimé selon demande */}
            </div>
          </GlassCard>
        </motion.div>

        {/* CodeLens Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              CodeLens
            </h2>
            <p className="text-xl opacity-80 mb-2">
              Analyseur de code IA
            </p>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Détecte automatiquement les erreurs, bugs et optimisations possibles dans votre code. Upload votre projet et recevez des corrections intelligentes en temps réel.
            </p>
          </div>

          {/* CodeLens Demo Integration */}
          <GlassCard className="rounded-2xl mb-8">
            <div className="text-center py-16">
              <FileText className="h-16 w-16 mx-auto mb-6 text-accent-coral" />
              <h3 className="text-xl font-semibold mb-4">Découvrir CodeLens</h3>
              <p className="text-sm opacity-80 mb-8 max-w-md mx-auto">
                Analysez votre code avec l'IA et obtenez des corrections automatiques intelligentes en temps réel.
              </p>
              <a
                href={CODELENS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="h-5 w-5" />
                Voir la démo
              </a>
            </div>
          </GlassCard>

          {/* CodeLens Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Fonctionnalités CodeLens</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard className="rounded-2xl h-full text-center">
                <FileText className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
                <h4 className="font-semibold mb-3">Analyse en temps réel</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Upload de fichiers individuels ou projets complets avec détection automatique du langage
                </p>
              </GlassCard>
              <GlassCard className="rounded-2xl h-full text-center">
                <Zap className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
                <h4 className="font-semibold mb-3">Correction automatique</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Interface de permission avec aperçu des modifications et boutons accepter/rejeter
                </p>
              </GlassCard>
              <GlassCard className="rounded-2xl h-full text-center">
                <Download className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
                <h4 className="font-semibold mb-3">Interface moderne</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Zone d'upload par glisser-déposer, diff coloré et code corrigé téléchargeable
                </p>
              </GlassCard>
            </div>
          </div>

          {/* CodeLens Tech Info */}
          <GlassCard className="rounded-2xl">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-2">Informations techniques CodeLens</h4>
                <div className="space-y-1 text-sm opacity-80">
                  <p><strong>Stack :</strong> Next.js 15, TypeScript, Claude API, React Dropzone</p>
                  <p><strong>Statut :</strong> <span className="text-green-400">MVP live</span></p>
                  <p><strong>Déploiement :</strong> Vercel</p>
                </div>
              </div>
              {/* Bouton supprimé selon demande */}
            </div>
          </GlassCard>
        </motion.div>

        {/* Portfolio updates info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <GlassCard className="rounded-2xl max-w-2xl mx-auto">
            <div className="text-center">
              <FileText className="h-8 w-8 mx-auto mb-4 text-accent-coral" />
              <h3 className="font-semibold text-lg mb-3">Portfolio en évolution</h3>
              <p className="text-sm opacity-85 leading-relaxed mb-4">
                Cette page sera régulièrement mise à jour avec de nouveaux projets au fur et à mesure 
                de leur développement. Actuellement en cours : <strong>Éclipser</strong> (SaaS IA avancé) 
                et d'autres projets clients.
              </p>
              <p className="text-xs opacity-60">
                Dernière mise à jour : Août 2025
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
}