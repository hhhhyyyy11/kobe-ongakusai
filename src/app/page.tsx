"use client";
import React from "react";
import Image from "next/image";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("top");

  const artists = [
    {
      name: "DJ Sakura",
      image: "/images/artists/dj-sakura.jpg",
      genre: "Electronic Pop",
    },
    {
      name: "Kobe Collective",
      image: "/images/artists/kobe-collective.jpg",
      genre: "Indie Rock",
    },
    {
      name: "Yuki Tanaka",
      image: "/images/artists/yuki-tanaka.jpg",
      genre: "Alternative",
    },
    {
      name: "Osaka Waves",
      image: "/images/artists/osaka-waves.jpg",
      genre: "J-Pop",
    },
  ];

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
                src="/images/logo_sub.png"
                alt="Kobe Ongakusai Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-[#2C5F5D]"
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
                { id: "artist", label: "ARTIST" },
                { id: "sponsor", label: "SPONSOR" },
                { id: "ticket", label: "TICKET" },
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
              <div className="w-6 h-1 bg-white mb-1 rounded"></div>
              <div className="w-6 h-1 bg-white mb-1 rounded"></div>
              <div className="w-6 h-1 bg-white rounded"></div>
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
            ♪
          </div>
          <div className="absolute top-32 right-20 text-3xl text-[#FF6B47] animate-bounce delay-300">
            ♫
          </div>
          <div className="absolute bottom-32 left-24 text-5xl text-[#2C5F5D] animate-bounce delay-500">
            ♪
          </div>
          <div className="absolute bottom-40 right-32 text-4xl text-[#FF6B47] animate-bounce delay-700">
            ♫
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
              src="/images/logo_main.jpg"
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
            <p className="text-2xl md:text-3xl font-black mb-6 text-[#2C5F5D]">
              学生主催の音楽フェスティバル
            </p>
            <div className="text-xl md:text-2xl font-bold text-[#2C5F5D] space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl">📅</span>
                <span>2025年8月15日 - 16日</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl">📍</span>
                <span>神戸ポートアイランド特設会場</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("ticket")}
            className="bg-[#FF6B47] hover:bg-[#FF4524] text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-[#2C5F5D] transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            チケットを予約する
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
                出演アーティスト
              </h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D]">
              若手から実力派まで、多彩なアーティストが集結
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border-4 border-[#2C5F5D] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#77c1f2]">
                  <h3 className="text-xl font-black mb-2 text-white">
                    {artist.name}
                  </h3>
                  <p className="text-[#2C5F5D] font-bold bg-white px-3 py-1 rounded-full inline-block">
                    {artist.genre}
                  </p>
                </div>
              </div>
            ))}
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
              多くの皆様にご支援いただいています
            </p>
          </div>

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
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-6">
              <h2 className="text-4xl md:text-5xl font-black">Instagram</h2>
            </div>
            <p className="text-xl font-bold text-[#2C5F5D]">
              最新情報をチェック！ #kobeongakusai
            </p>
          </div>

          <div className="bg-[#77c1f2] rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8 text-center">
            <div className="text-8xl mb-6">📷</div>
            <p className="text-xl font-bold text-white mb-8">
              公式Instagramフィードがここに表示されます
            </p>
            <a
              href="https://instagram.com/kobeongakusai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full border-4 border-[#2C5F5D] hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-black text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>@kobeongakusai をフォロー</span>
            </a>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section id="ticket" className="py-20 bg-[#FF6B47] relative">
        {/* Decorative musical notes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-16 text-6xl text-white/20 animate-bounce">
            ♪
          </div>
          <div className="absolute top-32 right-20 text-5xl text-[#2C5F5D]/20 animate-bounce delay-200">
            ♫
          </div>
          <div className="absolute bottom-20 left-24 text-7xl text-white/20 animate-bounce delay-400">
            ♪
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-block bg-white text-[#FF6B47] px-8 py-4 rounded-full border-4 border-[#2C5F5D] mb-8">
            <h2 className="text-4xl md:text-5xl font-black">チケット予約</h2>
          </div>
          <p className="text-2xl mb-12 text-white font-bold">
            早期予約で特別価格！お見逃しなく
          </p>

          <div
            className="bg-white rounded-3xl p-8 md:p-12 border-6 border-[#2C5F5D] shadow-2xl"
            style={{ borderWidth: "6px" }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#77c1f2] p-6 rounded-2xl border-3 border-[#2C5F5D]">
                <h3 className="text-2xl font-black mb-4 text-white">1日券</h3>
                <div className="text-4xl font-black text-[#FF6B47] mb-2">
                  ¥3,500
                </div>
                <p className="text-[#2C5F5D] font-bold">学生割引適用価格</p>
              </div>
              <div className="bg-[#77c1f2] p-6 rounded-2xl border-3 border-[#2C5F5D]">
                <h3 className="text-2xl font-black mb-4 text-white">
                  2日通し券
                </h3>
                <div className="text-4xl font-black text-[#FF6B47] mb-2">
                  ¥6,000
                </div>
                <p className="text-[#2C5F5D] font-bold">1,000円お得！</p>
              </div>
            </div>
            <button className="w-full bg-[#FF6B47] hover:bg-[#FF4524] text-white text-2xl font-black py-6 px-8 rounded-full border-4 border-[#2C5F5D] transition-all duration-300 transform hover:scale-105 shadow-xl">
              チケットを予約する
            </button>
            <p className="text-sm text-[#2C5F5D] mt-4 font-bold">
              ※ Googleフォームに移動します
            </p>
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
                  src="/images/logo_sub.png"
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
              <p className="text-gray-300 mb-2 font-bold">
                📧 info@kobeongakusai.com
              </p>
              <p className="text-gray-300 font-bold">📱 @kobeongakusai</p>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-[#FF6B47]">
                アクセス
              </h4>
              <p className="text-gray-300 font-bold">
                神戸ポートアイランド特設会場
                <br />
                ポートライナー「中公園駅」徒歩3分
              </p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p className="font-bold">
              &copy; 2025 Kobe Ongakusai 実行委員会. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
