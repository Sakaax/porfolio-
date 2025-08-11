"use client";
import { motion } from "framer-motion";

export default function LoadingShimmer() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
      animate={{
        translateX: ["100vw", "-100vw"],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      style={{
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}