# トラブルシューティング

このページでは、エラーが出たときの考え方をまとめます。

## まず整理すること

エラーが出たら、いきなりAIに貼る前に次を整理します。

```text
1. 何をしようとしたか
2. どの環境で実行したか
3. どのディレクトリで実行したか
4. どのコマンドを実行したか
5. どんなエラーが出たか
6. 期待していた結果は何か
7. 直前に何を変更したか
```

## AIに相談するテンプレート

```text
次のエラーについて、原因候補を整理してください。
私は初心者なので、まず何を確認すべきかを順番に教えてください。

環境：
- OS：
- ターミナル：
- シェル：
- 現在のディレクトリ：

実行したコマンド：

エラー：

期待していた結果：

直前に変更したこと：
```

## エラーを貼る前の注意

エラー文やログには、次の情報が含まれる場合があります。

- ユーザー名
- ファイルパス
- APIキー
- トークン
- メールアドレス
- 社内情報
- 個人情報

AIに貼る前に、公開してよい情報か確認してください。

## よくある原因

### 今いるディレクトリが違う

確認します。

```bash
pwd
```

### コマンドが入っていない

確認します。

```bash
command -v git
command -v zsh
command -v node
command -v npm
command -v codex
command -v claude
```

### PATHが反映されていない

macOSの場合、`.zshrc` を読み直します。

```bash
source ~/.zshrc
```

それでも変わらない場合は、ターミナルを開き直してから確認します。

```bash
command -v sed
command -v awk
```

### git commitで名前とメールを求められる

`Author identity unknown` と表示された場合は、Gitのユーザー名またはメールアドレスが未設定です。

これは個人の開発環境に保存される設定です。AIに値を決めさせず、GitHubで使う名前、公開してよいメールアドレス、GitHubのメールプライバシー設定を確認してから設定してください。

確認する公式情報：

- https://docs.github.com/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address
- https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

### GitHubにpushできない

次を確認します。

```bash
git remote -v
git status
```

認証の問題である可能性もあります。GitHubの公式ドキュメントを確認してください。

SSHで接続している場合は、次も確認します。

```bash
ssh -T git@github.com
ls -la ~/.ssh
```

`Permission denied (publickey)` と表示される場合は、GitHubに公開鍵が登録されていない、SSH agentに鍵が読み込まれていない、別の鍵を使っている、remote URLが想定と違う、などが考えられます。

`git@github.com:YOUR_GITHUB_ID/my-vibe-coding-portfolio.git` の `YOUR_GITHUB_ID` が自分のGitHubユーザー名になっているかも確認してください。

### GitHub Pagesが更新されない

まず、pushできているか確認します。

```bash
git status
git log --oneline -3
```

GitHub Pagesの反映には少し時間がかかる場合があります。GitHubのリポジトリ画面で、Pages設定とActionsの実行状況を確認してください。

### AIが違うリポジトリを編集しそう

AIコーディングツールを起動したディレクトリを確認します。

```bash
pwd
git remote -v
```

教材リポジトリで質問したいのか、成果物リポジトリを編集したいのかを分けてください。

### Codex CLIやClaude Codeが起動しない

まずNode.jsとnpmを確認します。

```bash
node --version
npm --version
command -v codex
command -v claude
```

Node.jsのバージョンが古い、npmのグローバルインストール先がPATHに入っていない、インストール方法が途中で失敗した、認証が未完了、などが考えられます。

公式ドキュメントで現在の要件を確認し、エラー文をAIに貼る場合は、APIキーやトークンが含まれていないか確認してください。
