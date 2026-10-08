import { test as setup, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { LoginPage } from '../pages/login.page.js';

const authFile = path.resolve('playwright/.auth/user.json');

setup('create authenticated session', async ({ page }) => {
  await mkdir(path.dirname(authFile), { recursive: true });

  const loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL);
  await loginPage.login(
    process.env.LOGIN_USERNAME,
    process.env.LOGIN_PASSWORD
  );

  // Confirm login reached the home page before saving the state.
  await expect(page).toHaveURL(/#\/home/i);

  await page.context().storageState({
    path: authFile
  });
});
