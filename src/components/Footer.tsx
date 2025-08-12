import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FooterContactLinks } from "./FooterContactLinks";

export function Footer() {
  return (
    <footer className="bg-kobe-dark-teal text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logo_transparent.png"
                alt="Logo"
                width={96}
                height={96}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <Image
                src="/images/title_white.png"
                alt="神戸音学祭"
                width={240}
                height={80}
                className="object-contain object-center w-30"
              />
            </Link>
            <p className="text-gray-300 font-bold">
              学生が作る、学生のための音楽フェスティバル
            </p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-kobe-orange">ページ</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white font-bold transition-colors"
              >
                ホーム
              </Link>
              <Link
                href="/artists"
                className="block text-gray-300 hover:text-white font-bold transition-colors"
              >
                出演団体
              </Link>
              <Link
                href="/timetable"
                className="block text-gray-300 hover:text-white font-bold transition-colors"
              >
                タイムテーブル
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white font-bold transition-colors"
              >
                音楽祭について
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-kobe-orange">
              お問い合わせ
            </h4>
            <FooterContactLinks />
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-kobe-orange">
              アクセス
            </h4>
            <p className="text-gray-300 font-bold">
              <Link
                href="https://www.totteikobe.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
              >
                TOTTEI PARK
                <FaExternalLinkAlt className="text-xs" />
              </Link>
              <br />
              神戸市中央区新港町2-1
              <br />
              <br />
              各線三宮駅から徒歩約17分
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p className="font-bold">
            &copy; 2025 神戸音学祭実行委員会. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
