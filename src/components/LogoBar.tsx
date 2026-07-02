"use client";

import { motion } from "framer-motion";

const salons = [
  "Aura Styling Co.",
  "The Cut & Shave",
  "Elena B. Color Lounge",
  "Bliss Hair Studio",
  "Urban Fade Barbers",
  "Luxe Salon Group",
];

export default function LogoBar() {
  return (
    <section className="relative py-10 bg-white dark:bg-brand-primary border-y border-brand-border/40 dark:border-brand-border/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-brand-secondary dark:text-brand-light/50 mb-6">
          Trusted by forward-thinking salons across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {salons.map((name, idx) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="text-sm font-semibold text-brand-primary/40 dark:text-white/30 tracking-tight"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
