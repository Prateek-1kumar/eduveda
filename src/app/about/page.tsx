"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Award, Users, Heart, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EducationSvg } from "@/components/ui/SVGs";
import { 
  HeroBackground, 
  FeatureBackground, 
  CtaBackground, 
  TestimonialBackground,
  SectionBackground
} from "@/components/ui/SectionBackground";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  useEffect(() => {
    // Smooth scroll to sections
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent bg-clip-text">
                Transforming Education for Tomorrow's Leaders
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At Eduveda Academy, we blend traditional wisdom with cutting-edge technology to create immersive learning experiences that prepare students for the challenges of tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="gradient" gradientType="primary">
                  Explore Programs <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="gradientOutline" gradientType="primary">
                  Meet Our Team
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Students collaborating"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeIn} className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              Our Mission
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Empowering through <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Knowledge & Innovation</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              We believe education is the most powerful catalyst for change. Our mission is to make quality education accessible, engaging, and effective for learners worldwide.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg border border-blue-100/50"
            >
              <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence in Education</h3>
              <p className="text-gray-600">
                We strive for the highest standards in educational content, combining academic rigor with practical skills development.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-blue-600 mr-2" /> Industry-relevant curriculum
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-blue-600 mr-2" /> Expert instructors
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-blue-600 mr-2" /> Continuous improvement
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-8 shadow-lg border border-indigo-100/50"
            >
              <div className="h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community & Collaboration</h3>
              <p className="text-gray-600">
                We foster a supportive community where students collaborate, share ideas, and grow together through shared experiences.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-indigo-600 mr-2" /> Peer learning networks
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-indigo-600 mr-2" /> Industry partnerships
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-indigo-600 mr-2" /> Alumni connections
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-8 shadow-lg border border-purple-100/50"
            >
              <div className="h-14 w-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Passion for Learning</h3>
              <p className="text-gray-600">
                We aim to ignite a lifelong love for learning by creating engaging, interactive educational experiences.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-purple-600 mr-2" /> Interactive content
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-purple-600 mr-2" /> Practical projects
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-purple-600 mr-2" /> Personalized pathways
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section id="history" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Eduveda Timeline</span>
            </h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to becoming a leader in educational innovation, our journey has been defined by constant growth and adaptation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-500"></div>
            
            <div className="space-y-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="md:text-right">
                    <span className="text-2xl font-bold text-blue-700">2018</span>
                    <h3 className="text-xl font-bold my-2">Foundation</h3>
                    <p className="text-gray-600">
                      Eduveda Academy was founded with a mission to transform educational experiences through technology and traditional wisdom.
                    </p>
                  </div>
                  <div className="mt-10 md:mt-0">{/* Empty column for spacing */}</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="md:text-right md:order-2">
                    <span className="text-2xl font-bold text-indigo-700">2020</span>
                    <h3 className="text-xl font-bold my-2">Expansion</h3>
                    <p className="text-gray-600">
                      We expanded our course offerings across multiple disciplines and welcomed our 10,000th student to the platform.
                    </p>
                  </div>
                  <div className="mt-10 md:mt-0 md:order-1">{/* Empty column for spacing */}</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="md:text-right">
                    <span className="text-2xl font-bold text-purple-700">2023</span>
                    <h3 className="text-xl font-bold my-2">Innovation</h3>
                    <p className="text-gray-600">
                      Launched our revolutionary learning platform with AI-powered personalization and interactive content for all courses.
                    </p>
                  </div>
                  <div className="mt-10 md:mt-0">{/* Empty column for spacing */}</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="md:text-right md:order-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Today</span>
                    <h3 className="text-xl font-bold my-2">Global Impact</h3>
                    <p className="text-gray-600">
                      Today, we serve students from 50+ countries, offering 100+ courses across various disciplines with industry-recognized certifications.
                    </p>
                  </div>
                  <div className="mt-10 md:mt-0 md:order-1">{/* Empty column for spacing */}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Minds Behind Eduveda</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our diverse team of educators, technologists, and visionaries work together to revolutionize the learning experience for students worldwide.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
                bio: "Former Professor at MIT with a passion for making education accessible globally."
              },
              {
                name: "Rahul Sharma",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                bio: "Tech innovator with 15+ years experience building educational platforms."
              },
              {
                name: "Aisha Patel",
                role: "Head of Curriculum",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                bio: "Curriculum design expert with focus on interactive learning materials."
              },
              {
                name: "Mark Thompson",
                role: "Chief Learning Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                bio: "Learning psychology specialist with expertise in engagement techniques."
              }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={533} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button variant="gradientOutline" gradientType="primary">
              View Full Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <EducationSvg className="absolute -right-96 -bottom-96 text-white w-[800px] h-[800px]" />
          <EducationSvg className="absolute -left-96 -top-96 text-white w-[800px] h-[800px] rotate-180" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Begin Your Learning Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              Join thousands of students already experiencing the Eduveda difference. Explore our courses and take the first step toward your future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Explore Programs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 