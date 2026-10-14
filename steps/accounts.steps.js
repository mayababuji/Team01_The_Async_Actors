import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import { getAccountDataByScenario } from '../utils/excel-util.js';

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

When('the user clicks on the Import module from the top navigation', async ({ accountsPage, logger }) => {
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

When('the user clicks on the View Accounts module from the top navigation', async ({ accountsPage, logger }) => {
  logger.info('Verifying the View Accounts page is displayed');
  await accountsPage.openViewAccountPage();
});

Then('the user should be navigated to the View Accounts module page', async ({ accountsPage, logger }) => {
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
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_valid_name'
    );

    logger.info('Account data read from Excel', { account });

    await accountsPage.enterAccountName(account.name);
    await accountsPage.clickSaveOnCreateAccountPage();
  }
);


Then(
  'the user should be navigated to the newly created account detail page',
  async ({ accountsPage }) => {
    const account = getAccountDataByScenario(
      'create_account_valid_name'
    );

    await expect(
      accountsPage.getAccountDetailName(account.expectedResult)
    ).toBeVisible();
  }
);


When(
  'the user enters complete overview information from Excel and saves the account',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_complete_overview'
    );

    logger.info('Entering complete account overview data', {
      scenario: account.scenario,
      accountName: account.name
    });

    await accountsPage.enterCompleteOverviewInformation(account);
    await accountsPage.clickSaveOnCreateAccountPage();
  }
);


Then(
  'the account should be created with all entered overview information',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_complete_overview'
    );

    await expect(
      accountsPage.getAccountDetailName(account.expectedResult)
    ).toBeVisible();

    const expectedFields = {
      name: account.name,
      website: account.website,
      phone: account.phone,
      email: account.email,

      billingStreet: account.billingStreet,
      billingPostalCode: account.billingPostalCode,
      billingCity: account.billingCity,
      billingState: account.billingState,
      billingCountry: account.billingCountry,

      shippingStreet: account.shippingStreet,
      shippingPostalCode: account.shippingPostalCode,
      shippingCity: account.shippingCity,
      shippingState: account.shippingState,
      shippingCountry: account.shippingCountry
    };

    for (const [field, value] of Object.entries(expectedFields)) {
      await expect(
        accountsPage.overviewPanel,
        `Expected saved "${field}" to contain "${value}"`
      ).toContainText(value);
    }

    logger.info('Saved account overview values verified', {
      scenario: account.scenario,
      accountName: account.name
    });
  }
);

When(
  'the user enters a valid account name, email address, selects primary email, and saves the account',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_primary_email'
    );

    logger.info('Creating account with primary email', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });

    await accountsPage.enterAccountWithPrimaryEmail(account);

    await expect(
      accountsPage.primaryEmailControl
    ).toBeChecked();

    await accountsPage.clickSaveOnCreateAccountPage();
  }
);


Then(
  'the account should be created with the email address marked as primary',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_primary_email'
    );

    // Confirm that the created account is displayed.
    await expect(
      accountsPage.getAccountDetailName(account.expectedResult)
    ).toBeVisible();

    // Reopen the saved record to verify persisted values.
    await accountsPage.openAccountForEditing();

    await expect(
      accountsPage.emailInput
    ).toHaveValue(account.email);

    await expect(
      accountsPage.primaryEmailControl
    ).toBeChecked();

    logger.info('Saved primary email verified', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });
  }
);


When(
  'the user enters a valid account name, an invalid email address, and clicks the Save button',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_invalid_email'
    );

    logger.info('Entering account data with an invalid email', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });

    await accountsPage.enterAccountWithInvalidEmail(account);
    await accountsPage.clickSaveOnCreateAccountPage();
  }
);


Then(
  'the user should see an email-address validation message',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_invalid_email'
    );

    const validationMessage =
      accountsPage.getEmailValidationMessage(
        account.expectedResult
      );

    await expect(validationMessage).toBeVisible();
    await expect(validationMessage).toHaveText(
      account.expectedResult
    );

    // Confirm the user remains on the Create Account form.
    await expect(
      accountsPage.createAccountPageHeading
    ).toBeVisible();

    logger.info('Invalid email validation verified', {
      scenario: account.scenario,
      expectedMessage: account.expectedResult
    });
  }
);

When(
  'the user clicks the Cancel button without entering data',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.accountNameInput
    ).toHaveValue('');

    await expect(
      accountsPage.emailInput
    ).toHaveValue('');

    logger.info('Clicking Cancel on the empty Create Account form');

    await accountsPage.clickCancelOnCreateAccountPage();
  }
);


Then(
  'the user should be navigated back to the Accounts Dashboard page',
  async ({ page, accountsPage, logger }) => {
    await expect(page).toHaveURL(/#\/accounts\/?(?:\?.*)?$/);

    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();

    logger.info('Returned to the Accounts page after cancelling');
  }
);

Given(
  'the user enters account data entered on the Create Account page',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'cancel_create_account_with_data'
    );

    await accountsPage.openCreateAccountPage();

    await expect(
      accountsPage.createAccountPageHeading
    ).toBeVisible();

    await accountsPage.enterUnsavedAccountData(account);

    await expect(
      accountsPage.accountNameInput
    ).toHaveValue(account.name);

    await expect(
      accountsPage.emailInput
    ).toHaveValue(account.email);

    logger.info('Entered account data without saving', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });
  }
);


When(
  'the user clicks the Cancel button',
  async ({ accountsPage, logger }) => {
    logger.info('Cancelling account creation with unsaved data');

    await accountsPage.clickCancelOnCreateAccountPage();
  }
);


Then(
  'the user should see a confirmation popup for unsaved changes',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'cancel_create_account_with_data'
    );

    const confirmationMessage =
      accountsPage.getUnsavedChangesMessage(
        account.expectedResult
      );

    await expect(confirmationMessage).toBeVisible();

    await expect(confirmationMessage).toHaveText(
      account.expectedResult
    );

    await expect(
      accountsPage.confirmLeaveAccountButton
    ).toBeVisible();

    logger.info('Unsaved-changes confirmation popup verified', {
      scenario: account.scenario,
      expectedMessage: account.expectedResult
    });
  }
);

When(
  'the user discards the unsaved account data from the cancellation popup',
  async ({ accountsPage, logger }) => {
    await accountsPage.clickCancelOnCreateAccountPage();

    await expect(
      accountsPage.confirmLeaveAccountButton
    ).toBeVisible();

    await accountsPage.confirmLeavingAccountCreation();

    logger.info('Unsaved account data discarded from confirmation popup');
  }
);

When(
  'the user dismisses the cancellation popup',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'cancel_create_account_with_data'
    );

    // Click the page Cancel button to open the popup.
    await accountsPage.clickCancelOnCreateAccountPage();

    await expect(
      accountsPage.getUnsavedChangesMessage(
        account.expectedResult
      )
    ).toBeVisible();

    await expect(
      accountsPage.dismissCancellationButton
    ).toBeVisible();

    // Click Cancel inside the popup to continue editing.
    await accountsPage.dismissCancellationPopup();

    logger.info('Dismissed cancellation popup to continue editing');
  }
);


Then(
  'the user should remain on the Create Account page with entered data retained',
  async ({ page, accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'cancel_create_account_with_data'
    );

    await expect(
      accountsPage.getUnsavedChangesMessage(
        account.expectedResult
      )
    ).toBeHidden();

    await expect(page).toHaveURL(
      /#\/accounts\/edit(?:\?|$)/
    );

    await expect(
      accountsPage.createAccountPageHeading
    ).toBeVisible();

    await expect(
      accountsPage.accountNameInput
    ).toHaveValue(account.name);

    await expect(
      accountsPage.emailInput
    ).toHaveValue(account.email);

    await expect(
      accountsPage.accountNameInput
    ).toBeEditable();

    await expect(
      accountsPage.emailInput
    ).toBeEditable();

    logger.info('Create Account form retained entered data', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });
  }
);

Given(
  'the user is on the View Accounts page',
  async ({ accountsPage, logger }) => {
    await accountsPage.openViewAccountPage();

    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();

    logger.info('View Accounts page opened');
  }
);


When(
  'the user searches for an existing account by name',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'search_existing_account_by_name'
    );

    logger.info('Searching Accounts by name', {
      scenario: account.scenario,
      accountName: account.name
    });

    await accountsPage.searchAccountsByName(account.name);
  }
);


Then(
  'the matching account should be displayed',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'search_existing_account_by_name'
    );

    const matchingAccount = accountsPage.getAccountSearchResult(
      account.expectedResult
    );

    await expect(matchingAccount).toBeVisible();

    await expect(matchingAccount).toHaveText(
      account.expectedResult
    );

    logger.info('Matching account displayed', {
      scenario: account.scenario,
      accountName: account.expectedResult
    });
  }
);

When(
  'the user searches with a partial existing account name',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'search_account_partial_name'
    );

    logger.info('Searching Accounts with a partial name', {
      scenario: account.scenario,
      partialName: account.name
    });

    await accountsPage.searchAccountsByName(account.name);
  }
);

When(
  'the user searches for a non-existing account name',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'search_non_existing_account'
    );

    logger.info('Searching for a non-existing account', {
      scenario: account.scenario,
      accountName: account.name
    });

    await accountsPage.searchAccountsByName(account.name);
  }
);


Then(
  'a no-results message should be displayed',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'search_non_existing_account'
    );

    const noResultsMessage =
      accountsPage.getAccountSearchNoResultsMessage(
        account.expectedResult
      );

    await expect(noResultsMessage).toBeVisible();

    await expect(noResultsMessage).toHaveText(
      account.expectedResult
    );

    logger.info('No-results message verified', {
      scenario: account.scenario,
      accountName: account.name,
      expectedMessage: account.expectedResult
    });
  }
);

Given(
  'the user  with an existing account displayed is on the View Accounts page',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'open_account_from_list'
    );

    await accountsPage.openViewAccountPage();

    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();

    await expect(
      accountsPage.getAccountListLink(account.name)
    ).toBeVisible();

    logger.info('Existing account displayed on View Accounts page', {
      scenario: account.scenario,
      accountName: account.name
    });
  }
);


When(
  'the user selects an account name from the list',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'open_account_from_list'
    );

    await accountsPage.openAccountFromList(account.name);

    logger.info('Selected account from Accounts list', {
      accountName: account.name
    });
  }
);


Then(
  'the selected account detail page should be displayed',
  async ({ page, accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'open_account_from_list'
    );

    await expect(page).toHaveURL(
      /#\/accounts\/record\/[^/?#]+(?:[/?#]|$)/
    );

    await expect(
      accountsPage.getAccountDetailName(account.expectedResult)
    ).toBeVisible();

    logger.info('Selected account detail page displayed', {
      scenario: account.scenario,
      accountName: account.expectedResult
    });
  }
);

Given(
  'the user has opened an existing account detail page',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'account_recently_viewed'
    );

    await accountsPage.openViewAccountPage();

    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();

    await expect(
      accountsPage.getAccountListLink(account.name)
    ).toBeVisible();

    await accountsPage.openAccountFromList(account.name);

 

    logger.info('Opened existing account detail page', {
      scenario: account.scenario,
      accountName: account.name
    });
  }
);


When(
  'the user opens Recently Viewed from the Accounts module',
  async ({ accountsPage, logger }) => {
    await accountsPage.openAccountsRecentlyViewed();

    await expect(
      accountsPage.accountsRecentlyViewedPanel
    ).toBeVisible();

    logger.info('Opened Accounts > Recently Viewed');
  }
);


Then(
  'the existing account should be displayed in Recently Viewed',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'account_recently_viewed'
    );

    const recentlyViewedAccount =
      accountsPage.getRecentlyViewedAccount(
        account.expectedResult
      );

    await expect(recentlyViewedAccount).toBeVisible();

    await expect(recentlyViewedAccount).toHaveText(
      account.expectedResult
    );

    logger.info('Account verified in Recently Viewed', {
      scenario: account.scenario,
      accountName: account.expectedResult
    });
  }
);