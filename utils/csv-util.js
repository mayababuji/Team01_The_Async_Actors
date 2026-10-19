import Papa from 'papaparse';
import { readFile } from 'node:fs/promises';


export async function readAccountImportCsv(filePath) {
  const csvContent = await readFile(filePath, 'utf-8');


  const parsed = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: header => header.trim()
  });


  if (parsed.errors.length > 0) {
    throw new Error(
      `Failed to parse account import CSV "${filePath}": ` +
      parsed.errors.map(error => error.message).join('; ')
    );
  }


  const accounts = parsed.data.filter(row => {
    const name = row.Name?.trim();
    const website = row.Website?.trim();


    return Boolean(name && website);
  });


  if (accounts.length === 0) {
    throw new Error(
      `No valid account rows found in "${filePath}".`
    );
  }


  return accounts;
}