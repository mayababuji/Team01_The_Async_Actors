# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with a description
- Location: tests/generated/features/opportunities.feature.spec.js:153:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Description Account', { exact: true }) resolved to 3 elements:
    1) <div class="related-item-label ng-star-inserted">Numpy Description Account</div> aka locator('#pn_id_3_1').getByText('Numpy Description Account')
    2) <div class="related-item-label ng-star-inserted">Numpy Description Account</div> aka locator('#pn_id_3_2').getByText('Numpy Description Account')
    3) <div class="related-item-label ng-star-inserted">Numpy Description Account</div> aka locator('#pn_id_3_4').getByText('Numpy Description Account')

Call log:
  - waiting for getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Description Account', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
        - list [ref=e45]:
          - listitem [ref=e46]:
            - generic [ref=e47]: More
      - generic [ref=e49]:
        - list [ref=e51]:
          - listitem [ref=e52]:
            - generic "Quick Create" [ref=e53] [cursor=pointer]
        - list [ref=e60]:
          - listitem [ref=e61]:
            - generic "Recently Viewed" [ref=e62] [cursor=pointer]
        - generic [ref=e72]:
          - textbox "Search" [ref=e73]:
            - /placeholder: Search...
          - button "Search" [ref=e75] [cursor=pointer]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - generic [ref=e87] [cursor=pointer]
      - list [ref=e95]:
        - listitem [ref=e96]
    - alert [ref=e108]:
      - text: Record deleted successfully
      - generic "Close" [ref=e109] [cursor=pointer]: ×
    - generic [ref=e111]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]: ACCOUNTS
          - generic [ref=e122]:
            - group [ref=e124]:
              - button "Filter" [ref=e126] [cursor=pointer]
            - button "Insights" [ref=e128] [cursor=pointer]
        - separator [ref=e135]
      - generic [ref=e138]:
        - generic [ref=e141]:
          - generic [ref=e144]:
            - generic [ref=e145]:
              - generic [ref=e147]:
                - button [aria-hidden] [ref=e149] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e154] [cursor=pointer]
              - button "Columns" [ref=e161] [cursor=pointer]:
                - generic "Columns" [ref=e163]
            - generic [ref=e175]:
              - button "Navigate to first page" [ref=e176] [cursor=pointer]
              - button "Previous page" [ref=e182] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=e188] [cursor=pointer]
              - button "Navigate to last page" [ref=e194] [cursor=pointer]
          - table [ref=e203]:
            - rowgroup [ref=e204]:
              - row [ref=e205]:
                - columnheader [ref=e206]
                - columnheader [ref=e207]
                - columnheader "Name" [ref=e208]:
                  - generic [ref=e211] [cursor=pointer]
                - columnheader "City" [ref=e218]:
                  - generic [ref=e221] [cursor=pointer]
                - columnheader "Billing Country" [ref=e228]:
                  - generic [ref=e231] [cursor=pointer]
                - columnheader "Phone" [ref=e238]:
                  - generic [ref=e241] [cursor=pointer]
                - columnheader [ref=e248]
            - rowgroup [ref=e249]:
              - row [ref=e250]:
                - cell [ref=e251]
                - cell [ref=e253]:
                  - button [disabled] [ref=e254]
                - cell [ref=e259]
                - cell [ref=e261]
                - cell [ref=e263]
                - cell [ref=e265]
                - cell [ref=e267]
              - row [ref=e269]:
                - cell [ref=e270]
                - cell [ref=e272]:
                  - button [disabled] [ref=e273]
                - cell [ref=e278]
                - cell [ref=e280]
                - cell [ref=e282]
                - cell [ref=e284]
                - cell [ref=e286]
              - row [ref=e288]:
                - cell [ref=e289]
                - cell [ref=e291]:
                  - button [disabled] [ref=e292]
                - cell [ref=e297]
                - cell [ref=e299]
                - cell [ref=e301]
                - cell [ref=e303]
                - cell [ref=e305]
              - row [ref=e307]:
                - cell [ref=e308]
                - cell [ref=e310]:
                  - button [disabled] [ref=e311]
                - cell [ref=e316]
                - cell [ref=e318]
                - cell [ref=e320]
                - cell [ref=e322]
                - cell [ref=e324]
              - row [ref=e326]:
                - cell [ref=e327]
                - cell [ref=e329]:
                  - button [disabled] [ref=e330]
                - cell [ref=e335]
                - cell [ref=e337]
                - cell [ref=e339]
                - cell [ref=e341]
                - cell [ref=e343]
              - row [ref=e345]:
                - cell [ref=e346]
                - cell [ref=e348]:
                  - button [disabled] [ref=e349]
                - cell [ref=e354]
                - cell [ref=e356]
                - cell [ref=e358]
                - cell [ref=e360]
                - cell [ref=e362]
              - row [ref=e364]:
                - cell [ref=e365]
                - cell [ref=e367]:
                  - button [disabled] [ref=e368]
                - cell [ref=e373]
                - cell [ref=e375]
                - cell [ref=e377]
                - cell [ref=e379]
                - cell [ref=e381]
              - row [ref=e383]:
                - cell [ref=e384]
                - cell [ref=e386]:
                  - button [disabled] [ref=e387]
                - cell [ref=e392]
                - cell [ref=e394]
                - cell [ref=e396]
                - cell [ref=e398]
                - cell [ref=e400]
              - row [ref=e402]:
                - cell [ref=e403]
                - cell [ref=e405]:
                  - button [disabled] [ref=e406]
                - cell [ref=e411]
                - cell [ref=e413]
                - cell [ref=e415]
                - cell [ref=e417]
                - cell [ref=e419]
              - row [ref=e421]:
                - cell [ref=e422]
                - cell [ref=e424]:
                  - button [disabled] [ref=e425]
                - cell [ref=e430]
                - cell [ref=e432]
                - cell [ref=e434]
                - cell [ref=e436]
                - cell [ref=e438]
              - row [ref=e440]:
                - cell [ref=e441]
                - cell [ref=e443]:
                  - button [disabled] [ref=e444]
                - cell [ref=e449]
                - cell [ref=e451]
                - cell [ref=e453]
                - cell [ref=e455]
                - cell [ref=e457]
              - row [ref=e459]:
                - cell [ref=e460]
                - cell [ref=e462]:
                  - button [disabled] [ref=e463]
                - cell [ref=e468]
                - cell [ref=e470]
                - cell [ref=e472]
                - cell [ref=e474]
                - cell [ref=e476]
              - row [ref=e478]:
                - cell [ref=e479]
                - cell [ref=e481]:
                  - button [disabled] [ref=e482]
                - cell [ref=e487]
                - cell [ref=e489]
                - cell [ref=e491]
                - cell [ref=e493]
                - cell [ref=e495]
              - row [ref=e497]:
                - cell [ref=e498]
                - cell [ref=e500]:
                  - button [disabled] [ref=e501]
                - cell [ref=e506]
                - cell [ref=e508]
                - cell [ref=e510]
                - cell [ref=e512]
                - cell [ref=e514]
              - row [ref=e516]:
                - cell [ref=e517]
                - cell [ref=e519]:
                  - button [disabled] [ref=e520]
                - cell [ref=e525]
                - cell [ref=e527]
                - cell [ref=e529]
                - cell [ref=e531]
                - cell [ref=e533]
              - row [ref=e535]:
                - cell [ref=e536]
                - cell [ref=e538]:
                  - button [disabled] [ref=e539]
                - cell [ref=e544]
                - cell [ref=e546]
                - cell [ref=e548]
                - cell [ref=e550]
                - cell [ref=e552]
              - row [ref=e554]:
                - cell [ref=e555]
                - cell [ref=e557]:
                  - button [disabled] [ref=e558]
                - cell [ref=e563]
                - cell [ref=e565]
                - cell [ref=e567]
                - cell [ref=e569]
                - cell [ref=e571]
              - row [ref=e573]:
                - cell [ref=e574]
                - cell [ref=e576]:
                  - button [disabled] [ref=e577]
                - cell [ref=e582]
                - cell [ref=e584]
                - cell [ref=e586]
                - cell [ref=e588]
                - cell [ref=e590]
              - row [ref=e592]:
                - cell [ref=e593]
                - cell [ref=e595]:
                  - button [disabled] [ref=e596]
                - cell [ref=e601]
                - cell [ref=e603]
                - cell [ref=e605]
                - cell [ref=e607]
                - cell [ref=e609]
              - row [ref=e611]:
                - cell [ref=e612]
                - cell [ref=e614]:
                  - button [disabled] [ref=e615]
                - cell [ref=e620]
                - cell [ref=e622]
                - cell [ref=e624]
                - cell [ref=e626]
                - cell [ref=e628]
          - generic [ref=e632]:
            - generic [ref=e633]:
              - generic [ref=e635]:
                - button [aria-hidden] [ref=e637] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e642] [cursor=pointer]
              - button "Columns" [ref=e649] [cursor=pointer]:
                - generic "Columns" [ref=e651]
            - generic [ref=e663]:
              - button "Navigate to first page" [ref=e664] [cursor=pointer]
              - button "Previous page" [ref=e670] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=e676] [cursor=pointer]
              - button "Navigate to last page" [ref=e682] [cursor=pointer]
        - generic [ref=e695]:
          - generic [ref=e696]: Quick Charts
          - combobox [ref=e710]:
            - option "New Accounts by Month" [selected]
  - generic [ref=e735]:
    - generic [ref=e736]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e737]: Back To Top
```

# Test source

```ts
  280 |   }
  281 | 
  282 | 
  283 |   // --------------------------------------------------
  284 |   // Navigation actions
  285 |   // --------------------------------------------------
  286 | 
  287 | 
  288 |   async hoverOpportunitiesModule() {
  289 |     await this.opportunitiesModule.hover();
  290 |   }
  291 | 
  292 | 
  293 |   async openViewOpportunitiesPage() {
  294 |     await this.hoverOpportunitiesModule();
  295 |     await this.viewOpportunitiesOption.click();
  296 |   }
  297 | 
  298 | 
  299 |   async openImportOpportunitiesPage() {
  300 |     await this.hoverOpportunitiesModule();
  301 |     await this.importOpportunitiesOption.click();
  302 |   }
  303 | 
  304 | 
  305 |   async openCreateOpportunityPage() {
  306 |     await this.hoverOpportunitiesModule();
  307 |     await this.createOpportunityOption.click();
  308 | 
  309 | 
  310 |     await this.expectedCloseDateInput.waitFor({
  311 |       state: 'visible'
  312 |     });
  313 |   }
  314 | 
  315 | 
  316 |   // --------------------------------------------------
  317 |   // Create Opportunity actions
  318 |   // --------------------------------------------------
  319 | 
  320 | 
  321 |   async enterMandatoryOpportunityDetails(opportunity) {
  322 |     await this.enterOpportunityName(opportunity.name);
  323 | 
  324 | 
  325 |     // Fill Amount before opening the account search dropdown.
  326 |     await this.enterOpportunityAmount(opportunity.amount);
  327 | 
  328 | 
  329 |     await this.selectSalesStage(opportunity.salesStage);
  330 | 
  331 | 
  332 |     await this.enterExpectedCloseDate(
  333 |       opportunity.expectedCloseDate
  334 |     );
  335 | 
  336 | 
  337 |     await this.enterOpportunityAccountName(
  338 |       opportunity.accountName
  339 |     );
  340 |   }
  341 | 
  342 | 
  343 |   async enterOpportunityName(name) {
  344 |     await this.basicPanel.waitFor({
  345 |       state: 'visible'
  346 |     });
  347 | 
  348 | 
  349 |     await this.opportunityNameInput.fill(String(name));
  350 |   }
  351 | 
  352 | 
  353 |   async enterOpportunityAmount(amount) {
  354 |     await this.opportunityAmountInput.fill(
  355 |       String(amount ?? '').trim()
  356 |     );
  357 | 
  358 | 
  359 |     await this.opportunityAmountInput.press('Tab');
  360 |   }
  361 | 
  362 | 
  363 |   async enterOpportunityAccountName(accountName) {
  364 |     const accountSuggestion = this.getAccountSuggestion(
  365 |       accountName
  366 |     );
  367 | 
  368 | 
  369 |     await this.accountNameDropdown.click();
  370 |     await this.accountSearchInput.fill('');
  371 | 
  372 | 
  373 |     await this.accountSearchInput.pressSequentially(
  374 |       accountName.trim().slice(0, 4),
  375 |       { delay: 100 }
  376 |     );
  377 | 
  378 | 
  379 |     // Select the suggestion without submitting the form with Enter.
> 380 |     await accountSuggestion.click();
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Description Account', { exact: true }) resolved to 3 elements:
  381 |   }
  382 | 
  383 | 
  384 |   async selectSalesStage(salesStage) {
  385 |     await this.salesStageSelect.selectOption({
  386 |       label: salesStage
  387 |     });
  388 |   }
  389 | 
  390 | 
  391 |   async selectOpportunityType(opportunityType) {
  392 |     await this.opportunityTypeSelect.selectOption({
  393 |       label: opportunityType
  394 |     });
  395 |   }
  396 | 
  397 | 
  398 |   async selectOpportunityLeadSource(leadSource) {
  399 |     await this.opportunityLeadSourceSelect.selectOption({
  400 |       label: leadSource
  401 |     });
  402 |   }
  403 | 
  404 | 
  405 |   async enterExpectedCloseDate(expectedCloseDate) {
  406 |     await this.expectedCloseDateInput.fill(
  407 |       expectedCloseDate
  408 |     );
  409 |   }
  410 | 
  411 | 
  412 |   async enterOpportunityDescription(description) {
  413 |     await this.opportunityDescriptionInput.fill(
  414 |       description
  415 |     );
  416 |   }
  417 | 
  418 | 
  419 |   async saveOpportunity() {
  420 |     await this.saveOpportunityButton.click();
  421 |   }
  422 | 
  423 | 
  424 |   // --------------------------------------------------
  425 |   // Opportunity test-data cleanup
  426 |   // --------------------------------------------------
  427 | 
  428 | 
  429 |   async deleteOpportunityByUrl(recordUrl) {
  430 |     const target = new URL(recordUrl);
  431 |     const current = new URL(this.page.url());
  432 | 
  433 | 
  434 |     // Refuse cleanup on a different origin.
  435 |     if (target.origin !== current.origin) {
  436 |       throw new Error(
  437 |         `Refusing cleanup on a different origin: ${target.origin}`
  438 |       );
  439 |     }
  440 | 
  441 | 
  442 |     const recordPattern =
  443 |       /^#\/opportunities\/record\/([^/?#]+)(?:[/?#]|$)/;
  444 | 
  445 | 
  446 |     const targetMatch = target.hash.match(recordPattern);
  447 | 
  448 | 
  449 |     if (!targetMatch) {
  450 |       throw new Error(
  451 |         `Cleanup requires an opportunity detail URL: ${recordUrl}`
  452 |       );
  453 |     }
  454 | 
  455 | 
  456 |     const recordId = targetMatch[1];
  457 |     const currentMatch = current.hash.match(recordPattern);
  458 | 
  459 | 
  460 |     const isTargetRecord =
  461 |       current.origin === target.origin &&
  462 |       currentMatch?.[1] === recordId;
  463 | 
  464 | 
  465 |     if (!isTargetRecord) {
  466 |       await this.page.goto(recordUrl);
  467 |     }
  468 | 
  469 | 
  470 |     await this.page.waitForURL(url => {
  471 |       const match = url.hash.match(recordPattern);
  472 | 
  473 | 
  474 |       return (
  475 |         url.origin === target.origin &&
  476 |         match?.[1] === recordId
  477 |       );
  478 |     });
  479 | 
  480 | 
```