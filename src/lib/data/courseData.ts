export type CourseDetails = {
  title: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  curriculum: CourseWeek[];
};

export type CourseWeek = {
  title: string;
  content: string[];
  project?: string;
  outcome?: string;
};

export const courseDetails: { [key: string]: CourseDetails } = {
  "web-development": {
    title: "Web Development",
    slug: "web-development",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master modern web development technologies and build responsive, interactive websites and applications with our comprehensive 6-week program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: HTML, CSS, and Responsive Design",
        content: [
          "Introduction to Web Development: History and evolution of the web",
          "HTML5 Fundamentals: Document structure, semantic elements, forms",
          "CSS3 Fundamentals: Selectors, box model, layouts, animations",
          "Responsive Web Design: Media queries, flexbox, CSS grid systems"
        ],
        project: "Personal Portfolio Website – Build a responsive personal portfolio website with multiple sections",
        outcome: "Understanding of core web technologies and ability to create responsive layouts"
      },
      {
        title: "Week 2: JavaScript Fundamentals",
        content: [
          "JavaScript Basics: Variables, data types, operators, functions",
          "DOM Manipulation: Selecting elements, event handling, modifying content",
          "ES6+ Features: Arrow functions, template literals, destructuring, modules",
          "Asynchronous JavaScript: Callbacks, promises, async/await"
        ],
        project: "Interactive Web Application – Create an interactive app with form validation and dynamic content",
        outcome: "Proficiency in JavaScript fundamentals and ability to create interactive web elements"
      },
      {
        title: "Week 3: Frontend Frameworks (React)",
        content: [
          "Introduction to React: Components, JSX, props, state",
          "React Hooks: useState, useEffect, custom hooks",
          "State Management: Context API, reducers, Redux fundamentals",
          "Routing with React Router: Navigation, dynamic routes, protected routes"
        ],
        project: "React Dashboard Application – Build a multi-page React application with dynamic content",
        outcome: "Understanding of modern frontend frameworks and ability to build component-based applications"
      },
      {
        title: "Week 4: Backend Development",
        content: [
          "Node.js Fundamentals: Event loop, modules, npm ecosystem",
          "Express.js Framework: Routes, middleware, error handling",
          "RESTful API Design: CRUD operations, status codes, best practices",
          "Database Integration: MongoDB connection, Mongoose ODM"
        ],
        project: "RESTful API – Develop a complete backend API with multiple endpoints and database integration",
        outcome: "Ability to create server-side applications and design efficient APIs"
      },
      {
        title: "Week 5: Full Stack Integration & Authentication",
        content: [
          "Connecting Frontend and Backend: Axios, fetch API, handling responses",
          "Authentication: JWT, sessions, OAuth strategies",
          "Security Best Practices: Input validation, CORS, XSS prevention",
          "Deployment: Vercel, Netlify, Heroku, Docker basics"
        ],
        project: "Full Stack Application – Create a complete web application with authentication and data persistence",
        outcome: "Skills to develop and deploy full stack applications with proper security measures"
      },
      {
        title: "Week 6: Advanced Topics & Final Project",
        content: [
          "Performance Optimization: Lazy loading, code splitting, caching strategies",
          "Testing: Unit tests, integration tests, end-to-end testing",
          "Progressive Web Apps (PWAs): Service workers, offline functionality, push notifications",
          "Final Project Planning and Implementation"
        ],
        project: "Capstone Web Application – Develop a production-ready web application that showcases all learned skills",
        outcome: "By the end of the course, you'll have a professional portfolio project and the skills to pursue web development careers"
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    slug: "digital-marketing",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2953617747.jpeg",
    description: "Master the art of Digital Marketing with our comprehensive 6-week program designed for beginners and professionals alike.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Digital Marketing",
        content: [
          "Overview of Digital Marketing: History, evolution, and importance",
          "Digital Marketing Channels: Website, SEO, PPC, Social Media, Email, Content",
          "Setting up Google Analytics and understanding website metrics",
          "Marketing research and consumer behavior in digital environments"
        ],
        project: "Digital Marketing Strategy – Develop a basic digital marketing plan for a hypothetical business",
        outcome: "Understanding of core digital marketing concepts and ability to create a strategic marketing plan"
      },
      {
        title: "Week 2: Search Engine Optimization (SEO)",
        content: [
          "SEO Fundamentals: On-page and Off-page optimization",
          "Keyword Research and Analysis using industry tools",
          "Technical SEO: Site architecture, mobile optimization, page speed",
          "Content optimization and link building strategies"
        ],
        project: "SEO Audit – Conduct a comprehensive SEO audit for a live website",
        outcome: "Ability to perform SEO audits and implement optimization strategies for better search engine rankings"
      },
      {
        title: "Week 3: Search Engine Marketing (SEM) & Pay-Per-Click (PPC)",
        content: [
          "Introduction to Google Ads and Bing Ads",
          "Campaign setup, structure, and management",
          "Ad copywriting and creative optimization",
          "Bid strategies, budgeting, and conversion tracking",
          "Remarketing campaigns and audience targeting"
        ],
        project: "Google Ads Campaign – Create and manage a mock Google Ads campaign",
        outcome: "Skills to create, manage, and optimize paid search campaigns"
      },
      {
        title: "Week 4: Social Media Marketing",
        content: [
          "Social media platforms overview and strategy development",
          "Content creation and curation for different platforms",
          "Community management and engagement tactics",
          "Paid social advertising on Facebook, Instagram, LinkedIn, and Twitter",
          "Social media analytics and reporting"
        ],
        project: "Social Media Campaign – Develop a multi-platform social media campaign",
        outcome: "Ability to create and execute effective social media strategies across platforms"
      },
      {
        title: "Week 5: Content Marketing & Email Marketing",
        content: [
          "Content marketing strategy and content calendar development",
          "Content types: Blogs, videos, infographics, podcasts, case studies",
          "Email marketing fundamentals and list building techniques",
          "Email automation, segmentation, and personalization",
          "A/B testing and optimization techniques"
        ],
        project: "Content & Email Campaign – Create a content marketing plan and email nurture sequence",
        outcome: "Skills to develop engaging content and effective email marketing campaigns"
      },
      {
        title: "Week 6: Analytics, Reporting & Final Project",
        content: [
          "Advanced Google Analytics and data interpretation",
          "Conversion rate optimization (CRO) techniques",
          "Creating comprehensive digital marketing reports",
          "Digital marketing trends and emerging technologies",
          "Career opportunities in digital marketing"
        ],
        project: "Integrated Digital Marketing Campaign – Develop a comprehensive digital marketing campaign incorporating all channels",
        outcome: "By the end of the course, you'll have a portfolio of digital marketing projects and the skills to implement full-scale campaigns"
      }
    ]
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/1579944662.jpeg",
    description: "Master the Art of Artificial Intelligence with our 6-Week Intensive program. Learn from industry experts and build real-world projects.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to AI & Python Programming",
        content: [
          "Introduction to Artificial Intelligence: Overview of AI concepts, history, applications, and different subfields (Machine Learning, Deep Learning, Natural Language Processing).",
          "Python Programming Fundamentals: Setting up the Python environment, data types, variables, control flow, functions, and object-oriented programming in Python.",
          "Introduction to Libraries: NumPy for numerical computing and Pandas for data manipulation."
        ],
        project: "Basic Data Analysis with Python – Perform basic data analysis tasks using Pandas and NumPy on a given dataset.",
        outcome: "Foundational knowledge of AI and Python, ability to perform basic data manipulation and analysis."
      },
      {
        title: "Week 2: Machine Learning Fundamentals",
        content: [
          "Supervised Learning: Introduction to supervised learning algorithms, including linear regression, logistic regression, and decision trees.",
          "Unsupervised Learning: Introduction to unsupervised learning algorithms, including clustering (k-means) and dimensionality reduction (PCA).",
          "Model Evaluation: Metrics for evaluating machine learning models (accuracy, precision, recall, F1-score)."
        ],
        project: "Building a Classification Model – Train and evaluate a classification model on a real-world dataset.",
        outcome: "Understanding of fundamental machine learning concepts and algorithms, ability to build and evaluate basic ML models."
      },
      {
        title: "Week 3: Deep Learning with TensorFlow/Keras",
        content: [
          "Neural Networks: Introduction to neural networks, activation functions, and backpropagation.",
          "Deep Learning Frameworks: Introduction to TensorFlow/Keras for building and training deep learning models.",
          "Convolutional Neural Networks (CNNs): Building CNNs for image classification tasks."
        ],
        project: "Image Classification with CNNs – Build and train a CNN to classify images from a given dataset.",
        outcome: "Understanding of deep learning concepts and neural networks, ability to build and train CNNs for image classification."
      },
      {
        title: "Week 4: Natural Language Processing (NLP)",
        content: [
          "Text Preprocessing: Techniques for cleaning and preparing text data for NLP tasks.",
          "Word Embeddings: Introduction to word embeddings (Word2Vec, GloVe) for representing words as vectors.",
          "Recurrent Neural Networks (RNNs): Building RNNs for sequence modeling tasks, such as text classification and generation."
        ],
        project: "Text Classification with RNNs – Build and train an RNN to classify text data.",
        outcome: "Understanding of NLP concepts and techniques, ability to build and train RNNs for text-based tasks."
      },
      {
        title: "Week 5: Advanced Deep Learning & Model Deployment",
        content: [
          "Advanced Architectures: Introduction to more advanced deep learning architectures, such as Generative Adversarial Networks (GANs) and Transformers.",
          "Model Optimization: Techniques for optimizing deep learning models, such as hyperparameter tuning and regularization.",
          "Model Deployment: Deploying trained machine learning models to a web application or other platform."
        ],
        project: "Building and Deploying a Deep Learning Model – Build a more complex deep learning model and deploy it to a simple web interface.",
        outcome: "Knowledge of advanced deep learning concepts and model deployment techniques."
      },
      {
        title: "Week 6: Final Project & Career Prep",
        content: [
          "Final AI Project: Develop a complete AI project of your choice, incorporating the skills learned throughout the course.",
          "Portfolio Building: Refine and complete your portfolio with a professional presentation of your projects.",
          "Interview Prep & Resume Tips: Learn how to showcase your skills, work on technical interview questions, and perfect your resume.",
          "Industry Insights: Get advice on the latest industry trends, frameworks, and technologies."
        ],
        project: "Final AI Project – Develop a complete AI application of your choice.",
        outcome: "By the end of the course, you'll have a strong portfolio and the confidence to apply for jobs in AI."
      }
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    slug: "machine-learning",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Learn the fundamentals of Machine Learning with our comprehensive program designed for beginners and intermediate learners.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Industry Leaders",
      "Internship Opportunities with partner companies",
      "One-on-One Mentorship with industry experts",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Machine Learning",
        content: [
          "Overview of Machine Learning concepts and applications",
          "Types of Machine Learning: Supervised, Unsupervised, and Reinforcement Learning",
          "Setting up your development environment with Python and essential libraries"
        ],
        project: "Data Exploration and Analysis – Analyze real-world datasets using Pandas and NumPy",
        outcome: "Understanding of Machine Learning fundamentals and ability to perform exploratory data analysis"
      },
      {
        title: "Week 2: Supervised Learning I",
        content: [
          "Linear Regression and polynomial regression",
          "Logistic Regression for classification tasks",
          "Model evaluation metrics and validation techniques"
        ],
        project: "Predictive Modeling – Build regression and classification models for real-world problems",
        outcome: "Ability to implement and evaluate basic supervised learning algorithms"
      }
    ]
  },
  "business-analytics": {
    title: "Business Analytics",
    slug: "business-analytics",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/254775346.jpeg",
    description: "Master the art of Business Analytics and learn how to make data-driven decisions for your organization.",
    features: [
      "6-Week Comprehensive Curriculum",
      "Industry-recognized Certification",
      "Real-world Business Case Studies",
      "One-on-One Mentorship with industry experts",
      "Career Support and Placement Assistance",
      "Networking Opportunities with Industry Leaders",
      "Access to Premium Analytics Tools and Software"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Business Analytics",
        content: [
          "Overview of Business Analytics and its importance in organizations",
          "Types of Analytics: Descriptive, Diagnostic, Predictive, and Prescriptive",
          "Data collection methods and data quality assessment"
        ],
        project: "Business Case Analysis – Analyze a real-world business problem using analytical techniques",
        outcome: "Understanding of business analytics fundamentals and ability to approach business problems analytically"
      },
      {
        title: "Week 2: Data Analysis Tools and Techniques",
        content: [
          "Introduction to Excel for Business Analytics",
          "SQL for Data Extraction and Manipulation",
          "Visualization tools like Tableau and Power BI"
        ],
        project: "Dashboard Creation – Build interactive dashboards to visualize business metrics",
        outcome: "Proficiency in using business analytics tools for data analysis and visualization"
      }
    ]
  },
  "android-development": {
    title: "Android Development",
    slug: "android-development",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/1363144428.jpeg",
    description: "Learn to build professional Android applications using Kotlin and modern Android development practices in this comprehensive 6-week bootcamp.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Android & Kotlin",
        content: [
          "Android Platform Overview: Architecture, history, and ecosystem",
          "Kotlin Fundamentals: Syntax, data types, functions, and collections",
          "Setting up the Development Environment: Android Studio, emulator, and tools",
          "Building Your First Android App: Activities, layouts, and basic UI elements"
        ],
        project: "Basic Android App – Create a simple calculator or to-do list application with a clean UI",
        outcome: "Understanding of the Android platform and ability to build simple applications with Kotlin"
      },
      {
        title: "Week 2: Android UI Development",
        content: [
          "UI Components: Buttons, text fields, checkboxes, and more advanced widgets",
          "Layouts in Depth: ConstraintLayout, RecyclerView, ViewPager",
          "Material Design Implementation: Guidelines, components, and themes",
          "Responsive Design: Supporting different screen sizes and orientations"
        ],
        project: "Material Design App – Build an app with complex layouts following Material Design guidelines",
        outcome: "Proficiency in creating visually appealing and responsive Android interfaces"
      },
      {
        title: "Week 3: Data Management & Storage",
        content: [
          "Android App Architecture: MVVM pattern, ViewModels, LiveData",
          "Local Data Storage: SharedPreferences, Room Database",
          "Working with Network Data: Retrofit, OkHttp, JSON parsing",
          "Background Processing: Coroutines and WorkManager"
        ],
        project: "Data-Driven App – Create an application that fetches and displays data from a REST API",
        outcome: "Understanding of modern Android architecture and ability to work with various data sources"
      },
      {
        title: "Week 4: Advanced Android Features",
        content: [
          "Navigation Component: Navigation graph, fragments, and bottom navigation",
          "Notifications and Background Services: Push notifications, foreground services",
          "Content Providers and File Management: Accessing media, documents, and file systems",
          "Location-Based Services: Maps, geofencing, and location tracking"
        ],
        project: "Feature-Rich App – Develop an app that integrates maps, notifications, and background processing",
        outcome: "Ability to implement advanced Android features and create complex application workflows"
      },
      {
        title: "Week 5: App Performance & Testing",
        content: [
          "Performance Optimization: Memory management, battery efficiency, UI responsiveness",
          "Testing Android Apps: Unit tests with JUnit, UI tests with Espresso",
          "Dependency Injection with Dagger/Hilt: Setting up DI in Android",
          "CI/CD for Android: GitHub Actions, automated testing, and deployment"
        ],
        project: "Optimized Application – Take an existing app and improve its performance, testability, and architecture",
        outcome: "Skills to develop robust, efficient, and maintainable Android applications"
      },
      {
        title: "Week 6: Publishing & Final Project",
        content: [
          "App Monetization Strategies: Ads, in-app purchases, subscription models",
          "Play Store Publishing: App bundle, release management, beta testing",
          "Analytics and Crash Reporting: Firebase Analytics, Crashlytics",
          "Final Project Development and Polish"
        ],
        project: "Capstone Android App – Build a complete, polished Android application ready for publication",
        outcome: "By the end of the course, you'll have a production-ready app in your portfolio and be prepared for the Android job market"
      }
    ]
  },
  "ios-development": {
    title: "IOS Development",
    slug: "ios-development",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master iOS app development with Swift and SwiftUI in this comprehensive program and learn to build professional, App Store-ready applications.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to iOS & Swift",
        content: [
          "iOS Platform Overview: Architecture, ecosystem, and development workflow",
          "Swift Programming Language: Syntax, data types, optionals, functions",
          "Development Environment Setup: Xcode, simulator, and debugging tools",
          "Building Your First iOS App: Basic UI elements and layout with UIKit"
        ],
        project: "Simple iOS App – Create a basic utility app with multiple screens and interactions",
        outcome: "Understanding of the iOS platform and ability to write Swift code for simple applications"
      },
      {
        title: "Week 2: UI Development with SwiftUI",
        content: [
          "Introduction to SwiftUI: Declarative syntax and reactive UI",
          "SwiftUI Components: Text, Image, Stack, List, NavigationView",
          "State Management: State, Binding, ObservableObject, EnvironmentObject",
          "Responsive Layouts: Supporting different iOS devices and orientations"
        ],
        project: "Multi-screen App – Build an app with SwiftUI featuring complex layouts and navigation",
        outcome: "Proficiency in creating modern iOS interfaces with SwiftUI"
      },
      {
        title: "Week 3: Networking & Data Management",
        content: [
          "iOS App Architecture: MVVM pattern with SwiftUI",
          "Networking: URLSession, Combine, async/await for API requests",
          "JSON Parsing and Codable Protocol",
          "Local Data Storage: UserDefaults, Core Data, and SwiftData"
        ],
        project: "Data-Driven App – Create an application that fetches and persists data from a REST API",
        outcome: "Understanding of iOS app architecture and ability to work with data from various sources"
      },
      {
        title: "Week 4: Advanced iOS Features",
        content: [
          "MapKit and CoreLocation: Building location-aware applications",
          "Push Notifications: Setting up and handling remote notifications",
          "Multimedia: AVFoundation for audio and video handling",
          "Core Animation and Advanced UI Effects"
        ],
        project: "Feature-Rich App – Develop an iOS app that integrates maps, notifications, and media handling",
        outcome: "Ability to implement advanced iOS features and create engaging user experiences"
      },
      {
        title: "Week 5: Testing & Performance Optimization",
        content: [
          "Unit Testing in iOS: XCTest framework",
          "UI Testing with XCUITest",
          "Performance Optimization: Memory management, battery efficiency",
          "Dependency Injection and Testable Architecture"
        ],
        project: "Test-Driven App – Build an application following TDD principles with comprehensive test coverage",
        outcome: "Skills to develop robust, efficient, and maintainable iOS applications"
      },
      {
        title: "Week 6: App Store & Final Project",
        content: [
          "App Store Preparation: Guidelines and requirements",
          "Distribution Methods: TestFlight, Enterprise distribution",
          "App Store Connect: App submission, review process",
          "Analytics and Monitoring: Firebase, Crashlytics"
        ],
        project: "Capstone iOS App – Build a complete, polished iOS application ready for App Store submission",
        outcome: "By the end of the course, you'll have a production-ready app for your portfolio and be prepared for the iOS job market"
      }
    ]
  },
  "game-development": {
    title: "Game Development",
    slug: "game-development",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2929605370.jpeg",
    description: "Learn to create immersive gaming experiences using Unity, from concept to deployment across multiple platforms with this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Game Development & Unity",
        content: [
          "Game Development Fundamentals: History, genres, and industry overview",
          "Introduction to Unity: Interface, project setup, and basic concepts",
          "2D vs 3D Development: Understanding different approaches",
          "Unity Editor Essentials: Scene management, GameObjects, components"
        ],
        project: "Simple 2D Game – Create a basic 2D game like Pong or Breakout",
        outcome: "Understanding of game development concepts and ability to use Unity for simple games"
      },
      {
        title: "Week 2: Game Mechanics & Scripting",
        content: [
          "C# Programming for Unity: Variables, functions, classes",
          "Physics and Collision Detection: Rigidbody, colliders, triggers",
          "Input Handling: Keyboard, mouse, touch, and controllers",
          "Character Controllers: Movement, jumping, animations"
        ],
        project: "Platform Game – Build a 2D platformer with character movement, obstacles, and collectibles",
        outcome: "Proficiency in implementing game mechanics and writing game logic with C#"
      },
      {
        title: "Week 3: Graphics & Animation",
        content: [
          "Game Art Fundamentals: Sprites, models, textures",
          "Animation Systems: Unity Animator, animation state machines",
          "Particle Systems: Effects, optimization",
          "Camera Controls: Following players, switching views"
        ],
        project: "Animated Adventure Game – Create a game with animated characters and visual effects",
        outcome: "Understanding of game graphics principles and ability to implement animations and effects"
      },
      {
        title: "Week 4: UI Systems & Game Management",
        content: [
          "Unity UI System: Buttons, panels, health bars, menus",
          "Game State Management: Scene transitions, saving/loading",
          "Audio Management: Sound effects, background music, mixing",
          "Game Progression: Levels, difficulty scaling, achievements"
        ],
        project: "Complete Game Loop – Develop a game with menus, multiple levels, and progression systems",
        outcome: "Ability to create complete game experiences with proper UI and game flow"
      },
      {
        title: "Week 5: Advanced Features & Optimization",
        content: [
          "AI for Games: Pathfinding, behavior trees, decision making",
          "Multiplayer Basics: Local multiplayer, network fundamentals",
          "Performance Optimization: Profiling, bottlenecks, optimization techniques",
          "Mobile-specific Considerations: Controls, performance, platform differences"
        ],
        project: "Advanced Game Project – Build a game with AI opponents and optimized for performance",
        outcome: "Skills to develop complex game systems and optimize games for different platforms"
      },
      {
        title: "Week 6: Deployment & Final Project",
        content: [
          "Build and Deployment: Platform-specific considerations",
          "Monetization Strategies: Free-to-play, premium, in-app purchases",
          "Marketing Your Game: Store listings, trailers, community building",
          "Final Project Development and Polish"
        ],
        project: "Capstone Game – Create a polished game ready for publishing on a chosen platform",
        outcome: "By the end of the course, you'll have a portfolio-ready game and the skills to pursue a career in game development"
      }
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    slug: "cyber-security",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2929605370.jpeg",
    description: "Master the essential skills of cyber security from network defense to ethical hacking with our comprehensive program designed for the modern security landscape.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Fundamentals of Cyber Security",
        content: [
          "Introduction to Cyber Security: History, evolution, importance",
          "Security Principles: CIA triad, defense in depth, least privilege",
          "Threat Landscape: Types of attacks, threat actors, vulnerabilities",
          "Security Tools Overview: Firewalls, IDS/IPS, SIEM systems"
        ],
        project: "Security Assessment Report – Conduct a basic security assessment of a system",
        outcome: "Understanding of core security concepts and ability to identify common security issues"
      },
      {
        title: "Week 2: Network Security",
        content: [
          "Network Fundamentals: TCP/IP, OSI model, protocols",
          "Network Attacks and Defenses: Sniffing, spoofing, DDoS",
          "Secure Network Architecture: Segmentation, DMZs, VPNs",
          "Wireless Network Security: WPA3, evil twin attacks, wireless security tools"
        ],
        project: "Network Security Implementation – Configure and test network security controls",
        outcome: "Proficiency in securing networks and identifying network-based attacks"
      },
      {
        title: "Week 3: System Security & Hardening",
        content: [
          "Operating System Security: Windows, Linux security fundamentals",
          "System Hardening Techniques: Configurations, updates, permissions",
          "Malware Analysis: Types, behaviors, detection methods",
          "Endpoint Protection: Anti-virus, EDR, application whitelisting"
        ],
        project: "System Hardening – Create a secure baseline configuration for a system",
        outcome: "Understanding of system security principles and ability to properly secure endpoints"
      },
      {
        title: "Week 4: Application Security",
        content: [
          "Web Application Security: OWASP Top 10 vulnerabilities",
          "Secure Coding Practices: Input validation, output encoding, secure APIs",
          "Application Security Testing: SAST, DAST, penetration testing",
          "DevSecOps: Integrating security into development workflows"
        ],
        project: "Vulnerability Assessment – Conduct security testing on a web application",
        outcome: "Ability to identify and mitigate application security vulnerabilities"
      },
      {
        title: "Week 5: Ethical Hacking & Incident Response",
        content: [
          "Ethical Hacking Methodology: Reconnaissance, scanning, gaining access",
          "Penetration Testing Tools: Kali Linux, Metasploit, Burp Suite",
          "Incident Response: Preparation, detection, containment, recovery",
          "Digital Forensics: Evidence collection, chain of custody, analysis"
        ],
        project: "Ethical Hacking Lab – Conduct a controlled penetration test in a lab environment",
        outcome: "Skills to perform ethical hacking and respond to security incidents"
      },
      {
        title: "Week 6: Governance & Final Project",
        content: [
          "Security Governance: Policies, standards, compliance",
          "Risk Management: Assessment, mitigation strategies",
          "Security Frameworks: NIST, ISO 27001, CIS Controls",
          "Career Paths in Cyber Security: Roles, certifications, industry trends"
        ],
        project: "Capstone Security Project – Develop a comprehensive security solution for an organization",
        outcome: "By the end of the course, you'll have practical experience in various security domains and be ready for entry-level cyber security positions"
      }
    ]
  },
  "cloud-computing": {
    title: "Cloud Computing",
    slug: "cloud-computing",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2572488399.jpeg",
    description: "Master cloud computing concepts and services with hands-on experience in AWS, Azure, and Google Cloud to become a cloud professional.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Cloud Computing",
        content: [
          "Cloud Computing Fundamentals: History, evolution, and business impact",
          "Cloud Service Models: IaaS, PaaS, SaaS, and emerging XaaS",
          "Cloud Deployment Models: Public, private, hybrid, multi-cloud",
          "Major Cloud Providers: AWS, Azure, Google Cloud Platform overview"
        ],
        project: "Cloud Comparison Report – Analyze and compare various cloud providers and their offerings",
        outcome: "Understanding of cloud computing concepts and ability to evaluate cloud services for business needs"
      },
      {
        title: "Week 2: AWS Fundamentals",
        content: [
          "AWS Global Infrastructure: Regions, Availability Zones, edge locations",
          "Core AWS Services: EC2, S3, RDS, VPC, IAM",
          "AWS Management Console and CLI: Configuration and basic operations",
          "AWS Pricing Models and Cost Optimization strategies"
        ],
        project: "AWS Architecture – Deploy a multi-tier application in AWS with proper security and scalability",
        outcome: "Proficiency in working with AWS core services and deploying basic cloud architectures"
      },
      {
        title: "Week 3: Microsoft Azure & Google Cloud",
        content: [
          "Azure Core Services: Virtual Machines, App Services, Storage, SQL Database",
          "Google Cloud Platform: Compute Engine, Cloud Storage, BigQuery",
          "Cross-Platform Tools and Strategies: Terraform, multi-cloud management",
          "Cloud Service Comparison: Selecting the right provider and services"
        ],
        project: "Multi-Cloud Strategy – Implement a simple application across multiple cloud platforms",
        outcome: "Understanding of multiple cloud providers and ability to work in multi-cloud environments"
      },
      {
        title: "Week 4: Cloud Security & Networking",
        content: [
          "Cloud Security Principles: Shared responsibility model, defense in depth",
          "Identity and Access Management: Users, roles, policies, MFA",
          "Network Security: VPCs, security groups, NACLs, firewalls",
          "Data Protection: Encryption at rest and in transit, key management"
        ],
        project: "Secure Cloud Environment – Design and implement a secure cloud architecture with proper security controls",
        outcome: "Ability to implement cloud security best practices and secure cloud deployments"
      },
      {
        title: "Week 5: Cloud-Native & DevOps",
        content: [
          "Containers and Orchestration: Docker, Kubernetes, ECS/EKS/AKS/GKE",
          "Infrastructure as Code: CloudFormation, ARM Templates, Terraform",
          "CI/CD in the Cloud: CodePipeline, Azure DevOps, Cloud Build",
          "Monitoring and Logging: CloudWatch, Azure Monitor, Stackdriver"
        ],
        project: "CI/CD Pipeline – Create an automated pipeline for deploying containerized applications",
        outcome: "Skills to implement cloud-native applications and DevOps practices in cloud environments"
      },
      {
        title: "Week 6: Serverless & Final Project",
        content: [
          "Serverless Computing: AWS Lambda, Azure Functions, Cloud Functions",
          "API Gateways and Event-driven Architecture",
          "Microservices and Service Mesh concepts",
          "Cloud Migration Strategies: Rehost, replatform, refactor, rebuild"
        ],
        project: "Capstone Cloud Project – Build a comprehensive, serverless application demonstrating cloud best practices",
        outcome: "By the end of the course, you'll have hands-on experience with multiple cloud platforms and be prepared for cloud computing roles"
      }
    ]
  },
  "embedded-systems": {
    title: "Embedded Systems",
    slug: "embedded-systems",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2572488399.jpeg",
    description: "Master the design and development of embedded systems for IoT, industrial automation, and consumer electronics in this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Embedded Systems",
        content: [
          "Fundamentals of Embedded Systems: Definition, types, applications",
          "Microcontroller Architecture: CPU, memory, peripherals",
          "Introduction to Development Boards: Arduino, ESP32, STM32",
          "Basic Electronics: Components, circuits, sensors, actuators"
        ],
        project: "Simple Control System – Build a basic embedded system using Arduino controlling LEDs and sensors",
        outcome: "Understanding of embedded system concepts and ability to create simple microcontroller projects"
      },
      {
        title: "Week 2: Embedded Programming",
        content: [
          "C Programming for Embedded Systems: Pointers, structures, bit manipulation",
          "Real-time Programming Concepts: Interrupts, timers, tasks",
          "Hardware Interfaces: GPIO, ADC, DAC, PWM",
          "Communication Protocols: UART, SPI, I2C"
        ],
        project: "Environmental Monitoring System – Create a device that monitors temperature, humidity, and light levels",
        outcome: "Proficiency in embedded programming and interfacing with various hardware components"
      },
      {
        title: "Week 3: Real-time Operating Systems",
        content: [
          "RTOS Fundamentals: Tasks, scheduling, synchronization",
          "FreeRTOS Implementation: Task creation, queues, semaphores",
          "Resource Management: Memory, power, peripherals",
          "Debugging Techniques: Logic analyzers, oscilloscopes, JTAG"
        ],
        project: "Multi-tasking Control System – Implement an RTOS-based application with multiple concurrent tasks",
        outcome: "Understanding of real-time operating systems and ability to design multitasking embedded applications"
      },
      {
        title: "Week 4: IoT & Connectivity",
        content: [
          "IoT Architecture and Protocols: MQTT, CoAP, HTTP",
          "Wireless Communication: WiFi, Bluetooth, LoRa, ZigBee",
          "Cloud Integration: AWS IoT, Azure IoT Hub, Google Cloud IoT",
          "Security for Embedded Systems: Encryption, secure boot, authentication"
        ],
        project: "Connected IoT Device – Build an internet-connected embedded system that sends data to the cloud",
        outcome: "Ability to create networked embedded systems and connect them to cloud platforms"
      },
      {
        title: "Week 5: Advanced Embedded Systems",
        content: [
          "Embedded Linux: Yocto Project, Buildroot, device drivers",
          "Digital Signal Processing: Filters, FFT, audio processing",
          "Computer Vision on Embedded Systems: OpenCV, object detection",
          "Machine Learning for Edge Devices: TensorFlow Lite, model optimization"
        ],
        project: "Smart Camera System – Create an embedded vision system that can detect and track objects",
        outcome: "Skills to implement advanced features like computer vision and machine learning on embedded devices"
      },
      {
        title: "Week 6: System Design & Final Project",
        content: [
          "Hardware-Software Co-design: Requirements, architecture, interfaces",
          "PCB Design Fundamentals: Schematics, layout, manufacturing considerations",
          "Testing and Validation: Unit testing, integration testing, environmental testing",
          "Product Development Lifecycle: Prototyping to production"
        ],
        project: "Capstone Embedded Project – Design and build a complete embedded system solution for a real-world problem",
        outcome: "By the end of the course, you'll have a portfolio-ready embedded system project and the skills for an embedded systems career"
      }
    ]
  },
  "data-science": {
    title: "Data Science",
    slug: "data-science",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the art of extracting insights from data with our comprehensive Data Science program covering statistics, machine learning, and data visualization.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Foundations of Data Science",
        content: [
          "Introduction to Data Science: History, applications, and career paths",
          "Data Science Workflow: Problem definition to deployment",
          "Python for Data Science: NumPy, Pandas, Matplotlib",
          "Statistical Foundations: Descriptive statistics, probability distributions"
        ],
        project: "Exploratory Data Analysis – Analyze a real-world dataset and extract meaningful insights",
        outcome: "Understanding of data science fundamentals and ability to perform basic data analysis"
      },
      {
        title: "Week 2: Data Wrangling & Visualization",
        content: [
          "Data Collection: APIs, web scraping, databases",
          "Data Cleaning: Handling missing values, outliers, duplicates",
          "Data Transformation: Feature engineering, normalization",
          "Data Visualization: Matplotlib, Seaborn, Plotly for storytelling with data"
        ],
        project: "Data Dashboard – Create an interactive visualization dashboard for complex datasets",
        outcome: "Proficiency in preparing and visualizing data for analysis"
      },
      {
        title: "Week 3: Machine Learning Fundamentals",
        content: [
          "Introduction to Machine Learning: Supervised vs. unsupervised learning",
          "Regression Algorithms: Linear, polynomial, regularization techniques",
          "Classification Algorithms: Logistic regression, decision trees, random forests",
          "Model Evaluation: Cross-validation, metrics, overfitting prevention"
        ],
        project: "Predictive Model – Build and evaluate machine learning models for prediction tasks",
        outcome: "Understanding of machine learning principles and ability to implement basic ML models"
      },
      {
        title: "Week 4: Advanced Machine Learning",
        content: [
          "Clustering Algorithms: K-means, hierarchical, DBSCAN",
          "Dimensionality Reduction: PCA, t-SNE",
          "Ensemble Methods: Bagging, boosting, stacking",
          "Deep Learning Introduction: Neural networks, TensorFlow/PyTorch basics"
        ],
        project: "Customer Segmentation – Apply advanced ML techniques to segment customers and extract insights",
        outcome: "Ability to implement and evaluate advanced machine learning models"
      },
      {
        title: "Week 5: Big Data & Deployment",
        content: [
          "Big Data Ecosystem: Hadoop, Spark",
          "SQL and NoSQL Databases: Data storage and retrieval",
          "Model Deployment: Flask, Docker, cloud platforms",
          "MLOps Introduction: Model versioning, monitoring, and updating"
        ],
        project: "Deployed ML Solution – Deploy a machine learning model as a web service",
        outcome: "Skills to work with large datasets and deploy models to production"
      },
      {
        title: "Week 6: Specialized Topics & Final Project",
        content: [
          "Natural Language Processing: Text preprocessing, sentiment analysis",
          "Time Series Analysis: Forecasting, ARIMA, Prophet",
          "Ethical Considerations: Bias, fairness, privacy",
          "Data Science Project Management: Scoping, execution, communication"
        ],
        project: "Capstone Data Science Project – Solve a complex real-world problem with data science techniques",
        outcome: "By the end of the course, you'll have a portfolio-ready data science project and skills for data science roles"
      }
    ]
  },
  "python": {
    title: "Python",
    slug: "python",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/1351081944.jpeg",
    description: "Master Python programming from basics to advanced concepts and build real-world applications in this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Python",
        content: [
          "Python Basics: Installation, environment setup, syntax",
          "Data Types: Numbers, strings, lists, tuples, dictionaries",
          "Control Structures: Conditional statements, loops",
          "Functions: Definition, parameters, return values, scope"
        ],
        project: "Console-based Application – Build a simple command-line tool to solve a practical problem",
        outcome: "Understanding of Python fundamentals and ability to write basic Python programs"
      },
      {
        title: "Week 2: Object-Oriented Python",
        content: [
          "OOP Concepts: Classes, objects, attributes, methods",
          "Inheritance, Encapsulation, Polymorphism",
          "Modules and Packages: Creating and importing",
          "File Operations: Reading, writing, handling different formats"
        ],
        project: "Object-Oriented System – Implement a small system using OOP principles",
        outcome: "Proficiency in writing well-structured, object-oriented Python code"
      },
      {
        title: "Week 3: Web Development with Python",
        content: [
          "Web Development Fundamentals with Flask",
          "Routing, Templates, and Forms",
          "Database Integration: SQLAlchemy, SQL basics",
          "RESTful API Development"
        ],
        project: "Web Application – Create a dynamic web application with user authentication and database",
        outcome: "Understanding of web development with Python and ability to build web applications"
      },
      {
        title: "Week 4: Data Science with Python",
        content: [
          "Scientific Libraries: NumPy, Pandas",
          "Data Visualization: Matplotlib, Seaborn",
          "Statistical Analysis with SciPy",
          "Introduction to Machine Learning with Scikit-learn"
        ],
        project: "Data Analysis Tool – Build an application that analyzes and visualizes complex datasets",
        outcome: "Ability to use Python for data analysis and create data-driven insights"
      },
      {
        title: "Week 5: Python for Automation & Testing",
        content: [
          "Automation Scripting: OS operations, batch processing",
          "Web Scraping with BeautifulSoup and Selenium",
          "Testing Frameworks: Pytest, unittest",
          "API Interaction and Automation"
        ],
        project: "Automation System – Develop scripts to automate repetitive tasks or processes",
        outcome: "Skills to automate tasks and implement proper testing practices in Python"
      },
      {
        title: "Week 6: Advanced Topics & Final Project",
        content: [
          "Concurrency: Threading, multiprocessing, async/await",
          "Design Patterns in Python",
          "Performance Optimization Techniques",
          "Packaging and Distribution: Creating installable packages"
        ],
        project: "Capstone Python Project – Build a comprehensive Python application showcasing multiple skills",
        outcome: "By the end of the course, you'll have a strong Python portfolio and be ready for professional Python development"
      }
    ]
  },
  "dsa-with-cpp": {
    title: "DSA with C++",
    slug: "dsa-with-cpp",
    category: "Tech Data",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/1351081944.jpeg",
    description: "Master Data Structures and Algorithms with C++ to solve complex programming problems and excel in technical interviews.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: C++ Fundamentals & Basic Data Structures",
        content: [
          "C++ Basics: Variables, operators, control flow",
          "Functions, References, and Pointers",
          "Object-Oriented Programming in C++",
          "Basic Data Structures: Arrays, Strings, Linked Lists"
        ],
        project: "Implementation of Basic Data Structures – Build custom implementations of fundamental data structures",
        outcome: "Understanding of C++ fundamentals and ability to implement basic data structures"
      },
      {
        title: "Week 2: Advanced Data Structures",
        content: [
          "Stacks and Queues: Implementation and applications",
          "Trees: Binary Trees, BST, AVL Trees",
          "Heaps and Priority Queues",
          "Hash Tables and Collision Resolution Strategies"
        ],
        project: "Custom Data Structures Library – Develop a comprehensive library of advanced data structures",
        outcome: "Proficiency in implementing and using complex data structures"
      },
      {
        title: "Week 3: Algorithm Design & Analysis",
        content: [
          "Algorithm Analysis: Time and Space Complexity",
          "Big O, Theta, and Omega Notations",
          "Recursion and Divide-and-Conquer Algorithms",
          "Dynamic Programming Fundamentals"
        ],
        project: "Algorithm Analysis Tool – Create a tool to analyze and compare algorithm performance",
        outcome: "Understanding of algorithm analysis and ability to design efficient algorithms"
      },
      {
        title: "Week 4: Searching & Sorting Algorithms",
        content: [
          "Searching Algorithms: Linear, Binary, Interpolation Search",
          "Basic Sorting: Bubble, Selection, Insertion Sort",
          "Advanced Sorting: Merge Sort, Quick Sort, Heap Sort",
          "Specialized Sorting Algorithms: Counting Sort, Radix Sort"
        ],
        project: "Sorting Algorithm Visualizer – Develop a tool to visualize and compare sorting algorithms",
        outcome: "Ability to implement and analyze various searching and sorting algorithms"
      },
      {
        title: "Week 5: Graph Algorithms & Advanced Topics",
        content: [
          "Graph Representations and Traversals: BFS, DFS",
          "Shortest Path Algorithms: Dijkstra's, Bellman-Ford",
          "Minimum Spanning Trees: Prim's, Kruskal's",
          "String Algorithms: KMP, Rabin-Karp, Tries"
        ],
        project: "Graph Algorithm Implementation – Build a library of graph algorithms with practical applications",
        outcome: "Skills to implement and apply complex graph algorithms and other advanced topics"
      },
      {
        title: "Week 6: Competitive Programming & Interviews",
        content: [
          "Problem-Solving Strategies for Coding Interviews",
          "Common Interview Problems and Patterns",
          "Space and Time Optimization Techniques",
          "System Design Basics"
        ],
        project: "Capstone DSA Project – Solve a complex real-world problem using appropriate data structures and algorithms",
        outcome: "By the end of the course, you'll be prepared for technical interviews and have strong problem-solving skills"
      }
    ]
  },
  "power-bi": {
    title: "Power BI",
    slug: "power-bi",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/3810584897.jpeg",
    description: "Master Microsoft Power BI for data visualization, business analytics, and creating impactful dashboards to drive data-driven decisions.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Power BI & Data Fundamentals",
        content: [
          "Introduction to Business Intelligence and Analytics",
          "Power BI Desktop: Interface, components, and installation",
          "Data Sources: Connecting to various data sources",
          "Data Import and Transformation Basics with Power Query"
        ],
        project: "Basic Dashboard – Create a simple dashboard using sample data",
        outcome: "Understanding of Power BI fundamentals and ability to import and connect to data sources"
      },
      {
        title: "Week 2: Data Modeling & Relationships",
        content: [
          "Data Modeling Best Practices",
          "Creating and Managing Relationships",
          "Star and Snowflake Schema Design",
          "Calculated Columns and Measures with DAX Basics"
        ],
        project: "Multi-table Dashboard – Build a dashboard with proper data modeling and relationships",
        outcome: "Proficiency in data modeling and creating relationships between tables for effective analysis"
      },
      {
        title: "Week 3: Advanced DAX & Calculations",
        content: [
          "DAX Functions: Date & Time, Text, Logical, Math",
          "Context in DAX: Row, Filter, and Query Context",
          "Advanced Calculations: Time Intelligence, Running Totals",
          "Creating Complex KPIs and Business Metrics"
        ],
        project: "KPI Dashboard – Create a dashboard with advanced calculations and business metrics",
        outcome: "Understanding of DAX and ability to create complex calculations for business insights"
      },
      {
        title: "Week 4: Data Visualization & Dashboard Design",
        content: [
          "Visualization Types: Tables, Charts, Maps, and Cards",
          "Dashboard Design Principles and Best Practices",
          "Custom Visuals from the Marketplace",
          "Interactivity: Filters, Slicers, and Drill-through"
        ],
        project: "Interactive Sales Dashboard – Develop a comprehensive dashboard with multiple interactive elements",
        outcome: "Ability to create effective and visually appealing dashboards that communicate insights"
      },
      {
        title: "Week 5: Power BI Service & Collaboration",
        content: [
          "Publishing Reports to Power BI Service",
          "Creating and Managing Workspaces",
          "Sharing and Collaboration Features",
          "Row-Level Security and Data Governance"
        ],
        project: "Collaborative Reporting Solution – Implement a shared reporting solution with proper security",
        outcome: "Skills to deploy, share, and manage Power BI solutions in an organization"
      },
      {
        title: "Week 6: Advanced Topics & Final Project",
        content: [
          "Power BI with R and Python Integration",
          "Advanced Analytics: Forecasting, Clustering, Outlier Detection",
          "Performance Optimization Techniques",
          "Embedding Power BI Reports and APIs"
        ],
        project: "Capstone Power BI Project – Create an enterprise-grade analytics solution addressing a business problem",
        outcome: "By the end of the course, you'll have expert-level Power BI skills and the ability to implement complete BI solutions"
      }
    ]
  },
  "stock-market": {
    title: "Stock Market",
    slug: "stock-market",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/3810584897.jpeg",
    description: "Master stock market investing, trading strategies, and technical analysis to make informed financial decisions in this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Stock Market Fundamentals",
        content: [
          "Introduction to Financial Markets: Structure, participants, exchanges",
          "Stock Market Basics: Shares, indices, market capitalization",
          "Market Mechanics: Orders, execution, settlement processes",
          "Investment vs Trading: Timeframes, strategies, mindset"
        ],
        project: "Market Analysis Report – Create a comprehensive analysis of a major stock market index",
        outcome: "Understanding of stock market fundamentals and ability to navigate the market landscape"
      },
      {
        title: "Week 2: Fundamental Analysis",
        content: [
          "Financial Statements Analysis: Balance sheet, income statement, cash flow",
          "Key Financial Ratios: P/E, P/B, ROE, debt-to-equity",
          "Industry Analysis: Sector performance, competitive positioning",
          "Valuation Models: DCF, relative valuation, intrinsic value"
        ],
        project: "Company Valuation – Conduct a detailed fundamental analysis of a publicly traded company",
        outcome: "Proficiency in analyzing company financials and determining investment worthiness"
      },
      {
        title: "Week 3: Technical Analysis",
        content: [
          "Chart Patterns: Support/resistance, trends, reversals",
          "Technical Indicators: Moving averages, RSI, MACD, Bollinger Bands",
          "Volume Analysis: Volume patterns and indicators",
          "Candlestick Patterns: Doji, hammers, engulfing patterns"
        ],
        project: "Technical Trading Strategy – Develop and backtest a technical analysis-based trading system",
        outcome: "Understanding of technical analysis and ability to identify trading opportunities"
      },
      {
        title: "Week 4: Trading Strategies & Risk Management",
        content: [
          "Trading Styles: Day trading, swing trading, position trading",
          "Trading Plan Development: Entry, exit, position sizing",
          "Risk Management Techniques: Stop-loss, risk-reward ratio",
          "Portfolio Management: Diversification, allocation, rebalancing"
        ],
        project: "Trading System Development – Create a comprehensive trading plan with risk management rules",
        outcome: "Ability to develop and implement disciplined trading strategies with proper risk management"
      },
      {
        title: "Week 5: Advanced Market Analysis",
        content: [
          "Derivatives: Options, futures, their role in hedging and speculation",
          "Algorithmic Trading: Principles, strategies, limitations",
          "Market Sentiment Analysis: News impact, sentiment indicators",
          "Macroeconomic Factors: Interest rates, inflation, economic indicators"
        ],
        project: "Market Strategy Implementation – Apply advanced analysis techniques to create a market strategy",
        outcome: "Skills to incorporate advanced market tools and economic factors into trading decisions"
      },
      {
        title: "Week 6: Psychology & Final Project",
        content: [
          "Trading Psychology: Emotions, biases, discipline",
          "Performance Analysis: Journaling, metrics, improvement",
          "Practical Implementation: Brokers, tools, platforms",
          "Long-term Wealth Creation Strategies"
        ],
        project: "Capstone Portfolio Strategy – Develop a complete investing/trading plan with portfolio construction",
        outcome: "By the end of the course, you'll have a comprehensive understanding of stock markets and the ability to make informed investment decisions"
      }
    ]
  },
  "human-resources": {
    title: "Human Resources",
    slug: "human-resources",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2917207423.jpeg",
    description: "Master modern human resource management practices, from talent acquisition to employee development and HR analytics, in this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Foundations of Human Resource Management",
        content: [
          "Introduction to HR: Evolution, functions, and strategic role",
          "HR Planning: Workforce planning, job analysis, competency mapping",
          "HR Policies and Procedures: Development and implementation",
          "Legal and Ethical Framework: Employment laws, compliance, ethics"
        ],
        project: "HR Policy Manual – Develop a comprehensive HR policy framework for an organization",
        outcome: "Understanding of HR fundamentals and ability to create effective HR policies"
      },
      {
        title: "Week 2: Talent Acquisition & Onboarding",
        content: [
          "Recruitment Strategies: Sourcing, screening, selection methods",
          "Interview Techniques: Structured interviews, behavioral assessment",
          "Employer Branding: EVP development, candidate experience",
          "Onboarding Programs: Design, implementation, and measurement"
        ],
        project: "Recruitment Strategy – Create a complete recruitment and onboarding process for a specific role",
        outcome: "Proficiency in designing effective recruitment processes and onboarding experiences"
      },
      {
        title: "Week 3: Performance Management & Compensation",
        content: [
          "Performance Management Systems: Goal setting, feedback, reviews",
          "Compensation Structure Design: Salary bands, incentives, benefits",
          "Total Rewards Strategy: Monetary and non-monetary rewards",
          "Recognition Programs: Types, implementation, effectiveness"
        ],
        project: "Performance Management System – Design a comprehensive performance and rewards framework",
        outcome: "Understanding of performance management and ability to develop effective compensation structures"
      },
      {
        title: "Week 4: Employee Development & Engagement",
        content: [
          "Learning & Development: Training needs analysis, program design",
          "Career Path Planning: Development plans, succession planning",
          "Employee Engagement: Drivers, measurement, improvement strategies",
          "Organizational Culture: Assessment, development, transformation"
        ],
        project: "Employee Development Program – Create a comprehensive L&D and engagement initiative",
        outcome: "Ability to design development programs that enhance engagement and retention"
      },
      {
        title: "Week 5: HR Analytics & Technology",
        content: [
          "HR Metrics and KPIs: Selection, tracking, analysis",
          "Data-Driven HR Decision Making: Analytics tools and methodologies",
          "HR Information Systems: Selection, implementation, optimization",
          "HR Technology Landscape: ATS, HRIS, performance tools, LMS"
        ],
        project: "HR Analytics Dashboard – Develop an analytics solution for HR decision-making",
        outcome: "Skills to leverage data and technology for improved HR effectiveness"
      },
      {
        title: "Week 6: Strategic HR & Final Project",
        content: [
          "Strategic HR: Alignment with business goals, HR strategy development",
          "Change Management: Models, implementation, overcoming resistance",
          "Organizational Design: Structures, workflows, efficiency",
          "Future of Work: Remote work, gig economy, automation impact"
        ],
        project: "Capstone HR Strategy – Develop a complete HR strategic plan for an organization",
        outcome: "By the end of the course, you'll have the ability to contribute strategically to organizations through effective HR practices"
      }
    ]
  },
  "finance": {
    title: "Finance",
    slug: "finance",
    category: "Business",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/618156311.jpeg",
    description: "Master financial principles, investment strategies, and financial analysis to make informed business and personal financial decisions.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Financial Principles & Analysis",
        content: [
          "Introduction to Financial Management: Goals, functions, importance",
          "Financial Statements Analysis: Balance sheet, income statement, cash flow",
          "Financial Ratios: Profitability, liquidity, solvency, efficiency",
          "Time Value of Money: Present value, future value, annuities"
        ],
        project: "Financial Analysis Report – Conduct a comprehensive financial analysis of a company",
        outcome: "Understanding of financial principles and ability to analyze financial statements"
      },
      {
        title: "Week 2: Corporate Finance & Valuation",
        content: [
          "Capital Budgeting: NPV, IRR, payback period",
          "Cost of Capital: WACC, cost of debt, cost of equity",
          "Financial Planning and Forecasting",
          "Company Valuation Methods: DCF, multiples, asset-based"
        ],
        project: "Investment Decision Model – Create a capital budgeting model for evaluating investments",
        outcome: "Proficiency in making capital allocation decisions and valuing businesses"
      },
      {
        title: "Week 3: Investment Management",
        content: [
          "Investment Principles: Risk and return, diversification",
          "Asset Classes: Stocks, bonds, alternatives",
          "Portfolio Theory: Modern Portfolio Theory, asset allocation",
          "Investment Strategies: Active vs. passive, factor investing"
        ],
        project: "Portfolio Construction – Develop an investment portfolio with proper asset allocation",
        outcome: "Understanding of investment management principles and ability to construct portfolios"
      },
      {
        title: "Week 4: Risk Management & Insurance",
        content: [
          "Risk Management Process: Identification, assessment, mitigation",
          "Financial Risk Types: Market, credit, liquidity, operational",
          "Derivatives for Risk Management: Futures, options, swaps",
          "Insurance Principles: Life, health, property, liability"
        ],
        project: "Risk Management Strategy – Create a comprehensive risk management plan for an organization",
        outcome: "Ability to identify financial risks and develop appropriate mitigation strategies"
      },
      {
        title: "Week 5: Personal Financial Planning",
        content: [
          "Budgeting and Cash Flow Management",
          "Retirement Planning: Calculations, strategies, accounts",
          "Tax Planning: Income, investment, estate considerations",
          "Estate Planning: Wills, trusts, wealth transfer"
        ],
        project: "Comprehensive Financial Plan – Develop a personal financial plan addressing multiple goals",
        outcome: "Skills to create effective financial plans for individuals and families"
      },
      {
        title: "Week 6: Financial Markets & Final Project",
        content: [
          "Global Financial System: Markets, institutions, regulations",
          "Economic Indicators and Their Impact on Finance",
          "Fintech and Innovation in Finance",
          "Ethical Considerations in Financial Decision Making"
        ],
        project: "Capstone Finance Project – Address a complex financial problem with a comprehensive solution",
        outcome: "By the end of the course, you'll have a solid foundation in finance and the ability to make informed financial decisions"
      }
    ]
  },
  "ui-ux": {
    title: "UI/UX",
    slug: "ui-ux",
    category: "Design",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the art and science of user interface and user experience design to create beautiful, intuitive, and user-centered digital products.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: UX Fundamentals & Research",
        content: [
          "Introduction to UX Design: Principles, process, importance",
          "User Research Methods: Interviews, surveys, personas",
          "Information Architecture: Site maps, user flows, navigation",
          "UX Strategy: Business goals, user needs, project planning"
        ],
        project: "User Research Report – Conduct user research and create personas for a digital product",
        outcome: "Understanding of UX fundamentals and ability to conduct effective user research"
      },
      {
        title: "Week 2: UI Design Fundamentals",
        content: [
          "UI Design Principles: Visual hierarchy, contrast, alignment",
          "Color Theory and Typography for Digital Interfaces",
          "Design Systems and Component Libraries",
          "Tools of the Trade: Figma, Sketch, Adobe XD"
        ],
        project: "UI Style Guide – Create a comprehensive UI style guide for a digital product",
        outcome: "Proficiency in UI design principles and creating cohesive visual systems"
      },
      {
        title: "Week 3: Interaction Design & Prototyping",
        content: [
          "Interaction Design Patterns and Best Practices",
          "Micro-interactions and Animation Principles",
          "Wireframing: Low to high-fidelity wireframes",
          "Interactive Prototyping: Tools and techniques"
        ],
        project: "Interactive Prototype – Build an interactive prototype demonstrating user flows",
        outcome: "Understanding of interaction design and ability to create effective prototypes"
      },
      {
        title: "Week 4: Responsive & Cross-Platform Design",
        content: [
          "Responsive Design Principles: Mobile-first, breakpoints",
          "Designing for Different Platforms: Web, mobile, tablet",
          "Accessibility in Design: WCAG guidelines, inclusive design",
          "Dark Mode and Theme Implementation"
        ],
        project: "Responsive Design System – Create a responsive design system for multiple platforms",
        outcome: "Ability to design seamless experiences across different devices and platforms"
      },
      {
        title: "Week 5: Usability Testing & Iteration",
        content: [
          "Usability Testing Methods: Moderated, unmoderated",
          "Analytics and Data-Informed Design",
          "A/B Testing and Experimentation",
          "Design Critique and Iteration Process"
        ],
        project: "Usability Test & Iteration – Conduct usability tests and iterate on a design based on feedback",
        outcome: "Skills to evaluate designs through testing and improve them through iteration"
      },
      {
        title: "Week 6: Advanced Topics & Final Project",
        content: [
          "Design Leadership and Collaboration with Developers",
          "UX Writing and Content Strategy",
          "Emerging Trends: Voice UI, AR/VR, AI-driven design",
          "Portfolio Development and Presentation"
        ],
        project: "Capstone UI/UX Project – Complete an end-to-end design project from research to high-fidelity prototype",
        outcome: "By the end of the course, you'll have a professional UI/UX portfolio and the skills to design user-centered digital products"
      }
    ]
  },
  "graphics-designing": {
    title: "Graphics Designing",
    slug: "graphics-designing",
    category: "Design",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the fundamentals of graphic design and create impactful visual content for print and digital media in this comprehensive program.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Fundamentals of Design & Visual Principles",
        content: [
          "Introduction to Graphic Design: History, importance, career paths",
          "Design Elements: Line, shape, color, texture, space",
          "Design Principles: Balance, contrast, hierarchy, unity",
          "Color Theory: Color wheels, schemes, psychology, applications"
        ],
        project: "Design Fundamentals Portfolio – Create compositions demonstrating core design principles",
        outcome: "Understanding of design fundamentals and ability to apply visual principles effectively"
      },
      {
        title: "Week 2: Digital Design Tools & Typography",
        content: [
          "Introduction to Adobe Creative Suite: Illustrator, Photoshop, InDesign",
          "Vector vs Raster Graphics: Understanding and applications",
          "Typography Fundamentals: Anatomy, classification, pairing",
          "Typography in Design: Hierarchy, readability, expression"
        ],
        project: "Typographic Poster – Design a poster with focus on effective typography and layout",
        outcome: "Proficiency in using design software and applying typographic principles"
      },
      {
        title: "Week 3: Brand Identity Design",
        content: [
          "Branding Fundamentals: Identity, strategy, guidelines",
          "Logo Design Process: Research, sketching, execution",
          "Brand Assets: Business cards, letterheads, social media",
          "Brand Guidelines: Creating comprehensive style guides"
        ],
        project: "Brand Identity Package – Design a complete brand identity for a company or product",
        outcome: "Understanding of branding principles and ability to create cohesive brand identities"
      },
      {
        title: "Week 4: Print & Digital Design",
        content: [
          "Print Design Essentials: Resolution, bleeds, print processes",
          "Editorial Design: Magazine layouts, grids, hierarchy",
          "Digital Design Principles: Web, mobile, responsive considerations",
          "Designing for Different Platforms: Social media, email, web"
        ],
        project: "Multi-platform Campaign – Create a design campaign across print and digital media",
        outcome: "Ability to design for both print and digital contexts with appropriate techniques"
      },
      {
        title: "Week 5: Illustration & Advanced Techniques",
        content: [
          "Digital Illustration Techniques: Drawing, tracing, stylization",
          "Photo Manipulation and Compositing",
          "3D Elements in Graphic Design",
          "Motion Graphics Principles"
        ],
        project: "Illustration Series – Create a series of illustrations or advanced graphic compositions",
        outcome: "Skills to create custom illustrations and apply advanced design techniques"
      },
      {
        title: "Week 6: Professional Practice & Final Project",
        content: [
          "Design Process: Client briefs, ideation, presentation",
          "Portfolio Development: Curation, presentation, storytelling",
          "Professional Ethics and Copyright in Design",
          "Freelancing and Design Business Basics"
        ],
        project: "Capstone Design Project – Complete a comprehensive design project from concept to execution",
        outcome: "By the end of the course, you'll have a professional graphic design portfolio and real-world skills"
      }
    ]
  },
  "photoshop": {
    title: "Photoshop",
    slug: "photoshop",
    category: "Design",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master Adobe Photoshop from beginner to professional level and create stunning digital artwork, photo manipulations, and design assets.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Photoshop Fundamentals & Interface",
        content: [
          "Introduction to Photoshop: Interface, tools, panels",
          "Document Setup: Resolution, color modes, canvas size",
          "Selection Tools: Marquee, lasso, magic wand, quick selection",
          "Layers Basics: Creation, management, blending modes"
        ],
        project: "Basic Compositions – Create simple compositions using basic tools and techniques",
        outcome: "Understanding of Photoshop interface and ability to use fundamental tools effectively"
      },
      {
        title: "Week 2: Photo Editing & Retouching",
        content: [
          "Image Adjustments: Levels, curves, hue/saturation",
          "Retouching Tools: Healing brush, clone stamp, patch tool",
          "Portrait Retouching: Skin, eyes, teeth enhancement",
          "Color Correction and Grading Techniques"
        ],
        project: "Photo Restoration – Restore and retouch damaged photographs or portraits",
        outcome: "Proficiency in photo editing and retouching techniques for various applications"
      },
      {
        title: "Week 3: Selections, Masks & Compositing",
        content: [
          "Advanced Selection Techniques: Refine edge, channels",
          "Layer Masks and Vector Masks",
          "Compositing Fundamentals: Blending images seamlessly",
          "Adjustment Layers and Smart Objects"
        ],
        project: "Fantasy Composite – Create a complex photo composition with multiple elements",
        outcome: "Understanding of selection techniques and ability to create professional composites"
      },
      {
        title: "Week 4: Digital Painting & Effects",
        content: [
          "Digital Painting Techniques: Brushes, opacity, flow",
          "Layer Styles: Drop shadow, bevel, emboss, gradient overlay",
          "Text Effects and Typography in Photoshop",
          "Filter Gallery and Smart Filters"
        ],
        project: "Digital Artwork – Create an original digital painting or advanced text effect",
        outcome: "Ability to utilize Photoshop's creative tools for digital art and special effects"
      },
      {
        title: "Week 5: Web & UI Design in Photoshop",
        content: [
          "Designing for Web: Resolution, file formats, optimization",
          "UI/UX Design Elements in Photoshop",
          "Mockup Creation and Presentation",
          "Exporting Assets for Development"
        ],
        project: "Website/App Design – Create a complete website or app interface in Photoshop",
        outcome: "Skills to design web and UI elements with proper preparation for implementation"
      },
      {
        title: "Week 6: Advanced Techniques & Final Project",
        content: [
          "Actions and Batch Processing",
          "3D Capabilities in Photoshop",
          "Integration with Other Adobe Applications",
          "Workflow Optimization and Professional Practices"
        ],
        project: "Capstone Photoshop Project – Complete a comprehensive project showcasing multiple techniques",
        outcome: "By the end of the course, you'll have advanced Photoshop skills and a portfolio of professional-quality work"
      }
    ]
  },
  "anatomy": {
    title: "Anatomy",
    slug: "anatomy",
    category: "Medical",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master human anatomy with this comprehensive program covering structural organization, organ systems, and clinical correlations.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Human Anatomy & Cells/Tissues",
        content: [
          "Anatomical Terminology and Body Organization",
          "Cellular Structure and Function",
          "Tissue Types: Epithelial, Connective, Muscular, Nervous",
          "Histology: Microscopic Anatomy and Tissue Identification"
        ],
        project: "Tissue Identification Report – Identify and describe various tissue types from histological slides",
        outcome: "Understanding of anatomical terminology and ability to identify different tissue types"
      },
      {
        title: "Week 2: Musculoskeletal System",
        content: [
          "Skeletal System: Bone Structure, Classification, Development",
          "Axial and Appendicular Skeleton",
          "Joints: Classifications, Movements, Clinical Aspects",
          "Muscular System: Structure, Function, Major Muscle Groups"
        ],
        project: "Musculoskeletal Analysis – Create a detailed analysis of a joint and its associated muscles",
        outcome: "Proficiency in identifying bones, joints, and muscles and understanding their functional relationships"
      },
      {
        title: "Week 3: Cardiovascular & Respiratory Systems",
        content: [
          "Heart: Structure, Chambers, Valves, Conduction System",
          "Blood Vessels: Arteries, Veins, Capillaries",
          "Respiratory System: Upper and Lower Respiratory Tracts",
          "Lungs: Structure, Bronchial Tree, Alveoli"
        ],
        project: "Cardiorespiratory Model – Create a model showing the relationship between cardiac and pulmonary circulation",
        outcome: "Understanding of cardiovascular and respiratory system anatomy and their integrated functions"
      },
      {
        title: "Week 4: Digestive, Urinary & Reproductive Systems",
        content: [
          "Digestive System: GI Tract, Accessory Organs",
          "Urinary System: Kidneys, Ureters, Bladder, Urethra",
          "Male Reproductive System: Testes, Ducts, Accessory Glands",
          "Female Reproductive System: Ovaries, Uterus, Vagina, External Genitalia"
        ],
        project: "System Cross-section – Develop detailed cross-sectional diagrams of abdominal and pelvic organs",
        outcome: "Ability to identify and describe the structures of digestive, urinary, and reproductive systems"
      },
      {
        title: "Week 5: Nervous System & Special Senses",
        content: [
          "Central Nervous System: Brain, Spinal Cord",
          "Peripheral Nervous System: Cranial and Spinal Nerves",
          "Autonomic Nervous System: Sympathetic and Parasympathetic",
          "Special Senses: Eye, Ear, Taste, Smell"
        ],
        project: "Neuroanatomy Mapping – Create a detailed map of neural pathways for a sensory or motor function",
        outcome: "Skills to identify neural structures and understand the anatomical basis of neurological functions"
      },
      {
        title: "Week 6: Clinical Anatomy & Final Project",
        content: [
          "Surface Anatomy and Landmarks",
          "Medical Imaging: Radiographic Anatomy",
          "Developmental Anatomy and Congenital Anomalies",
          "Clinical Correlations and Case Studies"
        ],
        project: "Capstone Anatomy Project – Complete a comprehensive anatomical analysis with clinical correlations",
        outcome: "By the end of the course, you'll have in-depth knowledge of human anatomy and its clinical applications"
      }
    ]
  },
  "physiology": {
    title: "Physiology",
    slug: "physiology",
    category: "Medical",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master human physiology with this comprehensive program exploring body functions, regulatory mechanisms, and pathophysiology concepts.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Cell Physiology & Homeostasis",
        content: [
          "Cell Membrane Structure and Transport",
          "Action Potentials and Cellular Communication",
          "Homeostatic Mechanisms and Feedback Systems",
          "Body Fluid Compartments and Electrolyte Balance"
        ],
        project: "Membrane Transport Analysis – Model and analyze membrane transport processes and their regulation",
        outcome: "Understanding of cellular physiology and homeostatic mechanisms that maintain body function"
      },
      {
        title: "Week 2: Nervous System Physiology",
        content: [
          "Neuronal Function: Resting and Action Potentials",
          "Synaptic Transmission and Neurotransmitters",
          "Central Nervous System Functions",
          "Sensory and Motor Systems Integration"
        ],
        project: "Neurophysiology Experiment – Design and analyze a virtual experiment on neural signaling",
        outcome: "Proficiency in explaining neural signaling mechanisms and nervous system integration"
      },
      {
        title: "Week 3: Cardiovascular & Respiratory Physiology",
        content: [
          "Cardiac Cycle, ECG, and Heart Regulation",
          "Hemodynamics and Blood Pressure Regulation",
          "Pulmonary Ventilation and Gas Exchange",
          "Oxygen Transport and Respiratory Regulation"
        ],
        project: "Cardiorespiratory Case Study – Analyze physiological responses to exercise or altitude",
        outcome: "Understanding of cardiovascular and respiratory functions and their coordination"
      },
      {
        title: "Week 4: Renal & Digestive Physiology",
        content: [
          "Renal Filtration, Reabsorption, and Secretion",
          "Acid-Base Balance and Regulation",
          "Digestive Processes and GI Motility",
          "Absorption of Nutrients and Elimination"
        ],
        project: "Renal Function Analysis – Create models demonstrating kidney function in various conditions",
        outcome: "Ability to explain renal and digestive processes and their role in maintaining homeostasis"
      },
      {
        title: "Week 5: Endocrine & Reproductive Physiology",
        content: [
          "Hormonal Signaling and Regulation",
          "Major Endocrine Glands and Hormones",
          "Male and Female Reproductive Functions",
          "Pregnancy, Fetal Development, and Lactation"
        ],
        project: "Endocrine Case Study – Analyze hormonal interactions in a physiological process",
        outcome: "Skills to describe hormonal regulation and reproductive physiology in different contexts"
      },
      {
        title: "Week 6: Integrated Physiology & Final Project",
        content: [
          "Exercise Physiology and Adaptations",
          "Stress Response and Physiological Adaptation",
          "Aging and Physiological Changes",
          "Pathophysiology of Common Disorders"
        ],
        project: "Capstone Physiology Project – Develop an integrated analysis of a physiological system in health and disease",
        outcome: "By the end of the course, you'll have comprehensive understanding of human physiology and its clinical applications"
      }
    ]
  },
  "biochemistry": {
    title: "Biochemistry",
    slug: "biochemistry",
    category: "Medical",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the molecular foundations of life with this comprehensive biochemistry program covering biomolecules, metabolism, and molecular biology.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Biomolecules & Cell Chemistry",
        content: [
          "Water, pH, and Buffers in Biological Systems",
          "Amino Acids, Peptides, and Protein Structure",
          "Carbohydrates: Structure and Classification",
          "Lipids and Biological Membranes"
        ],
        project: "Biomolecule Analysis – Analyze protein structure and predict functional properties",
        outcome: "Understanding of biomolecular structures and their relationships to biological function"
      },
      {
        title: "Week 2: Enzymes & Bioenergetics",
        content: [
          "Enzyme Structure, Function, and Kinetics",
          "Enzyme Regulation and Inhibition",
          "Bioenergetics and Thermodynamics",
          "ATP and High-Energy Compounds"
        ],
        project: "Enzyme Kinetics Study – Analyze enzyme activity under various conditions",
        outcome: "Proficiency in explaining enzyme catalysis, regulation, and energetics of biochemical reactions"
      },
      {
        title: "Week 3: Carbohydrate & Lipid Metabolism",
        content: [
          "Glycolysis and Gluconeogenesis",
          "TCA Cycle and Electron Transport Chain",
          "Glycogen Metabolism and Regulation",
          "Lipid Metabolism: Fatty Acid Synthesis and Oxidation"
        ],
        project: "Metabolic Pathway Analysis – Create a detailed map of integrated carbohydrate and lipid metabolism",
        outcome: "Understanding of major metabolic pathways and their regulation in different physiological states"
      },
      {
        title: "Week 4: Protein & Nucleotide Metabolism",
        content: [
          "Amino Acid Metabolism and Nitrogen Balance",
          "Urea Cycle and Ammonia Detoxification",
          "Nucleotide Synthesis and Degradation",
          "Metabolic Integration and Hormone Regulation"
        ],
        project: "Nitrogen Balance Case Study – Analyze protein metabolism in different nutritional states",
        outcome: "Ability to describe protein and nucleotide metabolism and their integration with other pathways"
      },
      {
        title: "Week 5: Molecular Biology & Genetics",
        content: [
          "DNA Structure, Replication, and Repair",
          "RNA Synthesis and Processing",
          "Protein Synthesis and Post-translational Modifications",
          "Regulation of Gene Expression"
        ],
        project: "Gene Expression Analysis – Design and analyze experiments related to transcription and translation",
        outcome: "Skills to explain molecular processes involved in storage and expression of genetic information"
      },
      {
        title: "Week 6: Clinical Biochemistry & Final Project",
        content: [
          "Biochemical Diagnostic Tests and Interpretation",
          "Inborn Errors of Metabolism",
          "Biochemistry of Common Diseases: Diabetes, Cancer",
          "Biochemical Aspects of Nutrition and Vitamin Function"
        ],
        project: "Capstone Biochemistry Project – Develop a comprehensive biochemical analysis of a disease or metabolic condition",
        outcome: "By the end of the course, you'll understand biochemical processes and their clinical relevance"
      }
    ]
  },
  "pharmacology": {
    title: "Pharmacology",
    slug: "pharmacology",
    category: "Medical",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the science of drugs and their interactions with living systems in this comprehensive program covering drug actions, clinical applications, and therapeutics.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: General Principles of Pharmacology",
        content: [
          "Pharmacokinetics: Absorption, Distribution, Metabolism, Excretion",
          "Pharmacodynamics: Drug Receptors, Dose-Response, Efficacy",
          "Drug Interactions and Adverse Effects",
          "Factors Affecting Drug Response: Age, Disease, Genetics"
        ],
        project: "Pharmacokinetic Analysis – Model drug concentration profiles and analyze factors affecting them",
        outcome: "Understanding of fundamental pharmacological principles and drug response mechanisms"
      },
      {
        title: "Week 2: Autonomic & Cardiovascular Pharmacology",
        content: [
          "Autonomic Nervous System Drugs: Cholinergics, Adrenergics",
          "Antihypertensive Agents and Mechanisms",
          "Drugs for Heart Failure and Arrhythmias",
          "Anticoagulants and Antiplatelet Drugs"
        ],
        project: "Cardiovascular Drug Case Study – Design treatment plans for different cardiovascular conditions",
        outcome: "Proficiency in explaining the mechanisms and applications of cardiovascular drugs"
      },
      {
        title: "Week 3: CNS & Respiratory Pharmacology",
        content: [
          "Anxiolytics, Antidepressants, and Antipsychotics",
          "Opioid Analgesics and Pain Management",
          "General and Local Anesthetics",
          "Drugs for Asthma, COPD, and Respiratory Disorders"
        ],
        project: "CNS Drug Analysis – Evaluate mechanisms and effects of psychoactive drugs",
        outcome: "Understanding of neuropharmacology and respiratory drug mechanisms and applications"
      },
      {
        title: "Week 4: Antimicrobial & Chemotherapeutic Agents",
        content: [
          "Antibiotics: Classification, Mechanisms, Resistance",
          "Antiviral, Antifungal, and Antiparasitic Drugs",
          "Cancer Chemotherapy and Targeted Therapies",
          "Principles of Antimicrobial Stewardship"
        ],
        project: "Antibiotic Selection Case Study – Develop appropriate antimicrobial therapy plans",
        outcome: "Ability to select and evaluate antimicrobial and chemotherapeutic agents for various conditions"
      },
      {
        title: "Week 5: Endocrine & GI Pharmacology",
        content: [
          "Drugs Affecting Pituitary, Thyroid, and Adrenal Function",
          "Antidiabetic Medications and Insulin Therapy",
          "Sex Hormones and Contraceptives",
          "Drugs for Gastrointestinal and Liver Disorders"
        ],
        project: "Endocrine Therapy Design – Create treatment protocols for endocrine disorders",
        outcome: "Skills to understand and apply drugs affecting endocrine and gastrointestinal systems"
      },
      {
        title: "Week 6: Clinical Pharmacology & Final Project",
        content: [
          "Principles of Rational Drug Prescribing",
          "Pharmacovigilance and Adverse Drug Reactions",
          "Drug Development and Approval Process",
          "Personalized Medicine and Pharmacogenomics"
        ],
        project: "Capstone Pharmacology Project – Develop a comprehensive drug therapy plan for a complex medical case",
        outcome: "By the end of the course, you'll understand drug mechanisms and be able to apply pharmacological principles to clinical situations"
      }
    ]
  },
  "forensic-medicine": {
    title: "Forensic Medicine",
    slug: "forensic-medicine",
    category: "Medical",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the application of medical knowledge to legal questions in this comprehensive program covering death investigation, trauma analysis, and medicolegal procedures.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to Forensic Medicine & Death Investigation",
        content: [
          "History and Scope of Forensic Medicine",
          "Legal Systems and Medical Jurisprudence",
          "Death Investigation Process",
          "Postmortem Changes and Time of Death Estimation"
        ],
        project: "Death Investigation Report – Analyze a case and determine cause, manner, and time of death",
        outcome: "Understanding of forensic medicine principles and death investigation procedures"
      },
      {
        title: "Week 2: Forensic Pathology & Autopsy Techniques",
        content: [
          "External and Internal Examination Procedures",
          "Autopsy Techniques and Protocol",
          "Collection and Preservation of Evidence",
          "Histopathology in Forensic Context"
        ],
        project: "Virtual Autopsy Analysis – Conduct a systematic analysis of autopsy findings",
        outcome: "Proficiency in autopsy procedures and interpretation of postmortem findings"
      },
      {
        title: "Week 3: Trauma Analysis & Ballistics",
        content: [
          "Blunt Force Trauma: Patterns and Mechanisms",
          "Sharp Force Trauma: Wounds and Weapon Identification",
          "Ballistic Trauma and Gunshot Wound Analysis",
          "Traffic Accidents and Reconstruction"
        ],
        project: "Trauma Pattern Analysis – Evaluate trauma patterns to determine causative mechanisms",
        outcome: "Understanding of various trauma patterns and ability to analyze injury mechanisms"
      },
      {
        title: "Week 4: Forensic Toxicology & Serology",
        content: [
          "Principles of Forensic Toxicology",
          "Common Poisons and Drugs of Abuse",
          "Blood Pattern Analysis and Interpretation",
          "Biological Fluids and DNA Analysis"
        ],
        project: "Toxicology Case Analysis – Interpret toxicology findings in medicolegal cases",
        outcome: "Ability to understand and interpret toxicological, serological, and DNA findings"
      },
      {
        title: "Week 5: Clinical Forensic Medicine",
        content: [
          "Injury Documentation and Medico-legal Reports",
          "Sexual Assault Examination and Evidence Collection",
          "Child Abuse and Elder Abuse Investigation",
          "Age Estimation and Identification Techniques"
        ],
        project: "Medico-legal Report Preparation – Create professional reports for legal proceedings",
        outcome: "Skills to conduct clinical forensic examinations and prepare professional documentation"
      },
      {
        title: "Week 6: Special Topics & Final Project",
        content: [
          "Mass Disaster Victim Identification",
          "Forensic Anthropology and Odontology",
          "Forensic Psychiatry and Criminal Responsibility",
          "Ethics and Legal Testimony"
        ],
        project: "Capstone Forensic Project – Conduct a comprehensive forensic analysis of a complex case",
        outcome: "By the end of the course, you'll have the knowledge to apply medical principles to legal questions and investigations"
      }
    ]
  },
  "auto-cad": {
    title: "Auto Cad",
    slug: "auto-cad",
    category: "Mechanics",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master AutoCAD for professional drafting and design with this comprehensive program covering 2D drafting, 3D modeling, and industry applications.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: AutoCAD Fundamentals & Interface",
        content: [
          "AutoCAD Interface and Workspace Navigation",
          "Drawing Setup and Coordinate Systems",
          "Basic Drawing Commands: Lines, Circles, Arcs, Rectangles",
          "Object Selection and Manipulation"
        ],
        project: "Basic Drafting Project – Create simple technical drawings using basic commands",
        outcome: "Understanding of AutoCAD interface and ability to create basic drawings"
      },
      {
        title: "Week 2: Precision Drawing & Editing Tools",
        content: [
          "Precision Drawing Tools: Object Snaps, Tracking, Grids",
          "Editing Commands: Trim, Extend, Fillet, Chamfer",
          "Layers, Properties, and Object Organization",
          "Text, Dimensions, and Annotations"
        ],
        project: "Detailed Technical Drawing – Create precise technical drawings with proper dimensioning",
        outcome: "Proficiency in precise drawing techniques and editing complex designs"
      },
      {
        title: "Week 3: Advanced 2D Drawing & Blocks",
        content: [
          "Advanced Drawing Techniques: Polylines, Splines, Ellipses",
          "Block Creation, Insertion, and Attributes",
          "Dynamic Blocks and Parameters",
          "External References (XRefs) and Data Linking"
        ],
        project: "Architectural Floor Plan – Develop a detailed floor plan using advanced features",
        outcome: "Understanding of advanced 2D features and ability to use blocks and references"
      },
      {
        title: "Week 4: 3D Modeling Fundamentals",
        content: [
          "3D Navigation and Viewports",
          "Basic 3D Objects: Box, Sphere, Cylinder, Cone",
          "3D Editing Commands: Union, Subtract, Intersect",
          "Converting 2D Drawings to 3D Models"
        ],
        project: "3D Model Creation – Design a 3D model from 2D drawings",
        outcome: "Ability to create and manipulate 3D objects and convert between 2D and 3D"
      },
      {
        title: "Week 5: Advanced 3D & Visualization",
        content: [
          "Surface Modeling Techniques",
          "Solid Modeling and Editing",
          "Materials, Lighting, and Rendering",
          "Camera Views and Animation Basics"
        ],
        project: "Rendered 3D Project – Create and render a detailed 3D model with materials",
        outcome: "Skills to develop complex 3D models and create realistic renderings"
      },
      {
        title: "Week 6: Industry Applications & Final Project",
        content: [
          "Architectural Drawing Standards and Practices",
          "Mechanical Engineering Drafting",
          "Civil Engineering and Surveying Applications",
          "Printing, Publishing, and Collaboration Tools"
        ],
        project: "Capstone AutoCAD Project – Complete a comprehensive drawing project relevant to your field",
        outcome: "By the end of the course, you'll be proficient in AutoCAD and able to apply it to industry-specific projects"
      }
    ]
  },
  "hybrid-and-electric-vehicles": {
    title: "Hybrid & Electric Vehicles",
    slug: "hybrid-and-electric-vehicles",
    category: "Mechanics",
    price: 8999.00,
    image: "https://ext.same-assets.com/1553284940/2517117370.jpeg",
    description: "Master the technology, design, and maintenance of hybrid and electric vehicles in this comprehensive program covering powertrains, batteries, and sustainable mobility solutions.",
    features: [
      "6-Week Intensive Curriculum",
      "Accredited by Wipro",
      "Internship Opportunities with 100+ partner companies",
      "One-on-One Mentorship with industry leaders",
      "Letter of Recommendation",
      "Guaranteed Internship Placement",
      "Detailed Project Reports for your capstone projects"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to EV Technology & Fundamentals",
        content: [
          "Evolution of Electric Vehicles and Market Trends",
          "Types of Electric Vehicles: BEV, HEV, PHEV, FCEV",
          "Vehicle Electrification: Benefits and Challenges",
          "Fundamentals of Vehicle Dynamics for EVs"
        ],
        project: "EV Technology Analysis – Research and compare different EV technologies and architectures",
        outcome: "Understanding of EV fundamentals and the various types of electrified vehicles"
      },
      {
        title: "Week 2: Electric Powertrain Systems",
        content: [
          "Electric Motors: Types, Operation, Characteristics",
          "Power Electronics: Inverters, Converters, Controllers",
          "Transmission Systems for EVs",
          "Regenerative Braking and Energy Recovery"
        ],
        project: "Powertrain Design Analysis – Analyze electric powertrain components and configurations",
        outcome: "Proficiency in understanding electric propulsion systems and their components"
      },
      {
        title: "Week 3: Battery Systems & Management",
        content: [
          "Battery Chemistry and Cell Types",
          "Battery Pack Design and Thermal Management",
          "Battery Management Systems (BMS)",
          "Charging Infrastructure and Technologies"
        ],
        project: "Battery System Design – Create a conceptual design for an EV battery system",
        outcome: "Understanding of battery technologies and the ability to analyze battery management systems"
      },
      {
        title: "Week 4: Hybrid Vehicle Systems",
        content: [
          "Hybrid Architectures: Series, Parallel, Power-Split",
          "Internal Combustion Engine Integration",
          "Hybrid Control Strategies and Optimization",
          "Mild Hybrid and 48V Systems"
        ],
        project: "Hybrid System Analysis – Compare different hybrid architectures and their applications",
        outcome: "Ability to understand and evaluate hybrid system designs and control strategies"
      },
      {
        title: "Week 5: EV Diagnostics & Service",
        content: [
          "High-Voltage Safety Protocols",
          "Diagnostic Tools and Techniques",
          "Common EV and Hybrid Vehicle Failures",
          "Service and Maintenance Procedures"
        ],
        project: "Diagnostic Protocol Development – Create a diagnostic and service protocol for EVs",
        outcome: "Skills to safely diagnose, service, and maintain electric and hybrid vehicles"
      },
      {
        title: "Week 6: Future Technologies & Final Project",
        content: [
          "Advanced Electric Propulsion Systems",
          "Autonomous Driving and EV Integration",
          "Vehicle-to-Grid (V2G) and Smart Charging",
          "Sustainability and Lifecycle Considerations"
        ],
        project: "Capstone EV Project – Develop a comprehensive solution for an EV-related challenge",
        outcome: "By the end of the course, you'll understand electric vehicle technologies and be prepared for careers in the EV industry"
      }
    ]
  }
};
