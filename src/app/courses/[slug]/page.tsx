"use client";

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2, Mail, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import { courseDetails } from "@/lib/data/courseData";
import { generateCourseSchema } from "@/lib/utils";

interface CourseParams {
  slug: string;
}

type Props = {
  params: CourseParams;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CourseDetailsPage({
  params,
  searchParams,
}: Props) {
  const router = useRouter();
  const { slug } = params;

  const course = courseDetails[slug];
  const [quantity, setQuantity] = useState(1);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([0]));
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsAnimated(true);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist.</p>
            <Button onClick={() => router.push("/")}>
              Go back to homepage
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleWeek = (weekIndex: number) => {
    const newExpanded = new Set(expandedWeeks);
    if (newExpanded.has(weekIndex)) {
      newExpanded.delete(weekIndex);
    } else {
      newExpanded.add(weekIndex);
    }
    setExpandedWeeks(newExpanded);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Generate course schema
  const courseSchema = generateCourseSchema({
    title: course.title,
    slug: course.slug,
    description: course.description,
    price: course.price,
    image: course.image,
  });

  // Get category path for breadcrumb
  const categorySlug = course.category.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="container-custom">
            <div className="flex items-center text-sm">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/categories/${categorySlug}`}
                className="hover:text-primary"
              >
                {course.category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-500">{course.title}</span>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Image */}
            <div
              className={`lg:col-span-1 transition-all duration-700 ${
                isAnimated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-w-4 aspect-h-3">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Course Details */}
            <div
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                isAnimated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h1 className="text-3xl font-bold mb-6">{course.title}</h1>

              <ul className="space-y-3 mb-6">
                {course.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-3xl font-bold text-blue-900 mb-6 shine-effect">
                ₹{course.price.toFixed(2)}
              </div>

              <div className="flex items-center space-x-3 mb-8">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                    tabIndex={0}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100"
                    aria-label="Increase quantity"
                    tabIndex={0}
                  >
                    +
                  </button>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  ADD TO CART
                </Button>

                <Button variant="outline" className="bg-gray-900 text-white hover:bg-black border-gray-900">
                  BUY NOW
                </Button>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <Button variant="outline" size="sm">
                  Compare
                </Button>
                <Button variant="outline" size="sm">
                  Add to wishlist
                </Button>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">Share:</span>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2">Guaranteed Safe Checkout</h3>
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="https://ext.same-assets.com/1553284940/3195086731.png"
                      alt="Payment Method"
                      width={40}
                      height={30}
                    />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="https://ext.same-assets.com/1553284940/3436204361.png"
                      alt="Payment Method"
                      width={40}
                      height={30}
                    />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="https://ext.same-assets.com/1553284940/3284955604.png"
                      alt="Payment Method"
                      width={40}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Curriculum */}
        <div
          className={`container-custom py-8 transition-all duration-700 delay-300 ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              Features & Compatibility
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">
                Master the Art of {course.title} (6-Week Intensive)
              </h3>

              <div className="mb-4">
                <strong>Course Duration:</strong> 6 Weeks
              </div>

              <div className="mb-4">
                <strong>Mentorship:</strong> Industry experts from top tech
                companies will guide you throughout the course.
              </div>

              <div className="mb-4">
                <strong>Mode of Learning:</strong> Online, Self-paced + Weekly
                Live Sessions
              </div>
            </div>

            {course.curriculum.map((week, index) => (
              <div
                key={index}
                className="border-t border-gray-200 py-4"
                style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  onClick={() => toggleWeek(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleWeek(index);
                      e.preventDefault();
                    }
                  }}
                >
                  <h3 className="text-lg font-semibold">{week.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedWeeks.has(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedWeeks.has(index) && (
                  <div className="mt-4 space-y-3 text-gray-700 animate-fadeIn">
                    <ul className="list-disc pl-5 space-y-2">
                      {week.content.map((item, idx) => (
                        <li key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 0.05}s` }}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {week.project && (
                      <div className="mt-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                        <strong>Project:</strong> {week.project}
                      </div>
                    )}

                    {week.outcome && (
                      <div className="mt-2 font-semibold animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                        <strong>Outcome:</strong> {week.outcome}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <Button
              variant="outline"
              className="mt-6 mx-auto block hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => {
                if (expandedWeeks.size === course.curriculum.length) {
                  setExpandedWeeks(new Set([0]));
                } else {
                  setExpandedWeeks(
                    new Set(Array.from({ length: course.curriculum.length }, (_, i) => i))
                  );
                }
              }}
            >
              {expandedWeeks.size === course.curriculum.length
                ? "SHOW LESS"
                : "SHOW MORE"}
            </Button>
          </div>
        </div>

        {/* Related Courses */}
        <div
          className={`container-custom py-8 transition-all duration-700 delay-500 ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(courseDetails)
              .filter(
                (c) => c.category === course.category && c.slug !== course.slug
              )
              .slice(0, 4)
              .map((relatedCourse, idx) => (
                <Card
                  key={relatedCourse.slug}
                  className={`overflow-hidden transition-all duration-500 hover:shadow-lg ${
                    isAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 0.1 + 0.7}s` }}
                >
                  <div className="relative group">
                    <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                      <Image
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        width={300}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-md hover:text-primary transition-colors">
                      <Link href={`/courses/${relatedCourse.slug}`}>
                        {relatedCourse.title}
                      </Link>
                    </h3>
                    <div className="text-xs text-gray-500 mb-1">
                      {relatedCourse.category}
                    </div>
                    <div className="font-semibold text-md text-blue-900">
                      ₹{relatedCourse.price.toFixed(2)}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Structured Data */}
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </div>
  );
}
