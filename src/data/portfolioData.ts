import type { PortfolioData } from "@/types/portfolio";

export const portfolioData = {
  personalInfo: {
    name: "Nguyen Trong Nhan",
    shortName: "Trong Nhan",
    initials: "NTN",
    role: {
      en: "Fullstack Web Developer",
      vi: "Lập trình viên Fullstack Web",
    },
    bio: {
      en: "A Fullstack Developer with a solid foundation in Next.js and Laravel. I focus on clean architecture, optimized databases, and seamless digital experiences.",
      vi: "Lập trình viên Fullstack với nền tảng vững chắc về Next.js và Laravel. Tôi tập trung vào kiến trúc sạch, tối ưu cơ sở dữ liệu và trải nghiệm số mượt mà.",
    },
    email: "ntnhan030602@gmail.com",
    github: "https://github.com/TrongNhan030602",
    linkedin:
      "https://www.linkedin.com/in/tr%E1%BB%8Dng-nh%C3%A2n-nguy%E1%BB%85n-b162a9414",
    zalo: "https://zalo.me/0334323707",
    phone: "+84334323707",
    phoneDisplay: "0334 323 707",
    location: {
      en: "Can Tho, Vietnam",
      vi: "Cần Thơ, Việt Nam",
    },
    resumeUrl: "/CV_Nguyen_Trong_Nhan_Fullstack-en.pdf",
  },
  navigation: [
    { id: "home", label: { en: "Home", vi: "Trang chủ" } },
    { id: "about", label: { en: "About", vi: "Giới thiệu" } },
    { id: "skills", label: { en: "Skills", vi: "Kỹ năng" } },
    { id: "projects", label: { en: "Projects", vi: "Dự án" } },
    { id: "experience", label: { en: "Experience", vi: "Kinh nghiệm" } },
    { id: "contact", label: { en: "Contact", vi: "Liên hệ" } },
  ],
  common: {
    skipToContent: {
      en: "Skip to main content",
      vi: "Chuyển đến nội dung chính",
    },
    switchLanguage: { en: "Switch to Vietnamese", vi: "Chuyển sang tiếng Anh" },
    switchToDark: {
      en: "Switch to dark theme",
      vi: "Chuyển sang giao diện tối",
    },
    switchToLight: {
      en: "Switch to light theme",
      vi: "Chuyển sang giao diện sáng",
    },
    darkTheme: { en: "Dark", vi: "Tối" },
    lightTheme: { en: "Light", vi: "Sáng" },
    openMenu: { en: "Open navigation menu", vi: "Mở menu điều hướng" },
    closeMenu: { en: "Close navigation menu", vi: "Đóng menu điều hướng" },
    opensNewTab: { en: "opens in a new tab", vi: "mở trong thẻ mới" },
    copyEmail: { en: "Copy email", vi: "Sao chép email" },
    copied: { en: "Email copied", vi: "Đã sao chép email" },
    backToTop: { en: "Back to top", vi: "Về đầu trang" },
  },
  hero: {
    availability: {
      en: "Available for selected projects",
      vi: "Sẵn sàng cho dự án phù hợp",
    },
    eyebrow: {
      en: "Fullstack engineering · UI systems · DevOps",
      vi: "Fullstack engineering · Hệ thống UI · DevOps",
    },
    headline: {
      en: "Crafting high-performance",
      vi: "Kiến tạo những",
    },
    headlineAccent: {
      en: "digital experiences.",
      vi: "trải nghiệm số hiệu suất cao.",
    },
    rotatingRoles: {
      en: [
        "Next.js interfaces",
        "Laravel systems",
        "production-ready products",
      ],
      vi: [
        "giao diện Next.js",
        "hệ thống Laravel",
        "sản phẩm sẵn sàng vận hành",
      ],
    },
    primaryCta: { en: "Explore projects", vi: "Xem dự án" },
    secondaryCta: { en: "Download résumé", vi: "Tải CV" },
    codeWindowTitle: "portfolio.ts",
    codeLines: {
      en: [
        "const developer = {",
        "  name: 'Nguyen Trong Nhan',",
        "  stack: ['Next.js', 'Laravel'],",
        "  focus: 'performance + craft',",
        "  ship: () => 'production-ready'",
        "};",
      ],
      vi: [
        "const lapTrinhVien = {",
        "  ten: 'Nguyen Trong Nhan',",
        "  congNghe: ['Next.js', 'Laravel'],",
        "  tapTrung: 'hiệu năng + tinh tế',",
        "  banGiao: () => 'sẵn sàng vận hành'",
        "};",
      ],
    },
  },
  about: {
    eyebrow: { en: "About me", vi: "Giới thiệu" },
    title: { en: "Engineering with", vi: "Lập trình bằng" },
    accent: { en: "clarity and intent.", vi: "sự rõ ràng và chủ đích." },
    description: {
      en: "I bridge refined frontend thinking with reliable backend engineering to build products that remain fast, understandable, and maintainable as they grow.",
      vi: "Tôi kết hợp tư duy Frontend tinh tế với kỹ thuật Backend tin cậy để xây dựng sản phẩm nhanh, dễ hiểu và dễ bảo trì khi mở rộng.",
    },
    careerSummary: {
      en: "From translating Figma systems into precise interfaces to shaping APIs, database schemas, and production deployments, I stay close to the complete product lifecycle.",
      vi: "Từ chuyển đổi hệ thống Figma thành giao diện chính xác đến thiết kế API, cấu trúc cơ sở dữ liệu và triển khai production, tôi theo sát toàn bộ vòng đời sản phẩm.",
    },
    approachTitle: { en: "How I work", vi: "Cách tôi làm việc" },
    approachItems: [
      {
        title: { en: "Product-minded", vi: "Tư duy sản phẩm" },
        description: {
          en: "Every technical decision starts with the user and business outcome.",
          vi: "Mỗi quyết định kỹ thuật bắt đầu từ người dùng và mục tiêu kinh doanh.",
        },
      },
      {
        title: { en: "Built to scale", vi: "Sẵn sàng mở rộng" },
        description: {
          en: "Clear boundaries, typed data, and database discipline reduce future friction.",
          vi: "Ranh giới rõ ràng, dữ liệu chặt chẽ và kỷ luật cơ sở dữ liệu giúp giảm nợ kỹ thuật.",
        },
      },
      {
        title: { en: "Production aware", vi: "Am hiểu vận hành" },
        description: {
          en: "Performance, accessibility, deployment, and observability are part of the build.",
          vi: "Hiệu năng, khả năng tiếp cận, triển khai và giám sát là một phần của quá trình phát triển.",
        },
      },
    ],
    locationLabel: { en: "Based in", vi: "Đang làm việc tại" },
  },
  stats: [
    {
      id: "experience",
      value: "2+",
      label: { en: "Years in production", vi: "Năm kinh nghiệm thực chiến" },
      detail: {
        en: "Building and shipping real systems",
        vi: "Xây dựng và vận hành hệ thống thực tế",
      },
    },
    {
      id: "projects",
      value: "10+",
      label: { en: "Production projects", vi: "Dự án đã vận hành" },
      detail: {
        en: "E-learning, commerce, and enterprise",
        vi: "E-learning, thương mại và doanh nghiệp",
      },
    },
    {
      id: "quality",
      value: "100%",
      label: { en: "Pixel-conscious", vi: "Chú trọng từng điểm ảnh" },
      detail: {
        en: "Responsive UI and Core Web Vitals",
        vi: "Responsive UI và Core Web Vitals",
      },
    },
    {
      id: "queries",
      value: "0",
      label: { en: "N+1 queries", vi: "Truy vấn N+1" },
      detail: {
        en: "Eager loading and query discipline",
        vi: "Eager Loading và tối ưu truy vấn",
      },
    },
  ],
  skillsSection: {
    eyebrow: { en: "Technical matrix", vi: "Năng lực kỹ thuật" },
    title: { en: "A practical stack for", vi: "Bộ công nghệ thực tiễn cho" },
    accent: { en: "complete products.", vi: "sản phẩm hoàn chỉnh." },
    description: {
      en: "The tools I use to move from interface systems to APIs, data, and reliable production delivery.",
      vi: "Các công nghệ tôi sử dụng để phát triển từ hệ thống giao diện đến API, dữ liệu và triển khai production tin cậy.",
    },
  },
  skills: [
    {
      id: "frontend",
      category: { en: "Frontend", vi: "Frontend" },
      description: {
        en: "Accessible interfaces with strong typing, fluid motion, and measurable performance.",
        vi: "Giao diện dễ tiếp cận, type-safe, chuyển động mượt và hiệu năng đo lường được.",
      },
      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Redux Toolkit",
      ],
    },
    {
      id: "backend",
      category: { en: "Backend", vi: "Backend" },
      description: {
        en: "Maintainable APIs, explicit business logic, and secure authentication flows.",
        vi: "API dễ bảo trì, nghiệp vụ rõ ràng và luồng xác thực an toàn.",
      },
      items: [
        "PHP 8.3",
        "Laravel 12",
        "RESTful API",
        "JWT / Sanctum",
        "Eloquent ORM",
      ],
    },
    {
      id: "devops",
      category: { en: "Database & DevOps", vi: "Cơ sở dữ liệu & DevOps" },
      description: {
        en: "Structured data models and repeatable deployment workflows for real environments.",
        vi: "Mô hình dữ liệu chặt chẽ và quy trình triển khai lặp lại được trên môi trường thực tế.",
      },
      items: [
        "MySQL",
        "PostgreSQL",
        "Linux VPS",
        "Apache / Nginx",
        "Git",
        "CI/CD",
      ],
    },
  ],
  projectsSection: {
    eyebrow: { en: "Selected work", vi: "Dự án tiêu biểu" },
    title: { en: "Products designed to", vi: "Sản phẩm được xây dựng để" },
    accent: {
      en: "perform in the real world.",
      vi: "vận hành hiệu quả trong thực tế.",
    },
    description: {
      en: "A focused selection across education, commerce, and enterprise communication.",
      vi: "Tuyển chọn các dự án trong lĩnh vực giáo dục, thương mại và truyền thông doanh nghiệp.",
    },
    filters: [
      { id: "all", label: { en: "All", vi: "Tất cả" } },
      { id: "e-learning", label: { en: "E-Learning", vi: "E-Learning" } },
      {
        id: "e-commerce",
        label: { en: "E-Commerce", vi: "Thương mại điện tử" },
      },
      { id: "landing-page", label: { en: "Landing Page", vi: "Landing Page" } },
    ],
    featuredLabel: { en: "Featured project", vi: "Dự án nổi bật" },
    liveDemo: { en: "Live demo", vi: "Xem trực tiếp" },
    sourceCode: { en: "Source code", vi: "Mã nguồn" },
    archiveTitle: { en: "Project archive", vi: "Thư viện dự án" },
    archiveDescription: {
      en: "More production websites and focused digital products.",
      vi: "Các website production và sản phẩm số tiêu biểu khác.",
    },
    archiveColumns: {
      project: { en: "Project", vi: "Dự án" },
      stack: { en: "Technology", vi: "Công nghệ" },
      link: { en: "Visit", vi: "Truy cập" },
    },
  },
  projects: [
    {
      id: "prj-1",
      title: "E-Learning: Applied AI in Design & Media",
      category: "e-learning",
      categoryLabel: { en: "E-Learning platform", vi: "Nền tảng E-Learning" },
      description: {
        en: "A specialized online learning platform for applied AI programs, with an interactive SPA, role-based learning resources, progress tracking, and automated reports.",
        vi: "Nền tảng đào tạo AI ứng dụng với kiến trúc SPA tương tác, phân quyền tài liệu, theo dõi tiến độ và xuất báo cáo tự động.",
      },
      image: "/images/project-01.webp",
      imageAlt: {
        en: "Applied AI e-learning platform interface",
        vi: "Giao diện nền tảng E-Learning AI ứng dụng",
      },
      techStack: [
        "Laravel 12",
        "MySQL",
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/TrongNhan030602/fe-thiet-ke-truyen-thong",
      liveUrl: "https://thiet-ke-truyen-thong.design24.edu.vn/",
    },
    {
      id: "prj-2",
      title: "Can Tho Agri: Agricultural E-Commerce",
      category: "e-commerce",
      categoryLabel: {
        en: "E-Commerce platform",
        vi: "Sàn thương mại điện tử",
      },
      description: {
        en: "An agricultural marketplace connecting farmers and consumers with multi-vendor carts, online payments, order management, and real-time inventory workflows.",
        vi: "Sàn nông sản kết nối nông dân với người tiêu dùng, hỗ trợ giỏ hàng đa nhà cung cấp, thanh toán, quản lý đơn hàng và tồn kho theo thời gian thực.",
      },
      image: "/images/project-02.webp",
      imageAlt: {
        en: "Can Tho Agri e-commerce storefront",
        vi: "Giao diện sàn thương mại điện tử Cần Thơ Agri",
      },
      techStack: ["Laravel 12", "React 19", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/TrongNhan030602/nong-san-can-tho",
      liveUrl: "https://nong-san.canthoagri.vn/",
    },
    {
      id: "prj-3",
      title: "Design24: Service Communication",
      category: "landing-page",
      categoryLabel: {
        en: "Enterprise landing page",
        vi: "Landing Page doanh nghiệp",
      },
      description: {
        en: "An enterprise service website using Next.js Server Components for strong technical SEO, Core Web Vitals, and conversion-focused lead capture.",
        vi: "Website dịch vụ doanh nghiệp sử dụng Next.js Server Components để tối ưu SEO kỹ thuật, Core Web Vitals và chuyển đổi khách hàng tiềm năng.",
      },
      image: "/images/project-03.webp",
      imageAlt: {
        en: "Design24 enterprise service landing page",
        vi: "Landing Page giới thiệu dịch vụ Design24",
      },
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
      techStack: ["React", "REST API", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      id: "arch-2",
      title: "Aqua Lao Water Purifier",
      url: "https://maylocnuocaqualao.com/",
      techStack: ["React", "REST API", "Tailwind CSS"],
    },
    {
      id: "arch-3",
      title: "Ong Nha Trong",
      url: "https://ongnhatrong.vn/",
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "arch-4",
      title: "PharmaConnect Vietnam Event",
      url: "https://pharma-connect-event.com/",
      techStack: ["Landing Page", "Responsive UI", "Microsoft Forms"],
    },
    {
      id: "arch-5",
      title: "Can Tho Tech Supply & Demand",
      url: "https://ket-noi-cung-cau-cong-nghe.design24.vn/",
      techStack: ["React", "TypeScript", "Framer Motion"],
    },
  ],
  experienceSection: {
    eyebrow: { en: "Experience", vi: "Kinh nghiệm" },
    title: { en: "Building, improving, and", vi: "Xây dựng, tối ưu và" },
    accent: {
      en: "shipping complete systems.",
      vi: "triển khai hệ thống hoàn chỉnh.",
    },
    description: {
      en: "Hands-on ownership across interface engineering, backend architecture, data performance, and infrastructure.",
      vi: "Trực tiếp phụ trách kỹ thuật giao diện, kiến trúc backend, hiệu năng dữ liệu và hạ tầng triển khai.",
    },
    currentRole: { en: "Current role", vi: "Vị trí hiện tại" },
    responsibilities: {
      en: "Responsibilities & impact",
      vi: "Trách nhiệm và đóng góp",
    },
    coreStack: { en: "Core technology stack", vi: "Công nghệ cốt lõi" },
  },
  experiences: [
    {
      id: "exp-1",
      company: "Design24 Co., Ltd. (Design24 Academy)",
      role: { en: "Fullstack Developer", vi: "Lập trình viên Fullstack" },
      startDate: "03/2025",
      endDate: { en: "Present", vi: "Hiện tại" },
      description: {
        en: [
          "Develop and maintain internal web systems and E-learning platforms with Next.js and Laravel.",
          "Translate Figma systems into pixel-precise responsive interfaces while improving Core Web Vitals.",
          "Design database schemas and eliminate N+1 query issues with disciplined Eager Loading in Eloquent ORM.",
          "Configure and deploy production systems to Linux VPS environments with PM2 and Apache Reverse Proxy.",
        ],
        vi: [
          "Phát triển và bảo trì hệ thống web nội bộ, nền tảng E-Learning bằng Next.js và Laravel.",
          "Chuyển đổi hệ thống Figma thành giao diện responsive chính xác, đồng thời tối ưu Core Web Vitals.",
          "Thiết kế Database Schema và loại bỏ lỗi N+1 Query bằng Eager Loading có kiểm soát trong Eloquent ORM.",
          "Cấu hình và triển khai hệ thống production trên Linux VPS với PM2 và Apache Reverse Proxy.",
        ],
      },
      techStack: [
        "Next.js 16",
        "Laravel 12",
        "MySQL",
        "Linux VPS",
        "PM2",
        "Apache",
      ],
    },
  ],
  contact: {
    eyebrow: { en: "Start a conversation", vi: "Bắt đầu trao đổi" },
    title: { en: "Have a product that needs", vi: "Bạn có sản phẩm cần" },
    accent: {
      en: "thoughtful engineering?",
      vi: "một giải pháp kỹ thuật chỉn chu?",
    },
    description: {
      en: "Tell me about the product, technical challenge, or collaboration you have in mind.",
      vi: "Hãy chia sẻ về sản phẩm, bài toán kỹ thuật hoặc cơ hội hợp tác mà bạn đang quan tâm.",
    },
    responseTime: {
      en: "Typical response within 24 hours",
      vi: "Thường phản hồi trong vòng 24 giờ",
    },
    directContact: { en: "Direct contact", vi: "Liên hệ trực tiếp" },
    emailLabel: { en: "Email", vi: "Email" },
    zaloLabel: { en: "Zalo / Phone", vi: "Zalo / Điện thoại" },
    formTitle: { en: "Project inquiry", vi: "Thông tin trao đổi" },
    fields: {
      name: {
        label: { en: "Full name", vi: "Họ và tên" },
        placeholder: { en: "Your name", vi: "Nhập họ và tên" },
      },
      email: {
        label: { en: "Email address", vi: "Địa chỉ email" },
        placeholder: { en: "you@company.com", vi: "ban@congty.com" },
      },
      subject: {
        label: { en: "Subject", vi: "Chủ đề" },
        placeholder: { en: "How can I help?", vi: "Bạn cần tôi hỗ trợ gì?" },
      },
      message: {
        label: { en: "Message", vi: "Nội dung" },
        placeholder: {
          en: "A short overview of your project or opportunity...",
          vi: "Mô tả ngắn về dự án hoặc cơ hội hợp tác...",
        },
      },
    },
    submit: { en: "Send inquiry", vi: "Gửi thông tin" },
    submitting: { en: "Sending...", vi: "Đang gửi..." },
    successTitle: { en: "Message received", vi: "Đã nhận thông tin" },
    successMessage: {
      en: "Thank you. I will reply as soon as possible.",
      vi: "Cảm ơn bạn. Tôi sẽ phản hồi trong thời gian sớm nhất.",
    },
    errorMessage: {
      en: "The message could not be sent. Please try again or contact me directly by email.",
      vi: "Chưa thể gửi thông tin. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
    },
    validation: {
      name: {
        en: "Please enter at least 2 characters.",
        vi: "Vui lòng nhập ít nhất 2 ký tự.",
      },
      email: {
        en: "Please enter a valid email address.",
        vi: "Vui lòng nhập địa chỉ email hợp lệ.",
      },
      subject: {
        en: "Please enter at least 3 characters.",
        vi: "Vui lòng nhập ít nhất 3 ký tự.",
      },
      message: {
        en: "Please enter between 10 and 2,000 characters.",
        vi: "Vui lòng nhập từ 10 đến 2.000 ký tự.",
      },
    },
  },
  footer: {
    headline: {
      en: "Let’s build something clear, fast, and useful.",
      vi: "Cùng xây dựng một sản phẩm rõ ràng, nhanh và hữu ích.",
    },
    description: {
      en: "Available for fullstack roles, selected freelance projects, and technical collaborations.",
      vi: "Sẵn sàng cho vị trí Fullstack, dự án freelance phù hợp và hợp tác kỹ thuật.",
    },
    cta: { en: "Contact on Zalo", vi: "Liên hệ qua Zalo" },
    navigationTitle: { en: "Navigation", vi: "Điều hướng" },
    connectTitle: { en: "Connect", vi: "Kết nối" },
    copyright: { en: "All rights reserved.", vi: "Bảo lưu mọi quyền." },
    builtWith: { en: "Built with Next.js 16", vi: "Xây dựng với Next.js 16" },
  },
} as const satisfies PortfolioData;
