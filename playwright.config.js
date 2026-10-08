import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'node:path';

const environment = process.env.TEST_ENV || 'local';

const environmentFiles = {
  local: '.env.local',
  qa: '.env.qa',
  prod: '.env.prod'
};

const envFile = environmentFiles[environment];

if (!envFile) {
  throw new Error(
    `Invalid TEST_ENV "${environment}". Use local, qa, or prod.`
  );
}

const envPath = path.resolve(process.cwd(), envFile);

const dotenvResult = dotenv.config({
  path: envPath,
  override: false
});

if (dotenvResult.error && dotenvResult.error.code !== 'ENOENT') {
  throw new Error(
    `Could not load ${envFile}: ${dotenvResult.error.message}`
  );
}

if (dotenvResult.error?.code === 'ENOENT' && !process.env.CI) {
  throw new Error(`Local environment file not found: ${envPath}`);
}

const {
  BASE_URL,
  LOGIN_USERNAME,
  LOGIN_PASSWORD
} = process.env;

for (const [name, value] of Object.entries({
  BASE_URL,
  LOGIN_USERNAME,
  LOGIN_PASSWORD
})) {
  if (!value) {
    throw new Error(`${name} is missing for environment "${environment}"`);
  }
}

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: [
    'steps/**/*.steps.js',
    'fixtures.js'
  ],
  outputDir: 'tests/generated'
});

export default defineConfig({
  testDir,
  outputDir: 'test-results',

  timeout: 60_000,

  expect: {
    timeout: 20_000
  },

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never'
      }
    ],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results'
      }
    ]
  ],

  use: {
    baseURL: BASE_URL,
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000
  },
projects: [
  {
    name: 'setup',
    testDir: 'session',
    testMatch: /auth\.setup\.js/
  },
  {
    name: 'chromium',
    dependencies: ['setup'],
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json'
    }
  },
  {
    name: 'firefox',
    dependencies: ['setup'],
    use: {
      ...devices['Desktop Firefox'],
      storageState: 'playwright/.auth/user.json'
    }
  },
  {
    name: 'webkit',
    dependencies: ['setup'],
    use: {
      ...devices['Desktop Safari'],
      storageState: 'playwright/.auth/user.json'
    }
  }
]
});