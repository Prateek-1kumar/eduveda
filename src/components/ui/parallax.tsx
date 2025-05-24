"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "horizontal" | "vertical" | "both";
  mouseParallax?: boolean;
  mouseStrength?: number;
  mouseDirection?: "horizontal" | "vertical" | "both";
  reverseScroll?: boolean;
  reverseMouse?: boolean;
  scrollThreshold?: number;
  scrollOffset?: number;
  style?: React.CSSProperties;
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  direction?: "horizontal" | "vertical" | "both";
  mouseParallax?: boolean;
  mouseStrength?: number;
  reverseScroll?: boolean;
  reverseMouse?: boolean;
  style?: React.CSSProperties;
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  children,
  className,
  speed = 0.1,
  direction = "both",
  mouseParallax = false,
  mouseStrength = 0.02,
  mouseDirection = "both",
  reverseScroll = false,
  reverseMouse = false,
  scrollThreshold = 1.0,
  scrollOffset = 0,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementDimensions, setElementDimensions] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${scrollOffset} 1`, `${scrollOffset - scrollThreshold} 0`]
  });

  // Scroll-based motion values with spring physics for smoother movement
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yScroll = useTransform(
    scrollSpring,
    [0, 1],
    reverseScroll ? [0, -100 * speed] : [0, 100 * speed]
  );

  // When mouse movement is enabled, these track the mouse position
  useEffect(() => {
    if (!mouseParallax) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      
      // Calculate mouse position relative to element center
      // Values range from -0.5 to 0.5
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      
      setMousePosition({ 
        x: reverseMouse ? -x : x, 
        y: reverseMouse ? -y : y 
      });
    };
    
    const updateDimensions = () => {
      if (!ref.current) return;
      setElementDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // Initialize dimensions
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [mouseParallax, reverseMouse]);

  // Calculate transform based on mouse position and direction
  const getMouseTransform = () => {
    if (!mouseParallax) return {};
    
    const strength = mouseStrength * 100; // Convert to percentage based movement
    const x = mouseDirection === 'horizontal' || mouseDirection === 'both' 
      ? mousePosition.x * strength 
      : 0;
    const y = mouseDirection === 'vertical' || mouseDirection === 'both' 
      ? mousePosition.y * strength 
      : 0;
    
    return { x, y };
  };

  // Calculate transform based on scroll position and direction
  const getScrollTransform = () => {
    if (speed === 0) return {};
    
    const y = direction === 'vertical' || direction === 'both' ? yScroll : undefined;
    // We could add horizontal scrolling here if needed
    
    return { y };
  };

  // Combine mouse and scroll transforms
  const getTransform = () => {
    const mouseTransform = getMouseTransform();
    const scrollTransform = getScrollTransform();
    
    return {
      ...mouseTransform,
      ...scrollTransform,
    };
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{
        ...style,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={getTransform()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className,
  depth = 1,
  direction = "both",
  mouseParallax = true,
  mouseStrength = 0.05,
  reverseScroll = false,
  reverseMouse = false,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // This will only run when mouseParallax is true
  useEffect(() => {
    if (!mouseParallax) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25 * depth * mouseStrength;
      const y = (window.innerHeight / 2 - e.clientY) / 25 * depth * mouseStrength;
      
      setMousePosition({ 
        x: reverseMouse ? -x : x, 
        y: reverseMouse ? -y : y 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [depth, mouseParallax, mouseStrength, reverseMouse]);
  
  return (
    <motion.div
      ref={ref}
      className={cn("absolute", className)}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: depth * 0.5 + 0.5,
      }}
      style={{
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Parallax; 