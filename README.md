# 神戸音学祭 (Kobe Music Festival) 🎵

神戸音学祭の公式ウェブサイトです。学生主催の野外音楽フェスの情報を掲載しています。

## プロジェクト概要

- **開催日**: 2025年8月22日 11:00~19:00
- **会場**: GLION ARENA KOBE TOTTEI PARK
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

## 利用可能なスクリプト

```bash
# 開発サーバーの起動
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start

# ESLint チェック
npm run lint

# コードフォーマット
npm run format

# フォーマットチェック（自動修正なし）
npm run format:check

# TypeScript 型チェック
npm run type-check
```

## CI/CD パイプライン

プロジェクトには GitHub Actions を使用した CI/CD パイプラインが設定されています：

### 自動実行されるチェック

- **フォーマットチェック**: Prettier によるコードフォーマットの確認
- **型チェック**: TypeScript の型安全性確認
- **リントチェック**: ESLint によるコード品質チェック
- **ビルドテスト**: 本番環境でのビルド成功確認
- **セキュリティ監査**: npm audit による脆弱性チェック

### トリガー条件

- Pull Request の作成・更新時
- main/develop ブランチへの push 時

これにより、コード品質の維持とデプロイの安全性が確保されています。

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
- **ARTIST**: 出演バンド一覧（準備中）
- **SPONSOR**: 協賛企業・団体（準備中）
- **TICKET**: チケット購入情報（準備中）

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

- **Instagram**: @kobe_ongakusai
- **X (Twitter)**: @K0beOngakusai

---

&copy; 2025 Kobe Ongakusai 実行委員会. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
