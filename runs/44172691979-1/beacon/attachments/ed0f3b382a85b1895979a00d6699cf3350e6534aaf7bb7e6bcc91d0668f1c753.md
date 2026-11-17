# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Update account website
- Location: tests/generated/features/accounts.feature.spec.js:120:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('tabpanel', { name: /^overview$/i }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - navigation [ref=f4e5]:
      - generic [ref=f4e6]:
        - list [ref=f4e9]:
          - listitem [ref=f4e10]:
            - link [ref=f4e11]:
              - /url: "#/home"
        - list [ref=f4e18]:
          - listitem [ref=f4e19]:
            - generic [ref=f4e20]: Accounts
          - listitem [ref=f4e27]:
            - generic [ref=f4e28]: Contacts
          - listitem [ref=f4e35]:
            - generic [ref=f4e36]: Opportunities
        - list [ref=f4e45]:
          - listitem [ref=f4e46]:
            - generic [ref=f4e47]: More
      - generic [ref=f4e49]:
        - list [ref=f4e51]:
          - listitem [ref=f4e52]:
            - generic "Quick Create" [ref=f4e53] [cursor=pointer]
        - list [ref=f4e60]:
          - listitem [ref=f4e61]:
            - generic "Recently Viewed" [ref=f4e62] [cursor=pointer]
        - generic [ref=f4e72]:
          - textbox "Search" [ref=f4e73]:
            - /placeholder: Search...
          - button "Search" [ref=f4e75] [cursor=pointer]
        - list [ref=f4e85]:
          - listitem [ref=f4e86]:
            - generic [ref=f4e87] [cursor=pointer]
      - list [ref=f4e95]:
        - listitem [ref=f4e96]
    - generic [ref=f4e107]:
      - generic [ref=f4e109]:
        - generic [ref=f4e110]:
          - generic [ref=f4e111]: ACCOUNTS
          - generic [ref=f4e118]:
            - group [ref=f4e120]:
              - button "Filter" [ref=f4e122] [cursor=pointer]
            - button "Insights" [ref=f4e124] [cursor=pointer]
        - separator [ref=f4e131]
      - generic [ref=f4e134]:
        - generic [ref=f4e137]:
          - generic [ref=f4e140]:
            - generic [ref=f4e141]:
              - generic [ref=f4e143]:
                - button [aria-hidden] [ref=f4e145] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=f4e150] [cursor=pointer]
              - button "Columns" [ref=f4e157] [cursor=pointer]:
                - generic "Columns" [ref=f4e159]
            - generic [ref=f4e171]:
              - button "Navigate to first page" [ref=f4e172] [cursor=pointer]
              - button "Previous page" [ref=f4e178] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=f4e184] [cursor=pointer]
              - button "Navigate to last page" [ref=f4e190] [cursor=pointer]
          - table [ref=f4e199]:
            - rowgroup [ref=f4e200]:
              - row [ref=f4e201]:
                - columnheader [ref=f4e202]
                - columnheader [ref=f4e203]
                - columnheader "Name" [ref=f4e204]:
                  - generic [ref=f4e207] [cursor=pointer]
                - columnheader "City" [ref=f4e214]:
                  - generic [ref=f4e217] [cursor=pointer]
                - columnheader "Billing Country" [ref=f4e224]:
                  - generic [ref=f4e227] [cursor=pointer]
                - columnheader "Phone" [ref=f4e234]:
                  - generic [ref=f4e237] [cursor=pointer]
                - columnheader [ref=f4e244]
            - rowgroup [ref=f4e245]:
              - row [ref=f4e246]:
                - cell [ref=f4e247]
                - cell [ref=f4e249]:
                  - button [disabled] [ref=f4e250]
                - cell [ref=f4e255]
                - cell [ref=f4e257]
                - cell [ref=f4e259]
                - cell [ref=f4e261]
                - cell [ref=f4e263]
              - row [ref=f4e265]:
                - cell [ref=f4e266]
                - cell [ref=f4e268]:
                  - button [disabled] [ref=f4e269]
                - cell [ref=f4e274]
                - cell [ref=f4e276]
                - cell [ref=f4e278]
                - cell [ref=f4e280]
                - cell [ref=f4e282]
              - row [ref=f4e284]:
                - cell [ref=f4e285]
                - cell [ref=f4e287]:
                  - button [disabled] [ref=f4e288]
                - cell [ref=f4e293]
                - cell [ref=f4e295]
                - cell [ref=f4e297]
                - cell [ref=f4e299]
                - cell [ref=f4e301]
              - row [ref=f4e303]:
                - cell [ref=f4e304]
                - cell [ref=f4e306]:
                  - button [disabled] [ref=f4e307]
                - cell [ref=f4e312]
                - cell [ref=f4e314]
                - cell [ref=f4e316]
                - cell [ref=f4e318]
                - cell [ref=f4e320]
              - row [ref=f4e322]:
                - cell [ref=f4e323]
                - cell [ref=f4e325]:
                  - button [disabled] [ref=f4e326]
                - cell [ref=f4e331]
                - cell [ref=f4e333]
                - cell [ref=f4e335]
                - cell [ref=f4e337]
                - cell [ref=f4e339]
              - row [ref=f4e341]:
                - cell [ref=f4e342]
                - cell [ref=f4e344]:
                  - button [disabled] [ref=f4e345]
                - cell [ref=f4e350]
                - cell [ref=f4e352]
                - cell [ref=f4e354]
                - cell [ref=f4e356]
                - cell [ref=f4e358]
              - row [ref=f4e360]:
                - cell [ref=f4e361]
                - cell [ref=f4e363]:
                  - button [disabled] [ref=f4e364]
                - cell [ref=f4e369]
                - cell [ref=f4e371]
                - cell [ref=f4e373]
                - cell [ref=f4e375]
                - cell [ref=f4e377]
              - row [ref=f4e379]:
                - cell [ref=f4e380]
                - cell [ref=f4e382]:
                  - button [disabled] [ref=f4e383]
                - cell [ref=f4e388]
                - cell [ref=f4e390]
                - cell [ref=f4e392]
                - cell [ref=f4e394]
                - cell [ref=f4e396]
              - row [ref=f4e398]:
                - cell [ref=f4e399]
                - cell [ref=f4e401]:
                  - button [disabled] [ref=f4e402]
                - cell [ref=f4e407]
                - cell [ref=f4e409]
                - cell [ref=f4e411]
                - cell [ref=f4e413]
                - cell [ref=f4e415]
              - row [ref=f4e417]:
                - cell [ref=f4e418]
                - cell [ref=f4e420]:
                  - button [disabled] [ref=f4e421]
                - cell [ref=f4e426]
                - cell [ref=f4e428]
                - cell [ref=f4e430]
                - cell [ref=f4e432]
                - cell [ref=f4e434]
              - row [ref=f4e436]:
                - cell [ref=f4e437]
                - cell [ref=f4e439]:
                  - button [disabled] [ref=f4e440]
                - cell [ref=f4e445]
                - cell [ref=f4e447]
                - cell [ref=f4e449]
                - cell [ref=f4e451]
                - cell [ref=f4e453]
              - row [ref=f4e455]:
                - cell [ref=f4e456]
                - cell [ref=f4e458]:
                  - button [disabled] [ref=f4e459]
                - cell [ref=f4e464]
                - cell [ref=f4e466]
                - cell [ref=f4e468]
                - cell [ref=f4e470]
                - cell [ref=f4e472]
              - row [ref=f4e474]:
                - cell [ref=f4e475]
                - cell [ref=f4e477]:
                  - button [disabled] [ref=f4e478]
                - cell [ref=f4e483]
                - cell [ref=f4e485]
                - cell [ref=f4e487]
                - cell [ref=f4e489]
                - cell [ref=f4e491]
              - row [ref=f4e493]:
                - cell [ref=f4e494]
                - cell [ref=f4e496]:
                  - button [disabled] [ref=f4e497]
                - cell [ref=f4e502]
                - cell [ref=f4e504]
                - cell [ref=f4e506]
                - cell [ref=f4e508]
                - cell [ref=f4e510]
              - row [ref=f4e512]:
                - cell [ref=f4e513]
                - cell [ref=f4e515]:
                  - button [disabled] [ref=f4e516]
                - cell [ref=f4e521]
                - cell [ref=f4e523]
                - cell [ref=f4e525]
                - cell [ref=f4e527]
                - cell [ref=f4e529]
              - row [ref=f4e531]:
                - cell [ref=f4e532]
                - cell [ref=f4e534]:
                  - button [disabled] [ref=f4e535]
                - cell [ref=f4e540]
                - cell [ref=f4e542]
                - cell [ref=f4e544]
                - cell [ref=f4e546]
                - cell [ref=f4e548]
              - row [ref=f4e550]:
                - cell [ref=f4e551]
                - cell [ref=f4e553]:
                  - button [disabled] [ref=f4e554]
                - cell [ref=f4e559]
                - cell [ref=f4e561]
                - cell [ref=f4e563]
                - cell [ref=f4e565]
                - cell [ref=f4e567]
              - row [ref=f4e569]:
                - cell [ref=f4e570]
                - cell [ref=f4e572]:
                  - button [disabled] [ref=f4e573]
                - cell [ref=f4e578]
                - cell [ref=f4e580]
                - cell [ref=f4e582]
                - cell [ref=f4e584]
                - cell [ref=f4e586]
              - row [ref=f4e588]:
                - cell [ref=f4e589]
                - cell [ref=f4e591]:
                  - button [disabled] [ref=f4e592]
                - cell [ref=f4e597]
                - cell [ref=f4e599]
                - cell [ref=f4e601]
                - cell [ref=f4e603]
                - cell [ref=f4e605]
              - row [ref=f4e607]:
                - cell [ref=f4e608]
                - cell [ref=f4e610]:
                  - button [disabled] [ref=f4e611]
                - cell [ref=f4e616]
                - cell [ref=f4e618]
                - cell [ref=f4e620]
                - cell [ref=f4e622]
                - cell [ref=f4e624]
          - generic [ref=f4e628]:
            - generic [ref=f4e629]:
              - generic [ref=f4e631]:
                - button [aria-hidden] [ref=f4e633] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=f4e638] [cursor=pointer]
              - button "Columns" [ref=f4e645] [cursor=pointer]:
                - generic "Columns" [ref=f4e647]
            - generic [ref=f4e659]:
              - button "Navigate to first page" [ref=f4e660] [cursor=pointer]
              - button "Previous page" [ref=f4e666] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=f4e672] [cursor=pointer]
              - button "Navigate to last page" [ref=f4e678] [cursor=pointer]
        - generic [ref=f4e691]:
          - generic [ref=f4e692]: Quick Charts
          - combobox [ref=f4e706]:
            - option "New Accounts by Month" [selected]
  - generic [ref=f4e727]:
    - generic [ref=f4e728]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f4e729]: Back To Top
```

# Test source

```ts
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
> 598 |     await this.overviewPanel.waitFor({
      |                              ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
  599 |       state: 'visible'
  600 |     });
  601 | 
  602 | 
  603 |     await this.editAccountButton.waitFor({
  604 |       state: 'visible'
  605 |     });
  606 |   }
  607 | 
  608 | 
  609 |   async saveAccountChanges() {
  610 |     await this.saveButton.click();
  611 |     await this.waitForAccountDetailPage();
  612 |   }
  613 | 
  614 | 
  615 |   async reloadAccountDetailPage() {
  616 |     await this.page.reload();
  617 |     await this.waitForAccountDetailPage();
  618 |   }
  619 | 
  620 | 
  621 |   async cancelAccountEditing() {
  622 |     await this.cancelCreateAccountButton.click();
  623 | 
  624 | 
  625 |     await this.confirmLeaveAccountButton
  626 |       .or(this.editAccountButton)
  627 |       .first()
  628 |       .waitFor({ state: 'visible' });
  629 | 
  630 | 
  631 |     if (await this.confirmLeaveAccountButton.isVisible()) {
  632 |       await this.confirmLeaveAccountButton.click();
  633 |     }
  634 | 
  635 | 
  636 |     await this.waitForAccountDetailPage();
  637 |   }
  638 | 
  639 | 
  640 |   // --------------------------------------------------
  641 |   // Account creation helpers
  642 |   // --------------------------------------------------
  643 | 
  644 | 
  645 |   async waitForAccountRecordPage() {
  646 |     await this.page.waitForURL(ACCOUNT_RECORD_URL);
  647 | 
  648 | 
  649 |     return this.page.url();
  650 |   }
  651 | 
  652 | 
  653 |   async createAccount(account) {
  654 |     await this.openCreateAccountPage();
  655 |     await this.enterAccountName(account.name);
  656 |     await this.clickSaveOnCreateAccountPage();
  657 | 
  658 | 
  659 |     return await this.waitForAccountRecordPage();
  660 |   }
  661 | 
  662 | 
  663 |   async createCompleteAccount(account) {
  664 |     await this.openCreateAccountPage();
  665 |     await this.enterCompleteOverviewInformation(account);
  666 |     await this.clickSaveOnCreateAccountPage();
  667 | 
  668 | 
  669 |     return await this.waitForAccountRecordPage();
  670 |   }
  671 | 
  672 | 
  673 |   async createAccountWithPrimaryEmail(account) {
  674 |     await this.openCreateAccountPage();
  675 |     await this.enterAccountWithPrimaryEmail(account);
  676 |     await this.clickSaveOnCreateAccountPage();
  677 | 
  678 | 
  679 |     return await this.waitForAccountRecordPage();
  680 |   }
  681 | 
  682 | 
  683 |   async openAccountEditing() {
  684 |     await this.openAccountForEditing();
  685 |   }
  686 | 
  687 | 
  688 |   async getSelectedImportFileName() {
  689 |     return await this.getSelectedAccountImportFileName();
  690 |   }
  691 | 
  692 | 
  693 |   // --------------------------------------------------
  694 |   // Validation and unsaved-changes popup
  695 |   // --------------------------------------------------
  696 | 
  697 | 
  698 |   getEmailValidationMessage(expectedMessage) {
```