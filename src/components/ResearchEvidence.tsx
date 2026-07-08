"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  LayoutGrid,
  Package,
  Map,
  Pencil,
  UserCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/lib/images";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const topRow = [
  {
    src: images.research.interview,
    caption: "Interviewing salon owners",
    icon: Users,
  },
  {
    src: images.research.reception,
    caption: "Observing reception workflows",
    icon: LayoutGrid,
  },
  {
    src: images.research.inventory,
    caption: "Inventory & stock tracking study",
    icon: Package,
  },
];

const bottomRow = [
  {
    src: images.research.whiteboard,
    caption: "Journey mapping sessions",
    icon: Map,
  },
  {
    src: images.research.wireframe,
    caption: "Workflow documentation",
    icon: Pencil,
  },
  {
    src: images.research.notes,
    caption: "Shadowing stylists & teams",
    icon: UserCheck,
  },
  {
    src: images.research.team,
    caption: "Identifying core problems",
    icon: Target,
  },
];

function GalleryCard({
  photo,
  aspectClass,
}: {
  photo: { src: string; caption: string; icon: LucideIcon };
  aspectClass: string;
}) {
  const Icon = photo.icon;

  return (
    <motion.figure
      variants={fadeUp}
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-black ${aspectClass} group`}
    >
      <Image
        src={photo.src}
        alt={photo.caption}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 [filter:brightness(0.9)_contrast(1.1)_saturate(0.78)_hue-rotate(12deg)]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Cold cinematic grade + soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,40,0.14)_0%,transparent_35%,rgba(0,0,0,0.3)_100%),radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)] mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#6b8cb8]/[0.08] mix-blend-overlay"
        aria-hidden
      />
      <figcaption className="absolute inset-x-0 bottom-0 z-[1] flex justify-center sm:justify-start px-3 py-3 sm:px-4 sm:py-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1.5 border border-white/10">
          <Icon className="h-3 w-3 text-brand-accent shrink-0" aria-hidden />
          <span className="text-[11px] sm:text-[12px] text-white/95 font-medium leading-snug">
            {photo.caption}
          </span>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function ResearchEvidence() {
  return (
    <PromoSection
      id="evidence"
      theme="black"
      eyebrow="Research before product"
      headline="We spent months understanding salons before building one line of software."
      subheadline="Every workflow, every screen, and every feature in EazyCutz was shaped by real conversations, on-site observations, and documented operational challenges from salon owners, receptionists, and stylists."
      links={[{ label: "Explore our research", href: "#journey" }]}
      visualClassName="pb-12 sm:pb-16"
    >
      <p className="text-[13px] text-[#86868b] text-center -mt-6 mb-8 sm:mb-10">
        Real photos from our product discovery journey.
      </p>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 space-y-2 sm:space-y-3">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {topRow.map((photo) => (
            <GalleryCard key={photo.caption} photo={photo} aspectClass="aspect-[16/10] sm:aspect-[5/4]" />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {bottomRow.map((photo) => (
            <GalleryCard key={photo.caption} photo={photo} aspectClass="aspect-[4/3] sm:aspect-[3/2]" />
          ))}
        </motion.div>
      </div>
    </PromoSection>
  );
}
