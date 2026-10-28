import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';


import {
  getOpportunityDataByScenario
} from '../utils/excel-util.js';


// --------------------------------------------------
// Record URL patterns
// --------------------------------------------------


const ACCOUNT_RECORD_URL =
  /#\/accounts\/record\/[^/?#]+(?:[/?#]|$)/;


const OPPORTUNITY_RECORD_URL =
  /#\/opportunities\/record\/[^/?#]+(?:[/?#]|$)/;


// --------------------------------------------------
// Shared verification helpers
// --------------------------------------------------


async function verifyCreatedOpportunity(
  page,
  opportunitiesPage,
  opportunityTestData
) {
  const {
    opportunity,
    opportunityRecordUrl
  } = opportunityTestData;


  if (!opportunity || !opportunityRecordUrl) {
    throw new Error(
      'The When step must create the opportunity ' +
      'and capture its record URL before verification.'
    );
  }


  await expect(page).toHaveURL(OPPORTUNITY_RECORD_URL);
  await expect(page).toHaveURL(opportunityRecordUrl);


  await expect(
    opportunitiesPage.getOpportunityDetailHeading(
      opportunity.name
    )
  ).toBeVisible();


  return {
    opportunity,
    opportunityRecordUrl
  };
}


function parseDisplayedUsdAmount(displayedAmount) {
  const normalizedAmount = displayedAmount
    .replace(/USD/gi, '')
    .replace(/[$,\s]/g, '');


  if (!/^\d+(?:\.\d+)?$/.test(normalizedAmount)) {
    return null;
  }


  return Number(normalizedAmount);
}


// --------------------------------------------------
// Opportunities dropdown navigation
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
      { options }
    );
  }
);


// --------------------------------------------------
// View Opportunities navigation
// --------------------------------------------------


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


// --------------------------------------------------
// Required-field validation
// --------------------------------------------------


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


    logger.info(
      'Clicked Save without entering opportunity details'
    );
  }
);


Then(
  'required-field validation messages should be displayed for:',
  async ({ opportunitiesPage, logger }, dataTable) => {
    const fieldNames = dataTable
      .raw()
      .map(([fieldName]) => fieldName);


    for (const fieldName of fieldNames) {
      await expect(
        opportunitiesPage.getRequiredFieldValidationMessage(
          fieldName
        )
      ).toBeVisible();


      logger.info(
        'Required-field validation message verified',
        { fieldName }
      );
    }
  }
);


// --------------------------------------------------
// Excel-driven opportunity creation: Given
// --------------------------------------------------


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
    if (
      typeof opportunitiesPage.deleteOpportunityByUrl !==
      'function'
    ) {
      throw new Error(
        'Implement OpportunitiesPage.deleteOpportunityByUrl(recordUrl) ' +
        'before running the opportunity creation scenario.'
      );
    }


    const opportunity =
      getOpportunityDataByScenario(scenarioKey);


    opportunityTestData.opportunity = opportunity;
    opportunityTestData.accountRecordUrl = null;
    opportunityTestData.opportunityRecordUrl = null;


    logger.info(
      'Creating prerequisite account for opportunity',
      {
        scenario: scenarioKey,
        accountName: opportunity.accountName
      }
    );


    await accountsPage.openCreateAccountPage();


    await accountsPage.enterAccountName(
      opportunity.accountName
    );


    await accountsPage.clickSaveOnCreateAccountPage();


    await page.waitForURL(ACCOUNT_RECORD_URL);


    const accountRecordUrl = page.url();


    opportunityCleanup.registerAccount(accountRecordUrl);


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


// --------------------------------------------------
// Excel-driven opportunity creation: When
// --------------------------------------------------


When(
  'the user enters the mandatory opportunity data and saves',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }) => {
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


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(opportunityRecordUrl);


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    logger.info(
      'Opportunity created and registered for cleanup',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Verify created opportunity detail page
// --------------------------------------------------


Then(
  'the newly created opportunity detail page should be displayed',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    logger.info(
      'Newly created opportunity detail page verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Verify saved opportunity amount against Excel
// --------------------------------------------------


Then(
  'the opportunity should be created with the amount from Excel',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    const expectedAmount = Number(opportunity.amount);


    if (
      String(opportunity.amount ?? '').trim() === '' ||
      !Number.isFinite(expectedAmount)
    ) {
      throw new Error(
        'OpportunityAmount must contain a valid number in Excel.'
      );
    }


    const amountDetail =
      opportunitiesPage.getOpportunityAmountDetail();


    await expect(amountDetail).toBeVisible();


    await expect.poll(
      async () => {
        const displayedAmount =
          await amountDetail.innerText();


        return parseDisplayedUsdAmount(
          displayedAmount
        );
      },
      {
        message:
          'Saved Opportunity Amount should match the Excel value'
      }
    ).toBe(expectedAmount);


    logger.info(
      'Opportunity created with the expected amount',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        expectedAmount,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should be created with the currency and amount from Excel',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    const expectedAmount = Number(opportunity.amount);


    const expectedCurrencyCode = String(
      opportunity.currencyCode ?? ''
    ).trim();


    const expectedCurrencyDisplay = String(
      opportunity.currencyDisplay ?? ''
    ).trim();


    if (
      String(opportunity.amount ?? '').trim() === '' ||
      !Number.isFinite(expectedAmount)
    ) {
      throw new Error(
        'OpportunityAmount must contain a valid number in Excel.'
      );
    }


    if (
      expectedCurrencyCode !== 'USD' ||
      expectedCurrencyDisplay !== '$'
    ) {
      throw new Error(
        'This scenario requires CurrencyCode "USD" ' +
        'and CurrencyDisplay "$" in Excel.'
      );
    }


    const amountDetail =
      opportunitiesPage.getOpportunityAmountDetail();


    await expect(amountDetail).toBeVisible();


    await expect(amountDetail).toContainText(
      expectedCurrencyDisplay
    );


    await expect.poll(
      async () => {
        const displayedAmount =
          await amountDetail.innerText();


        if (
          !displayedAmount.includes(
            expectedCurrencyDisplay
          )
        ) {
          return null;
        }


        const normalizedAmount = displayedAmount
          .replace(expectedCurrencyDisplay, '')
          .replace(/USD/gi, '')
          .replace(/[,\s]/g, '');


        if (
          !/^\d+(?:\.\d+)?$/.test(normalizedAmount)
        ) {
          return null;
        }


        return Number(normalizedAmount);
      },
      {
        message:
          'Saved USD display and opportunity amount should match Excel'
      }
    ).toBe(expectedAmount);


    logger.info(
      'Opportunity created with the expected USD display and amount',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        expectedCurrencyCode,
        expectedCurrencyDisplay,
        expectedAmount,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Create opportunity with Type
// --------------------------------------------------


When(
  'the user enters mandatory opportunity data, selects the type from Excel, and saves',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }) => {
    const opportunity =
      opportunityTestData.opportunity;


    if (!opportunity) {
      throw new Error(
        'Opportunity test data was not initialized ' +
        'by the Given step.'
      );
    }


    await opportunitiesPage
      .enterMandatoryOpportunityDetails(
        opportunity
      );


    await opportunitiesPage.selectOpportunityType(
      opportunity.type
    );


    await opportunitiesPage.saveOpportunity();


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(
      opportunityRecordUrl
    );


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    logger.info(
      'Opportunity created with the selected type',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityType: opportunity.type,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should be created with the selected type from Excel',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    const typeDetail =
      opportunitiesPage.getOpportunityTypeDetail();


    await expect(typeDetail).toBeVisible();


    await expect(typeDetail).toHaveText(
      opportunity.type
    );


    logger.info(
      'Saved opportunity type verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        expectedType: opportunity.type,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Create opportunity with Lead Source
// --------------------------------------------------


When(
  'the user enters mandatory opportunity data, selects the lead source from Excel, and saves',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }) => {
    const opportunity =
      opportunityTestData.opportunity;


    if (!opportunity) {
      throw new Error(
        'Opportunity test data was not initialized ' +
        'by the Given step.'
      );
    }


    await opportunitiesPage
      .enterMandatoryOpportunityDetails(
        opportunity
      );


    await opportunitiesPage
      .selectOpportunityLeadSource(
        opportunity.leadSource
      );


    await opportunitiesPage.saveOpportunity();


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(
      opportunityRecordUrl
    );


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    logger.info(
      'Opportunity created with the selected lead source',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        leadSource: opportunity.leadSource,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should be created with the selected lead source from Excel',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    const leadSourceDetail =
      opportunitiesPage
        .getOpportunityLeadSourceDetail();


    await expect(
      leadSourceDetail
    ).toBeVisible();


    await expect(
      leadSourceDetail
    ).toHaveText(
      opportunity.leadSource
    );
// console.log(
//   'Lead source ARIA snapshot:\n',
//   await leadSourceDetail.ariaSnapshot()
// );

// console.log(
//   'Lead source HTML:\n',
//   await leadSourceDetail.evaluate(
//     element => element.outerHTML
//   )
// );

// console.log(
//   'Lead source inner text:\n',
//   await leadSourceDetail.innerText()
// );

    logger.info(
      'Saved opportunity lead source verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        expectedLeadSource: opportunity.leadSource,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Create opportunity with Description
// --------------------------------------------------


When(
  'the user enters mandatory opportunity data, adds the description from Excel, and saves',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }) => {
    const opportunity =
      opportunityTestData.opportunity;


    if (!opportunity) {
      throw new Error(
        'Opportunity test data was not initialized ' +
        'by the Given step.'
      );
    }


    await opportunitiesPage
      .enterMandatoryOpportunityDetails(
        opportunity
      );


    await opportunitiesPage
      .enterOpportunityDescription(
        opportunity.description
      );


    await opportunitiesPage.saveOpportunity();


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(
      opportunityRecordUrl
    );


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    logger.info(
      'Opportunity created with a description',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should be created with the entered description from Excel',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = await verifyCreatedOpportunity(
      page,
      opportunitiesPage,
      opportunityTestData
    );


    const expectedDescription =
      opportunity.description;


    if (
      typeof expectedDescription !== 'string' ||
      expectedDescription.trim() === ''
    ) {
      throw new Error(
        'Description is missing in Excel for scenario ' +
        `"${opportunity.scenario}".`
      );
    }


    const descriptionDetail =
      opportunitiesPage.getOpportunityDescriptionDetail(
        expectedDescription
      );


    await expect(
      descriptionDetail
    ).toBeVisible();


    await expect(
      descriptionDetail
    ).toHaveText(
      expectedDescription
    );


    logger.info(
      'Saved opportunity description verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Delete opportunity
// --------------------------------------------------


When(
  'the user creates the opportunity and deletes it with confirmation',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }) => {
    const opportunity =
      opportunityTestData.opportunity;


    if (!opportunity) {
      throw new Error(
        'Opportunity test data was not initialized ' +
        'by the Given step.'
      );
    }


    await opportunitiesPage
      .enterMandatoryOpportunityDetails(
        opportunity
      );


    await opportunitiesPage.saveOpportunity();


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(
      opportunityRecordUrl
    );


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    await opportunitiesPage
      .getOpportunityDetailHeading(
        opportunity.name
      )
      .waitFor({
        state: 'visible'
      });


    logger.info(
      'Created opportunity for deletion',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );


    await opportunitiesPage.deleteOpportunityByUrl(
      opportunityRecordUrl
    );


    opportunityCleanup.unregister(
      opportunityRecordUrl
    );


    logger.info(
      'Deleted the test-created opportunity',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the deleted opportunity should be inaccessible with message {string}',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }, expectedMessage) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;


    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'Opportunity data or record URL is missing.'
      );
    }


    await expect(page).toHaveURL(
      /#\/opportunities\/?(?:\?.*)?$/
    );


    await expect(
      opportunitiesPage.viewOpportunitiesPageHeading
    ).toBeVisible();


    await page.goto(
      opportunityRecordUrl
    );


    const accessError =
      opportunitiesPage
        .getOpportunityAccessErrorMessage(
          expectedMessage
        );


    await expect(
      accessError
    ).toBeVisible();


    logger.info(
      'Deleted opportunity URL is inaccessible',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        deletedOpportunityRecordUrl:
          opportunityRecordUrl,
        expectedMessage
      }
    );
  }
);


// --------------------------------------------------
// Update opportunity amount
// --------------------------------------------------


When(
  'the user updates the opportunity amount from Excel and saves the changes',
  async ({
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;


    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'Amount update requires an opportunity ' +
        'created by the Given step.'
      );
    }


    await opportunitiesPage
      .openOpportunityForEditing();


    await opportunitiesPage.enterOpportunityAmount(
      opportunity.updatedAmount
    );


    await opportunitiesPage.saveOpportunityChanges(
      opportunity.name
    );


    logger.info(
      'Saved updated opportunity amount',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        originalAmount: opportunity.amount,
        updatedAmount: opportunity.updatedAmount,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should display the updated amount',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;


    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'Opportunity data or record URL is missing.'
      );
    }


    await expect(page).toHaveURL(
      opportunityRecordUrl
    );


    await opportunitiesPage
      .reloadOpportunityDetailPage(
        opportunity.name
      );


    await expect(page).toHaveURL(
      opportunityRecordUrl
    );


    await expect(
      opportunitiesPage.getOpportunityDetailHeading(
        opportunity.name
      )
    ).toBeVisible();


    await expect(
      opportunitiesPage.getOpportunityAmountDetail()
    ).toBeVisible();


    await expect.poll(
      async () => {
        return await opportunitiesPage
          .getDisplayedOpportunityAmount();
      },
      {
        message:
          'Saved opportunity amount should match UpdatedAmount from Excel'
      }
    ).toBe(
      Number(opportunity.updatedAmount)
    );


    logger.info(
      'Persisted opportunity amount verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        expectedAmount: opportunity.updatedAmount,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Shared setup for opportunity update scenarios
// --------------------------------------------------


Given(
  'a new opportunity exists for update {string}',
  async ({
    page,
    accountsPage,
    opportunitiesPage,
    opportunityTestData,
    opportunityCleanup,
    logger
  }, scenarioKey) => {
    const opportunity =
      getOpportunityDataByScenario(
        scenarioKey
      );


    opportunityTestData.opportunity =
      opportunity;


    opportunityTestData.accountRecordUrl = null;


    opportunityTestData.opportunityRecordUrl = null;


    const accountRecordUrl =
      await accountsPage.createAccount({
        name: opportunity.accountName
      });


    opportunityCleanup.registerAccount(
      accountRecordUrl
    );


    opportunityTestData.accountRecordUrl =
      accountRecordUrl;


    await accountsPage.waitForAccountDetailPage();


    await opportunitiesPage
      .openCreateOpportunityPage();


    await opportunitiesPage
      .enterMandatoryOpportunityDetails(
        opportunity
      );


    if (opportunity.description) {
      await opportunitiesPage
        .enterOpportunityDescription(
          opportunity.description
        );
    }


    await opportunitiesPage.saveOpportunity();


    await page.waitForURL(OPPORTUNITY_RECORD_URL);


    const opportunityRecordUrl = page.url();


    opportunityCleanup.register(
      opportunityRecordUrl
    );


    opportunityTestData.opportunityRecordUrl =
      opportunityRecordUrl;


    await opportunitiesPage
      .waitForOpportunityDetailPage(
        opportunity.name
      );


    logger.info(
      'Created opportunity for update',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        accountRecordUrl,
        opportunityRecordUrl
      }
    );
  }
);


// --------------------------------------------------
// Update opportunity description
// --------------------------------------------------


When(
  'the user updates the opportunity description from Excel and saves the changes',
  async ({
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;


    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'Description update requires an opportunity ' +
        'created by the Given step.'
      );
    }


    await opportunitiesPage
      .openOpportunityForEditing();


    await opportunitiesPage
      .enterOpportunityDescription(
        opportunity.updatedDescription
      );


    await opportunitiesPage
      .saveOpportunityChanges(
        opportunity.name
      );


    logger.info(
      'Saved updated opportunity description',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);


Then(
  'the opportunity should display the updated description',
  async ({
    page,
    opportunitiesPage,
    opportunityTestData,
    logger
  }) => {
    const {
      opportunity,
      opportunityRecordUrl
    } = opportunityTestData;


    if (!opportunity || !opportunityRecordUrl) {
      throw new Error(
        'Opportunity data or record URL is missing.'
      );
    }


    await expect(page).toHaveURL(
      opportunityRecordUrl
    );


    await opportunitiesPage
      .reloadOpportunityDetailPage(
        opportunity.name
      );


    await expect(page).toHaveURL(
      opportunityRecordUrl
    );


    await expect(
      opportunitiesPage.getOpportunityDetailHeading(
        opportunity.name
      )
    ).toBeVisible();


    const descriptionDetail =
      opportunitiesPage.getOpportunityDescriptionDetail(
        opportunity.updatedDescription
      );


    await expect(
      descriptionDetail
    ).toBeVisible();


    await expect(
      descriptionDetail
    ).toHaveText(
      opportunity.updatedDescription
    );


    logger.info(
      'Persisted opportunity description verified',
      {
        scenario: opportunity.scenario,
        opportunityName: opportunity.name,
        opportunityRecordUrl
      }
    );
  }
);