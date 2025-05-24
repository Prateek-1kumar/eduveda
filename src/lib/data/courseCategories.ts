export type CourseCategory = {
  name: string;
  slug: string;
  courses: Course[];
};

export type Course = {
  title: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  description?: string; // Added description property
};

export type ValuePack = {
  title: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  color: string;
};

export const categories: CourseCategory[] = [
  {
    name: "Tech Data",
    slug: "tech-data",
    courses: [
      {
        title: "Web Development",
        slug: "web-development",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Android Development",
        slug: "android-development",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/1363144428.jpeg",
      },
      {
        title: "IOS Development",
        slug: "ios-development",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Game Development",
        slug: "game-development",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2929605370.jpeg",
      },
      {
        title: "Cyber Security",
        slug: "cyber-security",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2929605370.jpeg",
      },
      {
        title: "Artificial Intelligence",
        slug: "artificial-intelligence",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/1579944662.jpeg",
      },
      {
        title: "Machine Learning",
        slug: "machine-learning",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Cloud Computing",
        slug: "cloud-computing",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2572488399.jpeg",
      },
      {
        title: "Embedded Systems",
        slug: "embedded-systems",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2572488399.jpeg",
      },
      {
        title: "Data Science",
        slug: "data-science",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Python",
        slug: "python",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/1351081944.jpeg",
      },
      {
        title: "DSA with C++",
        slug: "dsa-with-cpp",
        category: "Tech Data",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/1351081944.jpeg",
      },
    ],
  },
  {
    name: "Mechanics",
    slug: "mechanics",
    courses: [
      {
        title: "Auto Cad",
        slug: "auto-cad",
        category: "Mechanics",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Hybrid & Electric Vehicles",
        slug: "hybrid-and-electric-vehicles",
        category: "Mechanics",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
    ],
  },
  {
    name: "Business",
    slug: "business",
    courses: [
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2953617747.jpeg",
      },
      {
        title: "Power BI",
        slug: "power-bi",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/3810584897.jpeg",
      },
      {
        title: "Stock Market",
        slug: "stock-market",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/3810584897.jpeg",
      },
      {
        title: "Business Analytics",
        slug: "business-analytics",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/254775346.jpeg",
      },
      {
        title: "Human Resources",
        slug: "human-resources",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2917207423.jpeg",
      },
      {
        title: "Finance",
        slug: "finance",
        category: "Business",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/618156311.jpeg",
      },
    ],
  },
  {
    name: "Design",
    slug: "design",
    courses: [
      {
        title: "UI/UX",
        slug: "ui-ux",
        category: "Design",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Graphics Designing",
        slug: "graphics-designing",
        category: "Design",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Photoshop",
        slug: "photoshop",
        category: "Design",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
    ],
  },
  {
    name: "Medical",
    slug: "medical",
    courses: [
      {
        title: "Anatomy",
        slug: "anatomy",
        category: "Medical",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Physiology",
        slug: "physiology",
        category: "Medical",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Biochemistry",
        slug: "biochemistry",
        category: "Medical",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Pharmacology",
        slug: "pharmacology",
        category: "Medical",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
      {
        title: "Forensic Medicine",
        slug: "forensic-medicine",
        category: "Medical",
        price: 8999.00,
        image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
      },
    ],
  },
];

export const getAllCategories = () => {
  return categories;
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => category.slug === slug);
};

export const getCourseBySlug = (slug: string) => {
  for (const category of categories) {
    const course = category.courses.find((course) => course.slug === slug);
    if (course) {
      return course;
    }
  }
  return null;
};

export const getPopularCourses = () => {
  const techCourses = categories.find((cat) => cat.slug === "tech-data")?.courses.slice(0, 6) || [];
  const businessCourses = categories.find((cat) => cat.slug === "business")?.courses.slice(0, 5) || [];

  return {
    tech: techCourses,
    business: businessCourses,
  };
};

export const getValuePacks = (): ValuePack[] => {
  return [
    {
      title: "MBA Lite",
      description: "7+ Diverse Business Domain",
      price: 6999,
      period: "Year",
      features: [
        "10+ Portfolio worthy projects",
        "5+ Certification",
        "Live interactive classes",
        "Internship Opportunities"
      ],
      color: "bg-amber-500"
    },
    {
      title: "Tech Starter",
      description: "10+ Diverse Business Domain",
      price: 8999,
      period: "Lifetime",
      features: [
        "10+ Portfolio worthy projects",
        "5+ Certification",
        "Live interactive classes",
        "Internship Opportunities"
      ],
      color: "bg-blue-600"
    },
    {
      title: "Make Your Own Pack",
      description: "7+ Diverse Business Domain",
      price: 9999,
      period: "Lifetime",
      features: [
        "10+ Portfolio worthy projects",
        "5+ Certification",
        "Live interactive classes",
        "Internship Opportunities"
      ],
      color: "bg-green-600"
    }
  ];
};
