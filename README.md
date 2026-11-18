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
