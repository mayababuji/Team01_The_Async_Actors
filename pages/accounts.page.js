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
      .locator(
        'scrm-dynamic-field.dynamic-field-name-phone_office'
      )
      .getByRole('textbox');

    this.emailInput = page
      .locator(
        'scrm-dynamic-field.dynamic-field-type-email'
      )
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

    for (
      const [property, fieldName] of Object.entries(addressFields)
    ) {
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
      .filter({ hasText: /cancel/i });

    this.dismissCancellationButton = page
      .locator('button.modal-button')
      .filter({ hasText: /cancel/i });

    // Global search
    this.accountSearchNameInput = page.getByPlaceholder(
      'Search...',
      { exact: true }
    );

    this.searchResultsFrame = page.frameLocator(
      'scrm-classic-view-ui iframe'
    );

    // Recently Viewed
    // this.accountsDropdown = page
    //   .locator('div.dropdown-menu.submenu')
    //   .filter({
    //     has: page.getByRole('link', {
    //       name: 'Create Account',
    //       exact: true
    //     })
    //   })
    //   .filter({ visible: true });

    // this.accountsRecentlyViewedSection =
    //   this.accountsDropdown.locator(
    //     'scrm-sub-menu-recently-viewed'
    //   );

    // this.accountsRecentlyViewedTrigger =
    //   this.accountsRecentlyViewedSection.locator(
    //     'scrm-label[labelkey="LBL_LAST_VIEWED"]'
    //   );

    // this.accountsRecentlyViewedPanel =
    //   this.accountsRecentlyViewedSection.locator(
    //     'ul.dropdown-menu.submenu'
    //   );

    // Identify the visible Accounts dropdown.
this.accountsDropdown = page
  .locator('div.dropdown-menu.submenu')
  .filter({
    has: page.getByRole('link', {
      name: 'Create Account',
      exact: true
    })
  })
  .filter({ visible: true });

// Find the Recently Viewed section inside the Accounts dropdown.
this.accountsRecentlyViewedSection = page
  .locator('scrm-sub-menu-recently-viewed')
  .within(this.accountsDropdown);

// Find the trigger inside the Recently Viewed section.
this.accountsRecentlyViewedTrigger = page
  .locator('scrm-label[labelkey="LBL_LAST_VIEWED"]')
  .within(this.accountsRecentlyViewedSection);

// Find the submenu panel inside the Recently Viewed section.
this.accountsRecentlyViewedPanel = page
  .locator('ul.dropdown-menu.submenu')
  .within(this.accountsRecentlyViewedSection);

    // Record deletion
    this.recordHeader = page.locator(
      'scrm-base-record-header'
    );

    this.recordActionsButton =
      this.recordHeader.getByRole('button', {
        name: 'Actions',
        exact: true
      });

    this.recordActionsMenu =
      this.recordHeader.locator(
        'scrm-dropdown-button [ngbdropdownmenu]'
      );

    this.deleteAccountAction = page.getByText('Delete', {
      exact: true
    });

    this.confirmDeleteAccountButton = page.getByRole(
      'button',
      {
        name: 'Proceed',
        exact: true
      }
    );

    this.deleteAccountConfirmationMessage = page.getByText(
      'Are you sure you want to delete this record?',
      { exact: true }
    );

    // Accounts list and sorting
    this.accountsListTable = page.getByRole('table');

    this.accountNameColumnHeader =
      this.accountsListTable.locator(
        'th.cdk-column-name'
      );

    this.accountNameListLinks =
      this.accountsListTable.locator(
        'tbody a[href*="/accounts/record/"]'
      );

    this.accountNameSortButton =
      this.accountNameColumnHeader.locator(
        'scrm-sort-button a.sort-button'
      );

    this.accountNameSortIcon =
      this.accountNameSortButton.locator('svg-icon');
      this.officePhoneInput = page
  .locator(
    'scrm-dynamic-field.dynamic-field-name-phone_office'
  )
  .getByRole('textbox');
this.accountImportTemplateLink = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('link', {
    name: 'Download Import File Template',
    exact: true
  });

  this.accountImportFileInput = page
  .frameLocator('iframe[src*="module=Import"]')
  .locator('input[type="file"]');
 this.officePhoneDetail = page
  .locator(
    'scrm-dynamic-field.dynamic-field-name-phone_office'
  )
  .locator('a[href^="tel:"]');

  this.accountImportNextButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: /^next\s*>?$/i,
    exact: true
  });

this.accountImportConfigurationHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: 'Step 2: Confirm Import File Properties'
  });
  this.importResultsHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: /step 5/i
  });


this.importResultsPanel = page
  .frameLocator('iframe[src*="module=Import"]')
  .locator('body');


this.undoImportButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: 'Undo Import',
    exact: true
  });
  // Step 2: Confirm Import File Properties
this.importFilePropertiesHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: 'Step 2: Confirm Import File Properties'
  });

this.importFilePropertiesNextButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: 'Next >',
    exact: true
  });

// Step 3: Confirm Field Mappings
this.importFieldMappingsHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: 'Step 3: Confirm Field Mappings'
  });

this.importFieldMappingsNextButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: 'Next >',
    exact: true
  });

// Step 4: Check for Possible Duplicates
this.importDuplicatesHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: 'Step 4: Check for Possible Duplicates'
  });

this.importNewRecordsOnlyOption = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByText('Create new records only', {
    exact: true
  });

this.importNowButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: 'Import Now'
  });

// Step 5: Imported records
this.importResultsHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: /step 5/i
  });

this.importResultsPanel = page
  .frameLocator('iframe[src*="module=Import"]')
  .locator('body');

this.undoImportButton = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('button', {
    name: 'Undo Import',
    exact: true
  });
  this.importResultsSummary = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByText('2 records were created', {
    exact: true
  });
  this.importResultsCreatedTab = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByText('Created Records', {
    exact: true
  });

  this.accountImportMissingFileMessage = page
  .frameLocator('iframe[src*="module=Import"]')
  .locator('div.required.validation-message')
  .filter({
    hasText: 'Missing required fields: Select a file to upload.'
  });
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

    await this.viewAccountPageHeading.waitFor({
      state: 'visible'
    });

    // Move outside the navigation dropdown.
    const viewport = await this.page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight
    }));

    await this.page.mouse.move(
      viewport.width - 20,
      viewport.height - 20
    );

    await this.accountsDropdown.waitFor({
      state: 'hidden'
    });
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

  // Website update — new methods

  async enterAccountWebsite(website) {
    await this.websiteInput.fill(website);
  }

  async waitForAccountDetailPage() {
    await this.overviewPanel.waitFor({
      state: 'visible'
    });

    await this.editAccountButton.waitFor({
      state: 'visible'
    });
  }

  async saveAccountChanges() {
    await this.saveButton.click();

    await this.waitForAccountDetailPage();
  }

  async reloadAccountDetailPage() {
    await this.page.reload();

    await this.waitForAccountDetailPage();
  }

async cancelAccountEditing() {


  await this.cancelCreateAccountButton.click();

  await this.confirmLeaveAccountButton
    .or(this.editAccountButton)
    .first()
    .waitFor({ state: 'visible' });

  if (await this.confirmLeaveAccountButton.isVisible()) {
    await this.confirmLeaveAccountButton.click();
  }

  await this.waitForAccountDetailPage();
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
    return this.searchResultsFrame.getByText(
      expectedMessage,
      { exact: true }
    );
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
    const currentMatch = current.hash.match(recordPattern);

    const isTargetRecord =
      current.origin === target.origin &&
      currentMatch?.[1] === recordId;

    if (!isTargetRecord) {
      await this.page.goto(recordUrl);
    }

    await this.page.waitForURL(url => {
      const match = url.hash.match(recordPattern);

      return (
        url.origin === target.origin &&
        match?.[1] === recordId
      );
    });

    await this.overviewPanel.waitFor({
      state: 'visible'
    });

    await this.recordActionsButton.waitFor({
      state: 'visible'
    });

    try {
      const expanded =
        await this.recordActionsButton.getAttribute(
          'aria-expanded'
        );

      if (expanded !== 'true') {
        await this.recordActionsButton.click();
      }

      await this.recordActionsMenu.waitFor({
        state: 'visible'
      });

      await this.deleteAccountAction.click();
    } catch (error) {
      try {
        console.log(
          'Actions state at cleanup failure:',
          await this.recordActionsButton.getAttribute(
            'aria-expanded'
          )
        );

        console.log(
          'Record header HTML at cleanup failure:',
          await this.recordHeader.innerHTML()
        );
      } catch (diagnosticError) {
        console.error(
          'Could not capture cleanup diagnostics:',
          diagnosticError
        );
      }

      throw error;
    }

    await this.deleteAccountConfirmationMessage.waitFor({
      state: 'visible'
    });

    await this.confirmDeleteAccountButton.click();

    await this.deleteAccountConfirmationMessage.waitFor({
      state: 'hidden'
    });

    await this.page.waitForURL(
      /#\/accounts\/?(?:\?.*)?$/
    );

    await this.viewAccountPageHeading.waitFor({
      state: 'visible'
    });
  }

  // Sorting

  async clickAccountNameSortButton() {
    await this.accountNameSortButton.click();
  }

  async getDisplayedAccountNames() {
    const names =
      await this.accountNameListLinks.allTextContents();

    return names.map(name => name.trim());
  }
  async enterAccountOfficePhone(phone) {
  await this.officePhoneInput.fill(String(phone));
}
async downloadAccountImportTemplate() {
  const downloadPromise = this.page.waitForEvent('download');

  await this.accountImportTemplateLink.click();

  return await downloadPromise;
}

async selectAccountImportFile(filePath) {
  await this.accountImportFileInput.setInputFiles(filePath);
}
async isAccountImportFileSelected() {
  const filename = await this.accountImportFileInput.evaluate(
    input => input.files?.[0]?.name
  );

  return Boolean(filename);
}

async clickAccountImportNextButton() {
  await this.accountImportNextButton.click();
}

async waitForAccountImportConfigurationStep() {
  await this.accountImportConfigurationHeading.waitFor({
    state: 'visible'
  });
}

getImportedAccountRow(accountName) {
  return this.importResultsPanel
    .getByRole('row')
    .filter({
      hasText: accountName
    });
}

getImportedAccountField(accountName, value) {
  return this.getImportedAccountRow(accountName)
    .getByText(value, { exact: true });
}


getImportedAccountField(accountName, value) {
  return this.getImportedAccountRow(accountName)
    .getByText(value, { exact: true });
}
async confirmImportFileProperties() {
  await this.importFilePropertiesHeading.waitFor({
    state: 'visible'
  });

  await this.importFilePropertiesNextButton.click();
}

async confirmAccountFieldMappings() {
  await this.importFieldMappingsHeading.waitFor({
    state: 'visible'
  });

  await this.importFieldMappingsNextButton.click();
}

async importNewRecordsOnly() {
  await this.importDuplicatesHeading.waitFor({
    state: 'visible'
  });

  //await this.importNewRecordsOnlyOption.check();

  await this.importNowButton.click();

  await this.importResultsHeading.waitFor({
    state: 'visible'
  });
}

async waitForImportResults() {
  await this.importResultsHeading.waitFor({
    state: 'visible'
  });
}

async undoImportedAccounts() {
  await this.undoImportButton.click();
}

async clearAccountImportFile() {
  await this.accountImportFileInput.setInputFiles([]);
}

async getSelectedAccountImportFileName() {
  return await this.accountImportFileInput.evaluate(
    input => input.files?.[0]?.name ?? null
  );
}

async attemptAccountImportNext() {
  await this.accountImportNextButton.waitFor({
    state: 'visible'
  });

  const isEnabled =
    await this.accountImportNextButton.isEnabled();

  if (isEnabled) {
    await this.accountImportNextButton.click();
  }
}

}