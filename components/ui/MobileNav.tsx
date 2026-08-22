"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaBars, FaXmark, FaDownload } from "react-icons/fa6";
import { resumeVariants } from "@/data";

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export const MobileNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Close on Escape for keyboard/accessibility.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={className}>
      {/* Toggle button — always reachable on mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="fixed right-4 top-5 z-[5100] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black-200/80 text-white shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:border-purple/40"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaXmark className="text-lg" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaBars className="text-base" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-[5000] bg-black/60 backdrop-blur-sm"
            />

            {/* Menu panel */}
            <motion.nav
              key="panel"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-4 top-[4.75rem] z-[5100] w-60 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-black-200/90 p-2 shadow-xl shadow-black/50 backdrop-blur-md"
            >
              {navItems.map((navItem, idx) => (
                <a
                  key={`${navItem.link}-${idx}`}
                  href={navItem.link}
                  onClick={close}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {navItem.icon && (
                    <span className="text-purple/80">{navItem.icon}</span>
                  )}
                  <span>{navItem.name}</span>
                </a>
              ))}

              {/* Résumé / CV variants */}
              <div className="my-1 h-px bg-white/10" />
              <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Download CV
              </p>
              {resumeVariants.map((r) => (
                <a
                  key={r.id}
                  href={r.file}
                  download={r.downloadAs}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <FaDownload className="shrink-0 text-xs text-purple" />
                  <span className="flex flex-col">
                    <span className="text-white">{r.label}</span>
                    <span className="text-xs text-neutral-400">{r.description}</span>
                  </span>
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
