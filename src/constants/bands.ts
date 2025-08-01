// 出演バンド情報
export const bands: Array<{
  name: string;
  image: string | null;
}> = [
  {
    name: "関西学院大学文化総部軽音楽部",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸市外国語大学学部軽音学部",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸親和大学軽音学部",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸大学軽音楽部ROCK",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸大学軽音サークルFreeBeat",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸大学軽音サークルMMC",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "神戸大学軽音サークルSoundS",
    image: "/images/artists/kobe-univ-sounds.png",
  },
  {
    name: "同志社大学Lilac Rainbow",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "立命館大学Hansel&Gretel",
    image: null, // TODO: 写真追加予定
  },
  {
    name: "立命館大学Jack&Beans",
    image: null, // TODO: 写真追加予定
  },
];

export type Band = (typeof bands)[0];
