# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/leads.feature.spec.js >> Leads management >> Filter lead records by last name
- Location: tests/generated/features/leads.feature.spec.js:49:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Leads', { exact: true }).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Leads', { exact: true }).first() with timeout 20000ms
  - waiting for getByText('Leads', { exact: true }).first()

```

```yaml
- navigation:
  - list:
    - listitem
- textbox "Username"
- textbox "Password"
- button "Log In"
- text: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | import path from 'node:path';
  3   | import testData from '../Testdata/leads-testdata.example.json' with { type: 'json' };
  4   | 
  5   | 
  6   | export class LeadsPage {
  7   |     constructor(page) {
  8   |         this.page = page;
  9   | 
  10  |         // Leads navigation
  11  |         this.leadsMenu = page.getByText('Leads', { exact: true }).first();
  12  |         this.createLeadLink = page.getByRole('link', { name: 'Create Lead', exact: true });
  13  |         this.createLeadFromVCardLink = page.getByRole('link', { name: 'Create Lead From vCard', exact: true });
  14  |         this.viewLeadsLink = page.getByRole('link', { name: 'View Leads', exact: true });
  15  |         this.importLeadsLink = page.getByRole('link', { name: 'Import Leads', exact: true });
  16  | 
  17  |         // Create Lead form
  18  |         this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
  19  |         this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
  20  |         this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW', exact: true });
  21  |         this.moreInformationTab = page.getByText('MORE INFORMATION', { exact: true });
  22  |         this.otherTab = page.getByText('OTHER', { exact: true });
  23  |         this.firstNameInput = this.fieldInput('First Name');
  24  |         this.lastNameInput = this.fieldInput('Last Name');
  25  |         this.jobTitleInput = this.fieldInput('JOB TITLE');
  26  |         this.emailInput = this.fieldInput('Email Address');
  27  |         this.mobileInput = this.fieldInput('MOBILE');
  28  |         this.officePhoneInput = this.fieldInput('OFFICE PHONE');
  29  | 
  30  |         // Record view and actions
  31  |         this.editButton = page.getByRole('button', { name: 'Edit', exact: true });
  32  |         this.insightsButton = page.getByRole('button', { name: /Insights/i });
  33  |         this.actionsMenuButton = page.getByRole('button', { name: 'Actions', exact: true });
  34  |         this.bulkActionsButton = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action', exact: true });
  35  |         this.selectionMenuButton = page.locator('scrm-table-header').getByLabel('Select Action Menu');
  36  |         this.selectCurrentPageOption = page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });
  37  | 
  38  |         // List view filters
  39  |         this.filterButton = page.getByRole('button', { name: 'Filter', exact: true });
  40  |         this.lastNameFilterInput = page.getByText('Last Name', { exact: true })
  41  |             .locator('xpath=following::input[1]');
  42  |     }
  43  | 
  44  |     fieldInput(label) {
  45  |         return this.page.getByText(label, { exact: true })
  46  |             .locator('xpath=ancestor::div[.//input][1]')
  47  |             .locator('input');
  48  |     }
  49  | 
  50  |     async hoverOverLeadsMenu() {
> 51  |         await expect(this.leadsMenu).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  52  |         await this.leadsMenu.hover();
  53  |         //log.info('Hovered over the Leads navigation menu');
  54  |     }
  55  | 
  56  |     async assertLeadsMenuOptionsVisible(expectedOptions) {
  57  |         await this.hoverOverLeadsMenu();
  58  |         for (const option of expectedOptions) {
  59  |             await expect(this.page.getByRole('link', { name: option, exact: true })).toBeVisible();
  60  |         }
  61  |     }
  62  |     async navigateToLeadsPage(option) {
  63  |         const menuItems = {
  64  |             'Create Lead': this.createLeadLink,
  65  |             'Create Lead From vCard': this.createLeadFromVCardLink,
  66  |             'View Leads': this.viewLeadsLink,
  67  |             'Import Leads': this.importLeadsLink
  68  |         };
  69  |         const target = menuItems[option];
  70  |         if (!target) throw new Error(`Unsupported Leads navigation option: ${option}`);
  71  | 
  72  |         await this.hoverOverLeadsMenu();
  73  |         await target.click();
  74  |         //log.info(`Navigated to Leads page: ${option}`);
  75  |     }
  76  | 
  77  |     async assertCurrentLeadsPage(pageName) {
  78  |         const expectedUrls = testData.urls ?? {};
  79  |         if (expectedUrls[pageName]) {
  80  |             await expect(this.page).toHaveURL(expectedUrls[pageName], { timeout: 20000 });
  81  |             return;
  82  |         }
  83  | 
  84  |         const routePatterns = {
  85  |             'View Leads': /#\/leads(?:\/index)?(?:\?.*)?$/i,
  86  |             'Create Lead': /#\/leads\/edit/i,
  87  |             'Create Lead From vCard': /#\/leads\/vcard/i,
  88  |             'Import Leads': /#\/leads\/import/i
  89  |         };
  90  |         const pattern = routePatterns[pageName];
  91  |         if (!pattern) throw new Error(`No URL assertion configured for Leads page: ${pageName}`);
  92  |         await expect(this.page).toHaveURL(pattern, { timeout: 20000 });
  93  |     }
  94  | 
  95  |     async assertCreateLeadElementVisible(element) {
  96  |         const elements = {
  97  |             'OVERVIEW': this.overviewTab,
  98  |             'MORE INFORMATION': this.moreInformationTab,
  99  |             'OTHER': this.otherTab,
  100 |             'Save': this.saveButton,
  101 |             'Cancel': this.cancelButton
  102 |         };
  103 |         const locator = elements[element];
  104 |         if (!locator) throw new Error(`Unknown Create Lead page element: ${element}`);
  105 |         await expect(locator).toBeVisible();
  106 |     }
  107 | 
  108 |     async submitEmptyLeadForm() {
  109 |         await this.saveButton.click();
  110 |         // log.info('Submitted an empty Create Lead form');
  111 |     }
  112 | 
  113 |     async assertValidationMessageVisible(message) {
  114 |         await expect(this.page.getByText(message, { exact: true })).toBeVisible({ timeout: 15000 });
  115 |     }
  116 | 
  117 |     async submitLeadFormWithInvalidValue(field) {
  118 |         const invalidValues = {
  119 |             Email: [this.emailInput, testData.invalidEmail.email],
  120 |             Mobile: [this.mobileInput, testData.invalidMobile.mobile],
  121 |             'Office Phone': [this.officePhoneInput, testData.invalidOfficePhone.officePhone]
  122 |         };
  123 |         const entry = invalidValues[field];
  124 |         if (!entry) throw new Error(`Unsupported invalid lead field: ${field}`);
  125 |         const [locator, value] = entry;
  126 |         await locator.fill(value);
  127 |         await this.saveButton.click();
  128 |         //log.info(`Submitted Create Lead form with invalid ${field}`);
  129 |     }
  130 | 
  131 |     async enterValidLeadData() {
  132 |         const data = testData.validLead;
  133 |         await this.firstNameInput.fill(data.firstName);
  134 |         await this.lastNameInput.fill(data.lastName);
  135 |         await this.jobTitleInput.fill(data.title);
  136 |         await this.emailInput.fill(data.email);
  137 |         await this.mobileInput.fill(data.mobile);
  138 |         await this.officePhoneInput.fill(data.officePhone);
  139 |     }
  140 | 
  141 |     async createLeadFromTestData() {
  142 |         await this.enterValidLeadData();
  143 |         await this.saveButton.click();
  144 |         // log.info('Created a lead using configured test data');
  145 |     }
  146 | 
  147 |     async assertCreatedLeadRecordVisible() {
  148 |         await expect(this.page.getByText(testData.validLead.lastName, { exact: true }).first())
  149 |             .toBeVisible({ timeout: 20000 });
  150 |     }
  151 | 
```