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

export function readAccountData() {
  return readSheetData('Accounts').map((row, index) => {
    const accountRow = {
      scenario: String(row.Scenario ?? '').trim(),
      name: String(row.Name ?? '').trim(),
      phone: String(row.Phone ?? '').trim(),
      website: String(row.Website ?? '').trim(),
      expectedResult: String(row.ExpectedResult ?? '').trim()
    };
    console.log('RAW ACCOUNT EXCEL ROWS:', accountRow);

    for (const field of ['scenario', 'name', 'expectedResult']) {
      if (!accountRow[field]) {
        throw new Error(
          `Excel Accounts row ${index + 2} is missing "${field}".`
        );
      }
    }

    return accountRow;
  });
}