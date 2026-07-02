"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

type FadeInViewProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

/** Scroll-triggered reveal — always starts hidden */
export function FadeInView({ children, delay = 0, className, ...props }: FadeInViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
