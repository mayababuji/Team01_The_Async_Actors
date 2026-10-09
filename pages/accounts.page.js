export class AccountsPage {
  constructor(page) {
    this.page = page;
//Locators
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
    
     this.createAccountPageHeading = page.getByText('Create', { exact: true});
     //this.importAccountPageHeading = page.getByRole('heading',{name:' Step 1: Upload Import File '})
    this.importAccountPageHeading = page
  .frameLocator('iframe[src*="module=Import"]')
  .getByRole('heading', { name: 'Step 1: Upload Import File' });

    this.viewAccountPageHeading = page
  .getByText('ACCOUNTS',{exact:true});
   
 
this.saveButton = this.page.getByRole('button', {
  name: 'Save'},{ exact: true }
);

this.nameValidationMessage = this.page.getByText(
  'Missing required field: Name',
  { exact: true }
);

this.accountNameInput = page
  .getByRole('tabpanel', { name: 'OVERVIEW' })
  .getByRole('textbox')
  .first();

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

  async openCreateAccountPage() {
    await this.accountsModule.hover();
    await this.createAccountOption.click();
   
  
  }

  async openImportAccountPage() {
    await this.accountsModule.hover();
     
    await this.importAccountsOption.click();
   // await this.page.pause();
//     const importFrame = this.page.frameLocator(
//   'iframe[src*="module=Import"][src*="action=Step1"]'
// );
//         const snapshot = await importFrame.locator('body').ariaSnapshot();
// console.log(snapshot);
  
  
  }

   async openViewAccountPage() {
    await this.accountsModule.hover();
     
    await this.viewAccountsOption.click();
  //  await this.page.pause();
  //    const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
  
  
  }

  async clickSaveOnCreateAccountPage() {
  await this.saveButton.click();
   //  await this.page.pause();
  //    const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
}

async enterAccountName(name) {
  console.log("the name is here is ===>",name);
  // await this.page.pause();
  //      const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
  await this.accountNameInput.fill(name);
}
getAccountDetailName(expectedName) {
  return this.page
    .getByRole('tabpanel', { name: 'OVERVIEW' })
    .getByText(expectedName, { exact: true });
}

  
}

