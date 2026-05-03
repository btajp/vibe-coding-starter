---
slug: /route/part-7-github-collaboration/review-and-merge
title: reviewとmergeの流れを見る
---

# reviewとmergeの流れを見る

## この章でできるようになること

Pull Requestがreviewされ、修正され、mergeまたはcloseされる流れを説明できるようになります。

## まず知っておくこと

Pull Requestは、変更を提案する場所です。

PRでは、次のようなことが起きます。

- 自動チェックが走る
- 人間または自動化が内容を見る
- コメントが付く
- 修正を求められる
- mergeされる
- closeされる

どの流れでも、GitHub上に履歴が残ります。

## reviewコメントを読む

PRにコメントが付いたら、内容を読みます。

まず、コメントが何を求めているかを分けます。

- 返信だけでよい
- ファイルの修正が必要
- 意図がわからないので確認が必要

ファイルの修正が必要な場合は、ローカルで修正してcommitし、同じbranchへpushします。
新しいPRを作り直す必要はありません。

```bash
cd ~/vibe-practice/github-pr/vibe-coding-starter
git status
git branch
```

`git branch` で、前章で作った作業branchにいることを確認します。
違うbranchにいるまま修正すると、PRに反映されないことがあります。

ファイルを修正したら確認します。

```bash
git diff
git add reviews/YOUR_GITHUB_USERNAME.md
git diff --staged
git commit -m "Update review text"
git push
```

`git diff` で修正内容を確認し、`git diff --staged` でcommitに入る内容をもう一度確認します。
同じbranchへpushすると、GitHub上のPRも更新されます。

コメントが返信だけでよい内容なら、ファイルを変更せず、PR画面で返信します。
判断に迷う場合は、いきなり修正せず、先に確認のコメントを返します。

## mergeとは何か

mergeは、Pull Requestの変更を元リポジトリに取り込む操作です。

この教材リポジトリ側でmergeされると、自分の感想ファイルが元リポジトリに入ります。

ただし、PRは必ずmergeされるとは限りません。
形式が違う、内容が公開に適さない、運用上受け付けられないなどの場合は、修正依頼やcloseになることがあります。

## closeとは何か

closeは、Pull Requestを取り込まずに閉じる操作です。

closeされたからといって、学習が失敗したわけではありません。
共同作業では、提案が採用されないこともあります。

大事なのは、変更提案、review、修正、判断の流れを体験することです。

## 何が起きたのか

PRを出すと、自分のローカル作業が他者とのやり取りになります。

第3部では、自分のPCの中でcommitしました。
第7部では、そのcommitをGitHub上の会話に載せました。

GitHubは、単なる保存場所ではなく、変更について話す場所でもあります。

## 運用者の視点

reviewを受けたら、次を確認します。

- 指摘はどのファイルのどの行か
- 修正が必要か
- 反論ではなく確認が必要か
- 追加commitで対応するか
- PR本文やコメントで説明するか
- 同じbranchへpushしているか

AIに返答文を書かせても構いませんが、送る前に自分で確認します。

## AIに聞いてみよう

```text
Pull Requestにreviewコメントが付きました。

コメント内容を貼るので、
何を求められているのか、修正が必要か、返信だけでよいかを整理してください。

必要なら修正方針を提案してください。
まだファイルは変更しないでください。
パスワード、トークン、認証コードなどの秘密情報は貼りません。
```

## PRを更新したあとに確認する

修正した場合は、追加commitして同じbranchへpushします。

```bash
git status
git diff
git log --oneline -n 5
```

`git status` がcleanになっていること、直近のcommitが増えていることを確認します。
その後、PR画面で変更が反映されたか確認します。

## 次へ

次は、GitHub体験を振り返ります。

- [07-github-review.md](07-github-review.md)
