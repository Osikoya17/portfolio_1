"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ProfileAvatar = ({
  src = "/profile.jpg",
  alt = "Osikoya Olaoluwa",
  initials = "OO",
  className,
}: {
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
}) => {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple to-indigo-500 text-lg font-bold text-white shadow-lg shadow-purple/20 ring-1 ring-inset ring-white/15",
        className,
      )}
    >
      {errored ? (
        initials
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="56px"
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
};
