# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Search for an account using partial account name
- Location: tests/generated/features/accounts.feature.spec.js:90:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('scrm-classic-view-ui iframe').contentFrame().locator('.unified-search-table-wrapper').getByRole('link', { name: 'Numpy Account Partial Search Test', exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('scrm-classic-view-ui iframe').contentFrame().locator('.unified-search-table-wrapper').getByRole('link', { name: 'Numpy Account Partial Search Test', exact: true }) with timeout 20000ms
  - waiting for locator('scrm-classic-view-ui iframe').contentFrame().locator('.unified-search-table-wrapper').getByRole('link', { name: 'Numpy Account Partial Search Test', exact: true })

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
  702 |     logger.info('Create Account form retained entered data', {
  703 |       scenario: account.scenario,
  704 |       accountName: account.name,
  705 |       email: account.email
  706 |     });
  707 |   }
  708 | );
  709 | 
  710 | 
  711 | // --------------------------------------------------
  712 | // Shared View Accounts setup
  713 | // --------------------------------------------------
  714 | 
  715 | 
  716 | Given(
  717 |   'the user is on the View Accounts page',
  718 |   async ({ accountsPage, logger }) => {
  719 |     await accountsPage.openViewAccountPage();
  720 | 
  721 | 
  722 |     logger.info('View Accounts page opened');
  723 |   }
  724 | );
  725 | 
  726 | 
  727 | // --------------------------------------------------
  728 | // Search prerequisite and cleanup registration
  729 | // --------------------------------------------------
  730 | 
  731 | 
  732 | Given(
  733 |   'an account exists for the account name search {string}',
  734 |   async ({
  735 |     accountsPage,
  736 |     logger,
  737 |     accountCleanup
  738 |   }, scenarioKey) => {
  739 |     const account = getAccountDataByScenario(scenarioKey);
  740 | 
  741 | 
  742 |     const recordUrl =
  743 |       await accountsPage.createAccount(account);
  744 | 
  745 | 
  746 |     accountCleanup.register(recordUrl);
  747 | 
  748 | 
  749 |     await accountsPage
  750 |       .getAccountDetailName(account.name)
  751 |       .waitFor({
  752 |         state: 'visible'
  753 |       });
  754 | 
  755 | 
  756 |     logger.info('Created account for account name search', {
  757 |       scenario: account.scenario,
  758 |       accountName: account.name,
  759 |       recordUrl
  760 |     });
  761 | 
  762 | 
  763 |     await accountsPage.openViewAccountPage();
  764 |   }
  765 | );
  766 | 
  767 | 
  768 | // --------------------------------------------------
  769 | // Search by full account name
  770 | // --------------------------------------------------
  771 | 
  772 | 
  773 | When(
  774 |   'the user searches for an existing account by name {string}',
  775 |   async ({ accountsPage, logger }, scenarioKey) => {
  776 |     const account = getAccountDataByScenario(scenarioKey);
  777 | 
  778 | 
  779 |     logger.info('Searching Accounts by name', {
  780 |       scenario: account.scenario,
  781 |       accountName: account.name
  782 |     });
  783 | 
  784 | 
  785 |     await accountsPage.searchAccountsByName(account.name);
  786 |   }
  787 | );
  788 | 
  789 | 
  790 | Then(
  791 |   'the matching account should be displayed for {string}',
  792 |   async ({ accountsPage, logger }, scenarioKey) => {
  793 |     const account = getAccountDataByScenario(scenarioKey);
  794 | 
  795 | 
  796 |     const matchingAccount =
  797 |       accountsPage.getAccountSearchResult(
  798 |         account.expectedResult
  799 |       );
  800 | 
  801 | 
> 802 |     await expect(matchingAccount).toBeVisible();
      |                                   ^ Error: expect(locator).toBeVisible() failed
  803 | 
  804 | 
  805 |     await expect(matchingAccount).toHaveText(
  806 |       account.expectedResult
  807 |     );
  808 | 
  809 | 
  810 |     logger.info('Matching account displayed', {
  811 |       scenario: account.scenario,
  812 |       accountName: account.expectedResult
  813 |     });
  814 |   }
  815 | );
  816 | 
  817 | 
  818 | // --------------------------------------------------
  819 | // Search by partial account name
  820 | // --------------------------------------------------
  821 | 
  822 | 
  823 | When(
  824 |   'the user searches with a partial existing account name {string}',
  825 |   async ({ accountsPage, logger }, scenarioKey) => {
  826 |     const account = getAccountDataByScenario(scenarioKey);
  827 | 
  828 | 
  829 |     const searchText = String(
  830 |       account.searchText ?? ''
  831 |     ).trim();
  832 | 
  833 | 
  834 |     if (!searchText) {
  835 |       throw new Error(
  836 |         `Missing Excel SearchText for scenario "${scenarioKey}".`
  837 |       );
  838 |     }
  839 | 
  840 | 
  841 |     if (
  842 |       searchText === account.name ||
  843 |       !account.name.includes(searchText)
  844 |     ) {
  845 |       throw new Error(
  846 |         `SearchText must be a non-empty partial value of Name for scenario "${scenarioKey}".`
  847 |       );
  848 |     }
  849 | 
  850 | 
  851 |     logger.info('Searching Accounts with a partial name', {
  852 |       scenario: account.scenario,
  853 |       accountName: account.name,
  854 |       searchText
  855 |     });
  856 | 
  857 | 
  858 |     await accountsPage.searchAccountsByName(searchText);
  859 |   }
  860 | );
  861 | 
  862 | 
  863 | // --------------------------------------------------
  864 | // Search for a non-existing account
  865 | // --------------------------------------------------
  866 | 
  867 | 
  868 | When(
  869 |   'the user searches for a non-existing account name',
  870 |   async ({ accountsPage, logger }) => {
  871 |     const account = getAccountDataByScenario(
  872 |       'search_non_existing_account'
  873 |     );
  874 | 
  875 | 
  876 |     logger.info('Searching for a non-existing account', {
  877 |       scenario: account.scenario,
  878 |       accountName: account.name
  879 |     });
  880 | 
  881 | 
  882 |     await accountsPage.searchAccountsByName(account.name);
  883 |   }
  884 | );
  885 | 
  886 | 
  887 | Then(
  888 |   'a no-results message should be displayed',
  889 |   async ({ accountsPage, logger }) => {
  890 |     const account = getAccountDataByScenario(
  891 |       'search_non_existing_account'
  892 |     );
  893 | 
  894 | 
  895 |     const noResultsMessage =
  896 |       accountsPage.getAccountSearchNoResultsMessage(
  897 |         account.expectedResult
  898 |       );
  899 | 
  900 | 
  901 |     await expect(noResultsMessage).toBeVisible();
  902 | 
```