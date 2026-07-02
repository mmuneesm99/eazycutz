"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ProductDashboard } from "@/components/ui/ProductDashboard";
import { PromoSection } from "@/components/layout/PromoSection";
import { appleEase, fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const tabs = [
  { id: "membership", label: "Memberships" },
  { id: "package", label: "Packages" },
  { id: "loyalty", label: "Loyalty" },
  { id: "staff", label: "Staff" },
  { id: "inventory", label: "Inventory" },
];

const plans = [
  { name: "Gold", duration: "12 months", price: "₹9,999", services: ["Haircut", "Hair spa", "Beard styling", "Facial"] },
  { name: "Silver", duration: "6 months", price: "₹5,999", services: ["Haircut", "Beard styling"] },
  { name: "Premium", duration: "12 months", price: "₹12,999", services: ["Haircut", "Hair spa", "Beard styling", "Facial", "Hair color", "Scalp massage"] },
  { name: "Family", duration: "12 months", price: "₹15,999", services: ["2× Haircuts", "2× Hair spas", "2× Beard stylings", "2× Facials"] },
];

export default function MembershipBuilder() {
  const [activeTab, setActiveTab] = useState("membership");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = plans[selectedIndex];

  return (
    <PromoSection
      id="builder"
      theme="light"
      className="bg-white"
      headline="Recurring revenue, your way."
      subheadline="Build memberships, packages, and loyalty programs that fit how your salon actually runs."
      links={[
        { label: "Learn more", href: "#showcase" },
        { label: "Book a demo", href: "#cta", primary: true },
      ]}
      visualClassName="pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-[980px] px-5 sm:px-6 mb-8 border-b border-black/[0.08] overflow-x-auto scrollbar-none">
        <div className="flex min-w-max md:min-w-0 md:justify-center gap-6 md:gap-10 pb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative shrink-0 text-[14px] pb-3 -mb-px transition-colors ${
                activeTab === tab.id ? "text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d1d1f]" transition={{ duration: 0.35, ease: appleEase }} />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "membership" ? (
          <motion.div
            key="membership"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: appleEase }}
            className="mx-auto max-w-[980px] px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <ProductDashboard />
            </div>

            <div className="text-left">
              <motion.div className="space-y-0" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainerFast}>
                {plans.map((plan, idx) => (
                  <motion.button
                    key={plan.name}
                    variants={fadeUp}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between gap-3 py-4 border-b text-left transition-colors ${
                      selectedIndex === idx ? "border-[#1d1d1f]/30" : "border-black/[0.08] hover:border-black/[0.15]"
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="text-[17px] font-semibold text-[#1d1d1f]">{plan.name}</span>
                      <span className="text-[13px] text-[#6e6e73] ml-2 sm:ml-3">{plan.duration}</span>
                    </div>
                    <span className="text-[17px] font-semibold text-[#1d1d1f] tabular-nums shrink-0">{plan.price}</span>
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-5 rounded-xl bg-[#fbfbfd] border border-black/[0.06]"
                >
                  <p className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Includes</p>
                  <ul className="space-y-1.5">
                    {selected.services.map((s) => (
                      <li key={s} className="text-[15px] text-[#1d1d1f]">{s}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <Link href="#cta" className="apple-link text-brand-violet inline-block mt-5">
                See it in action ›
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 sm:px-6 text-center pb-8">
            <p className="apple-subhead text-[#6e6e73]">
              {tabs.find((t) => t.id === activeTab)?.label} — available in the live demo.
            </p>
            <Link href="#cta" className="apple-link text-brand-violet inline-block mt-4">
              Book a walkthrough ›
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </PromoSection>
  );
}
