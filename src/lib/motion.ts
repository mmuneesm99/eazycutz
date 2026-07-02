import type { Transition, Variants } from "framer-motion";

/** Apple-style deceleration curve */
export const appleEase = [0.16, 1, 0.3, 1] as const;

export const appleTransition: Transition = {
  duration: 0.8,
  ease: appleEase,
};

export const appleTransitionSlow: Transition = {
  duration: 1.1,
  ease: appleEase,
};

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

export const heroStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

export const lineReveal: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: appleEase },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: appleTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: appleEase },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: appleTransitionSlow,
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: appleTransition,
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: appleTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.03,
    },
  },
};

export const mobileMenu: Variants = {
  closed: { opacity: 0, y: -12 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: appleEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

export const mobileMenuItem: Variants = {
  closed: { opacity: 0, x: -16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: appleEase, delay: 0.05 + i * 0.06 },
  }),
};
