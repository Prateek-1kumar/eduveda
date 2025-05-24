import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExplorePrograms from "@/components/sections/ExplorePrograms";
import TopEnrolled from "@/components/sections/TopEnrolled";
import ValuePacks from "@/components/sections/ValuePacks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import { generateOrganizationSchema } from "@/lib/utils";
import { HeroBackground } from "@/components/ui/SectionBackground";

export const metadata: Metadata = {
  title: "Eduveda Academy – Bridge to Your Dream Company",
  description: "Eduveda Academy offers cutting-edge courses in Tech, Business, Design, and Medical fields to help you build skills for your dream career.",
  keywords: [
    "online courses",
    "tech education",
    "business courses",
    "design learning",
    "career development",
    "internship opportunities",
    "skill building",
    "eduveda",
    "online learning platform"
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroBackground blobs className="min-h-screen">
          <div className="container-custom py-28">
            <HeroSection />
          </div>
        </HeroBackground>

        {/* Course Categories */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
          <ExplorePrograms />
        </div>

        {/* Testimonials */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.3s" }}>
          <Testimonials />
        </div>

        {/* Top Enrolled */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
          <TopEnrolled />
        </div>

        {/* Value Packs */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.5s" }}>
          <ValuePacks />
        </div>

        {/* Newsletter */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
          <Newsletter />
        </div>

        {/* FAQ */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.7s" }}>
          <FAQ />
        </div>
      </div>
      <Footer />

      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}
