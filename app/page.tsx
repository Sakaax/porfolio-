"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import GlassCard from "@/components/GlassCard";
import { Github, Mail, FileDown, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import { usePreloadPages } from "@/hooks/usePreloadPages";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved === null) {
        // Par défaut dark mode activé
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
        return true;
      }
      const isDarkSaved = saved === 'true';
      if (isDarkSaved) {
        document.body.classList.add('dark');
      }
      return isDarkSaved;
    }
    return true; // Par défaut dark mode même côté serveur
  });
  const [cardPositions, setCardPositions] = useState({
    promptfix: { x: 0, y: 0 },
    stack: { x: 0, y: 0 },
    about: { x: 0, y: 0 },
    contact: { x: 0, y: 0 }
  });
  const [isDragging, setIsDragging] = useState(false);
  const [lines, setLines] = useState<any[]>([]);
  const updateLinesRef = useRef<NodeJS.Timeout | null>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({
    promptfix: null,
    stack: null,
    about: null,
    contact: null
  });
  
  // Navigation et préchargement des pages
  const router = useRouter();
  const { preloadPage } = usePreloadPages();

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Distance maximale pour les contraintes (en pixels)
  const MAX_DRAG_DISTANCE = 150;

  // Calculer les lignes de connexion
  const updateLines = useCallback(() => {
    if (!circleRef.current) return;

    const circleRect = circleRef.current.getBoundingClientRect();
    const centerX = circleRect.left + circleRect.width / 2;
    const centerY = circleRect.top + circleRect.height / 2;

    const newLines = Object.entries(cardPositions).map(([cardKey, position]) => {
      if (position.x === 0 && position.y === 0) return null;

      const cardElement = cardRefs.current[cardKey];
      if (!cardElement) return null;

      const cardRect = cardElement.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 + position.x;
      const cardCenterY = cardRect.top + cardRect.height / 2 + position.y;

      return {
        key: cardKey,
        x1: centerX,
        y1: centerY,
        x2: cardCenterX,
        y2: cardCenterY,
      };
    }).filter(Boolean);

    setLines(newLines);
  }, [cardPositions]);

  useEffect(() => {
    if (!isDragging) {
      // Si on n'est plus en drag, effacer les lignes
      setLines([]);
      return;
    }
    
    if (updateLinesRef.current) {
      clearTimeout(updateLinesRef.current);
    }
    updateLinesRef.current = setTimeout(() => {
      updateLines();
      updateLinesRef.current = null;
    }, 16); // ~60fps
    
    return () => {
      if (updateLinesRef.current) {
        clearTimeout(updateLinesRef.current);
      }
    };
  }, [cardPositions, isDragging, updateLines]);

  useEffect(() => {
    const handleResize = () => updateLines();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateLines]);

  return (
    <PageTransition>
      {/* Préchargement optimisé */}
      <Head>
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/stack" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/cv" />
        <link rel="prefetch" href="/projects/promptfix" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="" />
      </Head>
      
    <main className="px-4 py-12 min-h-screen grid place-items-center relative">
      
      {/* Lignes de connexion SVG */}
      <svg className="fixed inset-0 pointer-events-none z-20" style={{ width: '100vw', height: '100vh' }}>
        {lines.map((line) => (
          <g key={line.key}>
            {/* Ligne de fond floue pour l'effet glow */}
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(255,122,124,0.2)"}
              strokeWidth="6"
              className="blur-sm"
            />
            {/* Ligne principale */}
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={isDark ? "rgba(255,255,255,0.5)" : "rgba(255,122,124,0.6)"}
              strokeWidth="2"
              strokeDasharray="10,8"
              className="opacity-90"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
          </g>
        ))}
      </svg>
      {/* Décor de blobs derrière le cercle - alignés avec le layout circulaire */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* Blob corail à gauche, aligné avec les cartes de gauche */}
        <div className="absolute left-[10%] top-[30%] h-[400px] w-[400px] rounded-full blur-3xl opacity-25"
             style={{background: "radial-gradient(closest-side, rgba(255,122,124,.4), rgba(255,122,124,.1) 60%, transparent)"}} />
        
        {/* Blob bleu à droite, aligné avec les cartes de droite */}
        <div className="absolute right-[8%] top-[25%] h-[450px] w-[450px] rounded-full blur-3xl opacity-20"
             style={{background: "radial-gradient(closest-side, rgba(144,180,198,.45), rgba(144,180,198,.08) 65%, transparent)"}} />
        
        {/* Blob beige en arrière du centre pour la chaleur */}
        <div className="absolute left-1/2 top-[15%] -translate-x-1/2 h-[350px] w-[350px] rounded-full blur-3xl opacity-15"
             style={{background: "radial-gradient(closest-side, rgba(233,227,219,.3), transparent 70%)"}} />
      </div>


      {/* Conteneur circulaire vrai : rounded-full EN DERNIER */}
      <div ref={circleRef} className="relative w-[min(1100px,95vw)] aspect-square glass neo rounded-full p-6">
        
        {/* Bouton Dark Mode - positionné en haut de la bordure du cercle */}
        <button 
          onClick={toggleDarkMode}
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 rounded-full p-3 hover:scale-105 transition-all duration-200 shadow-lg"
          aria-label="Basculer le mode sombre"
          style={{
            background: isDark ? 'rgba(40,40,45,0.9)' : 'rgba(255,255,255,0.8)',
            border: isDark ? '2px solid rgba(255,255,255,0.2)' : '2px solid rgba(0,0,0,0.1)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
        </button>
        {/* Anneau lumineux subtil multi-couches */}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/12" />
        <div className="pointer-events-none absolute inset-[2px] rounded-full ring-1 ring-white/8" />
        <div className="pointer-events-none absolute inset-[6px] rounded-full bg-white/3 opacity-40" />
        
        {/* Reflet interne ultra-faible pour plus de profondeur */}
        <div className="pointer-events-none absolute inset-[12px] rounded-full"
             style={{background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,.02) 0%, transparent 60%)"}} />

        {/* Hero central */}
        <div className="absolute left-[15%] right-[15%] top-[25%] bottom-[25%] xl:left-[20%] xl:right-[20%] xl:top-[30%] xl:bottom-[30%]">
          <GlassCard className="rounded-[24px] h-full w-full grid place-items-center text-center">
          <div className="max-w-lg px-6">
            <img 
              src="/avatar.jpg" 
              alt="Bryan Ducrettet - Freelance Full-stack & IA"
              className="mx-auto mb-5 h-16 w-16 rounded-full object-cover border-2 border-white/20"
            />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">Bryan — Full-stack & IA</h1>
            <p className="mt-3 text-sm md:text-base opacity-85 leading-relaxed">Next.js • Tailwind • Supabase • Stripe • IA agents</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link 
                href="/cv"
                className="btn btn-primary text-sm"
              >
                <FileDown className="h-4 w-4" />Voir le CV
              </Link>
              <a className="btn btn-secondary text-sm" href="mailto:ducrettetbryan1@gmail.com"><Mail className="h-4 w-4" />Me contacter</a>
            </div>
            <div className="mt-4 flex justify-center gap-4 opacity-90 text-sm">
              <a className="inline-flex items-center gap-2 hover:opacity-100" href="https://github.com/Sakaax" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />GitHub
              </a>
            </div>
          </div>
          </GlassCard>
        </div>

        {/* Cartes périphériques draggables */}
        <motion.div
          ref={(el) => (cardRefs.current.promptfix = el)}
          data-card="promptfix"
          drag
          dragConstraints={{ left: -MAX_DRAG_DISTANCE, right: MAX_DRAG_DISTANCE, top: -MAX_DRAG_DISTANCE, bottom: MAX_DRAG_DISTANCE }}
          dragElastic={0.2}
          dragMomentum={false}
          dragSnapToOrigin={true}
          initial={{ x: 0, y: 0 }}
          onDragStart={() => {
            setIsDragging(true);
            document.body.style.userSelect = 'none';
          }}
          onDragEnd={() => {
            // Arrêter immédiatement le drag et effacer les lignes
            setIsDragging(false);
            document.body.style.userSelect = '';
            // Reset cardPositions pour les lignes
            setCardPositions(prev => ({
              ...prev,
              promptfix: { x: 0, y: 0 }
            }));
          }}
          onDrag={(_, info) => {
            if (!isDragging) return; // Prévenir les mises à jour si pas en drag
            setCardPositions(prev => ({
              ...prev,
              promptfix: { x: info.offset.x, y: info.offset.y }
            }));
          }}
          animate={{ x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 30, mass: 1.5 }}
          className="absolute left-[8%] top-[10%] w-[34%] xl:left-[12%] xl:top-[12%] xl:w-[26%] group focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2 rounded-2xl cursor-grab active:cursor-grabbing"
          onMouseEnter={() => preloadPage("/projects/promptfix")}
          onClick={() => {
            if (!isDragging) {
              router.push("/projects/promptfix");
            }
          }}
        >
          <GlassCard className="rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-focus-visible:scale-[1.02] select-none">
            <h3 className="font-medium mb-2 select-none">Projet</h3>
            <div className="mt-3 text-sm text-accent-coral select-none">Voir le projet →</div>
          </GlassCard>
        </motion.div>

        <motion.div
          ref={(el) => (cardRefs.current.stack = el)}
          data-card="stack"
          drag
          dragConstraints={{ left: -MAX_DRAG_DISTANCE, right: MAX_DRAG_DISTANCE, top: -MAX_DRAG_DISTANCE, bottom: MAX_DRAG_DISTANCE }}
          dragElastic={0.2}
          dragMomentum={false}
          dragSnapToOrigin={true}
          initial={{ x: 0, y: 0 }}
          onDragStart={() => {
            setIsDragging(true);
            document.body.style.userSelect = 'none';
          }}
          onDragEnd={() => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            setCardPositions(prev => ({ ...prev, stack: { x: 0, y: 0 } }));
          }}
          onDrag={(_, info) => {
            if (!isDragging) return; // Prévenir les mises à jour si pas en drag
            setCardPositions(prev => ({ ...prev, stack: { x: info.offset.x, y: info.offset.y } }));
          }}
          animate={{ x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 30, mass: 1.5 }}
          className="absolute right-[8%] top-[10%] w-[34%] xl:right-[12%] xl:top-[12%] xl:w-[26%] group focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2 rounded-2xl cursor-grab active:cursor-grabbing"
          onMouseEnter={() => preloadPage("/stack")}
          onClick={() => {
            if (!isDragging) {
              router.push("/stack");
            }
          }}
        >
          <GlassCard className="rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-focus-visible:scale-[1.02] select-none">
            <h3 className="font-medium mb-2 select-none">Stack & compétences</h3>
            <div className="mt-3 text-sm text-accent-coral select-none">Voir la stack →</div>
          </GlassCard>
        </motion.div>

        <motion.div
          ref={(el) => (cardRefs.current.about = el)}
          data-card="about"
          drag
          dragConstraints={{ left: -MAX_DRAG_DISTANCE, right: MAX_DRAG_DISTANCE, top: -MAX_DRAG_DISTANCE, bottom: MAX_DRAG_DISTANCE }}
          dragElastic={0.2}
          dragMomentum={false}
          dragSnapToOrigin={true}
          initial={{ x: 0, y: 0 }}
          onDragStart={() => {
            setIsDragging(true);
            document.body.style.userSelect = 'none';
          }}
          onDragEnd={() => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            setCardPositions(prev => ({ ...prev, about: { x: 0, y: 0 } }));
          }}
          onDrag={(_, info) => {
            if (!isDragging) return; // Prévenir les mises à jour si pas en drag
            setCardPositions(prev => ({ ...prev, about: { x: info.offset.x, y: info.offset.y } }));
          }}
          animate={{ x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 30, mass: 1.5 }}
          className="absolute left-[8%] bottom-[10%] w-[34%] xl:left-[12%] xl:bottom-[12%] xl:w-[26%] group focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2 rounded-2xl cursor-grab active:cursor-grabbing"
          onMouseEnter={() => preloadPage("/about")}
          onClick={() => {
            if (!isDragging) {
              router.push("/about");
            }
          }}
        >
          <GlassCard className="rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-focus-visible:scale-[1.02] select-none">
            <h3 className="font-medium mb-2 select-none">À propos</h3>
            <div className="mt-3 text-sm text-accent-coral select-none">En savoir plus →</div>
          </GlassCard>
        </motion.div>

        <motion.div
          ref={(el) => (cardRefs.current.contact = el)}
          data-card="contact"
          drag
          dragConstraints={{ left: -MAX_DRAG_DISTANCE, right: MAX_DRAG_DISTANCE, top: -MAX_DRAG_DISTANCE, bottom: MAX_DRAG_DISTANCE }}
          dragElastic={0.2}
          dragMomentum={false}
          dragSnapToOrigin={true}
          initial={{ x: 0, y: 0 }}
          onDragStart={() => {
            setIsDragging(true);
            document.body.style.userSelect = 'none';
          }}
          onDragEnd={() => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            setCardPositions(prev => ({ ...prev, contact: { x: 0, y: 0 } }));
          }}
          onDrag={(_, info) => {
            if (!isDragging) return; // Prévenir les mises à jour si pas en drag
            setCardPositions(prev => ({ ...prev, contact: { x: info.offset.x, y: info.offset.y } }));
          }}
          animate={{ x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 30, mass: 1.5 }}
          className="absolute right-[8%] bottom-[10%] w-[34%] xl:right-[12%] xl:bottom-[12%] xl:w-[26%] group focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2 rounded-2xl cursor-grab active:cursor-grabbing"
          onMouseEnter={() => preloadPage("/contact")}
          onClick={() => {
            if (!isDragging) {
              router.push("/contact");
            }
          }}
        >
          <GlassCard className="rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-focus-visible:scale-[1.02] select-none">
            <h3 className="font-medium mb-2 select-none">Contact</h3>
            <div className="mt-3 text-sm text-accent-coral select-none">Discutons de votre projet →</div>
          </GlassCard>
        </motion.div>
      </div>

    </main>
    </PageTransition>
  );
}
