"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { appleEase } from "@/lib/motion";

export type PromoLink = {
  label: string;
  href: string;
  primary?: boolean;
};

type PromoSectionProps = {
  id?: string;
  theme?: "light" | "dark" | "black";
  navTheme?: "dark" | "light";
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline?: string;
  links?: PromoLink[];
  className?: string;
  visualClassName?: string;
  children?: React.ReactNode;
};

const themes = {
  light: {
    section: "bg-[#fbfbfd] text-[#1d1d1f]",
    sub: "text-[#6e6e73]",
    eyebrow: "apple-eyebrow-light",
    link: "text-brand-violet hover:underline",
    primaryBtn: "btn-primary",
    ghostBtn: "inline-flex items-center justify-center rounded-full bg-[#1d1d1f] text-white text-[17px] font-normal px-5 py-2 hover:bg-[#333] transition-colors",
  },
  dark: {
    section: "bg-[#1d1d1f] text-white",
    sub: "text-[#a1a1a6]",
    eyebrow: "apple-eyebrow-dark",
    link: "text-brand-accent hover:underline",
    primaryBtn: "inline-flex items-center justify-center rounded-full bg-brand-violet text-white text-[17px] font-normal px-5 py-2 hover:bg-[#6d50e0] transition-colors",
    ghostBtn: "inline-flex items-center justify-center rounded-full border border-white/30 text-white text-[17px] font-normal px-5 py-2 hover:bg-white/10 transition-colors",
  },
  black: {
    section: "bg-black text-white",
    sub: "text-[#a1a1a6]",
    eyebrow: "apple-eyebrow-dark",
    link: "text-brand-accent hover:underline",
    primaryBtn: "inline-flex items-center justify-center rounded-full bg-brand-violet text-white text-[17px] font-normal px-5 py-2 hover:bg-[#6d50e0] transition-colors",
    ghostBtn: "inline-flex items-center justify-center rounded-full border border-white/30 text-white text-[17px] font-normal px-5 py-2 hover:bg-white/10 transition-colors",
  },
};

export function PromoSection({
  id,
  theme = "light",
  navTheme,
  eyebrow,
  headline,
  subheadline,
  links,
  className,
  visualClassName,
  children,
}: PromoSectionProps) {
  const t = themes[theme];
  const barTheme = navTheme ?? (theme === "light" ? "light" : "dark");

  return (
    <section
      id={id}
      data-nav-theme={barTheme}
      className={cn("apple-section", t.section, className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.7, ease: appleEase }}
        className="apple-copy"
      >
        {eyebrow && <p className={cn("apple-eyebrow", t.eyebrow)}>{eyebrow}</p>}
        <h2 className="apple-headline">{headline}</h2>
        {subheadline && <p className={cn("apple-subhead", t.sub)}>{subheadline}</p>}
        {links && links.length > 0 && (
          <div className="apple-cta-row">
            {links.map((link) =>
              link.primary ? (
                <Link key={link.label} href={link.href} className={t.primaryBtn}>
                  {link.label}
                </Link>
              ) : (
                <Link key={link.label} href={link.href} className={cn("apple-link", t.link)}>
                  {link.label} ›
                </Link>
              )
            )}
          </div>
        )}
      </motion.div>
      {children && (
        <div className={cn("apple-visual", visualClassName)}>{children}</div>
      )}
    </section>
  );
}
