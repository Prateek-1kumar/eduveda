"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/ui/parallax";
import AnimatedSection from "@/components/ui/animated-section";
import { ParticleField } from "@/components/ui/ParticleField";

// Define enhanced slide data
const heroSlides = [
	{
		title: "The Age Of Artificial Intelligence",
		titleHighlight: "Artificial Intelligence",
		description:
			"Harness the power of AI technology and transform your future with cutting-edge educational experiences designed for tomorrow's leaders.",
		stats: [
			{ label: "Neural Nodes", value: "3.5B+" },
			{ label: "Graduates", value: "20K+" },
			{ label: "Success Rate", value: "94%" },
		],
		bgImage:
			"https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2669&auto=format&fit=crop",
		bgPattern:
			"https://ext.same-assets.com/1553284940/1573868574.png",
		overlayClass: "from-blue-950/90 via-blue-800/70 to-transparent",
		accentColor: "blue",
		ctaLink: "/courses/artificial-intelligence",
	},
	{
		title: "Unleash Supernatural Data Insights",
		titleHighlight: "Data Insights",
		description:
			"Transform raw information into actionable intelligence that drives business growth and innovation with our expert-led data science courses.",
		stats: [
			{ label: "Data Points", value: "1.2T+" },
			{ label: "Graduates", value: "18K+" },
			{ label: "Success Rate", value: "92%" },
		],
		bgImage:
			"https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2832&auto=format&fit=crop",
		bgPattern:
			"https://ext.same-assets.com/1553284940/1573868574.png",
		overlayClass: "from-purple-950/90 via-purple-800/70 to-transparent",
		accentColor: "purple",
		ctaLink: "/courses/data-science",
	},
	{
		title: "Future-Proof Engineering Solutions",
		titleHighlight: "Engineering Solutions",
		description:
			"Master the tools and techniques that drive innovation across industries with our comprehensive engineering and development programs.",
		features: [
			"Industry-Leading Curriculum",
			"Real-World Projects",
			"Career Placement Assistance",
		],
		bgImage:
			"https://images.unsplash.com/photo-1581092921461-6484e3a2d1d3?q=80&w=2670&auto=format&fit=crop",
		bgPattern:
			"https://ext.same-assets.com/1553284940/1573868574.png",
		overlayClass: "from-indigo-950/90 via-indigo-800/70 to-transparent",
		accentColor: "indigo",
		ctaLink: "/courses/machine-learning",
	},
];

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Motion values for cursor-responsive animations
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Transform motion values for parallax effects with enhanced depth
	const imageX = useTransform(mouseX, [-100, 100], [25, -25]);
	const imageY = useTransform(mouseY, [-100, 100], [25, -25]);
	const contentX = useSpring(useTransform(mouseX, [-100, 100], [10, -10]), {
		stiffness: 100,
		damping: 30,
	});
	const contentY = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), {
		stiffness: 100,
		damping: 30,
	});

	// Handle mouse movement for parallax effect
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();

		// Calculate mouse position relative to center of container
		const x = ((e.clientX - rect.left) / rect.width - 0.5) * 200;
		const y = ((e.clientY - rect.top) / rect.height - 0.5) * 200;

		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	// Handle slide navigation
	const nextSlide = () => {
		setCurrentSlide((prev) =>
			prev === heroSlides.length - 1 ? 0 : prev + 1
		);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
	};

	// Create ripple effect on click
	const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		// Add new ripple
		const newRipple = {
			x,
			y,
			id: Date.now(),
		};

		setRipples((prev) => [...prev, newRipple]);

		// Remove ripple after animation completes
		setTimeout(() => {
			setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
		}, 1000);
	};

	// Auto advance slides
	useEffect(() => {
		if (isHovering) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 8000);

		return () => clearInterval(interval);
	}, [currentSlide, isHovering]);

	const slide = heroSlides[currentSlide];

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			className="relative overflow-hidden h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] perspective-1000"
		>
			{/* 3D Scene Container */}
			<div className="absolute inset-0 transform-style-3d">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0, rotateX: 5, scale: 1.1 }}
						animate={{ opacity: 1, rotateX: 0, scale: 1 }}
						exit={{ opacity: 0, rotateX: -5, scale: 0.9 }}
						transition={{ duration: 0.8 }}
						className="absolute inset-0 transform-style-3d"
					>
						{/* Background image with enhanced parallax */}
						<Parallax
							speed={0.2}
							mouseParallax={true}
							mouseStrength={0.05}
							className="absolute inset-0"
						>
							<motion.div
								className="absolute inset-0 w-[110%] h-[110%] top-[-5%] left-[-5%]"
								style={{
									backgroundImage: `url(${slide.bgImage})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							/>
						</Parallax>

						{/* Improved gradient overlay */}
						<div
							className={`absolute inset-0 bg-gradient-to-br ${slide.overlayClass}`}
						></div>

						{/* Noise texture */}
						<div className="absolute inset-0 opacity-5 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise-200.png')]"></div>

						{/* Particle system - different for each slide */}
						<ParticleField count={30} color={slide.accentColor} />

						{/* Decorative geometric elements */}
						<div className="absolute inset-0 overflow-hidden">
							<motion.div
								className={`absolute h-40 w-40 rounded-full border border-${slide.accentColor}-400/30 opacity-20`}
								style={{ top: "15%", right: "10%" }}
								animate={{
									rotate: 360,
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 20,
									ease: "linear",
									repeat: Infinity,
									repeatType: "loop",
								}}
							/>
							<motion.div
								className={`absolute h-24 w-24 rounded-md border border-${slide.accentColor}-400/30 opacity-20`}
								style={{ bottom: "20%", left: "5%" }}
								animate={{
									rotate: -360,
									scale: [1, 1.2, 1],
								}}
								transition={{
									duration: 15,
									ease: "linear",
									repeat: Infinity,
									repeatType: "loop",
								}}
							/>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Light effect that follows cursor */}
				<motion.div
					className={`pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-${slide.accentColor}-400/20 to-transparent opacity-80 blur-xl`}
					style={{
						x: mouseX,
						y: mouseY,
						translateX: "-50%",
						translateY: "-50%",
					}}
				/>

				{/* Click ripples */}
				{ripples.map((ripple) => (
					<motion.div
						key={ripple.id}
						className="absolute rounded-full bg-white pointer-events-none"
						style={{
							left: `${ripple.x}%`,
							top: `${ripple.y}%`,
							translateX: "-50%",
							translateY: "-50%",
						}}
						initial={{ width: 0, height: 0, opacity: 0.8 }}
						animate={{ width: 500, height: 500, opacity: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
					/>
				))}
			</div>

			<div className="container-custom relative h-full flex items-center z-10">
				<motion.button
					onClick={prevSlide}
					className="absolute left-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300"
					aria-label="Previous slide"
					whileHover={{
						scale: 1.2,
						boxShadow: "0 0 15px rgba(255,255,255,0.5)",
					}}
					whileTap={{ scale: 0.9 }}
				>
					<ChevronLeft className="h-6 w-6" />
				</motion.button>

				<AnimatedSection
					className="w-full md:w-1/2 text-white z-10 px-4 md:px-0"
					staggerChildren={true}
					staggerDelay={0.1}
					direction="up"
					duration={0.7}
				>
					<div className="mb-4 overflow-hidden">
						<div className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium">
							Premium Education Experience
						</div>
					</div>

					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
						<span>{slide.title.replace(slide.titleHighlight, "")}</span>
						<span className="text-gradient"> {slide.titleHighlight}</span>
					</h1>

					<div className="h-1.5 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mb-8 rounded-full"></div>

					<p className="text-lg md:text-xl mb-10 text-gray-100 max-w-xl">
						{slide.description}
					</p>

					{slide.stats && (
						<div className="flex flex-wrap gap-10 mb-10">
							{slide.stats.map((stat, index) => (
								<div key={index} className="relative group">
									<div className="text-4xl font-bold">{stat.value}</div>
									<div className="text-sm text-gray-300 uppercase tracking-wider">
										{stat.label}
									</div>
									<motion.div
										className="absolute -bottom-2 left-0 h-0.5 bg-white/20"
										initial={{ width: 0 }}
										whileInView={{ width: "100%" }}
										viewport={{ once: true }}
										transition={{
											duration: 0.8,
											delay: 0.5 + index * 0.1,
										}}
									/>
								</div>
							))}
						</div>
					)}

					{slide.features && (
						<div className="mb-10 space-y-4">
							{slide.features.map((feature, index) => (
								<div key={`feature-${feature}`} className="flex items-center gap-3">
									<motion.span
										className="h-3 w-3 rounded-full bg-yellow-400"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{ type: "spring", delay: 0.7 + index * 0.1 }}
									></motion.span>
									<span className="text-lg">{feature}</span>
								</div>
							))}
						</div>
					)}

					<div className="flex flex-wrap gap-6 items-center">
						<Link href={slide.ctaLink}>
							<Button
								className="btn-modern rounded-full py-7 px-10 text-lg font-medium group relative overflow-hidden"
							>
								<span className="relative z-10">Start Your Journey</span>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 z-0"
									initial={{ x: "100%", opacity: 0 }}
									whileHover={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
							</Button>
						</Link>
						<Link
							href="/courses"
							className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
						>
							<span>Explore All Courses</span>
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							>
								→
							</motion.span>
						</Link>
					</div>
				</AnimatedSection>

				<motion.button
					onClick={nextSlide}
					className="absolute right-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300"
					aria-label="Next slide"
					whileHover={{
						scale: 1.2,
						boxShadow: "0 0 15px rgba(255,255,255,0.5)",
					}}
					whileTap={{ scale: 0.9 }}
				>
					<ChevronRight className="h-6 w-6" />
				</motion.button>
			</div>

			{/* Improved Slide Indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
				{heroSlides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className="group relative h-3 overflow-hidden bg-white/20 backdrop-blur-md transition-all duration-300 rounded-full"
						style={{ width: currentSlide === index ? 36 : 24 }}
						aria-label={`Go to slide ${index + 1}`}
					>
						{currentSlide === index && (
							<motion.div
								className="absolute inset-0 bg-white"
								initial={{ x: "-100%" }}
								animate={{ x: "0%" }}
								transition={{ duration: 8, ease: "linear" }}
							/>
						)}
					</button>
				))}
			</div>

			{/* Add global styles for advanced effects */}
			<style>
				{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .shadow-glow-white {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        `}
			</style>
		</section>
	);
}
