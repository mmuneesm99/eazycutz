"use client";

import { motion } from "framer-motion";
import { PromoSection } from "@/components/layout/PromoSection";
import { useContactModal } from "@/context/ContactModalContext";
import { appleEase } from "@/lib/motion";

export default function CTA() {
  const { openModal } = useContactModal();

  return (
    <PromoSection
      id="cta"
      theme="dark"
      headline="Ready to run your salon smarter?"
      subheadline="14 days full access. No credit card. Free migration from your current software."
      visualClassName="pb-14 sm:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: appleEase }}
        className="mx-auto max-w-[440px] px-5 sm:px-6 text-center"
      >
        <button
          type="button"
          onClick={openModal}
          className="btn-primary px-8 py-3 text-[16px]"
        >
          Book a Demo
        </button>
        <p className="text-[13px] text-[#a1a1a6] mt-4 leading-relaxed">
          Tell us about your salon — we&apos;ll set up a personalized walkthrough.
        </p>
      </motion.div>
    </PromoSection>
  );
}
