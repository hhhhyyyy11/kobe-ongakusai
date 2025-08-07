import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SNS_INFO } from "@/constants/sns";

export const InstagramEmbed: React.FC = () => {
  const { instagram } = SNS_INFO;

  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaInstagram className="text-5xl text-purple-500" />
          <div>
            <h3 className="text-3xl font-black text-kobe-dark-teal">
              {instagram.displayName}
            </h3>
          </div>
        </div>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
        >
          <FaInstagram className="text-xl" />
          <span>@{instagram.handle} をフォロー</span>
        </a>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
        <iframe
          src={instagram.embedUrl}
          width="100%"
          height="600"
          style={{ border: "none" }}
          scrolling="no"
          className="w-full h-[480px] md:h-[600px]"
          title="Instagram Feed"
        />
      </div>
    </div>
  );
};
