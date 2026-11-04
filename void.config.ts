import { defineConfig } from 'void/config';

export default defineConfig({
  worker: {
    compatibility_date: '2026-10-18',
  },
  cloudflare: {
    name: 'paperless',
    // 公開の入口は決めていない。決めるまで workers.dev と Version URL は閉じる。
    workers_dev: false,
    preview_urls: false,
    limits: { cpu_ms: 100 },
    observability: { enabled: true },
  },
});
