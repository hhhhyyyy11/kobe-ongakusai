import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterContactLinks } from "./FooterContactLinks";

export function Footer() {
  return (
    <footer className="bg-[#2C5F5D] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo_transparent.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <h3 className="text-2xl font-black text-[#94cef5]">
                神戸音学祭
              </h3>
            </div>
            <p className="text-gray-300 font-bold">
              学生が作る、学生のための音楽フェスティバル
            </p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
              ページ
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white font-bold transition-colors"
              >
                ホーム
              </Link>
              <Link
                href="/set-list"
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
            <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
              お問い合わせ
            </h4>
            <FooterContactLinks />
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
              アクセス
            </h4>
            <p className="text-gray-300 font-bold">
              TOTTEI PARK
              <br />
              神戸市中央区新港町2-1
              <br />
              <br />
              JR・阪神元町駅から徒歩15分
              <br />
              神戸市営地下鉄海岸線
              <br />
              みなと元町駅から徒歩8分
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
