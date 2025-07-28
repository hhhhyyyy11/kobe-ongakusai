# 神戸音学祭 (Kobe Music Festival) 🎵

神戸音学祭の公式ウェブサイトです。学生主催の音楽フェスティバルの情報を掲載しています。

## プロジェクト概要

- **開催日**: 2025年8月15日-16日
- **会場**: 神戸ポートアイランド特設会場
- **主催**: 神戸音学祭実行委員会

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **パッケージマネージャー**: npm

## 開発環境のセットアップ

### 必要要件

- Node.js 18.17以上
- npm 9以上

### インストール

```bash
# リポジトリをクローン
git clone [repository-url]
cd kobe-ongakusai

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## Vercelでのデプロイ

### 1. Vercelアカウントの作成

[Vercel](https://vercel.com)でアカウントを作成します。

### 2. GitHubリポジトリとの連携

1. GitHubにプロジェクトをプッシュ
2. Vercelダッシュボードで「New Project」をクリック
3. GitHubリポジトリを選択
4. 「Deploy」をクリック

### 3. 自動デプロイの設定

- `main`ブランチへのプッシュで自動デプロイ
- プレビューデプロイ機能でPRごとの確認が可能

### 4. カスタムドメインの設定（オプション）

Vercelダッシュボードの「Domains」セクションで独自ドメインを設定できます。

## プロジェクト構造

```text
src/
├── app/
│   ├── layout.tsx          # レイアウトコンポーネント
│   ├── page.tsx           # メインページ
│   └── globals.css        # グローバルスタイル
├── components/            # 再利用可能なコンポーネント
└── public/               # 静的ファイル
```

## セクション

- **TOP**: メインビジュアルとイベント概要
- **ARTIST**: 出演バンド一覧
- **SPONSOR**: 協賛企業・団体
- **TICKET**: チケット購入情報

## 開発ガイドライン

- コンポーネントは TypeScript で作成
- Tailwind CSS でスタイリング
- レスポンシブデザインを実装
- Next.js の Image コンポーネントを使用
- アクセシビリティを考慮

## パフォーマンス最適化

- Next.js の自動最適化機能を活用
- 画像の自動最適化
- コード分割とプリフェッチ
- Vercel Edge Network によるCDN配信

## お問い合わせ

- **メール**: <info@kobeongakusai.com>
- **Instagram**: @kobeongakusai

---

&copy; 2025 Kobe Ongakusai 実行委員会. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
