import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page.js';
import { env } from '../fixtures.js';

const { Given, When, Then } = createBdd();

Given('the user is on the Suite8 login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(loginPage.usernameInput.first()).toBeVisible();
  await expect(loginPage.passwordInput.first()).toBeVisible();
});

When('the user enters valid login credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(env.username, env.password);
});

Then('the user should be logged in successfully', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');

  await expect(page).not.toHaveURL(/login|signin|sign-in/i);
});