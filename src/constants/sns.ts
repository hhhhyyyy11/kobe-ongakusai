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

export type SNSInfo = typeof SNS_INFO;
