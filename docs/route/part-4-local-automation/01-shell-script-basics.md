---
slug: /route/part-4-local-automation/shell-script-basics
title: 練習用自動化リポジトリを作る
---

# 練習用自動化リポジトリを作る

## この章でできるようになること

教材リポジトリとは別に、ローカル自動化の練習用リポジトリを作り、最初のシェルスクリプトを書けるようになります。

## まず知っておくこと

シェルスクリプトは、シェルで実行するコマンドをファイルにまとめたものです。

第1部では、ターミナルで1行ずつコマンドを実行しました。
シェルスクリプトにすると、その手順をファイルとして保存し、何度も実行できます。

## 練習用リポジトリを作る

教材リポジトリとは別の場所に作ります。

```bash
mkdir -p ~/vibe-practice/local-automation
cd ~/vibe-practice/local-automation
git init
```

commit用の名前とメールを、この練習用リポジトリ内だけに設定します。

```bash
git config user.name "Vibe Coding Learner"
git config user.email "learner@example.com"
```

状態を確認します。

```bash
git status
```

第3部で学んだように、GitHubへはまだ送りません。
ここではローカルだけで練習します。

## スクリプト用ディレクトリを作る

```bash
mkdir -p scripts logs
```

`scripts` には実行するファイルを置きます。
`logs` には実行結果のメモを置きます。

## 最初のシェルスクリプトを書く

次の内容で `scripts/daily-note.sh` を作ります。

```bash
cat > scripts/daily-note.sh <<'EOF'
#!/usr/bin/env bash

set -euo pipefail

mkdir -p logs
date "+%Y-%m-%d %H:%M:%S local automation practice" >> logs/daily-note.log
EOF
```

`cat > ファイル <<'EOF'` は、`EOF` までの内容をファイルに書き込む方法です。
長い設定ファイルやスクリプトを作るときに使われます。
`>` は上書きなので、同じ名前のファイルがすでにある場合は中身が置き換わります。
ここでは新しく練習用スクリプトを作るために使っています。

`#!/usr/bin/env bash` は、このファイルをbashで実行するための目印です。
`set -euo pipefail` は、スクリプト内のミスに早めに気づくための設定です。
この章では細かく暗記しなくて構いません。
「失敗に気づきやすくするための安全寄りの設定」だと考えてください。

## 実行してみる

まずはbashに渡して実行します。

```bash
bash scripts/daily-note.sh
```

ログを確認します。

```bash
tail -n 5 logs/daily-note.log
```

## 何が起きたのか

このスクリプトは、現在時刻を `logs/daily-note.log` に追記しました。

`>>` は追記です。
第1部で、`.zshrc` や `.zprofile` に設定を追記したときと同じ種類の操作です。

今回は、シェル設定ファイルではなく、自分で作ったログファイルに追記しています。

## 運用者の視点

自動化は、同じ作業を繰り返すときに便利です。

ただし、ファイルを作る、上書きする、削除する、外部へ送るような自動化は注意が必要です。
最初は、ログに1行追記する程度の安全な操作から始めます。

## AIに聞いてみよう

```text
次のシェルスクリプトが何をしているか説明してください。

ここに scripts/daily-note.sh の内容を貼る

特に、set -euo pipefail、mkdir -p、date、>> の意味を説明してください。
まだファイルは変更しないでください。
```

## commitポイント

この章の変更を確認します。

```bash
git status
git diff
```

問題なければcommitします。

```bash
git add scripts/daily-note.sh logs/daily-note.log
git status
git diff --staged
```

`logs/daily-note.log` には実行時刻が入るため、表示内容は人によって少し違います。
次のcommitに入るファイルが、作ったスクリプトと練習用ログだけか確認します。

問題なければcommitします。

```bash
git commit -m "Add daily note script"
```

## 次へ

次は、実行権限とPATHを体験します。

- [02-executable-and-path.md](02-executable-and-path.md)
