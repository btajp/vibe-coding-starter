---
slug: /route/part-1-pc-os-cli/os-wsl
title: macOS、Windows、WSL Ubuntuの関係を整理する
---

# macOS、Windows、WSL Ubuntuの関係を整理する

## この章でできるようになること

自分がmacOSで作業しているのか、Windows側で作業しているのか、WSL Ubuntu側で作業しているのかを区別できるようになります。

第0部では、macOSの人とWindowsの人で手順が分かれました。
この章では、その理由を整理します。

## まず知っておくこと

この教材の本線では、次のどちらかで進めます。

- macOS 26 Tahoe 以上 / Apple Siliconチップ搭載Mac
- Windows 11 / x86_64（Intel / AMD 64bit）PC / WSL Ubuntu

Windowsだけで、PowerShellやコマンドプロンプトを使って進める手順は本線では扱いません。
Windowsの人は、Windowsの中にWSL UbuntuというLinux環境を用意し、Ubuntu側のターミナルで作業します。

ここで大事なのは、Windowsを使っている人でも、開発作業の本体はUbuntu側で行うということです。

```text
Windows PC
  └─ WSL Ubuntu
       └─ この教材の作業場所
```

## OSとは何か

OSは、PC全体を動かす土台になるソフトウェアです。
画面を表示したり、ファイルを保存したり、キーボードからの入力を受け取ったり、アプリを起動したりします。

macOSやWindowsは、PCで使われるOSです。
LinuxもOSの一種ですが、いろいろな形にまとめられて配布されています。
Ubuntuは、そのLinuxを使いやすくまとめたものの1つです。

UNIXは、macOSやLinuxに近い考え方のもとになっている古いOSの系統です。
この章では、歴史や細かい分類を覚える必要はありません。
まずは、次のように考えます。

```text
macOS
→ Mac本体で動くOS

Windows
→ Windows PC本体で動くOS

Linux
→ サーバーや開発環境でよく使われるOSの系統

Ubuntu
→ Linuxを使いやすい形にまとめたもの

WSL
→ Windows上でLinux環境を使うための仕組み
```

詳しい関係は、リファレンスの [OS、UNIX、Linux、Windowsの基本](../../reference/os-basics.md) で確認できます。

## macOSの場合

macOSの人は、macOS上のターミナルで作業します。

第0部では、次のような場所に教材リポジトリを置きました。

```text
/Users/あなたのユーザー名/src/github.com/btajp/vibe-coding-starter
```

macOSのターミナルでは、Linuxと似た形でパスやコマンドを扱えます。
たとえば `/Users/...` のようなパスや、`pwd`、`ls`、`cd` などのコマンドを使います。

ただし、macOSの標準コマンドはLinuxと完全に同じではありません。
その違いを少なくするために、第0部ではHomebrewで `bash`、`gawk`、`gnu-sed` なども入れました。

この違いは、後の章やリファレンスで必要な範囲だけ確認します。

## Windows / WSL Ubuntuの場合

Windowsの人は、Windowsの中にWSL Ubuntuを用意しました。

WSLは、Windows上でLinux環境を使うための仕組みです。
Ubuntuは、Linuxを実際に使いやすい形にまとめたものの1つです。
このようなまとまりを、ディストリビューションと呼ぶことがあります。
この教材では、WSLで使うLinux環境としてUbuntuを選んでいます。

第0部では、PowerShellで次のコマンドを実行しました。

```powershell
wsl --install -d Ubuntu
```

このコマンドは、Windows側でUbuntu環境を用意する操作です。
この時点だけは、PowerShellを使いました。

その後の作業は、Ubuntu側のターミナルで行います。

## Windows側とUbuntu側の場所

WSL Ubuntuでは、Windows側のファイルとUbuntu側のファイルの両方が見えます。
そのため、どちら側で作業しているのかを間違えやすくなります。

Ubuntu側のホームディレクトリは、次のような場所です。

```text
/home/あなたのユーザー名
```

Windows側のユーザーフォルダは、WSL Ubuntuから見ると次のような場所に見えます。

```text
/mnt/c/Users/あなたのWindowsユーザー名
```

この教材では、基本的にUbuntu側のホームディレクトリで作業します。

```text
/home/あなたのユーザー名/src/github.com/btajp/vibe-coding-starter
```

`/mnt/c/Users/...` の下でもファイル操作はできます。
しかし、Windows側とUbuntu側のファイルシステムをまたぐと、動作が遅くなったり、権限や改行コードなどで迷いやすくなったりします。
初心者のうちは、Ubuntu側の `/home/...` に寄せるほうが安全です。

## やってみる

まず、今いる場所を確認します。

```bash
pwd
```

macOSの場合、次のように `/Users/...` から始まるはずです。

```text
/Users/あなたのユーザー名/...
```

WSL Ubuntuの場合、次のように `/home/...` から始まるのが基本です。

```text
/home/あなたのユーザー名/...
```

もしWSL Ubuntuで次のように表示された場合は、Windows側の場所にいます。

```text
/mnt/c/Users/...
```

その場合は、Ubuntu側のホームディレクトリに移動します。

```bash
cd
pwd
```

`cd` を引数なしで実行すると、ホームディレクトリに戻ります。

次に、教材リポジトリへ移動します。

```bash
cd ~/src/github.com/btajp/vibe-coding-starter
pwd
```

## PowerShell、Windows Terminal、Ubuntuターミナル

Windowsの人は、似た名前の画面がいくつか出てきます。

PowerShellは、Windows側のシェルです。
第0部では、WSL Ubuntuをインストールするために使いました。

Windows Terminalは、Windows 11では「ターミナル」と表示されるターミナルアプリです。
その中でPowerShellを開くことも、Ubuntuを開くこともできます。

Ubuntuターミナルは、WSL Ubuntu側のシェルを使う画面です。
この教材の本線では、Ubuntuターミナルで作業します。

```text
Windows Terminal
  ├─ PowerShell
  └─ Ubuntu
```

見た目が似ていても、中で動いている環境が違います。
迷ったら、まず `pwd` を実行して、場所を確認します。

## macOSとWSL Ubuntuで手順が分かれた理由

第0部では、macOSとWSL Ubuntuで手順が分かれました。

理由は、最初から入っている道具や、パッケージ管理の仕組みが違うからです。

macOSでは、Homebrewを使って道具を入れました。

```text
brew install ...
```

WSL Ubuntuでは、Ubuntu側の基本ツールをaptで入れ、その後Node.js / npmをHomebrewで入れました。

```text
sudo apt install ...
brew install node
```

どちらも、最終的には似た開発環境に近づけるための手順です。

## 何が起きたのか

この章では、OSの関係を整理しました。

大まかには、次のように考えます。

```text
macOSの人
→ macOSのターミナルで作業する

Windowsの人
→ Windows上にWSL Ubuntuを用意し、Ubuntu側のターミナルで作業する
```

第0部で大事だったのは、どちらの環境でも、最終的にターミナルで教材リポジトリを開き、AIエージェントを起動できる状態にすることでした。

## 運用者の視点

トラブル相談では、OS名だけでは足りないことがあります。

たとえば「Windowsです」と言っても、実際には次のどちらで作業しているかが重要です。

- PowerShellで作業している
- WSL Ubuntuで作業している

エラー相談では、次のように伝えると状況がはっきりします。

```text
Windows PCを使っています。
作業はWSL Ubuntuのターミナルで行っています。
pwd の結果は /home/自分のユーザー名/src/github.com/btajp/vibe-coding-starter です。
```

AIに相談するときも、人に相談するときも、OS名、ターミナルの種類、今いる場所をセットで伝えると、回答の精度が上がります。

## AIに聞いてみよう

この章の時点では、教材リポジトリでAIエージェントを起動できる想定です。
ファイルを変更させず、環境の整理だけを頼みます。

```text
私はWindows PCで、WSL Ubuntuのターミナルを使っています。
pwd の結果は次のとおりです。

ここに pwd の結果を貼る

この場所がUbuntu側なのかWindows側なのかを判断してください。
また、この教材ではどちら側で作業するべきかを初心者向けに説明してください。
まだファイルは変更しないでください。
```

```text
macOS、Windows、WSL Ubuntu、Linux、UNIXの関係を、
この教材でターミナル作業を進めるために必要な範囲だけで説明してください。

詳しい歴史ではなく、どのターミナルで作業するべきかがわかる説明にしてください。
```

## 次へ

次は、ターミナル、CLI、シェル、基本コマンドを読みます。

- [04-terminal-shell-commands.md](04-terminal-shell-commands.md)
