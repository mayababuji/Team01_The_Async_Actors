# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Delete an existing account
- Location: tests/generated/features/accounts.feature.spec.js:168:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('scrm-classic-view-ui iframe').contentFrame().getByText('No results matching your search criteria. Try broadening your search.', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('scrm-classic-view-ui iframe').contentFrame().getByText('No results matching your search criteria. Try broadening your search.', { exact: true }) with timeout 20000ms
  - waiting for locator('scrm-classic-view-ui iframe').contentFrame().getByText('No results matching your search criteria. Try broadening your search.', { exact: true })

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
    - listitem: Leads
    - listitem: Quotes
    - listitem: Calendar
    - listitem: Documents
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
  1944 | 
  1945 | 
  1946 |     logger.info(
  1947 |       'Created account for deletion',
  1948 |       {
  1949 |         scenario: account.scenario,
  1950 |         accountName: account.name,
  1951 |         recordUrl
  1952 |       }
  1953 |     );
  1954 |   }
  1955 | );
  1956 | 
  1957 | 
  1958 | When(
  1959 |   'the user deletes the account and confirms the deletion',
  1960 |   async ({
  1961 |     accountsPage,
  1962 |     accountListTestData,
  1963 |     accountCleanup,
  1964 |     logger
  1965 |   }) => {
  1966 |     const {
  1967 |       account,
  1968 |       recordUrl
  1969 |     } = accountListTestData;
  1970 | 
  1971 | 
  1972 |     if (!account || !recordUrl) {
  1973 |       throw new Error(
  1974 |         'Account deletion requires an account ' +
  1975 |         'created by the Given step.'
  1976 |       );
  1977 |     }
  1978 | 
  1979 | 
  1980 |     await accountsPage.deleteAccountByUrl(
  1981 |       recordUrl
  1982 |     );
  1983 | 
  1984 | 
  1985 |     accountCleanup.unregister(recordUrl);
  1986 | 
  1987 | 
  1988 |     logger.info(
  1989 |       'Deleted the test-created account',
  1990 |       {
  1991 |         scenario: account.scenario,
  1992 |         accountName: account.name,
  1993 |         recordUrl
  1994 |       }
  1995 |     );
  1996 |   }
  1997 | );
  1998 | 
  1999 | 
  2000 | Then(
  2001 |   'the deleted account should no longer appear in search results',
  2002 |   async ({
  2003 |     page,
  2004 |     accountsPage,
  2005 |     accountListTestData,
  2006 |     logger
  2007 |   }) => {
  2008 |     const {
  2009 |       account,
  2010 |       recordUrl
  2011 |     } = accountListTestData;
  2012 | 
  2013 | 
  2014 |     if (!account || !recordUrl) {
  2015 |       throw new Error(
  2016 |         'Account data or record URL is missing.'
  2017 |       );
  2018 |     }
  2019 | 
  2020 | 
  2021 |     await expect(page).toHaveURL(
  2022 |       /#\/accounts\/?(?:\?.*)?$/
  2023 |     );
  2024 | 
  2025 | 
  2026 |     await expect(
  2027 |       accountsPage.viewAccountPageHeading
  2028 |     ).toBeVisible();
  2029 | 
  2030 | 
  2031 |     await accountsPage.searchAccountsByName(
  2032 |       account.name
  2033 |     );
  2034 | 
  2035 | 
  2036 |     const noResultsMessage =
  2037 |       accountsPage.getAccountSearchNoResultsMessage(
  2038 |         account.expectedResult
  2039 |       );
  2040 | 
  2041 | 
  2042 |     await expect(
  2043 |       noResultsMessage
> 2044 |     ).toBeVisible();
       |       ^ Error: expect(locator).toBeVisible() failed
  2045 | 
  2046 | 
  2047 |     await expect(
  2048 |       noResultsMessage
  2049 |     ).toHaveText(
  2050 |       account.expectedResult
  2051 |     );
  2052 | 
  2053 | 
  2054 |     await expect(
  2055 |       accountsPage.getAccountSearchResult(
  2056 |         account.name
  2057 |       )
  2058 |     ).toHaveCount(0);
  2059 | 
  2060 | 
  2061 |     logger.info(
  2062 |       'Deleted account is absent from search results',
  2063 |       {
  2064 |         scenario: account.scenario,
  2065 |         accountName: account.name,
  2066 |         deletedRecordUrl: recordUrl
  2067 |       }
  2068 |     );
  2069 |   }
  2070 | );
```