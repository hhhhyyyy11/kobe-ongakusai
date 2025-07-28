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
  title: "神戸音学祭 | Kobe Music Festival 2025",
  description: "2025年8月15日-16日開催！学生主催の音楽フェスティバル。神戸ポートアイランドで開催される若手から実力派まで多彩なアーティストが集結するイベントです。",
  keywords: ["神戸音学祭", "音楽フェス", "学生", "神戸", "ポートアイランド", "コンサート", "イベント"],
  authors: [{ name: "神戸音学祭実行委員会" }],
  creator: "神戸音学祭実行委員会",
  publisher: "神戸音学祭実行委員会",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kobe-ongakusai.vercel.app'),
  openGraph: {
    title: "神戸音学祭 | Kobe Music Festival 2025",
    description: "2025年8月15日-16日開催！学生主催の音楽フェスティバル",
    url: 'https://kobe-ongakusai.vercel.app',
    siteName: '神戸音学祭',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "神戸音学祭 | Kobe Music Festival 2025",
    description: "2025年8月15日-16日開催！学生主催の音楽フェスティバル",
    creator: '@kobeongakusai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
