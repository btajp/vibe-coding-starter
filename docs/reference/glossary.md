# 用語集

このページは、教材で出てくる用語を確認するためのリファレンスです。

## ファイル / file

データを保存する単位です。

例：

```text
README.md
index.html
style.css
```

## フォルダ / ディレクトリ / directory

ファイルや別のディレクトリを入れる場所です。

開発では「フォルダ」より「ディレクトリ」という言葉がよく使われます。

## 拡張子 / extension

ファイル名の末尾にある、ファイルの種類を表す部分です。

例：

```text
README.md
index.html
script.js
```

## パス / path

ファイルやディレクトリの場所を表す文字列です。

例：

```text
~/src/github.com/btajp/vibe-coding-starter
```

## 絶対パス

基準となる場所から完全に書いたパスです。

例：

```text
/home/username/src/github.com/btajp/vibe-coding-starter
```

## 相対パス

今いる場所を基準にしたパスです。

例：

```text
../reference/glossary.md
```

## カレントディレクトリ

現在作業しているディレクトリです。

`pwd` で確認できます。

## CLI

Command Line Interfaceの略です。

文字でコマンドを入力してコンピューターを操作する方法です。

## ターミナル

CLIを使うための画面です。

## シェル

入力したコマンドを解釈して実行するプログラムです。

例：

- zsh
- bash

## zsh

この教材で基本にする対話シェルです。

## bash

Linux環境やシェルスクリプトでよく使われるシェルです。

## PATH

コマンドを探す場所の一覧です。

同じ名前のコマンドでも、PATHの順番によって実行されるものが変わる場合があります。

## Homebrew

macOSでよく使われるパッケージマネージャです。

## apt

Ubuntuで使われるパッケージ管理コマンドです。

## Git

変更履歴を管理するためのツールです。

## GitHub

Gitリポジトリをオンラインで管理・共有するサービスです。

## GitHubアカウント

GitHub上でリポジトリを作ったり、pushしたり、GitHub Pagesを設定したりするための利用者アカウントです。

ユーザー名はURLや公開ページに表示されるため、公開してよい名前にします。

## repository / リポジトリ

ファイルと変更履歴をまとめて管理する場所です。

## clone

GitHubなどにあるリポジトリを、自分のPCに持ってくる操作です。

## commit

変更を履歴として記録する操作です。

## push

自分のPC上のcommitをGitHubに送る操作です。

## remote

ローカルリポジトリが接続しているGitHub上のリポジトリです。

`git remote -v` で確認できます。

## SSH

Secure Shellの略です。

この教材では、GitHubへ安全に接続するための認証方法として扱います。

## 公開鍵

SSHキーのうち、GitHubへ登録してよい鍵です。

通常は `id_ed25519.pub` のように `.pub` で終わります。

## 秘密鍵

SSHキーのうち、自分のPCの中だけに置く鍵です。

通常は `id_ed25519` のように `.pub` が付きません。誰にも見せず、GitHubにも貼り付けません。

## GitHub Pages

GitHub上のリポジトリにあるファイルをWebページとして公開する仕組みです。

## `.zshrc`

zshの設定ファイルです。

PATHやプロンプトなどの設定を書くことがあります。

## `.env`

環境変数や秘密情報を置くために使われることがあるファイルです。

公開リポジトリにcommitしないように注意が必要です。

## IaaS

Infrastructure as a Serviceの略です。

サーバー、ネットワーク、ストレージなどのインフラをクラウド上で使えるサービスです。

例：AWS

## PaaS

Platform as a Serviceの略です。

アプリケーションの実行環境やデプロイ環境をクラウド上で提供するサービスです。

例：Vercel
