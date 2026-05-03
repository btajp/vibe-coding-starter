---
slug: /route/part-8-publish-pages
title: 第8部：GitHub Pagesで公開・運用する
---

# 第8部：GitHub Pagesで公開・運用する

第8部では、第6部で作ったAstroポートフォリオをGitHubに置き、GitHub Actionsでbuildし、GitHub Pagesで公開します。

第7部では、この教材リポジトリへのPull RequestでGitHubの共同作業を体験しました。
ここでは、自分の成果物リポジトリを公開し、公開後の修正や維持まで扱います。

## この部のゴール

自分のAstroポートフォリオをGitHub Pagesで公開し、GitHub Actionsの結果を確認し、公開後に修正できるようになることがゴールです。

公開したら終わりではありません。
何が公開され、どうbuildされ、失敗したらどこを見るかまで理解します。

## この部で回収すること

第8部では、これまで学んだ内容を公開に接続します。

- 成果物リポジトリと教材リポジトリの区別
- `remote`
- `git push`
- GitHub上のリポジトリ作成
- 公開リポジトリの注意点
- Astroの `site` と `base`
- GitHub Actions
- GitHub Pages
- Actionsログの見方
- `npm run build`
- 公開後の修正
- 維持コスト

## 予定する章立て

### 1. GitHub上に成果物リポジトリを作る

第6部で作ったローカルのAstroポートフォリオに対応するGitHubリポジトリを作ります。

### 2. remoteを接続してpushする

ローカルリポジトリに `origin` を設定し、GitHubへpushします。

### 3. AstroをGitHub Pages向けに設定する

`astro.config.mjs` の `site` と `base` を設定し、GitHub Actionsのworkflowを追加します。

### 4. GitHub PagesをGitHub Actionsで公開する

GitHubのPages設定でSourceをGitHub Actionsにし、Actionsの実行結果を確認します。

### 5. Actions失敗時にログを見る

build失敗、base設定ミス、package-lock不足、リンク切れなどを切り分けます。

### 6. 公開後に修正して再デプロイする

公開後に内容を直し、commit、push、Actions、Pages反映まで確認します。

### 7. 卒業レビューと次の学習パス

第0部から第8部までを振り返り、次に学ぶ方向を決めます。

## 公式情報へのリンク

GitHub PagesやAstroの公開手順は更新されることがあります。
実際に設定する前に、公式ドキュメントも確認してください。

- [Astro: GitHub Pagesへデプロイする](https://docs.astro.build/ja/guides/deploy/github/)
- [GitHub Docs: GitHub Pagesでcustom workflowsを使う](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

