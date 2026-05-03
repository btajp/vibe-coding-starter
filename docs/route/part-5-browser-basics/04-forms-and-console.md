---
slug: /route/part-5-browser-basics/forms-and-console
title: フォームとConsoleエラーを見る
---

# フォームとConsoleエラーを見る

## この章でできるようになること

入力フォームの値をJavaScriptで読み、Consoleに出るエラーを確認できるようになります。

## まず知っておくこと

ブラウザにはDevToolsがあります。
その中のConsoleには、JavaScriptのエラーやログが表示されます。

エラーが出たとき、AIに「動きません」とだけ言うより、Consoleのエラーを伝えるほうが具体的です。

## フォームを追加する

`index.html` の `<button>` の下に、フォームを追加します。

```html
<form id="note-form">
  <label for="note-input">メモ</label>
  <input id="note-input" name="note" type="text">
  <button type="submit">メモを表示</button>
</form>
<p id="note-output"></p>
```

全体の位置が不安なら、AIに「このHTMLのどこに追加すべきか、まだ編集せずに教えて」と聞いて構いません。

## JavaScriptで値を読む

`app.js` に次を追加します。

```js
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const output = document.querySelector("#note-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.textContent = input.value;
});
```

ブラウザを再読み込みし、入力欄に文字を入れて送信します。

## event.preventDefault

フォームは、通常送信時にページ遷移や再読み込みを行うことがあります。

`event.preventDefault()` は、その標準動作を止めます。
今回は、ページを再読み込みせずに、入力値を画面に表示したいので使っています。

## Consoleエラーを作って読む

練習として、あえて間違えてみます。

`#note-output` を `#missing-output` に変えると、JavaScriptが要素を見つけられなくなります。

ブラウザを再読み込みし、Consoleを見ます。
エラーが出たら、元に戻します。

この練習の目的は、エラーを怖がらずに読むことです。

## 何が起きたのか

JavaScriptは、HTMLの要素を探して、イベントが起きたときに処理を実行しています。

指定したIDがHTMLに存在しない場合、取得結果が `null` になり、後続の処理でエラーになることがあります。

Consoleは、その手がかりを表示します。

## 運用者の視点

エラー相談では、次を伝えます。

- 何をしたときに起きたか
- Consoleに出たエラー文
- 関係するHTML
- 関係するJavaScript
- 期待した動き
- 実際の動き

秘密情報は貼りません。
フォームに個人情報を入れている場合は、内容を伏せてください。

## AIに聞いてみよう

```text
ブラウザのConsoleに次のエラーが出ました。

ここにエラー文を貼る

関係しそうなHTMLとJavaScriptも貼ります。
期待した動きと実際の動きを分けて説明します。

原因候補と、次に確認することを教えてください。
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
git add index.html app.js
git commit -m "Add note form"
```

## 次へ

次は、ローカルサーバーとTypeScriptの入口を扱います。

- [05-localhost-and-typescript.md](05-localhost-and-typescript.md)

