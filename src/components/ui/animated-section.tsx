"use client";

import React, { useRef } from "react";
import { motion, useInView, HTMLMotionProps, Variants } from "framer-motion";
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: boolean;
  staggerDelay?: number;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  staggerChildren = false,
  staggerDelay = 0.1,
  threshold = 0.2,
  direction = "up",
  duration = 0.6,
  delay = 0,
  once = true,
  className = "",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });
  
  // Define animations based on direction
  const getAnimationVariants = (): Variants => {
    const distance = 50;
    
    const variants: Variants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      }
    };
    
    if (direction === "up") {
      variants.hidden = { ...variants.hidden, y: distance };
      variants.visible = { ...variants.visible, y: 0 };
    } else if (direction === "down") {
      variants.hidden = { ...variants.hidden, y: -distance };
      variants.visible = { ...variants.visible, y: 0 };
    } else if (direction === "left") {
      variants.hidden = { ...variants.hidden, x: distance };
      variants.visible = { ...variants.visible, x: 0 };
    } else if (direction === "right") {
      variants.hidden = { ...variants.hidden, x: -distance };
      variants.visible = { ...variants.visible, x: 0 };
    }
    
    return variants;
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: delay
      }
    }
  };
  
  const animations = getAnimationVariants();
  
  const childrenWithAnimation = staggerChildren
    ? React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div
            variants={animations}
            transition={{ duration }}
          >
            {child}
          </motion.div>
        );
      })
    : children;
  
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren ? containerVariants : animations}
      transition={staggerChildren ? undefined : { duration, delay }}
      {...props}
    >
      {childrenWithAnimation}
    </motion.div>
  );
};

export default AnimatedSection; 