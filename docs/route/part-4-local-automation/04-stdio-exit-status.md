---
slug: /route/part-4-local-automation/stdio-exit-status
title: 標準入力・標準出力・終了ステータスを知る
---

# 標準入力・標準出力・終了ステータスを知る

## この章でできるようになること

CLIツールが入力を受け取り、出力し、成功失敗を返す基本を説明できるようになります。

## まず知っておくこと

CLIの道具は、入力、出力、終了ステータスを組み合わせて動きます。

```text
標準入力
→ コマンドに渡される入力

標準出力
→ 通常の結果出力

標準エラー
→ エラーや警告の出力

終了ステータス
→ 成功か失敗かを表す番号
```

この考え方は、シェルスクリプトでもGoのCLIでも使います。

## 終了ステータスを見る

成功するコマンドを実行します。

```bash
cd ~/vibe-practice/local-automation
./bin/vibe-note "status check"
echo $?
```

多くの場合、成功すると `0` が表示されます。

失敗する例も見ます。

```bash
ls does-not-exist
echo $?
```

`0` 以外が表示されるはずです。

`echo $?` は、直前のコマンドの終了ステータスを表示します。

## 標準出力をファイルに保存する

GoのCLIの出力をファイルに追記します。

```bash
./bin/vibe-note "saved output" >> logs/go-note.log
```

確認します。

```bash
tail -n 5 logs/go-note.log
```

ここでも `>>` は追記です。
第1部、第4部1章で使った追記と同じ考え方です。

## エラーを読む

存在しないコマンドを実行してみます。

```bash
not-a-real-command
```

`command not found` のような表示が出るはずです。

第1部で扱ったように、これはコマンドが見つからない状態です。
PATHにないのか、インストールされていないのか、名前を間違えたのかを確認します。

## シェルスクリプトで終了ステータスを使う

次の内容で `scripts/check-note.sh` を作ります。

```bash
cat > scripts/check-note.sh <<'EOF'
#!/usr/bin/env bash

set -euo pipefail

if [ ! -f logs/daily-note.log ]; then
  echo "logs/daily-note.log がありません" >&2
  exit 1
fi

echo "ログがあります"
EOF
```

実行権限を付けます。

```bash
chmod +x scripts/check-note.sh
```

実行します。

```bash
./scripts/check-note.sh
echo $?
```

## 何が起きたのか

`>&2` は、標準エラーへ出力する指定です。
`exit 1` は、失敗として終了する指定です。

CLIツールは、文章を表示するだけではありません。
成功したか失敗したかを終了ステータスで周りの道具に伝えます。

## 運用者の視点

自動化では、失敗を検知できることが重要です。

終了ステータスを無視すると、失敗しているのに成功したように次へ進むことがあります。
定期実行やGitHub Actionsでも、終了ステータスは重要になります。

## AIに聞いてみよう

```text
標準入力、標準出力、標準エラー、終了ステータスを、
シェルスクリプトとGoのCLIの例で説明してください。

第4部で作った daily-note.sh、vibe-note、check-note.sh を前提にしてください。
まだファイルは変更しないでください。
```

## commitポイント

変更を確認します。

```bash
git status
git diff
```

`bin/` やログファイルをcommitしたくない場合は、次章で`.gitignore`を整理します。
ここではスクリプトだけcommitします。

```bash
git add scripts/check-note.sh
git commit -m "Add note check script"
```

## 次へ

次は、cronとlaunchdで定期実行を知ります。

- [05-scheduling.md](05-scheduling.md)

