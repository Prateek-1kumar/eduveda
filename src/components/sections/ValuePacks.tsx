"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, TrendingUp, Award, Users, Zap } from "lucide-react";
import { getValuePacks } from "@/lib/data/courseCategories";
import type { ValuePack } from "@/lib/data/courseCategories";

interface FeatureIconProps {
  feature: string;
  className?: string;
}

const FeatureIcon = ({ feature, className = "h-5 w-5 text-white" }: FeatureIconProps) => {
  if (feature.includes("Portfolio")) return <TrendingUp className={className} aria-hidden="true" />;
  if (feature.includes("Certification")) return <Award className={className} aria-hidden="true" />;
  if (feature.includes("Live")) return <Zap className={className} aria-hidden="true" />;
  if (feature.includes("Internship")) return <Users className={className} aria-hidden="true" />;
  return <Check className={className} aria-hidden="true" />;
};

export default function ValuePacks() {
  const valuePacks = getValuePacks();
  const [hoveredPack, setHoveredPack] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Set isClient to true after component mounts to enable animations
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Animation variants with consideration for users who prefer reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: prefersReducedMotion 
      ? {} 
      : { 
          y: -10,
          transition: { 
            type: "spring",
            stiffness: 300
          }
        }
  };

  const featuresVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const featureItemVariants = {
    hidden: { x: prefersReducedMotion ? 0 : -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  // Get gradient classes for each card based on color
  const getGradientClass = (color: string): string => {
    if (color.includes("amber")) return "bg-gradient-to-br from-amber-400 to-amber-600";
    if (color.includes("blue")) return "bg-gradient-to-br from-blue-500 to-indigo-600";
    if (color.includes("green")) return "bg-gradient-to-br from-emerald-400 to-teal-600";
    return "bg-gradient-to-br from-purple-500 to-indigo-600";
  };

  return (
    <section className="py-24 relative overflow-hidden" id="value-packs" aria-labelledby="value-packs-heading">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="value-packs-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Discover Value Packs
        </h2>
          <p className="text-gray-600 text-lg">
            Unlock premium course bundles and save up to 70% on individual course prices. 
            Designed to fast-track your career with comprehensive skill sets.
          </p>
        </div>

        {isClient ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {valuePacks.map((pack: ValuePack, index: number) => (
              <motion.div
                key={`value-pack-${index}`}
                className={`relative rounded-xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm ${hoveredPack === index ? 'z-10' : 'z-0'}`}
                variants={cardVariants}
                onMouseEnter={() => setHoveredPack(index)}
                onMouseLeave={() => setHoveredPack(null)}
                whileHover="hover"
              >
                {/* Card background with gradient */}
                <div className={`absolute inset-0 ${getGradientClass(pack.color)} opacity-90`} aria-hidden="true"></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl transform rotate-45"></div>
                  <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="p-8 relative z-10">
                  {/* Card header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2 flex items-center">
                      <span className="mr-2">{pack.title}</span>
                      {index === 1 && (
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full ml-2" aria-label="Most popular option">
                          MOST POPULAR
                        </span>
                      )}
                    </h3>
                    <p className="text-white/80 font-medium">{pack.description}</p>
                  </div>
                  
                  {/* Pricing section */}
                  <div className="flex items-baseline mb-8">
                    <span className="text-sm text-white/80">₹</span>
                    <span className="text-6xl font-bold text-white mx-1">{pack.price}</span>
                    <div className="flex flex-col">
                      <span className="text-sm text-white/80">/{pack.period}</span>
                      <span className="text-xs text-white/60">*No hidden fees</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/pricing" 
                    aria-label={`Explore ${pack.title} pack details`}
                    className="block">
                  <Button
                      className={`w-full relative group overflow-hidden ${
                        index === 1 
                          ? "bg-white hover:bg-white/90 text-blue-600 focus:ring-white focus:ring-offset-blue-600" 
                          : "bg-white/20 hover:bg-white/30 text-white border border-white/30 focus:ring-white"
                      } font-semibold text-base h-12 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    >
                      <span className="relative z-10 flex items-center">
                        EXPLORE PACK
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                      {index === 1 && (
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      )}
                    </Button>
                  </Link>

                  {/* Features list */}
                  <motion.div 
                    className="mt-8 space-y-4"
                    variants={featuresVariants}
                  >
                    {pack.features.map((feature: string, idx: number) => (
                      <motion.div 
                        key={`feature-${index}-${idx}`} 
                        className="flex items-center space-x-3"
                        variants={featureItemVariants}
                      >
                        <div className="flex-shrink-0 rounded-full bg-white/20 p-1.5">
                          <FeatureIcon feature={feature} />
                        </div>
                        <div className="flex items-baseline">
                          <span className="font-semibold text-white">
                            {feature.split(" ")[0]}
                          </span>
                          <span className="text-sm text-white/80 ml-1">
                            {feature.split(" ").slice(1).join(" ")}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Fallback non-animated version for SSR or when client-side JS is not available */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePacks.map((pack: ValuePack, index: number) => (
              <div
                key={`value-pack-static-${index}`}
                className="relative rounded-xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 ${getGradientClass(pack.color)} opacity-90`} aria-hidden="true"></div>
                <div className="p-8 relative z-10">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2 flex items-center">
                      <span className="mr-2">{pack.title}</span>
                      {index === 1 && (
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full ml-2" aria-label="Most popular option">
                          MOST POPULAR
                        </span>
                      )}
                    </h3>
                    <p className="text-white/80 font-medium">{pack.description}</p>
                  </div>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-sm text-white/80">₹</span>
                    <span className="text-6xl font-bold text-white mx-1">{pack.price}</span>
                    <div className="flex flex-col">
                      <span className="text-sm text-white/80">/{pack.period}</span>
                      <span className="text-xs text-white/60">*No hidden fees</span>
                    </div>
                  </div>

                  <Link href="/pricing" 
                    aria-label={`Explore ${pack.title} pack details`}
                    className="block">
                    <Button
                      className={`w-full relative group overflow-hidden ${
                        index === 1 
                          ? "bg-white hover:bg-white/90 text-blue-600 focus:ring-white focus:ring-offset-blue-600" 
                          : "bg-white/20 hover:bg-white/30 text-white border border-white/30 focus:ring-white"
                      } font-semibold text-base h-12 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    >
                      <span className="relative z-10 flex items-center">
                        EXPLORE PACK
                        <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                      </span>
                  </Button>
                </Link>

                  <div className="mt-8 space-y-4">
                    {pack.features.map((feature: string, idx: number) => (
                      <div 
                        key={`feature-static-${index}-${idx}`} 
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0 rounded-full bg-white/20 p-1.5">
                          <FeatureIcon feature={feature} />
                        </div>
                        <div className="flex items-baseline">
                          <span className="font-semibold text-white">
                          {feature.split(" ")[0]}
                        </span>
                          <span className="text-sm text-white/80 ml-1">
                          {feature.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
        
        {/* Compare all plans link */}
        <div className="text-center mt-12">
          <Link href="/pricing" aria-label="Compare all available plans">
            <Button variant="outline" className="bg-white/80 hover:bg-white border border-gray-200 focus:ring-blue-500">
              Compare all plans
              <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
