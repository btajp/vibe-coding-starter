# リポジトリ配置の考え方

この教材では、リポジトリを次の形で配置します。

```text
~/src/github.com/<owner>/<repo>
```

## 例

教材リポジトリ：

```text
~/src/github.com/btajp/vibe-coding-starter
```

学習者の成果物リポジトリ：

```text
~/src/github.com/<your-github-id>/my-vibe-coding-portfolio
```

## なぜこの形にするのか

GitHub上のURLと、ローカルPC上の場所が対応するからです。

```text
https://github.com/btajp/vibe-coding-starter
~/src/github.com/btajp/vibe-coding-starter
```

この対応関係に慣れると、複数のリポジトリを扱うときに迷いにくくなります。

## 避けたい配置

次の場所に無秩序にcloneするのは避けます。

```text
Desktop
Downloads
Documents
OneDrive配下
適当なtestフォルダ
```

理由は、後から探しづらく、教材リポジトリと成果物リポジトリが混ざりやすいためです。

## ghqとの関係

`ghq` は、リポジトリをこのような規則で管理するためのツールです。

この教材では、まず手動で配置を理解し、後で `ghq` を準推奨ツールとして紹介します。
