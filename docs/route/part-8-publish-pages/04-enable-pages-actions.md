---
slug: /route/part-8-publish-pages/enable-pages-actions
title: GitHub PagesをGitHub Actionsで公開する
---

# GitHub PagesをGitHub Actionsで公開する

## この章でできるようになること

GitHub PagesのSourceをGitHub Actionsにし、push後にActionsの実行結果を確認できるようになります。

## まず知っておくこと

GitHub Pagesには、公開元を選ぶ設定があります。

Astroのようにbuildが必要なサイトでは、GitHub ActionsでbuildしてPagesへdeployする構成がわかりやすいです。

## Pages設定を確認する

GitHub上の `vibe-portfolio` リポジトリを開きます。

SettingsからPagesの設定を開き、SourceとしてGitHub Actionsを選びます。

GitHubの画面は更新されることがあります。
迷ったら、GitHub公式ドキュメントのGitHub Pages設定を確認してください。

## pushする

ローカルで、設定変更のcommitがあることを確認します。

```bash
cd ~/vibe-projects/vibe-portfolio
git status
git log --oneline -n 3
```

pushします。

```bash
git push
```

## Actionsを見る

GitHubのActionsタブを開きます。

`Deploy to GitHub Pages` のworkflowが動いているはずです。

確認すること:

- workflowが開始したか
- build jobが成功したか
- deploy jobが成功したか
- PagesのURLが表示されたか

## 公開URLを開く

成功すると、次のようなURLで公開されます。

```text
https://YOUR_GITHUB_USERNAME.github.io/vibe-portfolio/
```

ブラウザで開いて確認します。

## 何が起きたのか

ローカルで作ったAstroポートフォリオをGitHubへpushしました。

pushをきっかけにGitHub Actionsが動き、Astroをbuildし、GitHub Pagesへdeployしました。

第6部でローカル実行した `npm run build` が、GitHub上でも行われています。

## 運用者の視点

公開後は、GitHub上で次を確認します。

- Actionsが成功しているか
- 公開URLが開けるか
- CSSや画像が読み込まれているか
- リンクが壊れていないか
- 公開してはいけない情報が出ていないか

公開URLを開けたら終わりではありません。
意図した内容だけが公開されているかを確認します。

## AIに聞いてみよう

```text
GitHub ActionsでAstroポートフォリオをGitHub Pagesへ公開しました。

Actionsのbuild/deploy結果、公開URL、画面表示を確認する観点を整理してください。
特に、CSSが当たらない、リンクが壊れる、404になる場合の見方も教えてください。
まだ追加のpushや設定変更はしないでください。
```

## commitポイント

この章では、前章で作ったcommitをpushします。
GitHub Actionsの結果と公開URLを確認して、メモしておきます。

## 次へ

次は、Actions失敗時にログを見ます。

- [05-actions-troubleshooting.md](05-actions-troubleshooting.md)

