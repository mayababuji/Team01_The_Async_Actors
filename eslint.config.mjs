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
  // Playwright source files
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

      'playwright/no-page-pause': 'error',
      'playwright/no-wait-for-timeout': 'error'
    }
  },

  // --------------------------------------------------
  // BDD step-definition rules
  // --------------------------------------------------
  {
    files: ['steps/**/*.steps.js'],

    rules: {
      // Assertions live inside Then callbacks instead of test().
      'playwright/no-standalone-expect': 'off',

      // Given and When intentionally do not contain assertions.
      'playwright/expect-expect': 'off',
//Disallow magic numbers as Playwright timeout values
      'playwright/no-magic-timeouts': 'error',

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