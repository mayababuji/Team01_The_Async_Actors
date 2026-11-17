# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with lead source <leadSource> >> Create an opportunity with lead source Web Site
- Location: tests/generated/features/opportunities.feature.spec.js:121:5

# Error details

```
TimeoutError: locator.fill: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('textbox').nth(1)

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
          - listitem [ref=e43]:
            - generic [ref=e44]: Leads
          - listitem [ref=e51]:
            - generic [ref=e52]: Quotes
          - listitem [ref=e59]:
            - generic [ref=e60]: Calendar
          - listitem [ref=e67]:
            - generic [ref=e68]: Documents
        - list [ref=e77]:
          - listitem [ref=e78]:
            - generic [ref=e79]: More
      - generic [ref=e81]:
        - list [ref=e83]:
          - listitem [ref=e84]:
            - generic "Quick Create" [ref=e85] [cursor=pointer]
        - list [ref=e92]:
          - listitem [ref=e93]:
            - generic "Recently Viewed" [ref=e94] [cursor=pointer]
        - generic [ref=e104]:
          - textbox "Search" [ref=e105]:
            - /placeholder: Search...
          - button "Search" [ref=e107] [cursor=pointer]
        - list [ref=e117]:
          - listitem [ref=e118]:
            - generic [ref=e119] [cursor=pointer]
      - list [ref=e127]:
        - listitem [ref=e128]
    - separator [ref=e147]
  - generic [ref=e151]:
    - generic [ref=e152]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e153]: Back To Top
```

# Test source

```ts
  403 |     this.importResultsSummary = page
  404 |       .getByText(
  405 |         /^\s*\d+\s+records\s+were\s+created\s*$/i
  406 |       )
  407 |       .within(this.importResultsPanel);
  408 | 
  409 | 
  410 |     this.importResultsCreatedTab = page
  411 |       .getByText('Created Records', {
  412 |         exact: true
  413 |       })
  414 |       .within(this.importResultsPanel);
  415 | 
  416 | 
  417 |     this.undoImportButton = page
  418 |       .getByRole('button', {
  419 |         name: /^undo import$/i
  420 |       })
  421 |       .within(this.importResultsPanel);
  422 |   }
  423 | 
  424 | 
  425 |   // --------------------------------------------------
  426 |   // Navigation
  427 |   // --------------------------------------------------
  428 | 
  429 | 
  430 |   async hoverAccountsModule() {
  431 |     await this.accountsModule.hover();
  432 |   }
  433 | 
  434 | 
  435 |   getDropdownOption(optionName) {
  436 |     const options = {
  437 |       'Create Account': this.createAccountOption,
  438 |       'Import Accounts': this.importAccountsOption,
  439 |       'View Accounts': this.viewAccountsOption
  440 |     };
  441 | 
  442 | 
  443 |     const option = options[optionName];
  444 | 
  445 | 
  446 |     if (!option) {
  447 |       throw new Error(
  448 |         `Unknown Accounts dropdown option: "${optionName}"`
  449 |       );
  450 |     }
  451 | 
  452 | 
  453 |     return option;
  454 |   }
  455 | 
  456 | 
  457 |   async openCreateAccountPage() {
  458 |     await this.hoverAccountsModule();
  459 |     await this.createAccountOption.click();
  460 |   }
  461 | 
  462 | 
  463 |   async openImportAccountPage() {
  464 |     await this.hoverAccountsModule();
  465 |     await this.importAccountsOption.click();
  466 |   }
  467 | 
  468 | 
  469 |   async openViewAccountPage() {
  470 |     await this.hoverAccountsModule();
  471 |     await this.viewAccountsOption.click();
  472 | 
  473 | 
  474 |     await this.viewAccountPageHeading.waitFor({
  475 |       state: 'visible'
  476 |     });
  477 | 
  478 | 
  479 |     const viewport = await this.page.evaluate(() => ({
  480 |       width: window.innerWidth,
  481 |       height: window.innerHeight
  482 |     }));
  483 | 
  484 | 
  485 |     await this.page.mouse.move(
  486 |       viewport.width - 20,
  487 |       viewport.height - 20
  488 |     );
  489 | 
  490 | 
  491 |     await this.accountsDropdown.waitFor({
  492 |       state: 'hidden'
  493 |     });
  494 |   }
  495 | 
  496 | 
  497 |   // --------------------------------------------------
  498 |   // Account creation and editing
  499 |   // --------------------------------------------------
  500 | 
  501 | 
  502 |   async enterAccountName(name) {
> 503 |     await this.accountNameInput.fill(name);
      |                                 ^ TimeoutError: locator.fill: Timeout 20000ms exceeded.
  504 |   }
  505 | 
  506 | 
  507 |   async enterAccountWebsite(website) {
  508 |     await this.websiteInput.fill(website);
  509 |   }
  510 | 
  511 | 
  512 |   async enterAccountOfficePhone(phone) {
  513 |     await this.officePhoneInput.fill(String(phone));
  514 |   }
  515 | 
  516 | 
  517 |   async clickSaveOnCreateAccountPage() {
  518 |     await this.saveButton.click();
  519 |   }
  520 | 
  521 | 
  522 |   async clickCancelOnCreateAccountPage() {
  523 |     await this.cancelCreateAccountButton.click();
  524 |   }
  525 | 
  526 | 
  527 |   async openAccountForEditing() {
  528 |     await this.editAccountButton.click();
  529 |   }
  530 | 
  531 | 
  532 |   getAccountDetailName(expectedName) {
  533 |     return this.overviewPanel.getByText(expectedName, {
  534 |       exact: true
  535 |     });
  536 |   }
  537 | 
  538 | 
  539 |   async enterCompleteOverviewInformation(account) {
  540 |     const fields = {
  541 |       name: this.accountNameInput,
  542 |       website: this.websiteInput,
  543 |       phone: this.officePhoneInput,
  544 |       email: this.emailInput,
  545 | 
  546 | 
  547 |       billingStreet: this.billingStreetInput,
  548 |       billingPostalCode: this.billingPostalCodeInput,
  549 |       billingCity: this.billingCityInput,
  550 |       billingState: this.billingStateInput,
  551 |       billingCountry: this.billingCountryInput,
  552 | 
  553 | 
  554 |       shippingStreet: this.shippingStreetInput,
  555 |       shippingPostalCode: this.shippingPostalCodeInput,
  556 |       shippingCity: this.shippingCityInput,
  557 |       shippingState: this.shippingStateInput,
  558 |       shippingCountry: this.shippingCountryInput
  559 |     };
  560 | 
  561 | 
  562 |     for (const [fieldName, input] of Object.entries(fields)) {
  563 |       const value = account[fieldName];
  564 | 
  565 | 
  566 |       if (value === undefined || value === null) {
  567 |         throw new Error(
  568 |           `Missing Excel value for overview field "${fieldName}".`
  569 |         );
  570 |       }
  571 | 
  572 | 
  573 |       await input.fill(String(value));
  574 |     }
  575 |   }
  576 | 
  577 | 
  578 |   async enterAccountWithPrimaryEmail(account) {
  579 |     await this.enterAccountName(account.name);
  580 |     await this.emailInput.fill(account.email);
  581 |     await this.primaryEmailControl.setChecked(true);
  582 |   }
  583 | 
  584 | 
  585 |   async enterAccountWithInvalidEmail(account) {
  586 |     await this.enterAccountName(account.name);
  587 |     await this.emailInput.fill(account.email);
  588 |   }
  589 | 
  590 | 
  591 |   async enterUnsavedAccountData(account) {
  592 |     await this.enterAccountName(account.name);
  593 |     await this.emailInput.fill(account.email);
  594 |   }
  595 | 
  596 | 
  597 |   async waitForAccountDetailPage() {
  598 |     await this.overviewPanel.waitFor({
  599 |       state: 'visible'
  600 |     });
  601 | 
  602 | 
  603 |     await this.editAccountButton.waitFor({
```