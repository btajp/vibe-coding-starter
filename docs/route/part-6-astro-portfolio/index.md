---
slug: /route/part-6-astro-portfolio
title: 第6部：Astroで成果物ポートフォリオを作る
---

# 第6部：Astroで成果物ポートフォリオを作る

第6部では、教材リポジトリとは別に、自分の成果物ポートフォリオをAstroで作ります。

第0部では、Codexや今後のJavaScript系ツールを使うためにNode.jsとnpmを先に導入しました。
ここでは、Web制作のためにNode.jsとnpmを改めて使います。

## この部のゴール

Astroでローカルのポートフォリオサイトを作り、公開前に見せてよい内容だけになっているか確認できるようになることがゴールです。

この部では、まだGitHub Pagesで公開しません。
公開は第8部で扱います。

## この部で回収すること

第6部では、第0部で先に導入したNode.jsとnpmの意味を、Astro制作の文脈で回収します。

- `node --version` と `npm --version`
- `npm create astro@latest`
- `package.json`
- `package-lock.json`
- `node_modules`
- npm scripts
- `npm run dev`
- `npm run build`
- `localhost`
- `dist/`
- Astroのページとコンポーネント
- TypeScriptの入口
- READMEと学習ログ
- 公開してよい情報かの確認

## 予定する章立て

### 1. 成果物リポジトリを分ける

教材リポジトリ、練習用リポジトリ、成果物リポジトリを分けます。
ポートフォリオは、自分の成果物として別のリポジトリにします。

### 2. Astroプロジェクトを作る

Node.jsとnpmを確認し、`npm create astro@latest` でAstroプロジェクトを作ります。

### 3. npm scriptsと開発サーバーを理解する

`package.json`、`node_modules`、`npm run dev`、`localhost` を整理します。

### 4. Astroのファイル構成を見る

`src/pages`、`src/components`、`src/layouts` などを見て、HTML/CSS/JavaScriptの知識と接続します。

### 5. ポートフォリオ本文を作る

自己紹介、学習ログ、作ったもの、READMEを整えます。
個人情報や秘密情報を入れない判断も扱います。

### 6. buildして公開前レビューをする

`npm run build` と `dist/` を確認し、公開前のチェックを行います。

### 7. AIとGitで仕上げる

AIにレビューさせ、Git差分を見て、ローカルでcommitします。
GitHubへpushするのは第8部です。

## 進め方

第6部では、初めて「自分の成果物」として残るリポジトリを作ります。

ここからは、公開に近づきます。
画面に表示される内容だけでなく、リポジトリに含まれるファイル、README、学習ログにも公開してよい情報だけを入れます。
