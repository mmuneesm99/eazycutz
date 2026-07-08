import Image from "next/image";
import { cn } from "@/lib/utils";
import { publicPath } from "@/lib/publicPath";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "nav" | "default";
};

const sizes = {
  nav: "h-10 sm:h-11 md:h-12 w-auto",
  default: "h-8 sm:h-9 w-auto",
};

export function BrandLogo({ className, priority = false, variant = "default" }: BrandLogoProps) {
  return (
    <Image
      src={publicPath("/Logo.webp")}
      alt="EazyCutz"
      width={176}
      height={48}
      priority={priority}
      className={cn(sizes[variant], "object-contain", className)}
    />
  );
}
