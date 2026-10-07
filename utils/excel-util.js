import XLSX from 'xlsx';
import path from 'node:path';

export function readLoginData() {
  const filePath = path.resolve(
    process.cwd(),
    'test-data',
    'Team01_The_Async_Actors_Test_Data.xlsx'
  );

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets.login;

  if (!worksheet) {
    throw new Error(
      `Sheet "login" was not found in login-data.xlsx. Available sheets: ${workbook.SheetNames.join(', ')}`
    );
  }

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: '',
    raw: false
  });

  if (rows.length === 0) {
    throw new Error('The "login" worksheet has no data rows.');
  }

  return rows.map((row, index) => {
    const loginRow = {
      scenario: String(row.Scenario ?? '').trim(),
      username: String(row.Username ?? '').trim(),
      password: String(row.Password ?? '').trim(),
      expectedResult: String(row.ExpectedResult ?? '').trim()
    };

    for (const [field, value] of Object.entries(loginRow)) {
      if (!value) {
        throw new Error(
          `Excel row ${index + 2} is missing a value for "${field}".`
        );
      }
    }

    return loginRow;
  });
}