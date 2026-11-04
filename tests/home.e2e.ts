import { test } from '@e2e-dev/web';

test('トップページで何のサービスか分かる', async ({ app, agent }) => {
  await app.open('/');
  await agent.assert('行政手続きの書類に関するサービスを開発中だと分かる');
});
