export class OpportunitiesPage {
  constructor(page) {
    this.page = page;

    // --------------------------------------------------
    // Navigation locators
    // --------------------------------------------------

    this.opportunitiesModule = page
      .getByText('Opportunities', { exact: true })
      .filter({ visible: true });

    this.createOpportunityOption = page.getByRole('link', {
      name: /^create opportunity$/i
    });

    this.importOpportunitiesOption = page.getByRole('link', {
      name: /^import opportunities$/i
    });

    this.viewOpportunitiesOption = page.getByRole('link', {
      name: /^view opportunities$/i
    });

    this.dropdownOptions = {
      'Create Opportunity': this.createOpportunityOption,
      'Import Opportunities': this.importOpportunitiesOption,
      'View Opportunities': this.viewOpportunitiesOption
    };

    // --------------------------------------------------
    // Page heading locators
    // --------------------------------------------------

    this.viewOpportunitiesPageHeading = page.getByText(
      'OPPORTUNITIES',
      { exact: true }
    );

    this.importOpportunitiesPageHeading = page
      .frameLocator('iframe[src*="module=Import"]')
      .getByRole('heading', {
        name: /^step 1:\s*upload import file$/i
      });

    // --------------------------------------------------
    // Create Opportunity locators
    // --------------------------------------------------

    this.basicPanel = page.getByRole('tabpanel', {
      name: 'BASIC',
      exact: true
    });
   this.opportunityDescriptionInput = this.basicPanel
  .locator('textarea');


this.opportunityDescriptionDetail = this.basicPanel
  .locator(
    'scrm-dynamic-field.dynamic-field-name-description'
  );

    this.opportunityNameInput = this.basicPanel
      .getByRole('textbox')
      .nth(0);

    this.opportunityAmountInput = this.basicPanel
      .getByRole('textbox')
      .nth(1);

    this.accountNameDropdown = this.basicPanel
      .getByRole('combobox', {
        name: 'Select an item',
        exact: true
      })
      .nth(0);

    this.accountSearchInput = page.locator('input:focus');

    this.accountOptionsList = page.getByRole('listbox', {
      name: 'Option List',
      exact: true
    });

    this.salesStageSelect = this.basicPanel
      .locator('select')
      .filter({
        has: page.locator('option', {
          hasText: 'Negotiation/Review'
        })
      });

    this.expectedCloseDateInput = this.basicPanel
      .getByPlaceholder('yyyy-mm-dd', {
        exact: true
      });

    this.saveOpportunityButton = page.getByRole('button', {
      name: 'Save',
      exact: true
    });

    this.opportunityTypeSelect = this.basicPanel
  .locator('select')
  .filter({
    has: page.getByRole('option', {
      name: 'Existing Business',
      exact: true
    })
  });
  this.opportunityLeadSourceSelect = this.basicPanel
  .locator('select')
  .filter({
    has: page.getByRole('option', {
      name: 'Cold Call',
      exact: true
    })
  });

    // --------------------------------------------------
    // Opportunity detail locators
    // --------------------------------------------------

    this.opportunityDetailTitleContainer = page.locator(
      'scrm-dynamic-label'
    );

    this.opportunityAmountDetail = this.basicPanel.locator(
      'scrm-dynamic-field.dynamic-field-name-amount ' +
      'scrm-currency-detail'
    );
    this.opportunityTypeDetail = this.basicPanel.locator(
  'scrm-dynamic-field.dynamic-field-name-opportunity_type'
);
this.opportunityLeadSourceDetail =
  this.basicPanel.locator(
    'scrm-dynamic-field.dynamic-field-name-lead_source'
  );

    // --------------------------------------------------
    // Opportunity deletion locators
    // --------------------------------------------------

    this.opportunityRecordActionsButton = page
      .getByRole('button', { name: /^actions$/i })
      .filter({ visible: true });

    this.deleteOpportunityAction = page
      .getByText('Delete', { exact: true })
      .filter({ visible: true });

    this.deleteOpportunityConfirmationMessage = page.getByText(
      'Are you sure you want to delete this record?',
      { exact: true }
    );

    this.confirmDeleteOpportunityButton = page
      .getByRole('button', { name: /^proceed$/i })
      .filter({ visible: true });
  }

  // --------------------------------------------------
  // Parameterized locators
  // --------------------------------------------------

  getAccountSuggestion(accountName) {
    return this.accountOptionsList.getByText(accountName, {
      exact: true
    });
  }

  getRequiredFieldValidationMessage(fieldName) {
    return this.page.getByText(
      `Missing required field: ${fieldName}`,
      { exact: true }
    );
  }

  getOpportunityDetailHeading(opportunityName) {
    return this.opportunityDetailTitleContainer.getByText(
      opportunityName,
      { exact: true }
    );
  }

  // --------------------------------------------------
  // Locator accessors
  // --------------------------------------------------

  getBasicPanel() {
    return this.basicPanel;
  }

  getOpportunityNameInput() {
    return this.opportunityNameInput;
  }

  getOpportunityAmountInput() {
    return this.opportunityAmountInput;
  }

  getOpportunityAmountDetail() {
    return this.opportunityAmountDetail;
  }

  getDropdownOption(optionName) {
    const option = this.dropdownOptions[optionName];

    if (!option) {
      throw new Error(
        `Unknown Opportunities dropdown option: "${optionName}"`
      );
    }

    return option;
  }

  // --------------------------------------------------
  // Navigation actions
  // --------------------------------------------------

  async hoverOpportunitiesModule() {
    await this.opportunitiesModule.hover();
  }

  async openViewOpportunitiesPage() {
    await this.hoverOpportunitiesModule();
    await this.viewOpportunitiesOption.click();
  }

  async openImportOpportunitiesPage() {
    await this.hoverOpportunitiesModule();
    await this.importOpportunitiesOption.click();
  }

  async openCreateOpportunityPage() {
    await this.hoverOpportunitiesModule();
    await this.createOpportunityOption.click();

    await this.expectedCloseDateInput.waitFor({
      state: 'visible'
    });
  }

  // --------------------------------------------------
  // Create Opportunity actions
  // --------------------------------------------------

  async enterMandatoryOpportunityDetails(opportunity) {
    await this.enterOpportunityName(opportunity.name);

    // Fill Amount before opening the account search dropdown.
    await this.enterOpportunityAmount(opportunity.amount);

    await this.selectSalesStage(opportunity.salesStage);

    await this.enterExpectedCloseDate(
      opportunity.expectedCloseDate
    );

    await this.enterOpportunityAccountName(
      opportunity.accountName
    );
  }

  async enterOpportunityName(name) {
    await this.basicPanel.waitFor({
      state: 'visible'
    });

    await this.opportunityNameInput.fill(String(name));
  }

  async enterOpportunityAmount(amount) {
    await this.opportunityAmountInput.fill(
      String(amount ?? '').trim()
    );

    await this.opportunityAmountInput.press('Tab');
  }

  async enterOpportunityAccountName(accountName) {
    const accountSuggestion = this.getAccountSuggestion(
      accountName
    );

    await this.accountNameDropdown.click();
    await this.accountSearchInput.fill('');

    await this.accountSearchInput.pressSequentially(
      accountName.trim().slice(0, 4),
      { delay: 100 }
    );

    // Select the suggestion without submitting the form with Enter.
    await accountSuggestion.click();
  }

  async selectSalesStage(salesStage) {
    await this.salesStageSelect.selectOption({
      label: salesStage
    });
  }

  async enterExpectedCloseDate(expectedCloseDate) {
    await this.expectedCloseDateInput.fill(
      expectedCloseDate
    );
  }

  async saveOpportunity() {
    await this.saveOpportunityButton.click();
  }

  // --------------------------------------------------
  // Opportunity test-data cleanup
  // --------------------------------------------------

  async deleteOpportunityByUrl(recordUrl) {
    const target = new URL(recordUrl);
    const current = new URL(this.page.url());

    // Refuse cleanup on a different origin.
    if (target.origin !== current.origin) {
      throw new Error(
        `Refusing cleanup on a different origin: ${target.origin}`
      );
    }

    const recordPattern =
      /^#\/opportunities\/record\/([^/?#]+)(?:[/?#]|$)/;

    const targetMatch = target.hash.match(recordPattern);

    if (!targetMatch) {
      throw new Error(
        `Cleanup requires an opportunity detail URL: ${recordUrl}`
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

    await this.opportunityRecordActionsButton.waitFor({
      state: 'visible'
    });

    const expanded =
      await this.opportunityRecordActionsButton.getAttribute(
        'aria-expanded'
      );

    if (expanded !== 'true') {
      await this.opportunityRecordActionsButton.click();
    }

    await this.deleteOpportunityAction.click();

    await this.deleteOpportunityConfirmationMessage.waitFor({
      state: 'visible'
    });

    await this.confirmDeleteOpportunityButton.click();

    await this.deleteOpportunityConfirmationMessage.waitFor({
      state: 'hidden'
    });

    await this.page.waitForURL(url => {
      return (
        url.origin === target.origin &&
        /^#\/opportunities\/?(?:\?.*)?$/.test(url.hash)
      );
    });
  }
  getOpportunityTypeSelect() {
  return this.opportunityTypeSelect;
}


getOpportunityTypeDetail() {
  return this.opportunityTypeDetail;
}
async selectOpportunityType(opportunityType) {
  await this.opportunityTypeSelect.selectOption({
    label: opportunityType
  });
}
getOpportunityLeadSourceSelect() {
  return this.opportunityLeadSourceSelect;
}


getOpportunityLeadSourceDetail() {
  return this.opportunityLeadSourceDetail;
}
async selectOpportunityLeadSource(leadSource) {
  await this.opportunityLeadSourceSelect.selectOption({
    label: leadSource
  });
}
getOpportunityDescriptionInput() {
  return this.opportunityDescriptionInput;
}


getOpportunityDescriptionDetail() {
  return this.opportunityDescriptionDetail;
}
async enterOpportunityDescription(description) {
  await this.opportunityDescriptionInput.fill(
    description
  );
}
}