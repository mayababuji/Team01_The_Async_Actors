import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
//import path from 'node:path';
//import { stat } from 'node:fs/promises';

When('the user hovers over the Leads module in the top navigation', async ({ leadsPage, logger }) => {
    logger.info('Hovering over Leads module');
    await leadsPage.hoverLeadsModule();
});

Then('the user should see the Leads dropdown options', async ({ leadsPage, logger }, dataTable) => {
    const options = dataTable.raw().flat();

    for (const optionName of options) {
        await expect(
            leadsPage.getLeadsDropdownmenu(optionName)
        ).toBeVisible();
    }
    logger.info('All Leads dropdown options are visible', {
        options
    });
});
