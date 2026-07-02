"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductDashboard } from "@/components/ui/ProductDashboard";
import { MobileSchedule } from "@/components/ui/MobileSchedule";
import { images } from "@/lib/images";
import { heroStagger, lineReveal } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-14 md:pt-16" data-nav-theme="dark">
      <Image
        src={images.hero.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%] opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" aria-hidden />

      <div className="relative z-[1]">
        <motion.div
          className="apple-copy pt-10 sm:pt-14 md:pt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.p variants={lineReveal} className="apple-eyebrow apple-eyebrow-dark">
            Salon Operating System
          </motion.p>
          <motion.h1
            variants={lineReveal}
            className="mt-2 max-w-[920px] mx-auto space-y-1 sm:space-y-2 text-balance"
          >
            <span className="block apple-headline text-white font-semibold">
              We Didn&apos;t Build
              <br />
              Another Salon Software.
            </span>
            <span className="block text-[clamp(2.125rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-transparent bg-clip-text bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6]">
              We Reimagined How
              <br />
              Modern Salons Operate.
            </span>
          </motion.h1>
          <motion.p
            variants={lineReveal}
            className="apple-subhead text-[#a1a1a6] mt-3 sm:mt-4"
          >
            A research-driven platform for bookings, staff, inventory & growth.
          </motion.p>
          <motion.div variants={lineReveal} className="apple-cta-row">
            <Link href="#cta" className="btn-primary">
              Book a demo
            </Link>
            <Link href="#showcase" className="apple-link text-brand-accent hover:underline">
              Explore the product ›
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="apple-visual relative max-w-[1100px] mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16"
        >
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <ProductDashboard animate />
          </div>
          <div className="absolute -bottom-2 right-4 md:right-10 z-20 hidden lg:block">
            <MobileSchedule />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
