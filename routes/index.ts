import { defineHandler } from 'void';

const home = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>paperless</title>
  </head>
  <body>
    <h1>paperless</h1>
    <p>行政手続きの紙の書類を、質問に答えるだけで書き上げて出せるサービスを開発中です。</p>
  </body>
</html>`;

export const GET = defineHandler(() => home);
