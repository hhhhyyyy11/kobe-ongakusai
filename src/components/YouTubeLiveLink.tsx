import React from "react";
import Link from "next/link";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

interface YouTubeLiveLinkProps {
  size?: "small" | "large";
  className?: string;
}

export function YouTubeLiveLink({
  size = "large",
  className = "",
}: YouTubeLiveLinkProps) {
  const isLarge = size === "large";

  return (
    <div className={className}>
      <Link
        href="https://youtube.com/channel/UCE1l-0g2boSFmRWd8yeNkAw?si=SdxhmTeUOjxHvBUP"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-red-600 text-white rounded-full font-black border-4 border-white hover:bg-red-700 hover:border-red-200 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-3 ${
          isLarge ? "px-10 py-5 text-xl w-full" : "px-6 py-3 text-lg"
        }`}
      >
        <FaYoutube className={isLarge ? "text-2xl" : "text-xl"} />
        {isLarge ? "YouTubeライブ配信を見る" : "ライブ配信を見る"}
        <FaExternalLinkAlt className={isLarge ? "text-base" : "text-sm"} />
      </Link>
    </div>
  );
}
