"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  children,
  index = 0,
}: {
  className?: string;
  children?: React.ReactNode;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group/bento relative row-span-1 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black-200 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25",
        className,
      )}
    >
      {/* Soft purple bloom that intensifies on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full opacity-50 transition-opacity duration-300 group-hover/bento:opacity-100 [background:radial-gradient(50%_60%_at_50%_100%,rgba(203,172,249,0.12),transparent)]"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
};
