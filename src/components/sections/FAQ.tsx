"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What qualifications do I need to enroll in Eduveda courses?",
    answer:
      "Our courses are designed for students from all backgrounds. While some technical courses may recommend basic knowledge in related fields, most of our beginner courses require no prior experience. Each course page lists specific prerequisites, if any.",
  },
  {
    question: "How do the online courses work?",
    answer:
      "Our courses combine self-paced learning with scheduled live sessions. You'll get access to video lessons, reading materials, assignments, and projects through our learning platform. Weekly live sessions with instructors allow for direct interaction and doubt clearing.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, upon successful completion of your course and its assignments, you'll receive an industry-recognized certificate. Our certificates are endorsed by leading companies and can be shared directly on your LinkedIn profile.",
  },
  {
    question: "What kind of job assistance does Eduveda provide?",
    answer:
      "We offer comprehensive career support including resume building, portfolio development, interview preparation, and internship placements. Our dedicated placement team connects students with our network of 100+ partner companies for job opportunities.",
  },
  {
    question: "Can I access the course material after completion?",
    answer:
      "Yes, you'll have lifetime access to all course materials after purchase. This includes any future updates to the course content, allowing you to stay current with industry developments.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee for all our courses. If you're not satisfied with the course, you can request a full refund within the first week of enrollment, provided you've completed less than 20% of the course material.",
  },
  {
    question: "How much time should I dedicate weekly for a course?",
    answer:
      "Most courses require 8-10 hours per week for optimal learning. This includes watching videos, completing assignments, working on projects, and attending live sessions. The pace is flexible, and you can adjust according to your schedule.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16" style={{ background: 'var(--gradient-bg-main)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our courses and learning experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 card-gradient ${
                  openIndex === index ? 'shadow-md' : 'hover:shadow-md'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-semibold ${
                    openIndex === index 
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700' 
                      : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`ml-6 flex-shrink-0 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white p-1' 
                      : 'text-blue-600'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-72 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 bg-gradient-to-b from-transparent to-gray-50/50 p-3 rounded-lg">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <Button
              variant="gradient"
              gradientType="primary"
              className="font-medium"
              asChild
            >
              <a href="/contact">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
