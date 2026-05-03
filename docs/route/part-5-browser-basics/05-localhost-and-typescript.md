---
slug: /route/part-5-browser-basics/localhost-and-typescript
title: ローカルサーバーとTypeScriptの入口
---

# ローカルサーバーとTypeScriptの入口

## この章でできるようになること

ファイルを直接開く場合と、`localhost` のローカルサーバーで見る場合の違いを説明できるようになります。

また、TypeScriptがJavaScriptに型を足すものだと理解します。

## まず知っておくこと

ここまでのページは、`index.html` を直接ブラウザで開いて確認できました。

一方、実際のWeb開発では、ローカルサーバーを起動して `localhost` で確認することがよくあります。

```text
ファイルを直接開く
→ file:// で見る

ローカルサーバーで開く
→ http://localhost:ポート番号 で見る
```

## ローカルサーバーを起動する

Python 3が入っている場合は、次で簡単なローカルサーバーを起動できます。
まず確認します。

```bash
python3 --version
```

バージョンが表示されれば使えます。
入っていない場合、この章では無理にインストールしなくて構いません。
内容を読んで、第6部の開発サーバーの準備として理解します。

```bash
cd ~/vibe-practice/browser-basics
python3 -m http.server 8000
```

このコマンドを実行すると、ターミナルはローカルサーバーを動かすために使われます。
プロンプトが戻ってこなくても、失敗とは限りません。

ブラウザで次を開きます。

```text
http://localhost:8000
```

止めるときは、ターミナルで `Ctrl+C` を押します。
`Address already in use` のように表示された場合は、8000番ポートを別のプロセスが使っています。
その場合は、いったん止めてから、別の番号で試します。

```bash
python3 -m http.server 8001
```

その場合、ブラウザで開くURLも `http://localhost:8001` に変えます。

## localhostとは何か

`localhost` は、自分のPC自身を指す名前です。

`http://localhost:8000` は、インターネット上に公開しているという意味ではありません。
自分のPCの中で起動しているサーバーに、ブラウザからアクセスしています。

第6部でAstroを使うと、開発サーバーを起動して `localhost` で確認します。
この章は、その準備です。

## TypeScriptとは何か

TypeScriptは、JavaScriptに型を足した言語です。

JavaScriptでは、次のように変数に何でも入れられます。

```js
let count = 0;
count = "one";
```

TypeScriptでは、意図しない型の使い方を事前に見つけやすくなります。

```ts
let count: number = 0;
count = "one";
```

この例では、`count` は数値のつもりなので、文字列を入れると問題になります。

## 今すぐTypeScriptを深く学ばない理由

TypeScriptは便利ですが、最初から深く入ると、HTML、CSS、JavaScript、型、ビルドの話が一度に出てきます。

この部では、まずブラウザで動くJavaScriptを体験します。
第6部でAstroに進むと、TypeScriptが出てくる場面があります。
そのときに「JavaScriptに型を足したもの」として受け止められれば十分です。

## 何が起きたのか

ローカルサーバーを起動すると、ブラウザはHTTP経由でページを読みます。

直接ファイルを開くより、実際のWebサイトに近い形で確認できます。
第6部の `npm run dev` も、開発サーバーを起動する操作です。

第0部でNode.jsとnpmを先に導入した人もいますが、ここではまだ使っていません。
Node.jsやnpmは、第6部でAstroを使う直前に改めて回収します。

## 運用者の視点

ローカルサーバーを起動したら、止め方も確認します。

- どのディレクトリで起動したか
- どのポート番号で動いているか
- ブラウザで見ているURLは何か
- 止める方法は何か

開発サーバーは、公開サーバーではありません。
ただし、自分のPCで動いているプロセスなので、不要になったら止めます。

## AIに聞いてみよう

```text
file:// でHTMLを直接開く場合と、
http://localhost:8000 でローカルサーバーから開く場合の違いを説明してください。

第6部でAstroの npm run dev に進む前提で、
localhost、ポート番号、開発サーバー、止め方を整理してください。
まだファイルは変更しないでください。
```

```text
TypeScriptを、JavaScriptに型を足したものとして説明してください。

私はまだHTML、CSS、JavaScriptの入口を学んだ段階です。
第6部でAstroに進む前に、最低限知っておけばよいことだけに絞ってください。
```

## commitポイント

この章では、ローカルサーバーの確認だけならファイル変更はありません。
ファイルを編集していなければ、commitは不要です。

## 次へ

次は、ブラウザアプリをAIとGitで見直します。

- [06-review-browser-app.md](06-review-browser-app.md)
