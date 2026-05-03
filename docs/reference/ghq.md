# ghq

`ghq` は、Gitリポジトリを決まった場所に整理してclone・管理するためのツールです。

公式リポジトリ：

- https://github.com/x-motemen/ghq

## この教材での位置づけ

`ghq` は必須ではありません。

ただし、複数のリポジトリを扱うようになると便利です。

この教材では、まず手動で次の構成を理解します。

```text
~/src/github.com/<owner>/<repo>
```

その後、`ghq` を使うと、この構成を自動化できます。

## 導入

macOSでもWSL Ubuntuでも、Homebrewを使える状態なら次で入れられます。

```bash
brew install ghq
```

確認します。

```bash
ghq --version
```

## 設定例

`ghq` にリポジトリの置き場所を教える設定です。

```bash
git config --global ghq.root ~/src
```

この設定はGitのグローバル設定に保存されます。何をするか不安な場合は、実行前にAIへ意味を説明させてください。

確認します。

```bash
git config --global --get ghq.root
```

戻したい場合は、設定を削除します。

```bash
git config --global --unset ghq.root
```

## 使い方の例

```bash
ghq get https://github.com/btajp/vibe-coding-starter.git
ghq list
```

`ghq get` は、設定したルート配下にリポジトリをcloneします。どこに置かれたかは `ghq list` で確認します。

すでに同じリポジトリがある場合、cloneに失敗したり、既存の場所を使うよう案内されたりすることがあります。
そのときはすぐ削除せず、まずどこにあるかを確認します。

```bash
ghq list | grep vibe-coding-starter
ls -la ~/src/github.com/btajp
```

`ghq` を使わず手動でcloneしている場合でも、考え方は同じです。
GitHub上のURLと、ローカルPC上の置き場所の対応を確認してから進みます。

## AIに聞くプロンプト

```text
ghqとは何かを、GitHubのURLとローカルディレクトリの対応関係を使って説明してください。
また、手動でcloneする場合とghqを使う場合の違いを初心者向けに説明してください。
```
