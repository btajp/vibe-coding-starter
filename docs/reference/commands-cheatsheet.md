# コマンド早見表

このページは、教材で使う基本コマンドの早見表です。

コマンドを実行する前に、少なくとも次を確認してください。

```text
何をするか
どのディレクトリで実行するか
失敗したら何が起きそうか
```

## 場所を確認する

今いるディレクトリを表示します。

```bash
pwd
```

## ファイルやディレクトリを見る

今いる場所の中身を表示します。

```bash
ls
ls -la
```

## ディレクトリを作る

`-p` を付けると、途中のディレクトリもまとめて作れます。

```bash
mkdir -p ~/src/github.com/btajp
```

## 移動する

作業するディレクトリを移動します。

```bash
cd ~/src/github.com
```

## 空ファイルを作る

ファイルがない場合は作成し、ある場合は更新日時を変えます。

```bash
touch memo.txt
```

## ファイルの中身を見る

短いテキストファイルの内容を表示します。

```bash
cat memo.txt
```

## コマンドの場所を確認する

PATHのどこにあるコマンドが使われるか確認します。

```bash
command -v git
command -v zsh
command -v sed
command -v awk
```

## バージョンを確認する

インストール済みのツールが使えるか確認します。

```bash
git --version
zsh --version
bash --version
node --version
npm --version
sed --version | head -n 1
awk --version | head -n 1
```

## AIツールを確認する

Codex CLIとClaude Codeが使えるか確認します。

```bash
codex --version
claude --version
```

起動します。

```bash
codex
claude
```

どちらも初回起動時に認証が必要になる場合があります。

## Gitの状態を見る

変更されたファイル、未追跡ファイル、commit対象を確認します。

```bash
git status
```

## Gitの差分を見る

commit前に、実際に何が変わったか確認します。

```bash
git diff
```

## 変更をcommit対象にする

次のcommitに含めるファイルを選びます。

```bash
git add README.md
```

## commitする

変更履歴を記録します。

```bash
git commit -m "docs: update README"
```

## GitHubにpushする

ローカルのcommitをGitHubへ送ります。

```bash
git push
```

## 接続先リポジトリを見る

ローカルリポジトリが、どのGitHubリポジトリにつながっているか確認します。

```bash
git remote -v
```

## SSHキーを作る

GitHubへSSHで接続するための鍵を作ります。

```bash
ssh-keygen -t ed25519 -C "YOUR_GITHUB_EMAIL"
```

すでに同名の鍵がある場合は、上書きしないでください。

## SSH接続を確認する

GitHubへSSHで認証できるか確認します。

```bash
ssh -T git@github.com
```

## シェルを確認する

ログインシェルと、現在動いているシェルを確認します。

```bash
echo $SHELL
echo $0
```

## 注意が必要なコマンド

次のコマンドは便利ですが、影響が大きい場合があります。

```text
sudo
rm
chmod
chown
curl | sh
curl | bash
chsh
npm install -g
```

実行する前に、何をするか、なぜ必要か、何が壊れる可能性があるか、どう確認するか、戻し方があるかを確認してください。
