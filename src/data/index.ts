import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nguyễn Trọng Nhân",
    role: "Fullstack Web Developer",
    bio: "Lập trình viên Fullstack với nền tảng vững chắc về Next.js và Laravel. Tôi tập trung vào việc viết mã nguồn sạch (Clean Code), thiết kế Database tối ưu và mang lại trải nghiệm UI/UX mượt mà. Luôn sẵn sàng học hỏi và thích nghi với các tiêu chuẩn công nghệ khắt khe nhất.",
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
      company: "Công ty TNHH Design24 (Học viện Design24)",
      role: "Fullstack Developer",
      startDate: "03/2025",
      endDate: "Hiện tại",
      description: [
        "Phát triển và duy trì các hệ thống web nội bộ và nền tảng học trực tuyến (E-learning) sử dụng Next.js cho Client-side và Laravel cho Server-side.",
        "Phối hợp chặt chẽ với team Design, chuyển đổi các bản thiết kế Figma thành giao diện Pixel-perfect, đáp ứng chuẩn Responsive và tối ưu Core Web Vitals.",
        "Thiết kế Database Schema, phát triển RESTful API chuẩn mực. Xử lý triệt để bài toán N+1 Query bằng Eager Loading trên Eloquent ORM.",
        "Trực tiếp cấu hình và deploy hệ thống lên môi trường VPS Linux, sử dụng PM2 để quản lý tiến trình Node.js và thiết lập Apache làm Reverse Proxy."
      ],
    }
  ],
  projects: [
    {
      id: "prj-1",
      title: "E-Learning: Ứng dụng AI trong Thiết kế & Truyền thông",
      description: "Phát triển nền tảng đào tạo trực tuyến chuyên biệt hóa cho các chương trình ứng dụng công nghệ AI. Thiết kế kiến trúc SPA tương tác cao với React 19 và Framer Motion. Xây dựng Backend API bằng Laravel xử lý logic phân quyền truy cập học liệu, theo dõi tiến trình học tập và kết xuất báo cáo tự động.",
      image: "/images/project-01.webp", 
      techStack: ["Laravel 12", "MySQL", "React 19", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/TrongNhan030602/fe-thiet-ke-truyen-thong",
      liveUrl: "https://thiet-ke-truyen-thong.design24.edu.vn/",
    },
    {
      id: "prj-2",
      title: "Cần Thơ Agri: Nền Tảng Thương Mại Nông Sản",
      description: "Hệ thống E-Commerce chuyên biệt kết nối trực tiếp nhà nông và người tiêu dùng. Phát triển giao diện Storefront bằng React 19 tối ưu hóa hành trình mua hàng. Xây dựng Backend Laravel quản lý phức tạp: Giỏ hàng đa nhà cung cấp, xử lý thanh toán, quản lý đơn hàng và kiểm soát tồn kho realtime.",
      image: "/images/project-02.webp", 

      techStack: ["Laravel 12", "React 19", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/TrongNhan030602/nong-san-can-tho",
      liveUrl: "https://nong-san.canthoagri.vn/",
    },
    {
      id: "prj-3",
      title: "Design24: Landing Page & Truyền thông dịch vụ",
      description: "Hệ thống Landing Page và trang giới thiệu dịch vụ chuẩn doanh nghiệp. Tận dụng kiến trúc Server Components của Next.js để tối ưu hóa triệt để Technical SEO và Core Web Vitals. Thiết kế UI/UX theo hướng Conversion-driven với hệ thống form thu thập Lead tự động.",
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
      techStack: ["React", "NodeJS", "Tailwind CSS"],

    },
    {
      id: "arch-2",
      title: "Website Máy lọc nước Aqua Lào",
      url: "https://maylocnuocaqualao.com/",
      techStack: ["React", "NodeJS", "Tailwind CSS"],
    },
 
     {
      id: "arch-3",
      title: "Landing Ong nhà trọng",
      url: "https://ongnhatrong.vn/",
      techStack: ["Next.js", "TypeScript","Tailwind CSS"],
    },
     {
      id: "arch-4",
      title: "Landing Kết nối cung cầu (Cần Thơ)",
      url: "https://ket-noi-cung-cau-cong-nghe.design24.vn/",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
  ]
};