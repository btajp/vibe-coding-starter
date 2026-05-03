---
slug: /route/part-4-local-automation/executable-and-path
title: 実行権限とPATHを体験する
---

# 実行権限とPATHを体験する

## この章でできるようになること

`chmod +x`、`./script.sh`、PATHの関係を説明できるようになります。

第1部で先に学んだ実行権限とPATHを、この章で実際に体験します。

## まず知っておくこと

ファイルは、存在するだけでは「直接実行できる」とは限りません。

シェルスクリプトを直接実行するには、実行権限が必要です。

また、コマンド名だけで実行するには、シェルがそのコマンドを探せる場所に置く必要があります。
この「探す場所の一覧」がPATHです。

## 実行権限を付ける

練習用リポジトリに移動します。

```bash
cd ~/vibe-practice/local-automation
```

実行権限を付けます。

```bash
chmod +x scripts/daily-note.sh
```

直接実行します。

```bash
./scripts/daily-note.sh
```

ログを確認します。

```bash
tail -n 5 logs/daily-note.log
```

## ./ が必要な理由

次のように実行すると、見つからない場合があります。

```bash
daily-note.sh
```

今いるディレクトリは、通常PATHに入っていません。
そのため、現在のディレクトリにあるファイルを実行するときは `./` を付けます。

```text
./scripts/daily-note.sh
→ 今いる場所から見た scripts/daily-note.sh を実行する
```

## PATHを確認する

PATHを見ます。

```bash
echo $PATH
```

PATHは `:` で区切られた場所の一覧です。
すべてを暗記する必要はありません。
今は「シェルが左から順にコマンドを探す場所」だと考えてください。

コマンドの場所を確認します。

```bash
command -v bash
command -v git
```

第1部で見た `command -v` は、ここでも使います。

## PATHに通すとは何か

「PATHに通す」とは、シェルがコマンドを探す場所に、そのコマンドの置き場所を追加することです。

たとえば `~/bin` をPATHに入れておくと、そこに置いた実行ファイルをコマンド名だけで呼べます。

ただし、PATHの変更はシェル設定ファイルに影響します。
第1部で扱った `.zshrc` や `.zprofile` への追記と同じく、何を追記するのか確認してから行います。

## 任意: ~/bin に置いてみる

この手順は任意です。
PATHを変更したくない場合は、読んで理解するだけで構いません。

```bash
mkdir -p ~/bin
cp scripts/daily-note.sh ~/bin/daily-note
```

`~/bin` がPATHに入っているか確認します。

```bash
echo $PATH
```

入っていない場合は、zshの設定に追記します。
同じ行を何度も追記しないために、まず既存の設定を探します。

```bash
grep -n 'HOME/bin' ~/.zshrc
```

`grep` は、ファイルの中から文字列を探すコマンドです。
何も表示されなければ、まだ `~/bin` の設定はなさそうです。
その場合だけ追記します。

```bash
printf '\nexport PATH="$HOME/bin:$PATH"\n' >> ~/.zshrc
```

新しいターミナルを開くか、次を実行します。

```bash
source ~/.zshrc
```

`source ~/.zshrc` は、zshの設定ファイルを今開いているターミナルに読み込み直すコマンドです。
設定が不安な場合は、ターミナルを一度閉じて開き直しても構いません。

確認します。

```bash
command -v daily-note
```

見つかれば、次のように実行できます。

```bash
daily-note
```

## 何が起きたのか

`chmod +x` は、ファイルを実行できるようにする操作です。

`./scripts/daily-note.sh` は、現在位置から見たファイルを直接指定して実行しています。

PATHに置き場所を追加すると、ファイル名だけで実行できるようになります。
第0部や第1部でPATH設定を扱ったのは、こうしたコマンド探索のためでした。

## 運用者の視点

実行権限とPATHは便利ですが、注意も必要です。

- 何のファイルに実行権限を付けるのか
- そのファイルの中身を理解しているか
- PATHの先頭に何を追加するのか
- 同じ名前のコマンドを上書きしていないか

わからないスクリプトに実行権限を付けてPATHに置くのは危険です。

## AIに聞いてみよう

```text
chmod +x、./scripts/daily-note.sh、PATHに通す、command -v の関係を説明してください。

第1部でPATHと実行権限を学んだ前提で、
なぜ見知らぬスクリプトに実行権限を付けてPATHに置くのが危ないのかも説明してください。
まだファイルは変更しないでください。
```

## commitポイント

練習用リポジトリの中で確認します。

```bash
git status
git diff
```

`chmod +x` はファイルの権限変更としてGitに記録されます。
必要ならcommitします。

```bash
git add scripts/daily-note.sh
git status
git diff --staged
```

権限変更は、差分では `100644` から `100755` のような数字の変化として表示されることがあります。
ファイルの中身ではなく、「実行できるファイルになった」という情報がcommit対象になっています。

問題なければcommitします。

```bash
git commit -m "Make daily note script executable"
```

## 次へ

次は、Goで小さなCLIを作ります。

- [03-go-cli.md](03-go-cli.md)
