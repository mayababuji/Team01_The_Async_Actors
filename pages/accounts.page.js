const ACCOUNT_RECORD_URL =
  /#\/accounts\/record\/[^/?#]+(?:[/?#]|$)/;

export class AccountsPage {
  constructor(page) {
    this.page = page;

    // --------------------------------------------------
    // Navigation
    // --------------------------------------------------

    this.accountsModule = page
      .getByText('Accounts', { exact: true })
      .filter({ visible: true });

    this.createAccountOption = page.getByRole('link', {
      name: /^create account$/i
    });

    this.importAccountsOption = page.getByRole('link', {
      name: /^import accounts$/i
    });

    this.viewAccountsOption = page.getByRole('link', {
      name: /^view accounts$/i
    });

    // --------------------------------------------------
    // Page headings and panels
    // --------------------------------------------------

    this.createAccountPageHeading = page.getByText('Create', {
      exact: true
    });

    this.viewAccountPageHeading = page.getByText('ACCOUNTS', {
      exact: true
    });

    this.overviewPanel = page.getByRole('tabpanel', {
      name: /^overview$/i
    });

    // --------------------------------------------------
    // Form buttons
    // --------------------------------------------------

    this.saveButton = page.getByRole('button', {
      name: /^save$/i
    });

    this.cancelCreateAccountButton = page.getByRole('button', {
      name: /^cancel$/i
    });

    this.editAccountButton = page.getByRole('button', {
      name: /^edit$/i
    });

    // --------------------------------------------------
    // Validation
    // --------------------------------------------------

    this.nameValidationMessage = page.getByText(
      'Missing required field: Name',
      { exact: true }
    );

    // --------------------------------------------------
    // Overview inputs
    // --------------------------------------------------

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
      .locator('scrm-dynamic-field.dynamic-field-type-email')
      .getByRole('textbox');

   this.primaryEmailControl = page
  .locator(
    'scrm-dynamic-field.dynamic-field-name-primary_address'
  )
  .getByRole('checkbox', {
    includeHidden: true
  });

    this.officePhoneDetail = page
      .locator(
        'scrm-dynamic-field.dynamic-field-name-phone_office'
      )
      .locator('a[href^="tel:"]');

    // --------------------------------------------------
    // Address inputs
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Unsaved-changes popup
    // Existing selectors preserved pending label verification.
    // --------------------------------------------------

    this.confirmLeaveAccountButton = page
      .locator('button.modal-button')
      .filter({ hasText: /cancel/i });

    this.dismissCancellationButton = page
      .locator('button.modal-button')
      .filter({ hasText: /cancel/i });

this.discardUnsavedChangesButton = page.getByRole(
  'button',
  {
    name: /^proceed$/i
  }
);

    // --------------------------------------------------
    // Global search
    // --------------------------------------------------

    this.accountSearchNameInput = page.getByPlaceholder(
      'Search...',
      { exact: true }
    );

    this.searchResultsFrame = page.frameLocator(
      'scrm-classic-view-ui iframe'
    );

    // --------------------------------------------------
    // Recently Viewed
    // --------------------------------------------------

    this.accountsDropdown = page
      .locator('div.dropdown-menu.submenu')
      .filter({
        has: page.getByRole('link', {
          name: /^create account$/i
        })
      })
      .filter({ visible: true });

    this.accountsRecentlyViewedSection = page
      .locator('scrm-sub-menu-recently-viewed')
      .within(this.accountsDropdown);

    this.accountsRecentlyViewedTrigger = page
      .locator('scrm-label[labelkey="LBL_LAST_VIEWED"]')
      .within(this.accountsRecentlyViewedSection);

    this.accountsRecentlyViewedPanel = page
      .locator('ul.dropdown-menu.submenu')
      .within(this.accountsRecentlyViewedSection);

    // --------------------------------------------------
    // Record deletion
    // --------------------------------------------------
    this.recordHeader = page.locator(
      'scrm-base-record-header'
    );


    this.recordActionsButton = page
      .getByRole('button', {
        name: /^actions$/i
      })
      .within(this.recordHeader);


    this.recordActionsMenu = page
      .locator('scrm-dropdown-button [ngbdropdownmenu]')
      .within(this.recordHeader);

    this.deleteAccountAction = page.getByText('Delete', {
      exact: true
    });

    this.confirmDeleteAccountButton = page.getByRole('button', {
      name: /^proceed$/i
    });

    this.deleteAccountConfirmationMessage = page.getByText(
      'Are you sure you want to delete this record?',
      { exact: true }
    );

    // --------------------------------------------------
    // Accounts list and sorting
    // --------------------------------------------------

      this.accountsListTable = page.getByRole('table');


    this.accountNameColumnHeader = page
      .locator('th.cdk-column-name')
      .within(this.accountsListTable);


    this.accountNameListLinks = page
      .locator('tbody a[href*="/accounts/record/"]')
      .within(this.accountsListTable);


    this.accountNameSortButton = page
      .locator('scrm-sort-button a.sort-button')
      .within(this.accountNameColumnHeader);


    this.accountNameSortIcon = page
      .locator('svg-icon')
      .within(this.accountNameSortButton);

       // --------------------------------------------------
    // Import Accounts iframe
    // --------------------------------------------------


    this.importFrame = page.frameLocator(
      'iframe[src*="module=Import"]'
    );


    this.importFrameBody = this.importFrame.locator('body');


    // --------------------------------------------------
    // Import Step 1: Upload Import File
    // --------------------------------------------------


    this.importAccountPageHeading = page
      .getByRole('heading', {
        name: /^step 1:\s*upload import file$/i
      })
      .within(this.importFrameBody);


    this.accountImportTemplateLink = page
      .getByRole('link', {
        name: /^download import file template$/i
      })
      .within(this.importFrameBody);


    this.accountImportFileInput = page
      .locator('input[type="file"]')
      .within(this.importFrameBody);


    this.accountImportNextButton = page
      .getByRole('button', {
        name: /^next\s*>?$/i
      })
      .within(this.importFrameBody);


    this.accountImportMissingFileMessage = page
      .locator('div.required.validation-message')
      .filter({
        hasText:
          /^missing required fields:\s*select a file to upload\.$/i
      })
      .within(this.importFrameBody);


    this.importNewRecordsOnlyOption = page
      .getByText('Create new records only', {
        exact: true
      })
      .within(this.importFrameBody);
       // --------------------------------------------------
    // Import Step 2: Confirm Import File Properties
    // --------------------------------------------------


    this.importFilePropertiesHeading = page
      .getByRole('heading', {
        name: /^step 2:\s*confirm import file properties$/i
      })
      .within(this.importFrameBody);
    // Aliases retain compatibility with existing step definitions.
    this.accountImportConfigurationHeading =
      this.importFilePropertiesHeading;

    this.importFilePropertiesNextButton =
      this.accountImportNextButton;

        // --------------------------------------------------
    // Import Step 3: Confirm Field Mappings
    // --------------------------------------------------


    this.importFieldMappingsHeading = page
      .getByRole('heading', {
        name: /^step 3:\s*confirm field mappings$/i
      })
      .within(this.importFrameBody);


    this.importFieldMappingsNextButton =
      this.accountImportNextButton;


    // --------------------------------------------------
    // Import Step 4: Check for Possible Duplicates
    // --------------------------------------------------


    this.importDuplicatesHeading = page
      .getByRole('heading', {
        name: /^step 4:\s*check for possible duplicates$/i
      })
      .within(this.importFrameBody);


    this.importNowButton = page
      .getByRole('button', {
        name: /^import now$/i
      })
      .within(this.importFrameBody);


    // --------------------------------------------------
    // Import Step 5: View Import Results
    // --------------------------------------------------


    this.importResultsHeading = page
      .getByRole('heading', {
        name: /^step 5:\s*view import results$/i
      })
      .within(this.importFrameBody);


    this.importResultsPanel = this.importFrameBody;


    this.importResultsSummary = page
      .getByText(
        /^\s*\d+\s+records\s+were\s+created\s*$/i
      )
      .within(this.importResultsPanel);


    this.importResultsCreatedTab = page
      .getByText('Created Records', {
        exact: true
      })
      .within(this.importResultsPanel);


    this.undoImportButton = page
      .getByRole('button', {
        name: /^undo import$/i
      })
      .within(this.importResultsPanel);
  }

  // --------------------------------------------------
  // Navigation
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Account creation and editing
  // --------------------------------------------------

  async enterAccountName(name) {
    await this.accountNameInput.fill(name);
  }

  async enterAccountWebsite(website) {
    await this.websiteInput.fill(website);
  }

  async enterAccountOfficePhone(phone) {
    await this.officePhoneInput.fill(String(phone));
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

  async enterUnsavedAccountData(account) {
    await this.enterAccountName(account.name);
    await this.emailInput.fill(account.email);
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
    async cancelAccountEditingAndDiscardChanges() {
    await this.clickCancelOnCreateAccountPage();


    await this.discardUnsavedChangesButton.waitFor({
      state: 'visible'
    });


    await this.discardUnsavedChangesButton.click();


    await this.discardUnsavedChangesButton.waitFor({
      state: 'hidden'
    });


    await this.waitForAccountDetailPage();
  }
    // --------------------------------------------------
  // Account creation helpers
  // --------------------------------------------------


  async waitForAccountRecordPage() {
    await this.page.waitForURL(ACCOUNT_RECORD_URL);


    return this.page.url();
  }


  async createAccount(account) {
    await this.openCreateAccountPage();
    await this.enterAccountName(account.name);
    await this.clickSaveOnCreateAccountPage();


    return await this.waitForAccountRecordPage();
  }


  async createCompleteAccount(account) {
    await this.openCreateAccountPage();
    await this.enterCompleteOverviewInformation(account);
    await this.clickSaveOnCreateAccountPage();


    return await this.waitForAccountRecordPage();
  }


  async createAccountWithPrimaryEmail(account) {
    await this.openCreateAccountPage();
    await this.enterAccountWithPrimaryEmail(account);
    await this.clickSaveOnCreateAccountPage();


    return await this.waitForAccountRecordPage();
  }


  async openAccountEditing() {
    await this.openAccountForEditing();
  }


  async getSelectedImportFileName() {
    return await this.getSelectedAccountImportFileName();
  }


  async getImportSummaryText() {
    await this.importResultsSummary.waitFor({
      state: 'visible'
    });


    return await this.importResultsSummary.innerText();
  }

  // --------------------------------------------------
  // Validation and unsaved-changes popup
  // --------------------------------------------------

  getEmailValidationMessage(expectedMessage) {
    return this.page.getByText(expectedMessage, {
      exact: true
    });
  }

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

async openSavedAccountForVerification(recordUrl) {
  await this.page.goto(recordUrl);

  await this.waitForAccountDetailPage();

  await this.openAccountForEditing();

  try {
    await this.accountNameInput.waitFor({
      state: 'visible'
    });

    await this.websiteInput.waitFor({
      state: 'visible'
    });
  } catch (error) {
    console.log('Verification URL:', this.page.url());

    console.log(
      'Record header HTML:',
      await this.recordHeader.innerHTML()
    );

    console.log(
      'Textbox HTML:',
      await this.page.getByRole('textbox').evaluateAll(
        inputs => inputs.map(input => input.outerHTML)
      )
    );

    throw error;
  }
}
async createAccountWithWebsite(account) {
  await this.openCreateAccountPage();

  await this.enterAccountName(account.name);

  await this.enterAccountWebsite(account.website);

  await this.clickSaveOnCreateAccountPage();

  return await this.waitForAccountRecordPage();
}

  // --------------------------------------------------
  // Search
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Accounts list
  // --------------------------------------------------

  getAccountListLink(accountName) {
    return this.page.getByRole('link', {
      name: accountName,
      exact: true
    });
  }

  async openAccountFromList(accountName) {
    await this.getAccountListLink(accountName).click();
  }

  // --------------------------------------------------
  // Recently Viewed
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Test-data setup
  // --------------------------------------------------

  async createAccountForListTest(account) {
    await this.openCreateAccountPage();
    await this.enterAccountName(account.name);
    await this.clickSaveOnCreateAccountPage();
  }

  // --------------------------------------------------
  // Test-data cleanup
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Sorting
  // --------------------------------------------------


  async clickAccountNameSortButton() {
    await this.accountNameSortButton.click();
  }


  async getDisplayedAccountNames() {
    const names =
      await this.accountNameListLinks.allTextContents();


    return names.map(name => name.trim());
  }


  async getNameSortIconClass() {
    return await this.accountNameSortIcon.getAttribute(
      'class'
    );
  }


  async isNameSortedDescending() {
    const iconClass =
      await this.getNameSortIconClass();


    return /(?:^|\s)image-sort_descend(?:\s|$)/.test(
      iconClass ?? ''
    );
  }


  async waitForNameSortDescending() {
    await this.page.waitForFunction(() => {
      const icon = document.querySelector(
        'th.cdk-column-name scrm-sort-button a.sort-button svg-icon'
      );


      return icon?.classList.contains(
        'image-sort_descend'
      );
    });
  }


  async waitForNameSortNotDescending() {
    await this.page.waitForFunction(() => {
      const icon = document.querySelector(
        'th.cdk-column-name scrm-sort-button a.sort-button svg-icon'
      );


      return (
        icon !== null &&
        !icon.classList.contains('image-sort_descend')
      );
    });
  }


  async sortAccountsByNameAscending() {
    await this.accountNameSortButton.waitFor({
      state: 'visible'
    });


    if (!(await this.isNameSortedDescending())) {
      await this.clickAccountNameSortButton();
      await this.waitForNameSortDescending();
    }


    await this.clickAccountNameSortButton();
    await this.waitForNameSortNotDescending();
  }
  // --------------------------------------------------
  // Import: template and file selection
  // --------------------------------------------------

  async downloadAccountImportTemplate() {
    const downloadPromise = this.page.waitForEvent('download');

    await this.accountImportTemplateLink.click();

    return await downloadPromise;
  }

  async selectAccountImportFile(filePath) {
    await this.accountImportFileInput.setInputFiles(filePath);
  }

  async clearAccountImportFile() {
    await this.accountImportFileInput.setInputFiles([]);
  }

  async getSelectedAccountImportFileName() {
    return await this.accountImportFileInput.evaluate(
      input => input.files?.[0]?.name ?? null
    );
  }

  async isAccountImportFileSelected() {
    const filename =
      await this.getSelectedAccountImportFileName();

    return filename !== null;
  }

  // --------------------------------------------------
  // Import: wizard navigation
  // --------------------------------------------------

  async clickAccountImportNextButton() {
    await this.accountImportNextButton.click();
  }

  async waitForAccountImportConfigurationStep() {
    await this.accountImportConfigurationHeading.waitFor({
      state: 'visible'
    });
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

    await this.importNowButton.click();

    await this.waitForImportResults();
  }

  async waitForImportResults() {
    await this.importResultsHeading.waitFor({
      state: 'visible'
    });
  }

  async attemptAccountImportNext() {
    await this.accountImportNextButton.waitFor({
      state: 'visible'
    });

    if (await this.accountImportNextButton.isEnabled()) {
      await this.accountImportNextButton.click();
    }
  }

  // --------------------------------------------------
  // Import: result locators and cleanup
  // --------------------------------------------------

  getImportedAccountRow(accountName) {
    return this.importResultsPanel
      .getByRole('row')
      .filter({
        has: this.importFrame.getByText(accountName, {
          exact: true
        })
      });
  }

  getImportedAccountField(accountName, value) {
    return this.getImportedAccountRow(accountName)
      .getByText(value, {
        exact: true
      });
  }

  async undoImportedAccounts() {
    await this.undoImportButton.click();
  }
}