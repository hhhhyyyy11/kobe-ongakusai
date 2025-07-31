import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SNS_INFO } from "@/constants/sns";

export const FooterContactLinks: React.FC = () => {
  return (
    <>
      <p className="text-gray-300 mb-2 font-bold flex items-center gap-2">
        <FaInstagram />
        <a
          href={SNS_INFO.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @{SNS_INFO.instagram.handle}
        </a>
      </p>
      <p className="text-gray-300 mb-2 font-bold flex items-center gap-2">
        <SiX />
        <a
          href={SNS_INFO.twitter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @{SNS_INFO.twitter.handle}
        </a>
      </p>
      <p className="text-gray-300 font-bold flex items-center gap-2">
        <FaEnvelope />
        <a href="mailto:ongakusai.kobe@gmail.com" className="hover:underline">
          ongakusai.kobe@gmail.com
        </a>
      </p>
    </>
  );
};
