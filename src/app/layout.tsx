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
    "2025年8月22日開催！学生主催の野外音楽フェス。GLION ARENA KOBE TOTTEI PARKで開催される音楽イベントです。",
  keywords: [
    "神戸音学祭",
    "音楽フェス",
    "学生",
    "神戸",
    "GLION ARENA",
    "TOTTEI PARK",
    "コンサート",
    "イベント",
    "ライブ",
    "フェス",
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
    description: "2025年8月22日開催！学生主催の野外音楽フェス",
    url: "https://kobe-ongakusai.vercel.app",
    siteName: "神戸音学祭 2025",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://kobe-ongakusai.vercel.app/images/logo_main.jpg",
        width: 1200,
        height: 630,
        alt: "神戸音学祭 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戸音学祭 2025",
    description: "2025年8月22日開催！学生主催の野外音楽フェス",
    creator: "@K0beOngakusai",
    images: ["https://kobe-ongakusai.vercel.app/images/logo_main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "神戸音学祭 2025",
    description: "学生主催の野外音楽フェス",
    image: "https://kobe-ongakusai.vercel.app/images/logo_main.jpg",
    startDate: "2025-08-22T11:00:00+09:00",
    endDate: "2025-08-22T19:00:00+09:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "GLION ARENA KOBE TOTTEI PARK",
      address: {
        "@type": "PostalAddress",
        addressLocality: "神戸市",
        addressCountry: "JP",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "神戸音学祭実行委員会",
      url: "https://kobe-ongakusai.vercel.app",
    },
    performer: [
      {
        "@type": "Organization",
        name: "出演者調整中",
        description: "現在出演アーティストを調整中です",
      },
    ],
    offers: {
      "@type": "Offer",
      price: "3500",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      url: "https://kobe-ongakusai.vercel.app",
      validFrom: "2025-01-01T00:00:00+09:00",
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
