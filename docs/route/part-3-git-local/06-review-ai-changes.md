---
slug: /route/part-3-git-local/review-ai-changes
title: AIが変えた内容をレビューする
---

# AIが変えた内容をレビューする

## この章でできるようになること

AIが変更したファイルを、`git status` と `git diff` で確認してからcommitする流れを説明できるようになります。

第2部で学んだ「まず説明、次に計画、最後に小さく変更」を、Gitの確認と組み合わせます。

## まず知っておくこと

AIに変更を頼んだ後は、必ず自分で確認します。

確認の基本は次です。

```bash
git status
git diff
```

変更ファイルと変更内容を確認して、理解できる単位でcommitします。

## AIに小さな変更を頼む

練習用リポジトリで、AIに小さな変更を頼む例です。

```text
~/vibe-practice/git-local の memo.txt に、
Gitで学んだことを1行だけ追記してください。

条件:
- memo.txt 以外は変更しない
- .env は読まない、変更しない
- 変更後に、何を変えたか説明してください
```

AIが編集できる環境でなければ、自分で追記して構いません。

```bash
printf "Review AI changes before commit\n" >> memo.txt
```

## 変更を確認する

状態を見ます。

```bash
git status
```

差分を見ます。

```bash
git diff
```

意図した1行だけが増えているか確認します。

もし、意図しないファイルが変わっていたら、commitする前に止まります。

## 変更を戻す

練習用リポジトリで、まだcommitしていない変更を戻すには `git restore` を使えます。

```bash
git restore memo.txt
```

ただし、これは未commitの変更を捨てます。
必要な内容があるなら、先にメモしてから実行します。

この章では、変更を残してcommitしても構いません。

## commitする

意図した変更なら、commitします。

```bash
git add memo.txt
git status
git diff --staged
```

`git status` で、`memo.txt` だけがcommit候補になっているか確認します。
`git diff --staged` で、次のcommitに入る内容が意図した1行だけか確認します。

問題なければcommitします。

```bash
git commit -m "Add review reminder"
```

履歴を確認します。

```bash
git log --oneline
```

## 何が起きたのか

AIが変更しても、commitするのは人間の判断です。

第0部では、AIエージェントを使い始める準備をしました。
第1部では、コマンドや作業場所を読みました。
第2部では、AIへの頼み方を段階化しました。
第3部では、その結果として変わったファイルをGitで確認して記録します。

この流れが、この教材でのVibe Codingの基本です。

## 運用者の視点

commit前レビューでは、次を見ます。

- 変更ファイルは意図通りか
- 差分を自分で説明できるか
- 秘密情報が入っていないか
- 1つのcommitに複数の目的が混ざっていないか
- 実行確認が必要な変更か

AIが書いたから安全、ではありません。
自分が確認したから記録できる、という順序です。

## AIに聞いてみよう

```text
git status と git diff の結果を見て、
AIが変更した内容をレビューしてください。

確認したい観点:
- 意図したファイルだけが変わっているか
- 秘密情報が含まれていないか
- commitを分けるべき変更が混ざっていないか
- commitメッセージは何がよいか

まだ git add、git commit、git push は実行しないでください。
```

## commitポイント

第3部の最後に、練習用リポジトリの履歴を確認します。

```bash
git log --oneline
git status
```

`git status` がcleanであれば、練習用リポジトリの作業は一区切りです。

## 次へ

次は、ローカルだけで小さく自動化する部に進みます。

- [第4部：ローカルだけで小さく自動化する](../part-4-local-automation/index.md)
