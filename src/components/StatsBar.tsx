"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainerFast } from "@/lib/motion";

const stats = [
  { value: "30+", label: "Salons visited" },
  { value: "100+", label: "Hours of research" },
  { value: "200+", label: "People interviewed" },
  { value: "500+", label: "Problems documented" },
  { value: "1000+", label: "Design iterations" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#fbfbfd] border-b border-black/[0.06]" data-nav-theme="light">
      <div className="mx-auto max-w-[980px] px-5 sm:px-6 py-8 sm:py-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerFast}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`text-center ${
                index === stats.length - 1 ? "col-span-2 sm:col-span-1 max-w-[200px] sm:max-w-none mx-auto sm:mx-0" : ""
              }`}
            >
              <div className="text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight text-[#1d1d1f] leading-none tabular-nums">
                {stat.value}
              </div>
              <div className="text-[12px] text-[#6e6e73] mt-1.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
