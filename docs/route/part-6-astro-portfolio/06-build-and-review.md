---
slug: /route/part-6-astro-portfolio/build-and-review
title: buildして公開前レビューをする
---

# buildして公開前レビューをする

## この章でできるようになること

`npm run build` で公開用ファイルを生成し、公開前に確認する観点を説明できるようになります。

## まず知っておくこと

Astroの開発サーバーで見えていても、公開用buildで失敗することがあります。

公開に進む前に、必ずbuildします。

## buildする

Astroプロジェクトに移動します。

```bash
cd ~/vibe-projects/vibe-portfolio
```

buildします。

```bash
npm run build
```

成功したら、`dist/` を確認します。

```bash
ls dist
```

`dist/` は公開用に生成されたファイルです。
通常、ソースとしてcommitする対象ではありません。
GitHub Pagesでの公開方法によって扱いが変わるため、第8部で改めて確認します。

## previewする

Astroには、build結果をローカルで確認するためのコマンドがあります。

```bash
npm run preview
```

表示されたURLをブラウザで開きます。
止めるときは `Ctrl+C` です。

## 公開前チェック

ブラウザで、次を確認します。

- トップページが表示されるか
- 文章が途中で切れていないか
- リンクが壊れていないか
- 学習ログへのリンクが動くか
- Consoleエラーがないか
- 本名、住所、勤務先、学校名など公開したくない情報がないか
- APIキー、トークン、秘密鍵がないか

リポジトリ側も確認します。

```bash
git status
git diff
```

## AIに公開前レビューを頼む

```text
Astroポートフォリオを公開前レビューしてください。

確認したい観点:
- 公開してよい情報だけか
- README、トップページ、学習ログの役割が分かれているか
- GitHub Pagesで公開する前に直すべき内容はあるか
- npm run build の結果をどう確認すべきか

まだ git push や公開設定はしないでください。
```

## 何が起きたのか

`npm run build` によって、Astroが公開用ファイルを生成しました。

第5部ではブラウザで直接HTMLを見ました。
第6部では、Astroがソースから公開用ファイルを作ります。
第8部では、このbuildをGitHub Actions上で実行し、GitHub Pagesへ公開します。

## 運用者の視点

公開前レビューでは、見た目だけではなく、情報と運用を確認します。

- 何が公開されるか
- どこから生成されるか
- buildは再現できるか
- 不要なファイルをcommitしていないか
- 秘密情報を含んでいないか

公開は、ボタンを押す作業ではなく、責任範囲を広げる作業です。

## commitポイント

buildで生成されたファイルではなく、ソース側の変更をcommitします。

```bash
git status
git diff
```

必要な変更があればcommitします。

```bash
git add README.md docs src
git commit -m "Review portfolio before publish"
```

## 次へ

次は、AIとGitで仕上げます。

- [07-finish-with-ai-and-git.md](07-finish-with-ai-and-git.md)

