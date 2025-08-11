"use client";
import React from "react";
import Image from "next/image";
import { FaUsers, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMusicNote } from "react-icons/bs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { bands } from "@/constants/bands";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-kobe-light-blue">
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
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-kobe-orange rounded-full p-4">
                  <FaUsers className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
                出演団体
              </h1>
              <p className="text-xl md:text-2xl font-bold text-kobe-orange mb-4">
                関西圏6大学10団体から出演
              </p>
            </div>
          </div>
        </section>

        {/* Artists List Section */}
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

          <div className="max-w-6xl mx-auto px-4 pt-16">
            {/* 出演団体一覧 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {bands.map((band, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-4 border-kobe-dark-teal shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
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
                            <FaUsers />
                          </div>
                          <p className="text-sm font-bold text-gray-500">
                            Coming Soon
                          </p>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-black text-kobe-dark-teal leading-tight mb-4">
                      {band.name}
                    </h3>

                    {/* SNSリンク */}
                    <div className="flex justify-center space-x-4">
                      {band.youtube && (
                        <a
                          href={band.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                          title="YouTube"
                        >
                          <FaYoutube className="text-lg" />
                        </a>
                      )}
                      {band.instagram && (
                        <a
                          href={band.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white p-3 rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                          title="Instagram"
                        >
                          <FaInstagram className="text-lg" />
                        </a>
                      )}
                      {band.xTwitter && (
                        <a
                          href={band.xTwitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                          title="X (旧Twitter)"
                        >
                          <FaXTwitter className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
