import React from "react";
import Image from "next/image";
import { FaDownload, FaTimes } from "react-icons/fa";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  downloadFileName: string;
  width: number;
  height: number;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  downloadFileName,
  width,
  height,
}) => {
  // モーダル外クリックで閉じる
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // ESCキーで閉じる
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // スクロールを無効化
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // スクロールを復元
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleModalClick}
    >
      <div className="relative max-w-4xl max-h-full">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-kobe-dark-teal p-2 rounded-full hover:bg-kobe-orange hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg z-10"
          title="閉じる"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* 画像 */}
        <div className="bg-white rounded-2xl p-4 shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />
        </div>

        {/* ダウンロードボタン */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <a
            href={imageSrc}
            download={downloadFileName}
            className="bg-kobe-dark-teal text-white px-6 py-3 rounded-full hover:bg-kobe-orange transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <FaDownload />
            <span className="font-bold">ダウンロード</span>
          </a>
        </div>
      </div>
    </div>
  );
};
