"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar, CreditCard, MessageSquare, Calculator,
  ClipboardList, ShieldCheck, Users, Package,
} from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { SectionReveal } from "@/components/motion/SectionReveal";

const bento = [
  {
    icon: Calendar,
    title: "Client booking",
    description: "24/7 online booking that matches your brand. Clients self-serve; your calendar stays full.",
    className: "md:col-span-2 md:row-span-2",
    accent: "from-brand-purple/10 to-transparent",
  },
  {
    icon: CreditCard,
    title: "Memberships",
    description: "Custom plans, recurring billing, usage tracking.",
    className: "md:col-span-1",
    accent: "from-violet-500/10 to-transparent",
  },
  {
    icon: MessageSquare,
    title: "Auto follow-up",
    description: "SMS confirmations and review prompts.",
    className: "md:col-span-1",
    accent: "from-indigo-500/10 to-transparent",
  },
  {
    icon: Calculator,
    title: "Payroll & commissions",
    description: "Splits, tips, and tier targets — calculated automatically.",
    className: "md:col-span-1",
    accent: "from-purple-500/10 to-transparent",
  },
  {
    icon: ClipboardList,
    title: "Formula vault",
    description: "Secure color formulas and client history.",
    className: "md:col-span-1",
    accent: "from-fuchsia-500/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Inventory alerts",
    description: "Track depletion before shelves run empty.",
    className: "md:col-span-1",
    accent: "from-brand-purple/10 to-transparent",
  },
  {
    icon: Users,
    title: "Staff management",
    description: "Scheduling, performance, and chair utilization in one place.",
    className: "md:col-span-1",
    accent: "from-violet-500/10 to-transparent",
  },
  {
    icon: Package,
    title: "Multi-branch",
    description: "Unified reporting across every location.",
    className: "md:col-span-1",
    accent: "from-indigo-500/10 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <SectionReveal className="content-width text-center mb-14 md:mb-20">
        <p className="text-eyebrow">Capabilities</p>
        <h2 className="text-section text-brand-text mt-3">
          Everything your salon needs.
        </h2>
        <p className="text-headline text-brand-secondary mt-4 max-w-[560px] mx-auto">
          One system replacing the stack of apps your front desk juggles every day.
        </p>
      </SectionReveal>

      <motion.div
        className="page-width grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {bento.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`bento-card group ${item.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-purple mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text tracking-tight">{item.title}</h3>
                <p className="text-body text-brand-secondary mt-2 leading-relaxed">{item.description}</p>
                {item.className.includes("row-span-2") && (
                  <Link href="#showcase" className="text-link inline-flex items-center gap-1 mt-6">
                    Explore product →
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
