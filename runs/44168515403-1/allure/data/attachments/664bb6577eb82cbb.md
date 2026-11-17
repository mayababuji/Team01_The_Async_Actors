# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/contacts.feature.spec.js >> Contacts Management Module >> Verify Contacts dropdown menu expands on hover
- Location: tests/generated/features/contacts.feature.spec.js:10:3

# Error details

```
TimeoutError: locator.hover: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('a.top-nav-link').filter({ hasText: /^Contacts$/ })

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
  1   | 
  2   | import { expect } from '@playwright/test';
  3   | import path from 'node:path';
  4   | 
  5   | export class ContactsPage {
  6   |     constructor(page) {
  7   |         this.page = page;
  8   | 
  9   |         //Dropdown for Contacts
  10  |         this.contactsDropdown = page.locator('a.top-nav-link').filter({ hasText: /^Contacts$/ });
  11  |         //this.contactsDropdown = page.getByRole('link', { name: 'Contacts', exact: true });
  12  | 
  13  |         //Navigation links for Contacts
  14  |         this.createContact = page.getByRole('link', { name: 'Create Contact', exact: true });
  15  |         this.createContactVCard = page.locator('a[href="#/contacts/importvcard"]');
  16  |         this.viewContacts = page.getByRole('link', { name: 'View Contacts', exact: true });
  17  |         this.importContacts = page.getByRole('link', { name: 'Import Contacts', exact: true });
  18  |         this.createContactpage = page.getByText('Create', { exact: true });
  19  |         this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
  20  |         this.firstName = page.getByRole('textbox').nth(1);
  21  |         this.lastName = page.getByRole('textbox').nth(2);
  22  |         this.officePhone = page.getByRole('textbox').nth(3);
  23  |         this.saveContactErrorMessage = page.getByText('There are validation errors,');
  24  |         this.importVCard = page.locator('iframe').contentFrame().getByText('Automatically create a new contact by importing a vCard from your file system.');
  25  |         this.vCardChooseFile = page.frameLocator('iframe').locator('#vcard_file');
  26  |         this.importVCardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
  27  |         this.viewContactsCheckbox = page.locator('scrm-table-header').getByLabel('Select Action Menu')
  28  |         this.selectAll = page.locator('a').filter({ hasText: 'Select All' }).first();
  29  |         this.selectThisPage = page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });
  30  |         this.deselectAll = page.locator('scrm-table-header a').filter({ hasText: 'Deselect All' });
  31  |         this.bulkActionDropdownButton = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
  32  |         this.exportContacts = page.locator('a').filter({ hasText: 'Export' }).nth(1);
  33  |         this.contactsImportFile = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
  34  |         this.importFilePage = page.locator('iframe').contentFrame().getByText('Select a file on your computer that contains the data that you would like to import, or download the template to get a head start on creating the import file.');
  35  |         this.contactsSelectFile = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
  36  |         this.nextButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
  37  |         this.mobile = page.getByRole('textbox').nth(4);
  38  |         this.jobTitle = page.getByRole('textbox').nth(5);
  39  |         this.department = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-department > div > .d-flex > .flex-grow-1 > .form-control');
  40  |         this.emailAddress = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
  41  |         this.primaryStreet = page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
  42  |         this.primaryPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
  43  |         this.primaryCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control');
  44  |         this.primaryState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control');
  45  |         this.primaryCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control');
  46  |         this.saveButton = page.getByRole('button', { name: 'Save' });
  47  |         this.cancelButton = page.getByText('Cancel', { exact: true });
  48  |         this.missinglastName = page.getByText('Missing required field: Last Name', { exact: true });
  49  |         this.unSavedRecordPopup = page.getByText('You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?');
  50  |         this.popupCancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
  51  |         this.popupOkButton = page.getByRole('button', { name: 'Ok', exact: true });
  52  |         this.confirmImportFileProp = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
  53  |     }
  54  | 
  55  |     // async hoverContactsModule() {
  56  |     //     await this.contactsDropdown.hover();
  57  |     // }
  58  | 
  59  |     async verifyHomePage() {
  60  |         await expect(this.contactsDropdown).toBeVisible();
  61  |     }
  62  | 
  63  |     async revealContactsOnHover() {
> 64  |         await this.contactsDropdown.hover();
      |                                     ^ TimeoutError: locator.hover: Timeout 20000ms exceeded.
  65  | 
  66  |     }
  67  | 
  68  |     async isDropdownOpen() {
  69  |         await expect(this.createContact).toBeVisible();
  70  |         await expect(this.createContactVCard).toBeVisible();
  71  |         await expect(this.viewContacts).toBeVisible();
  72  |         await expect(this.importContacts).toBeVisible();
  73  |     }
  74  | 
  75  |     getContactsDropdownmenu(optionName) {
  76  | 
  77  |         const options = {
  78  |             'Create Contact': this.createContact,
  79  |             'View Contacts': this.viewContacts,
  80  |             'Import Contacts': this.importContacts,
  81  |             'Create Contact From Vcard': this.createContactVCard
  82  |         };
  83  |         const option = options[optionName];
  84  |         if (!option) {
  85  |             throw new Error(`Unknown Contacts dropdown menu: "${optionName}"`);
  86  |         }
  87  | 
  88  |         return option;
  89  |     }
  90  | 
  91  |     async verifyCreateContactPage() {
  92  |         await this.revealContactsOnHover();
  93  |         await this.isDropdownOpen();
  94  |         await expect(this.createContact).toBeVisible();
  95  |         await this.createContact.waitFor({ state: 'visible' });
  96  |         await this.createContact.click();
  97  |         await expect(this.page).toHaveURL(/#\/contacts\/edit/);
  98  | 
  99  |     }
  100 | 
  101 |     async verifyCreateContactfromvCard() {
  102 |         await expect(this.createContactVCard).toBeVisible();
  103 |         await this.createContactVCard.click();
  104 |         await expect(this.page).toHaveURL(/#\/contacts\/importVcard/);
  105 |         await expect(this.importVCard).toBeVisible();
  106 |         await this.page.waitForTimeout(2000);
  107 |     }
  108 | 
  109 |     async verifyViewContactspage() {
  110 |         await this.revealContactsOnHover();
  111 |         await expect(this.viewContacts).toBeVisible();
  112 |         await this.viewContacts.click();
  113 |         await expect(this.page).toHaveURL(/#\/contacts\/index/, { timeout: 10000 });
  114 |     }
  115 | 
  116 |     async importContactsPage() {
  117 |         await this.importContacts.click();
  118 |         await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Contacts&return_module=Contacts&return_action=index/);
  119 | 
  120 |     }
  121 | 
  122 | 
  123 | 
  124 |     async inputContactDetails(contact) {
  125 |         //await expect(this.createcontactpage).toBeVisible();
  126 |         await this.verifyCreateContactPage();
  127 |         //await expect(this.overviewTab).toBeVisible();
  128 |         await this.firstName.fill(contact['First Name']);
  129 |         await this.lastName.fill(contact['Last Name']);
  130 |         await this.officePhone.fill(contact['OFFICE PHONE']);
  131 |         await this.mobile.fill(contact['MOBILE']);
  132 |         await this.jobTitle.fill(contact['JOB TITLE']);
  133 |         await this.department.fill(contact['DEPARTMENT']);
  134 |         await this.emailAddress.fill(contact['EMAIL ADDRESS']);
  135 |         await this.primaryStreet.fill(contact['Primary Address Street']);
  136 |         await this.primaryPostalCode.fill(contact['Primary Address Postal Code']);
  137 |         await this.primaryCity.fill(contact['Primary Address City']);
  138 |         await this.primaryState.fill(contact['Primary Address State']);
  139 |         await this.primaryCountry.fill(contact['Primary Address Country']);
  140 | 
  141 |     }
  142 | 
  143 |     async saveContact() {
  144 | 
  145 |         await this.saveButton.click();
  146 |     }
  147 | 
  148 |     async validateContactDetails() {
  149 |         //await expect(this.page).toHaveURL(/#\/contacts\/record\/[^/?]+/);
  150 |         await expect(this.page).toHaveURL(/#\/contacts\/(record|edit)/);
  151 | 
  152 |     }
  153 | 
  154 |     async validateMandatoryFieldCheck() {
  155 |         const lastNameValue = await this.lastName.inputValue();
  156 | 
  157 |         if (lastNameValue.trim() == '') {
  158 |             await this.saveButton.click();
  159 |             await expect(this.missinglastName).toBeVisible();
  160 |         }
  161 |     }
  162 | 
  163 |     async validateEmptyFieldCheck() {
  164 |         const lastNameValue = await this.lastName.inputValue();
```