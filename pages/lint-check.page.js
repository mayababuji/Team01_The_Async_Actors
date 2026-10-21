// export function checkLocators(page) {
//   // Should trigger playwright/no-raw-locators.
//   const rawLocator = page.locator('.import-button');

//   // Should not trigger this rule.
//   const roleLocator = page.getByRole('button', {
//     name: 'Import Opportunities'
//   });

//   return { rawLocator, roleLocator };
// }

export function checkLocators(page) {
  return page.getByRole('button', {
    name: 'Import Opportunities'
  });
}