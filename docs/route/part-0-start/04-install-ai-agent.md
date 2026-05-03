---
slug: /route/part-0-start/install-ai-agent
title: AIエージェントを入れる
---

# AIエージェントを入れる

:::info 第0部の重要な前提
この教材は、AIエージェントと一緒に学ぶ前提で進めます。
そのため第0部では、AIエージェントを使い始めることを優先し、導入の前提になるシェル、PATH、Git、Node.js、npm、Homebrew、aptなどの説明は最小限にしています。
第0部を終えるまでに、ここで出てくる単語やコマンドをすべて理解する必要はありません。
意味は第1部以降で順番に回収します。
:::

## この章でできるようになること

この章では、CodexまたはClaude Codeのどちらかを使える状態にします。

両方を入れても構いませんが、最初はどちらか一方で十分です。
この教材では、AIエージェントを使いながら学ぶため、第0部で先に導入します。

## まず知っておくこと

CodexやClaude Codeは、ターミナルで使うAIコーディングエージェントです。
ファイルを読んだり、変更案を出したり、コマンド実行を提案したりできます。

便利ですが、強い権限を持つ相手でもあります。
最初は、AIにいきなり編集させるのではなく、まず説明と要約を頼みます。

インストール手順は変わることがあります。
実行前に公式ドキュメントも確認してください。

- Codex CLI: https://help.openai.com/en/articles/11096431-openai-codex-ci-getting-started
- Claude Code: https://code.claude.com/docs/en/setup

## Codexをnpmで入れる場合

Codexを使う場合は、先にnpmを更新します。
Claude Codeだけを使う場合は、この手順は飛ばして構いません。

```bash
npm install -g npm@latest
npm --version
```

`npm install -g` は、ターミナルから直接使えるコマンドを追加する操作です。
PCの環境全体に影響するため、何を入れるかを確認しながら進めます。

権限エラーが出た場合、すぐに `sudo npm install -g ...` としないでください。
Node.js / npmの入れ方や、グローバルインストール先を見直します。

## Codexを使う場合

Codexを入れます。

```bash
npm install -g @openai/codex
codex --version
```

起動します。

```bash
codex
```

初回起動時は、画面の案内に従ってログインします。
ログイン画面の認証コードやトークンをAIに貼らないでください。

![Codexを使える状態にする](../../images/route-start/codex-setup-flow.png)

## Claude Codeを使う場合

Claude Codeは、公式のNative Installを使って入れます。
macOS、Linux、WSL Ubuntuでは、公式インストーラーを取得して実行します。
インターネットからスクリプトを取得して実行するため、URLが公式ドキュメントと一致していることを確認してから進めてください。

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

起動します。

```bash
claude
```

初回起動時は、画面の案内に従ってログインします。
ログイン画面の認証コードやトークンをAIに貼らないでください。

![Claude Codeを使える状態にする](../../images/route-start/claude-code-setup-flow.png)

## どちらを選べばよいか

迷ったら、すでにアカウントを持っているほうから始めて構いません。

大切なのは、どのツールを選んだかではなく、次のことです。

- どのディレクトリで起動しているか
- どのファイルを読ませているか
- まだ編集させない依頼ができるか
- 提案された操作を自分で確認できるか

## 失敗したら

次のような場合は、次へ進まず止まります。

- `codex` または `claude` が見つからない
- ログインできない
- Codexの `npm install -g` で権限エラーが出る
- Claude Codeのインストーラーでエラーが出る
- Node.jsやnpmのバージョン確認ができない

AIに相談するときは、OS、実行したコマンド、エラー文を伝えます。
認証コード、APIキー、トークンは貼りません。

## AIに聞いてよいこと

```text
私はmacOSで、ターミナルから使うAIコーディングエージェントを導入しようとしています。
Node.jsとnpmは入っています。

これからCodexを入れるために、次のようなコマンドを実行する前に、何が起きるのかを初心者向けに説明してください。

npm install -g パッケージ名

特に、`-g` の意味、PCのどこに影響するのか、`sudo` を付ける前に確認すべきこと、インストール後の確認コマンドを教えてください。
```

```text
私はmacOSで、ターミナルからClaude Codeを導入しようとしています。

これから公式ドキュメントに載っている次のコマンドを実行する前に、何が起きるのかを初心者向けに説明してください。

curl -fsSL https://claude.ai/install.sh | bash

特に、インターネットから取得したスクリプトを実行する意味、確認すべきURL、インストール後の確認コマンドを教えてください。
```

```text
CodexまたはClaude Codeをインストールしようとしています。
OSはmacOSです。

次のコマンドを実行しました。

ここに実行したコマンドを貼る

次のエラーが出ました。

ここにエラー文を貼る

認証コード、APIキー、トークン、秘密鍵は貼っていません。
原因として考えられることと、次に確認するコマンドを教えてください。
```

## 次へ

次は、この教材リポジトリをcloneし、AIエージェントに読ませます。

- [05-clone-and-first-request.md](05-clone-and-first-request.md)
