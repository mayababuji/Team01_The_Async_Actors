export class OpportunitiesPage {
  constructor(page) {
    this.page = page;
     // --------------------------------------------------
    // LOCATORS
    // --------------------------------------------------

    // --------------------------------------------------
    // Navigation
    // --------------------------------------------------

    this.opportunitiesModule = page
      .getByText('Opportunities', {
        exact: true
      })
      .filter({
        visible: true
      });

    this.createOpportunityOption = page.getByRole(
      'link',
      {
        name: /^create opportunity$/i
      }
    );

    this.importOpportunitiesOption = page.getByRole(
      'link',
      {
        name: /^import opportunities$/i
      }
    );

    this.viewOpportunitiesOption = page.getByRole(
      'link',
      {
        name: /^view opportunities$/i
      }
    );
    // --------------------------------------------------
// Page headings
// --------------------------------------------------

this.viewOpportunitiesPageHeading = page.getByText(
  'OPPORTUNITIES',
  {
    exact: true
  }
);

// --------------------------------------------------
// Import Opportunities iframe
// --------------------------------------------------

this.importFrame = page.frameLocator(
  'iframe[src*="module=Import"]'
);

this.importFrameBody = this.importFrame.locator('body');



this.importOpportunitiesPageHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', {
    name: /^step 1:\s*upload import file$/i
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
// --------------------------------------------------
// Navigation actions
// --------------------------------------------------

async openImportOpportunitiesPage() {
  await this.hoverOpportunitiesModule();

  await this.importOpportunitiesOption.click();
}
}