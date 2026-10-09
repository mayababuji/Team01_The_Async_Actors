import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import {  readAccountData } from '../utils/excel-util.js';

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

When(
  'the user clicks on the Accounts module from the top navigation',
  async ({ accountsPage, logger }) => {
    logger.info('Opening the Accounts navigation menu');

    await accountsPage.openCreateAccountPage();
  }
);

Then(
  'the user should be navigated to the Create Account page',
  async ({ accountsPage, logger }) => {
    logger.info('Verifying the Create Account page is displayed');

    await expect(accountsPage.createAccountPageHeading).toBeVisible();
  
  }
);

When('the user clicks on the Import module from the top navigation', async ({accountsPage,logger}) => {
  logger.info('Verifying the Import module page is displayed');
   await accountsPage.openImportAccountPage();
});

Then(
  'the user should be navigated to the Import module page',
  async ({ accountsPage, logger }) => {
    logger.info('Verifying the Import module  is displayed');

    await expect(accountsPage.importAccountPageHeading).toBeVisible();
  
  }
);

When('the user clicks on the View Accounts module from the top navigation', async ({accountsPage,logger}) => {
  logger.info('Verifying the View Accounts page is displayed');
   await accountsPage.openViewAccountPage();
});

Then('the user should be navigated to the View Accounts module page', async ({accountsPage, logger}) => {
   logger.info('Verifying the View Account module  is displayed');
     await expect(accountsPage.viewAccountPageHeading).toBeVisible();
  
});
Given(
  'the user is on the Create Account page',
  async ({ accountsPage }) => {
    await accountsPage.openCreateAccountPage();
  }
);

When(
  'the user clicks Save without entering the required Name field',
  async ({ accountsPage }) => {
    await accountsPage.clickSaveOnCreateAccountPage();
  }
);

Then(
  'the Name validation message {string} should be displayed',
  async ({ accountsPage }, expectedMessage) => {
    await expect(accountsPage.nameValidationMessage)
      .toHaveText(expectedMessage);
  }
);



When(
  'the user enters valid account details and clicks Save',
  async ({ accountsPage ,logger}) => {
    const account = readAccountData().find(
      row => row.scenario === 'create_account_valid_name'
    );

    if (!account) {
      throw new Error(
        'Scenario "create_account_valid_name" was not found in the Accounts worksheet'
      );
    }
    
logger.info('Account data read from Excel', { account });
    await accountsPage.enterAccountName(account.name);
     await accountsPage.clickSaveOnCreateAccountPage();
  }
);


Then(
  'the user should be navigated to the newly created account detail page',
  async ({ accountsPage }) => {
    const account = readAccountData().find(
      row => row.scenario === 'create_account_valid_name'
    );

    if (!account) {
      throw new Error(
        'Scenario "create_account_valid_name" was not found in the Accounts worksheet'
      );
    }

    await expect(
      accountsPage.getAccountDetailName(account.expectedResult)
    ).toBeVisible();
  }
);