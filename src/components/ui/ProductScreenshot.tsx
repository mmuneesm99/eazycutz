"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** Aspect ratio of the cropped viewport, e.g. "16/10" */
  aspectClassName?: string;
};

/** Browser-chrome wrap for product UI screenshots */
export function ProductScreenshot({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  aspectClassName = "aspect-[16/10]",
}: ProductScreenshotProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.08] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-left select-none",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f5f7] border-b border-black/[0.06]">
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
            <span
              key={color}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-1 rounded-md bg-white/80 border border-black/[0.06] text-[10px] text-[#86868b] max-w-[200px] w-full text-center truncate">
            app.eazycutz.com
          </div>
        </div>
        <div className="w-[42px]" aria-hidden />
      </div>
      <div className={cn("relative bg-[#fafafa] overflow-hidden", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover object-top", imageClassName)}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
    </div>
  );
}
