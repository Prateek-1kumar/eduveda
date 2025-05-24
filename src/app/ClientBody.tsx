"use client";

import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import Navbar from "@/components/layout/Navbar";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const scrollToTopOnPageChange = () => {
      window.scrollTo(0, 0);
    };

    scrollToTopOnPageChange();
  }, []);

  return (
    <body suppressHydrationWarning className="antialiased min-h-screen">
      {/* Modern Background System */}
      <BackgroundSystem />
      
      {/* Site Content */}
      <Navbar />
      <div className="content-z-above relative">{children}</div>
      <Toaster />
    </body>
  );
}
