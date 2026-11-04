# paperless

## Story

行政手続きの紙の書類を、平易な質問に答えるだけで書き上げて出せる。

Core actions:
- 手続きの質問に答えて書類を埋める — 手続きのたび（年に数回）
- 記入された書類を確かめ、出すかどうかを自分で決める — 手続きのたび（年に数回）
- 書類をダウンロードして自分で出すか、1件ごとに支払って郵送を頼む — 手続きのたび（年に数回）

## 守る線

- 記入内容の最終確認と提出の意思表示は本人が行う。提出の代理はしない（行政書士法）
- 郵送は日本郵便に差し出すだけにする。自社配達や宅配便で信書を運ばない（信書便法）
- 利用者はログインして使うが、記入の答えはサーバに溜めず端末に残す。アカウント・決済でサーバが持つ情報の範囲は最初の PRD で決める
- マイナンバーをサーバに渡さない
- public repo なので、個人データと記入済み書類は tracked に入れない。置くのは様式とコードだけ

## ディレクトリ構造

```
paperless/
├── routes/      Void の file-based routing
├── tests/       e2e テスト
└── docs/
    ├── prd/     機能ごとの要件・設計書（構造は prd/README.md）
    └── adr/     戻すのが難しい判断（構造は adr/README.md）
```

`docs/` は共有文書として Git で管理する。各 dir 内の構造は README.md に書き、ここには重複させない。

## セットアップ

ツールは mise で管理している。

```bash
mise install
bun install
bun run dev      # http://127.0.0.1:3000
bun run check    # 型検査
bun run build
bun run test:e2e # OPENCODE_API_KEY と OPENCODE_E2E_MODEL を mise から渡す
```

依存は exact pin と cooldown 7 日を `bunfig.toml` で強制している。

## 技術スタック

- Bun + TypeScript
- Void（Cloudflare Workers）
- pdf-lib（記入済み PDF の生成）
- e2e（ブラウザ UI テスト）

未決定で、最初の PRD で決めるもの:

- 利用者認証: Void の機能で足りるか、Better Auth 等を使うか
- 単発決済: Stripe Checkout 等。課金単位・価格・決済手段も含めて決める

## Skills

- Void の route・設定・CLI を触るときは `.agents/skills/void/` を読む
- Cloudflare の製品選定では `.agents/skills/cloudflare/` を読む
- 公開前のレビュー、認証・rate limit・課金対策の設計では `solo-product` skill を読む
- PR レビューの設定は `.github/pullfrog.config.sh` が正本（初回レビューは自動、追加コミットも再レビュー、手動依頼は `@pullfrog`）
- void・cloudflare skill は skillctrl で取り込んだ（void: `voidzero-dev/void@59001202`、cloudflare: `cloudflare/skills@5611bbb3`。管理情報は `skills-lock.json`）
