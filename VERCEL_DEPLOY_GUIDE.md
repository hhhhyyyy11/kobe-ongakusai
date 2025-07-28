# Vercel デプロイガイド

## 前提条件

1. GitHubアカウント
2. Vercelアカウント（GitHubと連携可能）
3. プロジェクトがGitHubリポジトリにプッシュされていること

## ステップバイステップガイド

### 1. GitHubリポジトリの準備

```bash
# Gitリポジトリを初期化（まだの場合）
git init

# すべてのファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit: Kobe Ongakusai website"

# GitHubリポジトリにプッシュ
git remote add origin https://github.com/yourusername/kobe-ongakusai.git
git branch -M main
git push -u origin main
```

### 2. Vercelでのデプロイ

1. **Vercelにアクセス**: <https://vercel.com>
2. **GitHubでサインイン**
3. **「New Project」をクリック**
4. **GitHubリポジトリを選択**
5. **設定確認**：
   - Framework Preset: Next.js（自動検出）
   - Root Directory: `./`
   - Build Command: `npm run build`（自動設定）
   - Output Directory: `.next`（自動設定）
6. **「Deploy」をクリック**

### 3. デプロイ完了

- 約1-2分でデプロイが完了
- 自動的にHTTPS対応のURLが生成
- カスタムドメインの設定も可能

### 4. 継続的デプロイ

- `main`ブランチへのプッシュで自動デプロイ
- プルリクエストごとにプレビューデプロイ
- コミットごとの詳細なデプロイログ

### 5. カスタムドメイン設定（オプション）

1. Vercelダッシュボードで「Domains」タブ
2. 独自ドメインを追加
3. DNS設定の更新
4. SSL証明書の自動発行

## 環境変数の設定

本プロジェクトでは現在環境変数は不要ですが、将来的に必要な場合：

1. Vercelダッシュボードで「Settings」→「Environment Variables」
2. 必要な環境変数を追加
3. 再デプロイで反映

## パフォーマンス最適化

Vercelは以下の最適化を自動で行います：

- CDN配信
- 画像最適化
- Gzip圧縮
- Brotli圧縮
- HTTP/2対応

## サポートとドキュメント

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Next.js + Vercelガイド](https://nextjs.org/docs/deployment)
