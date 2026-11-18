# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Verify Import Opportunities page navigation
- Location: tests/generated/features/opportunities.feature.spec.js:20:3

# Error details

```
TimeoutError: locator.hover: Timeout 20000ms exceeded.
Call log:
  - waiting for getByText('Opportunities', { exact: true }).visible()

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
  189 |       .filter({ visible: true });
  190 |   }
  191 | 
  192 | 
  193 |   // --------------------------------------------------
  194 |   // Parameterized locators
  195 |   // --------------------------------------------------
  196 | 
  197 | 
  198 |   getAccountSuggestion(accountName) {
  199 |     return this.accountOptionsList.getByText(accountName, {
  200 |       exact: true
  201 |     });
  202 |   }
  203 | 
  204 | 
  205 |   getRequiredFieldValidationMessage(fieldName) {
  206 |     return this.page.getByText(
  207 |       `Missing required field: ${fieldName}`,
  208 |       { exact: true }
  209 |     );
  210 |   }
  211 | 
  212 | 
  213 |   getOpportunityDetailHeading(opportunityName) {
  214 |     return this.basicPanel.getByText(
  215 |       opportunityName,
  216 |       { exact: true }
  217 |     );
  218 |   }
  219 | 
  220 | 
  221 |   // --------------------------------------------------
  222 |   // Locator accessors
  223 |   // --------------------------------------------------
  224 | 
  225 | 
  226 |   getOpportunityAmountDetail() {
  227 |     return this.opportunityAmountDetail;
  228 |   }
  229 | 
  230 | 
  231 |   getOpportunityTypeDetail() {
  232 |     return this.opportunityTypeDetail;
  233 |   }
  234 | 
  235 | 
  236 |   getOpportunityLeadSourceDetail() {
  237 |     return this.opportunityLeadSourceDetail;
  238 |   }
  239 | 
  240 | 
  241 |   getOpportunityDescriptionDetail(expectedDescription) {
  242 |     if (
  243 |       typeof expectedDescription !== 'string' ||
  244 |       expectedDescription.trim() === ''
  245 |     ) {
  246 |       throw new Error(
  247 |         'getOpportunityDescriptionDetail requires ' +
  248 |         'a non-empty expected description.'
  249 |       );
  250 |     }
  251 | 
  252 | 
  253 |     return this.basicPanel.getByText(
  254 |       expectedDescription,
  255 |       { exact: true }
  256 |     );
  257 |   }
  258 | 
  259 | 
  260 |   getOpportunityAccessErrorMessage(expectedMessage) {
  261 |     return this.page.getByText(
  262 |       expectedMessage,
  263 |       { exact: false }
  264 |     );
  265 |   }
  266 | 
  267 | 
  268 |   getDropdownOption(optionName) {
  269 |     const option = this.dropdownOptions[optionName];
  270 | 
  271 | 
  272 |     if (!option) {
  273 |       throw new Error(
  274 |         `Unknown Opportunities dropdown option: "${optionName}"`
  275 |       );
  276 |     }
  277 | 
  278 | 
  279 |     return option;
  280 |   }
  281 | 
  282 | 
  283 |   // --------------------------------------------------
  284 |   // Navigation actions
  285 |   // --------------------------------------------------
  286 | 
  287 | 
  288 |   async hoverOpportunitiesModule() {
> 289 |     await this.opportunitiesModule.hover();
      |                                    ^ TimeoutError: locator.hover: Timeout 20000ms exceeded.
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
  380 |     await accountSuggestion.click();
  381 |   }
  382 | 
  383 | 
  384 |   async selectSalesStage(salesStage) {
  385 |     await this.salesStageSelect.selectOption({
  386 |       label: salesStage
  387 |     });
  388 |   }
  389 | 
```