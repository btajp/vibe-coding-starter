---
slug: /route/part-1-pc-os-cli/understand-clone
title: GitHubからcloneした状態を理解する
---

# GitHubからcloneした状態を理解する

## この章でできるようになること

GitHub上のリポジトリをローカルPCにcloneした状態を理解し、AIエージェントがどのリポジトリを見ているかを確認できるようになります。

第0部で `git clone` を実行しました。
この章では「あれで何が手元に来たのか」を回収します。

## まず知っておくこと

GitHubは、リポジトリを置けるWebサービスです。
リポジトリは、ファイル一式と変更履歴をまとめて扱う単位です。

第0部では、次のURLから教材リポジトリをcloneしました。

```text
https://github.com/btajp/vibe-coding-starter.git
```

cloneは、GitHub上のリポジトリをローカルPCに複製する操作です。

```text
GitHub上のリポジトリ
  ↓ git clone
ローカルPC上のリポジトリ
```

ここでは、Gitの詳しい変更管理までは扱いません。
それは第3部で扱います。
この章では、まず「GitHub上にあった教材が、自分のPCのどこに置かれたか」を理解します。

## ローカルリポジトリとリモートリポジトリ

ローカルリポジトリは、自分のPC上にあるリポジトリです。

この教材では、次の場所に置きました。

```text
~/src/github.com/btajp/vibe-coding-starter
```

リモートリポジトリは、GitHub上にあるリポジトリです。

```text
https://github.com/btajp/vibe-coding-starter
```

第0部の時点では、GitHubへpushする必要はありません。
まず、ローカルに教材があり、AIエージェントがそれを読める状態を作ることが目的でした。

## やってみる

教材リポジトリへ移動します。

```bash
cd ~/src/github.com/btajp/vibe-coding-starter
pwd
```

中身を確認します。

```bash
ls
```

次のようなファイルやディレクトリが見えるはずです。

```text
README.md
AGENTS.md
CLAUDE.md
docs
site
templates
```

次に、Gitリポジトリであることを確認します。

```bash
ls -la .git
```

`.git` が存在する場合、このディレクトリはGitリポジトリです。
`.git` の中身はGitが管理に使う重要な情報です。
よくわからないまま削除しないでください。

## どのGitHubリポジトリから来たか確認する

次のコマンドで、リモートリポジトリの情報を確認できます。

```bash
git remote -v
```

次のようなURLが表示されれば、この教材リポジトリにつながっています。

```text
https://github.com/btajp/vibe-coding-starter.git
```

SSHでcloneしている場合は、次のような形式の場合もあります。

```text
git@github.com:btajp/vibe-coding-starter.git
```

どちらも、GitHub上の同じリポジトリを指す形式です。

## 主要ファイルの役割

このリポジトリには、いくつか重要なファイルがあります。

```text
README.md
```

リポジトリの入口になる説明です。

```text
docs/route/index.md
```

学習ルート全体のシラバスです。

```text
docs/route/part-0-start/
```

第0部の本文です。

```text
docs/route/part-1-pc-os-cli/
```

第1部の本文です。

```text
AGENTS.md
```

CodexなどのAIコーディングエージェント向けの指示です。

```text
CLAUDE.md
```

Claude Code向けの指示です。

AIエージェントは、こうしたファイルを読んで、リポジトリの目的や作業方針を理解します。

## AIエージェントが見ている場所

第0部では、教材リポジトリでCodexまたはClaude Codeを起動しました。

重要なのは、どのディレクトリで起動したかです。

教材について質問したいときは、教材リポジトリで起動します。

```bash
cd ~/src/github.com/btajp/vibe-coding-starter
codex
```

または:

```bash
cd ~/src/github.com/btajp/vibe-coding-starter
claude
```

別のリポジトリで起動すると、AIが見ているファイルも変わります。
AIへの依頼がうまく伝わらないときは、まず `pwd` で場所を確認します。

## `Do you trust the contents of this directory?`

第0部でAIエージェントを起動したとき、次のような意味の確認が出ることがあります。

```text
Do you trust the contents of this directory?
```

これは、このディレクトリの内容やAI向け指示ファイルを信頼してよいかの確認です。

公式の教材リポジトリからcloneしたものであれば、信頼して進めて構いません。
ただし、出どころがわからないリポジトリでは、すぐに許可しないでください。

AI向け指示ファイルには、AIにどう振る舞ってほしいかが書かれていることがあります。
悪意あるリポジトリでは、危険な指示が含まれている可能性もあります。

## 教材リポジトリと成果物リポジトリ

第0部でも確認したように、この教材では教材リポジトリと成果物リポジトリを分けます。

教材リポジトリ:

```text
~/src/github.com/btajp/vibe-coding-starter
```

成果物リポジトリ:

```text
~/src/github.com/あなたのGitHubユーザー名/my-vibe-coding-portfolio
```

第1部の時点では、まだ成果物リポジトリを作りません。
ただし、教材を読む場所と、自分の作品を作る場所は別になる、という考え方だけ先に持っておきます。

## 何が起きたのか

`git clone` によって、GitHub上の教材リポジトリが、自分のPCの中に複製されました。

```text
GitHub
  btajp/vibe-coding-starter
    ↓ clone
ローカルPC
  ~/src/github.com/btajp/vibe-coding-starter
```

その場所でAIエージェントを起動すると、AIは教材リポジトリのファイルを文脈として使いやすくなります。

## 運用者の視点

AIに頼む前に、次を確認する習慣を持ちます。

- 今いるディレクトリはどこか
- そこは教材リポジトリか、成果物リポジトリか
- どのGitHubリポジトリからcloneしたものか
- AIにファイル変更を許可してよい状態か

第1部ではまだ、Gitで変更を記録する操作は本格的に扱いません。
Gitの変更確認やcommitは、第3部で扱います。

## AIに聞いてよいこと

```text
このリポジトリで、まだファイルを変更せずに状態を確認したいです。

pwd、ls、git remote -v の結果をもとに、
ここが教材リポジトリかどうかを判断してください。
また、README.md、docs/route/index.md、AGENTS.md、CLAUDE.md の役割を短く説明してください。
```

```text
AIエージェントを起動したときに、
Do you trust the contents of this directory?
という確認が出ました。

これは何を確認しているのか、初心者向けに説明してください。
信頼してよいリポジトリか判断するために、先に確認することも教えてください。
```

## commitポイント

この章では、確認コマンドだけを使います。
教材リポジトリのファイルを編集していなければ、commitは不要です。

AIにリポジトリの説明を頼む場合も、ファイル変更を許可していなければcommitは不要です。

## 次へ

次は、秘密情報とログイン状態を混同しないための整理をします。

- [09-secrets-and-accounts.md](09-secrets-and-accounts.md)
