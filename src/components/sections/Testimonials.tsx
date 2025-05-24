"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "Software Developer",
    company: "TechSolutions Inc",
    image: "https://ext.same-assets.com/1553284940/1579944662.jpeg",
    content:
      "The Artificial Intelligence course from Eduveda Academy transformed my career. The curriculum was comprehensive and the instructors were extremely knowledgeable. The hands-on projects helped me build a strong portfolio that impressed recruiters.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Data Analyst",
    company: "DataCraft Analytics",
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    content:
      "Completing the Business Analytics program was one of the best career decisions I've made. The course content was relevant to industry needs and the mentorship was invaluable. I secured a job within a month of completing the course!",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "UI/UX Designer",
    company: "Creative Designs",
    image: "https://ext.same-assets.com/1553284940/2953617747.jpeg",
    content:
      "The Design course at Eduveda Academy provided me with both technical skills and creative insights. The industry-experienced instructors shared practical knowledge that you won't find in textbooks. Highly recommend for aspiring designers!",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have transformed their careers through our courses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 transition-all duration-500"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="absolute top-0 left-0 -mt-6 ml-12 text-primary opacity-30">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-xl">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600">{testimonials[currentSlide].position}</p>
                  <p className="text-primary">{testimonials[currentSlide].company}</p>
                  <div className="flex items-center justify-center md:justify-start mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonials[currentSlide].rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic mb-4">
                "{testimonials[currentSlide].content}"
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevSlide}
                className="bg-white text-gray-700 hover:text-primary p-2 rounded-full border border-gray-200 shadow-sm transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      pauseAutoPlay();
                      setCurrentSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white text-gray-700 hover:text-primary p-2 rounded-full border border-gray-200 shadow-sm transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
