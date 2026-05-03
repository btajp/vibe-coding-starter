---
slug: /route/part-1-pc-os-cli
title: 第1部：PC・OS・CLIの意味を回収する
---

# 第1部：PC・OS・CLIの意味を回収する

第1部では、第0部で実行したセットアップ操作の意味を回収します。

第0部では、AIエージェントを早く使い始めるために、Homebrew、apt、Git、Node.js、npm、Codex、Claude Codeなどを先に導入しました。
ここでは、それらを「なんとなく入れた道具」のままにせず、PC、OS、ファイル、パス、ターミナル、シェル、PATH、権限、パッケージ管理の観点から整理します。

## この部のゴール

自分がどの環境で、どのディレクトリにいて、何のためにコマンドを実行しているのかを説明できるようになることがゴールです。

また、AIが提案したコマンドをそのまま貼り付けるのではなく、実行前に危険性や影響範囲を一度確認できる状態を目指します。

## この部で回収すること

第1部では、まず第0部で実行した操作を棚卸しします。
そのうえで、操作の意味をPC、OS、CLIの基礎に分解して理解します。

第0部で特に回収が必要な操作は次です。

- `wsl --install -d Ubuntu`
- `pwd`、`ls`、`cd`、`mkdir`
- Homebrewのインストール
- `brew install ...`
- `sudo apt update`
- `sudo apt install ...`
- `/bin/bash -c "$(curl ...)"`
- `echo ... >> ~/.zprofile`
- `echo ... >> ~/.zshrc`
- `eval "$(...)"` と `brew shellenv`
- `chsh -s "$(command -v zsh)"`
- `npm install -g ...`
- `git clone ...`
- `codex` または `claude` の起動
- `Do you trust the contents of this directory?` の確認

## 予定する章立て

### 1. 第0部で何をしたのかを棚卸しする

第0部で実行したコマンドを見返し、何をインストールしたのか、どの設定ファイルを変えたのか、どのディレクトリに移動したのかを整理します。

ここでは、まだ細かい仕組みを完全に説明できなくて構いません。
「何をしたか」と「どこに影響したか」を分けて見られるようにします。

### 2. ファイル、ディレクトリ、パスを読む

- ファイル、フォルダ、拡張子
- パス、絶対パス、相対パス、ホームディレクトリ、`~`、`.`、`..`
- ユーザー名、ホームディレクトリ、作業ディレクトリ
- `~/src/github.com/btajp/vibe-coding-starter` が何を表しているか
- 教材リポジトリと成果物リポジトリを分ける理由

### 3. macOS、Windows、WSL Ubuntuの関係を整理する

- macOS、Windows、WSL Ubuntu、Linux、UNIXの関係
- PowerShell、Windows Terminal、Ubuntuターミナルの違い
- WSL Ubuntuの `/home/...` と `/mnt/c/Users/...` の違い
- Windows側で作業しているのか、Ubuntu側で作業しているのかの見分け方
- macOSとWSL Ubuntuで手順が分かれた理由

### 4. ターミナル、CLI、シェル、基本コマンドを読む

- ターミナル、CLI、シェル、zsh、bash
- `pwd`、`ls`、`cd`、`mkdir` などの基本コマンド
- コマンド、オプション、引数、標準出力、エラー表示の基本
- `--version` で確認する意味
- `command not found`、`Permission denied`、`No such file or directory` の見方

### 5. 危ないコマンドと権限を先に見分ける

- `sudo`
- `rm`
- `chmod`
- `chown`
- `chsh`
- `curl | sh`
- `/bin/bash -c "$(curl ...)"`
- 実行権限とは何か
- `chmod +x` と、実行してよいファイルの判断

### 6. PATHとシェル設定を理解する

- PATHとは何か
- コマンドが見つかる仕組み
- `command -v` でコマンドの場所を確認する意味
- `.zprofile` と `.zshrc`
- `echo ... >> ファイル`
- `eval`
- `$()`
- クォート
- `brew shellenv`
- Linuxbrewの配置と `/home/linuxbrew/.linuxbrew`

### 7. Homebrew、apt、npmを使い分ける

- Homebrew、apt、npmの違い
- `brew install`、`apt update`、`apt install`
- パッケージ、依存関係、バージョン確認
- `npm install -g` とグローバルインストール
- `sudo npm install -g ...` を避けたい理由
- Node.js、npm、Codex、Claude Codeの関係

### 8. GitHubからcloneした状態を理解する

- `git clone`、リポジトリURL、ローカルリポジトリ、リモートリポジトリ
- 教材リポジトリがローカルPCのどこにあるか
- `README.md`、`docs/route/index.md`、`AGENTS.md`、`CLAUDE.md` の役割
- AIエージェントがどのディレクトリを見ているか
- `Do you trust the contents of this directory?` が何を確認しているか

### 9. 秘密情報とログイン状態を混同しない

- ローカルPCのユーザー
- GitHubアカウント
- CodexやClaude Codeのログイン
- 認証コード、トークン、APIキー、秘密鍵を貼らない判断
- エラー相談で貼ってよい情報と貼ってはいけない情報

### 10. 第1部の確認

第1部の最後では、第0部で実行したコマンドをもう一度見返します。
それぞれについて、次の形で説明できるかを確認します。

```text
このコマンドは何をしたか
どこに影響したか
失敗したら何を確認するか
AIに相談するとき、何を貼ってよくて何を貼ってはいけないか
```

## この部で使う確認コマンド

第1部では、新しい大きなツール導入よりも、確認する力を重視します。
主に次のような確認コマンドを使います。

- `pwd`
- `ls`
- `ls -la`
- `cd`
- `コマンド名 --version`
- `command -v コマンド名`
- `cat`
- `less`
- `env`
- `echo $PATH`

あわせて、次のような表示が出たときに、何が起きているのかを読み取る練習をします。

- `command not found`
- `Permission denied`
- `No such file or directory`
- `Error:`

## 進め方

第1部は、用語を暗記する部ではありません。
第0部で実際に実行したコマンドを見返しながら、「あの操作は何を変えたのか」「どこに影響したのか」「どう確認できるのか」を一つずつ整理します。
