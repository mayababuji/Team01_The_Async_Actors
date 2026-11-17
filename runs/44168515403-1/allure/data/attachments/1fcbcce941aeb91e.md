# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with lead source <leadSource> >> Create an opportunity with lead source Word of mouth
- Location: tests/generated/features/opportunities.feature.spec.js:127:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Word of Mouth Account', { exact: true }) resolved to 2 elements:
    1) <div class="related-item-label ng-star-inserted">Numpy Word of Mouth Account</div> aka locator('#pn_id_3_2').getByText('Numpy Word of Mouth Account')
    2) <div class="related-item-label ng-star-inserted">Numpy Word of Mouth Account</div> aka locator('#pn_id_3_3').getByText('Numpy Word of Mouth Account')

Call log:
  - waiting for getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Word of Mouth Account', { exact: true })

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
            - generic [ref=e126]: "1"
      - list [ref=e128]:
        - listitem [ref=e129]
    - generic [ref=e140]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - generic [ref=e144]: ACCOUNTS
          - generic [ref=e151]:
            - group [ref=e153]:
              - button "Filter" [ref=e155] [cursor=pointer]
            - button "Insights" [ref=e157] [cursor=pointer]
        - separator [ref=e164]
      - generic [ref=e167]:
        - generic [ref=e170]:
          - generic [ref=e173]:
            - generic [ref=e174]:
              - generic [ref=e176]:
                - button [aria-hidden] [ref=e178] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e183] [cursor=pointer]
              - button "Columns" [ref=e190] [cursor=pointer]:
                - generic "Columns" [ref=e192]
            - generic [ref=e204]:
              - button "Navigate to first page" [ref=e205] [cursor=pointer]
              - button "Previous page" [ref=e211] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=e217] [cursor=pointer]
              - button "Navigate to last page" [ref=e223] [cursor=pointer]
          - table [ref=e232]:
            - rowgroup [ref=e233]:
              - row [ref=e234]:
                - columnheader [ref=e235]
                - columnheader [ref=e236]
                - columnheader "Name" [ref=e237]:
                  - generic [ref=e240] [cursor=pointer]
                - columnheader "City" [ref=e247]:
                  - generic [ref=e250] [cursor=pointer]
                - columnheader "Billing Country" [ref=e257]:
                  - generic [ref=e260] [cursor=pointer]
                - columnheader "Phone" [ref=e267]:
                  - generic [ref=e270] [cursor=pointer]
                - columnheader "User" [ref=e277]:
                  - generic [ref=e280] [cursor=pointer]
                - columnheader "Email Address" [ref=e287]
                - columnheader [ref=e289]
            - rowgroup [ref=e290]:
              - row [ref=e291]:
                - cell [ref=e292]
                - cell [ref=e294]:
                  - button [disabled] [ref=e295]
                - cell [ref=e300]
                - cell [ref=e302]
                - cell [ref=e304]
                - cell [ref=e306]
                - cell [ref=e308]
                - cell [ref=e310]
                - cell [ref=e312]
              - row [ref=e314]:
                - cell [ref=e315]
                - cell [ref=e317]:
                  - button [disabled] [ref=e318]
                - cell [ref=e323]
                - cell [ref=e325]
                - cell [ref=e327]
                - cell [ref=e329]
                - cell [ref=e331]
                - cell [ref=e333]
                - cell [ref=e335]
              - row [ref=e337]:
                - cell [ref=e338]
                - cell [ref=e340]:
                  - button [disabled] [ref=e341]
                - cell [ref=e346]
                - cell [ref=e348]
                - cell [ref=e350]
                - cell [ref=e352]
                - cell [ref=e354]
                - cell [ref=e356]
                - cell [ref=e358]
              - row [ref=e360]:
                - cell [ref=e361]
                - cell [ref=e363]:
                  - button [disabled] [ref=e364]
                - cell [ref=e369]
                - cell [ref=e371]
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
                - cell [ref=e402]
                - cell [ref=e404]
              - row [ref=e406]:
                - cell [ref=e407]
                - cell [ref=e409]:
                  - button [disabled] [ref=e410]
                - cell [ref=e415]
                - cell [ref=e417]
                - cell [ref=e419]
                - cell [ref=e421]
                - cell [ref=e423]
                - cell [ref=e425]
                - cell [ref=e427]
              - row [ref=e429]:
                - cell [ref=e430]
                - cell [ref=e432]:
                  - button [disabled] [ref=e433]
                - cell [ref=e438]
                - cell [ref=e440]
                - cell [ref=e442]
                - cell [ref=e444]
                - cell [ref=e446]
                - cell [ref=e448]
                - cell [ref=e450]
              - row [ref=e452]:
                - cell [ref=e453]
                - cell [ref=e455]:
                  - button [disabled] [ref=e456]
                - cell [ref=e461]
                - cell [ref=e463]
                - cell [ref=e465]
                - cell [ref=e467]
                - cell [ref=e469]
                - cell [ref=e471]
                - cell [ref=e473]
              - row [ref=e475]:
                - cell [ref=e476]
                - cell [ref=e478]:
                  - button [disabled] [ref=e479]
                - cell [ref=e484]
                - cell [ref=e486]
                - cell [ref=e488]
                - cell [ref=e490]
                - cell [ref=e492]
                - cell [ref=e494]
                - cell [ref=e496]
              - row [ref=e498]:
                - cell [ref=e499]
                - cell [ref=e501]:
                  - button [disabled] [ref=e502]
                - cell [ref=e507]
                - cell [ref=e509]
                - cell [ref=e511]
                - cell [ref=e513]
                - cell [ref=e515]
                - cell [ref=e517]
                - cell [ref=e519]
              - row [ref=e521]:
                - cell [ref=e522]
                - cell [ref=e524]:
                  - button [disabled] [ref=e525]
                - cell [ref=e530]
                - cell [ref=e532]
                - cell [ref=e534]
                - cell [ref=e536]
                - cell [ref=e538]
                - cell [ref=e540]
                - cell [ref=e542]
              - row [ref=e544]:
                - cell [ref=e545]
                - cell [ref=e547]:
                  - button [disabled] [ref=e548]
                - cell [ref=e553]
                - cell [ref=e555]
                - cell [ref=e557]
                - cell [ref=e559]
                - cell [ref=e561]
                - cell [ref=e563]
                - cell [ref=e565]
              - row [ref=e567]:
                - cell [ref=e568]
                - cell [ref=e570]:
                  - button [disabled] [ref=e571]
                - cell [ref=e576]
                - cell [ref=e578]
                - cell [ref=e580]
                - cell [ref=e582]
                - cell [ref=e584]
                - cell [ref=e586]
                - cell [ref=e588]
              - row [ref=e590]:
                - cell [ref=e591]
                - cell [ref=e593]:
                  - button [disabled] [ref=e594]
                - cell [ref=e599]
                - cell [ref=e601]
                - cell [ref=e603]
                - cell [ref=e605]
                - cell [ref=e607]
                - cell [ref=e609]
                - cell [ref=e611]
              - row [ref=e613]:
                - cell [ref=e614]
                - cell [ref=e616]:
                  - button [disabled] [ref=e617]
                - cell [ref=e622]
                - cell [ref=e624]
                - cell [ref=e626]
                - cell [ref=e628]
                - cell [ref=e630]
                - cell [ref=e632]
                - cell [ref=e634]
              - row [ref=e636]:
                - cell [ref=e637]
                - cell [ref=e639]:
                  - button [disabled] [ref=e640]
                - cell [ref=e645]
                - cell [ref=e647]
                - cell [ref=e649]
                - cell [ref=e651]
                - cell [ref=e653]
                - cell [ref=e655]
                - cell [ref=e657]
              - row [ref=e659]:
                - cell [ref=e660]
                - cell [ref=e662]:
                  - button [disabled] [ref=e663]
                - cell [ref=e668]
                - cell [ref=e670]
                - cell [ref=e672]
                - cell [ref=e674]
                - cell [ref=e676]
                - cell [ref=e678]
                - cell [ref=e680]
              - row [ref=e682]:
                - cell [ref=e683]
                - cell [ref=e685]:
                  - button [disabled] [ref=e686]
                - cell [ref=e691]
                - cell [ref=e693]
                - cell [ref=e695]
                - cell [ref=e697]
                - cell [ref=e699]
                - cell [ref=e701]
                - cell [ref=e703]
              - row [ref=e705]:
                - cell [ref=e706]
                - cell [ref=e708]:
                  - button [disabled] [ref=e709]
                - cell [ref=e714]
                - cell [ref=e716]
                - cell [ref=e718]
                - cell [ref=e720]
                - cell [ref=e722]
                - cell [ref=e724]
                - cell [ref=e726]
              - row [ref=e728]:
                - cell [ref=e729]
                - cell [ref=e731]:
                  - button [disabled] [ref=e732]
                - cell [ref=e737]
                - cell [ref=e739]
                - cell [ref=e741]
                - cell [ref=e743]
                - cell [ref=e745]
                - cell [ref=e747]
                - cell [ref=e749]
          - generic [ref=e753]:
            - generic [ref=e754]:
              - generic [ref=e756]:
                - button [aria-hidden] [ref=e758] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e763] [cursor=pointer]
              - button "Columns" [ref=e770] [cursor=pointer]:
                - generic "Columns" [ref=e772]
            - generic [ref=e784]:
              - button "Navigate to first page" [ref=e785] [cursor=pointer]
              - button "Previous page" [ref=e791] [cursor=pointer]
              - text: (0 - 0 of 0)
              - button "Next page" [ref=e797] [cursor=pointer]
              - button "Navigate to last page" [ref=e803] [cursor=pointer]
        - generic [ref=e816]:
          - generic [ref=e817]: Quick Charts
          - generic [ref=e827]:
            - combobox [ref=e831]:
              - option "New Accounts by Month" [selected]
            - img [ref=e835]:
              - generic [ref=e836]:
                - generic [ref=e840]:
                  - generic "2025-12" [ref=e841]
                  - generic "2026-01" [ref=e843]
                  - generic "2026-02" [ref=e845]
                  - generic "2026-03" [ref=e847]
                  - generic "2026-04" [ref=e849]
                  - generic "2026-05" [ref=e851]
                  - generic "2026-06" [ref=e853]
                  - generic "2026-07" [ref=e855]
                  - generic "2026-08" [ref=e857]
                  - generic "2026-09" [ref=e859]
                  - generic "2026-10" [ref=e861]
                  - generic "2026-11" [ref=e863]
                - generic [ref=e904]:
                  - generic "0" [ref=e905]
                  - generic "5" [ref=e907]
                  - generic "10" [ref=e909]
  - generic [ref=e933]:
    - generic [ref=e934]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e935]: Back To Top
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
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Word of Mouth Account', { exact: true }) resolved to 2 elements:
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