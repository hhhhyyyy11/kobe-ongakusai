import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // 旧2025サイトはGoogle検索から除外するため、sitemapを空にする
  return [];
}
