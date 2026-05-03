---
slug: /route/part-8-publish-pages/operate-published-site
title: 公開後に修正して再デプロイする
---

# 公開後に修正して再デプロイする

## この章でできるようになること

公開後に内容を修正し、commit、push、Actions、Pages反映まで確認できるようになります。

## まず知っておくこと

GitHub Pagesで公開した後も、サイトは変更できます。

基本の流れは次です。

```text
ローカルで修正
↓
npm run build
↓
git status / git diff
↓
commit
↓
push
↓
Actions確認
↓
公開URL確認
```

## 小さな修正をする

たとえば、トップページの文章を少し直します。

修正後、ローカルで確認します。

```bash
npm run dev
```

ブラウザで見て、問題なければ止めます。

```text
Ctrl+C
```

buildします。

```bash
npm run build
```

## 差分を確認する

```bash
git status
git diff
```

公開してよい変更だけか確認します。

## commitしてpushする

```bash
git add src README.md docs
git commit -m "Update portfolio content"
git push
```

GitHub Actionsが再実行されます。
Actionsタブで成功を確認し、公開URLを開きます。

## 公開後の維持

公開したサイトには、維持コストがあります。

- 古くなった情報を直す
- リンク切れを直す
- 依存パッケージを更新する
- GitHub Actionsの失敗に対応する
- 公開しすぎた情報がないか見直す

作って終わりではありません。

## 何が起きたのか

GitHub Pagesは、pushをきっかけに再デプロイされます。

自分のローカル変更がcommitになり、GitHubへpushされ、Actionsでbuildされ、公開URLに反映されます。

この一連の流れを理解すると、公開後も落ち着いて修正できます。

## 運用者の視点

公開後は、次を定期的に見ます。

- 公開URLが開けるか
- READMEが古くないか
- 学習ログが現状と合っているか
- Actionsが失敗していないか
- 依存パッケージ更新が必要か
- 公開情報が適切か

Vibe Codingでも、運用責任は人間が持ちます。

## AIに聞いてみよう

```text
公開済みのAstroポートフォリオを更新したいです。

変更前に、次の流れで問題ないか確認してください。
- ローカルで修正
- npm run build
- git status / git diff
- commit
- push
- GitHub Actions確認
- 公開URL確認

公開済みサイトの運用で注意することも整理してください。
まだファイルは変更しないでください。
```

## commitポイント

公開後の修正は、小さくcommitします。

```bash
git log --oneline -n 5
git status
```

Actionsと公開URLまで確認して一区切りです。

## 次へ

次は、卒業レビューと次の学習パスです。

- [07-graduation-review.md](07-graduation-review.md)

