# macOSのBSD系ツールとGNU系ツール

macOSはUNIX系のOSですが、Linuxとは同じではありません。

特に、標準で入っている `sed` や `awk` などはBSD系の実装で、Linuxで一般的に使われるGNU版と挙動が異なる場合があります。

## なぜ問題になるのか

教材やWeb記事で紹介されているコマンドは、Linux前提で書かれていることがあります。

その場合、macOSで同じコマンドを実行しても、次のようなことが起きる可能性があります。

- オプションが使えない
- 出力が違う
- エラーになる
- スクリプトが動かない

## この教材の方針

この教材では、macOSでもHomebrewでGNU系ツールを導入します。

```bash
brew install gawk gnu-sed
```

`.zshrc` に次のようなPATH設定を入れます。

```zsh
# >>> vibe-coding-starter >>>
if command -v brew >/dev/null 2>&1; then
  export PATH="$(brew --prefix gnu-sed)/libexec/gnubin:$PATH"
  export PATH="$(brew --prefix gawk)/libexec/gnubin:$PATH"
fi
# <<< vibe-coding-starter <<<
```

## 確認する

```bash
command -v sed
sed --version | head -n 1
command -v awk
awk --version | head -n 1
```

GNU版が優先されていれば、`sed --version` や `awk --version` が使えます。

## 戻したい場合

`.zshrc` から次のブロックを削除します。

```text
# >>> vibe-coding-starter >>>
...
# <<< vibe-coding-starter <<<
```

その後、ターミナルを開き直します。

## 運用者の視点

PATHを変更すると、同じコマンド名でも実行されるプログラムが変わることがあります。

これは便利ですが、環境差分の原因にもなります。

変更した内容をコメント付きで残し、戻し方も理解しておきましょう。
