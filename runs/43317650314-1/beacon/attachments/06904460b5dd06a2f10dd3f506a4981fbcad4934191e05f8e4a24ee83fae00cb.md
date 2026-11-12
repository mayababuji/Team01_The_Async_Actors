# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with lead source <leadSource> >> Create an opportunity with lead source Self Generated
- Location: tests/generated/features/opportunities.feature.spec.js:79:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Self Generated Account', { exact: true }) resolved to 2 elements:
    1) <div class="related-item-label ng-star-inserted">Numpy Self Generated Account</div> aka locator('#pn_id_3_0').getByText('Numpy Self Generated Account')
    2) <div class="related-item-label ng-star-inserted">Numpy Self Generated Account</div> aka locator('#pn_id_3_2').getByText('Numpy Self Generated Account')

Call log:
  - waiting for getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Self Generated Account', { exact: true })

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
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]: ACCOUNTS
          - generic [ref=e150]:
            - group [ref=e152]:
              - button "Filter" [ref=e154] [cursor=pointer]
            - button "Insights" [ref=e156] [cursor=pointer]
        - separator [ref=e163]
      - generic [ref=e166]:
        - generic [ref=e169]:
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e175]:
                - button [aria-hidden] [ref=e177] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e182] [cursor=pointer]
              - button "Columns" [ref=e189] [cursor=pointer]:
                - generic "Columns" [ref=e191]
            - generic [ref=e203]:
              - button "Navigate to first page" [ref=e204] [cursor=pointer]
              - button "Previous page" [ref=e210] [cursor=pointer]
              - text: (1 - 20 of 64)
              - button "Next page" [ref=e216] [cursor=pointer]
              - button "Navigate to last page" [ref=e222] [cursor=pointer]
          - table [ref=e230]:
            - rowgroup [ref=e231]:
              - row [ref=e232]:
                - columnheader [ref=e233]
                - columnheader [ref=e234]
                - columnheader "Name" [ref=e235]:
                  - generic [ref=e238] [cursor=pointer]
                - columnheader "City" [ref=e245]:
                  - generic [ref=e248] [cursor=pointer]
                - columnheader "Billing Country" [ref=e255]:
                  - generic [ref=e258] [cursor=pointer]
                - columnheader "Phone" [ref=e265]:
                  - generic [ref=e268] [cursor=pointer]
                - columnheader "User" [ref=e275]:
                  - generic [ref=e278] [cursor=pointer]
                - columnheader "Email Address" [ref=e285]
                - columnheader [ref=e287]
            - rowgroup [ref=e288]:
              - row [ref=e289]:
                - cell [ref=e290]:
                  - generic [ref=e291] [cursor=pointer]
                - cell [ref=e292]:
                  - button [ref=e297] [cursor=pointer]
                - cell [ref=e302]:
                  - link "Numpy Conference Account" [ref=e307] [cursor=pointer]:
                    - /url: "#/accounts/record/0233f3a4-66ef-46e4-83c4-f2d829d2f621?offset=1"
                - cell [ref=e308]
                - cell [ref=e309]
                - cell [ref=e310]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e311]
                - cell [ref=e317]
                - cell [ref=e318]:
                  - generic [ref=e325]:
                    - button "Log Call" [ref=e327] [cursor=pointer]:
                      - generic "Log Call" [ref=e329]
                    - button "Schedule Meeting" [ref=e334] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e336]
                    - button "Create Task" [ref=e355] [cursor=pointer]:
                      - generic "Create Task" [ref=e357]
                    - button "Compose Email" [ref=e366] [cursor=pointer]:
                      - generic "Compose Email" [ref=e368]
              - row [ref=e372]:
                - cell [ref=e373]:
                  - generic [ref=e374] [cursor=pointer]
                - cell [ref=e375]:
                  - button [ref=e380] [cursor=pointer]
                - cell [ref=e385]:
                  - link "Import Account QA One" [ref=e390] [cursor=pointer]:
                    - /url: "#/accounts/record/c6afaf84-830b-4201-8856-5c31c8f94e13?offset=2"
                - cell [ref=e391]
                - cell [ref=e392]
                - cell [ref=e393]:
                  - link "(555) 010-1001" [ref=e399] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e400]
                - cell "import.one@example.com" [ref=e406]
                - cell [ref=e413]:
                  - generic [ref=e420]:
                    - button "Log Call" [ref=e422] [cursor=pointer]:
                      - generic "Log Call" [ref=e424]
                    - button "Schedule Meeting" [ref=e429] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e431]
                    - button "Create Task" [ref=e450] [cursor=pointer]:
                      - generic "Create Task" [ref=e452]
                    - button "Compose Email" [ref=e461] [cursor=pointer]:
                      - generic "Compose Email" [ref=e463]
              - row [ref=e467]:
                - cell [ref=e468]:
                  - generic [ref=e469] [cursor=pointer]
                - cell [ref=e470]:
                  - button [ref=e475] [cursor=pointer]
                - cell [ref=e480]:
                  - link "Import Account QA Two" [ref=e485] [cursor=pointer]:
                    - /url: "#/accounts/record/df024cb3-3878-4958-ba73-aab8e0e6b7bd?offset=3"
                - cell [ref=e486]
                - cell [ref=e487]
                - cell [ref=e488]:
                  - link "(555) 010-1002" [ref=e494] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e495]
                - cell "import.two@example.com" [ref=e501]
                - cell [ref=e508]:
                  - generic [ref=e515]:
                    - button "Log Call" [ref=e517] [cursor=pointer]:
                      - generic "Log Call" [ref=e519]
                    - button "Schedule Meeting" [ref=e524] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e526]
                    - button "Create Task" [ref=e545] [cursor=pointer]:
                      - generic "Create Task" [ref=e547]
                    - button "Compose Email" [ref=e556] [cursor=pointer]:
                      - generic "Compose Email" [ref=e558]
              - row [ref=e562]:
                - cell [ref=e563]:
                  - generic [ref=e564] [cursor=pointer]
                - cell [ref=e565]:
                  - button [ref=e570] [cursor=pointer]
                - cell [ref=e575]:
                  - link "Import Account QA Two" [ref=e580] [cursor=pointer]:
                    - /url: "#/accounts/record/67b7fc75-92dc-46e1-b266-1da36cd3c49a?offset=4"
                - cell [ref=e581]
                - cell [ref=e582]
                - cell [ref=e583]:
                  - link "(555) 010-1002" [ref=e589] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e590]
                - cell "import.two@example.com" [ref=e596]
                - cell [ref=e603]:
                  - generic [ref=e610]:
                    - button "Log Call" [ref=e612] [cursor=pointer]:
                      - generic "Log Call" [ref=e614]
                    - button "Schedule Meeting" [ref=e619] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e621]
                    - button "Create Task" [ref=e640] [cursor=pointer]:
                      - generic "Create Task" [ref=e642]
                    - button "Compose Email" [ref=e651] [cursor=pointer]:
                      - generic "Compose Email" [ref=e653]
              - row [ref=e657]:
                - cell [ref=e658]:
                  - generic [ref=e659] [cursor=pointer]
                - cell [ref=e660]:
                  - button [ref=e665] [cursor=pointer]
                - cell [ref=e670]:
                  - link "Import Account QA One" [ref=e675] [cursor=pointer]:
                    - /url: "#/accounts/record/dd738f57-5a41-466a-b77c-7347770e9cbb?offset=5"
                - cell [ref=e676]
                - cell [ref=e677]
                - cell [ref=e678]:
                  - link "(555) 010-1001" [ref=e684] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e685]
                - cell "import.one@example.com" [ref=e691]
                - cell [ref=e698]:
                  - generic [ref=e705]:
                    - button "Log Call" [ref=e707] [cursor=pointer]:
                      - generic "Log Call" [ref=e709]
                    - button "Schedule Meeting" [ref=e714] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e716]
                    - button "Create Task" [ref=e735] [cursor=pointer]:
                      - generic "Create Task" [ref=e737]
                    - button "Compose Email" [ref=e746] [cursor=pointer]:
                      - generic "Compose Email" [ref=e748]
              - row [ref=e752]:
                - cell [ref=e753]:
                  - generic [ref=e754] [cursor=pointer]
                - cell [ref=e755]:
                  - button [ref=e760] [cursor=pointer]
                - cell [ref=e765]:
                  - link "Cancel Edit Test Account" [ref=e770] [cursor=pointer]:
                    - /url: "#/accounts/record/b57a83de-c9a3-4164-9028-dd9a4123a942?offset=6"
                - cell [ref=e771]
                - cell [ref=e772]
                - cell [ref=e773]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e774]
                - cell [ref=e780]
                - cell [ref=e781]:
                  - generic [ref=e788]:
                    - button "Log Call" [ref=e790] [cursor=pointer]:
                      - generic "Log Call" [ref=e792]
                    - button "Schedule Meeting" [ref=e797] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e799]
                    - button "Create Task" [ref=e818] [cursor=pointer]:
                      - generic "Create Task" [ref=e820]
                    - button "Compose Email" [ref=e829] [cursor=pointer]:
                      - generic "Compose Email" [ref=e831]
              - row [ref=e835]:
                - cell [ref=e836]:
                  - generic [ref=e837] [cursor=pointer]
                - cell [ref=e838]:
                  - button [ref=e843] [cursor=pointer]
                - cell [ref=e848]:
                  - link "Cancel Edit Test Account" [ref=e853] [cursor=pointer]:
                    - /url: "#/accounts/record/86ed7653-9986-4805-8b13-50677be0eae1?offset=7"
                - cell [ref=e854]
                - cell [ref=e855]
                - cell [ref=e856]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e857]
                - cell [ref=e863]
                - cell [ref=e864]:
                  - generic [ref=e871]:
                    - button "Log Call" [ref=e873] [cursor=pointer]:
                      - generic "Log Call" [ref=e875]
                    - button "Schedule Meeting" [ref=e880] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e882]
                    - button "Create Task" [ref=e901] [cursor=pointer]:
                      - generic "Create Task" [ref=e903]
                    - button "Compose Email" [ref=e912] [cursor=pointer]:
                      - generic "Compose Email" [ref=e914]
              - row [ref=e918]:
                - cell [ref=e919]:
                  - generic [ref=e920] [cursor=pointer]
                - cell [ref=e921]:
                  - button [ref=e926] [cursor=pointer]
                - cell [ref=e931]:
                  - link "Import Account QA Two" [ref=e936] [cursor=pointer]:
                    - /url: "#/accounts/record/2aca6f93-77b4-4050-85be-e0cd732a1d7f?offset=8"
                - cell [ref=e937]
                - cell [ref=e938]
                - cell [ref=e939]:
                  - link "(555) 010-1002" [ref=e945] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e946]
                - cell "import.two@example.com" [ref=e952]
                - cell [ref=e959]:
                  - generic [ref=e966]:
                    - button "Log Call" [ref=e968] [cursor=pointer]:
                      - generic "Log Call" [ref=e970]
                    - button "Schedule Meeting" [ref=e975] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e977]
                    - button "Create Task" [ref=e996] [cursor=pointer]:
                      - generic "Create Task" [ref=e998]
                    - button "Compose Email" [ref=e1007] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1009]
              - row [ref=e1013]:
                - cell [ref=e1014]:
                  - generic [ref=e1015] [cursor=pointer]
                - cell [ref=e1016]:
                  - button [ref=e1021] [cursor=pointer]
                - cell [ref=e1026]:
                  - link "Import Account QA One" [ref=e1031] [cursor=pointer]:
                    - /url: "#/accounts/record/ab548cf0-bf02-4828-9a01-2c356089bd13?offset=9"
                - cell [ref=e1032]
                - cell [ref=e1033]
                - cell [ref=e1034]:
                  - link "(555) 010-1001" [ref=e1040] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e1041]
                - cell "import.one@example.com" [ref=e1047]
                - cell [ref=e1054]:
                  - generic [ref=e1061]:
                    - button "Log Call" [ref=e1063] [cursor=pointer]:
                      - generic "Log Call" [ref=e1065]
                    - button "Schedule Meeting" [ref=e1070] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1072]
                    - button "Create Task" [ref=e1091] [cursor=pointer]:
                      - generic "Create Task" [ref=e1093]
                    - button "Compose Email" [ref=e1102] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1104]
              - row [ref=e1108]:
                - cell [ref=e1109]:
                  - generic [ref=e1110] [cursor=pointer]
                - cell [ref=e1111]:
                  - button [ref=e1116] [cursor=pointer]
                - cell [ref=e1121]:
                  - link "Import Account QA One" [ref=e1126] [cursor=pointer]:
                    - /url: "#/accounts/record/0f33444a-c695-4d41-a5f4-293265cb3c93?offset=10"
                - cell [ref=e1127]
                - cell [ref=e1128]
                - cell [ref=e1129]:
                  - link "(555) 010-1001" [ref=e1135] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e1136]
                - cell "import.one@example.com" [ref=e1142]
                - cell [ref=e1149]:
                  - generic [ref=e1156]:
                    - button "Log Call" [ref=e1158] [cursor=pointer]:
                      - generic "Log Call" [ref=e1160]
                    - button "Schedule Meeting" [ref=e1165] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1167]
                    - button "Create Task" [ref=e1186] [cursor=pointer]:
                      - generic "Create Task" [ref=e1188]
                    - button "Compose Email" [ref=e1197] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1199]
              - row [ref=e1203]:
                - cell [ref=e1204]:
                  - generic [ref=e1205] [cursor=pointer]
                - cell [ref=e1206]:
                  - button [ref=e1211] [cursor=pointer]
                - cell [ref=e1216]:
                  - link "Import Account QA Two" [ref=e1221] [cursor=pointer]:
                    - /url: "#/accounts/record/23e40676-8f5b-4dd8-b590-43bea5dd6a52?offset=11"
                - cell [ref=e1222]
                - cell [ref=e1223]
                - cell [ref=e1224]:
                  - link "(555) 010-1002" [ref=e1230] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e1231]
                - cell "import.two@example.com" [ref=e1237]
                - cell [ref=e1244]:
                  - generic [ref=e1251]:
                    - button "Log Call" [ref=e1253] [cursor=pointer]:
                      - generic "Log Call" [ref=e1255]
                    - button "Schedule Meeting" [ref=e1260] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1262]
                    - button "Create Task" [ref=e1281] [cursor=pointer]:
                      - generic "Create Task" [ref=e1283]
                    - button "Compose Email" [ref=e1292] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1294]
              - row [ref=e1298]:
                - cell [ref=e1299]:
                  - generic [ref=e1300] [cursor=pointer]
                - cell [ref=e1301]:
                  - button [ref=e1306] [cursor=pointer]
                - cell [ref=e1311]:
                  - link "Numpy Self Generated Account" [ref=e1316] [cursor=pointer]:
                    - /url: "#/accounts/record/e3453899-460d-4f78-bf05-4cbe4e73efd7?offset=12"
                - cell [ref=e1317]
                - cell [ref=e1318]
                - cell [ref=e1319]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e1320]
                - cell [ref=e1326]
                - cell [ref=e1327]:
                  - generic [ref=e1334]:
                    - button "Log Call" [ref=e1336] [cursor=pointer]:
                      - generic "Log Call" [ref=e1338]
                    - button "Schedule Meeting" [ref=e1343] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1345]
                    - button "Create Task" [ref=e1364] [cursor=pointer]:
                      - generic "Create Task" [ref=e1366]
                    - button "Compose Email" [ref=e1375] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1377]
              - row [ref=e1381]:
                - cell [ref=e1382]:
                  - generic [ref=e1383] [cursor=pointer]
                - cell [ref=e1384]:
                  - button [ref=e1389] [cursor=pointer]
                - cell [ref=e1394]:
                  - link "Import Account QA One" [ref=e1399] [cursor=pointer]:
                    - /url: "#/accounts/record/69f1b351-1944-4b6b-b239-50e758df452a?offset=13"
                - cell [ref=e1400]
                - cell [ref=e1401]
                - cell [ref=e1402]:
                  - link "(555) 010-1001" [ref=e1408] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e1409]
                - cell "import.one@example.com" [ref=e1415]
                - cell [ref=e1422]:
                  - generic [ref=e1429]:
                    - button "Log Call" [ref=e1431] [cursor=pointer]:
                      - generic "Log Call" [ref=e1433]
                    - button "Schedule Meeting" [ref=e1438] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1440]
                    - button "Create Task" [ref=e1459] [cursor=pointer]:
                      - generic "Create Task" [ref=e1461]
                    - button "Compose Email" [ref=e1470] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1472]
              - row [ref=e1476]:
                - cell [ref=e1477]:
                  - generic [ref=e1478] [cursor=pointer]
                - cell [ref=e1479]:
                  - button [ref=e1484] [cursor=pointer]
                - cell [ref=e1489]:
                  - link "Import Account QA Two" [ref=e1494] [cursor=pointer]:
                    - /url: "#/accounts/record/df9ba2e3-e5bf-4e55-9284-e1b551506d71?offset=14"
                - cell [ref=e1495]
                - cell [ref=e1496]
                - cell [ref=e1497]:
                  - link "(555) 010-1002" [ref=e1503] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e1504]
                - cell "import.two@example.com" [ref=e1510]
                - cell [ref=e1517]:
                  - generic [ref=e1524]:
                    - button "Log Call" [ref=e1526] [cursor=pointer]:
                      - generic "Log Call" [ref=e1528]
                    - button "Schedule Meeting" [ref=e1533] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1535]
                    - button "Create Task" [ref=e1554] [cursor=pointer]:
                      - generic "Create Task" [ref=e1556]
                    - button "Compose Email" [ref=e1565] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1567]
              - row [ref=e1571]:
                - cell [ref=e1572]:
                  - generic [ref=e1573] [cursor=pointer]
                - cell [ref=e1574]:
                  - button [ref=e1579] [cursor=pointer]
                - cell [ref=e1584]:
                  - link "B.C. Investing International" [ref=e1589] [cursor=pointer]:
                    - /url: "#/accounts/record/73a9389f-453d-49b9-bd47-4fb7a134112a?offset=15"
                - cell "Phoenix" [ref=e1590]
                - cell "USA" [ref=e1596]
                - cell [ref=e1602]:
                  - link "(028) 490-5377" [ref=e1608] [cursor=pointer]:
                    - /url: tel:(028)490-5377
                - cell "Sally Bronsen" [ref=e1609]
                - cell "qa94@example.info" [ref=e1615]
                - cell [ref=e1622]:
                  - generic [ref=e1629]:
                    - button "Log Call" [ref=e1631] [cursor=pointer]:
                      - generic "Log Call" [ref=e1633]
                    - button "Schedule Meeting" [ref=e1638] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1640]
                    - button "Create Task" [ref=e1659] [cursor=pointer]:
                      - generic "Create Task" [ref=e1661]
                    - button "Compose Email" [ref=e1670] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1672]
              - row [ref=e1676]:
                - cell [ref=e1677]:
                  - generic [ref=e1678] [cursor=pointer]
                - cell [ref=e1679]:
                  - button [ref=e1684] [cursor=pointer]
                - cell [ref=e1689]:
                  - link "AtoZ Co Ltd" [ref=e1694] [cursor=pointer]:
                    - /url: "#/accounts/record/eaabfeaf-63ab-4e3e-94f4-abb52ebc39fd?offset=16"
                - cell "Denver" [ref=e1695]
                - cell "USA" [ref=e1701]
                - cell [ref=e1707]:
                  - link "(938) 468-6090" [ref=e1713] [cursor=pointer]:
                    - /url: tel:(938)468-6090
                - cell "Sarah Smith" [ref=e1714]
                - cell "qa32@example.us" [ref=e1720]
                - cell [ref=e1727]:
                  - generic [ref=e1734]:
                    - button "Log Call" [ref=e1736] [cursor=pointer]:
                      - generic "Log Call" [ref=e1738]
                    - button "Schedule Meeting" [ref=e1743] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1745]
                    - button "Create Task" [ref=e1764] [cursor=pointer]:
                      - generic "Create Task" [ref=e1766]
                    - button "Compose Email" [ref=e1775] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1777]
              - row [ref=e1781]:
                - cell [ref=e1782]:
                  - generic [ref=e1783] [cursor=pointer]
                - cell [ref=e1784]:
                  - button [ref=e1789] [cursor=pointer]
                - cell [ref=e1794]:
                  - link "Green Tractor Group Limited" [ref=e1799] [cursor=pointer]:
                    - /url: "#/accounts/record/a8e1a7ce-5b5a-4cde-b9ab-575e9a41083e?offset=17"
                - cell "Atlanta" [ref=e1800]
                - cell "USA" [ref=e1806]
                - cell [ref=e1812]:
                  - link "(671) 043-3201" [ref=e1818] [cursor=pointer]:
                    - /url: tel:(671)043-3201
                - cell "Chris Olliver" [ref=e1819]
                - cell "qa.sales@example.tv" [ref=e1825]
                - cell [ref=e1832]:
                  - generic [ref=e1839]:
                    - button "Log Call" [ref=e1841] [cursor=pointer]:
                      - generic "Log Call" [ref=e1843]
                    - button "Schedule Meeting" [ref=e1848] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1850]
                    - button "Create Task" [ref=e1869] [cursor=pointer]:
                      - generic "Create Task" [ref=e1871]
                    - button "Compose Email" [ref=e1880] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1882]
              - row [ref=e1886]:
                - cell [ref=e1887]:
                  - generic [ref=e1888] [cursor=pointer]
                - cell [ref=e1889]:
                  - button [ref=e1894] [cursor=pointer]
                - cell [ref=e1899]:
                  - link "JAB Funds Ltd." [ref=e1904] [cursor=pointer]:
                    - /url: "#/accounts/record/e1451561-0779-48c0-84e5-f4134ae9308b?offset=18"
                - cell "Denver" [ref=e1905]
                - cell "USA" [ref=e1911]
                - cell [ref=e1917]:
                  - link "(166) 266-6277" [ref=e1923] [cursor=pointer]:
                    - /url: tel:(166)266-6277
                - cell "Chris Olliver" [ref=e1924]
                - cell "phone.the.beans@example.co.uk" [ref=e1930]
                - cell [ref=e1937]:
                  - generic [ref=e1944]:
                    - button "Log Call" [ref=e1946] [cursor=pointer]:
                      - generic "Log Call" [ref=e1948]
                    - button "Schedule Meeting" [ref=e1953] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1955]
                    - button "Create Task" [ref=e1974] [cursor=pointer]:
                      - generic "Create Task" [ref=e1976]
                    - button "Compose Email" [ref=e1985] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1987]
              - row [ref=e1991]:
                - cell [ref=e1992]:
                  - generic [ref=e1993] [cursor=pointer]
                - cell [ref=e1994]:
                  - button [ref=e1999] [cursor=pointer]
                - cell [ref=e2004]:
                  - link "Kringle Bell IncK.A. Tower & Co" [ref=e2009] [cursor=pointer]:
                    - /url: "#/accounts/record/8406081e-f576-4c48-ae39-b14921a92a60?offset=19"
                - cell "Sacramento" [ref=e2010]
                - cell "USA" [ref=e2016]
                - cell [ref=e2022]:
                  - link "(490) 913-8041" [ref=e2028] [cursor=pointer]:
                    - /url: tel:(490)913-8041
                - cell "Max Jensen" [ref=e2029]
                - cell "support89@example.info" [ref=e2035]
                - cell [ref=e2042]:
                  - generic [ref=e2049]:
                    - button "Log Call" [ref=e2051] [cursor=pointer]:
                      - generic "Log Call" [ref=e2053]
                    - button "Schedule Meeting" [ref=e2058] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2060]
                    - button "Create Task" [ref=e2079] [cursor=pointer]:
                      - generic "Create Task" [ref=e2081]
                    - button "Compose Email" [ref=e2090] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2092]
              - row [ref=e2096]:
                - cell [ref=e2097]:
                  - generic [ref=e2098] [cursor=pointer]
                - cell [ref=e2099]:
                  - button [ref=e2104] [cursor=pointer]
                - cell [ref=e2109]:
                  - link "Bay Funding Co" [ref=e2114] [cursor=pointer]:
                    - /url: "#/accounts/record/fe8b3645-b9b4-4036-86b7-c8017152a288?offset=20"
                - cell "Atlanta" [ref=e2115]
                - cell "USA" [ref=e2121]
                - cell [ref=e2127]:
                  - link "(950) 451-2834" [ref=e2133] [cursor=pointer]:
                    - /url: tel:(950)451-2834
                - cell "Chris Olliver" [ref=e2134]
                - cell "vegan.kid.sales@example.tv" [ref=e2140]
                - cell [ref=e2147]:
                  - generic [ref=e2154]:
                    - button "Log Call" [ref=e2156] [cursor=pointer]:
                      - generic "Log Call" [ref=e2158]
                    - button "Schedule Meeting" [ref=e2163] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2165]
                    - button "Create Task" [ref=e2184] [cursor=pointer]:
                      - generic "Create Task" [ref=e2186]
                    - button "Compose Email" [ref=e2195] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2197]
          - generic [ref=e2203]:
            - generic [ref=e2204]:
              - generic [ref=e2206]:
                - button [aria-hidden] [ref=e2208] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2213] [cursor=pointer]
              - button "Columns" [ref=e2220] [cursor=pointer]:
                - generic "Columns" [ref=e2222]
            - generic [ref=e2234]:
              - button "Navigate to first page" [ref=e2235] [cursor=pointer]
              - button "Previous page" [ref=e2241] [cursor=pointer]
              - text: (1 - 20 of 64)
              - button "Next page" [ref=e2247] [cursor=pointer]
              - button "Navigate to last page" [ref=e2253] [cursor=pointer]
        - generic [ref=e2266]:
          - generic [ref=e2267]: Quick Charts
          - generic [ref=e2277]:
            - combobox [ref=e2281]:
              - option "New Accounts by Month" [selected]
            - img [ref=e2285]:
              - generic [ref=e2286]:
                - generic [ref=e2290]:
                  - generic "2025-12" [ref=e2291]
                  - generic "2026-01" [ref=e2293]
                  - generic "2026-02" [ref=e2295]
                  - generic "2026-03" [ref=e2297]
                  - generic "2026-04" [ref=e2299]
                  - generic "2026-05" [ref=e2301]
                  - generic "2026-06" [ref=e2303]
                  - generic "2026-07" [ref=e2305]
                  - generic "2026-08" [ref=e2307]
                  - generic "2026-09" [ref=e2309]
                  - generic "2026-10" [ref=e2311]
                  - generic "2026-11" [ref=e2313]
                - generic [ref=e2354]:
                  - generic "0" [ref=e2355]
                  - generic "5" [ref=e2357]
                  - generic "10" [ref=e2359]
  - generic [ref=e2383]:
    - generic [ref=e2384]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2385]: Back To Top
```

# Test source

```ts
  280 |   }
  281 | 
  282 | 
  283 |   // --------------------------------------------------
  284 |   // Navigation actions
  285 |   // --------------------------------------------------
  286 | 
  287 | 
  288 |   async hoverOpportunitiesModule() {
  289 |     await this.opportunitiesModule.hover();
  290 |   }
  291 | 
  292 | 
  293 |   async openViewOpportunitiesPage() {
  294 |     await this.hoverOpportunitiesModule();
  295 |     await this.viewOpportunitiesOption.click();
  296 |   }
  297 | 
  298 | 
  299 |   async openImportOpportunitiesPage() {
  300 |     await this.hoverOpportunitiesModule();
  301 |     await this.importOpportunitiesOption.click();
  302 |   }
  303 | 
  304 | 
  305 |   async openCreateOpportunityPage() {
  306 |     await this.hoverOpportunitiesModule();
  307 |     await this.createOpportunityOption.click();
  308 | 
  309 | 
  310 |     await this.expectedCloseDateInput.waitFor({
  311 |       state: 'visible'
  312 |     });
  313 |   }
  314 | 
  315 | 
  316 |   // --------------------------------------------------
  317 |   // Create Opportunity actions
  318 |   // --------------------------------------------------
  319 | 
  320 | 
  321 |   async enterMandatoryOpportunityDetails(opportunity) {
  322 |     await this.enterOpportunityName(opportunity.name);
  323 | 
  324 | 
  325 |     // Fill Amount before opening the account search dropdown.
  326 |     await this.enterOpportunityAmount(opportunity.amount);
  327 | 
  328 | 
  329 |     await this.selectSalesStage(opportunity.salesStage);
  330 | 
  331 | 
  332 |     await this.enterExpectedCloseDate(
  333 |       opportunity.expectedCloseDate
  334 |     );
  335 | 
  336 | 
  337 |     await this.enterOpportunityAccountName(
  338 |       opportunity.accountName
  339 |     );
  340 |   }
  341 | 
  342 | 
  343 |   async enterOpportunityName(name) {
  344 |     await this.basicPanel.waitFor({
  345 |       state: 'visible'
  346 |     });
  347 | 
  348 | 
  349 |     await this.opportunityNameInput.fill(String(name));
  350 |   }
  351 | 
  352 | 
  353 |   async enterOpportunityAmount(amount) {
  354 |     await this.opportunityAmountInput.fill(
  355 |       String(amount ?? '').trim()
  356 |     );
  357 | 
  358 | 
  359 |     await this.opportunityAmountInput.press('Tab');
  360 |   }
  361 | 
  362 | 
  363 |   async enterOpportunityAccountName(accountName) {
  364 |     const accountSuggestion = this.getAccountSuggestion(
  365 |       accountName
  366 |     );
  367 | 
  368 | 
  369 |     await this.accountNameDropdown.click();
  370 |     await this.accountSearchInput.fill('');
  371 | 
  372 | 
  373 |     await this.accountSearchInput.pressSequentially(
  374 |       accountName.trim().slice(0, 4),
  375 |       { delay: 100 }
  376 |     );
  377 | 
  378 | 
  379 |     // Select the suggestion without submitting the form with Enter.
> 380 |     await accountSuggestion.click();
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Self Generated Account', { exact: true }) resolved to 2 elements:
  381 |   }
  382 | 
  383 | 
  384 |   async selectSalesStage(salesStage) {
  385 |     await this.salesStageSelect.selectOption({
  386 |       label: salesStage
  387 |     });
  388 |   }
  389 | 
  390 | 
  391 |   async selectOpportunityType(opportunityType) {
  392 |     await this.opportunityTypeSelect.selectOption({
  393 |       label: opportunityType
  394 |     });
  395 |   }
  396 | 
  397 | 
  398 |   async selectOpportunityLeadSource(leadSource) {
  399 |     await this.opportunityLeadSourceSelect.selectOption({
  400 |       label: leadSource
  401 |     });
  402 |   }
  403 | 
  404 | 
  405 |   async enterExpectedCloseDate(expectedCloseDate) {
  406 |     await this.expectedCloseDateInput.fill(
  407 |       expectedCloseDate
  408 |     );
  409 |   }
  410 | 
  411 | 
  412 |   async enterOpportunityDescription(description) {
  413 |     await this.opportunityDescriptionInput.fill(
  414 |       description
  415 |     );
  416 |   }
  417 | 
  418 | 
  419 |   async saveOpportunity() {
  420 |     await this.saveOpportunityButton.click();
  421 |   }
  422 | 
  423 | 
  424 |   // --------------------------------------------------
  425 |   // Opportunity test-data cleanup
  426 |   // --------------------------------------------------
  427 | 
  428 | 
  429 |   async deleteOpportunityByUrl(recordUrl) {
  430 |     const target = new URL(recordUrl);
  431 |     const current = new URL(this.page.url());
  432 | 
  433 | 
  434 |     // Refuse cleanup on a different origin.
  435 |     if (target.origin !== current.origin) {
  436 |       throw new Error(
  437 |         `Refusing cleanup on a different origin: ${target.origin}`
  438 |       );
  439 |     }
  440 | 
  441 | 
  442 |     const recordPattern =
  443 |       /^#\/opportunities\/record\/([^/?#]+)(?:[/?#]|$)/;
  444 | 
  445 | 
  446 |     const targetMatch = target.hash.match(recordPattern);
  447 | 
  448 | 
  449 |     if (!targetMatch) {
  450 |       throw new Error(
  451 |         `Cleanup requires an opportunity detail URL: ${recordUrl}`
  452 |       );
  453 |     }
  454 | 
  455 | 
  456 |     const recordId = targetMatch[1];
  457 |     const currentMatch = current.hash.match(recordPattern);
  458 | 
  459 | 
  460 |     const isTargetRecord =
  461 |       current.origin === target.origin &&
  462 |       currentMatch?.[1] === recordId;
  463 | 
  464 | 
  465 |     if (!isTargetRecord) {
  466 |       await this.page.goto(recordUrl);
  467 |     }
  468 | 
  469 | 
  470 |     await this.page.waitForURL(url => {
  471 |       const match = url.hash.match(recordPattern);
  472 | 
  473 | 
  474 |       return (
  475 |         url.origin === target.origin &&
  476 |         match?.[1] === recordId
  477 |       );
  478 |     });
  479 | 
  480 | 
```