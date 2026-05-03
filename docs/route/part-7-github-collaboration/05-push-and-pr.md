---
slug: /route/part-7-github-collaboration/push-and-pr
title: pushしてPull Requestを作る
---

# pushしてPull Requestを作る

## この章でできるようになること

自分のforkへpushし、元の教材リポジトリへPull Requestを作れるようになります。

## まず知っておくこと

`git push` は、ローカルのcommitをリモートへ送る操作です。

この章では、自分のforkである `origin` にpushします。
元の教材リポジトリへ直接pushするわけではありません。

## push前に確認する

```bash
cd ~/vibe-practice/github-pr/vibe-coding-starter
git status
git log --oneline -n 3
git remote -v
git branch
```

確認したいこと:

- 作業ツリーがcleanか
- 感想ファイル追加のcommitがあるか
- `origin` が自分のforkか
- 作業branchにいるか

## forkへpushする

```bash
git push -u origin add-review-YOUR_GITHUB_USERNAME
```

`YOUR_GITHUB_USERNAME` は、自分のbranch名に合わせます。

認証を求められたら、GitHubの案内に従います。
トークン、認証コード、秘密鍵をAIに貼ってはいけません。

## Pull Requestを作る

GitHubの画面で、自分のforkから元のリポジトリへPull Requestを作ります。

向きは次です。

```text
base repository
→ btajp/vibe-coding-starter

head repository
→ YOUR_GITHUB_USERNAME/vibe-coding-starter
```

変更ファイルが `reviews/YOUR_GITHUB_USERNAME.md` だけか確認します。

PR本文には、公開してよい範囲で短く書きます。

```text
第7部の学習ワークとして、感想ファイルを追加しました。
公開してよい内容だけであることを確認済みです。
```

## PRは必ずmergeされるとは限らない

Pull Requestは、変更の提案です。

送れば必ずmergeされるわけではありません。
内容確認、形式、重複、運用方針によって、修正依頼やcloseになることもあります。

これは失敗ではありません。
共同作業では普通に起きることです。

## 何が起きたのか

ローカルのcommitを自分のforkへpushしました。
その後、GitHub上で元リポジトリへのPull Requestを作りました。

第0部では、GitHubから教材を受け取りました。
第7部では、GitHubへ変更を提案しました。

## 運用者の視点

push前とPR作成前に、同じことを2回確認します。

- どのbranchか
- どのremoteか
- どのファイルが変わったか
- 公開してよい内容か
- 秘密情報がないか

GitHub上のPR画面で差分を見られるので、そこでも確認します。

## AIに聞いてよいこと

```text
Pull Requestを作る前に確認したいです。

git status、git log --oneline -n 3、git remote -v、git branch の結果と、
PR画面の変更ファイル一覧を見て、
送ってよい状態か確認してください。

まだ git push やPR作成は実行しないでください。
```

## commitポイント

この章では、すでにcommit済みの変更をpushします。
push後は、GitHub上のPR URLを控えておきます。

## 次へ

次は、reviewとmergeの流れを見ます。

- [06-review-and-merge.md](06-review-and-merge.md)

