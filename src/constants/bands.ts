// 出演バンド情報
export const bands: Array<{
  name: string;
  image: string | null;
  youtube?: string;
  instagram?: string;
  xTwitter?: string;
}> = [
  {
    name: "関西学院大学文化総部軽音楽部",
    image: "/images/artists/kwansei-gakuin.jpg",
    youtube: "https://www.youtube.com/@kglmc589",
    instagram: "https://www.instagram.com/kglmc_official/",
    xTwitter: "https://x.com/KGLMC",
  },
  {
    name: "神戸市外国語大学学部軽音楽部",
    image: "/images/artists/kobe-sgf.jpg",
    youtube:
      "https://www.youtube.com/@%E7%A5%9E%E6%88%B8%E5%B8%82%E5%A4%96%E5%A4%A7%E5%AD%A6%E9%83%A8%E8%BB%BD%E9%9F%B3%E6%A5%BD",
    instagram: "https://www.instagram.com/rock_the_k_on/?hl=ja",
    xTwitter: "https://x.com/rock_the_k_on",
  },
  {
    name: "神戸親和大学軽音楽部",
    image: "/images/artists/kobe-shinwa.jpg",
    instagram: "https://www.instagram.com/keionshinwa_gram/?hl=ja",
    xTwitter: "https://x.com/botshinwa",
  },
  {
    name: "神戸大学軽音楽部ROCK",
    image: "/images/artists/kobe-univ-rock.jpg",
    youtube: "https://www.youtube.com/@ROCK-wh7ih",
    instagram: "https://www.instagram.com/kobe_u_rock/",
    xTwitter: "https://x.com/kobe_u_rock",
  },
  {
    name: "神戸大学軽音サークルFreeBeat",
    image: "/images/artists/kobe-univ-free-beat.jpg",
    youtube: "https://www.youtube.com/@freebeat1430",
    instagram: "https://www.instagram.com/shindai_freebeat/",
    xTwitter: "https://x.com/kobe_freebeat",
  },
  {
    name: "神戸大学軽音サークルMMC",
    image: "/images/artists/kobe-univ-mmc.jpg",
    youtube: "https://www.youtube.com/@mmc7639",
    instagram: "https://www.instagram.com/mmc.kobe/",
    xTwitter: "https://x.com/kobe_mmc",
  },
  {
    name: "神戸大学軽音サークルSoundS",
    image: "/images/artists/kobe-univ-sounds.png",
    youtube: "https://www.youtube.com/user/kobesounds",
    instagram: "https://www.instagram.com/sounds_kobe2025/",
    xTwitter: "https://x.com/SoundS_kobe",
  },
  {
    name: "同志社大学Lilac Rainbows",
    image: "/images/artists/doshisha-lilac-rainbows.jpg",
    youtube: "https://www.youtube.com/@lilacrainbows",
    instagram: "https://www.instagram.com/lilac_rainbows/",
    xTwitter: "https://x.com/lilacrainbows",
  },
  {
    name: "立命館大学Hansel&Gretel",
    image: "/images/artists/ritsumeikan-hansel-gretel.jpg",
    youtube: "https://www.youtube.com/channel/UCkyGtLjA60FNjuCbr0fRD6A",
    instagram: "https://www.instagram.com/hansel_and_gretel.rits/",
    xTwitter: "https://x.com/hg_rits_oic",
  },
  {
    name: "立命館大学Jack&Beans",
    image: "/images/artists/ritsumeikan-jack-beans.jpg",
    youtube: "https://www.youtube.com/@jackbeansbkc8419",
    instagram: "https://www.instagram.com/jack_bkc.ins/",
    xTwitter: "https://x.com/jack_bkc",
  },
];

export type Band = (typeof bands)[0];
