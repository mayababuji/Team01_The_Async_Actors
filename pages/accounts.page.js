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

  this.overviewPanel = page.getByRole('tabpanel', {
  name: 'OVERVIEW',
  exact: true
});


this.accountNameInput = page
  .locator('scrm-field.field-name-name')
  .getByRole('textbox');

  this.websiteInput = page
  .locator('scrm-field.field-name-website')
  .getByRole('textbox');

this.officePhoneInput =page
.locator('scrm-dynamic-field.dynamic-field-name-phone_office')
.getByRole('textbox');
this.emailInput = page
.locator('scrm-dynamic-field.dynamic-field-type-email')
.getByRole('textbox');

this.billingStreetInput =  page
.locator('scrm-dynamic-field.dynamic-field-name-billing_address_street')
.getByRole('textbox');
this.billingPostalCodeInput = page
.locator('scrm-dynamic-field.dynamic-field-name-billing_address_postalcode')
.getByRole('textbox');
this.billingCityInput = page
.locator('scrm-dynamic-field.dynamic-field-name-billing_address_city')
.getByRole('textbox');
this.billingStateInput = page
.locator('scrm-dynamic-field.dynamic-field-name-billing_address_state')
.getByRole('textbox');
this.billingCountryInput = page
.locator('scrm-dynamic-field.dynamic-field-name-billing_address_country')
.getByRole('textbox');

this.shippingStreetInput = page
.locator('scrm-dynamic-field.dynamic-field-name-shipping_address_street')
.getByRole('textbox');
this.shippingPostalCodeInput = page
.locator('scrm-dynamic-field.dynamic-field-name-shipping_address_postalcode')
.getByRole('textbox');
this.shippingCityInput = page
.locator('scrm-dynamic-field.dynamic-field-name-shipping_address_city')
.getByRole('textbox');
this.shippingStateInput = page
.locator('scrm-dynamic-field.dynamic-field-name-shipping_address_state')
.getByRole('textbox');
this.shippingCountryInput = page
.locator('scrm-dynamic-field.dynamic-field-name-shipping_address_country')
.getByRole('textbox');

this.saveButton = page.getByRole('button', {
  name: 'Save',
  exact: true
});




this.primaryEmailControl = page
.locator('scrm-dynamic-field.dynamic-field-name-primary_address')
 .locator('input[type="checkbox"]');


this.editAccountButton = page.getByRole('button', {
  name: ' Edit '
});

this.cancelCreateAccountButton = page.getByRole('button', {
  name: 'Cancel',
  exact: true
});
 this.confirmLeaveAccountButton = page.getByRole('button', {
    name: 'Ok',
    exact: true
  });




this.confirmLeaveAccountButton = page.getByRole('button', {
  name: 'Ok',
  exact: true
});

this.dismissCancellationButton = page
  .getByRole('button', {
    name: 'Cancel'
  });

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
// getAccountDetailName(expectedName) {
//   return this.page
//     .getByRole('tabpanel', { name: 'OVERVIEW' })
//     .getByText(expectedName, { exact: true });
// }

getAccountDetailName(expectedName) {
  return this.overviewPanel.getByText(expectedName, {
    exact: true
  });
}

async enterCompleteOverviewInformation(account) {
  //    await this.page.pause();
  //       const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
  await this.accountNameInput.fill(account.name);
  await this.websiteInput.fill(account.website);
  await this.officePhoneInput.fill(account.phone);
  await this.emailInput.fill(account.email);

  await this.billingStreetInput.fill(account.billingStreet);
  await this.billingPostalCodeInput.fill(
    account.billingPostalCode
  );
  await this.billingCityInput.fill(account.billingCity);
  await this.billingStateInput.fill(account.billingState);
  await this.billingCountryInput.fill(account.billingCountry);

  await this.shippingStreetInput.fill(account.shippingStreet);
  await this.shippingPostalCodeInput.fill(
    account.shippingPostalCode
  );
  await this.shippingCityInput.fill(account.shippingCity);
  await this.shippingStateInput.fill(account.shippingState);
  await this.shippingCountryInput.fill(
    account.shippingCountry
  );
}

async enterAccountWithPrimaryEmail(account) {
     await this.page.pause();
  //       const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
  await this.enterAccountName(account.name);
  await this.emailInput.fill(account.email);
  await this.primaryEmailControl.setChecked(true);
}

async openAccountForEditing() {
  await this.editAccountButton.click();
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

async clickCancelOnCreateAccountPage() {
  await this.cancelCreateAccountButton.click();
}
async enterUnsavedAccountData(account) {
  await this.enterAccountName(account.name);
  await this.emailInput.fill(account.email);
}

async clickCancelOnCreateAccountPage() {
  await this.cancelCreateAccountButton.click();
}

getUnsavedChangesMessage(expectedMessage) {
  return this.page.getByText(expectedMessage, {
    exact: true
  });
}

async enterUnsavedAccountData(account) {
  await this.enterAccountName(account.name);
  await this.emailInput.fill(account.email);
}

async clickCancelOnCreateAccountPage() {
  await this.cancelCreateAccountButton.click();
}

async confirmLeavingAccountCreation() {
  await this.confirmLeaveAccountButton.click();
}

async dismissCancellationPopup() {
  await this.dismissCancellationButton.click();
}
  
}

