---
slug: /route/part-5-browser-basics
title: 第5部：ブラウザで小さく作る
---

# 第5部：ブラウザで小さく作る

第5部では、HTML、CSS、JavaScriptだけで、ローカルで動く小さなページを作ります。

第0部でNode.jsとnpmを入れた人もいますが、この部ではまだnpmを使いません。
まず、ブラウザがHTML、CSS、JavaScriptをどう扱うのかを体験します。

## この部のゴール

ローカルだけで動く小さなWebページを作り、ブラウザで確認し、Consoleのエラーを見て、AIに具体的に相談できるようになることがゴールです。

また、第6部でAstroやTypeScriptに進む前に、Webページの基本部品を理解します。

## この部で回収すること

第5部では、これまでの部で学んだことをWeb制作に接続します。

- ファイル、ディレクトリ、パス
- ローカルリポジトリ
- Gitで変更を見る習慣
- AIに小さな変更を頼む習慣
- エラー文を読んで相談する習慣
- `localhost` の入口
- TypeScriptを学ぶ理由

## 予定する章立て

### 1. HTML、CSS、JavaScriptの役割を分ける

HTMLは構造、CSSは見た目、JavaScriptは動きを担当します。
まずは3つの役割を混ぜずに見ます。

### 2. ローカルページを作る

教材リポジトリとは別に練習用リポジトリを作り、`index.html`、`styles.css`、`app.js` を作ります。

### 3. DOMとイベントで画面を動かす

`document.querySelector`、`addEventListener`、`textContent`、`classList` を使い、ボタンで画面を変えます。

### 4. フォームとConsoleエラーを見る

入力フォームの値を読み、ブラウザDevToolsのConsoleでエラーを確認します。

### 5. ローカルサーバーとTypeScriptの入口

ファイルを直接開く場合と、`localhost` で見る場合の違いを知ります。
TypeScriptは、JavaScriptに型を足すものだと理解します。

### 6. ブラウザアプリをAIとGitで見直す

AIにレビューさせ、Git差分を見て、必要な変更だけcommitします。

## この部で使う主なもの

- ブラウザ
- HTML
- CSS
- JavaScript
- DevTools
- Console
- `python3 -m http.server`
- `git status`
- `git diff`
- `git commit`

## 進め方

第5部では、いきなりフレームワークを使いません。

第6部でAstroを使う前に、ブラウザで表示されるものが何からできているかを確認します。
この段階を挟むことで、AstroのファイルをAIが編集したときにも、どの部分がHTML、CSS、JavaScript、TypeScriptに近いのか見当をつけやすくなります。

