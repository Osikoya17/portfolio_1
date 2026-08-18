"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  highlightFrom = 4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  /** Word index (0-based) from which words render in the accent color. */
  highlightFrom?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(
              "opacity-0",
              idx >= highlightFrom ? "text-purple" : "text-white"
            )}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="leading-[1.15] tracking-tight text-white">
        {renderWords()}
      </div>
    </div>
  );
};
