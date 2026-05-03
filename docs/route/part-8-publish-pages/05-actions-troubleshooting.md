---
slug: /route/part-8-publish-pages/actions-troubleshooting
title: Actions失敗時にログを見る
---

# Actions失敗時にログを見る

## この章でできるようになること

GitHub Actionsが失敗したときに、ログを見て原因を切り分けられるようになります。

## まず知っておくこと

GitHub Actionsが失敗しても、慌てる必要はありません。

失敗したjobとstepを開き、ログを読みます。
第1部で学んだエラー文の読み方、第5部で学んだConsole確認、第6部で学んだbuild確認と同じ考え方です。

GitHub上では、次の順に開きます。

```text
Actionsタブ
→ 失敗したworkflow run
→ 失敗したjob
→ 赤くなっているstep
→ エラー周辺のログ
```

画面全体を一気に読もうとせず、赤くなっているstepから見ます。

## よくある失敗

### npm run buildが失敗する

ローカルでも同じように失敗するか確認します。

```bash
cd ~/vibe-projects/vibe-portfolio
npm run build
```

ローカルでも失敗するなら、まずローカルで直します。
ローカルでも同じエラーが出る場合は、GitHub Actions固有の問題ではなく、プロジェクト側のbuildエラーです。

### package-lock.jsonがない

npmを使っている場合、`package-lock.json` はcommitします。

```bash
git status
```

`package-lock.json` が未commitなら、commitします。
`node_modules` はcommitしません。

### CSSやリンクが壊れる

GitHub Pagesのリポジトリページでは、URLにリポジトリ名が入ります。

```text
https://YOUR_GITHUB_USERNAME.github.io/vibe-portfolio/
```

Astroの `base` が合っていないと、CSSやリンクが壊れることがあります。
`astro.config.mjs` の `site` と `base` を見直します。

### 404になる

公開URL、リポジトリ名、Pages設定、Actions結果を確認します。

すぐに反映されないこともあります。
ただし、Actionsが失敗している場合は、まずログを見ます。

## ログをAIに相談する

Actionsのログには、秘密情報が混ざる可能性があります。
貼る前に確認してください。
ログ全体をそのまま貼るより、失敗したstep名とエラー周辺だけを抜き出します。

貼ってよいことが多いもの:

- 失敗したstep名
- エラー文
- `npm run build` の失敗ログ
- ファイルパス

貼らないもの:

- Secretsの値
- トークン
- APIキー
- 認証コード
- 秘密鍵

## 何が起きたのか

GitHub Actionsは、GitHub上の環境でコマンドを実行しています。

自分のPCでは動いても、GitHub上では失敗することがあります。
Node.jsのバージョン、依存関係、base設定、ファイルの大文字小文字などが原因になることがあります。

## 運用者の視点

失敗時は、次の順番で見ます。

```text
どのworkflowか
どのjobか
どのstepか
どのコマンドで失敗したか
最初のエラーは何か
ローカルでも再現するか
```

最後のエラーだけでなく、最初に失敗した場所を見るのが大切です。

## AIに聞いてみよう

```text
GitHub Actionsのログで、AstroのGitHub Pagesデプロイが失敗しました。

次の情報を貼ります。
- 失敗したworkflow名
- 失敗したjob名
- 失敗したstep名
- エラー文
- astro.config.mjs の site/base
- package.json の scripts

秘密情報、トークン、APIキー、認証コードは貼っていません。
原因候補と、次にローカルで確認するコマンドを教えてください。
まだファイルは変更しないでください。
```

## 修正してpushする前に確認する

修正した場合は、ローカルでbuildしてからcommitします。

```bash
npm run build
git status
git diff
git add astro.config.mjs .github/workflows/deploy.yml package-lock.json package.json
git diff --staged
git commit -m "Fix GitHub Pages deployment"
git push
```

`git add` の対象は、実際に直したファイルに合わせます。
何を直したかわからないまま、まとめてaddしないでください。

## 次へ

次は、公開後に修正して再デプロイします。

- [06-operate-published-site.md](06-operate-published-site.md)
