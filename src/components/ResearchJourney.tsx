"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Eye,
  GitBranch,
  Search,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { images } from "@/lib/images";
import { PromoSection } from "@/components/layout/PromoSection";
import { fadeUp, staggerContainer, staggerContainerFast, viewport } from "@/lib/motion";

const processSteps = [
  {
    icon: MapPin,
    title: "Visited salons",
    description: "Walked the floor at 30+ salons — from boutique studios to multi-chair chains.",
  },
  {
    icon: MessageCircle,
    title: "Interviewed owners",
    description: "200+ conversations with owners, managers, stylists, and reception staff.",
  },
  {
    icon: Eye,
    title: "Observed operations",
    description: "Watched peak hours, walk-ins, checkout flows, and handoffs between teams.",
  },
  {
    icon: GitBranch,
    title: "Mapped workflows",
    description: "Documented every step from booking to billing — including the workarounds.",
  },
  {
    icon: Search,
    title: "Identified problems",
    description: "500+ pain points logged — from inventory leakage to retention blind spots.",
  },
  {
    icon: Lightbulb,
    title: "Designed solutions",
    description: "1,000+ iterations turned field insights into the EazyCutz product you see today.",
  },
];

const gallery = [
  {
    src: images.research.interview,
    caption: "Interviewing salon owners",
    area: "interview",
  },
  {
    src: images.research.chair,
    caption: "Chair & floor observation",
    area: "chair",
  },
  {
    src: images.research.reception,
    caption: "Reception desk workflows",
    area: "reception",
  },
  {
    src: images.research.whiteboard,
    caption: "Pain point mapping sessions",
    area: "whiteboard",
  },
  {
    src: images.research.wireframe,
    caption: "Journey mapping on whiteboards",
    area: "wireframe",
  },
  {
    src: images.research.team,
    caption: "Team synthesis workshops",
    area: "team",
  },
  {
    src: images.research.notes,
    caption: "Workflow documentation",
    area: "notes",
  },
] as const;

const desktopGridAreas = `
  "interview interview chair reception"
  "interview interview whiteboard wireframe"
  "team team whiteboard notes"
`;

const highlights = [
  {
    value: "100+",
    label: "Hours on the salon floor",
    detail: "Not in conference rooms — inside real businesses during real operating hours.",
  },
  {
    value: "500+",
    label: "Problems documented",
    detail: "Every sticky note, sketch, and interview transcript shaped what we built.",
  },
  {
    value: "0",
    label: "Lines of code first",
    detail: "We listened and observed long before we designed a single screen.",
  },
];

export default function ResearchJourney() {
  return (
    <PromoSection
      id="journey"
      theme="dark"
      eyebrow="Our research journey"
      headline={
        <>
          We went to salons.
          <br />
          We listened. We observed. We documented.
        </>
      }
      subheadline="Months of fieldwork across India — watching how salons actually run before writing a single line of code."
      links={[{ label: "See what we found", href: "#problems" }]}
      visualClassName="pb-12 sm:pb-16"
    >
      {/* Masonry photo grid */}
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 mb-10 sm:mb-14">
        <motion.div
          className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {gallery.map((photo, index) => (
            <motion.figure
              key={photo.caption}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-lg ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2.5 text-left">
                <span className="text-[11px] text-white/90 font-medium leading-snug">
                  {photo.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:grid md:grid-cols-4 md:grid-rows-3 md:gap-3 md:h-[480px] lg:h-[520px]"
          style={{ gridTemplateAreas: desktopGridAreas }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {gallery.map((photo) => (
            <motion.figure
              key={photo.caption}
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl min-h-0 min-w-0"
              style={{ gridArea: photo.area }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="260px"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2.5 text-left">
                <span className="text-[12px] text-white/90 font-medium leading-snug">
                  {photo.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Research highlights */}
      <motion.div
        className="mx-auto max-w-[980px] px-5 sm:px-6 mb-10 sm:mb-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {highlights.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className="border-t border-white/10 pt-5">
            <p className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-tight text-white leading-none tabular-nums">
              {item.value}
            </p>
            <p className="text-[15px] font-semibold text-white mt-2">{item.label}</p>
            <p className="text-[13px] text-[#a1a1a6] mt-1.5 leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Process timeline */}
      <div id="roadmap" className="mx-auto max-w-[980px] px-5 sm:px-6 scroll-mt-24 mb-10 sm:mb-14">
        <h3 className="apple-headline text-[clamp(1.25rem,3vw,1.75rem)] mb-6 sm:mb-8">
          From salon visits to product design
        </h3>
        <motion.ol
          className="flex flex-col md:flex-row md:items-start gap-0 md:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="flex md:flex-1 md:flex-col md:items-center md:text-center relative pb-8 md:pb-0 last:pb-0"
              >
                <div className="flex md:flex-col md:items-center gap-4 md:gap-3 w-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                    <Icon className="h-4 w-4 text-brand-accent" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0 md:px-1">
                    <p className="text-[14px] sm:text-[15px] font-semibold text-white">{step.title}</p>
                    <p className="text-[12px] sm:text-[13px] text-[#a1a1a6] mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <>
                    <ChevronRight
                      className="hidden md:block absolute top-3 -right-1 h-4 w-4 text-white/25 shrink-0"
                      aria-hidden
                    />
                    <div className="md:hidden absolute left-5 top-10 bottom-0 w-px bg-white/10" aria-hidden />
                  </>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      {/* Wide workflow banner */}
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src={images.research.workflow}
              alt="Research team mapping salon workflows"
              fill
              className="object-cover"
              sizes="1100px"
            />
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#a1a1a6] text-center mt-4 max-w-[640px] mx-auto leading-relaxed">
            Every feature in EazyCutz traces back to a real moment we witnessed — a missed booking,
            a stock discrepancy, a owner juggling five apps at closing time.
          </p>
        </motion.div>
      </div>
    </PromoSection>
  );
}
