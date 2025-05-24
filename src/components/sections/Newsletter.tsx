"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate the email
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 5 seconds for demo purposes
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      className="py-20 overflow-hidden relative"
      style={{ background: 'var(--gradient-bg-main)' }}
    >
      {/* Simple animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div 
          className="absolute top-10 -left-20 w-64 h-64 rounded-full opacity-10 blur-2xl animate-pulse"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)' }}
        ></div>
        
        <div 
          className="absolute -bottom-20 right-10 w-80 h-80 rounded-full opacity-10 blur-2xl animate-pulse"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
        ></div>
        
        <div 
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full opacity-20 blur-xl animate-pulse"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex p-4 rounded-full mb-6 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 backdrop-blur-sm border border-white/10 shadow-md text-white"
          >
            <Mail className="h-7 w-7" />
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-purple-500 drop-shadow-md"
          >
            Stay Updated with Eduveda
          </h2>
          
          <p 
            className="text-purple-500 mb-10 text-lg max-w-2xl mx-auto font-medium"
          >
            Subscribe to our newsletter for course updates, industry insights, and exclusive offers tailored to your learning journey.
          </p>

          {!isSubmitted ? (
            <div className="transition duration-300 ease-in-out">
              <form onSubmit={handleSubmit} className="group">
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <div className="relative flex-1">
                    <div className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      errorMessage ? "ring-2 ring-red-400" : "focus-within:ring-2 focus-within:ring-blue-400"
                    }`}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 outline-none text-gray-800 shadow-lg backdrop-blur-sm bg-white/95 transition-all"
                        disabled={isLoading}
                      />
                      {email && !isLoading && (
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full"
                          onClick={() => setEmail("")}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    {errorMessage && (
                      <p className="absolute text-left -bottom-6 left-0 text-xs font-medium text-yellow-200 drop-shadow-sm">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="py-3 px-5 rounded-lg font-medium shadow-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-600/40 to-indigo-800/40 border border-white/20 backdrop-blur-sm rounded-lg p-8 max-w-lg mx-auto shadow-xl text-white transition duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-full shadow-md">
                  <Check className="h-6 w-6" />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">
                Thanks for subscribing!
              </h3>
              <p className="text-white font-medium">
                You've been added to our newsletter. Keep an eye on your inbox for updates and exclusive offers.
              </p>
            </div>
          )}

          <p className="text-purple-500 text-sm mt-8 font-normal">
            We respect your privacy and will never share your information. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Animated Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  );
}

