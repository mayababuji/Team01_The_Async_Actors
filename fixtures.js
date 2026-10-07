import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from './pages/login.page.js';
import { readLoginData } from './utils/excel-util.js';
import { createLogger } from './utils/logger.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
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

  logger: async ({}, use, testInfo) => {
    const { logger, logPath } = createLogger(testInfo);

    logger.info('Test started');

    try {
      await use(logger);
    } finally {
      logger.info('Test finished', {
        status: testInfo.status,
        expectedStatus: testInfo.expectedStatus
      });

      await new Promise(resolve => {
        logger.on('finish', resolve);
        logger.end();
      });

      await testInfo.attach('Winston execution log', {
        path: logPath,
        contentType: 'application/json'
      });
    }
  }
});

export const { Given, When, Then } = createBdd(test);
