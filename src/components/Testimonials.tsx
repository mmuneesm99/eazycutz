"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { SectionReveal } from "@/components/motion/SectionReveal";

const testimonials = [
  {
    quote: "EazyCutz saved us 18 hours of admin in the first month. Our blowout membership doubled recurring revenue.",
    author: "Sarah K.",
    role: "Owner, Aura Styling Co.",
    metric: "+120% MRR",
  },
  {
    quote: "Commission splits and tip tracking happen automatically now. Our back office runs itself.",
    author: "Michael R.",
    role: "Founder, The Cut & Shave Co.",
    metric: "18h saved / mo",
  },
  {
    quote: "Client retention is up 40% since we launched memberships. Bookings and reminders just work.",
    author: "Elena B.",
    role: "Art Director, Elena B. Color Lounge",
    metric: "+40% retention",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <SectionReveal className="content-width text-center mb-14 md:mb-16">
        <p className="text-eyebrow">Testimonials</p>
        <h2 className="text-section text-brand-text mt-3">From the chair.</h2>
      </SectionReveal>

      <motion.div
        className="page-width grid grid-cols-1 md:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.author}
            variants={fadeUp}
            className="bento-card flex flex-col justify-between min-h-[280px]"
          >
            <p className="text-body text-brand-text leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-8 pt-6 border-t border-brand-border/60 flex items-end justify-between gap-4">
              <div>
                <cite className="not-italic text-sm font-semibold text-brand-text">{t.author}</cite>
                <p className="text-caption text-brand-secondary mt-0.5">{t.role}</p>
              </div>
              <span className="text-caption font-semibold text-brand-purple whitespace-nowrap">{t.metric}</span>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
}
