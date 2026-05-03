---
slug: /route/part-6-astro-portfolio/create-astro-project
title: Astroプロジェクトを作る
---

# Astroプロジェクトを作る

## この章でできるようになること

Node.jsとnpmを確認し、Astroプロジェクトを作れるようになります。

## まず知っておくこと

Astroは、Webサイトを作るためのフレームワークです。
この教材では、GitHub Pagesで公開するポートフォリオを作るために使います。

第5部では、HTML、CSS、JavaScriptだけでページを作りました。
Astroを使うと、ページ、コンポーネント、ビルド、公開向けファイル生成を扱いやすくなります。

## Node.jsとnpmを確認する

第0部で、AIエージェントを使い始めるためにNode.jsとnpmを入れました。
ここでは、Astroを使うために改めて確認します。

```bash
node --version
npm --version
```

表示されれば次へ進みます。

もし見つからない場合は、第1部で学んだPATHやパッケージ管理を思い出します。

macOSの場合:

```bash
brew install node
```

WSL Ubuntuの場合、この教材ではHomebrewでNode.jsを入れる方針です。

```bash
brew install node
```

インストール後に確認します。

```bash
node --version
npm --version
```

## Astroプロジェクトを作る

成果物用ディレクトリに移動します。

```bash
cd ~/vibe-projects
ls
```

`vibe-portfolio` がすでに表示される場合は、削除せずに止まります。
以前に作りかけた成果物リポジトリかもしれません。

Astroプロジェクトを作ります。

```bash
npm create astro@latest vibe-portfolio
```

画面の質問は、Astroのバージョンによって少し変わることがあります。
迷ったら、次の方針で選びます。

- パッケージの一時インストールを聞かれたらYes
- 最小構成に近いテンプレートを選ぶ
- 依存関係のインストールはYes
- TypeScriptは使ってよい
- Git初期化を聞かれたらYes

作成後に移動します。

```bash
cd vibe-portfolio
```

状態を確認します。

```bash
pwd
git status
```

もしGitが初期化されていなければ、次を実行します。

```bash
git init
git config user.name "Vibe Coding Learner"
git config user.email "learner@example.com"
```

## 何が起きたのか

`npm create astro@latest` は、npmを使ってAstroプロジェクト作成ツールを実行します。

第0部では、Codexを入れるためにnpmを使いました。
この章では、Web制作のプロジェクトを作るためにnpmを使っています。

同じnpmでも、目的が違います。

## 運用者の視点

プロジェクト作成コマンドは、多くのファイルを生成します。

作成後は、必ず確認します。

```bash
ls
git status
```

何が作られたかわからない場合は、AIに説明させます。
ただし、まだファイル変更は頼まず、まず構成の説明を聞きます。

## AIに聞いてみよう

```text
npm create astro@latest でAstroプロジェクトを作りました。

生成されたファイルとディレクトリの役割を説明してください。
特に、package.json、package-lock.json、node_modules、src、public、astro.config.mjs を整理してください。
まだファイルは変更しないでください。
```

## commitポイント

Astroプロジェクト作成直後の状態を確認します。

```bash
git status
```

プロジェクト作成時にまだcommitされていない場合は、初期状態をcommitします。
ここでは、作成直後の初期状態をまとめて記録するために `git add .` を使います。
ただし、実行前に `git status` で `node_modules` がcommit候補に入っていないことを必ず確認します。

```bash
git add .
git status
git diff --staged --stat
```

`git diff --staged --stat` は、次のcommitに入るファイルの概要を見るコマンドです。
大量に生成されたファイルを1つずつ読む代わりに、まず全体像を見ます。

問題なければcommitします。

```bash
git commit -m "Create Astro portfolio"
```

## 次へ

次は、npm scriptsと開発サーバーを理解します。

- [03-npm-scripts-dev-server.md](03-npm-scripts-dev-server.md)
