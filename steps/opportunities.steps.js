import { expect } from '@playwright/test';
import {Given, When, Then } from '../fixtures.js';

// --------------------------------------------------
// Opportunities navigation
// --------------------------------------------------

When(
  'the user hovers over the Opportunities module in the top navigation',
  async ({ opportunitiesPage, logger }) => {
    await opportunitiesPage.hoverOpportunitiesModule();

    logger.info('Hovered over Opportunities module');
  }
);

Then(
  'the user should see the Opportunities dropdown options',
  async ({ opportunitiesPage, logger }, dataTable) => {
    const options = dataTable.raw().flat();

    for (const optionName of options) {
      await expect(
        opportunitiesPage.getDropdownOption(optionName)
      ).toBeVisible();
    }

    logger.info(
      'All Opportunities dropdown options are visible',
      {
        options
      }
    );
  }
);