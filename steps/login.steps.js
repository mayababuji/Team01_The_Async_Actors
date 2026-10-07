import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';
import { env } from '../utils/env.js';

Given(
  'the user is on the Suite8 login page',
  async ({ loginPage }) => {
    await loginPage.open();

    await expect(loginPage.usernameInput.first()).toBeVisible();
    await expect(loginPage.passwordInput.first()).toBeVisible();
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
    await expect(page).not.toHaveURL(/login|signin|sign-in/i);
  }
);