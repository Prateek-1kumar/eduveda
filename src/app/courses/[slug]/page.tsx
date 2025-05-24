import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import { courseDetails, type CourseDetails } from "@/lib/data/courseData";

export async function generateStaticParams() {
  // Generate static paths for all courses
  const slugs = Object.keys(courseDetails);
  
  return slugs.map(slug => ({
    slug,
  }));
}

export default function CourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const course = courseDetails[slug];
  
  // If course doesn't exist, you can handle this server-side
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/">Go back to homepage</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Return the course details directly - removed client component dependency
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="mb-6">
              <p className="text-gray-700">{course.description}</p>
            </div>
            <div className="mb-4 text-2xl font-bold">₹{course.price.toFixed(2)}</div>
            <Link href="/contact">
              <Button>Contact for Enrollment</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
