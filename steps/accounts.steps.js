import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import path from 'node:path';
import { stat } from 'node:fs/promises';
import { readAccountImportCsv } from '../utils/csv-util.js';
import { getAccountDataByScenario } from '../utils/excel-util.js';



const ACCOUNT_RECORD_URL =
  /#\/accounts\/record\/[^/?#]+(?:[/?#]|$)/;


const ACCOUNTS_LIST_URL =
  /#\/accounts\/edit(?:\?.*)?$/;


const ACCOUNT_IMPORT_FILE = path.resolve(
  'test-data',
  'AccountsImportNew.csv'
);


const ACCOUNT_SAVED_URL =
  /#\/accounts\/edit\?.*return_action=DetailView/;


// --------------------------------------------------
// Background
// --------------------------------------------------


Given(
  'the authenticated user is on the Suite8Demo home page',
  async ({ page, logger }) => {
    logger.info(
      'Opening Suite8Demo home page with saved authentication'
    );


    await page.goto(`${process.env.BASE_URL}/#/home`);
    await page.waitForURL(/#\/home(?:[/?#]|$)/i);
  }
);


// --------------------------------------------------
// Accounts navigation
// --------------------------------------------------


When(
  'the user hovers over the Accounts module in the top navigation',
  async ({ accountsPage, logger }) => {
    logger.info('Hovering over Accounts module');


    await accountsPage.hoverAccountsModule();
  }
);


Then(
  'the user should see the Accounts dropdown options',
  async ({ accountsPage, logger }, dataTable) => {
    const options = dataTable.raw().flat();


    for (const optionName of options) {
      await expect(
        accountsPage.getDropdownOption(optionName)
      ).toBeVisible();
    }


    logger.info('All Accounts dropdown options are visible', {
      options
    });
  }
);


When(
  'the user clicks on the Accounts module from the top navigation',
  async ({ accountsPage }) => {
    await accountsPage.openCreateAccountPage();
  }
);


Then(
  'the user should be navigated to the Create Account page',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.createAccountPageHeading
    ).toBeVisible();


    logger.info('Create Account page displayed');
  }
);


When(
  'the user clicks on the Import module from the top navigation',
  async ({ accountsPage }) => {
    await accountsPage.openImportAccountPage();
  }
);


Then(
  'the user should be navigated to the Import module page',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.importAccountPageHeading
    ).toBeVisible();


    logger.info('Import Accounts page displayed');
  }
);


When(
  'the user clicks on the View Accounts module from the top navigation',
  async ({ accountsPage }) => {
    await accountsPage.openViewAccountPage();
  }
);


Then(
  'the user should be navigated to the View Accounts module page',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();


    logger.info('View Accounts page displayed');
  }
);


// --------------------------------------------------
// Required Name validation
// --------------------------------------------------


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
    await expect(
      accountsPage.nameValidationMessage
    ).toBeVisible();


    await expect(
      accountsPage.nameValidationMessage
    ).toHaveText(expectedMessage);
  }
);


// --------------------------------------------------
// Create account with mandatory data
// --------------------------------------------------


When(
  'the user enters valid account details and clicks Save',
  async ({ page, accountsPage, logger, accountCleanup }) => {
    const account = getAccountDataByScenario(
      'create_account_valid_name'
    );


    logger.info('Creating account with mandatory data', {
      scenario: account.scenario,
      accountName: account.name
    });


    await accountsPage.enterAccountName(account.name);
    await accountsPage.clickSaveOnCreateAccountPage();


    await page.waitForURL(ACCOUNT_RECORD_URL);


    const recordUrl = page.url();


    accountCleanup.register(recordUrl);


    logger.info('Account registered for cleanup', {
      scenario: account.scenario,
      accountName: account.name,
      recordUrl
    });
  }
);


Then(
  'the user should be navigated to the newly created account detail page',
  async ({ page, accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_valid_name'
    );


    await expect(page).toHaveURL(ACCOUNT_RECORD_URL);


    await expect(
      accountsPage.getAccountDetailName(
        account.expectedResult
      )
    ).toBeVisible();


    logger.info(
      'Newly created account detail page displayed',
      {
        scenario: account.scenario,
        accountName: account.name
      }
    );
  }
);


// --------------------------------------------------
// Create account with complete overview information
// --------------------------------------------------


When(
  'the user enters complete overview information from Excel and saves the account',
  async ({
    accountsPage,
    logger,
    accountCleanup
  }) => {
    const account = getAccountDataByScenario(
      'create_account_complete_overview'
    );


    logger.info('Creating account with complete overview data', {
      scenario: account.scenario,
      accountName: account.name
    });


    const recordUrl =
      await accountsPage.createCompleteAccount(account);


    accountCleanup.register(recordUrl);


    logger.info('Account registered for cleanup', {
      scenario: account.scenario,
      accountName: account.name,
      recordUrl
    });
  }
);


Then(
  'the account should be created with all entered overview information',
  async ({ page, accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_complete_overview'
    );


    await expect(page).toHaveURL(ACCOUNT_RECORD_URL);


    await expect(
      accountsPage.getAccountDetailName(
        account.expectedResult
      )
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


    for (const [field, value] of Object.entries(
      expectedFields
    )) {
      if (value === undefined || value === null) {
        throw new Error(
          `Missing Excel value for overview field "${field}".`
        );
      }


      await expect(
        accountsPage.overviewPanel,
        `Expected saved "${field}" to contain "${value}"`
      ).toContainText(String(value));
    }


    logger.info('Saved account overview values verified', {
      scenario: account.scenario,
      accountName: account.name
    });
  }
);


// --------------------------------------------------
// Create account with primary email
// --------------------------------------------------


When(
  'the user enters a valid account name, email address, selects primary email, and saves the account',
  async ({
    accountsPage,
    logger,
    accountCleanup
  }) => {
    const account = getAccountDataByScenario(
      'create_account_primary_email'
    );


    logger.info('Creating account with primary email', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });


    const recordUrl =
      await accountsPage.createAccountWithPrimaryEmail(
        account
      );


    accountCleanup.register(recordUrl);


    logger.info('Account registered for cleanup', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email,
      recordUrl
    });
  }
);


Then(
  'the account should be created with the email address marked as primary',
  async ({ page, accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'create_account_primary_email'
    );


    const recordUrl = page.url();


    await expect(page).toHaveURL(ACCOUNT_RECORD_URL);


    await expect(
      accountsPage.getAccountDetailName(
        account.expectedResult
      )
    ).toBeVisible();


    await accountsPage.openAccountEditing();

    await expect(
      accountsPage.emailInput
    ).toHaveValue(account.email);


    await expect(
      accountsPage.primaryEmailControl
    ).toBeChecked();


    await accountsPage.clickCancelOnCreateAccountPage();


    await expect(
      accountsPage.saveButton
    ).toBeHidden();


    await expect(
      accountsPage.editAccountButton
    ).toBeVisible();


    await expect(page).toHaveURL(recordUrl);


    logger.info('Saved primary email verified', {
      scenario: account.scenario,
      accountName: account.name,
      email: account.email
    });
  }
);


// --------------------------------------------------
// Invalid email validation
// --------------------------------------------------


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


    await expect(
      accountsPage.createAccountPageHeading
    ).toBeVisible();


    logger.info('Invalid email validation verified', {
      scenario: account.scenario,
      expectedMessage: account.expectedResult
    });
  }
);


// --------------------------------------------------
// Cancel without entered data
// --------------------------------------------------


When(
  'the user clicks the Cancel button without entering data',
  async ({ accountsPage, logger }) => {
    await accountsPage.accountNameInput.fill('');
    await accountsPage.emailInput.fill('');


    logger.info('Cancelling empty Create Account form');


    await accountsPage.clickCancelOnCreateAccountPage();
  }
);


Then(
  'the user should be navigated back to the Accounts Dashboard page',
  async ({ page, accountsPage, logger }) => {
    await expect(page).toHaveURL(ACCOUNTS_LIST_URL);


    await expect(
      accountsPage.accountsModule
    ).toBeVisible();


    logger.info(
      'Returned to the Accounts page after cancelling'
    );
  }
);


// --------------------------------------------------
// Unsaved account data
// --------------------------------------------------


Given(
  'the user enters account data entered on the Create Account page',
  async ({ accountsPage, logger }) => {
    const account = getAccountDataByScenario(
      'cancel_create_account_with_data'
    );


    await accountsPage.openCreateAccountPage();
    await accountsPage.enterUnsavedAccountData(account);


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
    logger.info('Cancelling account creation');


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


    logger.info(
      'Unsaved-changes confirmation popup verified',
      {
        scenario: account.scenario,
        expectedMessage: account.expectedResult
      }
    );
  }
);


When(
  'the user discards the unsaved account data from the cancellation popup',
  async ({ accountsPage, logger }) => {
    await accountsPage.clickCancelOnCreateAccountPage();
    await accountsPage.confirmLeavingAccountCreation();


    logger.info(
      'Unsaved account data discarded from confirmation popup'
    );
  }
);


When(
  'the user dismisses the cancellation popup',
  async ({ accountsPage, logger }) => {
    await accountsPage.clickCancelOnCreateAccountPage();
    await accountsPage.dismissCancellationPopup();


    logger.info(
      'Dismissed cancellation popup to continue editing'
    );
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


    await expect(page).toHaveURL(ACCOUNTS_LIST_URL);


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


// --------------------------------------------------
// Shared View Accounts setup
// --------------------------------------------------


Given(
  'the user is on the View Accounts page',
  async ({ accountsPage, logger }) => {
    await accountsPage.openViewAccountPage();


    logger.info('View Accounts page opened');
  }
);


// --------------------------------------------------
// Search prerequisite and cleanup registration
// --------------------------------------------------


Given(
  'an account exists for the account name search {string}',
  async ({
    accountsPage,
    logger,
    accountCleanup
  }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    const recordUrl =
      await accountsPage.createAccount(account);


    accountCleanup.register(recordUrl);


    await accountsPage
      .getAccountDetailName(account.name)
      .waitFor({
        state: 'visible'
      });


    logger.info('Created account for account name search', {
      scenario: account.scenario,
      accountName: account.name,
      recordUrl
    });


    await accountsPage.openViewAccountPage();
  }
);


// --------------------------------------------------
// Search by full account name
// --------------------------------------------------


When(
  'the user searches for an existing account by name {string}',
  async ({ accountsPage, logger }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    logger.info('Searching Accounts by name', {
      scenario: account.scenario,
      accountName: account.name
    });


    await accountsPage.searchAccountsByName(account.name);
  }
);


Then(
  'the matching account should be displayed for {string}',
  async ({ accountsPage, logger }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    const matchingAccount =
      accountsPage.getAccountSearchResult(
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


// --------------------------------------------------
// Search by partial account name
// --------------------------------------------------


When(
  'the user searches with a partial existing account name {string}',
  async ({ accountsPage, logger }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    const searchText = String(
      account.searchText ?? ''
    ).trim();


    if (!searchText) {
      throw new Error(
        `Missing Excel SearchText for scenario "${scenarioKey}".`
      );
    }


    if (
      searchText === account.name ||
      !account.name.includes(searchText)
    ) {
      throw new Error(
        `SearchText must be a non-empty partial value of Name for scenario "${scenarioKey}".`
      );
    }


    logger.info('Searching Accounts with a partial name', {
      scenario: account.scenario,
      accountName: account.name,
      searchText
    });


    await accountsPage.searchAccountsByName(searchText);
  }
);


// --------------------------------------------------
// Search for a non-existing account
// --------------------------------------------------


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


// --------------------------------------------------
// Open account from the list
// --------------------------------------------------


Given(
  'an account is available on the View Accounts page',
  async ({
    accountsPage,
    logger,
    accountListTestData,
    accountCleanup
  }) => {
    const account = getAccountDataByScenario(
      'open_account_from_list'
    );


    accountListTestData.account = account;


    const recordUrl =
      await accountsPage.createAccount(account);


    accountCleanup.register(recordUrl);
    accountListTestData.recordUrl = recordUrl;


    await accountsPage
      .getAccountDetailName(account.name)
      .waitFor({
        state: 'visible'
      });


    await accountsPage.openViewAccountPage();


    await accountsPage
      .getAccountListLink(account.name)
      .waitFor({
        state: 'visible'
      });


    logger.info('Account available on View Accounts page', {
      scenario: account.scenario,
      accountName: account.name,
      recordUrl
    });
  }
);


When(
  'the user selects an account name from the list',
  async ({ accountsPage, logger, accountListTestData }) => {
    const account = accountListTestData.account;


    if (!account) {
      throw new Error(
        'Account test data was not initialized by the Given step.'
      );
    }


    await accountsPage.openAccountFromList(account.name);


    logger.info('Selected account from Accounts list', {
      accountName: account.name
    });
  }
);


Then(
  'the selected account detail page should be displayed',
  async ({
    accountsPage,
    logger,
    accountListTestData
  }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account test data or record URL was not initialized by the Given step.'
      );
    }


    await expect(
      accountsPage.getAccountDetailName(
        account.expectedResult
      )
    ).toBeVisible();


    logger.info('Selected account detail page displayed', {
      scenario: account.scenario,
      accountName: account.expectedResult,
      recordUrl
    });
  }
);


// --------------------------------------------------
// Recently Viewed
// --------------------------------------------------


Given(
  'the user has opened an existing account detail page',
  async ({
    accountsPage,
    logger,
    accountCleanup
  }) => {
    const account = getAccountDataByScenario(
      'account_recently_viewed'
    );


    const recordUrl =
      await accountsPage.createAccount(account);


    accountCleanup.register(recordUrl);


    await accountsPage
      .getAccountDetailName(account.name)
      .waitFor({
        state: 'visible'
      });


    logger.info(
      'Created and opened account for Recently Viewed test',
      {
        scenario: account.scenario,
        accountName: account.name
      }
    );
  }
);


When(
  'the user opens Recently Viewed from the Accounts module',
  async ({ accountsPage, logger }) => {
    await accountsPage.openAccountsRecentlyViewed();


    await accountsPage.accountsRecentlyViewedPanel.waitFor({
      state: 'visible'
    });


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


// --------------------------------------------------
// Sort accounts by name
// --------------------------------------------------


Given(
  'the user can see multiple accounts displayed while on view page',
  async ({ accountsPage, logger }) => {
    await accountsPage.openViewAccountPage();


    await accountsPage.accountsListTable.waitFor({
      state: 'visible'
    });


    await accountsPage.accountNameListLinks.nth(1).waitFor({
      state: 'visible'
    });


    logger.info('Accounts list ready for sorting');
  }
);


When(
  'the user sorts the account list by name in ascending order',
  async ({ accountsPage, logger }) => {
    await accountsPage.sortAccountsByNameAscending();


    logger.info(
      'Toggled Name sorting away from descending'
    );
  }
);


Then(
  'accounts should be displayed in ascending name order',
  async ({ accountsPage }) => {
    await expect(async () => {
      const names =
        await accountsPage.getDisplayedAccountNames();


      expect(names.length).toBeGreaterThan(1);


      expect(names).toEqual(
        [...names].sort((a, b) =>
          a.localeCompare(b, 'en', {
            sensitivity: 'base'
          })
        )
      );
    }).toPass();
  }
);


// --------------------------------------------------
// Update account website
// --------------------------------------------------


Given(
  'a new account exists for updating its website {string}',
  async ({
    accountsPage,
    accountListTestData,
    accountCleanup,
    logger
  }, scenarioKey) => {
    const account =
      getAccountDataByScenario(scenarioKey);


    accountListTestData.account = account;


    const recordUrl =
      await accountsPage.createAccount(account);


    accountListTestData.recordUrl = recordUrl;
    accountCleanup.register(recordUrl);


    await accountsPage.waitForAccountDetailPage();


    logger.info('Created account for website update', {
      scenario: scenarioKey,
      accountName: account.name,
      originalWebsite: account.website,
      recordUrl
    });
  }
);


When(
  'the user updates the account website and saves the changes',
  async ({
    accountsPage,
    accountListTestData,
    logger
  }) => {
    const account = accountListTestData.account;


    if (!account || !accountListTestData.recordUrl) {
      throw new Error(
        'Website update requires an account created by this scenario.'
      );
    }


    await accountsPage.openAccountEditing();
    await accountsPage.enterAccountWebsite(
      account.updatedWebsite
    );
    await accountsPage.saveAccountChanges();


    logger.info('Updated account website', {
      accountName: account.name,
      updatedWebsite: account.updatedWebsite,
      recordUrl: accountListTestData.recordUrl
    });
  }
);


Then(
  'the account website should be updated successfully',
  async ({ accountsPage, accountListTestData }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account data or record URL is missing.'
      );
    }


    await accountsPage.reloadAccountDetailPage();
    await accountsPage.openAccountEditing();


    await expect(
      accountsPage.websiteInput
    ).toHaveValue(account.expectedResult);


    await accountsPage.cancelAccountEditing();
  }
);


// --------------------------------------------------
// Update account office phone number
// --------------------------------------------------


Given(
  'a new account exists for updating its office phone number {string}',
  async ({
    accountsPage,
    accountListTestData,
    accountCleanup,
    logger
  }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    accountListTestData.account = account;


    const recordUrl =
      await accountsPage.createAccount(account);


    accountListTestData.recordUrl = recordUrl;
    accountCleanup.register(recordUrl);


    await accountsPage.waitForAccountDetailPage();


    logger.info(
      'Created account for office phone update',
      {
        scenario: scenarioKey,
        accountName: account.name,
        originalPhone: account.phone,
        recordUrl
      }
    );
  }
);


When(
  'the user updates the office phone number and saves the changes',
  async ({
    accountsPage,
    accountListTestData,
    logger
  }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Office phone update requires an account created by this scenario.'
      );
    }


    await accountsPage.openAccountEditing();
    await accountsPage.enterAccountOfficePhone(
      account.updatedPhone
    );
    await accountsPage.saveAccountChanges();


    logger.info('Saved updated account office phone', {
      accountName: account.name,
      updatedPhone: account.updatedPhone,
      recordUrl
    });
  }
);


Then(
  'the account office phone number should be updated successfully',
  async ({ page, accountsPage, accountListTestData }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account data or record URL is missing.'
      );
    }


    await page.goto(recordUrl);
    await accountsPage.waitForAccountDetailPage();


    await expect(
      accountsPage.officePhoneDetail
    ).toHaveText(account.expectedResult);
  }
);


// --------------------------------------------------
// Cancel changes while editing an account
// --------------------------------------------------


Given(
  'the user is editing a newly created account {string}',
  async ({
    accountsPage,
    accountListTestData,
    accountCleanup,
    logger
  }, scenarioKey) => {
    const account = getAccountDataByScenario(scenarioKey);


    accountListTestData.account = account;
    accountListTestData.recordUrl = null;


    const recordUrl =
      await accountsPage.createAccountWithWebsite(account);


    accountCleanup.register(recordUrl);
    accountListTestData.recordUrl = recordUrl;


    await accountsPage.waitForAccountDetailPage();


    await accountsPage.openAccountForEditing();


    await accountsPage.enterAccountWebsite(
      account.updatedWebsite
    );


    logger.info(
      'Created account and entered an unsaved website change',
      {
        scenario: scenarioKey,
        accountName: account.name,
        originalWebsite: account.website,
        unsavedWebsite: account.updatedWebsite,
        recordUrl
      }
    );
  }
);


When(
  'the user cancels the account changes',
  async ({
    accountsPage,
    accountListTestData,
    logger
  }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Cancel editing requires an account created by this scenario.'
      );
    }


    logger.info(
      'Cancelled editing and discarded the unsaved changes',
      {
        accountName: account.name,
        discardedWebsite: account.updatedWebsite,
        recordUrl
      }
    );
  }
);


Then(
  'the existing account details should remain unchanged',
  async ({
    page,
    accountsPage,
    accountListTestData,
    logger
  }) => {
    const { account, recordUrl } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account data or record URL is missing.'
      );
    }


    await expect(page).toHaveURL(recordUrl);


    await accountsPage.openSavedAccountForVerification(
      recordUrl
    );


    try {
      await expect(
        accountsPage.accountNameInput
      ).toHaveValue(account.name);


      await expect(
        accountsPage.websiteInput
      ).toHaveValue(account.expectedResult);
    } finally {
      await accountsPage.cancelAccountEditing();
    }


    logger.info(
      'Original account details verified after cancellation',
      {
        accountName: account.name,
        originalWebsite: account.expectedResult
      }
    );
  }
);


// --------------------------------------------------
// Import Accounts
// --------------------------------------------------


Given(
  'the user is on the Import Accounts page',
  async ({ accountsPage }) => {
    await accountsPage.openImportAccountPage();
     // Wait until the imported iframe content is ready.
    await accountsPage.importAccountPageHeading.waitFor({
      state: 'visible'
    });


    // Temporary diagnostics.
    console.log(
      'Import Accounts frame body ARIA snapshot:\n',
      await accountsPage.importFrameBody.ariaSnapshot()
    );

  }
);


When(
  'the user downloads the account import template',
  async ({
    accountsPage,
    accountImportTestData,
    $testInfo
  }) => {
    const download =
      await accountsPage.downloadAccountImportTemplate();


    accountImportTestData.download = download;


    await download.saveAs(
      $testInfo.outputPath(download.suggestedFilename())
    );
  }
);


Then(
  'the account import template should be downloaded successfully',
  async ({ accountImportTestData }) => {
    const { download } = accountImportTestData;


    if (!download) {
      throw new Error(
        'No account import template download was captured.'
      );
    }


    expect(await download.failure()).toBeNull();


    const filePath = await download.path();


    if (!filePath) {
      throw new Error(
        'Downloaded template file path is missing.'
      );
    }


    expect((await stat(filePath)).size).toBeGreaterThan(0);
  }
);


When(
  'the user selects a valid account import file',
  async ({ accountsPage }) => {
    await accountsPage.selectAccountImportFile(
      ACCOUNT_IMPORT_FILE
    );
  }
);


Then(
  'the selected import filename should be displayed',
  async ({ accountsPage }) => {
    await expect(
      accountsPage.accountImportFileInput
    ).toBeVisible();


    const filename =
      await accountsPage.getSelectedImportFileName();


    expect(filename).toBe(
      path.basename(ACCOUNT_IMPORT_FILE)
    );
  }
);


Given(
  'the user is with a valid account import file selected on the Import Accounts page',
  async ({ accountsPage, logger }) => {
    logger.info(
      'Opening Import Accounts page and selecting valid import file'
    );


    await accountsPage.openImportAccountPage();
    await accountsPage.selectAccountImportFile(
      ACCOUNT_IMPORT_FILE
    );


    logger.info('Valid account import file selected');
  }
);


When(
  'the user clicks Next on the Import Accounts page',
  async ({ accountsPage, logger }) => {
    logger.info('Clicking Next on the Import Accounts page');


    await accountsPage.clickAccountImportNextButton();
  }
);


Then(
  'the next account import configuration step should be displayed',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.accountImportConfigurationHeading
    ).toBeVisible();


    await expect(
      accountsPage.accountImportConfigurationHeading
    ).toHaveText(
      'Step 2: Confirm Import File Properties'
    );


    await expect(
      accountsPage.accountImportFileInput
    ).toBeHidden();


    await expect(
      accountsPage.accountImportNextButton
    ).toBeVisible();


    logger.info(
      'Next account import configuration step displayed'
    );
  }
);


Given(
  'a valid import file containing new account data is available',
  async ({
    accountsPage,
    accountImportTestData,
    logger
  }) => {
    const importedAccounts = await readAccountImportCsv(
      ACCOUNT_IMPORT_FILE
    );


    accountImportTestData.importFile = ACCOUNT_IMPORT_FILE;
    accountImportTestData.importedAccounts = importedAccounts;


    await accountsPage.openImportAccountPage();
    await accountsPage.selectAccountImportFile(
      ACCOUNT_IMPORT_FILE
    );


    logger.info('Valid account import file is available', {
      importFile: ACCOUNT_IMPORT_FILE,
      importedAccountCount: importedAccounts.length
    });
  }
);


When(
  'the user completes the account import using Create new records only',
  async ({
    accountsPage,
    accountImportTestData,
    logger
  }) => {
    logger.info(
      'Completing account import using Create new records only'
    );


    await accountsPage.clickAccountImportNextButton();
    await accountsPage.confirmImportFileProperties();
    await accountsPage.confirmAccountFieldMappings();
    await accountsPage.importNewRecordsOnly();


    accountImportTestData.importCompleted = true;


    logger.info(
      'Account import completed using Create new records only'
    );
  }
);


Then(
  'the imported accounts should contain the values provided in the file',
  async ({
    accountsPage,
    accountImportTestData,
    logger
  }) => {
    const importedAccounts =
      accountImportTestData.importedAccounts;


    if (!importedAccounts?.length) {
      throw new Error(
        'Imported account data was not initialized by the Given step.'
      );
    }


    await expect(
      accountsPage.importResultsHeading
    ).toBeVisible();


    await expect(
      accountsPage.importResultsSummary
    ).toHaveText(
      `${importedAccounts.length} records were created`
    );


    await expect(
      accountsPage.importResultsCreatedTab
    ).toBeVisible();


    for (const account of importedAccounts) {
      const accountRow =
        accountsPage.getImportedAccountRow(account.Name);


      await expect(accountRow).toBeVisible();
      await expect(accountRow).toContainText(account.Name);


      if (account['Office Phone']) {
        await expect(
          accountsPage.getImportedAccountField(
            account.Name,
            account['Office Phone']
          )
        ).toBeVisible();
      }


      if (account['Email Address']) {
        await expect(
          accountsPage.getImportedAccountField(
            account.Name,
            account['Email Address']
          )
        ).toBeVisible();
      }
    }


    logger.info(
      'Imported account names, phone numbers, and email addresses verified in Step 5'
    );
  }
);


Given(
  'the user selects Import Accounts page without a file selected',
  async ({ accountsPage, logger }) => {
    logger.info(
      'Opening Import Accounts page without selecting a file'
    );


    await accountsPage.openImportAccountPage();
    await accountsPage.clearAccountImportFile();


    logger.info(
      'Import Accounts page opened without a file selected'
    );
  }
);


When(
  'the user attempts to proceed to the next import step',
  async ({ accountsPage, logger }) => {
    logger.info(
      'Attempting to proceed to the next import step without selecting a file'
    );


    await accountsPage.attemptAccountImportNext();
    
  }
);


Then(
  'the user should remain on the Upload Import File page without starting an import',
  async ({ accountsPage, logger }) => {
    await expect(
      accountsPage.accountImportMissingFileMessage
    ).toBeVisible();


    await expect(
      accountsPage.accountImportMissingFileMessage
    ).toHaveText(
      'Missing required fields: Select a file to upload.'
    );


    await expect(
      accountsPage.importAccountPageHeading
    ).toBeVisible();


    await expect(
      accountsPage.importAccountPageHeading
    ).toHaveText('Step 1: Upload Import File');


    await expect(
      accountsPage.accountImportFileInput
    ).toBeVisible();


    const selectedFileName =
      await accountsPage.getSelectedImportFileName();


    expect(selectedFileName).toBeNull();


    await expect(
      accountsPage.importFilePropertiesHeading
    ).toBeHidden();


    logger.info(
      'Missing-file validation displayed and import did not proceed'
    );
  }
);


// --------------------------------------------------
// Delete account
// --------------------------------------------------


Given(
  'a new account exists for deletion {string}',
  async ({
    page,
    accountsPage,
    accountListTestData,
    accountCleanup,
    logger
  }, scenarioKey) => {
    const account =
      getAccountDataByScenario(scenarioKey);


    accountListTestData.account = account;
    accountListTestData.recordUrl = null;


    const recordUrl =
      await accountsPage.createAccount(account);


    accountCleanup.register(recordUrl);


    accountListTestData.recordUrl = recordUrl;


    await accountsPage.waitForAccountDetailPage();


    await accountsPage.searchAccountsByName(
      account.name
    );


    await accountsPage
      .getAccountSearchResult(account.name)
      .waitFor({
        state: 'visible'
      });


    await page.goto(recordUrl);


    await accountsPage.waitForAccountDetailPage();


    logger.info(
      'Created account for deletion',
      {
        scenario: account.scenario,
        accountName: account.name,
        recordUrl
      }
    );
  }
);


When(
  'the user deletes the account and confirms the deletion',
  async ({
    accountsPage,
    accountListTestData,
    accountCleanup,
    logger
  }) => {
    const {
      account,
      recordUrl
    } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account deletion requires an account ' +
        'created by the Given step.'
      );
    }


    await accountsPage.deleteAccountByUrl(
      recordUrl
    );


    accountCleanup.unregister(recordUrl);


    logger.info(
      'Deleted the test-created account',
      {
        scenario: account.scenario,
        accountName: account.name,
        recordUrl
      }
    );
  }
);


Then(
  'the deleted account should no longer appear in search results',
  async ({
    page,
    accountsPage,
    accountListTestData,
    logger
  }) => {
    const {
      account,
      recordUrl
    } = accountListTestData;


    if (!account || !recordUrl) {
      throw new Error(
        'Account data or record URL is missing.'
      );
    }


    await expect(page).toHaveURL(
      /#\/accounts\/?(?:\?.*)?$/
    );


    await expect(
      accountsPage.viewAccountPageHeading
    ).toBeVisible();


    await accountsPage.searchAccountsByName(
      account.name
    );


    const noResultsMessage =
      accountsPage.getAccountSearchNoResultsMessage(
        account.expectedResult
      );


    await expect(
      noResultsMessage
    ).toBeVisible();


    await expect(
      noResultsMessage
    ).toHaveText(
      account.expectedResult
    );


    await expect(
      accountsPage.getAccountSearchResult(
        account.name
      )
    ).toHaveCount(0);


    logger.info(
      'Deleted account is absent from search results',
      {
        scenario: account.scenario,
        accountName: account.name,
        deletedRecordUrl: recordUrl
      }
    );
  }
);