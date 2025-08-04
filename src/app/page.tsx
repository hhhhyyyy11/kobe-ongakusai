"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaHandshake,
  FaTicketAlt,
} from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { SNSSection } from "@/components/SNSSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { bands } from "@/constants/bands";
import { sponsors } from "@/constants/sponsors";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("top");
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);

    // スクロール時のアクティブセクション自動検出
    const handleScroll = () => {
      const sections = ["top", "ticket", "artist"];
      const scrollPosition = window.scrollY + 150; // ヘッダーの高さを考慮

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // モバイルメニュー外部クリック時の閉じる処理
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("nav")) {
        // モバイルメニューの処理は CommonHeader で管理
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    // 初期状態でアクティブセクションを設定
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#94cef5] font-sans">
      {/* Navigation Bar */}
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        showScrollNavigation={true}
      />

      {/* Main Visual Section */}
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
        style={{
          backgroundImage: `url('/images/logo_sub.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Musical Notes - Scattered around for festive feel */}
          <div className="absolute top-28 left-12 md:top-30 md:left-16 text-3xl md:text-4xl text-[#2C5F5D] animate-bounce delay-100">
            <BsMusicNote />
          </div>
          <div className="absolute top-32 right-20 md:top-40 md:right-24 text-2xl md:text-3xl text-[#FF6B47] animate-bounce delay-300">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-32 left-24 md:bottom-40 md:left-32 text-4xl md:text-5xl text-[#2C5F5D] animate-bounce delay-500">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-20 right-16 md:bottom-24 md:right-20 text-3xl md:text-4xl text-[#FF6B47] animate-bounce delay-700">
            <BsMusicNote />
          </div>
          <div className="absolute top-1/2 left-8 md:left-12 text-2xl md:text-3xl text-[#FF6B47]/70 animate-bounce delay-900">
            <BsMusicNote />
          </div>
          <div className="absolute top-1/3 right-8 md:right-12 text-2xl md:text-3xl text-[#2C5F5D]/70 animate-bounce delay-1100">
            <BsMusicNote />
          </div>
        </div>

        <div className="relative text-center px-4 max-w-5xl mx-auto z-10 pb-8">
          {/* Main Logo Display */}
          <div className="mb-8">
            <Image
              src="/images/logo_transparent.png"
              alt="Kobe Ongakusai Main Logo"
              width={256}
              height={256}
              className="w-72 h-72 md:w-80 md:h-80 mx-auto"
            />
          </div>

          <div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-[#2C5F5D] shadow-2xl mb-8"
            style={{ borderWidth: "6px" }}
          >
            <p className="text-xl md:text-2xl font-black mb-4 text-[#FF6B47]">
              学生音楽 × 神戸
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 text-[#2C5F5D]">
              関西圏6大学10団体が出演
              <br />
              計17大学のメンバーから構成される実行委員会主催の学生音楽フェス！
            </p>
            <div className="text-xl md:text-2xl font-bold text-[#2C5F5D] space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <FaCalendarAlt className="text-3xl" />
                <span>2025年8月22日（金）10:00〜19:00</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaMapMarkerAlt className="text-3xl" />
                <div className="text-center">
                  <div>TOTTEI PARK</div>
                  <div className="text-lg">（神戸市中央区）</div>
                </div>
              </div>
              <div className="bg-[#FF6B47] text-white px-6 py-3 rounded-full text-lg font-black mt-4">
                入場無料・入退場自由
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("artist")}
              className="bg-[#2C5F5D] text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-[#FF6B47] hover:bg-[#FF6B47] hover:border-[#2C5F5D] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              出演団体を見る
            </button>
            <Link
              href="/set-list"
              className="bg-[#FF6B47] text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-[#2C5F5D] hover:bg-[#2C5F5D] hover:border-[#FF6B47] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              タイムテーブルを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section id="ticket" className="py-20 bg-[#FF6B47] relative">
        {/* Wave Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#94cef5]">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
              fill="#FF6B47"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-[#FF6B47] px-8 py-4 rounded-full border-4 border-[#2C5F5D] my-6">
              <h2 className="text-4xl md:text-5xl font-black">
                開催概要・入場について
              </h2>
            </div>
          </div>

          <div
            className="bg-white rounded-3xl border-6 border-[#2C5F5D] shadow-2xl p-8 md:p-12"
            style={{ borderWidth: "6px" }}
          >
            {/* 基本情報を中央配置 */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* 日時情報 */}
                <div className="bg-[#FF6B47] text-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <FaCalendarAlt className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-black mb-4">日時</h3>
                    <p className="text-lg font-bold mb-2">
                      2025年8月22日（金）
                    </p>
                    <p className="text-base font-bold">10:00〜19:00</p>
                    <div className="mt-4 bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-bold">
                        ※イベント後には
                        <br />
                        メリケンパークでの
                        <br />
                        花火打ち上げあり
                      </p>
                    </div>
                  </div>
                </div>

                {/* 会場情報 */}
                <div className="bg-[#2C5F5D] text-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-black mb-4">会場</h3>
                    <p className="text-lg font-bold mb-2">TOTTEI PARK</p>
                    <p className="text-base font-bold text-gray-300">
                      神戸市中央区新港町2-1
                    </p>
                    <div className="mt-4 bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-bold">
                        JR・阪神元町駅
                        <br />
                        徒歩15分
                        <br />
                        地下鉄みなと元町駅
                        <br />
                        徒歩8分
                      </p>
                    </div>
                  </div>
                </div>

                {/* 入場情報 */}
                <div className="bg-white border-4 border-[#94cef5] text-[#2C5F5D] p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <FaTicketAlt className="text-4xl mb-4 mx-auto text-[#2C5F5D]" />
                    <h3 className="text-xl font-black mb-4">入場について</h3>
                    <p className="text-lg font-black mb-2">
                      入退場自由・予約不要
                    </p>
                    <p className="text-3xl font-black text-[#FF6B47] mb-2">
                      無料
                    </p>
                    <div className="mt-4 bg-[#94cef5]/10 rounded-lg p-3">
                      <p className="text-sm font-bold">
                        気軽にお立ち寄りください
                        <br />
                        途中参加・途中退場OK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section id="artist" className="py-20 bg-white relative">
        {/* Wave Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#FF6B47]">
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

        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF6B47] text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">出演団体</h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D] mb-8">
              関西圏6大学10団体から出演
            </p>
          </div>

          {/* 出演団体一覧 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bands.map((band, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-4 border-[#2C5F5D] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className="text-center">
                  {/* 団体写真 */}
                  <div className="mb-4 h-48 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
                    {band.image ? (
                      <Image
                        src={band.image}
                        alt={band.name}
                        width={200}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-4xl mb-2 text-gray-400">
                          <FaMusic />
                        </div>
                        <p className="text-sm font-bold text-gray-500">
                          Coming Soon
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-[#2C5F5D] leading-tight">
                    {band.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* パフォーマンス内容説明 */}
          <div className="bg-white rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 flex justify-center">
                <FaMusic className="text-[#FF6B47]" />
              </div>
              <h3 className="text-2xl font-black text-[#2C5F5D] mb-4">
                多彩なジャンルのコピーバンドライブ
              </h3>
              <p className="text-lg font-bold text-[#777777] leading-relaxed">
                各団体によるアーティストのコピー曲披露
                <br />
                多くの人が知っているようなアーティストから、ニッチな音楽に至るまで
                <br />
                ジャンルを問わず多様な演奏をお楽しみいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <SNSSection isClient={isClient} />

      {/* Sponsor Section */}
      <section id="sponsor" className="py-20 bg-[#94cef5] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-block bg-white text-[#2C5F5D] px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">
                協賛企業・団体
              </h2>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-3xl border-4 border-[#2C5F5D] shadow-xl md:p-12 p-4">
              <div className="text-8xl mb-6 flex justify-center">
                <FaHandshake className="text-[#2C5F5D]" />
              </div>
              <p className="md:text-2xl text-xl font-black text-[#2C5F5D] mb-2">
                ご支援いただける企業様・団体様はこちらのメールアドレスまでご連絡ください！
              </p>
              <p className="md:text-2xl text-lg font-bold text-[#777777] mb-6">
                ongakusai.kobe@gmail.com
              </p>
              <p className="md:text-lg text-base font-bold text-[#2C5F5D] mb-10">
                ※ロゴをクリックすると各企業・団体のホームページに移動します
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                {sponsors.map((sponsor, index) => (
                  <Link
                    key={index}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-2 border-3 border-[#2C5F5D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center group max-w-40 w-full h-32"
                    title={`${sponsor.name}のホームページを開く`}
                    aria-label={`${sponsor.name}のホームページ（新しいタブで開きます）`}
                  >
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      width={150}
                      height={80}
                      className="max-w-full h-auto object-contain"
                    />
                  </Link>
                ))}
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

export default MainComponent;
