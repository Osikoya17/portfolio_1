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

export type GridItem = {
  id: number;
  title: string;
  description: string;
  className: string;
  techIcons?: IconType[];
  cta?: { label: string; href: string };
};

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "A software engineer who loves turning ideas into reliable products",
    description:
      "I care about clean architecture, thoughtful UX, and code that's built to last.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "Based in Nigeria (WAT), comfortable working across time zones.",
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve.",
    className: "md:col-span-1",
    techIcons: [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss],
  },
  {
    id: 4,
    title: "Technologies I love working with",
    description: "",
    className: "md:col-span-2",
    techIcons: [
      SiJavascript,
      SiNodedotjs,
      SiExpress,
      SiMongodb,
      SiPostgresql,
      SiDocker,
      SiGit,
      SiFigma,
    ],
  },
  {
    id: 5,
    title: "My GitHub contributions",
    description: "I love keeping my streak alive and shipping consistently.",
    className: "md:col-span-1",
  },
  {
    id: 6,
    title: "Currently open to new opportunities",
    description: "Have a project in mind? Let's build something great together.",
    className: "md:col-span-2",
    cta: { label: "Get in touch", href: "#contact" },
  },
];

export type Project = {
  id: number;
  title: string;
  des: string;
  techIcons: IconType[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Storefront",
    des: "A full-featured storefront with cart, checkout, and payments.",
    techIcons: [SiNextdotjs, SiTailwindcss, SiStripe],
    link: "#",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    des: "A messaging app with live typing indicators and presence.",
    techIcons: [SiReact, SiSocketdotio, SiNodedotjs],
    link: "#",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    des: "A kanban-style dashboard for tracking team workflows.",
    techIcons: [SiReact, SiTypescript, SiPostgresql],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS API",
    des: "A headless API powering multiple portfolio front-ends.",
    techIcons: [SiNodedotjs, SiExpress, SiPostgresql],
    link: "#",
  },
];

export type WorkExperience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  desc: string;
};

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Company Name",
    duration: "2024 — Present",
    desc: "Building and maintaining web applications, collaborating closely with design and product to ship reliable features.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Company Name",
    duration: "2023 — 2024",
    desc: "Developed responsive, accessible interfaces and improved performance across key user flows.",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Company Name",
    duration: "2022 — 2023",
    desc: "Contributed to internal tools and learned the fundamentals of production software engineering.",
  },
];

export type SocialMedia = {
  id: number;
  name: string;
  icon: IconType;
  link: string;
};

export const socialMedia: SocialMedia[] = [
  { id: 1, name: "GitHub", icon: FaGithub, link: "https://github.com/" },
  { id: 2, name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/" },
  { id: 3, name: "X", icon: FaXTwitter, link: "https://x.com/" },
  { id: 4, name: "Email", icon: FaEnvelope, link: "mailto:adeyinkaoluwatosin123@gmail.com" },
];
