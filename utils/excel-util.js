import * as XLSX from 'xlsx';
import * as fs from 'node:fs';
import path from 'node:path';


// Enable filesystem access for SheetJS in Node ESM.
XLSX.set_fs(fs);


// --------------------------------------------------
// Workbook configuration
// --------------------------------------------------


const FILE_PATH = path.resolve(
  process.cwd(),
  'test-data',
  'Team01_The_Async_Actors_Test_Data.xlsx'
);


const SHEET_NAMES = {
  login: 'login',
  accounts: 'Accounts',
  opportunities: 'opputinuites'
};


// --------------------------------------------------
// Scenario configuration
// --------------------------------------------------


const POSITIVE_ACCOUNT_SCENARIOS = new Set([
  'create_account_valid_mandatory',
  'create_account_complete_overview',
  'update_account_website',
  'update_account_office_phone'
]);


const OPPORTUNITY_LEAD_SOURCE_SCENARIOS = new Set([
  'create_opportunity_lead_source_cold_call',
  'create_opportunity_lead_source_existing_customer',
  'create_opportunity_lead_source_self_generated',
  'create_opportunity_lead_source_employee',
  'create_opportunity_lead_source_partner',
  'create_opportunity_lead_source_public_relations',
  'create_opportunity_lead_source_direct_mail',
  'create_opportunity_lead_source_conference',
  'create_opportunity_lead_source_trade_show',
  'create_opportunity_lead_source_web_site',
  'create_opportunity_lead_source_word_of_mouth',
  'create_opportunity_lead_source_email',
  'create_opportunity_lead_source_campaign',
  'create_opportunity_lead_source_other'
]);


const VALID_OPPORTUNITY_LEAD_SOURCES = new Set([
  'Cold Call',
  'Existing Customer',
  'Self Generated',
  'Employee',
  'Partner',
  'Public Relations',
  'Direct Mail',
  'Conference',
  'Trade Show',
  'Web Site',
  'Word of mouth',
  'Email',
  'Campaign',
  'Other'
]);


const OPPORTUNITY_TYPE_SCENARIOS = new Set([
  'create_opportunity_existing_business',
  'create_opportunity_new_business'
]);


const VALID_OPPORTUNITY_TYPES = new Set([
  'Existing Business',
  'New Business'
]);


const POSITIVE_OPPORTUNITY_SCENARIOS = new Set([
  'create_opportunity_valid_mandatory',
  'create_opportunity_with_amount',
  'create_opportunity_with_currency',
  'create_opportunity_with_description',
  ...OPPORTUNITY_TYPE_SCENARIOS,
  ...OPPORTUNITY_LEAD_SOURCE_SCENARIOS
]);


const ACCOUNT_REQUIRED_FIELDS_BY_SCENARIO = {
  create_account_complete_overview: [
    'phone',
    'website',
    'email',
    'billingStreet',
    'billingPostalCode',
    'billingCity',
    'billingState',
    'billingCountry',
    'shippingStreet',
    'shippingPostalCode',
    'shippingCity',
    'shippingState',
    'shippingCountry'
  ],

  update_account_website: [
    'website',
    'updatedWebsite'
  ],

  update_account_office_phone: [
    'phone',
    'updatedPhone'
  ],

  cancel_account_edit: [
    'website',
    'updatedWebsite'
  ]
};


const OPPORTUNITY_REQUIRED_FIELDS = [
  'name',
  'accountName',
  'amount',
  'salesStage',
  'expectedCloseDate'
];


// --------------------------------------------------
// Excel column mappings
// --------------------------------------------------


const LOGIN_COLUMNS = {
  scenario: 'Scenario',
  username: 'Username',
  password: 'Password',
  expectedResult: 'ExpectedResult'
};


const ACCOUNT_COLUMNS = {
  scenario: 'Scenario',
  name: 'Name',
  searchText: 'SearchText',

  phone: 'Phone',
  updatedPhone: 'UpdatedPhone',

  website: 'Website',
  updatedWebsite: 'UpdatedWebsite',

  email: 'Email',

  billingStreet: 'BillingStreet',
  billingPostalCode: 'BillingPostalCode',
  billingCity: 'BillingCity',
  billingState: 'BillingState',
  billingCountry: 'BillingCountry',

  shippingStreet: 'ShippingStreet',
  shippingPostalCode: 'ShippingPostalCode',
  shippingCity: 'ShippingCity',
  shippingState: 'ShippingState',
  shippingCountry: 'ShippingCountry',

  expectedResult: 'ExpectedResult'
};


const OPPORTUNITY_COLUMNS = {
  scenario: 'Scenario',
  name: 'OpportunityName',
  accountName: 'AccountName',
  amount: 'OpportunityAmount',
  salesStage: 'SalesStage',
  expectedCloseDate: 'ExpectedCloseDate',
  currencyCode: 'CurrencyCode',
  currencyDisplay: 'CurrencyDisplay',
  type: 'OpportunityType',
  leadSource: 'LeadSource',
  description: 'Description'
};


// --------------------------------------------------
// Shared helpers
// --------------------------------------------------


function toText(value) {
  return String(value ?? '').trim();
}


function mapColumns(row, columns) {
  return Object.fromEntries(
    Object.entries(columns).map(([field, column]) => [
      field,
      toText(row[column])
    ])
  );
}


function requireFields(data, fields, rowLabel) {
  for (const field of fields) {
    if (!data[field]) {
      throw new Error(
        `${rowLabel} is missing "${field}".`
      );
    }
  }
}


function readSheetData(sheetName) {
  const workbook = XLSX.readFile(FILE_PATH);
  const worksheet = workbook.Sheets[sheetName];


  if (!worksheet) {
    throw new Error(
      `Sheet "${sheetName}" was not found. ` +
      `Available sheets: ${workbook.SheetNames.join(', ')}`
    );
  }


  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: '',
    raw: false
  });


  if (rows.length === 0) {
    throw new Error(
      `The "${sheetName}" worksheet has no data rows.`
    );
  }


  return rows;
}


// --------------------------------------------------
// Login data
// --------------------------------------------------


export function readLoginData() {
  return readSheetData(SHEET_NAMES.login).map(
    (row, index) => {
      const loginRow = mapColumns(
        row,
        LOGIN_COLUMNS
      );


      requireFields(
        loginRow,
        ['scenario', 'expectedResult'],
        `Excel login row ${index + 2}`
      );


      return loginRow;
    }
  );
}


// --------------------------------------------------
// Account validation
// --------------------------------------------------


function validateAccountData(
  accountRow,
  rowLabel
) {
  requireFields(
    accountRow,
    ['scenario'],
    rowLabel
  );


  // Other scenarios may intentionally omit mandatory values.
  if (
    !POSITIVE_ACCOUNT_SCENARIOS.has(
      accountRow.scenario
    )
  ) {
    return;
  }


  const scenarioFields =
    ACCOUNT_REQUIRED_FIELDS_BY_SCENARIO[
      accountRow.scenario
    ] ?? [];


  requireFields(
    accountRow,
    [
      'name',
      'expectedResult',
      ...scenarioFields
    ],
    rowLabel
  );


  switch (accountRow.scenario) {
    case 'update_account_website': {
      if (
        accountRow.website ===
        accountRow.updatedWebsite
      ) {
        throw new Error(
          `${rowLabel}: ` +
          'Website and UpdatedWebsite must differ.'
        );
      }


      if (
        accountRow.expectedResult !==
        accountRow.updatedWebsite
      ) {
        throw new Error(
          `${rowLabel}: ` +
          'ExpectedResult must match UpdatedWebsite.'
        );
      }


      break;
    }


    case 'update_account_office_phone': {
      if (
        accountRow.phone ===
        accountRow.updatedPhone
      ) {
        throw new Error(
          `${rowLabel}: ` +
          'Phone and UpdatedPhone must differ.'
        );
      }


      if (
        accountRow.expectedResult !==
        accountRow.updatedPhone
      ) {
        throw new Error(
          `${rowLabel}: ` +
          'ExpectedResult must match UpdatedPhone.'
        );
      }


      break;
    }


    default:
      break;
  }
}


// --------------------------------------------------
// Account data
// --------------------------------------------------


export function readAccountData() {
  return readSheetData(SHEET_NAMES.accounts).map(
    (row, index) => {
      const accountRow = mapColumns(
        row,
        ACCOUNT_COLUMNS
      );


      validateAccountData(
        accountRow,
        `Accounts Excel data row ${index + 2}`
      );


      return accountRow;
    }
  );
}


// --------------------------------------------------
// Retrieve one account scenario
// --------------------------------------------------


export function getAccountDataByScenario(
  scenarioName
) {
  const account = readAccountData().find(
    row => row.scenario === scenarioName
  );


  if (!account) {
    throw new Error(
      `Account scenario "${scenarioName}" was not found ` +
      `in the ${SHEET_NAMES.accounts} worksheet.`
    );
  }


  return account;
}


// --------------------------------------------------
// Opportunity amount validation
// --------------------------------------------------


function validateOpportunityAmount(
  amount,
  rowLabel
) {
  const numericAmount = Number(amount);


  if (
    !/^\d+(?:\.\d+)?$/.test(amount) ||
    !Number.isFinite(numericAmount) ||
    numericAmount <= 0
  ) {
    throw new Error(
      `${rowLabel}: OpportunityAmount must be a positive ` +
      'number without currency symbols or thousands separators.'
    );
  }
}


// --------------------------------------------------
// Opportunity date validation
// --------------------------------------------------


function validateExpectedCloseDate(
  dateText,
  rowLabel
) {
  const parsedDate =
    /^\d{4}-\d{2}-\d{2}$/.test(dateText)
      ? new Date(`${dateText}T00:00:00.000Z`)
      : null;


  if (
    !parsedDate ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== dateText
  ) {
    throw new Error(
      `${rowLabel}: ExpectedCloseDate must be a valid ` +
      'calendar date in YYYY-MM-DD format. ' +
      `Received: ${JSON.stringify(dateText)}.`
    );
  }
}


// --------------------------------------------------
// Opportunity scenario validation
// --------------------------------------------------


function validateOpportunityData(
  opportunityRow,
  rowLabel
) {
  requireFields(
    opportunityRow,
    ['scenario'],
    rowLabel
  );


  // Other scenarios may intentionally omit mandatory values.
  if (
    !POSITIVE_OPPORTUNITY_SCENARIOS.has(
      opportunityRow.scenario
    )
  ) {
    return;
  }


  requireFields(
    opportunityRow,
    OPPORTUNITY_REQUIRED_FIELDS,
    rowLabel
  );


  validateOpportunityAmount(
    opportunityRow.amount,
    rowLabel
  );


  validateExpectedCloseDate(
    opportunityRow.expectedCloseDate,
    rowLabel
  );


  // Require Description only for the description scenario.
  if (
    opportunityRow.scenario ===
    'create_opportunity_with_description'
  ) {
    requireFields(
      opportunityRow,
      ['description'],
      rowLabel
    );
  }


  // Validate Type only for the type scenarios.
  if (
    OPPORTUNITY_TYPE_SCENARIOS.has(
      opportunityRow.scenario
    )
  ) {
    requireFields(
      opportunityRow,
      ['type'],
      rowLabel
    );


    if (
      !VALID_OPPORTUNITY_TYPES.has(
        opportunityRow.type
      )
    ) {
      throw new Error(
        `${rowLabel}: OpportunityType must be ` +
        '"Existing Business" or "New Business".'
      );
    }
  }


  // Validate Lead Source only for the lead-source scenarios.
  if (
    OPPORTUNITY_LEAD_SOURCE_SCENARIOS.has(
      opportunityRow.scenario
    )
  ) {
    requireFields(
      opportunityRow,
      ['leadSource'],
      rowLabel
    );


    if (
      !VALID_OPPORTUNITY_LEAD_SOURCES.has(
        opportunityRow.leadSource
      )
    ) {
      throw new Error(
        `${rowLabel}: LeadSource must match one of ` +
        'the configured dropdown labels. ' +
        `Received: ${JSON.stringify(opportunityRow.leadSource)}.`
      );
    }
  }


  // This environment only provides the default USD currency.
  if (
    opportunityRow.scenario ===
    'create_opportunity_with_currency'
  ) {
    requireFields(
      opportunityRow,
      ['currencyCode', 'currencyDisplay'],
      rowLabel
    );


    if (opportunityRow.currencyCode !== 'USD') {
      throw new Error(
        `${rowLabel}: CurrencyCode must be "USD" ` +
        'because this environment only provides USD.'
      );
    }


    if (opportunityRow.currencyDisplay !== '$') {
      throw new Error(
        `${rowLabel}: CurrencyDisplay must be "$" ` +
        'for the USD detail-page verification.'
      );
    }
  }
}


// --------------------------------------------------
// Opportunity data
// Worksheet name intentionally matches: opputinuites
// --------------------------------------------------


export function readOpportunityData() {
  return readSheetData(SHEET_NAMES.opportunities).map(
    (row, index) => {
      const opportunityRow = mapColumns(
        row,
        OPPORTUNITY_COLUMNS
      );


      // Remove one literal leading apostrophe from Excel text dates.
      opportunityRow.expectedCloseDate =
        opportunityRow.expectedCloseDate
          .replace(/^'/, '')
          .trim();


      validateOpportunityData(
        opportunityRow,
        `${SHEET_NAMES.opportunities} Excel data row ${index + 2}`
      );


      return opportunityRow;
    }
  );
}


// --------------------------------------------------
// Retrieve one opportunity scenario
// --------------------------------------------------


export function getOpportunityDataByScenario(
  scenarioName
) {
  const matchingRows = readOpportunityData().filter(
    row => row.scenario === scenarioName
  );


  if (matchingRows.length === 0) {
    throw new Error(
      `Opportunity scenario "${scenarioName}" was not found ` +
      `in the "${SHEET_NAMES.opportunities}" worksheet.`
    );
  }


  if (matchingRows.length > 1) {
    throw new Error(
      `Opportunity scenario "${scenarioName}" appears more than once ` +
      `in the "${SHEET_NAMES.opportunities}" worksheet. ` +
      'Scenario values must be unique.'
    );
  }


  return matchingRows[0];
}