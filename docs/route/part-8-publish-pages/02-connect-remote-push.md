---
slug: /route/part-8-publish-pages/connect-remote-push
title: remoteを接続してpushする
---

# remoteを接続してpushする

## この章でできるようになること

ローカルのAstroポートフォリオにGitHubリポジトリを `origin` として設定し、pushできるようになります。

## まず知っておくこと

remoteは、ローカルリポジトリが覚えているリモートリポジトリの接続先です。

第7部では、forkの `origin` と元リポジトリの `upstream` を扱いました。
第8部では、自分の成果物リポジトリの `origin` を設定します。

## remoteを確認する

```bash
cd ~/vibe-projects/vibe-portfolio
git remote -v
```

まだ何も表示されない場合は、remoteが設定されていません。

## originを追加する

GitHub上で作ったリポジトリURLを使います。

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/vibe-portfolio.git
```

確認します。

```bash
git remote -v
```

`YOUR_GITHUB_USERNAME` は自分のGitHubユーザー名に置き換えます。

## push前に確認する

```bash
git status
git log --oneline -n 5
```

確認したいこと:

- 作業ツリーがcleanか
- 公開してよいcommitだけか
- `node_modules` や `.env` が含まれていないか
- `origin` が自分の成果物リポジトリか

## pushする

branch名を確認します。

```bash
git branch
```

`main` で作業している場合:

```bash
git push -u origin main
```

認証を求められたら、GitHubの案内に従います。
トークン、認証コード、秘密鍵はAIに貼りません。

## 何が起きたのか

ローカルのAstroポートフォリオを、GitHub上の自分のリポジトリへpushしました。

第7部では、forkへpushしてPRを出しました。
今回は、自分の成果物リポジトリへpushしています。

## 運用者の視点

pushは、ローカルの履歴をリモートへ送る操作です。

送る前に、次を必ず見ます。

```bash
git status
git remote -v
git log --oneline -n 5
```

どこへ何を送るのかを説明できない状態でpushしないでください。

## AIに聞いてよいこと

```text
git status、git remote -v、git log --oneline -n 5 の結果を見て、
GitHubへpushしてよい状態か確認してください。

確認したい観点:
- originが自分のvibe-portfolioリポジトリか
- 公開してよいcommitだけか
- .env、node_modules、秘密情報が含まれていないか

まだ git push は実行しないでください。
```

## commitポイント

この章では、commit済みの内容をpushします。
push後は、GitHub上でファイルが見えるか確認します。

## 次へ

次は、AstroをGitHub Pages向けに設定します。

- [03-configure-astro-pages.md](03-configure-astro-pages.md)

