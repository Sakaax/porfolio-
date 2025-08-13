"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "./PageTransition";

interface PageLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  className?: string;
}

export default function PageLayout({ children, showBackButton = true, className = "" }: PageLayoutProps) {
  const router = useRouter();

  // Restaurer le dark mode sur toutes les pages
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === null) {
      // Par défaut dark mode activé
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else if (savedDarkMode === 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const handleBack = () => {
    // Utiliser l'historique du navigateur si disponible, sinon retour à l'accueil
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen relative">

        {/* Back button */}
        {showBackButton && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05, duration: 0.2 }}
            className="fixed top-6 left-6 z-50"
          >
            <motion.button 
              onClick={handleBack}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-gray-800/90 hover:text-gray-800 hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-gray-800/50 focus-visible:outline-offset-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </motion.button>
          </motion.div>
        )}

        {/* Main content */}
        <main className={`relative z-10 ${className}`}>
          {children}
        </main>
      </div>
    </PageTransition>
  );
}