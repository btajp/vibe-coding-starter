---
slug: /route/part-4-local-automation/review-automation
title: 自動化をAIとGitで見直す
---

# 自動化をAIとGitで見直す

## この章でできるようになること

作った自動化をAIにレビューさせ、Git差分で確認し、必要な変更だけcommitできるようになります。

## まず知っておくこと

第4部では、シェルスクリプト、Go、実行権限、PATH、定期実行の入口を扱いました。

ここでは、新しい大きな道具を増やすのではなく、次を確認します。

- 何を作ったか
- どこに置いたか
- どう実行するか
- 何が出力されるか
- 何をcommitするか
- 何をcommitしないか

## commitしないものを整理する

練習用リポジトリに移動します。

```bash
cd ~/vibe-practice/local-automation
```

`bin/` とログファイルをcommitしない方針にする場合、`.gitignore` を作ります。
前章で作っている場合は、中身を確認するだけで構いません。

```bash
cat .gitignore
```

次のような内容があれば、この章で作り直す必要はありません。

```text
bin/
logs/*.log
```

まだ `.gitignore` がない場合だけ作ります。

```bash
cat > .gitignore <<'EOF'
bin/
logs/*.log
EOF
```

すでに別の内容が入っている `.gitignore` を見つけた場合は、上書きせずに止まります。
その場合は、AIに「今の `.gitignore` に `bin/` と `logs/*.log` を追記してよいか」を相談します。

状態を確認します。

```bash
git status
git diff
```

`.gitignore` はcommitして構いません。
実行ファイルやログは、必要に応じて再生成できるものとして扱います。

## AIにレビューさせる

AIに、作ったファイルのレビューを頼みます。

```text
~/vibe-practice/local-automation の内容をレビューしてください。

確認したい観点:
- daily-note.sh は何をしているか
- check-note.sh は失敗を検知できているか
- Goの vibe-note は何をしているか
- bin/ と logs/*.log を .gitignore に入れる方針は妥当か
- 定期実行する前に確認すべきことは何か

まだファイルは変更しないでください。
```

AIが改善案を出したら、すぐに全部直す必要はありません。
小さく1つずつ選びます。

## 小さな改善を頼む

たとえば、ログディレクトリの説明コメントだけを足すなら、依頼を小さくします。

```text
scripts/daily-note.sh に、logs ディレクトリを作る理由がわかる短いコメントを1行だけ追加してください。

条件:
- scripts/daily-note.sh 以外は変更しない
- 処理内容は変えない
- 変更前に、変更予定ファイルと理由を説明する
- 変更後に git diff で確認できる形にする
```

変更後は確認します。

```bash
git status
git diff
```

## commitする

意図した変更だけならcommitします。

```bash
git add .gitignore scripts/daily-note.sh
git status
git diff --staged
```

`.gitignore` がすでにcommit済みで変更がない場合、staged diffには出てきません。
その場合は、`scripts/daily-note.sh` だけが次のcommitに入る状態で問題ありません。

問題なければcommitします。

```bash
git commit -m "Review local automation files"
```

履歴を確認します。

```bash
git log --oneline
git status
```

## 何が起きたのか

第4部では、ローカルだけで動く小さな自動化を作りました。

ここまでの流れは次です。

```text
手動で動かす
↓
実行権限とPATHを理解する
↓
GoでCLIを作る
↓
入出力と終了ステータスを見る
↓
定期実行の考え方を知る
↓
AIとGitで確認する
```

第0部でAIエージェントを導入したこと、第1部でCLIを理解したこと、第3部でGit差分を見ることが、ここでつながっています。

## 運用者の視点

自動化を作るときは、完成よりも運用を見ます。

- どこで動くか
- いつ動くか
- 何を出力するか
- 失敗したらわかるか
- 止められるか
- 秘密情報を扱っていないか
- 変更履歴が残っているか

小さな自動化でも、この視点を持つと安全です。

## AIに聞いてみよう

```text
第4部の練習で作ったローカル自動化を、運用者の視点でレビューしてください。

確認したい観点:
- 手動実行できるか
- ログが残るか
- 失敗に気づけるか
- 定期実行にする前に止め方を確認しているか
- commitしてよいファイルだけが含まれているか

まだ git add、git commit、定期実行の登録はしないでください。
```

## commitポイント

第4部の最後に、練習用リポジトリをcleanにします。

```bash
git status
```

未commitの変更が残っている場合は、commitするか、不要なら戻します。

## 次へ

次は、ブラウザで小さく作る部に進みます。

- [第5部：ブラウザで小さく作る](../part-5-browser-basics/index.md)
