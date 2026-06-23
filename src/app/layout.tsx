import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "神戸音学祭 2025",
  description:
    "2025年8月22日開催！関西圏6大学10団体が出演する学生主催の野外音楽フェス。TOTTEI PARKで開催される入場無料の音楽イベントです。",
  applicationName: "神戸音学祭",
  keywords: [
    "神戸音学祭",
    "音楽フェス",
    "学生",
    "神戸",
    "TOTTEI PARK",
    "コンサート",
    "イベント",
    "ライブ",
    "フェス",
    "入場無料",
    "軽音楽",
    "大学",
    "音楽祭",
  ],
  authors: [{ name: "神戸音学祭実行委員会" }],
  creator: "神戸音学祭実行委員会",
  publisher: "神戸音学祭実行委員会",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kobe-ongakusai.vercel.app"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/images/favicons/icon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicons/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/images/favicons/icon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/images/favicons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "神戸音学祭 2025",
    description:
      "2025年8月22日開催！関西圏6大学10団体が出演する学生主催の野外音楽フェス",
    url: "https://kobe-ongakusai.vercel.app",
    siteName: "神戸音学祭 2025",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://kobe-ongakusai.vercel.app/images/logo_main.jpg",
        width: 1200,
        height: 630,
        alt: "神戸音学祭 2025 - 学生主催の野外音楽フェス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戸音学祭 2025",
    description:
      "2025年8月22日開催！関西圏6大学10団体が出演する学生主催の野外音楽フェス",
    creator: "@K0beOngakusai",
    site: "@K0beOngakusai",
    images: ["https://kobe-ongakusai.vercel.app/images/logo_main.jpg"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  other: {
    "site-name": "神戸音学祭 2025",
    "application-name": "神戸音学祭",
  },
  verification: {
    google: "FJtH2J5vLz-_MLCjiSdj-34OBYIpbLooUjBCGf3JKUs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
