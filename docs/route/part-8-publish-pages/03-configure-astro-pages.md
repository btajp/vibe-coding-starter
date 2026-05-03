---
slug: /route/part-8-publish-pages/configure-astro-pages
title: AstroをGitHub Pages向けに設定する
---

# AstroをGitHub Pages向けに設定する

## この章でできるようになること

Astroの `site` と `base` を設定し、GitHub Pages向けのGitHub Actions workflowを追加できるようになります。

## まず知っておくこと

AstroをGitHub Pagesで公開する場合、公開先URLに合わせて設定が必要です。

通常、リポジトリ名が `vibe-portfolio` なら、公開URLは次のようになります。

```text
https://YOUR_GITHUB_USERNAME.github.io/vibe-portfolio/
```

この場合、Astroには `site` と `base` を設定します。
`site` はサイトの起点になるURL、`base` はリポジトリ名ぶんのパスだと考えると読みやすくなります。

作業前に、成果物リポジトリにいることを確認します。

```bash
cd ~/vibe-projects/vibe-portfolio
pwd
```

## astro.config.mjsを設定する

`astro.config.mjs` を開きます。

次のような形にします。

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  base: "/vibe-portfolio",
});
```

`YOUR_GITHUB_USERNAME` は自分のGitHubユーザー名に置き換えます。

リポジトリ名を `YOUR_GITHUB_USERNAME.github.io` にした場合は、URLの形が変わります。
その場合、`base` が不要になることがあります。
迷ったら、[Astro公式ドキュメントのGitHub Pages手順](https://docs.astro.build/ja/guides/deploy/github/) を確認します。

## base設定とリンク

`base` を設定すると、ルートから始まるリンクに注意が必要です。

たとえば、`/about` のようなリンクは、公開先では `/vibe-portfolio/about` として扱う必要があります。

初回は、リンクを少なくし、公開後に壊れていないか確認します。
リンクが壊れたら、`base` 設定とリンクの書き方を見直します。

## workflowを追加する

GitHub Actions用のディレクトリを作ります。

```bash
mkdir -p .github/workflows
```

`.github/workflows/deploy.yml` を作ります。
次のコマンドは、`deploy.yml` を新しく作るコマンドです。
同じファイルがすでにある場合は上書きされるため、既存のworkflowがある人は先に中身を確認します。

```bash
cat > .github/workflows/deploy.yml <<'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v5
      - name: Install, build, and upload your site
        uses: withastro/action@v5

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF
```

これはAstro公式ドキュメントで案内されている構成に沿ったworkflowです。
Actionのバージョンは更新されることがあるため、実際に使う前に公式ドキュメントの例も確認します。

## package-lock.jsonをcommitする

Astro公式Actionは、ロックファイルを見てパッケージマネージャーを判断します。

npmを使っている場合は、`package-lock.json` をcommitします。
`node_modules` はcommitしません。

```bash
git status
```

`package-lock.json` が表示される場合はcommit対象にします。
`node_modules` が表示される場合は、commitしません。

## ローカルでbuildする

pushする前に、ローカルでbuildします。

```bash
npm run build
```

成功したら、差分を確認します。

```bash
git diff
```

## commitする

```bash
git add astro.config.mjs .github/workflows/deploy.yml package-lock.json package.json
git diff --staged
git commit -m "Configure GitHub Pages deployment"
```

`package.json` に変更がなければ、addしても問題ありません。
Gitが変更のないファイルはcommitに含めません。
`git diff --staged` で、commitに入る内容が設定ファイルとworkflowだけか確認します。

## 何が起きたのか

Astroに公開先URLを教え、GitHub Actionsでbuildとdeployを行う設定を追加しました。

第6部ではローカルで `npm run build` を実行しました。
第8部では、GitHub Actions上で同じbuildを実行し、GitHub Pagesへ配置します。

## 運用者の視点

workflowは、自動で実行される設定です。

次を確認します。

- どのbranchへのpushで動くか
- どの権限を使うか
- どのActionを使うか
- buildとdeployが分かれているか
- 秘密情報をworkflowに直接書いていないか

## AIに聞いてみよう

```text
astro.config.mjs と .github/workflows/deploy.yml をレビューしてください。

pwd、git status、git diff の結果も確認してください。

確認したい観点:
- GitHub PagesのURLに対して site と base が合っているか
- workflowがmainへのpushで動くか
- Astro公式ドキュメントのGitHub Pages手順と大きくずれていないか
- permissionsが過剰ではないか
- package-lock.jsonをcommitする理由
- node_modulesをcommitしない理由

まだ git add、git commit、git push は実行しないでください。
```

## 次へ

次は、GitHub PagesをGitHub Actionsで公開します。

- [04-enable-pages-actions.md](04-enable-pages-actions.md)
