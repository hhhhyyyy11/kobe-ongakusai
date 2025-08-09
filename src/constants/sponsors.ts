// 企業情報の基本型
interface Company {
  name: string;
  image: string;
  link: string;
}

// 協賛企業型（口数情報を含む）
interface SponsorCompany extends Company {
  kuchisu: number;
}

// 企業データ定義
const SPONSOR_COMPANIES: SponsorCompany[] = [
  {
    name: "KINGSX",
    image: "/images/sponsors/kingsx.jpg",
    link: "https://kingsx.info/",
    kuchisu: 5,
  },
  {
    name: "KOBE BLUEPORT",
    image: "/images/sponsors/blueport.png",
    link: "http://www.blue-port.jp/",
    kuchisu: 5,
  },
  {
    name: "ROOTS'66",
    image: "/images/sponsors/roots66.jpg",
    link: "https://livebar-roots66.com/",
    kuchisu: 2,
  },
  {
    name: "クラブ月世界",
    image: "/images/sponsors/club-gessekai.png",
    link: "https://gessekai.net/",
    kuchisu: 4,
  },
  {
    name: "頃末商店",
    image: "/images/sponsors/korosue.PNG",
    link: "https://www.korosue.com/",
    kuchisu: 5,
  },
];

const COOPERATION_COMPANIES: Company[] = [
  {
    name: "株式会社One Bright KOBE",
    image: "/images/sponsors/one-bright-kobe.png",
    link: "https://www.totteikobe.jp/",
  },
  {
    name: "ベースオントップ神戸",
    image: "/images/sponsors/bass-on-top.png",
    link: "https://www.bassontop.co.jp/studio_sannomiya/",
  },
];

// ユーティリティ関数
const sortByKuchisuDesc = (companies: SponsorCompany[]): SponsorCompany[] =>
  [...companies].sort((a, b) => b.kuchisu - a.kuchisu);

// エクスポート（口数順でソート済み）
export const sponsors = sortByKuchisuDesc(SPONSOR_COMPANIES);
export const cooperations = COOPERATION_COMPANIES;

// 型エクスポート
export type Sponsor = SponsorCompany;
export type Cooperation = Company;
