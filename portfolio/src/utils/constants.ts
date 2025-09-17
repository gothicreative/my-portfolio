import type { Project, Skill, Experience, NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce MERN Stack App',
    description: 'Full-stack e-commerce platform built with MongoDB, Express, React, and Node.js featuring user authentication, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce solution featuring a modern React frontend with Redux state management, secure JWT authentication, Stripe payment integration, and a robust Node.js/Express backend with MongoDB for data persistence.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'JWT', 'Tailwind CSS'],
    imageUrl: '/src/assets/pro1.jpg',
    galleryImages: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg', '/projects/ecommerce-3.jpg'],
    liveUrl: 'https://mern-mini-shop.onrender.com',
    githubUrl: 'https://github.com/gothicreative/MERN-mini-shop',
    category: 'fullstack',
    platform: 'web',
    featured: true,
    date: '2024-01',
    metrics: {
      users: 1200,
      performance: '95% Lighthouse Score'
    }
  },
  {
    id: '2',
    title: 'React Native Fitness Tracker',
    description: 'Cross-platform mobile app for fitness tracking with real-time data sync, workout plans, and social features.',
    longDescription: 'A comprehensive fitness tracking app built with React Native and Expo, featuring workout planning, progress tracking, social sharing, and integration with health APIs.',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Socket.io', 'AsyncStorage'],
    imageUrl: '/src/assets/pro4.jpg',
    galleryImages: ['/projects/fitness-1.jpg', '/projects/fitness-2.jpg', '/projects/fitness-3.jpg'],
    githubUrl: 'https://github.com/gothicreative/fitness-tracker',
    appStoreUrl: 'https://apps.apple.com/app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fitness.tracker',
    category: 'mobile',
    platform: 'mobile',
    featured: true,
    date: '2024-03',
    metrics: {
      downloads: 5000,
      users: 3200
    }
  },
  {
    id: '3',
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat application with real-time messaging, file sharing, and group chat functionality.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    imageUrl: '/src/assets/pro2.jpg',
    liveUrl: 'https://video-call-9vyb.onrender.com',
    githubUrl: 'https://github.com/gothicreative/video-call-chat',
    category: 'fullstack',
    platform: 'web',
    featured: true,
    date: '2023-11',
    metrics: {
      users: 800
    }
  },
  {
    id: '4',
    title: 'Digital Art Portfolio',
    description: 'Creative showcase combining digital illustration with interactive web design, featuring animated galleries and custom artwork.',
    technologies: ['React', 'Framer Motion', 'Three.js', 'Adobe Creative Suite'],
    imageUrl: '/projects/art-hero.jpg',
    liveUrl: 'https://art-portfolio.example.com',
    category: 'illustration',
    platform: 'web',
    featured: false,
    date: '2023-09'
  }
];

export const SKILLS_DATA: { [key: string]: Skill[] } = {
  frontend: [
    { name: 'React', level: 5, icon: 'SiReact', category: 'frontend', description: 'Advanced React development with hooks, context, and performance optimization' },
    { name: 'TypeScript', level: 4, icon: 'SiTypescript', category: 'frontend', description: 'Strong typing and modern JavaScript development' },
    { name: 'Tailwind CSS', level: 5, icon: 'SiTailwindcss', category: 'frontend', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Redux', level: 4, icon: 'SiRedux', category: 'frontend', description: 'State management for complex React applications' },
    { name: 'Next.js', level: 4, icon: 'SiNextdotjs', category: 'frontend', description: 'Full-stack React framework with SSR and optimization' },
  ],
  backend: [
    { name: 'Node.js', level: 5, icon: 'SiNodedotjs', category: 'backend', description: 'Server-side JavaScript runtime for scalable applications' },
    { name: 'Express', level: 5, icon: 'SiExpress', category: 'backend', description: 'Fast and minimal web framework for Node.js' },
    { name: 'GraphQL', level: 3, icon: 'SiGraphql', category: 'backend', description: 'Query language and runtime for APIs' },
    { name: 'REST APIs', level: 5, icon: 'SiPostman', category: 'backend', description: 'RESTful API design and implementation' },
  ],
  mobile: [
    { name: 'React Native', level: 4, icon: 'SiReact', category: 'mobile', description: 'Cross-platform mobile development' },
    { name: 'Expo', level: 4, icon: 'SiExpo', category: 'mobile', description: 'React Native development platform and tools' },
    { name: 'AsyncStorage', level: 4, icon: 'SiReact', category: 'mobile', description: 'Local storage for React Native apps' },
  ],
  databases: [
    { name: 'MongoDB', level: 5, icon: 'SiMongodb', category: 'databases', description: 'NoSQL database for modern applications' },
    { name: 'Mongoose', level: 5, icon: 'SiMongodb', category: 'databases', description: 'MongoDB object modeling for Node.js' },
    { name: 'PostgreSQL', level: 3, icon: 'SiPostgresql', category: 'databases', description: 'Relational database management system' },
  ],
  tools: [
    { name: 'Git', level: 5, icon: 'SiGit', category: 'tools', description: 'Version control and collaboration' },
    { name: 'Docker', level: 3, icon: 'SiDocker', category: 'tools', description: 'Containerization and deployment' },
    { name: 'AWS', level: 3, icon: 'SiAmazon', category: 'tools', description: 'Cloud infrastructure and services' },
    { name: 'Vercel', level: 4, icon: 'SiVercel', category: 'tools', description: 'Frontend deployment and hosting' },
  ],
  creative: [
    { name: 'Adobe Illustrator', level: 4, icon: 'SiAdobeillustrator', category: 'creative', description: 'Vector graphics and digital illustration' },
    { name: 'Adobe Photoshop', level: 4, icon: 'SiAdobephotoshop', category: 'creative', description: 'Digital art and photo manipulation' },
    { name: 'Figma', level: 5, icon: 'SiFigma', category: 'creative', description: 'UI/UX design and prototyping' },
    { name: 'Blender', level: 3, icon: 'SiBlender', category: 'creative', description: '3D modeling and animation' },
  ]
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup Inc.',
    position: 'Full-Stack Developer',
    duration: '2023 - Present',
    description: [
      'Developed and maintained MERN stack applications serving 10,000+ users',
      'Built React Native mobile apps with 95% crash-free rate',
      'Implemented real-time features using Socket.io and WebSockets',
      'Optimized application performance resulting in 40% faster load times'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'TypeScript'],
    type: 'work',
    achievements: [
      'Led development of flagship mobile app with 5,000+ downloads',
      'Reduced API response time by 60% through optimization',
      'Mentored 2 junior developers in React and Node.js'
    ],
    stack: 'fullstack'
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Frontend Developer & Digital Artist',
    duration: '2022 - 2023',
    description: [
      'Created responsive React applications for various clients',
      'Designed and developed custom digital illustrations',
      'Collaborated with design teams to implement pixel-perfect UIs',
      'Maintained 98% client satisfaction rate'
    ],
    technologies: ['React', 'Tailwind CSS', 'Adobe Creative Suite', 'Figma'],
    type: 'work',
    achievements: [
      'Delivered 15+ successful client projects',
      'Created brand identity for 5 startups',
      'Improved team workflow efficiency by 30%'
    ],
    stack: 'frontend'
  }
];

export const CONTACT_INFO = {
  email: 'hafizadem71@gmail.com',
  phone: '+251938921371',
  location: 'Addis Ababa, Ethiopia',
  social: {
    github: 'https://github.com/gothicreative',
    linkedin: 'https://www.linkedin.com/in/hafiz-adem-054561237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbIS6bpIYT4yBJ3oDZQxQ1A%3D%3D',
    twitter: 'https://twitter.com/hafizadem',
    dribbble: 'https://dribbble.com/hafizadem',
    behance: 'https://behance.net/hafizadem'
  }
};