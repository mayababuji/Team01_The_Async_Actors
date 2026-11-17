# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Cancel changes while editing an account
- Location: tests/generated/features/accounts.feature.spec.js:132:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('tabpanel', { name: /^overview$/i }) to be visible

```

```
AggregateError: Failed to delete one or more test-created accounts.
```

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('tabpanel', { name: /^overview$/i }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - navigation [ref=f4e25]:
      - generic [ref=f4e26]:
        - list [ref=f4e29]:
          - listitem [ref=f4e30]:
            - link [ref=f4e31]:
              - /url: "#/home"
        - list [ref=f4e38]:
          - listitem [ref=f4e39]:
            - generic [ref=f4e40]: Accounts
          - listitem [ref=f4e47]:
            - generic [ref=f4e48]: Contacts
          - listitem [ref=f4e55]:
            - generic [ref=f4e56]: Opportunities
        - list [ref=f4e65]:
          - listitem [ref=f4e66]:
            - generic [ref=f4e67]: More
      - generic [ref=f4e69]:
        - list [ref=f4e71]:
          - listitem [ref=f4e72]:
            - generic "Quick Create" [ref=f4e73] [cursor=pointer]
        - list [ref=f4e80]:
          - listitem [ref=f4e81]:
            - generic "Recently Viewed" [ref=f4e82] [cursor=pointer]
        - generic [ref=f4e92]:
          - textbox "Search" [ref=f4e93]:
            - /placeholder: Search...
          - button "Search" [ref=f4e95] [cursor=pointer]
      - list [ref=f4e105]:
        - listitem [ref=f4e106]
    - generic [ref=f4e117]:
      - generic [ref=f4e118]: ACCOUNTS
      - separator [ref=f4e125]
      - generic [ref=f4e128]:
        - generic [ref=f4e130]:
          - generic [ref=f4e134]:
            - list [ref=f4e135]:
              - listitem [ref=f4e136]:
                - link [ref=f4e137]:
                  - /url: ""
              - listitem [ref=f4e138]:
                - link [ref=f4e139]:
                  - /url: ""
              - listitem [ref=f4e140]:
                - link [ref=f4e141]:
                  - /url: ""
            - generic [ref=f4e145]:
              - generic [ref=f4e146]:
                - generic [ref=f4e148]:
                  - strong [ref=f4e150]
                  - button [ref=f4e155] [cursor=pointer]
                - generic [ref=f4e167]:
                  - strong [ref=f4e169]
                  - button [ref=f4e174] [cursor=pointer]
              - generic [ref=f4e185]:
                - generic [ref=f4e187]:
                  - strong [ref=f4e189]
                  - button [ref=f4e194] [cursor=pointer]
                - generic [ref=f4e206]:
                  - strong [ref=f4e208]
                  - button [ref=f4e213] [cursor=pointer]
              - generic [ref=f4e224]:
                - generic [ref=f4e226]:
                  - strong [ref=f4e228]
                  - button [ref=f4e233] [cursor=pointer]
                - generic [ref=f4e245]:
                  - strong [ref=f4e247]
                  - button [ref=f4e252] [cursor=pointer]
              - generic [ref=f4e263]:
                - generic [ref=f4e265]:
                  - strong [ref=f4e267]
                  - button [ref=f4e272] [cursor=pointer]
                - generic [ref=f4e284]:
                  - strong [ref=f4e286]
                  - button [ref=f4e291] [cursor=pointer]
              - generic [ref=f4e302]:
                - generic [ref=f4e304]:
                  - strong [ref=f4e306]
                  - button [ref=f4e311] [cursor=pointer]
                - generic [ref=f4e323]:
                  - strong [ref=f4e325]
                  - button [ref=f4e330] [cursor=pointer]
              - generic [ref=f4e341]:
                - generic [ref=f4e343]:
                  - strong [ref=f4e345]
                  - button [ref=f4e350] [cursor=pointer]
                - generic [ref=f4e362]:
                  - strong [ref=f4e364]
                  - button [ref=f4e369] [cursor=pointer]
              - generic [ref=f4e380]:
                - generic [ref=f4e382]:
                  - strong [ref=f4e384]
                  - button [ref=f4e389] [cursor=pointer]
                - generic [ref=f4e401]:
                  - strong [ref=f4e403]
                  - button [ref=f4e408] [cursor=pointer]
          - heading "Relationships Activities - History - Documents -" [ref=f4e425]:
            - generic [ref=f4e426]:
              - generic [ref=f4e427]: Relationships
              - generic [ref=f4e430]:
                - generic [ref=f4e431]:
                  - generic [ref=f4e435] [cursor=pointer]:
                    - generic [ref=f4e446]: Activities
                    - generic [ref=f4e449]: "-"
                  - generic [ref=f4e454] [cursor=pointer]:
                    - generic [ref=f4e466]: History
                    - generic [ref=f4e469]: "-"
                  - generic [ref=f4e474] [cursor=pointer]:
                    - generic [ref=f4e488]: Documents
                    - generic [ref=f4e491]: "-"
                - generic [ref=f4e494] [cursor=pointer]
        - generic [ref=f4e500]:
          - generic [ref=f4e505]: Closed Per Year
          - generic [ref=f4e552]:
            - generic [ref=f4e553]: Timeline
            - generic [ref=f4e564]:
              - paragraph [ref=f4e573]
              - paragraph [ref=f4e596]
              - paragraph [ref=f4e619]
              - paragraph [ref=f4e642]
              - paragraph [ref=f4e665]
              - paragraph [ref=f4e688]
  - generic [ref=f4e705]:
    - generic [ref=f4e706]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f4e707]: Back To Top
```

# Test source

```ts
  779 |   getAccountSearchNoResultsMessage(expectedMessage) {
  780 |     return this.searchResultsFrame.getByText(expectedMessage, {
  781 |       exact: true
  782 |     });
  783 |   }
  784 | 
  785 | 
  786 |   // --------------------------------------------------
  787 |   // Accounts list
  788 |   // --------------------------------------------------
  789 | 
  790 | 
  791 |   getAccountListLink(accountName) {
  792 |     return this.page.getByRole('link', {
  793 |       name: accountName,
  794 |       exact: true
  795 |     });
  796 |   }
  797 | 
  798 | 
  799 |   async openAccountFromList(accountName) {
  800 |     await this.getAccountListLink(accountName).click();
  801 |   }
  802 | 
  803 | 
  804 |   // --------------------------------------------------
  805 |   // Recently Viewed
  806 |   // --------------------------------------------------
  807 | 
  808 | 
  809 |   async openAccountsRecentlyViewed() {
  810 |     await this.hoverAccountsModule();
  811 |     await this.accountsRecentlyViewedTrigger.click();
  812 |   }
  813 | 
  814 | 
  815 |   getRecentlyViewedAccount(accountName) {
  816 |     return this.accountsRecentlyViewedPanel.getByText(
  817 |       accountName,
  818 |       { exact: true }
  819 |     );
  820 |   }
  821 | 
  822 | 
  823 |   // --------------------------------------------------
  824 |   // Test-data cleanup
  825 |   // --------------------------------------------------
  826 | 
  827 | 
  828 |   async deleteAccountByUrl(recordUrl) {
  829 |     const target = new URL(recordUrl);
  830 |     const current = new URL(this.page.url());
  831 | 
  832 | 
  833 |     if (target.origin !== current.origin) {
  834 |       throw new Error(
  835 |         `Refusing cleanup on a different origin: ${target.origin}`
  836 |       );
  837 |     }
  838 | 
  839 | 
  840 |     const recordPattern =
  841 |       /^#\/accounts\/record\/([^/?#]+)(?:[/?#]|$)/;
  842 | 
  843 | 
  844 |     const targetMatch = target.hash.match(recordPattern);
  845 | 
  846 | 
  847 |     if (!targetMatch) {
  848 |       throw new Error(
  849 |         `Cleanup requires an account detail URL: ${recordUrl}`
  850 |       );
  851 |     }
  852 | 
  853 | 
  854 |     const recordId = targetMatch[1];
  855 |     const currentMatch = current.hash.match(recordPattern);
  856 | 
  857 | 
  858 |     const isTargetRecord =
  859 |       current.origin === target.origin &&
  860 |       currentMatch?.[1] === recordId;
  861 | 
  862 | 
  863 |     if (!isTargetRecord) {
  864 |       await this.page.goto(recordUrl);
  865 |     }
  866 | 
  867 | 
  868 |     await this.page.waitForURL(url => {
  869 |       const match = url.hash.match(recordPattern);
  870 | 
  871 | 
  872 |       return (
  873 |         url.origin === target.origin &&
  874 |         match?.[1] === recordId
  875 |       );
  876 |     });
  877 | 
  878 | 
> 879 |     await this.overviewPanel.waitFor({
      |                              ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
  880 |       state: 'visible'
  881 |     });
  882 | 
  883 | 
  884 |     await this.recordActionsButton.waitFor({
  885 |       state: 'visible'
  886 |     });
  887 | 
  888 | 
  889 |     const expanded =
  890 |       await this.recordActionsButton.getAttribute(
  891 |         'aria-expanded'
  892 |       );
  893 | 
  894 | 
  895 |     if (expanded !== 'true') {
  896 |       await this.recordActionsButton.click();
  897 |     }
  898 | 
  899 | 
  900 |     await this.recordActionsMenu.waitFor({
  901 |       state: 'visible'
  902 |     });
  903 | 
  904 | 
  905 |     await this.deleteAccountAction.click();
  906 | 
  907 | 
  908 |     await this.deleteAccountConfirmationMessage.waitFor({
  909 |       state: 'visible'
  910 |     });
  911 | 
  912 | 
  913 |     await this.confirmDeleteAccountButton.click();
  914 | 
  915 | 
  916 |     await this.deleteAccountConfirmationMessage.waitFor({
  917 |       state: 'hidden'
  918 |     });
  919 | 
  920 | 
  921 |     await this.page.waitForURL(
  922 |       /#\/accounts\/?(?:\?.*)?$/
  923 |     );
  924 | 
  925 | 
  926 |     await this.viewAccountPageHeading.waitFor({
  927 |       state: 'visible'
  928 |     });
  929 |   }
  930 | 
  931 | 
  932 |   // --------------------------------------------------
  933 |   // Sorting
  934 |   // --------------------------------------------------
  935 | 
  936 | 
  937 |   async clickAccountNameSortButton() {
  938 |     await this.accountNameSortButton.click();
  939 |   }
  940 | 
  941 | 
  942 |   async getDisplayedAccountNames() {
  943 |     const names =
  944 |       await this.accountNameListLinks.allTextContents();
  945 | 
  946 | 
  947 |     return names.map(name => name.trim());
  948 |   }
  949 | 
  950 | 
  951 |   async getNameSortIconClass() {
  952 |     return await this.accountNameSortIcon.getAttribute(
  953 |       'class'
  954 |     );
  955 |   }
  956 | 
  957 | 
  958 |   async isNameSortedDescending() {
  959 |     const iconClass =
  960 |       await this.getNameSortIconClass();
  961 | 
  962 | 
  963 |     return /(?:^|\s)image-sort_descend(?:\s|$)/.test(
  964 |       iconClass ?? ''
  965 |     );
  966 |   }
  967 | 
  968 | 
  969 |   async waitForNameSortDescending() {
  970 |     await this.page.waitForFunction(() => {
  971 |       const icon = document.querySelector(
  972 |         'th.cdk-column-name scrm-sort-button a.sort-button svg-icon'
  973 |       );
  974 | 
  975 | 
  976 |       return icon?.classList.contains(
  977 |         'image-sort_descend'
  978 |       );
  979 |     });
```