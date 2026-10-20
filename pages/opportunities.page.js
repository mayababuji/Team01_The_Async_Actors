export class OpportunitiesPage {
  constructor(page) {
    this.page = page;

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
}