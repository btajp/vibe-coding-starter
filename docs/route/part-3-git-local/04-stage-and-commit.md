---
slug: /route/part-3-git-local/stage-and-commit
title: 選んでcommitする
---

# 選んでcommitする

## この章でできるようになること

`git add` と `git commit` を使い、変更を意味のある単位で記録できるようになります。

GitHubへ送る操作はまだ行いません。
この章では、自分のPCの中だけで履歴を作ります。

## まず知っておくこと

Gitでは、変更をすぐcommitするのではなく、まずcommitに含める変更を選びます。

```text
作業ツリー
→ 実際のファイルが変わっている場所

ステージ
→ 次のcommitに含めるものを置く場所

commit
→ その時点の変更を記録したもの
```

`git add` は、変更をステージに載せる操作です。
`git commit` は、ステージに載せた変更を履歴として記録する操作です。

## commit用の名前とメールを設定する

Gitでcommitするには、commitを書いた人の名前とメールアドレスが必要です。

ここでは練習用リポジトリだけに設定します。

```bash
cd ~/vibe-practice/git-local
git config user.name "Vibe Coding Learner"
git config user.email "learner@example.com"
```

これはこの練習用リポジトリ内だけの設定です。
GitHubに公開するメールアドレスの考え方は、第7部で扱います。

確認します。

```bash
git config user.name
git config user.email
```

## 変更をステージする

状態を確認します。

```bash
git status
```

`memo.txt` を次のcommitに含めます。

```bash
git add memo.txt
```

もう一度状態を確認します。

```bash
git status
```

表示が変わっているはずです。
Gitは、`memo.txt` が次のcommitに入る状態だと教えてくれます。

## commitする

commitします。

```bash
git commit -m "Add practice memo"
```

履歴を確認します。

```bash
git log --oneline
```

1行の履歴が見えれば成功です。

## 何が起きたのか

`git add` で、変更を次のcommitに含める候補にしました。
`git commit` で、その候補を履歴として記録しました。

第0部では、Gitをcloneのために使いました。
ここでは、Gitを「自分の変更を記録する道具」として使っています。

## commitメッセージ

commitメッセージは、その変更が何をしたかを短く書きます。

よい例:

```text
Add practice memo
```

あまりよくない例:

```text
fix
```

```text
いろいろ変更
```

後から履歴を見たときに、何をしたcommitかわかるようにします。

## 運用者の視点

commitは、後から戻ったり、理由を確認したりするための記録です。

AIが大量に変更した後に、何も確認せず大きなcommitにすると、問題が起きたときに戻りにくくなります。
小さく、意味のある単位でcommitします。

## AIに聞いてよいこと

```text
git status と git diff の結果を見て、
次のcommitに含めるべき変更を提案してください。

ただし、まだ git add や git commit は実行しないでください。
commitメッセージ案も3つ出してください。
```

## commitポイント

この章のcommitポイントは、練習用リポジトリの中です。

```bash
git status
git log --oneline
```

教材リポジトリに戻ったときは、別のリポジトリであることを忘れないでください。

## 次へ

次は、`.gitignore` と秘密情報を扱います。

- [05-gitignore-and-secrets.md](05-gitignore-and-secrets.md)

