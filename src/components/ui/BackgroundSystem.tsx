"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundSystem = () => {
  // Track scroll position for scroll-based effects
  const [scrollY, setScrollY] = useState(0);
  
  // Track mouse position for mouse-following effects
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  
  // Track viewport dimensions
  const [viewportDimensions, setViewportDimensions] = useState({ width: 0, height: 0 });
  
  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Get initial viewport dimensions
    setViewportDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    // Set up event listeners
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      
      // Smoothly update mouse position with dampening
      setMousePosition(prev => ({
        x: prev.x + (e.clientX / window.innerWidth - prev.x) * 0.1,
        y: prev.y + (e.clientY / window.innerHeight - prev.y) * 0.1
      }));
    };
    
    const handleResize = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    // Update on motion preference change
    const motionListener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', motionListener);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener('change', motionListener);
    };
  }, [prefersReducedMotion]);

  // Only enable interactive effects if user doesn't prefer reduced motion
  const enableInteractiveEffects = !prefersReducedMotion;

  return (
    <>
      {/* Base gradient layer */}
      <div className="fixed inset-0 -z-50 bg-modern-primary" />
      
      {/* Pattern layer */}
      <div className="fixed inset-0 -z-40 bg-mesh" />
      
      {/* Noise texture for depth */}
      <div className="fixed inset-0 -z-30 bg-noise" />
      
      {/* Mouse-following gradient blob */}
      {enableInteractiveEffects && (
        <motion.div 
          className="fixed inset-0 -z-20 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.03), transparent 30%, transparent)`
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        />
      )}
      
      {/* Subtle floating blobs */}
      {enableInteractiveEffects && (
        <>
          <div 
            className="bg-blob animate-float-slow rounded-full bg-blue-200"
            style={{
              width: Math.min(viewportDimensions.width * 0.4, 300),
              height: Math.min(viewportDimensions.width * 0.4, 300),
              left: '10%',
              top: '15%',
              animationDelay: '0s'
            }}
          />
          <div 
            className="bg-blob animate-float-slow rounded-full bg-indigo-200"
            style={{
              width: Math.min(viewportDimensions.width * 0.35, 280),
              height: Math.min(viewportDimensions.width * 0.35, 280),
              right: '5%',
              top: '20%',
              animationDelay: '-5s'
            }}
          />
          <div 
            className="bg-blob animate-float-slow rounded-full bg-purple-200"
            style={{
              width: Math.min(viewportDimensions.width * 0.3, 250),
              height: Math.min(viewportDimensions.width * 0.3, 250),
              left: '20%',
              bottom: '10%',
              animationDelay: '-10s'
            }}
          />
        </>
      )}
      
      {/* Scroll-based overlay that changes with depth */}
      {enableInteractiveEffects && (
        <motion.div 
          className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent to-blue-50/10"
          style={{
            opacity: Math.min(scrollY / 1000, 0.1)
          }}
        />
      )}
      
      {/* Very subtle vignette for depth */}
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_80%,_rgba(0,0,0,0.03))]" />
    </>
  );
}; 