//協賛企業情報
export const sponsors: Array<{
  name: string;
  image: string;
}> = [
  {
    name: "one-bright-kobe",
    image: "/images/sponsors/one-bright-kobe.avif",
  },
  {
    name: "KINGSX",
    image: "/images/sponsors/kingsx.jpg",
  },
  {
    name: "KOBE BLUEPORT",
    image: "/images/sponsors/blueport.png",
  },
];
export type Sponsor = (typeof sponsors)[0];
