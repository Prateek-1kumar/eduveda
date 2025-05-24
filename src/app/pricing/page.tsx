import { Metadata } from "next";
import { getValuePacks } from "@/lib/data/courseCategories";
import type { ValuePack } from "@/lib/data/courseCategories";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans | Eduveda Learning Platform",
  description: "Compare all Eduveda value packs and choose the best plan for your learning journey.",
};

export default function PricingPage() {
  const valuePacks = getValuePacks();
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Choose Your Learning Plan
          </h1>
          <p className="text-lg text-gray-600">
            Compare our value packs and select the perfect option for your career advancement.
            All plans include access to premium learning materials and dedicated support.
          </p>
        </div>

        {/* Detailed Pricing Comparison Table */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-8">Features</h3>
              <ul className="space-y-6">
                <li className="font-medium text-gray-600">Price</li>
                <li className="font-medium text-gray-600">Duration</li>
                <li className="font-medium text-gray-600">Number of Courses</li>
                <li className="font-medium text-gray-600">Projects Included</li>
                <li className="font-medium text-gray-600">Certifications</li>
                <li className="font-medium text-gray-600">Live Classes</li>
                <li className="font-medium text-gray-600">Mentorship</li>
                <li className="font-medium text-gray-600">Internship Opportunities</li>
                <li className="font-medium text-gray-600">Job Assistance</li>
                <li className="font-medium text-gray-600">Mobile Access</li>
                <li className="font-medium text-gray-600">Community Access</li>
              </ul>
            </div>

            {valuePacks.map((pack: ValuePack, index: number) => (
              <div key={`pricing-${index}`} className={index === 1 ? "p-6 relative" : "p-6"}>
                {index === 1 && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pack.title}</h3>
                  {index === 1 && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800 font-medium">
                      Most Popular
                    </span>
                  )}
                </div>

                <ul className="space-y-6 text-center">
                  <li className="font-bold text-2xl text-gray-800">₹{pack.price}</li>
                  <li className="text-gray-600">{pack.period}</li>
                  <li className="text-gray-600">{index === 0 ? "7+" : index === 1 ? "10+" : "15+"}</li>
                  <li>
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span className="sr-only">Yes</span>
                  </li>
                  <li className="text-gray-600">{index === 0 ? "5" : index === 1 ? "8" : "10+"}</li>
                  <li>
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span className="sr-only">Yes</span>
                  </li>
                  <li>
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span className="sr-only">Yes</span>
                  </li>
                  <li>
                    {index === 0 ? (
                      <span className="text-gray-400">Limited</span>
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    )}
                  </li>
                  <li>
                    {index === 0 ? (
                      <span className="text-gray-400">—</span>
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    )}
                  </li>
                  <li>
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span className="sr-only">Yes</span>
                  </li>
                  <li>
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span className="sr-only">Yes</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button 
                    className={`w-full ${index === 1 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" 
                      : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-800"}`}
                  >
                    <Link href="/contact" className="flex items-center justify-center w-full">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Can I switch between plans?</h3>
              <p className="text-gray-600">Yes, you can upgrade your plan at any time. The cost difference will be prorated based on the remaining time in your current subscription.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">No, the price you see is the total amount you'll pay. There are no additional fees or charges for any of our plans.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, debit cards, UPI, net banking and select digital wallets. All payments are securely processed.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">Yes, we offer a 7-day money-back guarantee if you're not satisfied with our services. Please contact our support team for more information.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still not sure which plan is right for you?</p>
          <Link href="/contact" aria-label="Contact our course advisors for assistance">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              Contact our advisors
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 