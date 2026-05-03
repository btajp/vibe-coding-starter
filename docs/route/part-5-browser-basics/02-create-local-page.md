---
slug: /route/part-5-browser-basics/create-local-page
title: ローカルページを作る
---

# ローカルページを作る

## この章でできるようになること

HTML、CSS、JavaScriptの3ファイルを作り、ブラウザでローカルページを開けるようになります。

## まず知っておくこと

この章でも、教材リポジトリとは別の練習用リポジトリを作ります。

GitHubや公開はまだ使いません。
自分のPCの中だけでWebページを作ります。

## 練習用リポジトリを作る

```bash
mkdir -p ~/vibe-practice/browser-basics
cd ~/vibe-practice/browser-basics
git init
git config user.name "Vibe Coding Learner"
git config user.email "learner@example.com"
git status
```

この章では、ここから3つのファイルを新しく作ります。
`cat > ファイル <<'EOF'` は上書きなので、すでに同じ名前のファイルがある場合は、実行前に中身を確認してから進めます。

## HTMLを作る

`index.html` を作ります。

```bash
cat > index.html <<'EOF'
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vibe Practice</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main class="page">
      <h1>Vibe Practice</h1>
      <p id="message">ブラウザで小さく作る練習です。</p>
      <button id="change-button" type="button">表示を変える</button>
    </main>
    <script src="app.js"></script>
  </body>
</html>
EOF
```

## CSSを作る

`styles.css` を作ります。

```bash
cat > styles.css <<'EOF'
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f6f8fa;
  color: #24292f;
}

.page {
  max-width: 640px;
  margin: 48px auto;
  padding: 24px;
  background: white;
  border: 1px solid #d0d7de;
}

button {
  padding: 8px 12px;
}

.changed {
  color: #0969da;
  font-weight: 700;
}
EOF
```

## JavaScriptを作る

`app.js` を作ります。

```bash
cat > app.js <<'EOF'
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

button.addEventListener("click", () => {
  message.textContent = "JavaScriptで表示を変えました。";
  message.classList.add("changed");
});
EOF
```

## ブラウザで開く

ファイルマネージャーから `index.html` を開くか、ブラウザのアドレス欄にファイルのパスを入れます。

macOSでは、ターミナルから次で開ける場合があります。

```bash
open index.html
```

WSL Ubuntuでは、Windows側のブラウザでファイルを開く方法が環境によって異なります。
無理にコマンドで開かず、ファイルマネージャーやブラウザから開いて構いません。
WSL UbuntuからWindowsのエクスプローラーで現在のディレクトリを開ける場合は、次も使えます。

```bash
explorer.exe .
```

開いたフォルダで `index.html` をダブルクリックします。

## 何が起きたのか

`index.html` がページの構造を持っています。
`styles.css` が見た目を整えています。
`app.js` がボタンを押したときの動きを付けています。

第1部で学んだファイル、パス、作業ディレクトリがここで必要になります。
ブラウザに開かせるファイルを間違えると、違うページを見ていることになります。

## 運用者の視点

画面が変わらないときは、次を確認します。

- `index.html` を開いているか
- `styles.css` のファイル名が合っているか
- `app.js` のファイル名が合っているか
- ブラウザを再読み込みしたか
- Consoleにエラーが出ていないか

いきなりAIに「動きません」とだけ言うのではなく、確認したことを添えます。

## AIに聞いてみよう

```text
次の3ファイルでローカルページを作りました。

- index.html
- styles.css
- app.js

それぞれの役割と、ブラウザでどの順番で読み込まれるのかを説明してください。
まだファイルは変更しないでください。
```

## commitポイント

変更を確認します。

```bash
git status
git diff
```

問題なければcommitします。

```bash
git add index.html styles.css app.js
git status
git diff --staged
```

3ファイルだけがcommit候補になっているか確認します。

問題なければcommitします。

```bash
git commit -m "Add local browser page"
```

## 次へ

次は、DOMとイベントで画面を動かします。

- [03-dom-events.md](03-dom-events.md)
