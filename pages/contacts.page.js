
import { expect } from '@playwright/test';
import path from 'node:path';

export class ContactsPage {
    constructor(page) {


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
        this.savecontacterrormessage = page.getByText('There are validation errors,');
        this.importvcard = page.locator('iframe').contentFrame().getByText('Automatically create a new contact by importing a vCard from your file system.');
        this.vCardchoosefile = page.frameLocator('iframe').locator('#vcard_file');
        this.importVCardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
        this.viewcontactscheckbox = page.locator('scrm-table-header').getByLabel('Select Action Menu')
        this.selectall = page.locator('a').filter({ hasText: 'Select All' }).first();
        this.selectthispage = page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });
        this.deselectall = page.locator('scrm-table-header a').filter({ hasText: 'Deselect All' });
        this.bulkActionDropdownButton = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
        this.exportcontcts = page.locator('a').filter({ hasText: 'Export' }).nth(1);
        this.contactsimportfile = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
        this.importfilepage = page.locator('iframe').contentFrame().getByText('Select a file on your computer that contains the data that you would like to import, or download the template to get a head start on creating the import file.');
        this.contactsselectfile = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.nextbutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
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
        this.unSavedRecordpopup = page.getByText('You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?');
        this.popupCancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
        this.popupOkButton = page.getByRole('button', { name: 'Ok', exact: true });
        this.confirmimportfileprop = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    }

    async hoverContactsModule() {
        await this.contactsDropdown.hover();
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

}