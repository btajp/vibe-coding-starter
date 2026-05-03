---
slug: /route/part-4-local-automation/go-cli
title: Goで小さなCLIを作る
---

# Goで小さなCLIを作る

## この章でできるようになること

Goを使う直前にインストールし、`go run` と `go build` の違いを体験できるようになります。

第0部では、Goは入れませんでした。
この教材では、実際に使う直前に導入し、「なぜ今必要か」を確認します。

## まず知っておくこと

Goは、コンパイルして実行ファイルを作れるプログラミング言語です。

シェルスクリプトは、シェルがファイルを読みながら実行します。
Goは、ソースコードから実行ファイルを作れます。

```text
シェルスクリプト
→ コマンド手順をまとめるのが得意

Go
→ 小さなCLIツールや配布しやすい実行ファイルを作りやすい
```

## Goをインストールする

macOSの場合:

```bash
brew install go
```

WSL Ubuntuの場合:

```bash
sudo apt update
sudo apt install -y golang-go
```

確認します。

```bash
go version
```

インストールでエラーが出たら、第1部で学んだように、OS、実行したコマンド、エラー文を整理してAIに相談します。
パスワードやトークンは貼りません。

## Goファイルを作る

練習用リポジトリに移動します。

```bash
cd ~/vibe-practice/local-automation
mkdir -p cmd/vibe-note
```

次の内容で `cmd/vibe-note/main.go` を作ります。

```bash
cat > cmd/vibe-note/main.go <<'EOF'
package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	message := "local automation practice"
	if len(os.Args) > 1 {
		message = os.Args[1]
	}

	fmt.Printf("%s %s\n", time.Now().Format("2006-01-02 15:04:05"), message)
}
EOF
```

## go runで実行する

```bash
go run ./cmd/vibe-note
```

引数を渡します。

```bash
go run ./cmd/vibe-note "hello from Go"
```

`go run` は、Goのコードを一時的にビルドして実行します。
開発中の確認に便利です。

## go buildで実行ファイルを作る

```bash
mkdir -p bin
go build -o bin/vibe-note ./cmd/vibe-note
```

実行します。

```bash
./bin/vibe-note "built command"
```

`go build` は、実行ファイルを作ります。
この `bin/vibe-note` は、シェルスクリプトとは違い、Goのソースコードをコンパイルした結果です。

## 何が起きたのか

第0部では、AIエージェントを使うためにNode.jsやnpmを先に入れました。
Goは、その時点では不要だったので入れませんでした。

この章では、小さなCLIを作る目的ができたので、Goを導入しました。
インストールそのものも学習対象です。

## 運用者の視点

新しい言語やツールを入れるときは、次を確認します。

- なぜ今必要か
- どのパッケージ管理で入れるか
- どこにインストールされるか
- バージョン確認できるか
- 使わなくなったらどう扱うか

最初から全部入れるのではなく、使う直前に入れると、目的と道具が結びつきます。

## AIに聞いてよいこと

```text
次のGoプログラムが何をしているか説明してください。

ここに cmd/vibe-note/main.go の内容を貼る

特に、package main、import、os.Args、fmt.Printf、time.Now の意味を、
初心者向けに説明してください。
まだファイルは変更しないでください。
```

## commitポイント

生成された実行ファイル `bin/vibe-note` は、練習ではcommitしなくても構いません。
まずはソースコードをcommitします。

```bash
git status
git diff
git add cmd/vibe-note/main.go
git commit -m "Add Go note command"
```

実行ファイルをcommitしない場合は、後の章で `.gitignore` に追加します。

## 次へ

次は、標準入力、標準出力、終了ステータスを知ります。

- [04-stdio-exit-status.md](04-stdio-exit-status.md)

