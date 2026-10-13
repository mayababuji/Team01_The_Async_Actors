// utils/excelUtils.js
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
      `Sheet "${sheetName}" was not found. Available sheets: ${workbook.SheetNames.join(', ')}`
    );
  }

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: '',
    raw: false
  });

  if (rows.length === 0) {
    throw new Error(`The "${sheetName}" worksheet has no data rows.`);
  }

  return rows;
}

export function readLoginData() {
  return readSheetData('login').map((row, index) => {
    const loginRow = {
      scenario: String(row.Scenario ?? '').trim(),
      username: String(row.Username ?? '').trim(),
      password: String(row.Password ?? '').trim(),
      expectedResult: String(row.ExpectedResult ?? '').trim()
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
export function getAccountDataByScenario(scenarioName) {
  const account = readAccountData().find(
    row => row.scenario === scenarioName
  );

  if (!account) {
    throw new Error(
      `Account scenario "${scenarioName}" was not found in the Accounts worksheet.`
    );
  }

  return account;
}
export function readAccountData() {
  return readSheetData('Accounts').map((row, index) => {
    const accountRow = {
      scenario: String(row.Scenario ?? '').trim(),
      name: String(row.Name ?? '').trim(),
      phone: String(row.Phone ?? '').trim(),
      website: String(row.Website ?? '').trim(),
      email: String(row.Email ?? '').trim(),

      billingStreet: String(row.BillingStreet ?? '').trim(),
      billingPostalCode: String(row.BillingPostalCode ?? '').trim(),
      billingCity: String(row.BillingCity ?? '').trim(),
      billingState: String(row.BillingState ?? '').trim(),
      billingCountry: String(row.BillingCountry ?? '').trim(),

      shippingStreet: String(row.ShippingStreet ?? '').trim(),
      shippingPostalCode: String(row.ShippingPostalCode ?? '').trim(),
      shippingCity: String(row.ShippingCity ?? '').trim(),
      shippingState: String(row.ShippingState ?? '').trim(),
      shippingCountry: String(row.ShippingCountry ?? '').trim(),

      expectedResult: String(row.ExpectedResult ?? '').trim()
    };

    // These remain required for your existing positive account rows.
    const requiredFields = [
      'scenario',
      'name',
      'expectedResult'
    ];

    // Require complete data only for this new scenario.
    if (
      accountRow.scenario === 'create_account_complete_overview'
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

    for (const field of requiredFields) {
      if (!accountRow[field]) {
        throw new Error(
          `Accounts Excel data row ${index + 2} is missing "${field}".`
        );
      }
    }

    return accountRow;
  });
}