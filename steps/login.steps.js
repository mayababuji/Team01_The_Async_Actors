import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import { env } from '../utils/env.js';

Given(
  'the user is on the Suite8 login page',
  async ({ loginPage }) => {
    await loginPage.open();

    // await expect(loginPage.usernameInput).toBeVisible();
    // await expect(loginPage.passwordInput).toBeVisible();
  }
);

When(
  'the user enters valid login credentials',
  async ({ loginPage }) => {
    await loginPage.login(env.username, env.password);
  }
);

Then(
  'the user should be logged in successfully',
  async ({ page }) => {
    
await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/home/i);
    await expect(page).not.toHaveURL(/login/i);
  }

  
);
When(
  'the user logs in using Excel data for scenario {string}',
  async ({ loginPage, loginData, selectedLoginData }, scenarioName) => {
    const row = loginData.find(
      data => data.scenario === scenarioName
    );

    if (!row) {
      const availableScenarios = loginData
        .map(data => data.scenario)
        .join(', ');

      throw new Error(
        `Excel scenario "${scenarioName}" was not found. Available scenarios: ${availableScenarios}`
      );
    }

    selectedLoginData.set(row);

    await loginPage.login(row.username, row.password);
  }
);

Then(
  'the login error message from Excel should be displayed',
  async ({ loginPage, selectedLoginData }) => {
    const row = selectedLoginData.get();

    if (!row) {
      throw new Error(
        'No Excel login row was selected. Ensure the Excel login step runs before the validation step.'
      );
    }

    await expect(loginPage.loginErrorMessage).toBeVisible();

    await expect(loginPage.loginErrorMessage).toContainText(
      row.expectedResult
    );
  }
);