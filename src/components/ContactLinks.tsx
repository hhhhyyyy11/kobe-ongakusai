import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { SNS_INFO } from '@/constants/sns';

export const ContactLinks: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <FaInstagram className="text-purple-500 text-xl" />
        <a
          href={SNS_INFO.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2C5F5D] font-bold hover:underline"
        >
          @{SNS_INFO.instagram.handle}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <SiX className="text-black text-xl" />
        <a
          href={SNS_INFO.twitter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2C5F5D] font-bold hover:underline"
        >
          @{SNS_INFO.twitter.handle}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <FaEnvelope className="text-[#2C5F5D] text-xl" />
        <a
          href="mailto:ongakusai.kobe@gmail.com"
          className="text-[#2C5F5D] font-bold hover:underline"
        >
          ongakusai.kobe@gmail.com
        </a>
      </div>
    </div>
  );
};
