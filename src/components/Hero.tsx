"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { useContactModal } from "@/context/ContactModalContext";
import { heroStagger, lineReveal } from "@/lib/motion";

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      className="relative bg-black text-white overflow-hidden pt-14 md:pt-16 min-h-svh md:min-h-0 flex flex-col"
      data-nav-theme="dark"
    >
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

      <div className="relative z-[1] flex flex-1 flex-col min-h-0">
        <motion.div
          className="flex-1 md:flex-none flex flex-col justify-center md:justify-start px-5 sm:px-6 text-center max-w-[920px] mx-auto w-full py-4 sm:py-6 md:py-0 md:pt-16"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.p
            variants={lineReveal}
            className="apple-eyebrow apple-eyebrow-dark text-[13px] sm:text-[clamp(1rem,2vw,1.25rem)]"
          >
            The Modern Salon Operating System
          </motion.p>

          <motion.h1
            variants={lineReveal}
            className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 md:space-y-2 text-balance"
          >
            <span className="block text-[clamp(1.875rem,8.5vw,3.5rem)] sm:text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-white">
              Built for Salons.
            </span>
            <span className="block text-[clamp(1.875rem,8.5vw,3.5rem)] sm:text-[clamp(2.125rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-transparent bg-clip-text bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6]">
              Designed for Growth.
            </span>
          </motion.h1>

          <motion.p
            variants={lineReveal}
            className="mt-2.5 sm:mt-4 text-[15px] sm:text-[clamp(1.0625rem,2.2vw,1.3125rem)] leading-snug text-[#a1a1a6] max-w-[340px] sm:max-w-[640px] mx-auto"
          >
            One platform to simplify operations, delight customers and grow your salon business.
          </motion.p>

          <motion.div
            variants={lineReveal}
            className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <button
              type="button"
              onClick={openModal}
              className="btn-primary w-full max-w-[240px] sm:w-auto sm:max-w-none"
            >
              Book a Demo
            </button>
            <Link
              href="#showcase"
              className="apple-link text-brand-accent hover:underline text-[15px] sm:text-[17px]"
            >
              See the product ›
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1400px] mx-auto px-3 sm:px-5 md:px-8 shrink-0 mt-2 sm:mt-4 md:mt-10 lg:mt-14"
        >
          <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl w-full">
            <div className="relative w-full bg-[#fafafa] h-[34svh] min-h-[180px] max-h-[280px] sm:h-auto sm:min-h-0 sm:max-h-none sm:aspect-[16/9] md:aspect-[2/1]">
              <Image
                src={images.product.dashboard}
                alt="EazyCutz salon dashboard overview"
                fill
                priority
                className="object-cover object-[left_top]"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] sm:h-[26%] bg-gradient-to-b from-transparent via-black/30 to-black/70"
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
