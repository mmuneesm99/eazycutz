"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PromoSection } from "@/components/layout/PromoSection";
import { appleEase } from "@/lib/motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <PromoSection
      id="cta"
      theme="dark"
      headline="Ready to run your salon smarter?"
      subheadline="14 days full access. No credit card. Free migration from your current software."
      visualClassName="pb-14 sm:pb-20"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: appleEase }}
            className="mx-auto max-w-[440px] px-5 sm:px-6"
          >
            <div className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-xl bg-white/10 border border-white/15">
              <input
                type="email"
                required
                placeholder="you@yoursalon.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:ring-2 focus:ring-brand-violet/40"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary whitespace-nowrap px-6"
              >
                Request demo
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-[440px] px-5 sm:px-6 rounded-xl bg-white/10 border border-white/15 p-6 text-left"
          >
            <p className="text-[15px] text-white">
              Thank you — we&apos;ll reach out at <span className="font-semibold text-brand-accent">{email}</span> within one business day.
            </p>
            <Link href="#showcase" className="apple-link text-brand-accent inline-block mt-4">
              Explore the product ›
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </PromoSection>
  );
}
