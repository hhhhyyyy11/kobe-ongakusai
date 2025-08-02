"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

interface CommonHeaderProps {
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
  showScrollNavigation?: boolean;
}

export function Header({
  activeSection = "",
  scrollToSection,
  showScrollNavigation = false
}: CommonHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // 現在のページに基づいてアクティブ状態を判定
  const isActive = (path: string) => pathname === path;

  // モバイルメニュー外部クリック時の閉じる処理
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-4 border-[#2C5F5D]">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo_transparent.png"
              alt="Kobe Ongakusai Logo"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <div
              className="text-xl font-black text-[#2C5F5D]"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              神戸音学祭
            </div>
          </Link>

          <div className="hidden lg:flex space-x-6">
            {/* スクロールナビゲーション（メインページのみ） */}
            {showScrollNavigation && [
              { id: "top", label: "TOP" },
              { id: "ticket", label: "開催概要・入場について" },
              { id: "artist", label: "出演団体" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg transform scale-105"
                    : "text-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white border-[#2C5F5D] hover:shadow-lg"
                }`}
                style={{ borderWidth: "3px" }}
              >
                {item.label}
              </button>
            ))}

            {/* 外部ページリンク */}
            {!showScrollNavigation && (
              <Link
                href="/"
                className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                  isActive("/")
                    ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg transform scale-105"
                    : "text-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white border-[#2C5F5D] hover:shadow-lg"
                }`}
                style={{ borderWidth: "3px" }}
              >
                ホーム
              </Link>
            )}

            <Link
              href="/set-list"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/set-list")
                  ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg transform scale-105"
                  : "text-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white border-[#2C5F5D] hover:shadow-lg"
              }`}
              style={{ borderWidth: "3px" }}
            >
              タイムテーブル
            </Link>
            <Link
              href="/about"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/about")
                  ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg transform scale-105"
                  : "text-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white border-[#2C5F5D] hover:shadow-lg"
              }`}
              style={{ borderWidth: "3px" }}
            >
              音楽祭について
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "bg-[#2C5F5D] scale-105 border-2 border-[#FF6B47]"
                : "bg-[#FF6B47] hover:scale-110 border-2 border-[#2C5F5D]"
            }`}
          >
            <FaBars className={`w-6 h-6 transition-colors duration-300 ${
              isMobileMenuOpen ? "text-white" : "text-white"
            }`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}>
          <div className="mt-4 pb-4 border-t-2 border-[#2C5F5D]/20">
            <div className={`flex flex-col space-y-3 pt-4 transform transition-all duration-500 ease-in-out ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}>
              {/* スクロールナビゲーション（メインページのみ） */}
              {showScrollNavigation && [
                { id: "top", label: "TOP" },
                { id: "ticket", label: "開催概要・入場について" },
                { id: "artist", label: "出演団体" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                    activeSection === item.id
                      ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg"
                      : "text-[#2C5F5D] bg-white/50 border-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white"
                  }`}
                  style={{
                    borderWidth: "3px",
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}

              {/* 外部ページリンク（モバイル） */}
              {!showScrollNavigation && (
                <Link
                  href="/"
                  className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                    isActive("/")
                      ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg"
                      : "text-[#2C5F5D] bg-white/50 border-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white"
                  }`}
                  style={{ borderWidth: "3px" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ホーム
                </Link>
              )}

              <Link
                href="/set-list"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/set-list")
                    ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg"
                    : "text-[#2C5F5D] bg-white/50 border-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white"
                }`}
                style={{
                  borderWidth: "3px",
                  animationDelay: `${showScrollNavigation ? 300 : 100}ms`
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                タイムテーブル
              </Link>
              <Link
                href="/about"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/about")
                    ? "bg-[#FF6B47] text-white border-[#2C5F5D] shadow-lg"
                    : "text-[#2C5F5D] bg-white/50 border-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white"
                }`}
                style={{
                  borderWidth: "3px",
                  animationDelay: `${showScrollNavigation ? 400 : 200}ms`
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                音楽祭について
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
