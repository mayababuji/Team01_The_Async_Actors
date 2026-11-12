# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Cancel changes while editing an account
- Location: tests/generated/features/accounts.feature.spec.js:132:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /^edit$/i }) to be visible

```

```
AggregateError: Failed to delete one or more test-created accounts.
```

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for getByText('Delete', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
          - listitem [ref=e43]:
            - generic [ref=e44]: Leads
          - listitem [ref=e51]:
            - generic [ref=e52]: Quotes
          - listitem [ref=e59]:
            - generic [ref=e60]: Calendar
          - listitem [ref=e67]:
            - generic [ref=e68]: Documents
        - list [ref=e77]:
          - listitem [ref=e78]:
            - generic [ref=e79]: More
      - generic [ref=e81]:
        - list [ref=e83]:
          - listitem [ref=e84]:
            - generic "Quick Create" [ref=e85] [cursor=pointer]
        - list [ref=e92]:
          - listitem [ref=e93]:
            - generic "Recently Viewed" [ref=e94] [cursor=pointer]
        - generic [ref=e104]:
          - textbox "Search" [ref=e105]:
            - /placeholder: Search...
          - button "Search" [ref=e107] [cursor=pointer]
        - list [ref=e117]:
          - listitem [ref=e118]:
            - generic [ref=e119] [cursor=pointer]
      - list [ref=e127]:
        - listitem [ref=e128]
    - generic [ref=e139]:
      - generic [ref=e143]:
        - generic [ref=e144]:
          - button [ref=e148] [cursor=pointer]
          - generic [ref=e155]:
            - button [ref=e159] [cursor=pointer]
            - generic [ref=e166]: Cancel Edit Test Account
        - generic [ref=e172]:
          - button "Save" [ref=e174] [cursor=pointer]
          - button "Cancel" [ref=e177] [cursor=pointer]
          - button "Insights" [ref=e180] [cursor=pointer]
          - generic [ref=e183]:
            - button "Actions" [expanded] [active] [ref=e184] [cursor=pointer]
            - generic [ref=e185]:
              - generic [ref=e186]: Find Duplicates
              - generic [ref=e189]: View Change Log
      - separator [ref=e193]
      - generic [ref=e198]:
        - generic [ref=e202]:
          - tablist [ref=e204]:
            - tab "OVERVIEW" [selected] [ref=e205] [cursor=pointer]
            - tab "MORE INFORMATION" [ref=e206] [cursor=pointer]
            - tab "OTHER" [ref=e207] [cursor=pointer]
          - tabpanel "OVERVIEW" [ref=e209]:
            - generic [ref=e212]:
              - generic [ref=e213]:
                - generic [ref=e215]:
                  - strong [ref=e217]:
                    - generic [ref=e218]: "*"
                    - generic [ref=e219]: NAME
                  - textbox [ref=e227]: Cancel Edit Test Account
                - generic [ref=e229]:
                  - strong [ref=e231]:
                    - generic [ref=e232]: ASSIGNED TO
                  - generic [ref=e240]:
                    - generic [ref=e243] [cursor=pointer]:
                      - combobox "Will Westin" [ref=e244]
                      - button "dropdown trigger" [ref=e249]
                    - button [ref=e257] [cursor=pointer]
              - generic [ref=e263]:
                - generic [ref=e265]:
                  - strong [ref=e267]:
                    - generic [ref=e268]: WEBSITE
                  - textbox [ref=e276]: https://changed.example.com
                - generic [ref=e278]:
                  - strong [ref=e280]:
                    - generic [ref=e281]: OFFICE PHONE
                  - textbox [ref=e289]
              - generic [ref=e292]:
                - strong [ref=e294]:
                  - generic [ref=e295]: EMAIL ADDRESS
                - button [ref=e303] [cursor=pointer]
              - generic [ref=e310]:
                - generic [ref=e312]:
                  - strong [ref=e314]:
                    - generic [ref=e315]: BILLING ADDRESS
                  - generic [ref=e323]:
                    - generic [ref=e324]:
                      - generic [ref=e325]: Billing Street
                      - textbox [ref=e333]
                    - generic [ref=e334]:
                      - generic [ref=e335]: Billing Postal Code
                      - textbox [ref=e343]
                    - generic [ref=e344]:
                      - generic [ref=e345]: Billing City
                      - textbox [ref=e353]
                    - generic [ref=e354]:
                      - generic [ref=e355]: Billing State
                      - textbox [ref=e363]
                    - generic [ref=e364]:
                      - generic [ref=e365]: Billing Country
                      - textbox [ref=e373]
                - generic [ref=e375]:
                  - strong [ref=e377]:
                    - generic [ref=e378]: SHIPPING ADDRESS
                  - generic [ref=e386]:
                    - generic [ref=e387]:
                      - generic [ref=e388]: Shipping Street
                      - textbox [ref=e396]
                    - generic [ref=e397]:
                      - generic [ref=e398]: Shipping Postal Code
                      - textbox [ref=e406]
                    - generic [ref=e407]:
                      - generic [ref=e408]: Shipping City
                      - textbox [ref=e416]
                    - generic [ref=e417]:
                      - generic [ref=e418]: Shipping State
                      - textbox [ref=e426]
                    - generic [ref=e427]:
                      - generic [ref=e428]: Shipping Country
                      - textbox [ref=e436]
              - generic [ref=e439]:
                - strong [ref=e441]:
                  - generic [ref=e442]: DESCRIPTION
                - textbox [ref=e450]
        - heading "Relationships Activities 0 History 0 Documents 0 Contacts 0" [ref=e458]:
          - generic [ref=e459]:
            - generic [ref=e460]: Relationships
            - generic [ref=e463]:
              - generic [ref=e464]:
                - generic [ref=e468] [cursor=pointer]:
                  - generic [ref=e479]: Activities
                  - generic [ref=e482]: "0"
                - generic [ref=e492] [cursor=pointer]:
                  - generic [ref=e504]: History
                  - generic [ref=e507]: "0"
                - generic [ref=e517] [cursor=pointer]:
                  - generic [ref=e531]: Documents
                  - generic [ref=e534]: "0"
                - generic [ref=e544] [cursor=pointer]:
                  - generic [ref=e555]: Contacts
                  - generic [ref=e558]: "0"
              - generic [ref=e566] [cursor=pointer]
  - generic [ref=e573]:
    - generic [ref=e574]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e575]: Back To Top
```

# Test source

```ts
  805  |   // Recently Viewed
  806  |   // --------------------------------------------------
  807  | 
  808  | 
  809  |   async openAccountsRecentlyViewed() {
  810  |     await this.hoverAccountsModule();
  811  |     await this.accountsRecentlyViewedTrigger.click();
  812  |   }
  813  | 
  814  | 
  815  |   getRecentlyViewedAccount(accountName) {
  816  |     return this.accountsRecentlyViewedPanel.getByText(
  817  |       accountName,
  818  |       { exact: true }
  819  |     );
  820  |   }
  821  | 
  822  | 
  823  |   // --------------------------------------------------
  824  |   // Test-data cleanup
  825  |   // --------------------------------------------------
  826  | 
  827  | 
  828  |   async deleteAccountByUrl(recordUrl) {
  829  |     const target = new URL(recordUrl);
  830  |     const current = new URL(this.page.url());
  831  | 
  832  | 
  833  |     if (target.origin !== current.origin) {
  834  |       throw new Error(
  835  |         `Refusing cleanup on a different origin: ${target.origin}`
  836  |       );
  837  |     }
  838  | 
  839  | 
  840  |     const recordPattern =
  841  |       /^#\/accounts\/record\/([^/?#]+)(?:[/?#]|$)/;
  842  | 
  843  | 
  844  |     const targetMatch = target.hash.match(recordPattern);
  845  | 
  846  | 
  847  |     if (!targetMatch) {
  848  |       throw new Error(
  849  |         `Cleanup requires an account detail URL: ${recordUrl}`
  850  |       );
  851  |     }
  852  | 
  853  | 
  854  |     const recordId = targetMatch[1];
  855  |     const currentMatch = current.hash.match(recordPattern);
  856  | 
  857  | 
  858  |     const isTargetRecord =
  859  |       current.origin === target.origin &&
  860  |       currentMatch?.[1] === recordId;
  861  | 
  862  | 
  863  |     if (!isTargetRecord) {
  864  |       await this.page.goto(recordUrl);
  865  |     }
  866  | 
  867  | 
  868  |     await this.page.waitForURL(url => {
  869  |       const match = url.hash.match(recordPattern);
  870  | 
  871  | 
  872  |       return (
  873  |         url.origin === target.origin &&
  874  |         match?.[1] === recordId
  875  |       );
  876  |     });
  877  | 
  878  | 
  879  |     await this.overviewPanel.waitFor({
  880  |       state: 'visible'
  881  |     });
  882  | 
  883  | 
  884  |     await this.recordActionsButton.waitFor({
  885  |       state: 'visible'
  886  |     });
  887  | 
  888  | 
  889  |     const expanded =
  890  |       await this.recordActionsButton.getAttribute(
  891  |         'aria-expanded'
  892  |       );
  893  | 
  894  | 
  895  |     if (expanded !== 'true') {
  896  |       await this.recordActionsButton.click();
  897  |     }
  898  | 
  899  | 
  900  |     await this.recordActionsMenu.waitFor({
  901  |       state: 'visible'
  902  |     });
  903  | 
  904  | 
> 905  |     await this.deleteAccountAction.click();
       |                                    ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  906  | 
  907  | 
  908  |     await this.deleteAccountConfirmationMessage.waitFor({
  909  |       state: 'visible'
  910  |     });
  911  | 
  912  | 
  913  |     await this.confirmDeleteAccountButton.click();
  914  | 
  915  | 
  916  |     await this.deleteAccountConfirmationMessage.waitFor({
  917  |       state: 'hidden'
  918  |     });
  919  | 
  920  | 
  921  |     await this.page.waitForURL(
  922  |       /#\/accounts\/?(?:\?.*)?$/
  923  |     );
  924  | 
  925  | 
  926  |     await this.viewAccountPageHeading.waitFor({
  927  |       state: 'visible'
  928  |     });
  929  |   }
  930  | 
  931  | 
  932  |   // --------------------------------------------------
  933  |   // Sorting
  934  |   // --------------------------------------------------
  935  | 
  936  | 
  937  |   async clickAccountNameSortButton() {
  938  |     await this.accountNameSortButton.click();
  939  |   }
  940  | 
  941  | 
  942  |   async getDisplayedAccountNames() {
  943  |     const names =
  944  |       await this.accountNameListLinks.allTextContents();
  945  | 
  946  | 
  947  |     return names.map(name => name.trim());
  948  |   }
  949  | 
  950  | 
  951  |   async getNameSortIconClass() {
  952  |     return await this.accountNameSortIcon.getAttribute(
  953  |       'class'
  954  |     );
  955  |   }
  956  | 
  957  | 
  958  |   async isNameSortedDescending() {
  959  |     const iconClass =
  960  |       await this.getNameSortIconClass();
  961  | 
  962  | 
  963  |     return /(?:^|\s)image-sort_descend(?:\s|$)/.test(
  964  |       iconClass ?? ''
  965  |     );
  966  |   }
  967  | 
  968  | 
  969  |   async waitForNameSortDescending() {
  970  |     await this.page.waitForFunction(() => {
  971  |       const icon = document.querySelector(
  972  |         'th.cdk-column-name scrm-sort-button a.sort-button svg-icon'
  973  |       );
  974  | 
  975  | 
  976  |       return icon?.classList.contains(
  977  |         'image-sort_descend'
  978  |       );
  979  |     });
  980  |   }
  981  | 
  982  | 
  983  |   async waitForNameSortNotDescending() {
  984  |     await this.page.waitForFunction(() => {
  985  |       const icon = document.querySelector(
  986  |         'th.cdk-column-name scrm-sort-button a.sort-button svg-icon'
  987  |       );
  988  | 
  989  | 
  990  |       return (
  991  |         icon !== null &&
  992  |         !icon.classList.contains('image-sort_descend')
  993  |       );
  994  |     });
  995  |   }
  996  | 
  997  | 
  998  |   async sortAccountsByNameAscending() {
  999  |     await this.accountNameSortButton.waitFor({
  1000 |       state: 'visible'
  1001 |     });
  1002 | 
  1003 | 
  1004 |     if (!(await this.isNameSortedDescending())) {
  1005 |       await this.clickAccountNameSortButton();
```