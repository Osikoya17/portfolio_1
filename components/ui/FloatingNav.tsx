"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { FaDownload } from "react-icons/fa6";
import { cn } from "@/utils/cn";

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const previous = scrollYProgress.getPrevious() ?? current;
    const direction = current - previous;

    // Hide near the top of the page; otherwise reveal on scroll-up, hide on scroll-down.
    if (current < 0.05) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full border border-white/10 bg-black-200/80 py-2 pl-5 pr-2 shadow-lg shadow-black/40 backdrop-blur-md",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`${navItem.link}-${idx}`}
          href={navItem.link}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-white-200 transition-colors hover:text-white"
        >
          {navItem.icon && (
            <span className="text-xs text-purple/80">{navItem.icon}</span>
          )}
          <span>{navItem.name}</span>
        </a>
      ))}

      <a
        href="/resume.pdf"
        download="Osikoya-Olaoluwa-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download résumé (PDF)"
        className="relative ml-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-purple/40 hover:bg-white/10"
      >
        <FaDownload className="text-xs text-purple" />
        <span>Resume</span>
        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-purple to-transparent" />
      </a>
    </motion.div>
  );
};
