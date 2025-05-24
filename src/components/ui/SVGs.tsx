"use client";

import React from "react";

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const EducationSvg: React.FC<SVGProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="M12 2 L22 7 L12 12 L2 7 L12 2Z" />
      <path d="M12 12 L22 7 L22 17 L12 22 L2 17 L2 7" />
      <path d="M6 12v5" />
      <circle cx="12" cy="4" r="0.5" />
      <circle cx="12" cy="7" r="0.5" />
      <circle cx="12" cy="20" r="0.5" />
    </svg>
  );
}; 