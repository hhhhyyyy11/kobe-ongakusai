"use client";
import React, { useState, useEffect } from "react";
import { FaMusic, FaClock, FaStar, FaInstagram } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { YouTubeLiveLink } from "@/components/YouTubeLiveLink";

interface PerformanceItem {
  time: string;
  artist: string;
  band: string;
  introductionReel?: string; // 各出演アーティストの紹介リールURL
}

const performanceSchedule: PerformanceItem[] = [
  {
    time: "10:00~10:30",
    artist: "THE ORAL CIGARETTES",
    band: "神戸親和大学軽音楽部",
    introductionReel:
      "https://www.instagram.com/reel/DNGPPIhzNA8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "10:30~11:00",
    artist: "BLUE ENCOUNT",
    band: "神戸市外国語大学学部軽音楽部",
    introductionReel:
      "https://www.instagram.com/reel/DNN5XLDTNME/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "11:00~11:30",
    artist: "King Gnu",
    band: "立命館大学 Hansel&Gretel",
    introductionReel:
      "https://www.instagram.com/reel/DNNJgUsx5nt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "11:30~12:00",
    artist: "Avril Lavigne",
    band: "関西学院大学文化総部軽音楽部",
    introductionReel:
      "https://www.instagram.com/reel/DNNnYNXTskc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "12:00~12:30",
    artist: "BABY METAL",
    band: "同志社大学 Lilac Rainbows",
  },
  {
    time: "12:30~13:00",
    artist: "ハヌマーン",
    band: "神戸大学 MMC",
    introductionReel:
      "https://www.instagram.com/reel/DNE0nEpz4cD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "13:00~13:30",
    artist: "さよならポエジー",
    band: "立命館大学 Hansel&Gretel",
  },
  {
    time: "13:30~14:00",
    artist: "東京事変",
    band: "神戸大学 MMC",
    introductionReel:
      "https://www.instagram.com/reel/DNQnuDgzG5n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "14:00~14:30",
    artist: "明日、照らす",
    band: "神戸大学軽音楽部 ROCK",
    introductionReel:
      "https://www.instagram.com/reel/DNMsms9T2XM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "14:30~15:00",
    artist: "GLAY",
    band: "神戸大学 FreeBeat",
    introductionReel:
      "https://www.instagram.com/reel/DNNU0pFRjAX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "15:00~15:30",
    artist: "BUMP OF CHICKEN",
    band: "関西学院大学文化総部軽音楽部",
    introductionReel:
      "https://www.instagram.com/reel/DNQPXhRz_pf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "15:30~16:00",
    artist: "B'z",
    band: "立命館大学 Jack&Beans",
  },
  {
    time: "16:00~16:30",
    artist: "レキシ",
    band: "神戸大学軽音楽部 ROCK",
    introductionReel:
      "https://www.instagram.com/reel/DNVICDeRIdq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "16:30~17:00",
    artist: "[Alexandros]",
    band: "神戸市外国語大学学部軽音楽部",
  },
  {
    time: "17:00~17:30",
    artist: "rega",
    band: "立命館大学 Jack&Beans",
  },
  {
    time: "17:30~18:00",
    artist: "QOOPIE",
    band: "神戸大学 SoundS",
    introductionReel:
      "https://www.instagram.com/reel/DNTXMUqTH13/?igsh=ZWpucjZ3eHVkM3d6",
  },
  {
    time: "18:00~18:30",
    artist: "Homecomings",
    band: "関西学院大学文化総部軽音楽部",
    introductionReel:
      "https://www.instagram.com/reel/DNNtUgUzQyH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    time: "18:30~19:00",
    artist: "back number",
    band: "神戸大学 FreeBeat",
    introductionReel:
      "https://www.instagram.com/reel/DNHZSgnzLsr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

// 安全なInstagram URLかどうかを検証する関数
const isValidInstagramUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Instagram ドメインのみ許可
    const allowedDomains = ["instagram.com", "www.instagram.com"];
    return (
      allowedDomains.includes(urlObj.hostname) &&
      (urlObj.protocol === "https:" || urlObj.protocol === "http:")
    );
  } catch {
    return false;
  }
};

// 紹介リールを開く関数
const openIntroductionReel = (introductionReel: string) => {
  if (isValidInstagramUrl(introductionReel)) {
    window.open(introductionReel, "_blank", "noopener,noreferrer");
  } else {
    console.warn("Invalid Instagram URL:", introductionReel);
    // 必要に応じてユーザーにエラーメッセージを表示
  }
};

function SetListPage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // 初回チェック
    checkScreenSize();

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", checkScreenSize);

    // クリーンアップ
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-28 left-12 text-3xl text-kobe-dark-teal animate-bounce delay-100">
            <BsMusicNote />
          </div>
          <div className="absolute top-32 right-20 text-2xl text-kobe-orange animate-bounce delay-300">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-32 left-24 text-4xl text-kobe-dark-teal animate-bounce delay-500">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-20 right-16 text-3xl text-kobe-orange animate-bounce delay-700">
            <BsMusicNote />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-kobe-orange rounded-full p-4">
                <FaMusic className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
              タイムテーブル
            </h1>
            <p className="text-xl md:text-2xl font-bold text-kobe-orange mb-4">
              2025年8月22日（金）開催予定
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg font-bold text-kobe-dark-teal">
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>10:00開演 - 19:00終演</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パフォーマンス内容説明 */}
      <section className="py-16 bg-kobe-light-blue">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4 flex justify-center">
                <FaMusic className="text-kobe-orange" />
              </div>
              <h2 className="text-2xl font-black text-kobe-dark-teal mb-4">
                多彩なジャンルのコピーバンドライブ
              </h2>
              <p className="text-lg font-bold text-kobe-dark-teal leading-relaxed mb-6">
                各団体によるアーティストのコピー曲披露
                <br />
                多くの人が知っているようなアーティストから、ニッチな音楽に至るまで
                <br />
                ジャンルを問わず多様な演奏をお楽しみいただけます
              </p>
              <YouTubeLiveLink size="small" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Schedule */}
      <section className="py-16 bg-white relative">
        {/* Wave Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-kobe-light-blue">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-kobe-orange text-white px-8 py-4 rounded-full border-4 border-kobe-dark-teal mb-6">
              <h2 className="text-3xl md:text-4xl font-black">
                演奏スケジュール
              </h2>
            </div>
            <p className="text-lg font-bold text-kobe-dark-teal">
              各バンド30分のパフォーマンス（転換時間込み）
            </p>
            <p className="text-sm text-kobe-dark-teal mt-2">
              <span className="hidden lg:flex items-center justify-center gap-1">
                アーティスト名をクリックすると紹介動画をご覧いただけます
              </span>
              <span className="flex items-center justify-center gap-1 lg:hidden">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-2 rounded-full">
                  <FaInstagram className="text-sm" />
                </span>
                をタップして紹介動画を視聴
              </span>
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="space-y-4 mb-12">
            {performanceSchedule.map((item, index) => {
              const hasIntroductionReel = !!item.introductionReel;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border-4 border-kobe-dark-teal shadow-lg transition-all duration-300 p-6 ${
                    hasIntroductionReel
                      ? "cursor-pointer hover:shadow-xl transform hover:-translate-y-1 lg:hover:bg-blue-50"
                      : ""
                  }`}
                  onClick={() => {
                    // PC画面サイズでクリックした場合のみリールを開く
                    if (hasIntroductionReel && isLargeScreen) {
                      openIntroductionReel(item.introductionReel!);
                    }
                  }}
                >
                  <div className="grid lg:grid-cols-3 gap-4 items-center">
                    <div className="text-center lg:text-left">
                      <div className="bg-kobe-orange text-white px-4 py-2 rounded-full inline-block">
                        <span className="font-black text-lg flex items-center gap-2">
                          <FaClock />
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-xl lg:text-2xl font-black text-kobe-dark-teal">
                          {item.artist}
                        </h3>
                        {/* モバイル画面でのインスタグラムアイコン */}
                        {hasIntroductionReel && (
                          <button
                            className="lg:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-2 rounded-full hover:scale-110 transition-transform duration-200"
                            onClick={(e) => {
                              e.stopPropagation();
                              openIntroductionReel(item.introductionReel!);
                            }}
                            aria-label={`${item.artist}の紹介動画を見る`}
                          >
                            <FaInstagram className="text-sm" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="bg-kobe-dark-teal text-white px-4 py-2 rounded-full inline-block">
                        <span className="font-bold text-sm">{item.band}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Events */}
          <div className="space-y-6">
            {/* 主催挨拶 */}
            <div
              className="rounded-2xl border-4 border-white shadow-xl p-6 text-white"
              style={{
                background: "linear-gradient(to right, #2C5F5D, #FF6B47)",
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <FaMusic className="text-3xl" />
                  <h3 className="text-2xl font-black">19:00〜 主催挨拶</h3>
                </div>
                <p className="text-lg font-bold">
                  神戸音学祭実行委員会からのご挨拶
                </p>
              </div>
            </div>

            {/* 花火 */}
            <div
              className="rounded-2xl border-4 border-kobe-dark-teal shadow-xl p-6 text-white"
              style={{
                background: "linear-gradient(to right, #FF6B47, #94cef5)",
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <FaStar className="text-3xl" />
                  <h3 className="text-2xl font-black">19:30〜 花火打ち上げ</h3>
                </div>
                <p className="text-lg font-bold">
                  メリケンパークにて花火の打ち上げがあります
                </p>
                <p className="text-sm mt-2">
                  ※花火は神戸音学祭とは別のイベントです
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-kobe-light-blue/20 rounded-2xl border-4 border-kobe-dark-teal p-6">
            <div className="text-center">
              <h3 className="text-xl font-black text-kobe-dark-teal mb-4">
                ご来場の皆様へ
              </h3>
              <div className="space-y-2 text-kobe-dark-teal font-bold">
                <p>
                  • 演奏順序・時間は当日の状況により変更される場合があります
                </p>
                <p>• 入退場は自由です。お好きな時間にお楽しみください</p>
                <p>
                  • 雨天決行予定ですが、悪天候の場合は中止となる可能性があります
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SetListPage;
