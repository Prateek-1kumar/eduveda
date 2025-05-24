"use client";

import { useState } from "react";
import { BarChart, Eye, Heart, Share2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";

export interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  slug: string;
}

export interface CourseActionButtonsProps {
  course: Course;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  isCard?: boolean;
}

export const CourseActionButtons = ({
  course,
  variant = "outline",
  size = "sm",
  isCard = true,
}: CourseActionButtonsProps) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAnalytics = () => {
    toast({
      title: "Analytics",
      description: `Viewing analytics for ${course.title}`,
      variant: "info",
    });
  };

  const handleQuickView = () => {
    setShowQuickView(true);
  };

  const handleWishlist = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Removed from Wishlist" : "Added to Wishlist",
      description: liked 
        ? `${course.title} has been removed from your wishlist` 
        : `${course.title} has been added to your wishlist`,
      variant: liked ? "default" : "success",
    });
  };

  const handleShare = () => {
    // In a real app, we would implement actual sharing functionality
    navigator.clipboard.writeText(`https://eduveda.com/courses/${course.slug}`);
    toast({
      title: "Link Copied",
      description: "Course link copied to clipboard",
      variant: "success",
    });
  };

  return (
    <>
      <div className={`flex ${isCard ? "gap-1.5" : "gap-3"}`}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variant}
                size={size}
                className="rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={handleAnalytics}
              >
                <BarChart className="h-4 w-4" />
                <span className="sr-only">Analytics</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Analytics</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variant}
                size={size}
                className="rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={handleQuickView}
              >
                <Eye className="h-4 w-4" />
                <span className="sr-only">Quick View</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quick View</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variant}
                size={size}
                className={`rounded-full bg-white ${
                  liked 
                    ? "text-red-500 border-red-200 hover:bg-red-50" 
                    : "hover:bg-blue-50 hover:text-blue-600"
                } transition-all duration-300`}
                onClick={handleWishlist}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{liked ? "Remove from Wishlist" : "Add to Wishlist"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variant}
                size={size}
                className="rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share Course</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{course.title}</DialogTitle>
            <DialogDescription>{course.category}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="aspect-video relative rounded-md overflow-hidden">
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-700">{course.description}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">${course.price.toFixed(2)}</p>
              <Link href={`/courses/${course.slug}`} passHref>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}; 