import type { IconType } from "react-icons";
import { FaHouse, FaUser, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiSocketdotio,
  SiStripe,
  SiVite,
} from "react-icons/si";

// NOTE: This is placeholder content. Swap it out for your real details.

export const navItems = [
  { name: "Home", link: "#home", icon: FaHouse },
  { name: "About", link: "#about", icon: FaUser },
  { name: "Projects", link: "#projects", icon: FaBriefcase },
  { name: "Contact", link: "#contact", icon: FaEnvelope },
];

export type GridVariant =
  | "bio"
  | "location"
  | "stack"
  | "philosophy"
  | "currently"
  | "cta";

export type GridItem = {
  id: number;
  variant: GridVariant;
  className: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  tags?: string[];
  points?: string[];
  techIcons?: IconType[];
  cta?: { label: string; href: string };
};

export const gridItems: GridItem[] = [
  {
    id: 1,
    variant: "bio",
    className: "md:col-span-2",
    eyebrow: "The short version",
    title: "A software engineer who loves turning ideas into reliable products",
    description:
      "I design and build web applications end to end with a soft spot for clean architecture, thoughtful UX, and the small details that make a product feel effortless.",
    tags: ["Frontend", "Full-stack", "UI Engineering"],
  },
  {
    id: 2,
    variant: "location",
    className: "md:col-span-1",
    eyebrow: "Based in",
    title: "Nigeria",
    description:
      "Working in WAT (UTC+1) and comfortable collaborating across time zones.",
  },
  {
    id: 3,
    variant: "stack",
    className: "md:col-span-2",
    eyebrow: "My toolkit",
    title: "Technologies I work with",
    description: "The tools I reach for to ship modern, performant products.",
    techIcons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiJavascript,
      SiVite,
      SiTailwindcss,
      SiNodedotjs,
      SiGit,
      SiFigma,
    ],
  },
  {
    id: 4,
    variant: "philosophy",
    className: "md:col-span-1",
    eyebrow: "How I work",
    points: [
      "Clean, maintainable architecture",
      "Accessible, thoughtful interfaces",
      "Ship reliably, then iterate",
    ],
  },
  {
    id: 5,
    variant: "currently",
    className: "md:col-span-1",
    eyebrow: "Currently",
    title: "Exploring & building",
    description:
      "Going deeper on 3D on the web, motion design, and polished full-stack apps.",
  },
  {
    id: 6,
    variant: "cta",
    className: "md:col-span-2",
    eyebrow: "Open to work",
    title: "Let's build something great together",
    description: "Have a project or role in mind? I'd love to hear about it.",
    cta: { label: "Get in touch", href: "#contact" },
  },
];

export type Project = {
  id: number;
  title: string;
  des: string;
  techIcons: IconType[];
  image?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Zentry Clone",
    des: "The Zentry clone delivers a visually immersive UI, smooth 3D transitions, and a sleek layout designed to present games with cinematic flair",
    techIcons: [SiNextdotjs, SiTailwindcss,],
    image: "/projects/zentry-clone.png",
    link: "https://zentry-clone-ochre.vercel.app/",
  },
  {
    id: 2,
    title: "Me-Tube",
    des: "A YouTube clone built with React and an API.",
    techIcons: [SiReact],
    image: "/projects/me-tube.png",
    link: "https://metube-flax.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    des: "A simple todo app built with React, Javascript,It allows users to create, read, update, and delete tasks.",
    techIcons: [SiReact, SiJavascript, SiVite],
    image: "/projects/todo.png",
    link: "https://todoapp-bay-five.vercel.app/",
  },
  {
    id: 4,
    title: "Finance Logger",
    des: "A finance logger app built with React, Tailwind CSS. It allows users to track their income and expenses.",
    techIcons: [SiReact, SiTailwindcss,SiVite],
    image: "/projects/finance-logger.png",
    link: "https://financelogger-v2.vercel.app/",
  },
];

export type TimelineKind = "work" | "education";

export type TimelineItem = {
  id: number;
  kind: TimelineKind;
  title: string;
  org: string;
  duration: string;
  start: number; // start year — used to order the timeline (most recent first)
  desc: string;
  skills?: string[];
};

// Work and education combined into one professional timeline.
// Placeholder content — swap in your real roles, schools, and dates.
export const timeline: TimelineItem[] = [
  {
    id: 1,
    kind: "work",
    title: "Frontend Developer",
    org: "Dexter Inc",
    duration: "2024 — 2025",
    start: 2024,
    desc: "Developed and deployed a responsive Learning Management System with Next.js and Tailwind CSS, optimized for mobile, tablet, and desktop users.",
    skills: ["JavaScript", "Tailwind CSS", "React", "Next.js", "Git"],
  },
  {
    id: 2,
    kind: "work",
    title: "Junior Frontend Developer",
    org: "Vivmed Pharmaceuticals",
    duration: "2022 — 2023",
    start: 2023,
    desc: "Developed responsive, accessible interfaces and improved performance across key user flows.",
    skills: ["JavaScript", "Tailwind CSS", "React", "Next.js", "Git"],
  },
  {
    id: 3,
    kind: "education",
    title: "Full-Stack Web Development",
    org: "SQI Academy",
    duration: "2020 — 2022",
    start: 2022,
    desc: "Intensive program covering modern JavaScript, React, and backend fundamentals.",
    skills: ["JavaScript", "React", "Node.js","Express", "MongoDB","SQL","Python"],
  },
  {
    id: 4,
    kind: "education",
    title: "B.Sc. in Computer Engineering",
    org: "Obafemi Awolowo University",
    duration: "2019 — Present (Graduating 2026)",
    start: 2019,
    desc: "Focused on algorithms, data structures, and software engineering fundamentals, building projects along the way.",
    skills: ["Algorithms", "Data Structures", "OOP","etc."],
  },
   {
    id: 5,
    kind: "education",
    title: "Secondary School",
    org: "Rhema Chapel International College",
    duration: "2013 — 2019",
    start: 2013,
    desc: "Completed secondary education with a strong foundation in science and mathematics, preparing for higher education in computer engineering.",
    skills: ["Mathematics", "Physics", "Chemistry","Computer Studies","etc."],
  },
];

export type SocialMedia = {
  id: number;
  name: string;
  icon: IconType;
  link: string;
};

export const socialMedia: SocialMedia[] = [
  { id: 1, name: "GitHub", icon: FaGithub, link: "https://github.com/osikoya17" },
  { id: 2, name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/olaoluwa-osikoya" },
  { id: 3, name: "X", icon: FaXTwitter, link: "https://x.com/_Kyosi" },
  { id: 4, name: "Email", icon: FaEnvelope, link: "mailto:olaoluwaosikoya2021@gmail.com" },
];
