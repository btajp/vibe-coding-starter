---
slug: /route/part-7-github-collaboration/public-github
title: GitHubで公開されるものを確認する
---

# GitHubで公開されるものを確認する

## この章でできるようになること

GitHub上で公開される可能性がある情報を理解し、Pull Requestを出す前に確認できるようになります。

## まず知っておくこと

GitHubは、リポジトリを置き、変更を共有するサービスです。

公開リポジトリでは、次の情報が他の人から見える可能性があります。

- GitHubユーザー名
- プロフィール
- commit
- Pull Request
- コメント
- 追加したファイル
- commitに記録された名前とメールアドレス

第1部で扱った秘密情報の考え方を、ここでも使います。

## commit用メールアドレス

Gitのcommitには、名前とメールアドレスが記録されます。

第3部や第6部では、練習用に `learner@example.com` を使いました。
GitHubにpushするcommitでは、GitHubのメールプライバシー設定を確認します。

GitHubには、個人メールアドレスを公開しないためのnoreplyメールアドレスがあります。
正確な値は、GitHubのSettingsのEmailsで確認してください。
この値は自分のアカウントごとに違うため、AIに決めさせません。

PR練習用リポジトリでは、次のように設定します。

```bash
git config user.name "YOUR_GITHUB_USERNAME"
git config user.email "YOUR_GITHUB_NOREPLY_EMAIL"
```

`YOUR_GITHUB_USERNAME` と `YOUR_GITHUB_NOREPLY_EMAIL` は、自分の値に置き換えます。
この設定は、次章以降でPR練習用リポジトリをcloneしてから、そのリポジトリの中で行います。

## SSH公開鍵と秘密鍵

GitHubに接続するとき、SSH鍵を使うことがあります。

SSH公開鍵は、GitHubに登録してよい鍵です。
SSH秘密鍵は、自分だけが持つ鍵です。
多くの場合、公開鍵のファイル名は `.pub` で終わります。
秘密鍵は `.pub` が付かないファイルです。

秘密鍵はAIに貼りません。
GitHubにも貼りません。

```text
公開鍵
→ GitHubに登録してよい

秘密鍵
→ 自分だけが持つ。貼らない、公開しない
```

この部では、SSH設定を必須にしません。
HTTPSやブラウザ認証で進められる場合は、それで構いません。
秘密情報やSSH鍵の扱いは、リファレンスの [安全の基本](../../reference/safety-basics.md) でも確認できます。

## 感想PRで書かないこと

この教材では、`reviews/` に感想ファイルを追加します。

書かないもの:

- 本名を出したくない場合の本名
- 住所
- 電話番号
- メールアドレス
- 学校名や勤務先など公開したくない所属
- APIキー
- トークン
- 秘密鍵
- 認証コード
- 他人を攻撃する内容

公開される文章なので、AIが書いた文章でも自分で確認します。

## AIに聞いてみよう

AIに、公開前チェックを頼みます。

```text
GitHubでPull Requestを出す前に、公開される可能性がある情報を確認したいです。

確認したい観点:
- GitHubユーザー名
- commitに記録される名前とメール
- PR本文
- 追加するMarkdownファイル
- 秘密情報や個人情報
- SSH公開鍵と秘密鍵の違い

まだファイルは変更しないでください。
```

## 何が起きたのか

第0部では、GitHub上の教材リポジトリをcloneしました。
そのときは、見る側でした。

第7部では、GitHubに自分の変更を送ります。
見る側から、変更を提案する側に変わるため、公開される情報を先に確認しています。

## 運用者の視点

GitHubに出す情報は、後から消しても履歴や通知に残ることがあります。

送る前に次を見ます。

```bash
git status
git diff
git log --oneline
```

そして、GitHub上のPR画面でも最終確認します。

## commitポイント

この章では、まだファイルは変更しません。
commitは不要です。

## 次へ

次は、Starとforkを体験します。

- [02-star-and-fork.md](02-star-and-fork.md)
