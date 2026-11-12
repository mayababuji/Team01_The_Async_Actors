
import { expect } from '@playwright/test';
import path from 'node:path';

export class ContactsPage {
    constructor(page) {
        this.page = page;

        //Dropdown for Contacts
        this.contactsDropdown = page.locator('a.top-nav-link').filter({ hasText: /^Contacts$/ });
        //this.contactsDropdown = page.getByRole('link', { name: 'Contacts', exact: true });

        //Navigation links for Contacts
        this.createContact = page.getByRole('link', { name: 'Create Contact', exact: true });
        this.createContactVCard = page.locator('a[href="#/contacts/importvcard"]');
        this.viewContacts = page.getByRole('link', { name: 'View Contacts', exact: true });
        this.importContacts = page.getByRole('link', { name: 'Import Contacts', exact: true });
        this.createContactpage = page.getByText('Create', { exact: true });
        this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
        this.firstName = page.getByRole('textbox').nth(1);
        this.lastName = page.getByRole('textbox').nth(2);
        this.officePhone = page.getByRole('textbox').nth(3);
        this.saveContactErrorMessage = page.getByText('There are validation errors,');
        this.importVCard = page.locator('iframe').contentFrame().getByText('Automatically create a new contact by importing a vCard from your file system.');
        this.vCardChooseFile = page.frameLocator('iframe').locator('#vcard_file');
        this.importVCardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
        this.viewContactsCheckbox = page.locator('scrm-table-header').getByLabel('Select Action Menu')
        this.selectAll = page.locator('a').filter({ hasText: 'Select All' }).first();
        this.selectThisPage = page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });
        this.deselectAll = page.locator('scrm-table-header a').filter({ hasText: 'Deselect All' });
        this.bulkActionDropdownButton = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
        this.exportContacts = page.locator('a').filter({ hasText: 'Export' }).nth(1);
        this.contactsImportFile = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
        this.importFilePage = page.locator('iframe').contentFrame().getByText('Select a file on your computer that contains the data that you would like to import, or download the template to get a head start on creating the import file.');
        this.contactsSelectFile = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.nextButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.mobile = page.getByRole('textbox').nth(4);
        this.jobTitle = page.getByRole('textbox').nth(5);
        this.department = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-department > div > .d-flex > .flex-grow-1 > .form-control');
        this.emailAddress = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryStreet = page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
        this.primaryPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByText('Cancel', { exact: true });
        this.missinglastName = page.getByText('Missing required field: Last Name', { exact: true });
        this.unSavedRecordPopup = page.getByText('You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?');
        this.popupCancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
        this.popupOkButton = page.getByRole('button', { name: 'Ok', exact: true });
        this.confirmImportFileProp = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    }

    // async hoverContactsModule() {
    //     await this.contactsDropdown.hover();
    // }

    async verifyHomePage() {
        await expect(this.contactsDropdown).toBeVisible();
    }

    async revealContactsOnHover() {
        await this.contactsDropdown.hover();

    }

    async isDropdownOpen() {
        await expect(this.createContact).toBeVisible();
        await expect(this.createContactVCard).toBeVisible();
        await expect(this.viewContacts).toBeVisible();
        await expect(this.importContacts).toBeVisible();
    }

    getContactsDropdownmenu(optionName) {

        const options = {
            'Create Contact': this.createContact,
            'View Contacts': this.viewContacts,
            'Import Contacts': this.importContacts,
            'Create Contact From Vcard': this.createContactVCard
        };
        const option = options[optionName];
        if (!option) {
            throw new Error(`Unknown Contacts dropdown menu: "${optionName}"`);
        }

        return option;
    }

    async verifyCreateContactPage() {
        await this.revealContactsOnHover();
        await this.isDropdownOpen();
        await expect(this.createContact).toBeVisible();
        await this.createContact.waitFor({ state: 'visible' });
        await this.createContact.click();
        await expect(this.page).toHaveURL(/#\/contacts\/edit/);

    }

    async verifyCreateContactfromvCard() {
        await expect(this.createContactVCard).toBeVisible();
        await this.createContactVCard.click();
        await expect(this.page).toHaveURL(/#\/contacts\/importVcard/);
        await expect(this.importVCard).toBeVisible();
        await this.page.waitForTimeout(2000);
    }

    async verifyViewContactspage() {
        await this.revealContactsOnHover();
        await expect(this.viewContacts).toBeVisible();
        await this.viewContacts.click();
        await expect(this.page).toHaveURL(/#\/contacts\/index/, { timeout: 10000 });
    }

    async importContactsPage() {
        await this.importContacts.click();
        await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Contacts&return_module=Contacts&return_action=index/);

    }



    async inputContactDetails(contact) {
        //await expect(this.createcontactpage).toBeVisible();
        await this.verifyCreateContactPage();
        //await expect(this.overviewTab).toBeVisible();
        await this.firstName.fill(contact['First Name']);
        await this.lastName.fill(contact['Last Name']);
        await this.officePhone.fill(contact['OFFICE PHONE']);
        await this.mobile.fill(contact['MOBILE']);
        await this.jobTitle.fill(contact['JOB TITLE']);
        await this.department.fill(contact['DEPARTMENT']);
        await this.emailAddress.fill(contact['EMAIL ADDRESS']);
        await this.primaryStreet.fill(contact['Primary Address Street']);
        await this.primaryPostalCode.fill(contact['Primary Address Postal Code']);
        await this.primaryCity.fill(contact['Primary Address City']);
        await this.primaryState.fill(contact['Primary Address State']);
        await this.primaryCountry.fill(contact['Primary Address Country']);

    }

    async saveContact() {

        await this.saveButton.click();
    }

    async validateContactDetails() {
        //await expect(this.page).toHaveURL(/#\/contacts\/record\/[^/?]+/);
        await expect(this.page).toHaveURL(/#\/contacts\/(record|edit)/);

    }

    async validateMandatoryFieldCheck() {
        const lastNameValue = await this.lastName.inputValue();

        if (lastNameValue.trim() == '') {
            await this.saveButton.click();
            await expect(this.missinglastName).toBeVisible();
        }
    }

    async validateEmptyFieldCheck() {
        const lastNameValue = await this.lastName.inputValue();

        if (lastNameValue.trim() == '') {
            await this.cancelButton.click();
            await this.page.waitForTimeout(2000);
        }
    }

    async verifyContactlist() {
        await expect(this.page).toHaveURL(/#\/contacts/);
    }

    async handleOverviewContactCancellation(contact) {
        await this.firstName.fill(contact['First Name']);
        //await this.page.waitForTimeout(2000);
        await this.cancelButton.click();
    }

    async checkUnsavedRecordPopup() {
        await expect(this.unSavedRecordPopup).toBeVisible();
        await expect(this.popupCancelButton).toBeVisible();
        await expect(this.popupOkButton).toBeVisible();
    }
    async confirmUnsavedRecordPopup() {
        await this.popupOkButton.click();
    }

    async verifyvCardChooseFile() {

        await expect(this.vCardChooseFile).toBeVisible();
        await this.vCardChooseFile.click();

    }

    async uploadVCardFile() {
        await expect(this.page).toHaveURL(/#\/contacts\/importvcard/);

        //const filePath = path.resolve('Testdata/contactstest.vcf');

        //await this.vCardChooseFile.setInputFiles(filePath);
        await this.vCardChooseFile.setInputFiles('Testdata/contactstest.vcf')

        //await this.page.waitForTimeout(1000);
        console.log('VCF file selected');
    }

    async verifySelectedvCardFile() {
        await expect(this.vCardChooseFile).toHaveValue(/\.vcf$/i);
    }
    async clickImportVCard() {
        await expect(this.page).toHaveURL(/#\/contacts\/importvcard/);
        await expect(this.importVCardButton).toBeVisible();
        await this.importVCardButton.click();
        await this.page.waitForTimeout(2000);
    }
    async exportContacts() {

        await expect(this.exportContacts).toBeVisible();
        await this.exportContacts.click();
    }

    async verifyViewContactDropdown() {
        await this.viewContactsCheckbox.click();
        await this.page.waitForTimeout(2000);
        await this.selectAll.click();
        await this.page.waitForTimeout(2000);
    }
    async clickBulkActionDropdown() {

        await this.bulkActionDropdownButton.click();
        await this.page.waitForTimeout(2000);
    }

    async uploadfile() {
        await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Contacts&return_module=Contacts&return_action=index/);
        await this.contactsselectfile.setInputFiles('Testdata/SampleContacts.csv')
        await this.page.waitForTimeout(2000);
    }

    async clickNextButton() {
        await this.nextButton.click();
    }
    async Importfileproperties() {

        await expect(this.confirmImportFileProp).toBeVisible();
    }





}