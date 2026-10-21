// https://github.com/mskelton/eslint-plugin-playwright
import playwright from 'eslint-plugin-playwright';

export default [
  // --------------------------------------------------
  // Generated files and reports
  // --------------------------------------------------
  {
    ignores: [
      'node_modules/**',
      'tests/generated/**',
      'playwright-report/**',
      'test-results/**',
      'allure-results/**',
      'allure-report/**',
      'github-pages-report/**',
      'playwright/.auth/**',
      '.playwright-browsers/**'
    ]
  },

  // --------------------------------------------------
  // Shared Playwright rules
  // Applies to steps, pages, session files, and fixtures
  // --------------------------------------------------
  {
    ...playwright.configs['flat/recommended'],

    files: [
      'steps/**/*.steps.js',
      'pages/**/*.page.js',
      'session/**/*.js',
      'fixtures.js'
    ],

    rules: {
      ...playwright.configs['flat/recommended'].rules,

      // Disallow debugging pauses.
      'playwright/no-page-pause': 'error',

      // Disallow fixed waits.
      'playwright/no-wait-for-timeout': 'error',

      // Disallow hard-coded Playwright timeout values.
      'playwright/no-magic-timeouts': 'error',

      // Prefer user-facing locators, with specific exceptions.
      'playwright/no-raw-locators': [
        'error',
        {
          allowed: ['iframe', "[aria-busy='false']"]
        }
      ]
    }
  },

  // --------------------------------------------------
  // BDD step-definition rules
  // Applies only to step-definition files
  // --------------------------------------------------
  {
    files: ['steps/**/*.steps.js'],

    rules: {
      // Assertions live inside Then callbacks instead of test().
      'playwright/no-standalone-expect': 'off',

      // Given and When intentionally do not contain assertions.
      'playwright/expect-expect': 'off',

      // Reject direct expect() calls inside Given and When.
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'CallExpression[callee.name=/^(Given|When)$/] CallExpression[callee.name="expect"]',
          message:
            'Assertions must be in Then steps. Do not call expect() inside Given or When.'
        }
      ]
    }
  }
];