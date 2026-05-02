# 次のラーニングパス

このページは、教材を終えた後に進める学習パスを紹介します。

ここにある内容は、初期版教材に完全には含めません。  
ただし、Vibe Codingを続けるなら、どこかの段階で出会うテーマです。

## 学び方の基本

新しいツールを学ぶときは、まず次を確認してください。

```text
1. 何を解決するためのツールか
2. いまの自分に本当に必要か
3. 公式ドキュメントはどこか
4. インストールすると環境に何が変わるか
5. アンインストールや戻し方はあるか
6. AIに聞く場合、どの前提を伝えるべきか
```

AIに聞くときは、次のような形式が便利です。

```text
私はVibe Codingを始めたばかりの初心者です。
次のツールについて、何を解決するものか、今の私に必要か、
最初に読むべき公式ドキュメント、最小の試し方、注意点を説明してください。

ツール名：<ここにツール名>
私の環境：macOS / WSL Ubuntu
現在できること：CLI、Git、GitHub Pagesの基礎
```

## zshカスタマイズ

学ぶこと：

- `.zshrc`
- プロンプト
- Gitブランチ表示
- Git状態表示
- 補完
- エイリアス

おすすめの調べ方：

```text
zsh prompt git branch beginner
zshrc alias beginner
Starship prompt official docs
Oh My Zsh official docs
```

AIに聞く例：

```text
zshのプロンプトにGitブランチを表示したいです。
初心者向けに、最小構成、.zshrcに書く内容、戻し方を説明してください。
```

## asdf

asdfは、Node.js、Python、Rubyなど複数の言語ランタイムのバージョンを管理するためのツールです。

公式サイト：

- https://asdf-vm.com/

学ぶこと：

- ランタイムバージョン
- `.tool-versions`
- プロジェクトごとのバージョン固定

AIに聞く例：

```text
asdfは何を解決するツールですか。
Node.jsのバージョン管理を例に、初心者向けに説明してください。
この教材で学んだPATHやzshとの関係も説明してください。
```

## nvm / Node.jsバージョン管理

nvmは、Node.jsのバージョンを切り替えるためのツールです。

この教材のMVPでは、まずOSごとの基本導入経路でNode.jsを入れ、付属するnpmを最新版に更新して使います。nvmは必須にしません。

nvmを学ぶタイミング：

- プロジェクトごとに必要なNode.jsバージョンが違う
- 古い教材や既存プロジェクトで特定のNode.jsバージョンが必要
- npmのグローバルインストール先や権限で困る
- 複数のJavaScript / TypeScriptプロジェクトを並行して扱う

AIに聞く例：

```text
Node.jsをOS標準の方法で入れる場合と、nvmで管理する場合の違いを説明してください。
初心者が最初はnvmなしで進め、後からnvmを学ぶ判断基準も教えてください。
```

## dotenv / `.env`

`.env` は、環境変数や秘密情報を扱うときに登場します。

公式・参考：

- https://www.dotenv.org/docs/security/env.html
- https://github.com/motdotla/dotenv
- https://nodejs.org/api/environment_variables.html

学ぶこと：

- 環境変数
- 秘密情報
- `.gitignore`
- APIキー
- 本番環境と開発環境

AIに聞く例：

```text
.envファイルとは何ですか。
なぜGitHubにcommitしてはいけないことがあるのか、
APIキーを例に初心者向けに説明してください。
```

## devenv / Nix

devenvやNixは、再現性の高い開発環境を作るための道具です。

公式サイト：

- https://devenv.sh/
- https://nixos.org/

学ぶこと：

- 再現性
- 宣言的な環境
- パッケージ管理
- チームで同じ環境を使うこと

AIに聞く例：

```text
devenvとNixは何を解決するものですか。
Homebrewやaptでツールを入れる方法と比べて、何が違うのかを初心者向けに説明してください。
```

## tmux

tmuxは、ターミナル上で複数の作業画面を管理するためのツールです。

公式・参考：

- https://github.com/tmux/tmux/wiki

学ぶこと：

- セッション
- ペイン
- ウィンドウ
- detach / attach
- 長時間作業

AIに聞く例：

```text
tmuxとは何ですか。
ターミナル作業を複数並行して進めるとき、どのように役立つのかを初心者向けに説明してください。
```

## AWSなどのIaaS

AWSは、サーバー、ストレージ、ネットワークなどのクラウドインフラを提供するサービスです。

公式サイト：

- https://aws.amazon.com/getting-started/
- https://docs.aws.amazon.com/

学ぶこと：

- クラウド
- サーバー
- ネットワーク
- 認証情報
- 課金
- セキュリティ
- 監視

注意：

AWSなどのIaaSは、課金やセキュリティの責任が大きくなります。初心者は、公式チュートリアルを使い、不要なリソースを削除する習慣を必ず持ってください。

AIに聞く例：

```text
AWSで初心者が最初に注意すべき課金とセキュリティのポイントを説明してください。
無料枠、IAM、アクセスキー、リソース削除の観点で整理してください。
```

## VercelなどのPaaS

Vercelは、Webアプリや静的サイトをデプロイするためのプラットフォームです。

公式サイト：

- https://vercel.com/docs
- https://vercel.com/docs/getting-started-with-vercel

学ぶこと：

- デプロイ
- Git連携
- Preview環境
- 本番環境
- 環境変数
- ログ
- ドメイン

AIに聞く例：

```text
GitHub PagesとVercelの違いを、初心者向けに説明してください。
静的サイト、Webアプリ、環境変数、運用責任の観点で比較してください。
```

## どの順番で学ぶべきか

おすすめの順番は、目的によって変わります。

### 開発環境を整えたい

```text
zshカスタマイズ
↓
ghq
↓
nvm
↓
asdf
↓
dotenv
↓
devenv / Nix
```

### Webアプリを公開したい

```text
JavaScript基礎
↓
Webアプリ基礎
↓
GitHub Pages
↓
Vercel
↓
環境変数
↓
ログと監視
```

### 業務改善をしたい

```text
PythonまたはJavaScript基礎
↓
ファイル操作
↓
CSV処理
↓
API
↓
認証情報管理
↓
運用設計
```

### クラウドを学びたい

```text
Web公開の基礎
↓
DNSとドメイン
↓
VercelなどのPaaS
↓
AWSなどのIaaS
↓
認証・課金・セキュリティ
```

## 卒業後の姿勢

新しいツールを入れる前に、次を考えてください。

```text
それは今の課題を本当に解決するか
入れることで何が複雑になるか
維持できるか
戻せるか
公式ドキュメントを確認したか
AIの説明を鵜呑みにしていないか
```

Vibe Codingは、学習を省略する方法ではありません。

AIを使って、学習と実践の往復を速くする方法です。
