import { defineConfig, devices } from '@playwright/test';

// Override BASE_URL to run the same tests against another application environment.
// Keep the default target useful for a clean checkout of this practice repository.
const configuredBaseURL = process.env.BASE_URL?.trim() || 'https://playwright.dev';

let baseURL: URL;

try {
  baseURL = new URL(configuredBaseURL);
} catch {
  throw new Error(
    `Invalid BASE_URL "${configuredBaseURL}". Provide a complete http:// or https:// URL.`,
  );
}

if (baseURL.protocol !== 'http:' && baseURL.protocol !== 'https:') {
  throw new Error(
    `Unsupported BASE_URL protocol "${baseURL.protocol}". Only http:// and https:// are supported.`,
  );
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: baseURL.toString(),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
