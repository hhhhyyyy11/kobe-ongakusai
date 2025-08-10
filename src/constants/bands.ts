// 出演バンド情報
export const bands: Array<{
  name: string;
  image: string | null;
}> = [
  {
    name: "関西学院大学文化総部軽音楽部",
    image: "/images/artists/kwansei-gakuin.jpg",
  },
  {
    name: "神戸市外国語大学学部軽音学部",
    image: "/images/artists/kobe-sgf.jpg",
  },
  {
    name: "神戸親和大学軽音学部",
    image: "/images/artists/kobe-shinwa.jpg",
  },
  {
    name: "神戸大学軽音楽部ROCK",
    image: "/images/artists/kobe-univ-rock.jpg",
  },
  {
    name: "神戸大学軽音サークルFreeBeat",
    image: "/images/artists/kobe-univ-free-beat.jpg",
  },
  {
    name: "神戸大学軽音サークルMMC",
    image: "/images/artists/kobe-univ-mmc.jpg",
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
    image: "/images/artists/ritsumeikan-hansel-gretel.jpg",
  },
  {
    name: "立命館大学Jack&Beans",
    image: "/images/artists/ritsumeikan-jack-beans.jpg",
  },
];

export type Band = (typeof bands)[0];
