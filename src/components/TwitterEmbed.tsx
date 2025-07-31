import React from 'react';
import { SiX } from 'react-icons/si';
import { SNS_INFO } from '@/constants/sns';

interface TwitterEmbedProps {
  isClient: boolean;
}

export const TwitterEmbed: React.FC<TwitterEmbedProps> = ({ isClient }) => {
  const { twitter } = SNS_INFO;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl border-2 border-gray-300 shadow-lg p-4">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <SiX className="text-2xl text-gray-600" />
          <h3 className="text-lg font-bold text-gray-700">{twitter.displayName}</h3>
        </div>
        <a
          href={twitter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-bold text-sm"
        >
          <span>@{twitter.handle}</span>
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {isClient ? (
          <div className="h-[400px] flex flex-col">
            <div className="p-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <SiX className="text-lg text-black" />
                <div>
                  <h4 className="font-bold text-gray-700 text-sm">@{twitter.handle}</h4>
                  <p className="text-xs text-gray-500">{twitter.description}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-3 flex items-center justify-center">
              <div className="text-center">
                <SiX className="text-4xl text-gray-400 mb-3 mx-auto" />
                <p className="text-gray-600 font-bold mb-2 text-sm">
                  速報をチェック！
                </p>
                <a
                  href={twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-bold text-sm"
                >
                  <SiX className="text-sm" />
                  Xで見る
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <div className="text-gray-600 font-bold text-sm">
              Loading X feed...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
