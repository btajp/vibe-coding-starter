---
slug: /route/part-1-pc-os-cli/review-part-0
title: 第0部で何をしたのかを棚卸しする
---

# 第0部で何をしたのかを棚卸しする

## この章でできるようになること

第0部で実行したコマンドを見返し、何をインストールしたのか、どの設定ファイルを変えたのか、どのディレクトリに移動したのかを整理できるようになります。

この章では、まだすべての仕組みを細かく説明できなくても構いません。
まずは「何をしたか」「どこに影響したか」「次に何を確認すればよいか」を分けて見られるようにします。

## まず知っておくこと

第0部では、AIエージェントを早く使い始めるために、いくつかの操作を先に実行しました。

たとえば、次のような操作です。

- Homebrewやaptで道具を入れた
- Node.jsやnpmを入れた
- CodexまたはClaude Codeを入れた
- 教材リポジトリをcloneした
- 教材リポジトリでAIエージェントを起動した

この章では、まず第0部でやったことを一覧にします。
意味を完璧に説明できなくても構いません。
何をしたのかを分けておくと、あとで迷いにくくなります。

```text
何をしたか
どこに影響したか
何で止まったら、何を確認するか
```

## やってみる

まず、教材リポジトリにいることを確認します。

```bash
pwd
ls
```

`pwd` は、今いるディレクトリを表示するコマンドです。
`ls` は、今いるディレクトリの中身を表示するコマンドです。

この2つは、ファイルを書き換えるコマンドではありません。
今いる場所と、そこにあるものを確認するためのコマンドです。

`pwd` の結果が次のような場所なら、教材リポジトリにいます。

```text
/Users/あなたのユーザー名/src/github.com/btajp/vibe-coding-starter
```

または、WSL Ubuntuの場合は次のような場所です。

```text
/home/あなたのユーザー名/src/github.com/btajp/vibe-coding-starter
```

違う場所にいる場合は、教材リポジトリへ移動します。

```bash
cd ~/src/github.com/btajp/vibe-coding-starter
pwd
```

`cd` は、作業するディレクトリを移動するコマンドです。
移動したあとに `pwd` を実行すると、今いる場所を確認できます。

`ghq` を入れた人は、次のコマンドでも教材リポジトリの場所を確認できます。

```bash
ghq list
```

`ghq` は、Gitリポジトリを決まった場所に整理して置くための補助ツールです。
この時点では、次の1行だけが表示される人が多いはずです。

```text
github.com/btajp/vibe-coding-starter
```

この行が表示されれば、教材リポジトリが `ghq` からも見えています。
詳しくはリファレンスの [ghq](../../reference/ghq.md) で確認できます。

次に、第0部のファイルを確認します。

```bash
ls docs/route/part-0-start
```

さっきの `ls` は、今いるディレクトリの中身を表示しました。
ここでは `docs/route/part-0-start` という場所を指定して、その中身を表示しています。

次のようなファイルが見えればOKです。

```text
01-concept.md
02-start-here.md
03-prepare-environment.md
04-install-ai-agent.md
05-clone-and-first-request.md
index.md
```

![pwd、ls、cdの関係](../../images/route-pc-os-cli/pwd-ls-cd.png)

## 第0部で実行した操作を分類する

第0部で実行した操作は、大きく分けると次の6種類です。

### 1. 場所を確認した操作

```bash
pwd
ls
cd
mkdir
```

これらは、どこで作業しているか、どこにディレクトリを作るかを扱う操作です。
このあと、[ファイル、ディレクトリ、パスを読む](02-files-paths.md) と [ターミナル、CLI、シェル、基本コマンドを読む](04-terminal-shell-commands.md) で確認します。

### 2. OS側の準備をした操作

Windowsの人は、PowerShellでWSL Ubuntuを入れる操作をしました。

```powershell
wsl --install
wsl --list --verbose
```

これは、Windowsの中にUbuntu側の作業環境を用意し、入ったことを確認する操作です。
このあと、[macOS、Windows、WSL Ubuntuの関係を整理する](03-os-wsl.md) で確認します。

macOSでは、主にHomebrewを使いました。

```bash
brew --version
brew install zsh git bash gawk gnu-sed node
```

WSL Ubuntuでは、aptとHomebrewの両方を使いました。

```bash
sudo apt update
sudo apt install -y zsh git bash gawk sed curl build-essential procps file bubblewrap
brew install node
```

これらは、PCに道具を入れる操作です。
このあと、[Homebrew、apt、npmを使い分ける](07-package-managers.md) で確認します。

### 3. シェル設定を変えた操作

WSL Ubuntuでは、Homebrewを使えるようにするために、設定ファイルへ追記しました。

```bash
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.zprofile
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

また、対話用シェルをzshに寄せるために、次の操作もしました。

```bash
chsh -s "$(command -v zsh)"
```

これらは、ターミナルを開いたときの動きや、コマンドが見つかる場所に関わります。
このあと、[危ないコマンドと権限を先に見分ける](05-dangerous-commands-permissions.md) と [PATHとシェル設定を理解する](06-path-shell-config.md) で確認します。

### 4. AIエージェントを入れた操作

Codexを使えるようにするために、npmを使いました。

```bash
npm install -g @openai/codex
```

`npm install -g` は、ターミナルから直接使えるコマンドを追加する操作です。
このあと、[Homebrew、apt、npmを使い分ける](07-package-managers.md) で確認します。

Claude Codeを使う場合は、公式インストーラーを使いました。

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

これは、公式サイトからインストール用スクリプトを取得して実行する操作です。
このあと、[危ないコマンドと権限を先に見分ける](05-dangerous-commands-permissions.md) で確認します。

### 5. GitHubから教材を持ってきた操作

教材リポジトリを手元に置くために、`git clone` を使いました。

```bash
git clone https://github.com/btajp/vibe-coding-starter.git
```

この操作で、GitHub上にあるリポジトリがローカルPCに複製されました。
このあと、[GitHubからcloneした状態を理解する](08-understand-clone.md) で確認します。

### 6. AIエージェントを起動した操作

教材リポジトリの中で、CodexまたはClaude Codeを起動しました。

```bash
codex
claude
```

起動時に、次のような意味の確認が出ることがあります。

```text
Do you trust the contents of this directory?
```

これは、AIエージェントに今いるディレクトリの中身を読ませてよいかを確認する表示です。
このあと、[GitHubからcloneした状態を理解する](08-understand-clone.md) と [秘密情報とログイン状態を混同しない](09-secrets-and-accounts.md) で確認します。

## 何が起きたのか

第0部では、いろいろなコマンドを実行しました。
ただし、全部が同じ種類の操作だったわけではありません。

大まかには、次のように分けられます。

```text
場所を確認する操作
道具をインストールする操作
シェル設定を変える操作
GitHubからファイル一式を持ってくる操作
AIエージェントを起動する操作
```

この分類ができるだけでも、AIに相談しやすくなります。

たとえば、エラーが出たときに「Gitの問題です」と言うより、次のように言えるほうが状況が伝わります。

```text
教材リポジトリをcloneするところで止まりました。
git cloneを実行したら、次のエラーが出ました。
```

または、次のように言えます。

```text
Codexを入れるためにnpm install -gを実行したら、権限エラーが出ました。
```

または、次のように言えます。

```text
Claude Codeを入れるために公式インストーラーを実行したら、command not found が出ました。
```

何の操作で止まったのかを言えることが、トラブル対応の入口です。

## もう少しやってみる

第0部で出てきた単語を、手元のメモに分けて書いてみてください。
この教材リポジトリのファイルを編集する必要はありません。

```text
場所やパスに関係するもの
インストールに関係するもの
シェル設定に関係するもの
GitやGitHubに関係するもの
AIエージェントに関係するもの
秘密情報に関係するもの
```

まだ意味がわからない単語があっても、そのまま残して構いません。
このあとの章で順番に回収します。

## 運用者の視点

開発では、作業がうまくいったときよりも、止まったときに差が出ます。

止まったときに、次の情報を分けて説明できると、AIにも人間にも相談しやすくなります。

- 何をしようとしていたか
- どのディレクトリで実行したか
- どのコマンドを実行したか
- 何が表示されたか
- 秘密情報を貼っていないか

AIが便利でも、状況を整理するのは人間の役割です。
この章では、そのための最初の整理をしています。

## AIに聞いてよいこと

この章の時点では、すでに教材リポジトリをcloneし、CodexまたはClaude Codeを起動できる想定です。
AIに聞くときは、まずファイルを変更しない前提を明示します。

```text
このリポジトリで第0部にあたる docs/route/part-0-start/ を読み、
第0部で実行したコマンドを種類ごとに分類してください。

まだファイルは変更しないでください。
分類は、場所確認、インストール、シェル設定、Git/GitHub、AIエージェント、秘密情報の観点でお願いします。
```

```text
第0部で出てきた用語のうち、まだ私が理解できていない可能性が高いものを一覧にしてください。
ただし、詳しい説明はまだ短くて構いません。
どの章で回収すべきかを提案してください。
```


## 次へ

次は、ファイル、ディレクトリ、パスの読み方を確認します。

- [02-files-paths.md](02-files-paths.md)
