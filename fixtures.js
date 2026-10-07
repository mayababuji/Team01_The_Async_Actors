import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from './pages/login.page.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

export const { Given, When, Then } = createBdd(test);