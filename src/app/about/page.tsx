"use client";
import React from "react";
import {
  FaMusic,
  FaHandshake,
  FaMicrophone,
  FaStar,
} from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#94cef5] font-sans">
      {/* Navigation Bar */}
      <Header showScrollNavigation={false} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-28 left-12 text-3xl text-[#2C5F5D] animate-bounce delay-100">
            <BsMusicNote />
          </div>
          <div className="absolute top-32 right-20 text-2xl text-[#FF6B47] animate-bounce delay-300">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-32 left-24 text-4xl text-[#2C5F5D] animate-bounce delay-500">
            <BsMusicNote />
          </div>
          <div className="absolute bottom-20 right-16 text-3xl text-[#FF6B47] animate-bounce delay-700">
            <BsMusicNote />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-[#2C5F5D] shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-[#2C5F5D] rounded-full p-4">
                <FaMusic className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2C5F5D] mb-6">
              神戸音学祭について
            </h1>
            <p className="text-xl md:text-2xl font-bold text-[#FF6B47]">
              学生の、学生による、学生のための野外音楽フェス
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        {/* Wave Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#94cef5]">
          <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* コンセプト */}
            <div className="bg-white rounded-3xl border-4 border-[#2C5F5D] shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-[#94cef5] rounded-full p-4 inline-block mb-4">
                  <FaMusic className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#2C5F5D] mb-4">
                  コンセプト
                </h3>
              </div>
              <div className="text-[#2C5F5D] font-bold space-y-4">
                <div className="bg-[#94cef5]/15 rounded-2xl p-4">
                  <p className="text-lg leading-relaxed">
                    「学生音楽から神戸市を盛り上げる、学生の、学生による、学生のための野外音楽フェス」をスローガンに掲げています。
                  </p>
                </div>
                <div className="bg-[#94cef5]/15 rounded-2xl p-4">
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
            <div className="bg-[#2C5F5D] rounded-3xl border-4 border-white shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <FaHandshake className="text-4xl text-[#2C5F5D]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  イベントの特徴
                </h3>
              </div>
              <div className="text-white font-bold space-y-4">
                <div className="bg-[#FF6B47] rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMusic className="text-white" />
                    学生主体の運営
                  </p>
                  <p className="text-sm">
                    企画・運営、音響PA、スタッフ業務全てを学生で実施
                  </p>
                </div>
                <div className="bg-[#94cef5] rounded-2xl p-4 text-[#2C5F5D]">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMicrophone className="text-[#2C5F5D]" />
                    多様な音楽ジャンル
                  </p>
                  <p className="text-sm">
                    メジャーからニッチまで幅広いアーティストのコピー演奏
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaStar className="text-white" />
                    野外フェスの魅力
                  </p>
                  <p className="text-sm">
                    学生が全業務を手がける屋外音楽フェスは当イベントの強み
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ストーリー */}
          <div className="bg-gradient-to-r from-[#2C5F5D] to-[#FF6B47] rounded-3xl border-4 border-white shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black mb-4">
                プロジェクトストーリー
              </h3>
              <p className="text-lg font-bold">
                神戸をもっと元気にしたいという想いから始まった挑戦
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  神戸音学祭は、神戸大学の学生である澤田陽介（経営学部3年）と栄陽向太（理学部3年）により企画・立ち上げられた学生主導の音楽フェスティバルです。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  本イベントは、「神戸をもっと元気にしたい」という想いを掲げるOne
                  Bright
                  Kobe代表・渋谷氏の講義に、澤田が受講生として参加したことをきっかけに始動しました。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  講義後、澤田が渋谷氏に直接アポイントを取り、自身の「学生の手で大規模な音楽フェスを実現したい」という構想をプレゼンテーション。その熱意にご賛同いただき、本プロジェクトがスタートしました。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-[#2C5F5D]">
                <p className="font-black text-center leading-relaxed">
                  初年度である今回は試行的な位置付けですが、ここを出発点とし、今後はより多くの関係者や地域を巻き込みながら、神戸を代表するイベントへと発展させていくことを目指しています。
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

export default AboutPage;
