

import { test as base, createBdd } from 'playwright-bdd';

import { LoginPage } from './pages/login.page.js';
import { AccountsPage } from './pages/accounts.page.js';
import { readLoginData } from './utils/excel-util.js';
import { createLogger } from './utils/logger.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  loginData: [
    async ({}, use) => {
      console.log('Loading Excel login data once for this worker...');

      const data = readLoginData();

      await use(data);
    },
    {
      scope: 'worker'
    }
  ],

  selectedLoginData: async ({}, use) => {
    let currentRow;

    await use({
      set(row) {
        currentRow = row;
      },

      get() {
        return currentRow;
      }
    });
  },

  logger: [
    async ({}, use, testInfo) => {
      const { logger, logPath } = createLogger(testInfo);

      logger.info('Test started', {
        environment: process.env.TEST_ENV || 'local',
        browser: testInfo.project.name,
        retry: testInfo.retry,
        testTitle: testInfo.title
      });

      try {
        await use(logger);
      } finally {
        logger.info('Test finished', {
          environment: process.env.TEST_ENV || 'local',
          browser: testInfo.project.name,
          retry: testInfo.retry,
          testTitle: testInfo.title,
          status: testInfo.status,
          expectedStatus: testInfo.expectedStatus
        });

        await new Promise((resolve, reject) => {
          logger.once('finish', resolve);
          logger.once('error', reject);
          logger.end();
        });

        await testInfo.attach('Winston execution log', {
          path: logPath,
          contentType: 'application/json'
        });
      }
    },
    {
      auto: true
    }
  ]
});

export const { Given, When, Then } = createBdd(test);