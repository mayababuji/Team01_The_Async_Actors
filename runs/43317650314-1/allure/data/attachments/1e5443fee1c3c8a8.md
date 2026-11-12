# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Import new accounts from a valid file
- Location: tests/generated/features/accounts.feature.spec.js:156:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('iframe[src*="module=Import"]').contentFrame().locator('body').locator(getByText(/^\s*\d+\s+records\s+were\s+created\s*$/i))
Expected: "2 records were created"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('iframe[src*="module=Import"]').contentFrame().locator('body').locator(getByText(/^\s*\d+\s+records\s+were\s+created\s*$/i)) with timeout 20000ms
  - waiting for locator('iframe[src*="module=Import"]').contentFrame().locator('body').locator(getByText(/^\s*\d+\s+records\s+were\s+created\s*$/i))

```

```yaml
- navigation:
  - list:
    - listitem:
      - link:
        - /url: "#/home"
  - list:
    - listitem: Accounts
    - listitem: Contacts
    - listitem: Opportunities
  - list:
    - listitem: More
  - list:
    - listitem
  - list:
    - listitem
  - textbox "Search":
    - /placeholder: Search...
  - button "Search"
  - list:
    - listitem
  - list:
    - listitem
- iframe
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  1664 |     await expect(
  1665 |       accountsPage.accountImportFileInput
  1666 |     ).toBeHidden();
  1667 | 
  1668 | 
  1669 |     await expect(
  1670 |       accountsPage.accountImportNextButton
  1671 |     ).toBeVisible();
  1672 | 
  1673 | 
  1674 |     logger.info(
  1675 |       'Next account import configuration step displayed'
  1676 |     );
  1677 |   }
  1678 | );
  1679 | 
  1680 | 
  1681 | Given(
  1682 |   'a valid import file containing new account data is available',
  1683 |   async ({
  1684 |     accountsPage,
  1685 |     accountImportTestData,
  1686 |     logger
  1687 |   }) => {
  1688 |     const importedAccounts = await readAccountImportCsv(
  1689 |       ACCOUNT_IMPORT_FILE
  1690 |     );
  1691 | 
  1692 | 
  1693 |     accountImportTestData.importFile = ACCOUNT_IMPORT_FILE;
  1694 |     accountImportTestData.importedAccounts = importedAccounts;
  1695 | 
  1696 | 
  1697 |     await accountsPage.openImportAccountPage();
  1698 |     await accountsPage.selectAccountImportFile(
  1699 |       ACCOUNT_IMPORT_FILE
  1700 |     );
  1701 | 
  1702 | 
  1703 |     logger.info('Valid account import file is available', {
  1704 |       importFile: ACCOUNT_IMPORT_FILE,
  1705 |       importedAccountCount: importedAccounts.length
  1706 |     });
  1707 |   }
  1708 | );
  1709 | 
  1710 | 
  1711 | When(
  1712 |   'the user completes the account import using Create new records only',
  1713 |   async ({
  1714 |     accountsPage,
  1715 |     accountImportTestData,
  1716 |     logger
  1717 |   }) => {
  1718 |     logger.info(
  1719 |       'Completing account import using Create new records only'
  1720 |     );
  1721 | 
  1722 | 
  1723 |     await accountsPage.clickAccountImportNextButton();
  1724 |     await accountsPage.confirmImportFileProperties();
  1725 |     await accountsPage.confirmAccountFieldMappings();
  1726 |     await accountsPage.importNewRecordsOnly();
  1727 | 
  1728 | 
  1729 |     accountImportTestData.importCompleted = true;
  1730 | 
  1731 | 
  1732 |     logger.info(
  1733 |       'Account import completed using Create new records only'
  1734 |     );
  1735 |   }
  1736 | );
  1737 | 
  1738 | 
  1739 | Then(
  1740 |   'the imported accounts should contain the values provided in the file',
  1741 |   async ({
  1742 |     accountsPage,
  1743 |     accountImportTestData,
  1744 |     logger
  1745 |   }) => {
  1746 |     const importedAccounts =
  1747 |       accountImportTestData.importedAccounts;
  1748 | 
  1749 | 
  1750 |     if (!importedAccounts?.length) {
  1751 |       throw new Error(
  1752 |         'Imported account data was not initialized by the Given step.'
  1753 |       );
  1754 |     }
  1755 | 
  1756 | 
  1757 |     await expect(
  1758 |       accountsPage.importResultsHeading
  1759 |     ).toBeVisible();
  1760 | 
  1761 | 
  1762 |     await expect(
  1763 |       accountsPage.importResultsSummary
> 1764 |     ).toHaveText(
       |       ^ Error: expect(locator).toHaveText(expected) failed
  1765 |       `${importedAccounts.length} records were created`
  1766 |     );
  1767 | 
  1768 | 
  1769 |     await expect(
  1770 |       accountsPage.importResultsCreatedTab
  1771 |     ).toBeVisible();
  1772 | 
  1773 | 
  1774 |     for (const account of importedAccounts) {
  1775 |       const accountRow =
  1776 |         accountsPage.getImportedAccountRow(account.Name);
  1777 | 
  1778 | 
  1779 |       await expect(accountRow).toBeVisible();
  1780 |       await expect(accountRow).toContainText(account.Name);
  1781 | 
  1782 | 
  1783 |       if (account['Office Phone']) {
  1784 |         await expect(
  1785 |           accountsPage.getImportedAccountField(
  1786 |             account.Name,
  1787 |             account['Office Phone']
  1788 |           )
  1789 |         ).toBeVisible();
  1790 |       }
  1791 | 
  1792 | 
  1793 |       if (account['Email Address']) {
  1794 |         await expect(
  1795 |           accountsPage.getImportedAccountField(
  1796 |             account.Name,
  1797 |             account['Email Address']
  1798 |           )
  1799 |         ).toBeVisible();
  1800 |       }
  1801 |     }
  1802 | 
  1803 | 
  1804 |     logger.info(
  1805 |       'Imported account names, phone numbers, and email addresses verified in Step 5'
  1806 |     );
  1807 |   }
  1808 | );
  1809 | 
  1810 | 
  1811 | Given(
  1812 |   'the user selects Import Accounts page without a file selected',
  1813 |   async ({ accountsPage, logger }) => {
  1814 |     logger.info(
  1815 |       'Opening Import Accounts page without selecting a file'
  1816 |     );
  1817 | 
  1818 | 
  1819 |     await accountsPage.openImportAccountPage();
  1820 |     await accountsPage.clearAccountImportFile();
  1821 | 
  1822 | 
  1823 |     logger.info(
  1824 |       'Import Accounts page opened without a file selected'
  1825 |     );
  1826 |   }
  1827 | );
  1828 | 
  1829 | 
  1830 | When(
  1831 |   'the user attempts to proceed to the next import step',
  1832 |   async ({ accountsPage, logger }) => {
  1833 |     logger.info(
  1834 |       'Attempting to proceed to the next import step without selecting a file'
  1835 |     );
  1836 | 
  1837 | 
  1838 |     await accountsPage.attemptAccountImportNext();
  1839 |     
  1840 |   }
  1841 | );
  1842 | 
  1843 | 
  1844 | Then(
  1845 |   'the user should remain on the Upload Import File page without starting an import',
  1846 |   async ({ accountsPage, logger }) => {
  1847 |     await expect(
  1848 |       accountsPage.accountImportMissingFileMessage
  1849 |     ).toBeVisible();
  1850 | 
  1851 | 
  1852 |     await expect(
  1853 |       accountsPage.accountImportMissingFileMessage
  1854 |     ).toHaveText(
  1855 |       'Missing required fields: Select a file to upload.'
  1856 |     );
  1857 | 
  1858 | 
  1859 |     await expect(
  1860 |       accountsPage.importAccountPageHeading
  1861 |     ).toBeVisible();
  1862 | 
  1863 | 
  1864 |     await expect(
```