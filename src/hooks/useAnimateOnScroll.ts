"use client";

import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';
  duration?: number;
  delay?: number;
  once?: boolean;
};

export function useAnimateOnScroll<T extends HTMLElement>(options: AnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animation = 'fade-up',
    duration = 800,
    delay = 0,
    once = true
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  const animationClass = animation === 'fade-up' ? 'animate-fade-up' :
                         animation === 'fade-down' ? 'animate-fade-down' :
                         animation === 'fade-left' ? 'animate-fade-left' :
                         animation === 'fade-right' ? 'animate-fade-right' :
                         animation === 'zoom-in' ? 'animate-zoom-in' :
                         'animate-fade-in';

  const style = {
    opacity: 0,
    transform: animation.includes('zoom') ? 'scale(0.95)' : 'none',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  const inViewStyle = {
    opacity: 1,
    transform: 'none',
  };

  return {
    ref,
    style: isVisible ? { ...style, ...inViewStyle } : style,
    isVisible,
    animationClass
  };
} 