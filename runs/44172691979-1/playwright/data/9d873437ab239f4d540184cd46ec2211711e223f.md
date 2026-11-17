# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Delete an opportunity
- Location: tests/generated/features/opportunities.feature.spec.js:159:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
AggregateError: Failed to delete one or more test-created opportunities.
```

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByText('Are you sure you want to delete this record?', { exact: true }) to be visible

```

```
TimeoutError: page.waitForURL: Timeout 45000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://suite8demo.suiteondemand.com/#/accounts/record/99c87b26-aba1-49c3-b37b-dc81520933fd"
============================================================
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
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e25]:
      - generic [ref=e26]:
        - list [ref=e29]:
          - listitem [ref=e30]:
            - link [ref=e31] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=e38]:
          - listitem [ref=e39]:
            - generic [ref=e40]: Opportunities
          - listitem [ref=e47]:
            - generic [ref=e48]: Accounts
          - listitem [ref=e55]:
            - generic [ref=e56]: Contacts
          - listitem [ref=e63]:
            - generic [ref=e64]: Leads
          - listitem [ref=e71]:
            - generic [ref=e72]: Quotes
          - listitem [ref=e79]:
            - generic [ref=e80]: Calendar
          - listitem [ref=e87]:
            - generic [ref=e88]: Documents
        - list [ref=e97]:
          - listitem [ref=e98]:
            - generic [ref=e99]: More
      - generic [ref=e101]:
        - list [ref=e103]:
          - listitem [ref=e104]:
            - generic "Quick Create" [ref=e105] [cursor=pointer]
        - list [ref=e112]:
          - listitem [ref=e113]:
            - generic "Recently Viewed" [ref=e114] [cursor=pointer]
        - generic [ref=e124]:
          - textbox "Search" [ref=e125]:
            - /placeholder: Search...
          - button "Search" [ref=e127] [cursor=pointer]
        - list [ref=e137]:
          - listitem [ref=e138]:
            - generic [ref=e139] [cursor=pointer]
      - list [ref=e147]:
        - listitem [ref=e148]
    - generic [ref=e159]:
      - generic [ref=e163]:
        - generic [ref=e164]:
          - button [ref=e168] [cursor=pointer]
          - generic [ref=e175]:
            - button [ref=e179] [cursor=pointer]
            - generic [ref=e186]: Numpy Delete Opportunity
        - generic [ref=e192]:
          - button "Edit" [ref=e194] [cursor=pointer]
          - button "Insights" [ref=e197] [cursor=pointer]
          - button "Actions" [ref=e201] [cursor=pointer]
      - separator [ref=e203]
      - generic [ref=e206]:
        - generic [ref=e208]:
          - generic [ref=e212]:
            - tablist [ref=e214]:
              - tab "BASIC" [selected] [ref=e215] [cursor=pointer]
              - tab "OTHER" [ref=e216] [cursor=pointer]
            - tabpanel "BASIC" [ref=e218]:
              - generic [ref=e221]:
                - generic [ref=e222]:
                  - generic [ref=e224]:
                    - strong [ref=e226]:
                      - generic [ref=e227]: OPPORTUNITY NAME
                    - generic [ref=e228]:
                      - generic [ref=e229]: Numpy Delete Opportunity
                      - button [ref=e236] [cursor=pointer]
                  - generic [ref=e248]:
                    - strong [ref=e250]:
                      - generic [ref=e251]: ACCOUNT NAME
                    - generic [ref=e252]:
                      - link "Numpy Delete Opportunity Account" [ref=e258] [cursor=pointer]:
                        - /url: "#/accounts/record/99c87b26-aba1-49c3-b37b-dc81520933fd"
                      - button [ref=e260] [cursor=pointer]
                - generic [ref=e271]:
                  - generic [ref=e273]:
                    - strong [ref=e275]:
                      - generic [ref=e276]: OPPORTUNITY AMOUNT
                    - generic [ref=e277]:
                      - generic [ref=e278]: $7,500.50
                      - button [ref=e292] [cursor=pointer]
                  - generic [ref=e304]:
                    - strong [ref=e306]:
                      - generic [ref=e307]: EXPECTED CLOSE DATE
                    - generic [ref=e308]:
                      - generic [ref=e309]: 2027-03-15
                      - button [ref=e316] [cursor=pointer]
                - generic [ref=e327]:
                  - generic [ref=e329]:
                    - strong [ref=e331]:
                      - generic [ref=e332]: SALES STAGE
                    - generic [ref=e333]:
                      - generic [ref=e334]: Negotiation/Review
                      - button [ref=e341] [cursor=pointer]
                  - generic [ref=e353]:
                    - strong [ref=e355]:
                      - generic [ref=e356]: TYPE
                    - button [ref=e360] [cursor=pointer]
                - generic [ref=e371]:
                  - generic [ref=e373]:
                    - strong [ref=e375]:
                      - generic [ref=e376]: PROBABILITY (%)
                    - button [ref=e380] [cursor=pointer]
                  - generic [ref=e392]:
                    - strong [ref=e394]:
                      - generic [ref=e395]: LEAD SOURCE
                    - button [ref=e399] [cursor=pointer]
                - generic [ref=e410]:
                  - generic [ref=e412]:
                    - strong [ref=e414]:
                      - generic [ref=e415]: NEXT STEP
                    - button [ref=e419] [cursor=pointer]
                  - generic [ref=e431]:
                    - strong [ref=e433]:
                      - generic [ref=e434]: CAMPAIGN
                    - generic [ref=e435]:
                      - generic [ref=e436]:
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - link:
                                  - /url: "#/campaigns/record"
                      - button [ref=e438] [cursor=pointer]
                - generic [ref=e451]:
                  - strong [ref=e453]:
                    - generic [ref=e454]: DESCRIPTION
                  - button [ref=e458] [cursor=pointer]
                - generic [ref=e472]:
                  - strong [ref=e474]:
                    - generic [ref=e475]: ASSIGNED TO
                  - generic [ref=e476]:
                    - link "Will Westin" [ref=e482] [cursor=pointer]:
                      - /url: "#/users/record/seed_will_id"
                    - button [ref=e484] [cursor=pointer]
          - heading "Relationships Activities 0 History 0 Documents 0 Contacts 0" [ref=e501]:
            - generic [ref=e502]:
              - generic [ref=e503]: Relationships
              - generic [ref=e506]:
                - generic [ref=e507]:
                  - generic [ref=e511] [cursor=pointer]:
                    - generic [ref=e522]: Activities
                    - generic [ref=e525]: "0"
                  - generic [ref=e535] [cursor=pointer]:
                    - generic [ref=e547]: History
                    - generic [ref=e550]: "0"
                  - generic [ref=e560] [cursor=pointer]:
                    - generic [ref=e574]: Documents
                    - generic [ref=e577]: "0"
                  - generic [ref=e587] [cursor=pointer]:
                    - generic [ref=e598]: Contacts
                    - generic [ref=e601]: "0"
                - generic [ref=e609] [cursor=pointer]
        - generic [ref=e615]:
          - generic [ref=e622]:
            - generic [ref=e623]: < 1
            - generic [ref=e629]: DAY(S) THIS OPPORTUNITY HAS BEEN AT THIS SALES STAGE
          - generic [ref=e636]:
            - generic [ref=e637]: Timeline
            - generic [ref=e641]: No Data
  - generic [ref=e652]:
    - generic [ref=e653]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e654]: Back To Top
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