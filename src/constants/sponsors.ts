//協賛企業情報
export const sponsors: Array<{
  name: string;
  image: string;
  link: string;
}> = [
  {
    name: "株式会社One Bright KOBE",
    image: "/images/sponsors/one-bright-kobe.avif",
    link: "https://www.totteikobe.jp/company",
  },
  {
    name: "KINGSX",
    image: "/images/sponsors/kingsx.jpg",
    link: "https://kingsx.info/",
  },
  {
    name: "KOBE BLUEPORT",
    image: "/images/sponsors/blueport.png",
    link: "http://www.blue-port.jp/",
  },
];
export type Sponsor = (typeof sponsors)[0];
