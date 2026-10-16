import XLSX from 'xlsx';
import path from 'node:path';

const filePath = path.resolve(
  process.cwd(),
  'test-data',
  'Team01_The_Async_Actors_Test_Data.xlsx'
);

function readSheetData(sheetName) {
  const workbook = XLSX.readFile(filePath);
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

// Login data

export function readLoginData() {
  return readSheetData('login').map((row, index) => {
    const loginRow = {
      scenario: String(row.Scenario ?? '').trim(),
      username: String(row.Username ?? '').trim(),
      password: String(row.Password ?? '').trim(),
      expectedResult: String(
        row.ExpectedResult ?? ''
      ).trim()
    };

    for (const field of ['scenario', 'expectedResult']) {
      if (!loginRow[field]) {
        throw new Error(
          `Excel login row ${index + 2} is missing "${field}".`
        );
      }
    }

    return loginRow;
  });
}

// Retrieve one account scenario

export function getAccountDataByScenario(scenarioName) {
  const account = readAccountData().find(
    row => row.scenario === scenarioName
  );

  if (!account) {
    throw new Error(
      `Account scenario "${scenarioName}" was not found ` +
      'in the Accounts worksheet.'
    );
  }

  return account;
}

// Account data

export function readAccountData() {
  return readSheetData('Accounts').map((row, index) => {
    const accountRow = {
      scenario: String(row.Scenario ?? '').trim(),
      name: String(row.Name ?? '').trim(),
      searchText: String(row.SearchText ?? '').trim(),

      phone: String(row.Phone ?? '').trim(),
      updatedPhone: String(
        row.UpdatedPhone ?? ''
      ).trim(),

      website: String(row.Website ?? '').trim(),
      updatedWebsite: String(
        row.UpdatedWebsite ?? ''
      ).trim(),

      email: String(row.Email ?? '').trim(),

      billingStreet: String(
        row.BillingStreet ?? ''
      ).trim(),
      billingPostalCode: String(
        row.BillingPostalCode ?? ''
      ).trim(),
      billingCity: String(
        row.BillingCity ?? ''
      ).trim(),
      billingState: String(
        row.BillingState ?? ''
      ).trim(),
      billingCountry: String(
        row.BillingCountry ?? ''
      ).trim(),

      shippingStreet: String(
        row.ShippingStreet ?? ''
      ).trim(),
      shippingPostalCode: String(
        row.ShippingPostalCode ?? ''
      ).trim(),
      shippingCity: String(
        row.ShippingCity ?? ''
      ).trim(),
      shippingState: String(
        row.ShippingState ?? ''
      ).trim(),
      shippingCountry: String(
        row.ShippingCountry ?? ''
      ).trim(),

      expectedResult: String(
        row.ExpectedResult ?? ''
      ).trim()
    };

    // Required fields for all account rows.
    const requiredFields = [
      'scenario',
      'name',
      'expectedResult'
    ];
    

    // Complete overview scenario.
    if (
      accountRow.scenario ===
      'create_account_complete_overview'
    ) {
      requiredFields.push(
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
      );
    }

    // Website update scenario.
    if (
      accountRow.scenario === 'update_account_website'
    ) {
      requiredFields.push(
        'website',
        'updatedWebsite'
      );
    }

    // Office phone update scenario.
    if (
      accountRow.scenario === 'update_account_office_phone'
    ) {
      requiredFields.push(
        'phone',
        'updatedPhone'
      );
    }
// Cancel account editing scenario.
if (
  accountRow.scenario === 'cancel_account_edit'
) {
  requiredFields.push(
    'website',
    'updatedWebsite'
  );
}
    // Validate required values before comparing them.
    for (const field of requiredFields) {
      if (!accountRow[field]) {
        throw new Error(
          `Accounts Excel data row ${index + 2} ` +
          `is missing "${field}".`
        );
      }
    }

    // Validate website update data.
    if (
      accountRow.scenario === 'update_account_website'
    ) {
      if (
        accountRow.website === accountRow.updatedWebsite
      ) {
        throw new Error(
          `Accounts Excel data row ${index + 2}: ` +
          'Website and UpdatedWebsite must differ.'
        );
      }

      if (
        accountRow.expectedResult !==
        accountRow.updatedWebsite
      ) {
        throw new Error(
          `Accounts Excel data row ${index + 2}: ` +
          'ExpectedResult must match UpdatedWebsite.'
        );
      }
    }

    // Validate office phone update data.
    if (
      accountRow.scenario === 'update_account_office_phone'
    ) {
      if (
        accountRow.phone === accountRow.updatedPhone
      ) {
        throw new Error(
          `Accounts Excel data row ${index + 2}: ` +
          'Phone and UpdatedPhone must differ.'
        );
      }

      if (
        accountRow.expectedResult !==
        accountRow.updatedPhone
      ) {
        throw new Error(
          `Accounts Excel data row ${index + 2}: ` +
          'ExpectedResult must match UpdatedPhone.'
        );
      }
    }
    // Validate cancel account editing data.
if (
  accountRow.scenario === 'cancel_account_edit'
) {
  if (
    accountRow.website === accountRow.updatedWebsite
  ) {
    throw new Error(
      `Accounts Excel data row ${index + 2}: ` +
      'Website and UpdatedWebsite must differ.'
    );
  }

  if (
    accountRow.expectedResult !== accountRow.website
  ) {
    throw new Error(
      `Accounts Excel data row ${index + 2}: ` +
      'ExpectedResult must match the original Website ' +
      'for cancel_account_edit.'
    );
  }
}

    return accountRow;
  });
  
}