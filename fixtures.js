import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from './pages/login.page.js';
import { readLoginData } from './utils/excel-util.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  loginData: [
    async ({}, use) => {
      console.log('Loading login Excel data for this Playwright worker...');

      const data = readLoginData();

      await use(data);
    },
    {
      scope: 'worker'
    }
  ],

  selectedLoginData: async ({}, use) => {
    let currentRow;

    await use({
      set(row) {
        currentRow = row;
      },

      get() {
        return currentRow;
      }
    });
  }
});

export const { Given, When, Then } = createBdd(test);