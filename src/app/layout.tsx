import "./globals.css";
import type { Metadata } from "next";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: {
    default: "Eduveda Academy – Bridge to Your Dream Company",
    template: "%s | Eduveda Academy",
  },
  description: "Eduveda Academy offers courses in Tech, Business, Design, and Medical fields to help you build your career.",
  keywords: [
    "online courses",
    "edtech",
    "career development",
    "skill building",
    "programming",
    "business",
    "design",
    "medical",
  ],
  authors: [{ name: "Eduveda Academy" }],
  creator: "Eduveda Academy",
  publisher: "Eduveda Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduveda.academy",
    siteName: "Eduveda Academy",
    title: "Eduveda Academy – Bridge to Your Dream Company",
    description: "Eduveda Academy offers courses in Tech, Business, Design, and Medical fields to help you build your career.",
    images: [
      {
        url: "https://ext.same-assets.com/1553284940/3778232251.png",
        width: 1200,
        height: 630,
        alt: "Eduveda Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduveda Academy – Bridge to Your Dream Company",
    description: "Eduveda Academy offers courses in Tech, Business, Design, and Medical fields to help you build your career.",
    images: ["https://ext.same-assets.com/1553284940/3778232251.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://eduveda.academy"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
