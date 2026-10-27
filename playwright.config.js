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

if (
  dotenvResult.error &&
  dotenvResult.error.code !== 'ENOENT'
) {
  throw new Error(
    `Could not load ${envFile}: ${dotenvResult.error.message}`
  );
}

if (
  dotenvResult.error?.code === 'ENOENT' &&
  !process.env.CI
) {
  throw new Error(
    `Local environment file not found: ${envPath}`
  );
}

const {
  BASE_URL,
  LOGIN_USERNAME,
  LOGIN_PASSWORD
} = process.env;

for (
  const [name, value] of Object.entries({
    BASE_URL,
    LOGIN_USERNAME,
    LOGIN_PASSWORD
  })
) {
  if (!value) {
    throw new Error(
      `${name} is missing for environment "${environment}"`
    );
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

  timeout: 90_000,

  expect: {
    timeout: 20_000,
    toPass: {
      timeout: 20_000
    }
  },

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
 workers: process.env.CI ? 4 : 4,

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
    ],
    [
      'perfetto',
      {
        outputFile: 'test-results/perfetto.json.gz'
      }
    ]
  ],
  

  use: {
    baseURL: BASE_URL,
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 20_000,
    navigationTimeout: process.env.CI ? 45_000 : 30_000
  },

projects: [
  {
    name: 'setup',
    default: false,
    testDir: 'session',
    testMatch: /auth\.setup\.js/,

    use: {
      ...devices['Desktop Chrome'],
      storageState: {
        cookies: [],
        origins: []
      }
    }
  },

  // Login tests: logged out, no setup dependency.
  {
    name: 'login-chromium',
    testMatch: /login\.feature\.spec\.js/,

    use: {
      ...devices['Desktop Chrome'],
      storageState: {
        cookies: [],
        origins: []
      }
    }
  },

  {
    name: 'login-firefox',
    default: false,
    testMatch: /login\.feature\.spec\.js/,

    use: {
      ...devices['Desktop Firefox'],
      storageState: {
        cookies: [],
        origins: []
      }
    }
  },

  {
    name: 'login-webkit',
    default: false,
    testMatch: /login\.feature\.spec\.js/,

    use: {
      ...devices['Desktop Safari'],
      storageState: {
        cookies: [],
        origins: []
      }
    }
  },

  // Non-login tests: use saved authentication.
  {
    name: 'chromium',
    testIgnore: /login\.feature\.spec\.js/,
    dependencies: ['setup'],

    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json'
    }
  },

  {
    name: 'firefox',
    default: false,
    testIgnore: /login\.feature\.spec\.js/,
    dependencies: ['setup'],

    use: {
      ...devices['Desktop Firefox'],
      storageState: 'playwright/.auth/user.json'
    }
  },

  {
    name: 'webkit',
    default: false,
    testIgnore: /login\.feature\.spec\.js/,
    dependencies: ['setup'],

    use: {
      ...devices['Desktop Safari'],
      storageState: 'playwright/.auth/user.json'
    }
  }
]
});