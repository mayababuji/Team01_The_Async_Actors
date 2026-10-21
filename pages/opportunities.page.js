export class OpportunitiesPage {
  constructor(page) {
    this.page = page;

    // --------------------------------------------------
    // Navigation locators
    // --------------------------------------------------

    this.opportunitiesModule = page
      .getByText('Opportunities', {
        exact: true
      })
      .filter({
        visible: true
      });

    this.createOpportunityOption = page.getByRole('link', {
      name: /^create opportunity$/i
    });

    this.importOpportunitiesOption = page.getByRole('link', {
      name: /^import opportunities$/i
    });

    this.viewOpportunitiesOption = page.getByRole('link', {
      name: /^view opportunities$/i
    });

    // --------------------------------------------------
    // Page headings
    // --------------------------------------------------

    this.viewOpportunitiesPageHeading = page.getByText(
      'OPPORTUNITIES',
      {
        exact: true
      }
    );

    this.importOpportunitiesPageHeading = page
      .frameLocator('iframe[src*="module=Import"]')
      .getByRole('heading', {
        name: /^step 1:\s*upload import file$/i
      });

     // --------------------------------------------------
// Create Opportunity
// --------------------------------------------------

this.saveOpportunityButton = page.getByRole('button', {
  name: 'Save',
  exact: true
});
  }

  // --------------------------------------------------
  // Navigation actions
  // --------------------------------------------------

  async hoverOpportunitiesModule() {
    await this.opportunitiesModule.hover();
  }

  getDropdownOption(optionName) {
    const options = {
      'Create Opportunity': this.createOpportunityOption,
      'Import Opportunities': this.importOpportunitiesOption,
      'View Opportunities': this.viewOpportunitiesOption
    };

    const option = options[optionName];

    if (!option) {
      throw new Error(
        `Unknown Opportunities dropdown option: "${optionName}"`
      );
    }

    return option;
  }

  async openViewOpportunitiesPage() {
    await this.hoverOpportunitiesModule();
    await this.viewOpportunitiesOption.click();
  }

  async openImportOpportunitiesPage() {
    await this.hoverOpportunitiesModule();
    await this.importOpportunitiesOption.click();
  }
  // --------------------------------------------------
// Create Opportunity actions
// --------------------------------------------------

async openCreateOpportunityPage() {
  await this.hoverOpportunitiesModule();

  await this.createOpportunityOption.click();
}

async saveOpportunity() {
  await this.saveOpportunityButton.click();
}

// --------------------------------------------------
// Validation locators
// --------------------------------------------------

getRequiredFieldValidationMessage(fieldName) {
  return this.page.getByText(
    `Missing required field: ${fieldName}`,
    {
      exact: true
    }
  );
}

}