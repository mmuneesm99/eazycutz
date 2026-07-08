"use client";

import { motion } from "framer-motion";
import {
  Store,
  Clock,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { fadeUp, staggerContainerFast } from "@/lib/motion";

const stats = [
  { value: "30+", label: "Salons visited", icon: Store },
  { value: "100+", label: "Hours of research", icon: Clock },
  { value: "200+", label: "People interviewed", icon: Users },
  { value: "500+", label: "Problems documented", icon: ClipboardList },
  { value: "1000+", label: "Design iterations", icon: Sparkles },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-black/[0.06]" data-nav-theme="light">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 py-8 sm:py-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainerFast}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={`text-center flex flex-col items-center ${
                  index === stats.length - 1
                    ? "col-span-2 sm:col-span-1 max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
                    : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple/10 text-brand-violet mb-3">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight text-[#1d1d1f] leading-none tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#6e6e73] mt-1.5">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
