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
    techIcons: [SiReact, SiJavascript,],
    image: "/projects/todo.png",
    link: "https://todoapp-bay-five.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio CMS API",
    des: "A headless API powering multiple portfolio front-ends.",
    techIcons: [SiNodedotjs, SiExpress, SiPostgresql],
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
    title: "Software Engineer",
    org: "Company Name",
    duration: "2024 — Present",
    start: 2024,
    desc: "Building and maintaining web applications, collaborating closely with design and product to ship reliable features.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    kind: "work",
    title: "Frontend Developer",
    org: "Company Name",
    duration: "2023 — 2024",
    start: 2023,
    desc: "Developed responsive, accessible interfaces and improved performance across key user flows.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 3,
    kind: "work",
    title: "Junior Developer",
    org: "Company Name",
    duration: "2022 — 2023",
    start: 2022,
    desc: "Contributed to internal tools and learned the fundamentals of production software engineering.",
    skills: ["JavaScript", "Git"],
  },
  {
    id: 4,
    kind: "education",
    title: "Full-Stack Web Development",
    org: "Online Certification",
    duration: "2022",
    start: 2022,
    desc: "Intensive program covering modern JavaScript, React, and backend fundamentals.",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 5,
    kind: "education",
    title: "B.Sc. in Computer Science",
    org: "Your University",
    duration: "2019 — 2023",
    start: 2019,
    desc: "Focused on algorithms, data structures, and software engineering fundamentals, building projects along the way.",
    skills: ["Algorithms", "Data Structures", "OOP"],
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
  { id: 2, name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/osikoyaolaoluwa" },
  { id: 3, name: "X", icon: FaXTwitter, link: "https://x.com/osikoyaolaoluwa" },
  { id: 4, name: "Email", icon: FaEnvelope, link: "mailto:olaoluwaosikoya2021@gmail.com" },
];
