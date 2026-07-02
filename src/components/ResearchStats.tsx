"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, HeartHandshake, DollarSign } from "lucide-react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  suffix?: string;
}

// Helper component for counting animation when in view
function AnimatedCounter({ value, duration = 1.5, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    const stepIncrement = (end - start) / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextCount = start + stepIncrement * currentStep;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextCount);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Handle floats vs integers
  const displayValue = Number.isInteger(parseFloat(value)) 
    ? Math.round(count) 
    : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ResearchStats() {
  const stats = [
    {
      id: 1,
      metric: "35",
      suffix: "%",
      label: "Occupancy Increase",
      description: "Automated filling of cancellation gaps and booking reminders optimize chair time.",
      icon: TrendingUp,
      color: "text-brand-purple bg-brand-purple/10",
    },
    {
      id: 2,
      metric: "4.5",
      suffix: "h",
      label: "Weekly Admin Saved",
      description: "Automated calculations for stylist commission splits and instant stock reordering.",
      icon: Clock,
      color: "text-brand-accent bg-brand-accent/15",
    },
    {
      id: 3,
      metric: "40",
      suffix: "%",
      label: "Retention Uplift",
      description: "Dynamic membership structures turn casual walk-ins into recurring loyal clients.",
      icon: HeartHandshake,
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      id: 4,
      metric: "22",
      suffix: "%",
      label: "Higher Ticket Size",
      description: "Upsell prompting at check-out for retail items, hair treatments, and packages.",
      icon: DollarSign,
      color: "text-amber-500 bg-amber-500/10",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-brand-primary text-white overflow-hidden">
      {/* Blurred Glowing Backgrounds */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-brand-purple/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-brand-accent/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent">
              SALON EFFICIENCY INSIGHTS
            </span>
            <h2 className="text-section font-bold tracking-tight">
              Backed by data. Built for profitability.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm md:text-base text-brand-light/70 leading-relaxed">
              We surveyed over 500 high-growth salon owners. The results show that transitioning from basic tools to a dedicated operating system yields rapid, measurable returns.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Grid Connecting Lines for desktop */}
          <div className="absolute inset-0 border border-brand-border/5 rounded-2xl pointer-events-none hidden lg:block" />

          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-brand-primary/40 border border-brand-border/10 backdrop-blur-sm flex flex-col justify-between hover:border-brand-purple/40 hover:bg-brand-primary/60 transition-all duration-300 group"
              >
                <div>
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${stat.color} mb-6 transition-transform group-hover:scale-105`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  
                  <div className="text-5xl font-extrabold tracking-tight text-white mb-2">
                    <AnimatedCounter value={stat.metric} suffix={stat.suffix} />
                  </div>
                  
                  <h4 className="text-base font-bold text-brand-light mb-2">
                    {stat.label}
                  </h4>
                </div>
                
                <p className="text-xs text-brand-light/60 leading-relaxed mt-4">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
