---
title: OS、UNIX、Linux、Windowsの基本
---

# OS、UNIX、Linux、Windowsの基本

このページでは、macOS、Windows、UNIX、Linux、Ubuntu、WSLの関係を整理します。
本編を進めるだけなら、すべてを暗記する必要はありません。

## OSとは

OSは、PCやサーバーを動かす土台になるソフトウェアです。
正式にはオペレーティングシステムと呼ばれます。

OSは、次のような仕事をします。

- ファイルを保存する
- アプリを起動する
- 画面やキーボードを扱う
- ネットワークに接続する
- コマンドを実行する土台を用意する

macOS、Windows、Linuxは、どれもOSです。

## Windows

Windowsは、Microsoftが提供しているOSです。
多くのWindows PCでは、エクスプローラー、PowerShell、Windows Terminalなどを使えます。

この教材では、Windows本体だけで開発作業を進めるのではなく、WSL Ubuntuを使います。
そのため、Windows PCを使っていても、普段のコマンド作業はUbuntu側で行います。

## macOS

macOSは、AppleのMacで動くOSです。
Finder、ターミナル、システム設定などを使えます。

macOSのターミナルでは、Linuxと似た形でパスやコマンドを扱えます。
ただし、macOSはLinuxそのものではありません。
標準で入っている一部のコマンドは、Linuxでよく使われるものと挙動が違うことがあります。

この教材では、必要に応じてHomebrewで道具を追加し、macOSとWSL Ubuntuの差を小さくします。

## UNIX

UNIXは、昔から使われているOSの系統です。
今のmacOSやLinuxで使われる考え方の多くに影響しています。

たとえば、次のような考え方はUNIX系の文化でよく見ます。

- ファイルとディレクトリをパスで表す
- 小さなコマンドを組み合わせる
- ターミナルで操作する
- テキストファイルで設定を書く

この教材では、UNIXの歴史を詳しく覚える必要はありません。
macOSとLinuxには似た考え方がある、くらいで十分です。

## Linux

Linuxは、サーバーや開発環境で広く使われているOSの系統です。
Webサービス、クラウド、開発用コンテナなどでもよく使われます。

Linuxは、単体の製品名というより、いろいろな形にまとめられて使われます。
そのまとまりをディストリビューションと呼びます。

## Ubuntu

Ubuntuは、Linuxディストリビューションの1つです。
Linuxを実際に使いやすい形にまとめ、インストールしやすくしたものです。

この教材では、Windows上で使うLinux環境としてUbuntuを選びます。
Ubuntuを選ぶ理由は、利用者が多く、情報が見つかりやすく、開発環境として使いやすいからです。

## WSL

WSLは、Windows Subsystem for Linuxの略です。
Windows上でLinux環境を動かすための仕組みです。

WSLを使うと、Windows PCの中でUbuntuを起動できます。
この教材では、Windowsの人はWSL Ubuntuのターミナルで作業します。

```text
Windows PC
  ├─ Windows側
  │    └─ PowerShell、エクスプローラー
  └─ WSL Ubuntu側
       └─ zsh、Linux用コマンド、教材リポジトリ
```

## この教材での考え方

この教材では、OSの細かい分類よりも、どこで作業するかを重視します。

macOSの人は、macOSのターミナルで作業します。

Windowsの人は、Windows TerminalからUbuntuを開き、WSL Ubuntu側で作業します。

迷ったときは、まず `pwd` を実行します。
`/Users/...` ならmacOS側、`/home/...` ならUbuntu側、`/mnt/c/Users/...` ならWindows側の場所をWSLから見ている可能性があります。

## 関連ページ

- [macOSとWindows / WSL Ubuntuの違い](macos-vs-wsl.md)
- [macOSのBSD系ツールとGNU系ツール](macos-gnu-userland.md)
