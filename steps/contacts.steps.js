import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
//import path from 'node:path';
//import { stat } from 'node:fs/promises';

When('the user hovers over the Contacts tab', async ({ contactsPage, logger }) => {
    logger.info('Hovering over Contacts module');
    await contactsPage.revealContactsOnHover();

});

Then('the Contacts dropdown menu should be displayed', async ({ contactsPage }) => {
    await contactsPage.isDropdownOpen();

});

When('the user hovers over the Contacts module in the top navigation', async ({ contactsPage, logger }) => {
    logger.info('Hovering over Contacts module');
    await contactsPage.revealContactsOnHover();
});

Then('the user should see the Contacts dropdown options', async ({ contactsPage, logger }, dataTable) => {

    const options = dataTable.raw().flat();

    for (const optionName of options) {
        await expect(
            contactsPage.getContactsDropdownmenu(optionName)
        ).toBeVisible();
    }
    logger.info('All Contacts dropdown options are visible', {
        options
    });
});

When('The user clicks on the <ContactsMenu> option', async ({ contactsPage, logger }) => {

    logger.info('All Contacts dropdown menu options are visible');

    await contactsPage.revealContactsOnHover();
    await contactsPage.isDropdownOpen();
});

Then('The user should be redirected to the <Contactspage> successfully', async ({ contactsPage, logger }, dataTable) => {
    await contactsPage.verifyCreateContactPage();
});
