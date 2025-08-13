"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  stagger?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Éléments apparaissent avec 50ms de décalage
      delayChildren: 0.05,
    }
  }
};

// const itemVariants = {
//   hidden: { 
//     opacity: 0, 
//     y: 20,
//     scale: 0.95
//   },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.2,
//       ease: [0.4, 0, 0.2, 1]
//     }
//   }
// };

export default function PageTransition({ children, stagger = false }: PageTransitionProps) {
  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}