import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SEO Helper Functions

/**
 * Generate structured data for Course schema
 */
export function generateCourseSchema(course: {
  title: string;
  slug: string;
  description: string;
  price: number;
  provider?: string;
  url?: string;
  image?: string;
}) {
  const { title, description, price, provider = "Eduveda Academy", url, image } = course;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://eduveda.academy",
    },
    ...(url && { url: `https://eduveda.academy/courses/${course.slug}` }),
    ...(image && { image }),
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://eduveda.academy/courses/${course.slug}`,
      validFrom: new Date().toISOString(),
    },
  };
}

/**
 * Generate structured data for a list of courses (ItemList schema)
 */
export function generateCoursesListSchema(courses: Array<{ title: string; slug: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        url: `https://eduveda.academy/courses/${course.slug}`,
        name: course.title,
      },
    })),
  };
}

/**
 * Generate structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Eduveda Academy",
    url: "https://eduveda.academy",
    logo: "https://ext.same-assets.com/1553284940/3778232251.png",
    sameAs: [
      "https://facebook.com/eduvedaacademy",
      "https://twitter.com/eduvedaacademy",
      "https://instagram.com/eduvedaacademy",
      "https://linkedin.com/company/eduvedaacademy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-1234567890",
      contactType: "customer service",
      email: "info@eduveda.academy",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

/**
 * Generate structured data for a FAQ page
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate metadata for different page types
 */
export function generateMetadata(
  pageType: "home" | "course" | "category" | "courses",
  data?: any
) {
  const baseTitle = "Eduveda Academy – Bridge to Your Dream Company";
  const baseDescription =
    "Eduveda Academy offers courses in Tech, Business, Design, and Medical fields to help you build your career.";

  switch (pageType) {
    case "home":
      return {
        title: baseTitle,
        description: baseDescription,
        alternates: {
          canonical: "/",
        },
      };

    case "course":
      if (!data) return {};
      return {
        title: data.title,
        description: data.description || `Master ${data.title} with our comprehensive course. ${baseDescription}`,
        alternates: {
          canonical: `/courses/${data.slug}`,
        },
        openGraph: {
          title: data.title,
          description: data.description || `Master ${data.title} with our comprehensive course. ${baseDescription}`,
          url: `https://eduveda.academy/courses/${data.slug}`,
          images: [
            {
              url: data.image || "https://ext.same-assets.com/1553284940/3778232251.png",
              width: 1200,
              height: 630,
              alt: data.title,
            },
          ],
        },
      };

    case "category":
      if (!data) return {};
      return {
        title: `${data.name} Courses`,
        description: `Explore our ${data.name} courses and advance your career with cutting-edge skills and knowledge.`,
        alternates: {
          canonical: `/categories/${data.slug}`,
        },
      };

    case "courses":
      return {
        title: "All Courses",
        description: "Browse our comprehensive collection of courses designed to help you master new skills and advance your career.",
        alternates: {
          canonical: "/courses",
        },
      };

    default:
      return {};
  }
}
