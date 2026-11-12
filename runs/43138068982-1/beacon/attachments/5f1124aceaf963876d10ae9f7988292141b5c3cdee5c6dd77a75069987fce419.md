# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Search for a non-existing account
- Location: tests/generated/features/accounts.feature.spec.js:96:3

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
- text: ACCOUNTS
- group:
  - button "Filter"
- button "Insights"
- separator
- button "Bulk Action" [disabled]
- button "Columns"
- button "Navigate to first page"
- button "Previous page"
- text: (1 - 20 of 56)
- button "Next page"
- button "Navigate to last page"
- table:
  - rowgroup:
    - row "Name City Billing Country Phone":
      - columnheader
      - columnheader
      - columnheader "Name"
      - columnheader "City"
      - columnheader "Billing Country"
      - columnheader "Phone"
      - columnheader
  - rowgroup:
    - row "24/7 Couriers San Jose USA (049) 925-3469":
      - cell
      - cell:
        - button
      - cell "24/7 Couriers":
        - link "24/7 Couriers":
          - /url: "#/accounts/record/098ad80f-a52f-4b42-9d80-a24c33b37bae?offset=1"
      - cell "San Jose"
      - cell "USA"
      - cell "(049) 925-3469":
        - link "(049) 925-3469":
          - /url: tel:(049)925-3469
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "360 Vacations San Mateo USA (503) 507-4714":
      - cell
      - cell:
        - button
      - cell "360 Vacations":
        - link "360 Vacations":
          - /url: "#/accounts/record/ccb97bf3-5b67-4aa5-aedf-7d783ebb94d3?offset=2"
      - cell "San Mateo"
      - cell "USA"
      - cell "(503) 507-4714":
        - link "(503) 507-4714":
          - /url: tel:(503)507-4714
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "5D Investments Los Angeles USA (404) 043-0225":
      - cell
      - cell:
        - button
      - cell "5D Investments":
        - link "5D Investments":
          - /url: "#/accounts/record/432fba25-0d05-4482-8f49-7db8c658117a?offset=3"
      - cell "Los Angeles"
      - cell "USA"
      - cell "(404) 043-0225":
        - link "(404) 043-0225":
          - /url: tel:(404)043-0225
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "A.D. Importing Company Inc San Mateo USA (904) 583-8739":
      - cell
      - cell:
        - button
      - cell "A.D. Importing Company Inc":
        - link "A.D. Importing Company Inc":
          - /url: "#/accounts/record/d3579493-8d49-4979-929b-874050396dbf?offset=4"
      - cell "San Mateo"
      - cell "USA"
      - cell "(904) 583-8739":
        - link "(904) 583-8739":
          - /url: tel:(904)583-8739
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "A.G. Parr PLC Kansas City USA (696) 905-7007":
      - cell
      - cell:
        - button
      - cell "A.G. Parr PLC":
        - link "A.G. Parr PLC":
          - /url: "#/accounts/record/5a6d9a75-3d26-4406-a4b0-be2a9704a8ae?offset=5"
      - cell "Kansas City"
      - cell "USA"
      - cell "(696) 905-7007":
        - link "(696) 905-7007":
          - /url: tel:(696)905-7007
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "AB Drivers Limited Denver USA (279) 362-6344":
      - cell
      - cell:
        - button
      - cell "AB Drivers Limited":
        - link "AB Drivers Limited":
          - /url: "#/accounts/record/7e9689c0-62ee-48ec-b510-328612813e0c?offset=6"
      - cell "Denver"
      - cell "USA"
      - cell "(279) 362-6344":
        - link "(279) 362-6344":
          - /url: tel:(279)362-6344
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Aim Capital Inc Salt Lake City USA (989) 248-3141":
      - cell
      - cell:
        - button
      - cell "Aim Capital Inc":
        - link "Aim Capital Inc":
          - /url: "#/accounts/record/55cdadbb-0a48-42df-8906-2720fe654cb3?offset=7"
      - cell "Salt Lake City"
      - cell "USA"
      - cell "(989) 248-3141":
        - link "(989) 248-3141":
          - /url: tel:(989)248-3141
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Air Safety Inc Hartford USA (209) 808-1770":
      - cell
      - cell:
        - button
      - cell "Air Safety Inc":
        - link "Air Safety Inc":
          - /url: "#/accounts/record/e60fcc6f-867f-4c84-9524-368cf45430ba?offset=8"
      - cell "Hartford"
      - cell "USA"
      - cell "(209) 808-1770":
        - link "(209) 808-1770":
          - /url: tel:(209)808-1770
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Airline Maintenance Co Austin USA (809) 694-9940":
      - cell
      - cell:
        - button
      - cell "Airline Maintenance Co":
        - link "Airline Maintenance Co":
          - /url: "#/accounts/record/e771992f-6d1e-40bb-9923-f165a250cfe6?offset=9"
      - cell "Austin"
      - cell "USA"
      - cell "(809) 694-9940":
        - link "(809) 694-9940":
          - /url: tel:(809)694-9940
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Anytime Air Support Inc Sunnyvale USA (753) 588-6170":
      - cell
      - cell:
        - button
      - cell "Anytime Air Support Inc":
        - link "Anytime Air Support Inc":
          - /url: "#/accounts/record/7c39aae9-6e4c-48ca-b8a8-53d3f13d6451?offset=10"
      - cell "Sunnyvale"
      - cell "USA"
      - cell "(753) 588-6170":
        - link "(753) 588-6170":
          - /url: tel:(753)588-6170
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Arts & Crafts Inc Kansas City USA (923) 894-6573":
      - cell
      - cell:
        - button
      - cell "Arts & Crafts Inc":
        - link "Arts & Crafts Inc":
          - /url: "#/accounts/record/9e65831b-4884-4532-be22-a4eb69c32895?offset=11"
      - cell "Kansas City"
      - cell "USA"
      - cell "(923) 894-6573":
        - link "(923) 894-6573":
          - /url: tel:(923)894-6573
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "AtoZ Co Ltd Denver USA (938) 468-6090":
      - cell
      - cell:
        - button
      - cell "AtoZ Co Ltd":
        - link "AtoZ Co Ltd":
          - /url: "#/accounts/record/65db8475-94c5-4210-a584-cb0abbcc7073?offset=12"
      - cell "Denver"
      - cell "USA"
      - cell "(938) 468-6090":
        - link "(938) 468-6090":
          - /url: tel:(938)468-6090
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Avery Software Co Austin USA (720) 230-8973":
      - cell
      - cell:
        - button
      - cell "Avery Software Co":
        - link "Avery Software Co":
          - /url: "#/accounts/record/ea4521a7-d970-4807-9dae-7844c5363660?offset=13"
      - cell "Austin"
      - cell "USA"
      - cell "(720) 230-8973":
        - link "(720) 230-8973":
          - /url: tel:(720)230-8973
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "B.C. Investing International Phoenix USA (028) 490-5377":
      - cell
      - cell:
        - button
      - cell "B.C. Investing International":
        - link "B.C. Investing International":
          - /url: "#/accounts/record/cf29cde9-bddd-4070-8c4e-de7094dace2c?offset=14"
      - cell "Phoenix"
      - cell "USA"
      - cell "(028) 490-5377":
        - link "(028) 490-5377":
          - /url: tel:(028)490-5377
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "B.H. Edwards Inc Kansas City USA (427) 794-8519":
      - cell
      - cell:
        - button
      - cell "B.H. Edwards Inc":
        - link "B.H. Edwards Inc":
          - /url: "#/accounts/record/b9d9c78e-ce8b-4b2b-96cb-1a55d7da4c19?offset=15"
      - cell "Kansas City"
      - cell "USA"
      - cell "(427) 794-8519":
        - link "(427) 794-8519":
          - /url: tel:(427)794-8519
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Bay Funding Co Atlanta USA (950) 451-2834":
      - cell
      - cell:
        - button
      - cell "Bay Funding Co":
        - link "Bay Funding Co":
          - /url: "#/accounts/record/38d8f35f-2a13-40cc-9b5c-9add24ab921b?offset=16"
      - cell "Atlanta"
      - cell "USA"
      - cell "(950) 451-2834":
        - link "(950) 451-2834":
          - /url: tel:(950)451-2834
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Calm Sailing Inc Austin USA (754) 150-9056":
      - cell
      - cell:
        - button
      - cell "Calm Sailing Inc":
        - link "Calm Sailing Inc":
          - /url: "#/accounts/record/c6810a19-62fd-4653-9460-1d109a4a05cb?offset=17"
      - cell "Austin"
      - cell "USA"
      - cell "(754) 150-9056":
        - link "(754) 150-9056":
          - /url: tel:(754)150-9056
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Cancel Edit Test Account":
      - cell
      - cell:
        - button
      - cell "Cancel Edit Test Account":
        - link "Cancel Edit Test Account":
          - /url: "#/accounts/record/4d9bc472-d2fb-497a-aa04-35d7e01cf42e?offset=18"
      - cell
      - cell
      - cell:
        - link:
          - /url: ""
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Chandler Logistics Inc Kansas City USA (662) 328-5916":
      - cell
      - cell:
        - button
      - cell "Chandler Logistics Inc":
        - link "Chandler Logistics Inc":
          - /url: "#/accounts/record/af1e48ca-c9e9-4a67-b0ae-ea7afa5d3bf8?offset=19"
      - cell "Kansas City"
      - cell "USA"
      - cell "(662) 328-5916":
        - link "(662) 328-5916":
          - /url: tel:(662)328-5916
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
    - row "Cloud Cover Trust San Jose USA (780) 119-7817":
      - cell
      - cell:
        - button
      - cell "Cloud Cover Trust":
        - link "Cloud Cover Trust":
          - /url: "#/accounts/record/a7120a00-d873-4ef8-9d15-7650265e268c?offset=20"
      - cell "San Jose"
      - cell "USA"
      - cell "(780) 119-7817":
        - link "(780) 119-7817":
          - /url: tel:(780)119-7817
      - cell:
        - button "Log Call"
        - button "Schedule Meeting"
        - button "Create Task"
        - button "Compose Email"
- button "Bulk Action" [disabled]
- button "Columns"
- button "Navigate to first page"
- button "Previous page"
- text: (1 - 20 of 56)
- button "Next page"
- button "Navigate to last page"
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  801  | 
  802  |     await expect(matchingAccount).toBeVisible();
  803  | 
  804  | 
  805  |     await expect(matchingAccount).toHaveText(
  806  |       account.expectedResult
  807  |     );
  808  | 
  809  | 
  810  |     logger.info('Matching account displayed', {
  811  |       scenario: account.scenario,
  812  |       accountName: account.expectedResult
  813  |     });
  814  |   }
  815  | );
  816  | 
  817  | 
  818  | // --------------------------------------------------
  819  | // Search by partial account name
  820  | // --------------------------------------------------
  821  | 
  822  | 
  823  | When(
  824  |   'the user searches with a partial existing account name {string}',
  825  |   async ({ accountsPage, logger }, scenarioKey) => {
  826  |     const account = getAccountDataByScenario(scenarioKey);
  827  | 
  828  | 
  829  |     const searchText = String(
  830  |       account.searchText ?? ''
  831  |     ).trim();
  832  | 
  833  | 
  834  |     if (!searchText) {
  835  |       throw new Error(
  836  |         `Missing Excel SearchText for scenario "${scenarioKey}".`
  837  |       );
  838  |     }
  839  | 
  840  | 
  841  |     if (
  842  |       searchText === account.name ||
  843  |       !account.name.includes(searchText)
  844  |     ) {
  845  |       throw new Error(
  846  |         `SearchText must be a non-empty partial value of Name for scenario "${scenarioKey}".`
  847  |       );
  848  |     }
  849  | 
  850  | 
  851  |     logger.info('Searching Accounts with a partial name', {
  852  |       scenario: account.scenario,
  853  |       accountName: account.name,
  854  |       searchText
  855  |     });
  856  | 
  857  | 
  858  |     await accountsPage.searchAccountsByName(searchText);
  859  |   }
  860  | );
  861  | 
  862  | 
  863  | // --------------------------------------------------
  864  | // Search for a non-existing account
  865  | // --------------------------------------------------
  866  | 
  867  | 
  868  | When(
  869  |   'the user searches for a non-existing account name',
  870  |   async ({ accountsPage, logger }) => {
  871  |     const account = getAccountDataByScenario(
  872  |       'search_non_existing_account'
  873  |     );
  874  | 
  875  | 
  876  |     logger.info('Searching for a non-existing account', {
  877  |       scenario: account.scenario,
  878  |       accountName: account.name
  879  |     });
  880  | 
  881  | 
  882  |     await accountsPage.searchAccountsByName(account.name);
  883  |   }
  884  | );
  885  | 
  886  | 
  887  | Then(
  888  |   'a no-results message should be displayed',
  889  |   async ({ accountsPage, logger }) => {
  890  |     const account = getAccountDataByScenario(
  891  |       'search_non_existing_account'
  892  |     );
  893  | 
  894  | 
  895  |     const noResultsMessage =
  896  |       accountsPage.getAccountSearchNoResultsMessage(
  897  |         account.expectedResult
  898  |       );
  899  | 
  900  | 
> 901  |     await expect(noResultsMessage).toBeVisible();
       |                                    ^ Error: expect(locator).toBeVisible() failed
  902  | 
  903  | 
  904  |     await expect(noResultsMessage).toHaveText(
  905  |       account.expectedResult
  906  |     );
  907  | 
  908  | 
  909  |     logger.info('No-results message verified', {
  910  |       scenario: account.scenario,
  911  |       accountName: account.name,
  912  |       expectedMessage: account.expectedResult
  913  |     });
  914  |   }
  915  | );
  916  | 
  917  | 
  918  | // --------------------------------------------------
  919  | // Open account from the list
  920  | // --------------------------------------------------
  921  | 
  922  | 
  923  | Given(
  924  |   'an account is available on the View Accounts page',
  925  |   async ({
  926  |     accountsPage,
  927  |     logger,
  928  |     accountListTestData,
  929  |     accountCleanup
  930  |   }) => {
  931  |     const account = getAccountDataByScenario(
  932  |       'open_account_from_list'
  933  |     );
  934  | 
  935  | 
  936  |     accountListTestData.account = account;
  937  | 
  938  | 
  939  |     const recordUrl =
  940  |       await accountsPage.createAccount(account);
  941  | 
  942  | 
  943  |     accountCleanup.register(recordUrl);
  944  |     accountListTestData.recordUrl = recordUrl;
  945  | 
  946  | 
  947  |     await accountsPage
  948  |       .getAccountDetailName(account.name)
  949  |       .waitFor({
  950  |         state: 'visible'
  951  |       });
  952  | 
  953  | 
  954  |     await accountsPage.openViewAccountPage();
  955  | 
  956  | 
  957  |     await accountsPage
  958  |       .getAccountListLink(account.name)
  959  |       .waitFor({
  960  |         state: 'visible'
  961  |       });
  962  | 
  963  | 
  964  |     logger.info('Account available on View Accounts page', {
  965  |       scenario: account.scenario,
  966  |       accountName: account.name,
  967  |       recordUrl
  968  |     });
  969  |   }
  970  | );
  971  | 
  972  | 
  973  | When(
  974  |   'the user selects an account name from the list',
  975  |   async ({ accountsPage, logger, accountListTestData }) => {
  976  |     const account = accountListTestData.account;
  977  | 
  978  | 
  979  |     if (!account) {
  980  |       throw new Error(
  981  |         'Account test data was not initialized by the Given step.'
  982  |       );
  983  |     }
  984  | 
  985  | 
  986  |     await accountsPage.openAccountFromList(account.name);
  987  | 
  988  | 
  989  |     logger.info('Selected account from Accounts list', {
  990  |       accountName: account.name
  991  |     });
  992  |   }
  993  | );
  994  | 
  995  | 
  996  | Then(
  997  |   'the selected account detail page should be displayed',
  998  |   async ({
  999  |     accountsPage,
  1000 |     logger,
  1001 |     accountListTestData
```