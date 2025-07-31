"use client";
import React from "react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaHandshake,
  FaTicketAlt,
  FaInstagram,
  FaBars,
  FaEnvelope,
  FaMicrophone,
  FaStar
} from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { SiX } from "react-icons/si";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("top");

  // 出演バンド情報
  const bands = [
    {
      name: "関西学院大学文化総部軽音楽部",
      image: "/images/artists/kwansei-gakuin.png", // TODO: 写真追加予定
    },
    {
      name: "神戸市外国語大学学部軽音学部",
      image: "/images/artists/kobe-city-univ-foreign-studies.png", // TODO: 写真追加予定
    },
    {
      name: "神戸親和大学軽音学部",
      image: "/images/artists/kobe-shinwa.png", // TODO: 写真追加予定
    },
    {
      name: "神戸大学軽音楽部ROCK",
      image: "/images/artists/kobe-univ-rock.png", // TODO: 写真追加予定
    },
    {
      name: "神戸大学軽音サークルFreeBeat",
      image: "/images/artists/kobe-univ-freebeat.png", // TODO: 写真追加予定
    },
    {
      name: "神戸大学軽音サークルMMC",
      image: "/images/artists/kobe-univ-mmc.png", // TODO: 写真追加予定
    },
    {
      name: "神戸大学軽音サークルSoundS",
      image: "/images/artists/kobe-univ-sounds.png", // TODO: 写真追加予定
    },
    {
      name: "同志社大学Lilac Rainbow",
      image: "/images/artists/doshisha-lilac-rainbow.png", // TODO: 写真追加予定
    },
    {
      name: "立命館大学Hansel&Gretel",
      image: "/images/artists/ritsumeikan-hansel-gretel.png", // TODO: 写真追加予定
    },
    {
      name: "立命館大学Jack&Beans",
      image: "/images/artists/ritsumeikan-jack-beans.png", // TODO: 写真追加予定
    },
  ];

  // TODO: 協賛企業・団体情報を後で追加
  /*
  const sponsors = [
    {
      name: "Kobe City",
      logo: "/images/sponsors/kobe-city.svg",
    },
    {
      name: "Music Store",
      logo: "/images/sponsors/music-store.svg",
    },
    {
      name: "Youth Center",
      logo: "/images/sponsors/youth-center.svg",
    },
    {
      name: "Local Radio",
      logo: "/images/sponsors/local-radio.svg",
    },
    {
      name: "Student Union",
      logo: "/images/sponsors/student-union.svg",
    },
    {
      name: "Kobe University",
      logo: "/images/sponsors/kobe-univ.svg",
    },
  ];
  */

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#77C1F0] font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-4 border-[#2C5F5D]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "top", label: "TOP" },
                { id: "artist", label: "出演バンド" },
                { id: "sponsor", label: "SPONSOR" },
                { id: "ticket", label: "入場について" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg bg-[#FF6B47] border-2 border-[#2C5F5D]">
              <FaBars className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Visual Section */}
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
          {/* Musical Notes */}
          <div className="absolute top-24 left-16 text-4xl text-[#2C5F5D] animate-bounce delay-100">
            <BsMusicNote />
          </div>
          <div className="absolute top-32 right-20 text-3xl text-[#FF6B47] animate-bounce delay-300">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-32 left-24 text-5xl text-[#2C5F5D] animate-bounce delay-500">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-40 right-32 text-4xl text-[#FF6B47] animate-bounce delay-700">
            <BsMusicNote />
          </div>

          {/* Circular Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-[#FF6B47]/20 rounded-full border-4 border-[#2C5F5D] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/30 rounded-full border-4 border-[#2C5F5D] animate-pulse delay-200"></div>
          <div className="absolute top-40 right-16 w-16 h-16 bg-[#FF6B47]/30 rounded-full border-3 border-[#2C5F5D] animate-pulse delay-400"></div>
        </div>

        <div className="relative text-center px-4 max-w-5xl mx-auto z-10">
          {/* Main Logo Display */}
          <div className="mb-8">
            <Image
              src="/images/logo_transparent.png"
              alt="Kobe Ongakusai Main Logo"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 mx-auto"
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
              関西圏6大学10団体が出演<br />
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

          <button
            onClick={() => scrollToSection("ticket")}
            className="bg-[#2C5F5D] text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-[#FF6B47] hover:bg-[#FF6B47] hover:border-[#2C5F5D] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            入場について詳しく見る
          </button>
        </div>

        {/* Wave Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(255,255,255,0.2)"
            />
          </svg>
        </div>
      </section>

      {/* Artist Section */}
      <section id="artist" className="py-20 bg-white relative">
        {/* Wave Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#77c1f2]">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF6B47] text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">
                出演バンド
              </h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D] mb-8">
              関西圏6大学10団体によるコピーバンドライブ
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
                各団体によるアーティストのコピー曲披露<br />
                多くの人が知っているようなアーティストから、ニッチな音楽に至るまで<br />
                ジャンルを問わず多様な演奏をお楽しみいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section id="sponsor" className="py-20 bg-[#77c1f2] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-[#2C5F5D] px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">
                協賛企業・団体
              </h2>
            </div>
            <p className="text-xl font-bold text-white">
              Coming Soon...
            </p>
          </div>

          {/* TODO: 協賛企業・団体一覧を後で追加 */}
          <div className="text-center">
            <div className="bg-white rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-12">
              <div className="text-8xl mb-6 flex justify-center">
                <FaHandshake className="text-[#2C5F5D]" />
              </div>
              <p className="text-2xl font-black text-[#2C5F5D] mb-4">
                協賛企業・団体様を募集中！
              </p>
              <p className="text-lg font-bold text-[#777777]">
                ご支援いただける企業・団体様を心よりお待ちしております
              </p>
            </div>
          </div>

          {/*
          将来的に協賛企業・団体一覧を表示する際のUI:
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-3 border-[#2C5F5D] hover:bg-[#FF6B47] hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={80}
                  className="max-w-full h-auto group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* About Section - 神戸音学祭について */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF6B47] text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">
                神戸音学祭について
              </h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D]">
              学生の、学生による、学生のための野外音楽フェス
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* コンセプト */}
            <div className="bg-[#77c1f2] rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <FaMusic className="text-4xl text-[#FF6B47]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">コンセプト</h3>
              </div>
              <div className="text-white font-bold space-y-4">
                <div className="bg-white/15 rounded-2xl p-4">
                  <p className="text-lg leading-relaxed">
                    「学生音楽から神戸市を盛り上げる、学生の、学生による、学生のための野外音楽フェス」をスローガンに掲げています。
                  </p>
                </div>
                <div className="bg-white/15 rounded-2xl p-4">
                  <p className="leading-relaxed">
                    学生が作り出すエネルギッシュなパワーを音楽を通して表現することで、神戸への刺激として盛り上げに寄与することを目指しています。
                  </p>
                  <p className="text-sm mt-2 text-center opacity-80">
                    ※神戸アリーナプロジェクトの一環
                  </p>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="bg-[#2C5F5D] rounded-3xl border-4 border-[#77c1f2] shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <FaHandshake className="text-4xl text-[#2C5F5D]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">イベントの特徴</h3>
              </div>
              <div className="text-white font-bold space-y-4">
                <div className="bg-[#FF6B47] rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMusic className="text-white" />
                    学生主体の運営
                  </p>
                  <p className="text-sm">企画・運営、音響PA、スタッフ業務全てを学生で実施</p>
                </div>
                <div className="bg-[#77c1f2] rounded-2xl p-4 text-[#2C5F5D]">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMicrophone className="text-[#2C5F5D]" />
                    多様な音楽ジャンル
                  </p>
                  <p className="text-sm">メジャーからニッチまで幅広いアーティストのコピー演奏</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaStar className="text-white" />
                    野外フェスの魅力
                  </p>
                  <p className="text-sm">学生が全業務を手がける屋外音楽フェスは当イベントの強み</p>
                </div>
              </div>
            </div>
          </div>

          {/* ストーリー */}
          <div className="bg-gradient-to-r from-[#77c1f2] to-[#2C5F5D] rounded-3xl border-4 border-[#FF6B47] shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black mb-4">プロジェクトストーリー</h3>
              <p className="text-lg font-bold">神戸をもっと元気にしたいという想いから始まった挑戦</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  神戸音学祭は、神戸大学の学生である澤田陽介（経営学部3年）と栄陽向太（理学部3年）により企画・立ち上げられた学生主導の音楽フェスティバルです。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  本イベントは、「神戸をもっと元気にしたい」という想いを掲げるOne Bright Kobe代表・渋谷氏の講義に、澤田が受講生として参加したことをきっかけに始動しました。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  講義後、澤田が渋谷氏に直接アポイントを取り、自身の「学生の手で大規模な音楽フェスを実現したい」という構想をプレゼンテーション。その熱意にご賛同いただき、本プロジェクトがスタートしました。
                </p>
              </div>

              <div className="bg-[#FF6B47] rounded-2xl p-6">
                <p className="font-black text-center leading-relaxed">
                  初年度である今回は試行的な位置付けですが、ここを出発点とし、今後はより多くの関係者や地域を巻き込みながら、神戸を代表するイベントへと発展させていくことを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section - イベント詳細 */}
      <section className="py-20 bg-[#77c1f2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-[#2C5F5D] px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">
                開催概要
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-3xl border-6 border-[#2C5F5D] shadow-2xl p-8 md:p-12" style={{ borderWidth: "6px" }}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 基本情報 */}
              <div className="space-y-6">
                <div className="bg-[#FF6B47] text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                    <FaCalendarAlt />
                    日時
                  </h3>
                  <p className="text-lg font-bold">
                    2025年8月22日（金）<br />
                    10:00〜19:00
                  </p>
                  <p className="text-sm mt-2 bg-white/20 rounded-lg p-2">
                    ※イベント後にはメリケンパークでの花火打ち上げあり
                  </p>
                </div>

                <div className="bg-[#2C5F5D] text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                    <FaMapMarkerAlt />
                    会場
                  </h3>
                  <p className="text-lg font-bold">
                    TOTTEI PARK<br />
                    （神戸市中央区新港町2-1）
                  </p>
                </div>

                <div className="bg-[#77c1f2] text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                    <FaTicketAlt />
                    料金
                  </h3>
                  <p className="text-2xl font-black text-[#FF6B47] mb-2">
                    無料
                  </p>
                  <p className="text-lg font-bold">
                    入退場自由
                  </p>
                </div>
              </div>

              {/* その他情報 */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#FF6B47] to-[#2C5F5D] text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                    <FaMusic />
                    内容
                  </h3>
                  <p className="font-bold leading-relaxed">
                    コピーバンドライブ<br />
                    各団体によるアーティストのコピー曲披露
                  </p>
                </div>

                <div className="bg-white border-4 border-[#2C5F5D] p-6 rounded-2xl">
                  <h3 className="text-xl font-black mb-4 text-[#2C5F5D]">
                    お問い合わせ
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaInstagram className="text-purple-500 text-xl" />
                      <a href="https://www.instagram.com/kobe_ongakusai" target="_blank" rel="noopener noreferrer" className="text-[#2C5F5D] font-bold hover:underline">
                        @kobe_ongakusai
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <SiX className="text-black text-xl" />
                      <a href="https://twitter.com/K0beOngakusai" target="_blank" rel="noopener noreferrer" className="text-[#2C5F5D] font-bold hover:underline">
                        @K0beOngakusai
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[#FF6B47] text-xl" />
                      <a href="mailto:ongakusai.kobe@gmail.com" className="text-[#2C5F5D] font-bold hover:underline">
                        ongakusai.kobe@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">SNS</h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D]">
              最新情報をチェック！ #kobeongakusai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instagram */}
            <div className="bg-[#77c1f2] rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8 text-center">
              <div className="text-8xl mb-6 flex justify-center">
                <FaInstagram className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Instagram</h3>
              <p className="text-lg font-bold text-white mb-8">
                投稿・ストーリーで最新情報をお届け
              </p>
              <a
                href="https://www.instagram.com/kobe_ongakusai?igsh=Nmtsa2JhZGpkb3Rv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full border-4 border-[#2C5F5D] hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-black text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaInstagram />
                <span>@kobe_ongakusai</span>
              </a>
            </div>

            {/* Twitter(X) */}
            <div className="bg-[#77c1f2] rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8 text-center">
              <div className="text-8xl mb-6 flex justify-center">
                <SiX className="text-black" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">X（旧Twitter）</h3>
              <p className="text-lg font-bold text-white mb-8">
                リアルタイムで情報発信・交流
              </p>
              <a
                href="https://twitter.com/K0beOngakusai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full border-4 border-[#2C5F5D] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-black text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <SiX />
                <span>@K0beOngakusai</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section id="ticket" className="py-20 bg-[#FF6B47] relative">
        {/* Decorative musical notes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-16 text-6xl text-white/20 animate-bounce">
            <BsMusicNote />
          </div>
          <div className="absolute top-32 right-20 text-5xl text-[#2C5F5D]/20 animate-bounce delay-200">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-20 left-24 text-7xl text-white/20 animate-bounce delay-400">
            <BsMusicNote />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-block bg-white text-[#FF6B47] px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-8">
            <h2 className="text-4xl md:text-5xl font-black">入場について</h2>
          </div>

          <div
            className="bg-white rounded-3xl p-8 md:p-12 border-6 border-[#2C5F5D] shadow-2xl"
            style={{ borderWidth: "6px" }}
          >
            <div className="text-center">
              <div className="text-8xl mb-6 flex justify-center">
                <FaTicketAlt className="text-[#FF6B47]" />
              </div>
              <div className="bg-gradient-to-r from-[#FF6B47] to-[#2C5F5D] text-white px-8 py-6 rounded-3xl mb-6">
                <p className="text-4xl font-black mb-2">入場無料</p>
                <p className="text-xl font-bold">入退場自由</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#77c1f2] text-white px-6 py-4 rounded-2xl">
                  <p className="text-lg font-black">予約不要</p>
                  <p className="font-bold">当日直接会場へお越しください</p>
                </div>
                <div className="bg-[#2C5F5D] text-white px-6 py-4 rounded-2xl">
                  <p className="text-lg font-black">開催時間</p>
                  <p className="font-bold">10:00〜19:00</p>
                </div>
                <div className="bg-gray-100 text-[#2C5F5D] px-6 py-4 rounded-2xl">
                  <p className="text-sm font-bold">
                    ※天候等により開催内容が変更となる場合があります<br />
                    最新情報は公式SNSでお知らせいたします
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C5F5D] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logo_transparent.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <h3 className="text-2xl font-black text-[#77c1f2]">
                  神戸音学祭
                </h3>
              </div>
              <p className="text-gray-300 font-bold">
                学生が作る、学生のための音楽フェスティバル
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
                お問い合わせ
              </h4>
              <p className="text-gray-300 mb-2 font-bold flex items-center gap-2">
                <FaInstagram />
                <a href="https://www.instagram.com/kobe_ongakusai" target="_blank" rel="noopener noreferrer" className="hover:underline">@kobe_ongakusai</a>
              </p>
              <p className="text-gray-300 mb-2 font-bold flex items-center gap-2">
                <SiX />
                <a href="https://twitter.com/K0beOngakusai" target="_blank" rel="noopener noreferrer" className="hover:underline">@K0beOngakusai</a>
              </p>
              <p className="text-gray-300 font-bold flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:ongakusai.kobe@gmail.com" className="hover:underline">ongakusai.kobe@gmail.com</a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
                アクセス
              </h4>
              <p className="text-gray-300 font-bold">
                TOTTEI PARK<br />
                神戸市中央区新港町2-1<br />
                <br />
                JR・阪神元町駅から徒歩15分<br />
                神戸市営地下鉄海岸線<br />
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
    </div>
  );
}

export default MainComponent;
