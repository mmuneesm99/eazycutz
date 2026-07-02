import { cn } from "@/lib/utils";

const slots = [
  { time: "9:00 AM", title: "Balayage Cut", stylist: "Sarah K.", active: true },
  { time: "11:30 AM", title: "Fade Trim", stylist: "Michael R." },
  { time: "2:00 PM", title: "Blowout", stylist: "Elena B.", active: true },
];

export function MobileSchedule({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[140px] md:w-[160px] rounded-[24px] border-[3px] border-[#1d1d1f] bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] overflow-hidden select-none",
        className
      )}
    >
      <div className="h-6 bg-[#1d1d1f] flex items-center justify-center">
        <div className="h-1 w-10 rounded-full bg-white/20" />
      </div>
      <div className="p-3 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-semibold text-[#1d1d1f]">Thursday</span>
          <span className="text-[9px] font-medium text-brand-purple">Today</span>
        </div>
        <div className="space-y-2">
          {slots.map((slot) => (
            <div
              key={slot.time}
              className={cn(
                "rounded-lg p-2 border text-[9px]",
                slot.active
                  ? "border-brand-purple/30 bg-brand-purple/[0.06]"
                  : "border-black/[0.06] bg-[#fafafa]"
              )}
            >
              <p className="font-semibold text-[#1d1d1f]">{slot.title}</p>
              <p className="text-[#86868b] mt-0.5">{slot.stylist}</p>
              <p className="text-[#86868b] mt-0.5 tabular-nums">{slot.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-5 flex items-center justify-center border-t border-black/[0.06]">
        <div className="h-1 w-8 rounded-full bg-[#1d1d1f]/20" />
      </div>
    </div>
  );
}
