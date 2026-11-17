# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Update the description of an existing opportunity
- Location: tests/generated/features/opportunities.feature.spec.js:171:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Update Description Account', { exact: true }) resolved to 2 elements:
    1) <div class="related-item-label ng-star-inserted">Numpy Update Description Account</div> aka locator('#pn_id_3_1').getByText('Numpy Update Description')
    2) <div class="related-item-label ng-star-inserted">Numpy Update Description Account</div> aka locator('#pn_id_3_5').getByText('Numpy Update Description')

Call log:
  - waiting for getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Update Description Account', { exact: true })

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
        - generic [ref=e164]: Create
        - generic [ref=e173]:
          - button "Save" [ref=e175] [cursor=pointer]
          - button "Cancel" [ref=e178] [cursor=pointer]
      - separator [ref=e181]
      - generic [ref=e190]:
        - tablist [ref=e192]:
          - tab "BASIC" [selected] [ref=e193] [cursor=pointer]
          - tab "OTHER" [ref=e194] [cursor=pointer]
        - tabpanel "BASIC" [ref=e196]:
          - generic [ref=e199]:
            - generic [ref=e200]:
              - generic [ref=e202]:
                - strong [ref=e204]:
                  - generic [ref=e205]: "*"
                  - generic [ref=e206]: OPPORTUNITY NAME
                - textbox [ref=e214]: Numpy Update Description Opportunity
              - generic [ref=e216]:
                - strong [ref=e218]:
                  - generic [ref=e219]: "*"
                  - generic [ref=e220]: ACCOUNT NAME
                - generic [ref=e228]:
                  - generic [ref=e231] [cursor=pointer]:
                    - combobox "Select an item" [expanded] [ref=e232]
                    - button "dropdown trigger" [expanded] [ref=e235]
                    - generic [ref=e244]:
                      - textbox [active] [ref=e248]: Nump
                      - listbox "Option List" [ref=e258]:
                        - option "Numpy Other Account" [ref=e260]
                        - option "Numpy Update Description Account" [ref=e264]
                        - option "Numpy Account Search Test" [ref=e268]
                        - option "Numpy Word of Mouth Account" [ref=e272]
                        - option "Numpy Existing Customer Account" [ref=e276]
                        - option "Numpy Update Description Account" [ref=e280]
                        - option "Numpy Email Account" [ref=e284]
                        - option "Numpy Existing Customer Account" [ref=e288]
                        - option "Numpy Self Generated Account" [ref=e292]
                        - option "Numpy Email Account" [ref=e296]
                        - option "Numpy Trade Show Account" [ref=e300]
                        - option "Numpy Amount Account" [ref=e304]
                        - option "Numpy Test Oppurtunity Account" [ref=e308]
                        - option "Numpy Delete Opportunity Account" [ref=e312]
                        - option "Numpy Amount Account" [ref=e316]
                        - option "Numpy Update Amount Account" [ref=e320]
                        - option "Numpy Description Account" [ref=e324]
                        - option "Numpy Account Website Update Test" [ref=e328]
                        - option "Numpy Amount Account" [ref=e332]
                        - option "Numpy Direct Mail Account" [ref=e336]
                  - button [ref=e342] [cursor=pointer]
            - generic [ref=e348]:
              - generic [ref=e350]:
                - strong [ref=e352]:
                  - generic [ref=e353]: OPPORTUNITY AMOUNT
                - generic [ref=e361]:
                  - combobox [ref=e369]:
                    - option "$ (USD)" [selected]
                  - textbox [ref=e376]: 7,500.50
              - generic [ref=e378]:
                - strong [ref=e380]:
                  - generic [ref=e381]: "*"
                  - generic [ref=e382]: EXPECTED CLOSE DATE
                - generic [ref=e390]:
                  - textbox "yyyy-mm-dd" [ref=e391]: 2027-03-15
                  - button [ref=e394] [cursor=pointer]
            - generic [ref=e414]:
              - generic [ref=e416]:
                - strong [ref=e418]:
                  - generic [ref=e419]: "*"
                  - generic [ref=e420]: SALES STAGE
                - combobox [ref=e429]:
                  - option "Prospecting"
                  - option "Qualification"
                  - option "Needs Analysis"
                  - option "Value Proposition"
                  - option "Identifying Decision Makers"
                  - option "Perception Analysis"
                  - option "Proposal/Price Quote"
                  - option "Negotiation/Review" [selected]
                  - option "Closed Won"
                  - option "Closed Lost"
              - generic [ref=e431]:
                - strong [ref=e433]:
                  - generic [ref=e434]: TYPE
                - combobox [ref=e443]:
                  - option [selected]
                  - option "Existing Business"
                  - option "New Business"
            - generic [ref=e444]:
              - generic [ref=e446]:
                - strong [ref=e448]:
                  - generic [ref=e449]: PROBABILITY (%)
                - textbox [ref=e457]
              - generic [ref=e459]:
                - strong [ref=e461]:
                  - generic [ref=e462]: LEAD SOURCE
                - combobox [ref=e471]:
                  - option [selected]
                  - option "Cold Call"
                  - option "Existing Customer"
                  - option "Self Generated"
                  - option "Employee"
                  - option "Partner"
                  - option "Public Relations"
                  - option "Direct Mail"
                  - option "Conference"
                  - option "Trade Show"
                  - option "Web Site"
                  - option "Word of mouth"
                  - option "Email"
                  - option "Campaign"
                  - option "Other"
            - generic [ref=e472]:
              - generic [ref=e474]:
                - strong [ref=e476]:
                  - generic [ref=e477]: NEXT STEP
                - textbox [ref=e485]
              - generic [ref=e487]:
                - strong [ref=e489]:
                  - generic [ref=e490]: CAMPAIGN
                - generic [ref=e498]:
                  - generic [ref=e501] [cursor=pointer]:
                    - combobox "Select an item" [ref=e502]
                    - button "dropdown trigger" [ref=e505]
                  - button [ref=e513] [cursor=pointer]
            - generic [ref=e521]:
              - strong [ref=e523]:
                - generic [ref=e524]: DESCRIPTION
              - textbox [ref=e532]
            - generic [ref=e536]:
              - strong [ref=e538]:
                - generic [ref=e539]: ASSIGNED TO
              - generic [ref=e547]:
                - generic [ref=e550] [cursor=pointer]:
                  - combobox "WillWestin" [ref=e551]
                  - button "dropdown trigger" [ref=e556]
                - button [ref=e564] [cursor=pointer]
  - generic [ref=e572]:
    - generic [ref=e573]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e574]: Back To Top
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