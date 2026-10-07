import { mkdirSync, writeFileSync } from 'node:fs';

const environment = process.env.TEST_ENV || 'local';
const baseUrl = process.env.BASE_URL || 'not-set';

mkdirSync('allure-results', { recursive: true });

const properties = [
  `Test Environment=${environment}`,
  `Base URL=${baseUrl}`,
  `Browser Projects=chromium, firefox, webkit`,
  `Node Version=${process.version}`,
  `Operating System=${process.platform}`,
  `Headless Mode=${process.env.HEADLESS !== 'false'}`,
  `CI=${process.env.CI || 'false'}`
].join('\n');

writeFileSync(
  'allure-results/environment.properties',
  `${properties}\n`,
  'utf8'
);
