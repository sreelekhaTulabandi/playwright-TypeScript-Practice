# Playwright TypeScript Practice

A hands-on repository for building strong Playwright automation skills with TypeScript through small, consistent exercises.

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
npx playwright install chromium
```

### Run the tests

```bash
npm test                 # Run tests in headless mode
npm run test:headed      # Run tests with a visible browser
npm run test:ui          # Open Playwright UI mode
npm run test:report      # Open the latest HTML report, when generated
```

## Targeting another environment

The Playwright configuration uses `https://playwright.dev` by default so the sample test works in a clean checkout. Set `BASE_URL` to reuse the same tests against a different application environment; the value must be a complete HTTP or HTTPS URL.

macOS / Linux:

```bash
BASE_URL=https://your-test-environment.example npm test
```

PowerShell:

```powershell
$env:BASE_URL = "https://your-test-environment.example"
npm test
```

The setting is read from the process environment, so no environment-specific URL or credential needs to be committed. Do not put secrets in `BASE_URL`.

## Project structure

```text
.
├── tests/
│   └── example.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Practice approach

Each practice session focuses on one practical concept. Exercises will grow from TypeScript and locator fundamentals to fixtures, Page Object Model, API testing, framework design, and CI/CD. Keep changes small, test them, and use clear commit messages.
