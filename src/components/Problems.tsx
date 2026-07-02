"use client";

import { motion } from "framer-motion";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const problems = [
  { title: "Manual processes", description: "Receptionists lose hours to tasks that should take seconds. Clients wait longer than they should." },
  { title: "Staff management", description: "Scheduling conflicts, untracked commissions, and no visibility into stylist performance." },
  { title: "Inventory leakage", description: "Products consumed on the floor but never logged. Stock vanishes without a trace." },
  { title: "Customer retention", description: "No clear picture of who returns, who drifts away, or what keeps clients coming back." },
  { title: "Business blind spots", description: "Owners make decisions from gut feeling because the numbers live in five different places." },
];

export default function Problems() {
  return (
    <PromoSection
      id="problems"
      theme="light"
      eyebrow="What we found"
      headline="The problems ran deeper than software."
      links={[{ label: "See the solution", href: "#showcase" }]}
      visualClassName="pb-12 sm:pb-16"
    >
      <motion.ol
        className="mx-auto max-w-[720px] px-5 sm:px-6 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {problems.map((prob, idx) => (
          <motion.li
            key={prob.title}
            variants={fadeUp}
            className="grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-4 py-6 border-t border-black/[0.08] first:border-t-0"
          >
            <span className="text-lg font-semibold text-[#86868b] tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">{prob.title}</h3>
              <p className="text-[14px] text-[#6e6e73] mt-1.5 leading-relaxed">{prob.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </PromoSection>
  );
}
