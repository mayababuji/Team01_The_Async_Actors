export class AccountsPage {
  constructor(page) {
    this.page = page;

this.accountsModule = page
  .getByText('Accounts', { exact: true })
  .filter({ visible: true });

    this.createAccountOption = page.getByRole(
      'link',
      { name: /create account/i }
    );

    this.importAccountsOption = page.getByRole(
      'link',
      { name: /import accounts/i }
    );

    this.viewAccountsOption = page.getByRole(
      'link',
      { name: /view accounts/i }
    );
  }

  async hoverAccountsModule() {
  //     const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
  //await this.accountsModule.waitFor({ state: 'visible' });
    await this.accountsModule.hover();
  }

  async getDropdownOption(optionName) {
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
    const option = await this.getDropdownOption(optionName);

    await option.click();
  }
}