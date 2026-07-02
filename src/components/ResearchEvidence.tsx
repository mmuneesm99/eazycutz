"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const captions = [
  "Interviewing salon owners",
  "Journey mapping",
  "Reception desk observation",
  "Workflow documentation",
  "Insight sessions",
  "Team synthesis",
];

export default function ResearchEvidence() {
  return (
    <PromoSection
      id="evidence"
      theme="black"
      headline={
        <>
          Real People. Real Conversations.
          <br />
          Real Insights.
        </>
      }
      visualClassName="pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 overflow-x-auto scrollbar-none">
        <motion.div
          className="flex gap-3 sm:gap-4 w-max min-w-full md:w-full md:grid md:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {images.evidence.map((src, idx) => (
            <motion.figure key={captions[idx]} variants={fadeUp} className="w-[150px] sm:w-[170px] md:w-auto shrink-0">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/10">
                <Image src={src} alt={captions[idx]} fill className="object-cover" sizes="170px" />
              </div>
              <figcaption className="sr-only">{captions[idx]}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </PromoSection>
  );
}
