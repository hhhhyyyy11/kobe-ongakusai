// SNS情報定数
export const SNS_INFO = {
  instagram: {
    handle: "kobe_ongakusai",
    url: "https://www.instagram.com/kobe_ongakusai?igsh=Nmtsa2JhZGpkb3Tv",
    embedUrl: "https://www.instagram.com/kobe_ongakusai/embed",
    displayName: "Instagram",
  },
  twitter: {
    handle: "K0beOngakusai",
    url: "https://x.com/K0beOngakusai",
    displayName: "X（旧Twitter）",
  },
} as const;

// SNSシェア用の定数
export const SHARE_CONFIG = {
  title: "神戸音学祭2025",
  text: "関西圏6大学10団体が出演する学生音楽フェス！2025年8月22日(金) 10:00-19:00",
  baseUrl: "https://kobe-ongakusai.vercel.app",
  hashtags:
    "神戸,神戸イベント,音楽イベント,フェス,野外フェス,学生,学生イベント,コピーバンド,コピーバンドライブ,tottei,totteipark,glion,神戸音学祭",

  // 各SNSのシェアURL
  shareUrls: {
    twitter: "https://twitter.com/intent/tweet",
    line: "https://social-plugins.line.me/lineit/share",
  },

  // SNSカラー
  colors: {
    twitter: "#000000", // X(旧Twitter)の新しいカラー
    line: "#00B900", // LINEブランドカラー
  },
} as const;

export type SNSInfo = typeof SNS_INFO;
export type ShareConfig = typeof SHARE_CONFIG;
