import { expect } from '@playwright/test';

export class AccountsPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.accountsModule = page
      .getByText('Accounts', { exact: true })
      .filter({ visible: true });

    this.createAccountOption = page.getByRole('link', {
      name: /create account/i
    });

    this.importAccountsOption = page.getByRole('link', {
      name: /import accounts/i
    });

    this.viewAccountsOption = page.getByRole('link', {
      name: /view accounts/i
    });

    // Page headings and panels
    this.createAccountPageHeading = page.getByText('Create', {
      exact: true
    });

    this.importAccountPageHeading = page
      .frameLocator('iframe[src*="module=Import"]')
      .getByRole('heading', {
        name: 'Step 1: Upload Import File'
      });

    this.viewAccountPageHeading = page.getByText('ACCOUNTS', {
      exact: true
    });

    this.overviewPanel = page.getByRole('tabpanel', {
      name: 'OVERVIEW',
      exact: true
    });

    // Form buttons
    this.saveButton = page.getByRole('button', {
      name: 'Save',
      exact: true
    });

    this.cancelCreateAccountButton = page.getByRole('button', {
      name: 'Cancel',
      exact: true
    });

    this.editAccountButton = page.getByRole('button', {
      name: 'Edit',
      exact: true
    });

    // Validation
    this.nameValidationMessage = page.getByText(
      'Missing required field: Name',
      { exact: true }
    );

    // Overview inputs
    this.accountNameInput = page
      .locator('scrm-field.field-name-name')
      .getByRole('textbox');

    this.websiteInput = page
      .locator('scrm-field.field-name-website')
      .getByRole('textbox');

    this.officePhoneInput = page
      .locator('scrm-dynamic-field.dynamic-field-name-phone_office')
      .getByRole('textbox');

    this.emailInput = page
      .locator('scrm-dynamic-field.dynamic-field-type-email')
      .getByRole('textbox');

    // Address inputs
    const addressFields = {
      billingStreetInput: 'billing_address_street',
      billingPostalCodeInput: 'billing_address_postalcode',
      billingCityInput: 'billing_address_city',
      billingStateInput: 'billing_address_state',
      billingCountryInput: 'billing_address_country',

      shippingStreetInput: 'shipping_address_street',
      shippingPostalCodeInput: 'shipping_address_postalcode',
      shippingCityInput: 'shipping_address_city',
      shippingStateInput: 'shipping_address_state',
      shippingCountryInput: 'shipping_address_country'
    };

    for (const [property, fieldName] of Object.entries(addressFields)) {
      this[property] = page
        .locator(
          `scrm-dynamic-field.dynamic-field-name-${fieldName}`
        )
        .getByRole('textbox');
    }

    this.primaryEmailControl = page
      .locator(
        'scrm-dynamic-field.dynamic-field-name-primary_address'
      )
      .locator('input[type="checkbox"]');

    // Unsaved-changes popup
    this.confirmLeaveAccountButton = page
      .locator('button.modal-button')
      .filter({ hasText: /^\s*Ok\s*$/i });

    this.dismissCancellationButton = page
      .locator('button.modal-button')
      .filter({ hasText: /^\s*Cancel\s*$/ });

    // Global search
    this.accountSearchNameInput = page.getByPlaceholder(
      'Search...',
      { exact: true }
    );

    this.searchResultsFrame = page.frameLocator(
      'scrm-classic-view-ui iframe'
    );

    // Recently Viewed
   // Find the module dropdown containing the Accounts navigation options.
this.accountsDropdown = page
  .locator('div.dropdown-menu.submenu')
  .filter({
    has: page.getByRole('link', {
      name: 'Create Account',
      exact: true
    })
  })
  .filter({ visible: true });

this.accountsRecentlyViewedSection =
  this.accountsDropdown.locator(
    'scrm-sub-menu-recently-viewed'
  );

this.accountsRecentlyViewedTrigger =
  this.accountsRecentlyViewedSection.locator(
    'scrm-label[labelkey="LBL_LAST_VIEWED"]'
  );

this.accountsRecentlyViewedPanel =
  this.accountsRecentlyViewedSection.locator(
    'ul.dropdown-menu.submenu'
  );

   
    // this.recordActionsButton = page.getByRole('button', {
    //   name: 'Actions',
    //   exact: true
    // });
    this.recordActionsButton = page
  .locator('scrm-base-record-header')
  .getByRole('button', {
    name: 'Actions',
    exact: true
  });

    this.deleteAccountAction = page.getByText('Delete', {
      exact: true
    });

  this.confirmDeleteAccountButton = page.getByRole('button', {
  name: 'Proceed',
  exact: true
});
this.deleteAccountConfirmationMessage = page.getByText(
  'Are you sure you want to delete this record?',
  { exact: true }
);
  }

  // Navigation

  async hoverAccountsModule() {
    await this.accountsModule.hover();
  }

  getDropdownOption(optionName) {
    const options = {
      'Create Account': this.createAccountOption,
      'Import Accounts': this.importAccountsOption,
      'View Accounts': this.viewAccountsOption
    };

    const option = options[optionName];

    if (!option) {
      throw new Error(
        `Unknown Accounts dropdown option: "${optionName}"`
      );
    }

    return option;
  }

  async clickDropdownOption(optionName) {
    await this.getDropdownOption(optionName).click();
  }

  async openCreateAccountPage() {
    await this.hoverAccountsModule();
    await this.createAccountOption.click();
  }

  async openImportAccountPage() {
    await this.hoverAccountsModule();
    await this.importAccountsOption.click();
  }

  async openViewAccountPage() {
    await this.hoverAccountsModule();
    await this.viewAccountsOption.click();
  }

  // Account creation and editing

  async enterAccountName(name) {
    await this.accountNameInput.fill(name);
  }

  async clickSaveOnCreateAccountPage() {
    await this.saveButton.click();
  }

  async clickCancelOnCreateAccountPage() {
    await this.cancelCreateAccountButton.click();
  }

  async openAccountForEditing() {
    await this.editAccountButton.click();
  }

  getAccountDetailName(expectedName) {
    return this.overviewPanel.getByText(expectedName, {
      exact: true
    });
  }

  async enterCompleteOverviewInformation(account) {
    const fields = {
      name: this.accountNameInput,
      website: this.websiteInput,
      phone: this.officePhoneInput,
      email: this.emailInput,

      billingStreet: this.billingStreetInput,
      billingPostalCode: this.billingPostalCodeInput,
      billingCity: this.billingCityInput,
      billingState: this.billingStateInput,
      billingCountry: this.billingCountryInput,

      shippingStreet: this.shippingStreetInput,
      shippingPostalCode: this.shippingPostalCodeInput,
      shippingCity: this.shippingCityInput,
      shippingState: this.shippingStateInput,
      shippingCountry: this.shippingCountryInput
    };

    for (const [fieldName, input] of Object.entries(fields)) {
      const value = account[fieldName];

      if (value === undefined || value === null) {
        throw new Error(
          `Missing Excel value for overview field "${fieldName}".`
        );
      }

      await input.fill(String(value));
    }
  }

  async enterAccountWithPrimaryEmail(account) {
    await this.enterAccountName(account.name);
    await this.emailInput.fill(account.email);
    await this.primaryEmailControl.setChecked(true);
  }

  async enterAccountWithInvalidEmail(account) {
    await this.enterAccountName(account.name);
    await this.emailInput.fill(account.email);
  }

  getEmailValidationMessage(expectedMessage) {
    return this.page.getByText(expectedMessage, {
      exact: true
    });
  }

  async enterUnsavedAccountData(account) {
    await this.enterAccountName(account.name);
    await this.emailInput.fill(account.email);
  }

  // Unsaved-changes popup

  getUnsavedChangesMessage(expectedMessage) {
    return this.page.getByText(expectedMessage, {
      exact: true
    });
  }

  async confirmLeavingAccountCreation() {
    await this.confirmLeaveAccountButton.click();
  }

  async dismissCancellationPopup() {
    await this.dismissCancellationButton.click();
  }

  // Search

  async searchAccountsByName(accountName) {
    await this.accountSearchNameInput.fill(accountName);
    await this.accountSearchNameInput.press('Enter');
  }

  getAccountSearchResult(accountName) {
    return this.searchResultsFrame
      .locator('.unified-search-table-wrapper')
      .getByRole('link', {
        name: accountName,
        exact: true
      });
  }

  getAccountSearchNoResultsMessage(expectedMessage) {
    return this.searchResultsFrame.getByText(expectedMessage, {
      exact: true
    });
  }

  // Accounts list

  getAccountListLink(accountName) {
    return this.page.getByRole('link', {
      name: accountName,
      exact: true
    });
  }

  async openAccountFromList(accountName) {
    await this.getAccountListLink(accountName).click();
  }

  // Recently Viewed

  async openAccountsRecentlyViewed() {
    await this.hoverAccountsModule();
    await this.accountsRecentlyViewedTrigger.click();
  }

 getRecentlyViewedAccount(accountName) {
  return this.accountsRecentlyViewedPanel.getByText(
    accountName,
    { exact: true }
  );
}


  // Test-data setup

  async createAccountForListTest(account) {
    await this.openCreateAccountPage();
    await this.enterAccountName(account.name);
    await this.clickSaveOnCreateAccountPage();
  }

  // Test-data cleanup

  async deleteAccountByUrl(recordUrl) {
  const target = new URL(recordUrl);
  const current = new URL(this.page.url());

  if (target.origin !== current.origin) {
    throw new Error(
      `Refusing cleanup on a different origin: ${target.origin}`
    );
  }

  const recordPattern =
    /^#\/accounts\/record\/([^/?#]+)(?:[/?#]|$)/;

  const targetMatch = target.hash.match(recordPattern);

  if (!targetMatch) {
    throw new Error(
      `Cleanup requires an account detail URL: ${recordUrl}`
    );
  }

  const recordId = targetMatch[1];

  await this.page.goto(recordUrl);

  // Confirm the intended record route is open.
  await expect(this.page).toHaveURL(url => {
    const currentMatch = url.hash.match(recordPattern);

    return (
      url.origin === target.origin &&
      currentMatch?.[1] === recordId
    );
  });

  await expect(this.overviewPanel).toBeVisible();

  // Open the record actions and select Delete.
  await this.recordActionsButton.click();

  await expect(this.deleteAccountAction).toBeVisible();
  await this.deleteAccountAction.click();

  // Verify the deletion popup before confirming.
  await expect(
    this.deleteAccountConfirmationMessage
  ).toBeVisible();

  await expect(
    this.confirmDeleteAccountButton
  ).toBeVisible();

  await this.confirmDeleteAccountButton.click();

  // Wait for the popup to close and the Accounts list to load.
  await expect(
    this.deleteAccountConfirmationMessage
  ).toBeHidden();

  await expect(this.page).toHaveURL(
    /#\/accounts\/?(?:\?.*)?$/
  );

  await expect(
    this.viewAccountPageHeading
  ).toBeVisible();
}
}