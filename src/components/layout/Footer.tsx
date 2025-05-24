import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { categories } from "@/lib/data/courseCategories";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, #7e22ce, #4f46e5)' }}
        ></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Eduveda Academy"
                width={150}
                height={40}
                className="h-12 w-auto bg-white p-1 rounded shadow-md"
              />
            </Link>
            <p className="text-gray-300 mb-6 font-light">
              Eduveda Academy offers cutting-edge courses to help you build your
              career and reach your dream company. Our expert-led programs
              provide practical skills with guaranteed internship placements.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-700 transition duration-300 p-2.5 rounded-full text-purple-300 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-700 transition duration-300 p-2.5 rounded-full text-purple-300 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-700 transition duration-300 p-2.5 rounded-full text-purple-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-700 transition duration-300 p-2.5 rounded-full text-purple-300 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-700 transition duration-300 p-2.5 rounded-full text-purple-300 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                >
                  <span className="mr-2 text-xs">▶</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-purple-400">Popular Courses</h3>
            <ul className="space-y-3">
              {categories.slice(0, 2).map((category) =>
                category.courses.slice(0, 3).map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-gray-300 hover:text-purple-300 transition duration-200 flex items-center"
                    >
                      <span className="mr-2 text-xs">▶</span>
                      {course.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-purple-400">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 bg-gray-800 p-2 rounded-full text-purple-300 inline-flex">📍</span>
                <span className="mt-1">
                  123 Education Street, Learning Plaza, Knowledge City, India
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 bg-gray-800 p-2 rounded-full text-purple-300 inline-flex">📞</span>
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 bg-gray-800 p-2 rounded-full text-purple-300 inline-flex">✉️</span>
                <span>info@eduveda.academy</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 bg-gray-800 p-2 rounded-full text-purple-300 inline-flex">⏰</span>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left md:flex md:justify-between">
          <p className="text-purple-300">
            &copy; {currentYear} Eduveda Academy. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-purple-300 transition duration-200"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-conditions"
              className="hover:text-purple-300 transition duration-200"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
