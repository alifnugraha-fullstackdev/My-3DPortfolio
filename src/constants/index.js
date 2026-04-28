import {
  c,
  contact,
  cpp,
  docker,
  express,
  fastify,
  github,
  githubActions,
  go,
  javascript,
  whatsapp,
  lua,
  mongodb,
  mysql,
  nestjs,
  nextjs,
  nodejs,
  postgresql,
  python,
  redis,
  redux,
  sqlite,
  tailwindcss,
  typescript
} from "../assets/icons";


// Import project images
import p1 from "../assets/images/project-1.jpg";
import p2 from "../assets/images/project-2.jpg";
import p3 from "../assets/images/project-3.jpg";
import p4 from "../assets/images/project-4.webp";
import p5 from "../assets/images/project-5.webp";
import p6 from "../assets/images/project-6.webp";

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    type: "Freelance",
    duration: "Present",
    description:
      "Working as a freelance Full Stack Developer, building robust and scalable web applications from frontend user interfaces to backend architectures.",
    certificateUrl: "",
  },
  {
    title: "Software / Application Developer",
    company: "Freelance",
    type: "Freelance",
    duration: "Present",
    description:
      "Developing various software and application solutions tailored to client needs across different platforms and environments.",
    certificateUrl: "",
  },
];

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: go,
    name: "Go",
    type: "Backend and System",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend and System",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend and System",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend and Scripting",
  },
  {
    imageUrl: lua,
    name: "Lua",
    type: "Backend and Scripting",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nestjs,
    name: "Nest.js",
    type: "Backend",
  },
  {
    imageUrl: fastify,
    name: "Fastify",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: sqlite,
    name: "SqLite",
    type: "Database",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: githubActions,
    name: "Github Actions",
    type: "CI/CD",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/alifnugraha-fullstackdev",
  },
  {
    name: "WhatsApp",
    iconUrl: whatsapp,
    link: "https://wa.me/62895402254310",
  },
];

export const projects = [
  {
    name: "Premium Property Agent",
    description:
      "A high-end, responsive property agency website showcasing property listings with modern design and smooth animations to provide a premium user experience.",
    image: p1,
    liveUrl: "https://akararasa12.github.io/premium-property-agent/",
    sourceCode: "https://github.com/Akararasa12/premium-property-agent",
  },
  {
    name: "SMK IT Iqro Profile & Dashboard",
    description:
      "A modern school profile website featuring a public landing page and a secure admin dashboard, built for high performance and seamless content management.",
    image: p2,
    liveUrl: "https://smk-it-iqro.web.app/",
    sourceCode: "https://github.com/Akararasa12/web-profile-sekolah",
  },
  {
    name: "YT-Farm Pro App",
    description:
      "A comprehensive YouTube channel management SaaS application with automated features, designed for efficient multi-account handling.",
    image: p3,
    liveUrl: "https://yt-manager-eight.vercel.app/",
    sourceCode: "https://github.com/Akararasa12/YT-Manager",
  },
];
