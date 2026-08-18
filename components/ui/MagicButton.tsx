import React from 'react'
import { cn } from '@/utils/cn'

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  position?: 'left' | 'right';
  className?: string;
  /** When provided, the component renders as an anchor instead of a button. */
  href?: string;
  target?: string;
  rel?: string;
}

const MagicButton = ({
  title,
  className,
  position = 'right',
  handleClick,
  href,
  target,
  rel,
  icon,
}: MagicButtonProps) => {
  const classes = cn(
    'relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100',
    className
  );

  const content = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl transition-colors">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </>
  );

  // Render as a semantic anchor for links (avoids invalid <a><button> nesting).
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {content}
    </button>
  );
}

export default MagicButton;
