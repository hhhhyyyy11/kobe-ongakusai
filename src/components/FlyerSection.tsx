import React from "react";
import { ImageModal } from "./ImageModal";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsLine } from "react-icons/bs";
import { SHARE_CONFIG } from "@/constants/sns";

export const FlyerSection: React.FC = () => {
  const [isFlyerModalOpen, setIsFlyerModalOpen] = React.useState(false);
  const [isTimetableModalOpen, setIsTimetableModalOpen] = React.useState(false);

  const openFlyerModal = () => setIsFlyerModalOpen(true);
  const closeFlyerModal = () => setIsFlyerModalOpen(false);
  const openTimetableModal = () => setIsTimetableModalOpen(true);
  const closeTimetableModal = () => setIsTimetableModalOpen(false);

  // シェア用のデータ
  const shareData = {
    title: SHARE_CONFIG.title,
    text: SHARE_CONFIG.text,
    url: SHARE_CONFIG.baseUrl,
    hashtags: SHARE_CONFIG.hashtags,
  };

  // SNSシェア関数
  const shareToTwitter = () => {
    const tweetText = `${shareData.title}\n${shareData.text}\n${shareData.url}\n#${shareData.hashtags
      .split(",")
      .map((h) => h.trim())
      .join(" #")}`;
    const url = `${SHARE_CONFIG.shareUrls.twitter}?text=${encodeURIComponent(tweetText)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareToLine = () => {
    const lineText = `${shareData.title}\n${shareData.text}`;
    const url = `${SHARE_CONFIG.shareUrls.line}?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(lineText)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      {/* フライヤーセクション */}
      <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-kobe-dark-teal mb-4">
            公式フライヤー・タイムテーブル
          </h3>
        </div>

        <div className="flex flex-col items-center">
          {/* フライヤー・タイムテーブル画像 */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 justify-center">
            {/* フライヤー画像 */}
            <div className="relative flex justify-center">
              <div
                className="bg-gray-100 rounded-2xl p-4 shadow-inner cursor-pointer"
                onClick={openFlyerModal}
              >
                <div className="aspect-[3/4] w-64 md:w-72 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/flyer.jpg"
                    alt="神戸音学祭フライヤー"
                    width={400}
                    height={566}
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* フライヤー用フローティングアクションボタン（デスクトップのみ表示） */}
              <div className="absolute top-2 right-2 gap-2 hidden lg:flex">
                <a
                  href="/images/flyer.jpg"
                  download="神戸音学祭_フライヤー.png"
                  className="bg-kobe-dark-teal text-white p-3 rounded-full hover:bg-kobe-orange transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="フライヤーをダウンロード"
                >
                  <FaDownload className="text-lg" />
                </a>
              </div>

              {/* タブレット以下向けの保存案内 */}
              <div className="absolute bottom-2 left-2 right-2 lg:hidden">
                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-lg text-center">
                  長押しして画像を保存
                </div>
              </div>
            </div>

            {/* タイムテーブル画像 */}
            <div className="relative flex justify-center">
              <div
                className="bg-gray-100 rounded-2xl p-4 shadow-inner cursor-pointer"
                onClick={openTimetableModal}
              >
                <div className="aspect-[3/4] w-64 md:w-72 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/timetable.jpg"
                    alt="神戸音学祭タイムテーブル"
                    width={400}
                    height={566}
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* タイムテーブル用フローティングアクションボタン（デスクトップのみ表示） */}
              <div className="absolute top-2 right-2 gap-2 hidden lg:flex">
                <a
                  href="/images/timetable.jpg"
                  download="神戸音学祭_タイムテーブル.jpg"
                  className="bg-kobe-dark-teal text-white p-3 rounded-full hover:bg-kobe-orange transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="タイムテーブルをダウンロード"
                >
                  <FaDownload className="text-lg" />
                </a>
              </div>

              {/* タブレット以下向けの保存案内 */}
              <div className="absolute bottom-2 left-2 right-2 lg:hidden">
                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-lg text-center">
                  長押しして画像を保存
                </div>
              </div>
            </div>
          </div>

          {/* ハッシュタグエリア */}
          <div className="text-center">
            <div className="bg-kobe-light-blue/10 rounded-lg p-4 border-2 border-kobe-dark-teal mb-6">
              <p className="text-sm font-bold text-kobe-dark-teal">
                #関西 #関西イベント #神戸 #神戸イベント #音楽イベント #フェス
                #野外フェス #学生 #学生イベント #コピーバンド
                #コピーバンドライブ #tottei #totteikobe #glion #神戸音学祭
              </p>
            </div>

            {/* SNSシェアボタン */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={shareToTwitter}
                className="bg-[#000000] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-bold text-sm flex items-center gap-2 justify-center w-44"
                title="X(旧Twitter)でシェア"
              >
                <FaXTwitter className="text-lg" />
                Xでシェア
              </button>
              <button
                onClick={shareToLine}
                className="bg-[#00B900] text-white px-6 py-3 rounded-full hover:bg-[#009900] transition-all duration-300 transform hover:scale-105 shadow-lg font-bold text-sm flex items-center gap-2 justify-center w-44"
                title="LINEでシェア"
              >
                <BsLine className="text-lg" />
                LINEでシェア
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* フライヤー拡大モーダル */}
      <ImageModal
        isOpen={isFlyerModalOpen}
        onClose={closeFlyerModal}
        imageSrc="/images/flyer.jpg"
        imageAlt="神戸音学祭フライヤー"
        downloadFileName="神戸音学祭_フライヤー.png"
        width={800}
        height={1132}
      />

      {/* タイムテーブル拡大モーダル */}
      <ImageModal
        isOpen={isTimetableModalOpen}
        onClose={closeTimetableModal}
        imageSrc="/images/timetable.jpg"
        imageAlt="神戸音学祭タイムテーブル"
        downloadFileName="神戸音学祭_タイムテーブル.jpg"
        width={800}
        height={1132}
      />
    </>
  );
};
