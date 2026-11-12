# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Search for an account using partial account name
- Location: tests/generated/features/accounts.feature.spec.js:90:3

# Error details

```
TimeoutError: locator.hover: Timeout 20000ms exceeded.
Call log:
  - waiting for getByText('Accounts', { exact: true }).visible()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - list [ref=e7]:
        - listitem [ref=e8]
    - generic [ref=e19]:
      - textbox "Username" [ref=e21]
      - generic [ref=e22]:
        - generic:
          - generic:
            - img [aria-hidden]:
              - generic: "***"
        - textbox "Password" [ref=e23]
      - button "Log In" [ref=e24] [cursor=pointer]
  - generic [ref=e25]: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  331 |     // this.accountImportMissingFileMessage = page
  332 |     //   .locator('div.required.validation-message')
  333 |     //   .filter({
  334 |     //     hasText:
  335 |     //       /^missing required fields:\s*select a file to upload\.$/i
  336 |     //   })
  337 |     //   .within(this.importFrameBody);
  338 | 
  339 |     this.accountImportMissingFileMessage =
  340 |   this.importFrameBody.getByText(
  341 |     'Missing required fields: Select a file to upload.',
  342 |     { exact: true }
  343 |   );
  344 | 
  345 | 
  346 |     this.importNewRecordsOnlyOption = page
  347 |       .getByText('Create new records only', {
  348 |         exact: true
  349 |       })
  350 |       .within(this.importFrameBody);
  351 | 
  352 | 
  353 |     this.importFilePropertiesHeading = page
  354 |       .getByRole('heading', {
  355 |         name: /^step 2:\s*confirm import file properties$/i
  356 |       })
  357 |       .within(this.importFrameBody);
  358 | 
  359 | 
  360 |     this.accountImportConfigurationHeading =
  361 |       this.importFilePropertiesHeading;
  362 | 
  363 | 
  364 |     this.importFilePropertiesNextButton =
  365 |       this.accountImportNextButton;
  366 | 
  367 | 
  368 |     this.importFieldMappingsHeading = page
  369 |       .getByRole('heading', {
  370 |         name: /^step 3:\s*confirm field mappings$/i
  371 |       })
  372 |       .within(this.importFrameBody);
  373 | 
  374 | 
  375 |     this.importFieldMappingsNextButton =
  376 |       this.accountImportNextButton;
  377 | 
  378 | 
  379 |     this.importDuplicatesHeading = page
  380 |       .getByRole('heading', {
  381 |         name: /^step 4:\s*check for possible duplicates$/i
  382 |       })
  383 |       .within(this.importFrameBody);
  384 | 
  385 | 
  386 |     this.importNowButton = page
  387 |       .getByRole('button', {
  388 |         name: /^import now$/i
  389 |       })
  390 |       .within(this.importFrameBody);
  391 | 
  392 | 
  393 |     this.importResultsHeading = page
  394 |       .getByRole('heading', {
  395 |         name: /^step 5:\s*view import results$/i
  396 |       })
  397 |       .within(this.importFrameBody);
  398 | 
  399 | 
  400 |     this.importResultsPanel = this.importFrameBody;
  401 | 
  402 | 
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
> 431 |     await this.accountsModule.hover();
      |                               ^ TimeoutError: locator.hover: Timeout 20000ms exceeded.
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
  503 |     await this.accountNameInput.fill(name);
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
```