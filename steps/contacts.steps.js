import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
//import path from 'node:path';
//import { stat } from 'node:fs/promises';

When('the user hovers over the Contacts module in the top navigation', async ({ contactsPage, logger }) => {
    logger.info('Hovering over Contacts module');
    await contactsPage.hoverContactsModule();

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
