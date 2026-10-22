import { expect } from '@playwright/test';
import {Given, When, Then } from '../fixtures.js';

import {
  getOpportunityDataByScenario
} from '../utils/excel-util.js';
const ACCOUNT_RECORD_URL =
  /#\/accounts\/record\/[^/?#]+(?:[/?#]|$)/;

const OPPORTUNITY_RECORD_URL =
  /#\/opportunities\/record\/[^/?#]+(?:[/?#]|$)/;

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
Given(
  'the user is on the Create Opportunity page',
  async ({ opportunitiesPage, logger }) => {
    await opportunitiesPage.openCreateOpportunityPage();

    logger.info('Opened Create Opportunity page');
  }
);

When(
  'the user saves the opportunity without entering mandatory fields',
  async ({ opportunitiesPage, logger }) => {
    await opportunitiesPage.saveOpportunity();

    logger.info('Clicked Save without entering opportunity details');
  }
);

Then(
  'required-field validation messages should be displayed for:',
  async ({ opportunitiesPage, logger }, dataTable) => {
    const fieldNames = dataTable.raw().map(([fieldName]) => fieldName);

    for (const fieldName of fieldNames) {
      await expect(
        opportunitiesPage.getRequiredFieldValidationMessage(fieldName)
      ).toBeVisible();

      logger.info('Required-field validation message verified', {
        fieldName
      });
    }
  }
);
Given(
  'a new account is created and the Create Opportunity page is opened for {string}',
  async (
    {
      page,
      accountsPage,
      opportunitiesPage,
      opportunityTestData,
      opportunityCleanup,
      logger
    },
    scenarioKey
  ) => {
    // Fail before creating records if opportunity cleanup is missing.
    if (
      typeof opportunitiesPage.deleteOpportunityByUrl !==
      'function'
    ) {
      throw new Error(
        'Implement OpportunitiesPage.deleteOpportunityByUrl(recordUrl) ' +
        'before running the opportunity creation scenario.'
      );
    }


    const excelData = getOpportunityDataByScenario(
      scenarioKey
    );

    const opportunity = {
      ...excelData
    };

    opportunityTestData.opportunity = opportunity;
    opportunityTestData.accountRecordUrl = null;
    opportunityTestData.opportunityRecordUrl = null;


    // The feature Background has already opened the home page.


    logger.info('Creating prerequisite account for opportunity', {
      scenario: scenarioKey,
      accountName: opportunity.accountName
    });


    await accountsPage.openCreateAccountPage();

    await accountsPage.enterAccountName(
      opportunity.accountName
    );

    await accountsPage.clickSaveOnCreateAccountPage();

    await page.waitForURL(ACCOUNT_RECORD_URL);

    const accountRecordUrl = page.url();

    opportunityCleanup.registerAccount(
      accountRecordUrl
    );

    opportunityTestData.accountRecordUrl =
      accountRecordUrl;

    logger.info('Prerequisite account created', {
      scenario: scenarioKey,
      accountName: opportunity.accountName,
      accountRecordUrl
    });

    await opportunitiesPage.openCreateOpportunityPage();

    logger.info('Opened Create Opportunity page', {
      scenario: scenarioKey,
      opportunityName: opportunity.name
    });
  }
);
When(
  'the user enters the mandatory opportunity data and saves',
  async (
    {
      page,
      opportunitiesPage,
      opportunityTestData,
      opportunityCleanup,
      logger
    }
  ) => {
    const {
      opportunity,
      accountRecordUrl
    } = opportunityTestData;

    if (!opportunity || !accountRecordUrl) {
      throw new Error(
        'The Given step must initialize opportunity data ' +
        'and create the prerequisite account.'
      );
    }

    logger.info('Entering mandatory opportunity data', {
      scenario: opportunity.scenario,
      opportunityName: opportunity.name,
      accountName: opportunity.accountName,
      amount: opportunity.amount,
      salesStage: opportunity.salesStage,
      expectedCloseDate: opportunity.expectedCloseDate
    });

    await opportunitiesPage.enterMandatoryOpportunityDetails(
      opportunity
    );

    await opportunitiesPage.saveOpportunity();

    await page.waitForURL(
      OPPORTUNITY_RECORD_URL
    );

    const opportunityRecordUrl = page.url();

    // Register before the Then assertions.
    opportunityCleanup.register(
      opportunityRecordUrl
    );

    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;

    logger.info('Opportunity created and registered for cleanup', {
      scenario: opportunity.scenario,
      opportunityName: opportunity.name,
      opportunityRecordUrl
    });
  }
);

Then(
  'the newly created opportunity detail page should be displayed',
  async (
    {
      page,
      opportunitiesPage,
      opportunityTestData,
      logger
    }
  ) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;

    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'No created opportunity was captured by the When step.'
      );
    }

    await expect(page).toHaveURL(
      OPPORTUNITY_RECORD_URL
    );

    await expect(page).toHaveURL(
      opportunityRecordUrl
    );

    await expect(
      opportunitiesPage.getOpportunityDetailHeading(
        opportunity.name
      )
    ).toBeVisible();

    logger.info('Newly created opportunity detail page verified', {
      scenario: opportunity.scenario,
      opportunityName: opportunity.name,
      opportunityRecordUrl
    });
  }
);