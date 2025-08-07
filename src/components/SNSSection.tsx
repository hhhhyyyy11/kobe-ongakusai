import React from "react";
import { InstagramEmbed } from "./InstagramEmbed";
import { TwitterEmbed } from "./TwitterEmbed";

interface SNSSectionProps {
  isClient: boolean;
}

export const SNSSection: React.FC<SNSSectionProps> = ({ isClient }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full border-4 border-kobe-dark-teal mb-6">
            <h2 className="text-4xl md:text-5xl font-black">SNS</h2>
          </div>
        </div>

        {/* SNS投稿表示エリア */}
        <div className="grid lg:grid-cols-3 gap-8">
          <InstagramEmbed />
          <TwitterEmbed isClient={isClient} />
        </div>
      </div>
    </section>
  );
};
