import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import { env } from '../utils/env.js';

Given(
  'the user is on the Suite8 login page',
  async ({ loginPage ,logger}) => {
     logger.info('Opening Suite8 login page');
    await loginPage.open();

    // await expect(loginPage.usernameInput).toBeVisible();
    // await expect(loginPage.passwordInput).toBeVisible();
  }
);

When(
  'the user enters valid login credentials',
  async ({ loginPage ,logger}) => {
   logger.info('Submitting valid login credentials');
    await loginPage.login(env.username, env.password);
  }
);

Then(
  'the user should be logged in successfully',
  async ({ page,logger }) => {
    logger.info('Validating logged in successfully');
    
await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/home/i);
    await expect(page).not.toHaveURL(/login/i);
  }

  
);
When(
  'the user logs in using Excel data for scenario {string}',
  async ({ loginPage, loginData, selectedLoginData ,logger}, scenarioName) => {
    const row = loginData.find(
      data => data.scenario === scenarioName
    );

    if (!row) {
       logger.error('Excel login scenario was not found', {
        requestedScenario: scenarioName,
        availableScenarios: loginData.map(data => data.scenario)
      });
      const availableScenarios = loginData
        .map(data => data.scenario)
        .join(', ');

      throw new Error(
        `Excel scenario "${scenarioName}" was not found. Available scenarios: ${availableScenarios}`
      );
    }

    selectedLoginData.set(row);
    logger.info('Submitting negative login data from Excel', {
      scenario: row.scenario,
      username: row.username
    });

    await loginPage.login(row.username, row.password);
    logger.info('Negative login form submitted', {
      scenario: row.scenario
    });
    
  }
);

Then(
  'the login error message from Excel should be displayed',
  async ({ loginPage, selectedLoginData, logger }) => {
    const row = selectedLoginData.get();

    if (!row) {
      logger.error(
        'No selected Excel row exists for error-message validation'
      );

      throw new Error(
        'No Excel login row was selected before validating the error message.'
      );
    }

    const errorLocators = {
      'Login credentials incorrect, please try again.': {
        locator: loginPage.loginErrorMessage,
        locatorName: 'loginErrorMessage'
      },

      'Missing required field': {
        locator: loginPage.emptyCredentialErrorMessage,
        locatorName: 'emptyCredentialErrorMessage'
      }
    };

    const errorConfig = errorLocators[row.expectedResult];

    if (!errorConfig) {
      logger.error('No error locator is configured for Excel text', {
        scenario: row.scenario,
        expectedResult: row.expectedResult,
        supportedMessages: Object.keys(errorLocators)
      });

      throw new Error(
        `No error-message locator is configured for Excel ExpectedResult: "${row.expectedResult}"`
      );
    }

    logger.info('Verifying expected login error message', {
      scenario: row.scenario,
      expectedResult: row.expectedResult,
      locatorUsed: errorConfig.locatorName
    });

    await expect(errorConfig.locator).toBeVisible();

    await expect(errorConfig.locator).toContainText(
      row.expectedResult
    );

    logger.info('Expected login error message was verified', {
      scenario: row.scenario,
      locatorUsed: errorConfig.locatorName
    });
  }
);
When(
  'the user enters a password',
  async ({ loginPage }) => {
    await loginPage.enterPassword(env.password);
  }
);
Then(
  'the user should see the password displayed as hidden characters',
  async ({ loginPage }) => {
    const passwordField = loginPage.passwordInput.first();

    await expect(passwordField).toHaveAttribute('type', 'password');

    await expect(passwordField).toHaveValue(env.password);
  }
);