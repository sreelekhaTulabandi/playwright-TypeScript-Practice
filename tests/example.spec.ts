import { test, expect } from '@playwright/test';

test('Playwright documentation page has the expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});
