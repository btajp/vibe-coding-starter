# macOSとWindows / WSL Ubuntuの違い

このページでは、macOSとWSL Ubuntuの違いを整理します。

## 大きな違い

| 観点 | macOS | Windows / WSL Ubuntu |
|---|---|---|
| OS本体 | macOS | Windows |
| 開発で使うCLI環境 | ターミナル上のzsh | WSL Ubuntu上のzsh |
| パッケージ管理 | Homebrew | apt |
| ファイル配置 | `/Users/...` | `/home/...` |
| Linuxとの近さ | UNIX系だがLinuxではない | Linux環境に近い |

## Windows本体とWSLを混同しない

Windowsユーザーは、次の違いを意識してください。

```text
Windows本体
PowerShell
コマンドプロンプト
WSL
Ubuntu
Ubuntu上のzsh
```

この教材の本線では、WindowsユーザーはUbuntu上のzshで作業します。

## macOSはLinuxではない

macOSではLinuxと似たコマンドが使えますが、完全に同じではありません。

特に、標準の `sed` や `awk` はBSD系で、Linuxで一般的なGNU版と違う場合があります。

この教材では、macOSでもHomebrewでGNU版のツールを入れ、挙動差を小さくします。

## 共通化する方針

この教材では、次を共通化します。

- zshを基本シェルにする
- Gitを使う
- `~/src/github.com/...` にリポジトリを置く
- Claude Code / Codexをリポジトリルートで起動する
- GitHub Pagesで公開する
