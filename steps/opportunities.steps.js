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
When(
  'the user opens the Opportunities module and clicks View Opportunities',
  async ({ opportunitiesPage, logger }) => {
    await opportunitiesPage.openViewOpportunitiesPage();
    logger.info('Clicked View Opportunities');
  }
);

Then(
  'the user should be navigated to the View Opportunities page',
  async ({ opportunitiesPage, logger }) => {
    await expect(
      opportunitiesPage.viewOpportunitiesPageHeading
    ).toBeVisible();
    await expect(
  opportunitiesPage.viewOpportunitiesPageHeading
).toHaveText('OPPORTUNITIES');

    logger.info('View Opportunities page displayed');
  }
);

// --------------------------------------------------
// Import Opportunities navigation
// --------------------------------------------------

When(
  'the user opens the Opportunities module and clicks Import Opportunities',
  async ({ opportunitiesPage, logger }) => {
    await opportunitiesPage.openImportOpportunitiesPage();

    logger.info('Clicked Import Opportunities');
  }
);

Then(
  'the user should be navigated to the Import Opportunities page',
  async ({ opportunitiesPage, logger }) => {
    await expect(
      opportunitiesPage.importOpportunitiesPageHeading
    ).toBeVisible();

    await expect(
      opportunitiesPage.importOpportunitiesPageHeading
    ).toHaveText('Step 1: Upload Import File');

    logger.info('Import Opportunities page verified');
  }
);