"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaDownload, FaChevronDown } from "react-icons/fa6";
import { resumeVariants } from "@/data";

/**
 * Desktop "Resume" control: a pill button that opens a dropdown of CV
 * variants to download. Closes on outside-click and Escape.
 */
export const ResumeMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative ml-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-purple/40 hover:bg-white/10"
      >
        <FaDownload className="text-xs text-purple" />
        <span>Resume</span>
        <FaChevronDown
          className={`text-[10px] text-purple transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-purple to-transparent" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+0.6rem)] w-64 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-black-200/95 p-2 shadow-xl shadow-black/50 backdrop-blur-md"
          >
            {resumeVariants.map((r) => (
              <a
                key={r.id}
                href={r.file}
                download={r.downloadAs}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple">
                  <FaDownload className="text-xs" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">
                    {r.label}
                  </span>
                  <span className="block truncate text-xs text-neutral-400">
                    {r.description}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
