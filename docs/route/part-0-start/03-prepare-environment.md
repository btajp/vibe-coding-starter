---
slug: /route/part-0-start/prepare-environment
title: 最低限の道具を入れる
---

# 最低限の道具を入れる

:::info 第0部の重要な前提
この教材は、AIエージェントと一緒に学ぶ前提で進めます。
そのため第0部では、AIエージェントを使い始めることを優先し、導入の前提になるシェル、PATH、Git、Node.js、npm、Homebrew、aptなどの説明は最小限にしています。
第0部を終えるまでに、ここで出てくる単語やコマンドをすべて理解する必要はありません。
意味は第1部以降で順番に回収します。
:::

## この章でできるようになること

この章では、AIエージェントを使い始めるために必要な最低限の道具を入れます。

ここでは「あとで学ぶための作業場所を作る」ことを優先します。

## 詰まったときの聞き方

第0部の途中では、まだCodexやClaude Codeを使えないことがあります。
その場合は、Web版のChatGPT、Claude、Geminiなどに相談して構いません。

相談するときは、次の情報を入れると答えが安定します。

```text
私はAIコーディングエージェントを使い始める準備をしています。
OSはmacOSです。
今いる場所は /Users/自分の名前 です。
次のコマンドを実行したら、このエラーが出ました。

ここから何を確認すればよいですか？
```

貼ってよいものは、実行したコマンド、エラー文、OS、今いるディレクトリです。
貼ってはいけないものは、パスワード、APIキー、トークン、秘密鍵、ログイン認証コードです。

![詰まったら、状況ごと相談する](../../images/route-start/ask-ai-with-context.png)

## まず知っておくこと

この章では、環境に影響するコマンドを実行します。

特に注意する操作は次です。

- `sudo`: 管理者権限で実行する
- `curl`: インターネットから内容を取得する
- `curl | bash`: 取得したスクリプトをそのまま実行する
- `.zshrc` や `.zprofile` への追記: シェルの起動時設定を変える
- PATHの設定: コマンドを探す場所を変える

これらの意味は第1部で回収します。
この章では、公式サイトで案内されている手順かどうか、実行後に確認できるか、失敗したら止まれるかを重視します。

![インストール中の表示を見分ける](../../images/route-start/install-output-guide.png)

## macOSの場合

macOSでは、ターミナルを使います。

まずHomebrewが使えるか確認します。

```bash
brew --version
```

バージョンが表示されたら、次へ進みます。

`command not found: brew` と出た場合は、Homebrew公式サイトを確認してからインストールします。

- https://brew.sh/

次のコマンドは、Homebrew公式サイトで案内されているインストーラーを実行します。
インターネットからスクリプトを取得して実行するため、URLが公式サイトと一致していることを確認してから進めてください。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

終わったら、もう一度確認します。

```bash
brew --version
```

次に、基本ツールを入れます。

```bash
brew install zsh git bash gawk gnu-sed ghq node
```

確認します。

```bash
zsh --version
git --version
bash --version
gawk --version
gsed --version
ghq --version
node --version
npm --version
```

この章では、これらの道具を「何のために入れたか」だけ確認します。

- `zsh`: この教材で基本にする対話用シェル
- `git`: リポジトリをcloneし、変更履歴を扱う道具
- `bash`: インストールスクリプトなどでよく使われるシェル
- `gawk` / `gnu-sed`: Linux側と挙動を近づけるためのGNU系ツール
- `ghq`: リポジトリ配置の考え方を学ぶための補助ツール
- `node` / `npm`: CodexやClaude Codeを入れる土台

![macOSで準備する流れ](../../images/route-start/macos-setup-flow.png)

## Windows / WSL Ubuntuの場合

Windowsの人は、WSL Ubuntuを使います。
この教材の本線では、Windows 11のx86_64（Intel / AMD 64bit）PCを前提にします。

Windows 11には、最初から「ターミナル」というアプリが入っています。
スタートメニューで「ターミナル」を探し、右クリックして「管理者として実行」を選びます。

まず、PowerShellでWSL Ubuntuをまだ入れていない場合は、Microsoft公式ドキュメントを確認します。

- https://learn.microsoft.com/windows/wsl/install

管理者として開いたターミナルでは、通常はPowerShellが開きます。
PowerShellが開いていることを確認してから、次を実行します。
このコマンドは、WSLに必要なWindowsの機能を有効にし、標準のUbuntuをインストールします。

![Windows 11でターミナルを管理者として開く](../../images/route-start/windows-terminal-admin.png)

```powershell
wsl --install
```

PCの再起動を求められたら、再起動します。

### ターミナルを通常の権限で開き直す

WSLのインストールが終わったら、管理者として開いていたターミナルのウィンドウを閉じます。
ここから先の作業では、管理者権限のターミナルを使いません。

次に、スタートメニューから「ターミナル」をもう一度開きます。
このときは右クリックせず、普通にクリックして開きます。
「管理者として実行」は選びません。

ターミナルを開くと、PowerShellが開くことがあります。
インストールされたことをPowerShell側で確認したい場合は、次を実行します。

```powershell
wsl --list --verbose
```

`Ubuntu` が表示されれば、WSL Ubuntuが入っています。

次に、タブの右側にある下向きのメニューを開き、`Ubuntu` を選びます。

![ターミナルのタブメニューからUbuntuを開く](../../images/route-start/windows-terminal-open-ubuntu.png)

Ubuntuを初めて開いたときは、Ubuntu内で使うユーザー名とパスワードの作成を求められます。
Windowsのユーザー名やパスワードと同じにする必要はありません。

ここから先は、管理者権限のPowerShellではなく、通常のUbuntu側ターミナルで作業します。
まず、今いる場所を確認します。

```bash
pwd
```

`/home/あなたのユーザー名` のように表示されれば、Ubuntu側のホームディレクトリにいます。

もし `/mnt/c/Users/...` のように表示された場合は、次でホームディレクトリに移動します。

```bash
cd
pwd
```

次に、Ubuntu側で基本ツールを入れます。

```bash
sudo apt update
sudo apt install -y zsh git bash gawk sed curl build-essential procps file bubblewrap
```

Ubuntuでは `gawk` をインストールします。
`gawk` はGNU版の `awk` で、インストール後は `awk` という名前でも使えます。

確認します。

```bash
zsh --version
git --version
bash --version
awk --version
sed --version
curl --version
```

WSL Ubuntuでも、この教材ではNode.js / npmをHomebrewで入れます。
macOSと近い手順にするためです。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.zprofile
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
brew --version
```

Node.jsを入れます。

```bash
brew install node
node --version
npm --version
```

この教材では、対話的に使うシェルをzshに寄せます。
次のコマンドは、Ubuntuターミナルを開いたときにzshを使うための設定です。

```bash
chsh -s "$(command -v zsh)"
zsh
```

戻したい場合は、後でUbuntuターミナルから次を実行します。

```bash
chsh -s "$(command -v bash)"
```

![WSL Ubuntuで準備する流れ](../../images/route-start/wsl-setup-flow.png)

## 失敗したら

次のような表示が出たら、次へ進まず止まります。

- `command not found`
- `Permission denied`
- `No such file or directory`
- `fatal:`
- `Error:`

まだAIエージェントが使えない場合は、Web版のAIに相談します。
ただし、パスワード、トークン、APIキー、秘密鍵、ログイン認証コードは貼らないでください。

## 次へ

次は、CodexまたはClaude Codeを入れます。

- [04-install-ai-agent.md](04-install-ai-agent.md)
