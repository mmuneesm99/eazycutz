"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { appleEase, mobileMenu, mobileMenuItem } from "@/lib/motion";

const navItems = [
  { name: "Product", href: "#showcase" },
  { name: "Features", href: "#builder" },
  { name: "Research", href: "#journey" },
  { name: "Pricing", href: "#builder" },
  { name: "Support", href: "#cta" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: appleEase }}
        className="fixed top-0 left-0 right-0 z-50 apple-nav-bar-light border-b border-black/[0.08] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      >
        <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link
              href="/"
              onClick={close}
              className="shrink-0 inline-flex items-center py-1"
              aria-label="EazyCutz home"
            >
              <BrandLogo priority variant="nav" />
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center" aria-label="Main">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="apple-nav-link-light whitespace-nowrap">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link href="#cta" className="hidden sm:inline btn-primary text-[13px] sm:text-[15px] px-4 sm:px-5 py-2 min-h-[36px] sm:min-h-[38px]">
                Book a Demo
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                className="md:hidden flex h-9 w-9 items-center justify-center text-[#1d1d1f] rounded-full hover:bg-black/[0.04]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <span className="relative block h-[11px] w-[18px]">
                  <motion.span animate={isOpen ? { top: 5, rotate: 45 } : { top: 0, rotate: 0 }} transition={{ duration: 0.35, ease: appleEase }} className="absolute left-0 block h-[1.5px] w-full bg-current origin-center" />
                  <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="absolute left-0 top-[5px] block h-[1.5px] w-full bg-current" />
                  <motion.span animate={isOpen ? { top: 5, rotate: -45 } : { top: 10, rotate: 0 }} transition={{ duration: 0.35, ease: appleEase }} className="absolute left-0 block h-[1.5px] w-full bg-current origin-center" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm" onClick={close} />
            <motion.nav
              key="menu"
              initial="closed"
              animate="open"
              exit="exit"
              variants={mobileMenu}
              className="fixed inset-x-0 top-14 md:top-16 bottom-0 z-40 md:hidden bg-[#fbfbfd] overflow-y-auto border-t border-black/[0.08]"
              aria-label="Mobile"
            >
              <ul className="px-6 py-4">
                {navItems.map((item, i) => (
                  <motion.li key={item.name} custom={i} variants={mobileMenuItem} initial="closed" animate="open">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex py-3.5 text-[17px] text-[#1d1d1f] border-b border-black/[0.08]"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li custom={navItems.length} variants={mobileMenuItem} initial="closed" animate="open" className="pt-4">
                  <Link href="#cta" onClick={close} className="btn-primary w-full text-center py-3 text-[15px]">
                    Book a Demo
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
