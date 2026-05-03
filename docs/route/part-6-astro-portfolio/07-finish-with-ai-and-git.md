---
slug: /route/part-6-astro-portfolio/finish-with-ai-and-git
title: AIとGitで仕上げる
---

# AIとGitで仕上げる

## この章でできるようになること

Astroポートフォリオを、AIのレビューとGit差分で確認し、ローカルで一区切りのcommitを作れるようになります。

## まず知っておくこと

第6部では、GitHubへpushしません。
第8部で公開する前に、まずローカルで成果物として整えます。

第3部で学んだ流れを使います。

```text
git status
git diff
必要な変更だけadd
commit
```

## 最終レビューを頼む

AIに、次のように頼みます。

```text
このAstroポートフォリオを、第6部の完了前レビューとして確認してください。

確認したい観点:
- 教材リポジトリではなく成果物リポジトリとして成立しているか
- 公開してよい情報だけか
- README、学習ログ、トップページが揃っているか
- npm run build が通る前提になっているか
- 第8部でGitHub Pagesに進む前に直すべきことはあるか

まだ git push やGitHub設定はしないでください。
```

## 変更差分を確認する

```bash
cd ~/vibe-projects/vibe-portfolio
git status
git diff
```

必要ならbuildも再確認します。

```bash
npm run build
```

## commitする

意図した変更だけをcommitします。
まず、含めるファイルを確認します。

```bash
git status
```

`node_modules`、`dist/`、`.env`、秘密情報が含まれていたら止まります。
問題なければ、次のcommitに含めます。

```bash
git add .
git status
git diff --staged --stat
```

`git diff --staged --stat` で、次のcommitに入るファイルの概要を確認します。
意図した変更だけならcommitします。

```bash
git commit -m "Complete local portfolio draft"
```

## 何が起きたのか

第6部では、成果物ポートフォリオをローカルで作り、buildできる状態まで持ってきました。

第0部でNode.jsとnpmを入れたときは、AIエージェントを使う準備でした。
この部では、同じNode.jsとnpmをWeb制作のために使いました。

道具は同じでも、使う目的が変わっています。

## 運用者の視点

第8部で公開に進む前に、次を説明できるようにします。

- このリポジトリは何の成果物か
- どのコマンドで開発サーバーを起動するか
- どのコマンドでbuildするか
- 公開用ファイルはどこにできるか
- commit済みの変更は何か
- GitHubへまだpushしていないこと

ここまで説明できれば、第6部は完了です。

## AIに聞いてみよう

```text
第6部の完了確認をしてください。

私はAstroでローカルのポートフォリオを作りました。
node/npm、npm scripts、localhost、build、dist、README、学習ログ、公開前レビューについて、
次に進んでよいかチェックリストで確認してください。

まだGitHubへのpushや公開設定はしないでください。
```

## commitポイント

第6部の最後に確認します。

```bash
git status
git log --oneline
```

作業ツリーがcleanで、buildが通っていれば、第6部は一区切りです。

## 次へ

次は、GitHubで共同作業を体験する部に進みます。

- [第7部：GitHubで共同作業を体験する](../part-7-github-collaboration/index.md)
