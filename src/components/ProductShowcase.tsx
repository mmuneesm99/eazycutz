"use client";

import { motion } from "framer-motion";
import {
  BarChart3, Calendar, UserRoundCog, Users, PackageCheck,
  BadgePercent, Sparkles, Gift, ShieldCheck, Calculator,
  FileSpreadsheet, Network,
} from "lucide-react";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { PromoSection } from "@/components/layout/PromoSection";
import { images } from "@/lib/images";
import { fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const modules = [
  { label: "Dashboard & analytics", icon: BarChart3 },
  { label: "Appointments & bookings", icon: Calendar },
  { label: "Walk-in management", icon: UserRoundCog },
  { label: "Staff management", icon: Users },
  { label: "Inventory & consumables", icon: PackageCheck },
  { label: "Membership management", icon: BadgePercent },
  { label: "Package builder", icon: Sparkles },
  { label: "Loyalty points", icon: Gift },
  { label: "Customer CRM", icon: ShieldCheck },
  { label: "Billing & checkout", icon: Calculator },
  { label: "Reports & insights", icon: FileSpreadsheet },
  { label: "Multi-branch", icon: Network },
];

export default function ProductShowcase() {
  return (
    <PromoSection
      id="showcase"
      theme="light"
      headline="Your complete salon OS."
      subheadline="Twelve modules. Zero integrations to maintain."
      links={[
        { label: "Learn more", href: "#builder" },
        { label: "Book a demo", href: "#cta", primary: true, action: "book-demo" },
      ]}
      visualClassName="px-4 sm:px-6 max-w-[1280px] mx-auto pb-10 sm:pb-14"
    >
      <div className="mb-10 sm:mb-12">
        <ProductScreenshot
          src={images.product.dashboard}
          alt="EazyCutz complete salon operating system dashboard"
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 pb-12 sm:pb-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {modules.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-3 min-w-0 border border-black/[0.04]"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f7] text-brand-violet">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-[12px] sm:text-[13px] text-[#1d1d1f] font-normal leading-snug min-w-0 text-left">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PromoSection>
  );
}
