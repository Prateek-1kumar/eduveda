"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  pattern?: "dots" | "mesh" | "noise" | "none";
  variant?: "hero" | "alt" | "cta" | "feature" | "testimonial" | "default";
  animate?: boolean;
  intensity?: "light" | "medium" | "strong";
  blobs?: boolean;
};

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  className = "",
  pattern = "none",
  variant = "default",
  animate = false,
  intensity = "light",
  blobs = false,
}) => {
  // Get opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case "light": return "0.03";
      case "medium": return "0.05";
      case "strong": return "0.08";
      default: return "0.03";
    }
  };
  
  // Get section background class based on variant
  const getSectionBgClass = () => {
    switch (variant) {
      case "hero": return "bg-section-hero";
      case "alt": return "bg-section-alt";
      case "cta": return "bg-section-cta";
      case "feature": return "bg-section-feature";
      case "testimonial": return "bg-section-testimonial";
      default: return "bg-modern-primary";
    }
  };
  
  // Get pattern class
  const getPatternClass = () => {
    switch (pattern) {
      case "dots": return "bg-dots";
      case "mesh": return "bg-mesh";
      case "noise": return "bg-noise";
      default: return "";
    }
  };

  return (
    <div className={`relative ${getSectionBgClass()} ${getPatternClass()} ${className} overflow-hidden`}>
      {/* Optional animated blobs */}
      {blobs && (
        <>
          <div 
            className={`absolute -z-10 bg-blob animate-float-slow rounded-full ${
              variant === "cta" ? "bg-white/10" : "bg-blue-200/20"
            }`}
            style={{
              width: "40%",
              height: "40%",
              maxWidth: "400px",
              maxHeight: "400px",
              left: "-5%",
              top: "20%",
              animationDelay: "0s"
            }}
          />
          <div 
            className={`absolute -z-10 bg-blob animate-float-slow rounded-full ${
              variant === "cta" ? "bg-white/10" : "bg-indigo-200/20"
            }`}
            style={{
              width: "30%",
              height: "30%",
              maxWidth: "300px",
              maxHeight: "300px",
              right: "-10%",
              bottom: "5%",
              animationDelay: "-7s"
            }}
          />
        </>
      )}
      
      {/* Optional animation overlay */}
      {animate && (
        <motion.div 
          className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-white/10"
          animate={{ 
            background: [
              "linear-gradient(to bottom right, transparent, rgba(255, 255, 255, 0.05))",
              "linear-gradient(to bottom left, transparent, rgba(255, 255, 255, 0.05))",
              "linear-gradient(to top right, transparent, rgba(255, 255, 255, 0.05))",
              "linear-gradient(to bottom right, transparent, rgba(255, 255, 255, 0.05))"
            ]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      )}

      {/* Content with z-index to ensure it's above backgrounds */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Preset components for common section types
export const HeroBackground: React.FC<Omit<SectionBackgroundProps, 'variant'>> = (props) => (
  <SectionBackground variant="hero" pattern="mesh" animate {...props} />
);

export const FeatureBackground: React.FC<Omit<SectionBackgroundProps, 'variant'>> = (props) => (
  <SectionBackground variant="feature" pattern="dots" {...props} />
);

export const CtaBackground: React.FC<Omit<SectionBackgroundProps, 'variant'>> = (props) => (
  <SectionBackground variant="cta" pattern="noise" animate blobs {...props} />
);

export const TestimonialBackground: React.FC<Omit<SectionBackgroundProps, 'variant'>> = (props) => (
  <SectionBackground variant="testimonial" pattern="dots" {...props} />
); 