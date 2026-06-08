import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nguyen Trong Nhan",
    role: "Fullstack Web Developer",
    bio: "A Fullstack Developer with a solid foundation in Next.js and Laravel. I focus on writing Clean Code, designing optimized databases, and delivering seamless UI/UX experiences. Always eager to learn and adapt to the most rigorous technological standards.",
    email: "ntnhan030602@gmail.com",
    github: "https://github.com/TrongNhan030602",
    linkedin: "https://www.linkedin.com/in/tr%E1%BB%8Dng-nh%C3%A2n-nguy%E1%BB%85n-b162a9414",
    zalo: "https://zalo.me/0334323707",
  },
  skills: [
    {
      category: "Frontend",
      items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["PHP 8.3", "Laravel 12", "RESTful API", "Node.js"],
    },
    {
      category: "Database & Infrastructure",
      items: ["MySQL", "PostgreSQL", "VPS Linux", "Apache", "PM2", "Git"],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Design24 Co., Ltd. (Design24 Academy)",
      role: "Fullstack Developer",
      startDate: "03/2025",
      endDate: "Present",
      description: [
        "Develop and maintain internal web systems and E-learning platforms using Next.js for the Client-side and Laravel for the Server-side.",
        "Collaborate closely with the Design team to translate Figma mockups into pixel-perfect, responsive interfaces while optimizing Core Web Vitals.",
        "Design Database Schemas and develop standard RESTful APIs. Completely resolve N+1 query issues utilizing Eager Loading in Eloquent ORM.",
        "Directly configure and deploy systems to Linux VPS environments, utilizing PM2 for Node.js process management and setting up Apache as a Reverse Proxy."
      ],
    }
  ],
  projects: [
    {
      id: "prj-1",
      title: "E-Learning: Applied AI in Design & Media",
      description: "Developed a specialized online training platform for applied AI programs. Designed a highly interactive SPA architecture using React 19 and Framer Motion. Built backend APIs with Laravel to handle role-based access control for learning materials, track learning progress, and automatically generate reports.",
      image: "/images/project-01.webp", 
      techStack: ["Laravel 12", "MySQL", "React 19", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/TrongNhan030602/fe-thiet-ke-truyen-thong",
      liveUrl: "https://thiet-ke-truyen-thong.design24.edu.vn/",
    },
    {
      id: "prj-2",
      title: "Can Tho Agri: Agricultural E-Commerce Platform",
      description: "A specialized E-Commerce system directly connecting farmers with consumers. Developed the storefront interface using React 19 to optimize the purchasing journey. Built a robust Laravel backend to manage complex features: multi-vendor carts, payment processing, order management, and real-time inventory control.",
      image: "/images/project-02.webp", 
      techStack: ["Laravel 12", "React 19", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/TrongNhan030602/nong-san-can-tho",
      liveUrl: "https://nong-san.canthoagri.vn/",
    },
    {
      id: "prj-3",
      title: "Design24: Landing Page & Service Communication",
      description: "An enterprise-grade Landing Page and service introduction system. Leveraged Next.js Server Components to drastically optimize Technical SEO and Core Web Vitals. Designed a conversion-driven UI/UX featuring an automated lead capture form system.",
      image: "/images/project-03.webp", 
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/TrongNhan030602/design24.vn-nextjs",
      liveUrl: "https://dich-vu.design24.vn/",
    },
  ],
  archiveProjects: [
    {
      id: "arch-1",
      title: "DCT MART",
      url: "https://www.dctmart.vn/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: "arch-2",
      title: "Aqua Lao Water Purifier Website",
      url: "https://maylocnuocaqualao.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: "arch-3",
      title: "Ong Nha Trong Landing Page",
      url: "https://ongnhatrong.vn/",
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "arch-4",
      title: "Can Tho Tech Supply & Demand Landing Page",
      url: "https://ket-noi-cung-cau-cong-nghe.design24.vn/",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ]
};