//協賛企業情報
export const sponsors: Array<{
  name: string;
  image: string;
}> = [
  {
    name: "one-bright-kobe",
    image: "/images/sponsors/one-bright-kobe.avif", // TODO: 写真追加予定
  },
  {
    name: "KINGSX",
    image: "/images/sponsors/kingsx.jpg", // TODO: 写真追加予定
  },
  {
    name: "KOBE BLUEPORT",
    image: "/images/sponsors/blueport.png", // TODO: 写真追加予定
  },
];
export type Band = (typeof sponsors)[0];
