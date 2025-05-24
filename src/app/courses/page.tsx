"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Heart, BarChart, Eye, Share2, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import { categories } from "@/lib/data/courseCategories";
import { generateCoursesListSchema } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [quickViewCourse, setQuickViewCourse] = useState<any>(null);
  const [analyticsCourse, setAnalyticsCourse] = useState<any>(null);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  // Animation trigger
  useEffect(() => {
    setIsLoaded(true);
    
    // Load favorites from local storage
    const storedFavorites = localStorage.getItem('favoritesCourses');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Flatten all courses into a single array
  const allCourses = categories.flatMap((category) => category.courses);

  // Filter courses based on active category and search query
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      activeCategory === "all" ||
      course.category.toLowerCase() === activeCategory.toLowerCase() ||
      // Check if the course's category name matches the active category's slug
      // This handles cases like "Tech Data" category having slug "tech-data"
      categories.find(c => c.slug === activeCategory)?.name === course.category;
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate courses list schema for structured data
  const coursesListSchema = generateCoursesListSchema(
    filteredCourses.map((course) => ({
      title: course.title,
      slug: course.slug
    }))
  );

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };
  
  // Handle analytics view
  const handleAnalytics = (course: any) => {
    setAnalyticsCourse(course);
    toast({
      title: "Course Stats",
      description: `Viewing analytics for ${course.title}`,
    });
  };
  
  // Handle quick view
  const handleQuickView = (course: any) => {
    setQuickViewCourse(course);
  };
  
  // Handle favorites
  const toggleFavorite = (courseSlug: string) => {
    let newFavorites: string[];
    
    if (favorites.includes(courseSlug)) {
      newFavorites = favorites.filter(slug => slug !== courseSlug);
      toast({
        title: "Removed from favorites",
        description: "Course has been removed from your favorites",
      });
    } else {
      newFavorites = [...favorites, courseSlug];
      toast({
        title: "Added to favorites",
        description: "Course has been added to your favorites",
      });
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('favoritesCourses', JSON.stringify(newFavorites));
  };
  
  // Handle share
  const handleShare = (course: any) => {
    const url = `${window.location.origin}/courses/${course.slug}`;
    setShareUrl(url);
    setShareTitle(course.title);
    setShareDialogOpen(true);
  };
  
  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Link has been copied to clipboard",
    });
  };
  
  // Share on social media
  const shareOnSocial = (platform: string) => {
    let shareLink = '';
    
    switch(platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this course: ${shareTitle}`)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}: ${shareUrl}`)}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank');
    }
    
    setShareDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-50">
        {/* Page Title */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Courses</h1>
            <p className="text-lg max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
              Explore our wide range of courses designed to help you succeed in your career
            </p>

            {/* Search Bar in Header */}
            <div className="mt-8 max-w-md mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-5 pr-12 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-10">
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden mb-6">
            <Button
              onClick={toggleFilters}
              className="w-full flex items-center justify-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {isFiltersVisible ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar Filters */}
            <div className={`lg:col-span-1 ${isFiltersVisible ? 'block' : 'hidden lg:block'}`}>
              <div
                className={`bg-white rounded-lg shadow-md p-6 sticky top-24 transition-all duration-500 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-xl font-bold mb-6">Categories</h2>

                <div className="space-y-2">
                  <button
                    className={`block w-full text-left py-2 px-3 rounded-md transition ${
                      activeCategory === "all"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory("all")}
                  >
                    All Courses
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      className={`block w-full text-left py-2 px-3 rounded-md transition ${
                        activeCategory === category.slug
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCategory(category.slug)}
                    >
                      {category.name}
                      <span className="ml-2 text-xs inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                        {category.courses.length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Price</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-all"
                        className="mr-2 h-4 w-4 text-primary"
                        checked
                        readOnly
                      />
                      <label htmlFor="price-all">All Prices</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-free"
                        className="mr-2 h-4 w-4 text-primary"
                        disabled
                      />
                      <label htmlFor="price-free" className="text-gray-500">Free</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-paid"
                        className="mr-2 h-4 w-4 text-primary"
                        checked
                        readOnly
                      />
                      <label htmlFor="price-paid">Paid</label>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Duration</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-all"
                        className="mr-2 h-4 w-4 text-primary"
                        checked
                        readOnly
                      />
                      <label htmlFor="duration-all">All Durations</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-short"
                        className="mr-2 h-4 w-4 text-primary"
                        disabled
                      />
                      <label htmlFor="duration-short" className="text-gray-500">1-4 Weeks</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-medium"
                        className="mr-2 h-4 w-4 text-primary"
                        checked
                        readOnly
                      />
                      <label htmlFor="duration-medium">5-8 Weeks</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-long"
                        className="mr-2 h-4 w-4 text-primary"
                        disabled
                      />
                      <label htmlFor="duration-long" className="text-gray-500">9+ Weeks</label>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full mt-8"
                  variant="outline"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="lg:col-span-3">
              <div
                className={`flex justify-between items-center mb-6 transition-all duration-500 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-xl font-semibold">
                  {activeCategory === "all"
                    ? "All Courses"
                    : categories.find((c) => c.slug === activeCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredCourses.length} courses
                </p>
              </div>

              {filteredCourses.length === 0 ? (
                <div
                  className={`bg-white rounded-lg shadow-md p-10 text-center transition-all duration-500 ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src="https://ext.same-assets.com/1553284940/3778232251.png"
                    alt="No results"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 opacity-30"
                  />
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}>
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <Card
                      key={course.slug}
                      className={`overflow-hidden transition-all duration-500 hover:shadow-lg group ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 0.05 + 0.2}s` }}
                    >
                      <div className="relative">
                        <div className="aspect-w-16 aspect-h-10">
                          <Image
                            src={course.image}
                            alt={course.title}
                            width={300}
                            height={200}
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Quick Action Buttons - Appear on Hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => handleAnalytics(course)}
                                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition transform hover:scale-110 active:scale-95"
                                  aria-label="View analytics"
                                >
                                  <BarChart className="h-4 w-4" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View course stats</p>
                              </TooltipContent>
                            </Tooltip>
                            
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => handleQuickView(course)}
                                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition transform hover:scale-110 active:scale-95"
                                  aria-label="Quick view"
                                >
                                  <Eye className="h-4 w-4" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Quick view</p>
                              </TooltipContent>
                            </Tooltip>
                            
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => toggleFavorite(course.slug)}
                                  className={`bg-white p-2 rounded-full transition transform hover:scale-110 active:scale-95 ${
                                    favorites.includes(course.slug) 
                                      ? "text-red-500 hover:bg-red-50" 
                                      : "text-gray-800 hover:bg-gray-200"
                                  }`}
                                  aria-label={favorites.includes(course.slug) ? "Remove from favorites" : "Add to favorites"}
                                >
                                  <Heart className={`h-4 w-4 ${favorites.includes(course.slug) ? "fill-current" : ""}`} />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{favorites.includes(course.slug) ? "Remove from favorites" : "Add to favorites"}</p>
                              </TooltipContent>
                            </Tooltip>
                            
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => handleShare(course)}
                                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition transform hover:scale-110 active:scale-95"
                                  aria-label="Share"
                                >
                                  <Share2 className="h-4 w-4" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Share this course</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                          <Link href={`/courses/${course.slug}`}>
                            {course.title}
                          </Link>
                        </h3>
                        <div className="text-sm text-gray-500 mb-3">
                          {course.category}
                        </div>
                        <div className="font-semibold text-md text-blue-900">
                          ₹{course.price.toFixed(2)}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Quick View Dialog */}
      <Dialog open={!!quickViewCourse} onOpenChange={(open) => !open && setQuickViewCourse(null)}>
        {quickViewCourse && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{quickViewCourse.title}</DialogTitle>
              <DialogDescription>
                {quickViewCourse.category}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <Image
                  src={quickViewCourse.image}
                  alt={quickViewCourse.title}
                  className="object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <p className="text-sm text-gray-700">
                {quickViewCourse.description?.substring(0, 200)}...
              </p>
              <div className="font-semibold">₹{quickViewCourse.price.toFixed(2)}</div>
            </div>
            <DialogFooter>
              <Button asChild variant="secondary" onClick={() => setQuickViewCourse(null)}>
                <span>Close</span>
              </Button>
              <Button asChild>
                <Link href={`/courses/${quickViewCourse.slug}`}>View Full Details</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Analytics Dialog */}
      <Dialog open={!!analyticsCourse} onOpenChange={(open) => !open && setAnalyticsCourse(null)}>
        {analyticsCourse && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Course Analytics: {analyticsCourse.title}</DialogTitle>
              <DialogDescription>
                Key performance metrics for this course
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Enrollments</div>
                  <div className="text-xl font-bold">{Math.floor(Math.random() * 5000) + 1000}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Completion Rate</div>
                  <div className="text-xl font-bold">{Math.floor(Math.random() * 30) + 70}%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="text-xl font-bold">{(Math.random() * 1 + 4).toFixed(1)}/5</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Reviews</div>
                  <div className="text-xl font-bold">{Math.floor(Math.random() * 200) + 50}</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
                <p>This course is performing well compared to similar courses in its category.</p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setAnalyticsCourse(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share this course</DialogTitle>
            <DialogDescription>
              Choose how you want to share this course
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-4 py-4">
            <button 
              onClick={() => shareOnSocial('twitter')}
              className="p-3 bg-[#1DA1F2] text-white rounded-full hover:opacity-90"
              aria-label="Share on Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </button>
            <button 
              onClick={() => shareOnSocial('facebook')}
              className="p-3 bg-[#1877F2] text-white rounded-full hover:opacity-90"
              aria-label="Share on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button 
              onClick={() => shareOnSocial('linkedin')}
              className="p-3 bg-[#0A66C2] text-white rounded-full hover:opacity-90"
              aria-label="Share on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
            <button 
              onClick={() => shareOnSocial('whatsapp')}
              className="p-3 bg-[#25D366] text-white rounded-full hover:opacity-90"
              aria-label="Share on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              readOnly
              value={shareUrl}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit" size="sm" onClick={() => copyToClipboard(shareUrl)}>
              Copy
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Structured Data */}
      <Script
        id="courses-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesListSchema) }}
      />
    </div>
  );
}
