"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarClock,
  Package,
  UsersRound,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const problems: {
  icon: LucideIcon;
  title: string;
  description: string;
  consequences: string[];
}[] = [
  {
    icon: Users,
    title: "Manual processes slow everyone down.",
    description: "Too many repetitive tasks steal time from what really matters.",
    consequences: ["Longer queues", "Slower checkout", "Frustrated customers"],
  },
  {
    icon: CalendarClock,
    title: "Managing staff is more guesswork than insight.",
    description: "Scheduling conflicts, unclear commissions, and no visibility into performance.",
    consequences: ["Scheduling conflicts", "Low productivity", "Poor visibility"],
  },
  {
    icon: Package,
    title: "Inventory disappears without a trace.",
    description: "Products are used daily but not tracked accurately.",
    consequences: ["Inventory leakage", "Overstocking", "Revenue loss"],
  },
  {
    icon: UsersRound,
    title: "Customers slip away silently.",
    description: "No clarity on who returns, who goes inactive, or what keeps them coming back.",
    consequences: ["Lower retention", "Lost repeat revenue", "Missed opportunities"],
  },
  {
    icon: BarChart3,
    title: "Decisions are made in the dark.",
    description: "Important data lives in different places, not in one clear picture.",
    consequences: ["Poor decisions", "Missed trends", "Slower growth"],
  },
];

export default function Problems() {
  return (
    <PromoSection
      id="problems"
      theme="light"
      className="bg-white"
      eyebrow="What we discovered"
      headline={
        <>
          Behind every busy salon,{" "}
          <span className="text-brand-violet">real challenges.</span>
        </>
      }
      subheadline="We spent months inside salons observing operations, listening to teams, and uncovering what truly holds them back."
      links={[{ label: "See how we solve them", href: "#builder" }]}
      visualClassName="pb-12 sm:pb-16"
    >
      <motion.div
        className="mx-auto max-w-[960px] px-4 sm:px-5 rounded-2xl border border-black/[0.08] bg-[#fbfbfd] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {problems.map((prob, idx) => {
          const Icon = prob.icon;
          return (
            <motion.div
              key={prob.title}
              variants={fadeUp}
              className={`flex items-start gap-4 sm:gap-5 px-4 sm:px-6 py-5 sm:py-6 ${
                idx > 0 ? "border-t border-black/[0.08]" : ""
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 shrink-0 pt-0.5">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-purple/10">
                  <span className="text-[11px] sm:text-[12px] font-semibold text-brand-violet tabular-nums leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-purple/10">
                  <Icon className="h-5 w-5 text-brand-violet" strokeWidth={1.75} aria-hidden />
                </div>
              </div>

              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1d1d1f] leading-snug">
                  {prob.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] mt-1.5 leading-relaxed">{prob.description}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3">
                  {prob.consequences.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#6e6e73]"
                    >
                      <span className="text-brand-violet text-[10px] leading-none" aria-hidden>
                        •
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </PromoSection>
  );
}
