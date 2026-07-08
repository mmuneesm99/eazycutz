"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { useContactModal } from "@/context/ContactModalContext";

const footerColumns = [
  {
    title: "Product",
    links: [
      { name: "Showcase", href: "#showcase" },
      { name: "Features", href: "#builder" },
      { name: "Research", href: "#evidence" },
      { name: "Roadmap", href: "#journey" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#journey" },
      { name: "Investors", href: "#evidence" },
      { name: "Contact", href: "#cta", action: "book-demo" as const },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Book a Demo", href: "#cta", action: "book-demo" as const },
      { name: "Documentation", href: "#" },
      { name: "Help", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] pt-12 pb-8 border-t border-black/[0.06]" data-nav-theme="light">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="mb-8">
          <Link href="/" aria-label="EazyCutz home" className="inline-block rounded-md overflow-hidden">
            <BrandLogo />
          </Link>
          <p className="text-[12px] text-[#6e6e73] mt-3 max-w-[260px] leading-relaxed">
            The operating system for modern salons.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-black/[0.08]">
          {footerColumns.map((group) => (
            <div key={group.title}>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {"action" in link && link.action === "book-demo" ? (
                      <button
                        type="button"
                        onClick={openModal}
                        className="text-[12px] text-[#6e6e73] hover:underline"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href} className="text-[12px] text-[#6e6e73] hover:underline">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-[#6e6e73]">
            Copyright © {new Date().getFullYear()} EazyCutz. All rights reserved.
          </p>
          <p className="text-[12px] text-[#6e6e73]">India</p>
        </div>
      </div>
    </footer>
  );
}
