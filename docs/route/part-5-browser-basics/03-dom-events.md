---
slug: /route/part-5-browser-basics/dom-events
title: DOMとイベントで画面を動かす
---

# DOMとイベントで画面を動かす

## この章でできるようになること

JavaScriptでHTML要素を取得し、クリックイベントで画面を更新できるようになります。

## まず知っておくこと

ブラウザはHTMLを読み、ページの構造をDOMとして扱います。
DOMはDocument Object Modelの略です。
DOMは、JavaScriptからHTML要素を操作するための入口だと考えてください。

この章では、次を使います。

- `document.querySelector`
- `addEventListener`
- `textContent`
- `classList`

## 現在のJavaScriptを読む

`app.js` は次のような内容です。

```js
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

button.addEventListener("click", () => {
  message.textContent = "JavaScriptで表示を変えました。";
  message.classList.add("changed");
});
```

`document.querySelector("#message")` は、`id="message"` の要素を取得します。

`addEventListener("click", ...)` は、クリックされたときの処理を登録します。

`textContent` は、要素の文字を変更します。

`classList.add("changed")` は、CSSのクラスを追加します。

## 回数を数える

クリック回数を数えるように変更します。

`app.js` を次の内容にします。
このコマンドは `app.js` を上書きします。
前章の内容をクリック回数版に置き換える操作です。

```bash
cat > app.js <<'EOF'
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

let count = 0;

button.addEventListener("click", () => {
  count += 1;
  message.textContent = `クリック回数: ${count}`;
  message.classList.add("changed");
});
EOF
```

ブラウザを再読み込みして、ボタンを押します。

## 変数と文字列

`let count = 0;` は、クリック回数を入れる変数です。

`count += 1;` は、countを1増やします。

`` `クリック回数: ${count}` `` は、文字列の中に変数を埋め込む書き方です。
テンプレートリテラルと呼ばれます。

## 何が起きたのか

ボタンが押されるたびに、JavaScriptがcountを増やし、HTML上の文字を更新しています。

HTMLファイル自体を書き換えているわけではありません。
ブラウザ上の表示をJavaScriptが変更しています。

## Consoleで確認する

`app.js` に一時的にログを足します。

```js
console.log(count);
```

たとえば、`count += 1;` の直後に入れると、クリックするたびに増えた回数を確認できます。
DevToolsのConsoleを見ると、クリックするたびに数字が出ます。

確認が終わったら、必要のないログは消します。
commit前の `git diff` で、確認用の `console.log(count);` が残っていないか見ます。

## 運用者の視点

画面が動かないときは、次を切り分けます。

- JavaScriptファイルが読み込まれているか
- `querySelector` の指定がHTMLと合っているか
- Consoleにエラーが出ていないか
- ボタンのIDが間違っていないか

AIに相談するときは、HTML、JavaScript、Consoleのエラーをセットで伝えると具体的になります。

## AIに聞いてみよう

```text
次のJavaScriptを説明してください。

ここに app.js の内容を貼る

特に、document.querySelector、addEventListener、let、textContent、classList を、
ブラウザ上の動きと結びつけて説明してください。
まだファイルは変更しないでください。
```

## commitポイント

差分を確認します。

```bash
git status
git diff
```

問題なければcommitします。

```bash
git add app.js
git status
git diff --staged
```

確認用の `console.log(count);` が残っていないことも見ます。

問題なければcommitします。

```bash
git commit -m "Add click counter"
```

## 次へ

次は、フォームとConsoleエラーを扱います。

- [04-forms-and-console.md](04-forms-and-console.md)
