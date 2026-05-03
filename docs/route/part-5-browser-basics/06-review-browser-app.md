---
slug: /route/part-5-browser-basics/review-browser-app
title: ブラウザアプリをAIとGitで見直す
---

# ブラウザアプリをAIとGitで見直す

## この章でできるようになること

作ったローカルページをAIにレビューさせ、Git差分とブラウザ表示で確認してからcommitできるようになります。

## まず知っておくこと

第5部では、HTML、CSS、JavaScriptだけでページを作りました。

最後に、AIとGitを使って見直します。
第2部で学んだように、まずレビューを頼み、必要なら小さな変更だけを頼みます。

## AIにレビューさせる

次のように頼みます。

```text
~/vibe-practice/browser-basics のローカルページをレビューしてください。

確認したい観点:
- HTMLの構造がわかりやすいか
- CSSが最低限読みやすいか
- JavaScriptがどの要素を操作しているかわかるか
- Consoleエラーが出そうな箇所はないか
- 初学者が次に学ぶべき点は何か

まだファイルは変更しないでください。
```

## 小さな変更だけ頼む

たとえば、空欄のまま送信したときの表示を改善するなら、次のように頼みます。

```text
app.js だけを変更して、
フォームが空欄のときは「メモを入力してください」と表示するようにしてください。

条件:
- index.html と styles.css は変更しない
- Consoleエラーが出ないようにする
- 変更後に何を変えたか説明する
```

AIが変更したら、ブラウザで確認します。

## Git差分を確認する

```bash
cd ~/vibe-practice/browser-basics
git status
git diff
```

差分を見て、次を確認します。

- 意図したファイルだけが変わっているか
- HTML、CSS、JavaScriptの役割が崩れていないか
- 秘密情報や個人情報が入っていないか
- ブラウザで動くか
- Consoleエラーが出ていないか

## commitする

問題なければcommitします。

```bash
git add app.js
git commit -m "Handle empty note input"
```

履歴を確認します。

```bash
git log --oneline
git status
```

## 何が起きたのか

第5部では、ローカルだけでWebページを作りました。

ここまでの流れは次です。

```text
HTML/CSS/JavaScriptの役割を分ける
↓
ローカルページを作る
↓
DOMとイベントで動かす
↓
フォームとConsoleを見る
↓
localhostとTypeScriptの入口を知る
↓
AIとGitで見直す
```

第6部では、この基礎の上にAstroを使って、成果物ポートフォリオを作ります。

## 運用者の視点

ブラウザで動くものは、見た目だけでなく動作確認も必要です。

- 画面に表示されるか
- クリックで動くか
- 入力が扱えるか
- Consoleエラーがないか
- 変更差分を説明できるか
- 公開してよい情報だけか

第6部以降は、公開に近づきます。
ここでローカル確認の習慣を作っておきます。

## AIに聞いてみよう

```text
このローカルページを、第6部でAstroポートフォリオに進む前の練習としてレビューしてください。

確認したい観点:
- HTML、CSS、JavaScriptの役割を分けて説明できるか
- Consoleエラーがないか
- Git差分を見てからcommitできているか
- 次にAstroで学ぶときに引き継ぐべき考え方は何か

まだファイルは変更しないでください。
```

## commitポイント

第5部の最後に、練習用リポジトリをcleanにします。

```bash
git status
```

未commitの変更があれば、commitするか、不要なら戻します。

## 次へ

次は、Astroで成果物ポートフォリオを作る部に進みます。

- [第6部：Astroで成果物ポートフォリオを作る](../part-6-astro-portfolio/index.md)
