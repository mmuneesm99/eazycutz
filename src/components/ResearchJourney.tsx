"use client";

import { motion } from "framer-motion";
import {
  Store,
  MessageCircle,
  Eye,
  SearchCheck,
  Pencil,
  Rocket,
} from "lucide-react";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const processSteps = [
  {
    icon: Store,
    number: "01",
    title: "Discover",
    description: "Visited salons across different business sizes.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Listen",
    description: "Interviewed owners, stylists, and receptionists.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Observe",
    description: "Studied everyday operations and workflows.",
  },
  {
    icon: SearchCheck,
    number: "04",
    title: "Validate",
    description: "Confirmed recurring challenges across salons.",
  },
  {
    icon: Pencil,
    number: "05",
    title: "Design",
    description: "Built intuitive solutions around real needs.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Improve",
    description: "Continuously evolving through customer feedback.",
  },
];

export default function ResearchJourney() {
  return (
    <PromoSection
      id="journey"
      theme="black"
      eyebrow="Our research journey"
      headline={
        <>
          Every feature starts with a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4b5fd] to-[#a78bfa]">
            real problem.
          </span>
        </>
      }
      subheadline="Before building EazyCutz, we spent months inside salons observing operations, listening to teams, and validating real business challenges."
      visualClassName="pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
        <motion.ol
          className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          <div
            className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-px border-t border-dashed border-white/20"
            aria-hidden
          />
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <span className="text-[11px] font-semibold text-brand-accent tracking-wider mb-3">
                  {step.number}
                </span>
                <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 mb-4">
                  <Icon className="h-5 w-5 text-brand-accent" aria-hidden />
                </div>
                <p className="text-[14px] sm:text-[15px] font-semibold text-white">{step.title}</p>
                <p className="text-[12px] sm:text-[13px] text-[#a1a1a6] mt-1.5 leading-relaxed max-w-[160px]">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </PromoSection>
  );
}
