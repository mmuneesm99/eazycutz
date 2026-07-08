"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  ShoppingBag,
  Gift,
  UserCog,
  Package,
  TrendingUp,
  Heart,
  Sparkles,
  SlidersHorizontal,
  Calendar,
  BarChart3,
  Star,
  PieChart,
  Bell,
  ArrowLeftRight,
  FileSpreadsheet,
  Clock,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { PromoSection } from "@/components/layout/PromoSection";
import { images } from "@/lib/images";
import { appleEase, fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

type TabFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type TabContent = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: React.ReactNode;
  description: string;
  features: TabFeature[];
  screenshot: string;
  screenshotAlt: string;
};

const tabs: TabContent[] = [
  {
    id: "membership",
    label: "Memberships",
    icon: Users,
    headline: (
      <>
        Create memberships your customers{" "}
        <span className="text-brand-violet">love to stay in.</span>
      </>
    ),
    description:
      "Design flexible membership plans with discounts, free services, rewards, and more—built to increase repeat visits and customer lifetime value.",
    features: [
      {
        icon: TrendingUp,
        title: "Predictable recurring revenue",
        description: "Lock in steady monthly income with subscriptions that customers find valuable.",
      },
      {
        icon: Heart,
        title: "Increase customer retention",
        description: "Reward loyalty and keep your best clients coming back.",
      },
      {
        icon: SlidersHorizontal,
        title: "Tailored to your salon",
        description: "Fully customizable plans that match your services, pricing, and business goals.",
      },
      {
        icon: Sparkles,
        title: "Grow lifetime value",
        description: "Encourage more visits, add-on services, and long-term relationships.",
      },
    ],
    screenshot: images.product.membership,
    screenshotAlt: "EazyCutz membership plans dashboard",
  },
  {
    id: "package",
    label: "Packages",
    icon: ShoppingBag,
    headline: (
      <>
        Create service packages that{" "}
        <span className="text-brand-violet">sell more, effortlessly.</span>
      </>
    ),
    description:
      "Bundle the right services and products into attractive packages that boost average order value and save time for your customers.",
    features: [
      {
        icon: TrendingUp,
        title: "Boost average order value",
        description: "Encourage customers to buy more with curated service and product bundles.",
      },
      {
        icon: SlidersHorizontal,
        title: "Fully customizable",
        description: "Choose services, products, pricing, validity, discounts and everything in between.",
      },
      {
        icon: Calendar,
        title: "Flexible validity",
        description: "Set custom validity for each package to match your business needs.",
      },
      {
        icon: BarChart3,
        title: "Easy to sell and track",
        description: "Sell at the counter, online, or via staff. Track usage and redemptions in real-time.",
      },
    ],
    screenshot: images.product.packages,
    screenshotAlt: "EazyCutz packages management dashboard",
  },
  {
    id: "loyalty",
    label: "Loyalty",
    icon: Gift,
    headline: (
      <>
        Reward loyalty.{" "}
        <span className="text-brand-violet">Keep customers coming back.</span>
      </>
    ),
    description:
      "Build loyalty programs that appreciate your customers, encourage repeat visits, and turn them into long-term advocates for your salon.",
    features: [
      {
        icon: Star,
        title: "Earn points, more visits",
        description: "Let customers earn points on every visit, product purchase, or referral.",
      },
      {
        icon: Gift,
        title: "Redeem rewards they love",
        description: "Offer discounts, free services, or exclusive benefits they'll actually use.",
      },
      {
        icon: TrendingUp,
        title: "Drive repeat business",
        description: "Personalized rewards and offers that bring customers back more often.",
      },
      {
        icon: PieChart,
        title: "Track, measure, grow",
        description: "Real-time insights to see what's working and maximize program impact.",
      },
    ],
    screenshot: images.product.loyalty,
    screenshotAlt: "EazyCutz loyalty program dashboard",
  },
  {
    id: "staff",
    label: "Staff",
    icon: UserCog,
    headline: (
      <>
        Manage your team with{" "}
        <span className="text-brand-violet">clarity and confidence.</span>
      </>
    ),
    description:
      "Schedule smarter, track commissions accurately, and give every stylist the visibility they need to perform at their best.",
    features: [
      {
        icon: Calendar,
        title: "Smart scheduling",
        description: "Avoid conflicts with drag-and-drop calendars and real-time availability.",
      },
      {
        icon: Wallet,
        title: "Commission tracking",
        description: "Automate commission calculations and payouts with full transparency.",
      },
      {
        icon: Clock,
        title: "Attendance & shifts",
        description: "Track check-ins, breaks, and shift hours across your entire team.",
      },
      {
        icon: BarChart3,
        title: "Performance insights",
        description: "See revenue per stylist, rebooking rates, and productivity at a glance.",
      },
    ],
    screenshot: images.product.staff,
    screenshotAlt: "EazyCutz staff management dashboard",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    headline: (
      <>
        Full control over every product.{" "}
        <span className="text-brand-violet">Never run out. Never overstock.</span>
      </>
    ),
    description:
      "Track products and consumables in real time. Know what's in stock, what's running low, and what you need to reorder.",
    features: [
      {
        icon: Package,
        title: "Real-time stock tracking",
        description: "See live stock levels across all branches and locations.",
      },
      {
        icon: Bell,
        title: "Low stock alerts",
        description: "Get notified before you run out of important items.",
      },
      {
        icon: BarChart3,
        title: "Smart insights",
        description: "Track usage trends and make data-driven reorder decisions.",
      },
      {
        icon: ArrowLeftRight,
        title: "Easy transfers",
        description: "Transfer stock between branches and track history.",
      },
      {
        icon: FileSpreadsheet,
        title: "Detailed reports",
        description: "Monitor stock value, consumption, and inventory performance.",
      },
    ],
    screenshot: images.product.inventory,
    screenshotAlt: "EazyCutz inventory management dashboard",
  },
];

function FeatureList({ features }: { features: TabFeature[] }) {
  return (
    <motion.ul
      className="space-y-5 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainerFast}
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.li key={feature.title} variants={fadeUp} className="flex gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10">
              <Icon className="h-4 w-4 text-brand-violet" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-[#1d1d1f]">{feature.title}</p>
              <p className="text-[14px] text-[#6e6e73] mt-0.5 leading-relaxed">{feature.description}</p>
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default function MembershipBuilder() {
  const [activeTab, setActiveTab] = useState("membership");
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <PromoSection
      id="builder"
      theme="light"
      className="bg-white"
      headline="Recurring revenue, your way."
      subheadline="Build memberships, packages, and loyalty programs that fit how your salon actually runs."
      links={[
        { label: "Learn more", href: "#showcase" },
        { label: "Book a demo", href: "#cta", primary: true, action: "book-demo" },
      ]}
      visualClassName="pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 mb-8 border-b border-black/[0.08] overflow-x-auto scrollbar-none">
        <div className="flex min-w-max md:min-w-0 md:justify-center gap-6 md:gap-10 pb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 flex items-center gap-2 text-[14px] pb-3 -mb-px transition-colors ${
                  isActive ? "text-brand-violet" : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-violet"
                    transition={{ duration: 0.35, ease: appleEase }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: appleEase }}
          className="mx-auto max-w-[1280px] px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <div className="text-left order-2 lg:order-1">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              {active.headline}
            </h3>
            <p className="text-[15px] sm:text-[17px] text-[#6e6e73] mt-3 leading-relaxed">
              {active.description}
            </p>
            <FeatureList features={active.features} />
          </div>

          <div className="order-1 lg:order-2">
            <ProductScreenshot
              src={active.screenshot}
              alt={active.screenshotAlt}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </PromoSection>
  );
}
