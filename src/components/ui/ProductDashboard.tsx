"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  UserCog,
  Package,
  FileSpreadsheet,
  Settings,
  TrendingUp,
  Bell,
  Search,
} from "lucide-react";
import { fadeUp, staggerContainerFast } from "@/lib/motion";

const stats = [
  { label: "Revenue", value: "₹2,45,000", change: "+12.4%" },
  { label: "Bookings", value: "148", change: "+5 today" },
  { label: "Clients", value: "1,245", change: "32 new" },
  { label: "Occupancy", value: "88%", change: "Peak 94%", highlight: true },
];

const appointments = [
  { time: "9:00", client: "Priya Sharma", service: "Balayage & Cut", stylist: "Sarah K.", status: "confirmed" },
  { time: "10:30", client: "Arjun Mehta", service: "Fade Trim", stylist: "Michael R.", status: "in-chair" },
  { time: "12:00", client: "Neha Reddy", service: "Keratin Treatment", stylist: "Elena B.", status: "confirmed" },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Calendar, label: "Calendar" },
  { icon: Users, label: "Clients" },
  { icon: Scissors, label: "Services" },
  { icon: UserCog, label: "Staff" },
  { icon: Package, label: "Inventory" },
  { icon: FileSpreadsheet, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const chartPath = "M0,60 L40,52 L80,45 L120,38 L160,28 L200,32 L240,18 L280,12";
const chartFill = `${chartPath} L280,80 L0,80 Z`;

export function ProductDashboard({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.08] bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)_inset] text-left select-none max-w-full",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f5f5f7] border-b border-black/[0.06]">
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((color, i) => (
            <motion.span
              key={color}
              initial={animate ? { scale: 0 } : false}
              animate={{ scale: 1 }}
              transition={{ delay: animate ? 0.2 + i * 0.05 : 0, type: "spring", stiffness: 400 }}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/80 border border-black/[0.06] text-[10px] text-[#86868b] max-w-[200px] w-full">
            <Search className="h-3 w-3 shrink-0" />
            <span className="truncate">app.eazycutz.com</span>
          </div>
        </div>
        <motion.div
          animate={animate ? { rotate: [0, 12, -12, 0] } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Bell className="h-3.5 w-3.5 text-[#86868b]" />
        </motion.div>
      </div>

      <div className="flex min-h-[320px] md:min-h-[380px]">
        <div className="hidden sm:flex w-[52px] md:w-[160px] flex-col border-r border-black/[0.06] bg-[#fafafa] py-4 shrink-0">
          <div className="px-3 mb-4 hidden md:block">
            <BrandLogo className="h-5" />
          </div>
          <nav className="flex flex-col gap-0.5 px-2">
            {navItems.map(({ icon: Icon, label, active }, i) => (
              <motion.div
                key={label}
                initial={animate ? { opacity: 0, x: -8 } : false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: animate ? 0.35 + i * 0.06 : 0, duration: 0.4 }}
                className={cn(
                  "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium",
                  active ? "bg-brand-purple/10 text-brand-purple" : "text-[#86868b]"
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden md:inline">{label}</span>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-4 md:p-5 bg-white overflow-hidden">
          <motion.div
            initial={animate ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animate ? 0.45 : 0, duration: 0.5 }}
            className="flex items-center justify-between mb-4"
          >
            <div>
              <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-medium">Aura Styling Co.</p>
              <h3 className="text-sm md:text-base font-semibold text-[#1d1d1f] tracking-tight mt-0.5">
                Good morning, Sarah 👋
              </h3>
            </div>
            <motion.span
              animate={animate ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"
            >
              Live
            </motion.span>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4"
            initial={animate ? "hidden" : false}
            animate="visible"
            variants={staggerContainerFast}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-2.5 md:p-3"
              >
                <p className="text-[9px] md:text-[10px] text-[#86868b] font-medium">{s.label}</p>
                <p className={cn("text-sm md:text-base font-semibold tracking-tight mt-0.5", s.highlight ? "text-brand-purple" : "text-[#1d1d1f]")}>
                  {s.value}
                </p>
                <p className="text-[9px] text-emerald-600 mt-0.5">{s.change}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <motion.div
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: animate ? 0.9 : 0, duration: 0.55 }}
              className="md:col-span-3 rounded-xl border border-black/[0.06] p-3"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-medium text-[#1d1d1f]">Revenue — Last 7 days</span>
                <TrendingUp className="h-3.5 w-3.5 text-brand-purple" />
              </div>
              <svg viewBox="0 0 280 80" className="w-full h-16 md:h-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#613ED4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#613ED4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={chartFill}
                  fill="url(#chartFill)"
                  initial={animate ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                />
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#613ED4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={animate ? { pathLength: 0, opacity: 0 } : false}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: animate ? 1.05 : 0, duration: 0.55 }}
              className="md:col-span-2 rounded-xl border border-black/[0.06] p-3"
            >
              <p className="text-[10px] font-medium text-[#1d1d1f] mb-2">Today&apos;s schedule</p>
              <div className="space-y-1.5">
                {appointments.map((a, i) => (
                  <motion.div
                    key={a.time + a.client}
                    initial={animate ? { opacity: 0, x: 8 } : false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: animate ? 1.15 + i * 0.1 : 0, duration: 0.4 }}
                    className="flex items-center gap-2 py-1.5 border-b border-black/[0.04] last:border-0"
                  >
                    <span className="text-[9px] text-[#86868b] w-8 shrink-0 tabular-nums">{a.time}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium text-[#1d1d1f] truncate">{a.client}</p>
                      <p className="text-[9px] text-[#86868b] truncate">{a.service}</p>
                    </div>
                    {a.status === "in-chair" && (
                      <motion.span
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-brand-purple shrink-0"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
