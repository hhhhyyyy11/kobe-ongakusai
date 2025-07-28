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
  description: "2025年8月22日開催！学生主催の音楽フェスティバル。GLION ARENA KOBE TOTTEI PARKで開催される若手から実力派まで多彩なアーティストが集結するイベントです。",
  keywords: ["神戸音学祭", "音楽フェス", "学生", "神戸", "GLION ARENA", "TOTTEI PARK", "コンサート", "イベント"],
  authors: [{ name: "神戸音学祭実行委員会" }],
  creator: "神戸音学祭実行委員会",
  publisher: "神戸音学祭実行委員会",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kobe-ongakusai.vercel.app'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/favicons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "神戸音学祭 | Kobe Music Festival 2025",
    description: "2025年8月22日開催！学生主催の音楽フェスティバル",
    url: 'https://kobe-ongakusai.vercel.app',
    siteName: '神戸音学祭',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "神戸音学祭 | Kobe Music Festival 2025",
    description: "2025年8月22日開催！学生主催の音楽フェスティバル",
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: '神戸音学祭 - Kobe Music Festival 2025',
    description: '学生主催の音楽フェスティバル',
    startDate: '2025-08-22T11:00:00+09:00',
    endDate: '2025-08-22T19:00:00+09:00',
    location: {
      '@type': 'Place',
      name: 'GLION ARENA KOBE TOTTEI PARK',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '神戸市',
        addressCountry: 'JP',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: '神戸音学祭実行委員会',
      url: 'https://kobe-ongakusai.vercel.app',
    },
    offers: {
      '@type': 'Offer',
      price: '3500',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
