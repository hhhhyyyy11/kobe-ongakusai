# [FEATURE] 出演バンド・アーティスト情報の実装

## 概要

現在TODOコメントで未実装となっている出演バンド・アーティスト一覧機能を実装する。音楽フェスティバルサイトとして必須の機能。

## 現状

- `layout.tsx`のJSON-LDで「出演者調整中」となっている
- メインページに出演バンド情報が表示されていない
- バンド情報のデータ構造が未定義

## 実装タスク

- [ ] バンド情報のTypeScriptインターフェース設計
- [ ] バンド一覧表示コンポーネント実装
- [ ] バンド詳細モーダル/ページ実装
- [ ] レスポンシブデザイン対応
- [ ] 画像最適化（Next.js Image使用）
- [ ] JSON-LD構造化データの更新

## データ構造設計

```typescript
interface Artist {
  id: string;
  name: string;
  genre: string;
  description: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  performanceTime?: {
    start: string;
    end: string;
  };
}
```

## 受け入れ条件

- 出演バンド一覧が見やすく表示される
- 各バンドの詳細情報（ジャンル、メンバー等）が確認できる
- モバイル・デスクトップ両対応
- アクセシビリティ対応済み

## 技術要件

- TypeScript interface定義
- Tailwind CSSでスタイリング
- Next.js App Router準拠
- レスポンシブデザイン

**ラベル**: `feature`, `high-priority`, `frontend`
