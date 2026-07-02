import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: "EazyCutz - The Modern Salon Operating System",
  description: "EazyCutz is a premium, handcrafted Salon Operating System. Build custom memberships, automate scheduling, streamline client relations, and scale your salon operations.",
  keywords: ["salon software", "salon CRM", "booking system", "stylist scheduling", "salon app", "membership builder"],
  authors: [{ name: "EazyCutz Team" }],
  openGraph: {
    title: "EazyCutz - The Modern Salon Operating System",
    description: "Build custom memberships, automate scheduling, and scale your salon operations.",
    url: "https://eazycutz.com",
    siteName: "EazyCutz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyCutz - The Modern Salon Operating System",
    description: "Build custom memberships, automate scheduling, and scale your operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-black text-foreground antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
