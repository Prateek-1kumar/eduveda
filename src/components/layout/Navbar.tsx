"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, ShoppingCart, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/data/courseCategories";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        scrolled 
          ? 'bg-white/90 shadow-md' 
          : 'bg-white/80'
      }`}
    >
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Eduveda Academy"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* About Link - New section */}
            <Link href="/about" className="hidden md:flex items-center group">
              <span className="relative text-purple-500 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-colors">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <div key={category.slug} className="relative group">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-purple-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-colors font-medium">
                      {category.name}
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:text-purple-600" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 p-2 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-lg">
                    {category.courses.slice(0, 8).map((course) => (
                      <DropdownMenuItem key={course.slug} asChild className="focus:bg-purple-50/50 rounded-md mb-1">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="w-full cursor-pointer hover:text-purple-700 transition-colors py-1.5"
                        >
                          {course.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    {category.courses.length > 8 && (
                      <DropdownMenuItem asChild className="focus:bg-purple-50/50 rounded-md text-center text-purple-700 font-medium">
                        <Link href={`/categories/${category.slug}`}>
                          View All {category.courses.length} Courses
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              </div>
            ))}
          </nav>

          {/* Search, Cart */}
          <div className="hidden md:flex items-center space-x-3">
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }} 
                  animate={{ width: "200px", opacity: 1 }} 
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="py-2 px-4 pr-8 w-full border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90 backdrop-blur-sm"
                    autoFocus
                  />
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-700"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-purple-500 hover:text-purple-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </motion.button>
              )}
            </AnimatePresence>

            <div className="h-6 w-px bg-purple-200 mx-2"></div>

            <Link href="/cart" className="relative group">
              <Button 
                variant="gradientOutline" 
                gradientType="primary" 
                className="rounded-full border-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                <span>Cart</span>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-1.5 rounded-full text-purple-500 hover:bg-purple-50"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link href="/cart" className="mx-3 text-purple-500">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-purple-500 hover:bg-purple-50">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px] bg-white/95 backdrop-blur-md">
                <div className="flex flex-col h-full">
                  <div className="py-4">
                    <Link href="/" className="flex items-center mb-6">
                      <Image
                        src="/images/logo.png"
                        alt="Eduveda Academy"
                        width={150}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                    
                    <Link 
                      href="/about"
                      className="block px-2 py-2 mb-4 text-purple-500 hover:text-purple-600 transition-colors font-medium border-b border-gray-100"
                    >
                      About Us
                    </Link>

                    <div className="space-y-4">
                      {categories.map((category) => (
                        <div key={category.slug} className="space-y-2">
                          <div className="font-semibold text-lg px-2 py-1 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-md text-purple-500">
                            {category.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {category.courses.slice(0, 6).map((course) => (
                              <Link
                                key={course.slug}
                                href={`/courses/${course.slug}`}
                                className="block text-gray-600 hover:text-purple-700 py-1"
                              >
                                {course.title}
                              </Link>
                            ))}
                            {category.courses.length > 6 && (
                              <Link
                                href={`/categories/${category.slug}`}
                                className="block text-purple-700 font-medium hover:text-purple-800 py-1"
                              >
                                View All ({category.courses.length})
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "60px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-purple-100 overflow-hidden"
          >
            <div className="container-custom py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="py-2.5 px-4 w-full border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                  autoFocus
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
