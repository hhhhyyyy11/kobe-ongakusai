"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // 現在のページに基づいてアクティブ状態を判定
  const isActive = (path: string) => pathname === path;

  // モバイルメニュー外部クリック時の閉じる処理
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-4 border-kobe-dark-teal">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo_transparent.png"
              alt="Kobe Ongakusai Logo"
              width={144}
              height={144}
              className="lg:w-18 lg:h-18 w-14 h-14 rounded-full"
            />
            <Image
              src="/images/title_dark_teal.png"
              alt="神戸音学祭"
              width={384}
              height={128}
              className="object-contain object-center lg:w-48 lg:h-16 w-36 h-12"
            />
          </Link>

          <div className="hidden lg:flex space-x-3 xl:space-x-6 ml-6">
            {/* 全てページ遷移のナビゲーション */}
            <Link
              href="/"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/")
                  ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg transform scale-105"
                  : "text-kobe-dark-teal hover:bg-kobe-orange hover:text-white border-kobe-dark-teal hover:shadow-lg"
              }`}
            >
              TOP
            </Link>
            <Link
              href="/artists"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/artists")
                  ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg transform scale-105"
                  : "text-kobe-dark-teal hover:bg-kobe-orange hover:text-white border-kobe-dark-teal hover:shadow-lg"
              }`}
            >
              出演団体
            </Link>
            <Link
              href="/timetable"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/timetable")
                  ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg transform scale-105"
                  : "text-kobe-dark-teal hover:bg-kobe-orange hover:text-white border-kobe-dark-teal hover:shadow-lg"
              }`}
            >
              タイムテーブル
            </Link>
            <Link
              href="/about"
              className={`px-6 py-3 rounded-full font-black text-lg border-3 transition-all duration-300 ${
                isActive("/about")
                  ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg transform scale-105"
                  : "text-kobe-dark-teal hover:bg-kobe-orange hover:text-white border-kobe-dark-teal hover:shadow-lg"
              }`}
            >
              神戸音学祭とは
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "bg-kobe-dark-teal scale-105 border-2 border-kobe-orange"
                : "bg-kobe-orange hover:scale-110 border-2 border-kobe-dark-teal"
            }`}
          >
            <FaBars
              className={`w-6 h-6 transition-colors duration-300 ${
                isMobileMenuOpen ? "text-white" : "text-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t-2 border-kobe-dark-teal/20">
            <div
              className={`flex flex-col space-y-3 pt-4 transform transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              {/* 全てページ遷移のナビゲーション（モバイル） */}
              <Link
                href="/"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/")
                    ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg"
                    : "text-kobe-dark-teal bg-white/50 border-kobe-dark-teal hover:bg-kobe-orange hover:text-white"
                }`}
                style={{ borderWidth: "3px" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TOP
              </Link>
              <Link
                href="/artists"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/artists")
                    ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg"
                    : "text-kobe-dark-teal bg-white/50 border-kobe-dark-teal hover:bg-kobe-orange hover:text-white"
                }`}
                style={{ borderWidth: "3px", animationDelay: "100ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                出演団体
              </Link>
              <Link
                href="/timetable"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/timetable")
                    ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg"
                    : "text-kobe-dark-teal bg-white/50 border-kobe-dark-teal hover:bg-kobe-orange hover:text-white"
                }`}
                style={{ borderWidth: "3px", animationDelay: "200ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                タイムテーブル
              </Link>
              <Link
                href="/about"
                className={`block w-full px-4 py-3 rounded-2xl font-black text-lg border-3 transition-all duration-300 text-center transform hover:scale-105 ${
                  isActive("/about")
                    ? "bg-kobe-orange text-white border-kobe-dark-teal shadow-lg"
                    : "text-kobe-dark-teal bg-white/50 border-kobe-dark-teal hover:bg-kobe-orange hover:text-white"
                }`}
                style={{ borderWidth: "3px", animationDelay: "300ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                神戸音学祭とは
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
