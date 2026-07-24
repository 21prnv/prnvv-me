// Mobile stack labels (kept in one place like the original resume)
export const MOBILE_FRAMEWORK = "React Native";
export const MOBILE_LANGUAGE = "Dart";

export const DATA = {
  name: "Pranav Patil",
  initials: "PP",
  handle: "prnv",
  url: "https://www.prnvv.me/",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra",
  tagline: "Software & AI Engineer",
  description:
    "I'm a software engineer with a strong background in full-stack and mobile app development.",
  summary:
    "I'm a 22-year-old passionate Software & AI Engineer. I've worked in 3+ startups where I collaborated directly with founders, leading and shipping end-to-end projects independently. My experience spans building high-impact applications, improving user engagement, and optimizing backend performance. Lately I've focused on AI engineering, building LLM agents, RAG pipelines, and agent orchestration that let users get things done through natural language. I've developed projects using React Native, Next.js, Redux, and modern AI tooling. Alongside my tech journey, I also pursue farming. I continue to explore new technologies and remain curious about learning. Always eager to build, learn, and innovate!",
  avatarUrl: "/meee.jpg",
  contact: {
    email: "pranavpatil6251@gmail.com",
    tel: "+918261009460",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/21prnv" },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranav-patil-1b6049231/",
      },
      X: { name: "X", url: "https://x.com/21prnv" },
      Email: { name: "Email", url: "mailto:pranavpatil6251@gmail.com" },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1oU0e3ONUNwvehx8cFrsvk6IIeF6y_Wto/view?usp=sharing",
      },
    },
  },
  skills: [
    "React", "Next.js", "Typescript", "Node.js", "Recoil", "Redux",
    "Redux Toolkit", "React Query", "Zustand", "Bloc", "Getx", "Provider",
    "Jest", "Git", "CI/CD", "AWS", "Firebase", "MongoDB", "MySQL", "Redis",
    "GraphQL", "Apollo", "Tailwind CSS", "Bootstrap", "Material UI",
    "Styled Components", "Sass", "Vite", MOBILE_LANGUAGE, MOBILE_FRAMEWORK,
    "Python", "FastAPI", "Postgres", "Docker", "Kubernetes", "C", "C++",
  ],
  work: [
    {
      company: "BiorLabs",
      href: "https://biorlabs.com/",
      location: "Canada · Remote",
      title: "Software Engineer",
      logoUrl: "/biorlabs.png",
      start: "Apr 2025",
      end: "Present",
      description:
        "At BiorBank I designed the AI agent infrastructure powering the product: LLM agents with RAG pipelines over on-chain and market data, guardrails, and multi-step orchestration that let users execute transactions in natural language. I engineered a durable transaction-processing runtime on BullMQ and Redis with automatic retries, dead-letter queues, and FCM notifications, reliably executing 10K+ transactions a day on a platform that moves real customer funds. I lead a team of 4 across mobile and backend, owning architecture, sprint planning, code review, and the technical roadmap for a multi-chain wallet supporting 20+ blockchains, and delivered frontend features with React and Redux.",
    },
    {
      company: "ZiTi",
      href: "https://letsziti.com/",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/ziti.webp",
      start: "Nov 2023",
      end: "Present",
      description:
        "Built India's first digital catering platform, serving 300+ caterers on a scalable PostgreSQL schema with real-time subscriptions and offline-first sync. Automated multi-step operational workflows with AI agents for quotations, menu planning, and lead follow-ups, replacing manual back-and-forth for operations teams. Architected 5 applications on Clean Architecture and MVVM with a shared data layer, cutting code duplication by 40%, and deployed serverless edge functions on Supabase and AWS Lambda for automated workflows, payments, and third-party integrations.",
    },
    {
      company: "Code Help",
      href: "https://www.codehelp.in/",
      location: "Remote",
      title: "Technical Content Writer",
      logoUrl: "/codehelp.png",
      start: "Jan 2024",
      end: "Oct 2024",
      description:
        "Wrote more than 80 articles about React and TypeScript, explaining difficult coding ideas in easy-to-understand ways. Helped many students learn new programming skills and got good feedback from over 1000 students who read the articles.",
    },
    {
      company: "TarotIt",
      href: "https://tarotit.com/",
      location: "Remote",
      title: "React Native Developer Intern",
      logoUrl: "/tarotit.jpg",
      start: "Jul 2023",
      end: "Nov 2023",
      description:
        "Collaborated closely with backend developers to seamlessly integrate APIs into the React Native application, and developed a user-friendly interface for a Tarot card reading feature. Implemented responsive design principles to ensure an optimal experience across devices.",
    },
    {
      company: "Tripo Saints",
      href: "https://triposaints.com/",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/tripo-saints.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Built full-stack React and GraphQL applications: designed schemas and resolvers with query batching, subscriptions, and field-level caching, cutting network requests by 60%. Created responsive pages and components with React.js and Tailwind CSS, backed by Jest unit tests and a CI/CD pipeline.",
    },
  ],
  education: [
    {
      school: "Dr. JJM College Of Engineering",
      href: "https://www.jjmpharmacy.com/",
      degree: "Masters of Computer Application",
      logoUrl:
        "https://s3.ap-south-1.amazonaws.com/vmedulife-s3/logo/06-10-2021-LOGO-170-1633507714.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "PDVP College",
      href: "http://pdvpmtasgaon.edu.in/",
      degree: "Bachelors Of Computer Application",
      logoUrl: "http://pdvpmtasgaon.edu.in/images/header-new.png",
      start: "2022",
      end: "2024",
    },
  ],
  webProjects: [
    {
      title: "AndroClaw",
      href: "https://github.com/AndroClawD/AndroClaw",
      dates: "2026",
      active: true,
      description:
        "An on-device AI assistant for Android, your phone but agentic. Connects to multiple LLM providers (Claude, OpenAI, Gemini, Groq, OpenRouter) and executes real actions on your phone: sending messages, making calls, searching the web, controlling other apps via accessibility, and reasoning about screenshots. Features an agentic loop with 30+ device actions, a skills system for custom slash commands, and a local-first, security-first design.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Agentic AI", "LLMs", "Agent Orchestration"],
      link: "https://github.com/AndroClawD/AndroClaw",
    },
    {
      title: "Sola AI",
      href: "https://github.com/21prnv/sola-ai",
      dates: "2026",
      active: true,
      description:
        "AI for your wallets, chat your way across chains. Sola-AI turns a multi-chain wallet into a conversational interface: portfolios, swaps, sends, prediction markets, and vaults, all from one conversation. An LLM agent builds unsigned transactions server-side while private keys never leave the browser (non-custodial). Supports natural-language swaps, Polymarket prediction markets, and streaming interactive cards.",
      technologies: ["Next.js", "Typescript", "AI SDK", "Agents", "Web3", "LLMs"],
      link: "https://github.com/21prnv/sola-ai",
    },
    {
      title: "SatyaCheck AI",
      href: "https://satya-check.vercel.app/",
      dates: "Jan 2025 to Feb 2025",
      active: true,
      description:
        "Satyacheck AI helps you identify and counter political propaganda and misinformation with advanced AI technology tailored for the Indian context.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Gen AI"],
      link: "https://satya-check.vercel.app/",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1744963681/WhatsApp_Video_2025-04-18_at_13.36.05_a0ef4d90_xkmo6x.mp4",
    },
    {
      title: "ImpactArc AI",
      href: "https://impact-arc-4cog.vercel.app/",
      dates: "Feb 2025 to Mar 2025",
      active: true,
      description: "The AI-Powered System That Ranks Who Really Matters.",
      technologies: ["Next.js", "Typescript", "Scrapper", "Docker", "Railway", "PostgreSQL", "Prisma", "Gen AI"],
      link: "https://impact-arc-4cog.vercel.app/",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1744964965/WhatsApp_Video_2025-04-18_at_13.49.27_260a1704_wrareu.mp4",
    },
    {
      title: "Nodesq AI",
      href: "https://nodesq.site",
      dates: "Jan 2025 to Feb 2025",
      active: true,
      description:
        "NodeSQ AI transforms AI conversations into an interactive, visual experience. Each conversation point becomes a visual node on an infinite canvas, letting users see connections and explore complex topics without losing track of related ideas.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Gen AI"],
      link: "https://nodesq.site",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1739804360/Untitled_video_-_Made_with_Clipchamp_8_l53tvh.mp4",
    },
    {
      title: "asktocmd CLI",
      href: "https://www.npmjs.com/package/asktocmd",
      dates: "Nov 2024 to Dec 2024",
      active: true,
      description:
        "Forgot your command-line commands? Ask asktocmd, your AI-powered CLI helper. Ask about any command or CLI-related query and get instant, intelligent responses powered by Google's Gemini AI.",
      technologies: ["Javascript", "Typescript", "Node.js", "Gemini"],
      link: "https://www.npmjs.com/package/asktocmd",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740310555/Untitled_video_-_Made_with_Clipchamp_10_pidjkk.mp4",
    },
  ],
  appProjects: [
    {
      title: "BiorBank",
      href: "https://play.google.com/store/apps/details?id=com.app.biorbankapp",
      dates: "2025",
      users: "500+ users",
      description:
        "A next-generation digital banking experience on Android (BiorBank) and iOS (BiorVault). Secure account management, seamless transactions, and a modern interface for everyday finance.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", "Swift", MOBILE_LANGUAGE, "Android", "iOS"],
      link: "https://play.google.com/store/apps/details?id=com.app.biorbankapp&hl=en",
      video:
        "https://biorlabs.com/static/media/biorvault%20launch.1baa8eb20b1d62a32ad5.mp4",
      image: "",
    },
    {
      title: "Scroll Guard",
      href: "https://play.google.com/store/apps/details?id=com.scrollguard.app",
      dates: "Nov 2024 to Jan 2025",
      users: "100+ users",
      description:
        "Scroll Guard helps you manage your social media time by limiting usage. Using Android's Accessibility Service, it frees you from endless scrolling so you can focus on what matters.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android", "Java"],
      link: "https://play.google.com/store/apps/details?id=com.scrollguard.app",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740306239/1729507721803_zbmu24.mp4",
      image: "",
    },
    {
      title: "Togethrly",
      href: "https://play.google.com/store/apps/details?id=com.togethrly.coupleapp",
      dates: "Dec 2024 to Jan 2025",
      users: "500+ users",
      description:
        "An app designed to help couples deepen their bond: playful quizzes, shared widgets, thought-provoking prompts, and a more engaging video-calling experience.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android", "Supabase", "Firebase", "CashFree"],
      link: "https://play.google.com/store/apps/details?id=com.togethrly.coupleapp",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740306702/Untitled_video_-_Made_with_Clipchamp_9_lzakqc.mp4",
      image: "",
    },
    {
      title: "Edvin",
      href: "https://play.google.com/store/apps/details?id=co.edvin.ufxxy",
      dates: "2024",
      users: "10,000+ users",
      description:
        "A learning app that delivers interactive lessons and personalized study experiences, helping students learn better on the go.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android"],
      link: "https://play.google.com/store/apps/details?id=co.edvin.ufxxy",
      image:
        "https://play-lh.googleusercontent.com/HjwNiBHKt5C1WOfZTEHIG9YLvmpG6kDfgU7nUJPIlcv16AAjKDY3QL6H9TK55iLglX0=w526-h296",
      video: "",
    },
    {
      title: "Ziti Caterer",
      href: "https://play.google.com/store/apps/details?id=com.adgnitio.ziticaterer",
      dates: "2024",
      users: "100+ users",
      description:
        "Empowers catering businesses to manage orders, menus, and customer interactions on the go, streamlining operations for modern caterers.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android"],
      link: "https://play.google.com/store/apps/details?id=com.adgnitio.ziticaterer&hl=en",
      image:
        "https://play-lh.googleusercontent.com/hy8ZZEZmDalm2il_dI_vLYRS7ouYOHmoYziCJThmE9bYwmq-RaoJghpgD1QQNwdGRU0=w526-h296",
      video: "",
    },
    {
      title: "Ziti Workforce",
      href: "https://play.google.com/store/apps/details?id=com.adgnitio.zitiworkforce",
      dates: "2024",
      users: "500+ users",
      description:
        "Helps field employees track attendance, tasks, and assignments in real time, making day-to-day workforce management effortless.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android"],
      link: "https://play.google.com/store/apps/details?id=com.adgnitio.zitiworkforce&hl=en",
      image:
        "https://play-lh.googleusercontent.com/BprO2jiqTbBQXdo5Gay1V3cGfww3CH6p8AxvB2CSUSx4aSI235b1OgPYkli4GVetRQ=w526-h296",
      video: "",
    },
    {
      title: "Ziti Workforce Organizer",
      href: "https://play.google.com/store/apps/details?id=com.adgnitio.zitiworkforceorganizer",
      dates: "2024",
      users: "100+ users",
      description:
        "Gives managers a unified dashboard to coordinate teams, assign tasks, and monitor performance across distributed workforces.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android"],
      link: "https://play.google.com/store/apps/details?id=com.adgnitio.zitiworkforceorganizer&hl=en",
      image:
        "https://play-lh.googleusercontent.com/Ud9v-ajG3URkL1m8_4I5N1I6IFlnkecZLY_Z8r7Oloqw2ard_o4KLdWJZcmhIT-D3Q=w526-h296",
      video: "",
    },
    {
      title: "Ziti Channel Partner",
      href: "https://play.google.com/store/apps/details?id=com.adgnito.zitichannelpartner",
      dates: "2024",
      users: "100+ users",
      description:
        "Enables partners to manage leads, track commissions, and grow their business through a seamless mobile experience.",
      technologies: [MOBILE_FRAMEWORK, "Kotlin", MOBILE_LANGUAGE, "Android"],
      link: "https://play.google.com/store/apps/details?id=com.adgnito.zitichannelpartner&hl=en",
      image:
        "https://play-lh.googleusercontent.com/UXxxuiJU4LJaWBmMMIZwcMiPym899IOzwFRajQF6jhC7f5PG4RHtPVdv5y6nqYn58WY=w526-h296",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Auraflix Hackathon",
      dates: "Jan 23-25, 2025",
      location: "Pune, India",
      description:
        "Developed a website that ranks content creators based on their content and engagement using AI.",
      image:
        "https://auraflix.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F65eb6744482a4083a4fcb786107c9488%2Fassets%2Ffavicon%2F152.png&w=1440&q=75",
    },
    {
      title: "Hakoona Matata Hackathon",
      dates: "Dec 23-25, 2024",
      location: "IIT Kottayam, India",
      description:
        "Built a Chrome extension that checks fake and propaganda content using AI.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/67bd856784f1e_logo__3_.jpg?d=200x200",
    },
  ],
} as const;

export type Data = typeof DATA;
