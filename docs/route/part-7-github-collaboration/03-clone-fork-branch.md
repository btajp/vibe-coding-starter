---
slug: /route/part-7-github-collaboration/clone-fork-branch
title: forkをcloneし、作業branchを作る
---

# forkをcloneし、作業branchを作る

## この章でできるようになること

自分のforkをローカルにcloneし、Pull Request用の作業branchを作れるようになります。

## まず知っておくこと

第0部でcloneした教材リポジトリは、読むための場所でした。

第7部では、PR練習用として自分のforkを別の場所にcloneします。
同じリポジトリ名でも、作業目的が違うため分けます。

## PR練習用の場所を作る

```bash
mkdir -p ~/vibe-practice/github-pr
cd ~/vibe-practice/github-pr
ls
```

自分のforkをcloneします。
`ls` で `vibe-coding-starter` がすでにある場合は、削除せずに止まります。
以前にcloneしたPR練習用リポジトリかもしれません。

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/vibe-coding-starter.git
cd vibe-coding-starter
pwd
```

`YOUR_GITHUB_USERNAME` は自分のGitHubユーザー名に置き換えます。

## remoteを確認する

```bash
git remote -v
```

`origin` が自分のforkを指していることを確認します。

元の教材リポジトリも `upstream` として登録します。

```bash
git remote add upstream https://github.com/btajp/vibe-coding-starter.git
git remote -v
```

`upstream` がすでに存在すると言われた場合は、追加済みです。
その場合は `git remote -v` の表示を見て、URLが元の教材リポジトリになっているか確認します。

```text
origin
→ 自分のfork

upstream
→ 元の教材リポジトリ
```

## commit用メールを設定する

GitHubのメールプライバシー設定で確認した値を使います。
ここでも、`YOUR_GITHUB_USERNAME` と `YOUR_GITHUB_NOREPLY_EMAIL` は必ず自分の値に置き換えます。

```bash
git config user.name "YOUR_GITHUB_USERNAME"
git config user.email "YOUR_GITHUB_NOREPLY_EMAIL"
```

設定を確認します。

```bash
git config user.name
git config user.email
```

## 作業branchを作る

Pull Request用のbranchを作ります。

```bash
git switch -c add-review-YOUR_GITHUB_USERNAME
```

branchを確認します。

```bash
git branch
```

## 何が起きたのか

自分のforkをローカルにcloneし、作業branchを作りました。

第3部ではローカルだけでcommitしました。
この部では、自分のforkへpushし、元リポジトリにPull Requestを出します。

## 運用者の視点

PR作業では、どのremoteにpushするかが重要です。

```bash
git remote -v
git branch
git status
```

この3つを見てから作業します。

## AIに聞いてみよう

```text
git remote -v、git branch、git status の結果を見て、
今のリポジトリがPR練習用として正しい状態か確認してください。

originが自分のfork、upstreamが元リポジトリであること、
作業branchにいることを確認したいです。
まだファイルは変更しないでください。
```

## commitポイント

この章では、まだファイルを編集していません。
commitは不要です。

## 次へ

次は、感想ファイルを追加します。

- [04-add-review-file.md](04-add-review-file.md)
