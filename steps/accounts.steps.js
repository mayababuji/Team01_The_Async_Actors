import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';

Given(
  'the authenticated user is on the Suite8Demo home page',
  async ({ page, logger }) => {
    logger.info('Opening Suite8Demo home page with saved authentication');

    await page.goto(`${process.env.BASE_URL}/#/home`);

    await expect(page).toHaveURL(/#\/home/i);
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