import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import { env } from '../utils/env.js';

Given(
  'the user is successfully logged in to the Suite8Demo application',
  async ({ page, loginPage, logger }) => {
    logger.info('Opening Suite8Demo login page for Accounts scenario');

    await loginPage.open();

    logger.info('Logging in before Accounts navigation test');

    await loginPage.login(
      env.username,
      env.password
    );

    await expect(page).toHaveURL(/home/i);

    logger.info('User logged in successfully and reached the home page');
  }
);

When(
  'the user hovers over the Accounts module in the top navigation',
  async ({ accountsPage, logger }) => {
    logger.info('Hovering over Accounts module in top navigation');

    await accountsPage.hoverAccountsModule();

    logger.info('Hovered over Accounts module');
  }
);

Then(
  'the user should see the Accounts dropdown options',
  async ({ accountsPage, logger }, dataTable) => {
    const options = dataTable.raw().flat();

    logger.info('Verifying Accounts dropdown options', {
      options
    });

    for (const optionName of options) {
      const option = await accountsPage.getDropdownOption(optionName);

      await expect(option).toBeVisible();
    }

    logger.info('All Accounts dropdown options are visible', {
      options
    });
  }
);