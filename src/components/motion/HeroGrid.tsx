"use client";

import { motion } from "framer-motion";

export function HeroGrid() {
  return (
    <>
      <motion.div
        className="absolute inset-0 saas-grid pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 h-[55%] saas-grid-floor pointer-events-none"
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-[320px] h-[320px] rounded-full bg-brand-violet/20 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[25%] right-[8%] w-[280px] h-[280px] rounded-full bg-brand-purple/25 blur-[90px] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}
