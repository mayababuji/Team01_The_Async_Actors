import { test as base, createBdd } from 'playwright-bdd';

import { LoginPage } from './pages/login.page.js';
import { AccountsPage } from './pages/accounts.page.js';
import { OpportunitiesPage } from './pages/opportunities.page.js';

import { readLoginData } from './utils/excel-util.js';
import { createLogger } from './utils/logger.js';


export const test = base.extend({
  // --------------------------------------------------
  // Page objects
  // --------------------------------------------------

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  opportunitiesPage: async ({ page }, use) => {
    await use(new OpportunitiesPage(page));
  },


  // --------------------------------------------------
  // Account scenario data
  // One object shared by Given, When, and Then
  // --------------------------------------------------

  accountListTestData: async ({}, use) => {
    await use({
      account: null,
      recordUrl: null
    });
  },


  // --------------------------------------------------
  // Opportunity scenario data
  // One object shared by Given, When, and Then
  // --------------------------------------------------

  opportunityTestData: async ({}, use) => {
    await use({
      opportunity: null,
      accountRecordUrl: null,
      opportunityRecordUrl: null
    });
  },


  // --------------------------------------------------
  // Account cleanup
  // --------------------------------------------------

  accountCleanup: async (
    { accountsPage, logger },
    use
  ) => {
    const recordUrls = new Set();

    try {
      await use({
        register(recordUrl) {
          recordUrls.add(recordUrl);
        },

        unregister(recordUrl) {
          recordUrls.delete(recordUrl);
        }
      });
    } finally {
      const failures = [];

      for (const recordUrl of [...recordUrls].reverse()) {
        try {
          logger.info(
            'Deleting test-created account',
            {
              recordUrl
            }
          );

          await accountsPage.deleteAccountByUrl(
            recordUrl
          );

          logger.info(
            'Test-created account deleted',
            {
              recordUrl
            }
          );
        } catch (error) {
          failures.push(error);

          logger.error(
            'Account cleanup failed',
            {
              recordUrl,
              error: String(error)
            }
          );
        }
      }

      if (failures.length > 0) {
        throw new AggregateError(
          failures,
          'Failed to delete one or more test-created accounts.'
        );
      }
    }
  },


  // --------------------------------------------------
  // Opportunity cleanup
  // Dependency ensures this tears down before accountCleanup
  // --------------------------------------------------

  opportunityCleanup: async (
    { opportunitiesPage, accountCleanup, logger },
    use
  ) => {
    const recordUrls = new Set();

    try {
      await use({
        register(recordUrl) {
          if (
            typeof opportunitiesPage.deleteOpportunityByUrl !==
            'function'
          ) {
            throw new Error(
              'Opportunity cleanup requires ' +
              'OpportunitiesPage.deleteOpportunityByUrl(recordUrl). ' +
              'Implement this method before running creation tests.'
            );
          }

          recordUrls.add(recordUrl);
        },

        unregister(recordUrl) {
          recordUrls.delete(recordUrl);
        },

        registerAccount(recordUrl) {
          accountCleanup.register(recordUrl);
        }
      });
    } finally {
      const failures = [];

      for (const recordUrl of [...recordUrls].reverse()) {
        try {
          logger.info(
            'Deleting test-created opportunity',
            {
              recordUrl
            }
          );

          await opportunitiesPage.deleteOpportunityByUrl(
            recordUrl
          );

          logger.info(
            'Test-created opportunity deleted',
            {
              recordUrl
            }
          );
        } catch (error) {
          failures.push(error);

          logger.error(
            'Opportunity cleanup failed',
            {
              recordUrl,
              error: String(error)
            }
          );
        }
      }

      if (failures.length > 0) {
        throw new AggregateError(
          failures,
          'Failed to delete one or more test-created opportunities.'
        );
      }
    }
  },


  // --------------------------------------------------
  // Login data
  // --------------------------------------------------

  loginData: [
    async ({}, use) => {
      console.log(
        'Loading Excel login data once for this worker...'
      );

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


  // --------------------------------------------------
  // Logger
  // --------------------------------------------------

  logger: [
    async ({}, use, testInfo) => {
      const { logger, logPath } = createLogger(testInfo);

      logger.info(
        'Test started',
        {
          environment: process.env.TEST_ENV || 'local',
          browser: testInfo.project.name,
          retry: testInfo.retry,
          testTitle: testInfo.title
        }
      );

      try {
        await use(logger);
      } finally {
        logger.info(
          'Test finished',
          {
            environment: process.env.TEST_ENV || 'local',
            browser: testInfo.project.name,
            retry: testInfo.retry,
            testTitle: testInfo.title,
            status: testInfo.status,
            expectedStatus: testInfo.expectedStatus
          }
        );

        await new Promise((resolve, reject) => {
          logger.once('finish', resolve);
          logger.once('error', reject);
          logger.end();
        });

        await testInfo.attach(
          'Winston execution log',
          {
            path: logPath,
            contentType: 'application/json'
          }
        );
      }
    },
    {
      auto: true
    }
  ],


  // --------------------------------------------------
  // Account import data and cleanup
  // --------------------------------------------------

  accountImportTestData: async (
    { accountsPage, logger },
    use
  ) => {
    const accountImportTestData = {
      download: null,
      importFile: null,
      importedAccounts: [],
      importCompleted: false
    };

    await use(accountImportTestData);

    if (accountImportTestData.importCompleted) {
      try {
        logger.info(
          'Undoing imported accounts'
        );

        await accountsPage.undoImportedAccounts();

        logger.info(
          'Imported accounts undone successfully'
        );
      } catch (error) {
        logger.error(
          'Failed to undo imported accounts',
          {
            error: String(error)
          }
        );
      }
    }
  }
});


export const { Given, When, Then } = createBdd(test);