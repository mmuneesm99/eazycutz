import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { publicPath } from "@/lib/publicPath";

const siteUrl = "https://eazycutz.com";
const siteName = "EazyCutz";
const title = "EazyCutz | The Modern Salon Operating System";
const description =
  "One platform to simplify operations, delight customers and grow your salon business. Built for salons. Designed for growth.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "salon software",
    "salon CRM",
    "salon booking system",
    "stylist scheduling",
    "salon management app",
    "membership builder",
    "salon inventory",
    "salon loyalty program",
    "EazyCutz",
  ],
  authors: [{ name: "Tovance Private Limited" }],
  creator: "Tovance Private Limited",
  publisher: "Tovance Private Limited",
  applicationName: siteName,
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: publicPath("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: publicPath("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: publicPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    shortcut: [publicPath("/favicon-32x32.png")],
  },
  manifest: publicPath("/site.webmanifest"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: publicPath("/og-image.png"),
        width: 512,
        height: 512,
        alt: "EazyCutz — The Modern Salon Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [publicPath("/og-image.png")],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0a1a" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      description,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      url: siteUrl,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "INR",
        description: "Book a demo — personalized salon walkthrough",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-black text-foreground antialiased">
        <MotionProvider>
          <ContactModalProvider>
            {children}
            <ContactModal />
          </ContactModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
