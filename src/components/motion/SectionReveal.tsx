"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { appleTransition, viewport } from "@/lib/motion";

type SectionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function SectionReveal({
  children,
  delay = 0,
  className,
  ...props
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...appleTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
