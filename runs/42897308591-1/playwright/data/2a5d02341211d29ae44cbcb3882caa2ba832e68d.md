# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Update the amount of an existing opportunity
- Location: tests/generated/features/opportunities.feature.spec.js:165:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Update Amount Account', { exact: true }) resolved to 2 elements:
    1) <div class="related-item-label ng-star-inserted">Numpy Update Amount Account</div> aka locator('#pn_id_3_0').getByText('Numpy Update Amount Account')
    2) <div class="related-item-label ng-star-inserted">Numpy Update Amount Account</div> aka locator('#pn_id_3_5').getByText('Numpy Update Amount Account')

Call log:
  - waiting for getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Update Amount Account', { exact: true })

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
              - text: (1 - 20 of 55)
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
                  - link "Import Account QA Two" [ref=e307] [cursor=pointer]:
                    - /url: "#/accounts/record/d54beb0f-d142-483c-9159-73ca508d148f?offset=1"
                - cell [ref=e308]
                - cell [ref=e309]
                - cell [ref=e310]:
                  - link "(555) 010-1002" [ref=e316] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e317]
                - cell "import.two@example.com" [ref=e323]
                - cell [ref=e330]:
                  - generic [ref=e337]:
                    - button "Log Call" [ref=e339] [cursor=pointer]:
                      - generic "Log Call" [ref=e341]
                    - button "Schedule Meeting" [ref=e346] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e348]
                    - button "Create Task" [ref=e367] [cursor=pointer]:
                      - generic "Create Task" [ref=e369]
                    - button "Compose Email" [ref=e378] [cursor=pointer]:
                      - generic "Compose Email" [ref=e380]
              - row [ref=e384]:
                - cell [ref=e385]:
                  - generic [ref=e386] [cursor=pointer]
                - cell [ref=e387]:
                  - button [ref=e392] [cursor=pointer]
                - cell [ref=e397]:
                  - link "Import Account QA One" [ref=e402] [cursor=pointer]:
                    - /url: "#/accounts/record/e6d38a99-70c8-426b-b85d-df659f4df609?offset=2"
                - cell [ref=e403]
                - cell [ref=e404]
                - cell [ref=e405]:
                  - link "(555) 010-1001" [ref=e411] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e412]
                - cell "import.one@example.com" [ref=e418]
                - cell [ref=e425]:
                  - generic [ref=e432]:
                    - button "Log Call" [ref=e434] [cursor=pointer]:
                      - generic "Log Call" [ref=e436]
                    - button "Schedule Meeting" [ref=e441] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e443]
                    - button "Create Task" [ref=e462] [cursor=pointer]:
                      - generic "Create Task" [ref=e464]
                    - button "Compose Email" [ref=e473] [cursor=pointer]:
                      - generic "Compose Email" [ref=e475]
              - row [ref=e479]:
                - cell [ref=e480]:
                  - generic [ref=e481] [cursor=pointer]
                - cell [ref=e482]:
                  - button [ref=e487] [cursor=pointer]
                - cell [ref=e492]:
                  - link "Numpy Public Relations Account" [ref=e497] [cursor=pointer]:
                    - /url: "#/accounts/record/b448b8e5-edbd-41b3-b337-10cd8f372be8?offset=3"
                - cell [ref=e498]
                - cell [ref=e499]
                - cell [ref=e500]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e501]
                - cell [ref=e507]
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
                  - link "Numpy Account Website Update Test" [ref=e580] [cursor=pointer]:
                    - /url: "#/accounts/record/ccf47ed4-8811-428e-8224-1688a9aa81dd?offset=4"
                - cell [ref=e581]
                - cell [ref=e582]
                - cell [ref=e583]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e584]
                - cell [ref=e590]
                - cell [ref=e591]:
                  - generic [ref=e598]:
                    - button "Log Call" [ref=e600] [cursor=pointer]:
                      - generic "Log Call" [ref=e602]
                    - button "Schedule Meeting" [ref=e607] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e609]
                    - button "Create Task" [ref=e628] [cursor=pointer]:
                      - generic "Create Task" [ref=e630]
                    - button "Compose Email" [ref=e639] [cursor=pointer]:
                      - generic "Compose Email" [ref=e641]
              - row [ref=e645]:
                - cell [ref=e646]:
                  - generic [ref=e647] [cursor=pointer]
                - cell [ref=e648]:
                  - button [ref=e653] [cursor=pointer]
                - cell [ref=e658]:
                  - link "Numpy Update Amount Account" [ref=e663] [cursor=pointer]:
                    - /url: "#/accounts/record/ba251023-6f0f-4a68-9cce-8199208aed5b?offset=5"
                - cell [ref=e664]
                - cell [ref=e665]
                - cell [ref=e666]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e667]
                - cell [ref=e673]
                - cell [ref=e674]:
                  - generic [ref=e681]:
                    - button "Log Call" [ref=e683] [cursor=pointer]:
                      - generic "Log Call" [ref=e685]
                    - button "Schedule Meeting" [ref=e690] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e692]
                    - button "Create Task" [ref=e711] [cursor=pointer]:
                      - generic "Create Task" [ref=e713]
                    - button "Compose Email" [ref=e722] [cursor=pointer]:
                      - generic "Compose Email" [ref=e724]
              - row [ref=e728]:
                - cell [ref=e729]:
                  - generic [ref=e730] [cursor=pointer]
                - cell [ref=e731]:
                  - button [ref=e736] [cursor=pointer]
                - cell [ref=e741]:
                  - link "B.C. Investing International" [ref=e746] [cursor=pointer]:
                    - /url: "#/accounts/record/2574df7e-5d2d-4dc3-a0ea-6ee325ea89cc?offset=6"
                - cell "Phoenix" [ref=e747]
                - cell "USA" [ref=e753]
                - cell [ref=e759]:
                  - link "(028) 490-5377" [ref=e765] [cursor=pointer]:
                    - /url: tel:(028)490-5377
                - cell "Sally Bronsen" [ref=e766]
                - cell "qa94@example.info" [ref=e772]
                - cell [ref=e779]:
                  - generic [ref=e786]:
                    - button "Log Call" [ref=e788] [cursor=pointer]:
                      - generic "Log Call" [ref=e790]
                    - button "Schedule Meeting" [ref=e795] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e797]
                    - button "Create Task" [ref=e816] [cursor=pointer]:
                      - generic "Create Task" [ref=e818]
                    - button "Compose Email" [ref=e827] [cursor=pointer]:
                      - generic "Compose Email" [ref=e829]
              - row [ref=e833]:
                - cell [ref=e834]:
                  - generic [ref=e835] [cursor=pointer]
                - cell [ref=e836]:
                  - button [ref=e841] [cursor=pointer]
                - cell [ref=e846]:
                  - link "AtoZ Co Ltd" [ref=e851] [cursor=pointer]:
                    - /url: "#/accounts/record/b956d5bb-9372-4f2b-98e5-72b6102b81b7?offset=7"
                - cell "Denver" [ref=e852]
                - cell "USA" [ref=e858]
                - cell [ref=e864]:
                  - link "(938) 468-6090" [ref=e870] [cursor=pointer]:
                    - /url: tel:(938)468-6090
                - cell "Sarah Smith" [ref=e871]
                - cell "qa32@example.us" [ref=e877]
                - cell [ref=e884]:
                  - generic [ref=e891]:
                    - button "Log Call" [ref=e893] [cursor=pointer]:
                      - generic "Log Call" [ref=e895]
                    - button "Schedule Meeting" [ref=e900] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e902]
                    - button "Create Task" [ref=e921] [cursor=pointer]:
                      - generic "Create Task" [ref=e923]
                    - button "Compose Email" [ref=e932] [cursor=pointer]:
                      - generic "Compose Email" [ref=e934]
              - row [ref=e938]:
                - cell [ref=e939]:
                  - generic [ref=e940] [cursor=pointer]
                - cell [ref=e941]:
                  - button [ref=e946] [cursor=pointer]
                - cell [ref=e951]:
                  - link "Green Tractor Group Limited" [ref=e956] [cursor=pointer]:
                    - /url: "#/accounts/record/1740c62c-0834-459f-9ccc-0108f5b9c909?offset=8"
                - cell "Atlanta" [ref=e957]
                - cell "USA" [ref=e963]
                - cell [ref=e969]:
                  - link "(671) 043-3201" [ref=e975] [cursor=pointer]:
                    - /url: tel:(671)043-3201
                - cell "Chris Olliver" [ref=e976]
                - cell "qa.sales@example.tv" [ref=e982]
                - cell [ref=e989]:
                  - generic [ref=e996]:
                    - button "Log Call" [ref=e998] [cursor=pointer]:
                      - generic "Log Call" [ref=e1000]
                    - button "Schedule Meeting" [ref=e1005] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1007]
                    - button "Create Task" [ref=e1026] [cursor=pointer]:
                      - generic "Create Task" [ref=e1028]
                    - button "Compose Email" [ref=e1037] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1039]
              - row [ref=e1043]:
                - cell [ref=e1044]:
                  - generic [ref=e1045] [cursor=pointer]
                - cell [ref=e1046]:
                  - button [ref=e1051] [cursor=pointer]
                - cell [ref=e1056]:
                  - link "JAB Funds Ltd." [ref=e1061] [cursor=pointer]:
                    - /url: "#/accounts/record/e9f398d9-e6ef-4d2a-a6b5-f5232771dd07?offset=9"
                - cell "Denver" [ref=e1062]
                - cell "USA" [ref=e1068]
                - cell [ref=e1074]:
                  - link "(166) 266-6277" [ref=e1080] [cursor=pointer]:
                    - /url: tel:(166)266-6277
                - cell "Chris Olliver" [ref=e1081]
                - cell "phone.the.beans@example.co.uk" [ref=e1087]
                - cell [ref=e1094]:
                  - generic [ref=e1101]:
                    - button "Log Call" [ref=e1103] [cursor=pointer]:
                      - generic "Log Call" [ref=e1105]
                    - button "Schedule Meeting" [ref=e1110] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1112]
                    - button "Create Task" [ref=e1131] [cursor=pointer]:
                      - generic "Create Task" [ref=e1133]
                    - button "Compose Email" [ref=e1142] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1144]
              - row [ref=e1148]:
                - cell [ref=e1149]:
                  - generic [ref=e1150] [cursor=pointer]
                - cell [ref=e1151]:
                  - button [ref=e1156] [cursor=pointer]
                - cell [ref=e1161]:
                  - link "Kringle Bell IncK.A. Tower & Co" [ref=e1166] [cursor=pointer]:
                    - /url: "#/accounts/record/e0b42b75-86d2-4c42-90fa-b4b37fe5f72b?offset=10"
                - cell "Sacramento" [ref=e1167]
                - cell "USA" [ref=e1173]
                - cell [ref=e1179]:
                  - link "(490) 913-8041" [ref=e1185] [cursor=pointer]:
                    - /url: tel:(490)913-8041
                - cell "Max Jensen" [ref=e1186]
                - cell "support89@example.info" [ref=e1192]
                - cell [ref=e1199]:
                  - generic [ref=e1206]:
                    - button "Log Call" [ref=e1208] [cursor=pointer]:
                      - generic "Log Call" [ref=e1210]
                    - button "Schedule Meeting" [ref=e1215] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1217]
                    - button "Create Task" [ref=e1236] [cursor=pointer]:
                      - generic "Create Task" [ref=e1238]
                    - button "Compose Email" [ref=e1247] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1249]
              - row [ref=e1253]:
                - cell [ref=e1254]:
                  - generic [ref=e1255] [cursor=pointer]
                - cell [ref=e1256]:
                  - button [ref=e1261] [cursor=pointer]
                - cell [ref=e1266]:
                  - link "Bay Funding Co" [ref=e1271] [cursor=pointer]:
                    - /url: "#/accounts/record/17c256d1-e771-4f92-9228-ff07732160e4?offset=11"
                - cell "Atlanta" [ref=e1272]
                - cell "USA" [ref=e1278]
                - cell [ref=e1284]:
                  - link "(950) 451-2834" [ref=e1290] [cursor=pointer]:
                    - /url: tel:(950)451-2834
                - cell "Chris Olliver" [ref=e1291]
                - cell "vegan.kid.sales@example.tv" [ref=e1297]
                - cell [ref=e1304]:
                  - generic [ref=e1311]:
                    - button "Log Call" [ref=e1313] [cursor=pointer]:
                      - generic "Log Call" [ref=e1315]
                    - button "Schedule Meeting" [ref=e1320] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1322]
                    - button "Create Task" [ref=e1341] [cursor=pointer]:
                      - generic "Create Task" [ref=e1343]
                    - button "Compose Email" [ref=e1352] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1354]
              - row [ref=e1358]:
                - cell [ref=e1359]:
                  - generic [ref=e1360] [cursor=pointer]
                - cell [ref=e1361]:
                  - button [ref=e1366] [cursor=pointer]
                - cell [ref=e1371]:
                  - link "AB Drivers Limited" [ref=e1376] [cursor=pointer]:
                    - /url: "#/accounts/record/05e8285f-b0ee-4e9c-9866-05ba253e7db5?offset=12"
                - cell "Denver" [ref=e1377]
                - cell "USA" [ref=e1383]
                - cell [ref=e1389]:
                  - link "(279) 362-6344" [ref=e1395] [cursor=pointer]:
                    - /url: tel:(279)362-6344
                - cell "Sarah Smith" [ref=e1396]
                - cell "beans.sugar@example.co.jp" [ref=e1402]
                - cell [ref=e1409]:
                  - generic [ref=e1416]:
                    - button "Log Call" [ref=e1418] [cursor=pointer]:
                      - generic "Log Call" [ref=e1420]
                    - button "Schedule Meeting" [ref=e1425] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1427]
                    - button "Create Task" [ref=e1446] [cursor=pointer]:
                      - generic "Create Task" [ref=e1448]
                    - button "Compose Email" [ref=e1457] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1459]
              - row [ref=e1463]:
                - cell [ref=e1464]:
                  - generic [ref=e1465] [cursor=pointer]
                - cell [ref=e1466]:
                  - button [ref=e1471] [cursor=pointer]
                - cell [ref=e1476]:
                  - link "B.H. Edwards Inc" [ref=e1481] [cursor=pointer]:
                    - /url: "#/accounts/record/53e41128-90b2-4c3e-91ae-dbe257e0b22f?offset=13"
                - cell "Kansas City" [ref=e1482]
                - cell "USA" [ref=e1488]
                - cell [ref=e1494]:
                  - link "(427) 794-8519" [ref=e1500] [cursor=pointer]:
                    - /url: tel:(427)794-8519
                - cell "Sally Bronsen" [ref=e1501]
                - cell "vegan.vegan.kid@example.org" [ref=e1507]
                - cell [ref=e1514]:
                  - generic [ref=e1521]:
                    - button "Log Call" [ref=e1523] [cursor=pointer]:
                      - generic "Log Call" [ref=e1525]
                    - button "Schedule Meeting" [ref=e1530] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1532]
                    - button "Create Task" [ref=e1551] [cursor=pointer]:
                      - generic "Create Task" [ref=e1553]
                    - button "Compose Email" [ref=e1562] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1564]
              - row [ref=e1568]:
                - cell [ref=e1569]:
                  - generic [ref=e1570] [cursor=pointer]
                - cell [ref=e1571]:
                  - button [ref=e1576] [cursor=pointer]
                - cell [ref=e1581]:
                  - link "360 Vacations" [ref=e1586] [cursor=pointer]:
                    - /url: "#/accounts/record/03a51db1-66ab-42c2-8410-aae0d3a27f56?offset=14"
                - cell "San Mateo" [ref=e1587]
                - cell "USA" [ref=e1593]
                - cell [ref=e1599]:
                  - link "(503) 507-4714" [ref=e1605] [cursor=pointer]:
                    - /url: tel:(503)507-4714
                - cell "Sarah Smith" [ref=e1606]
                - cell "vegan.section.info@example.net" [ref=e1612]
                - cell [ref=e1619]:
                  - generic [ref=e1626]:
                    - button "Log Call" [ref=e1628] [cursor=pointer]:
                      - generic "Log Call" [ref=e1630]
                    - button "Schedule Meeting" [ref=e1635] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1637]
                    - button "Create Task" [ref=e1656] [cursor=pointer]:
                      - generic "Create Task" [ref=e1658]
                    - button "Compose Email" [ref=e1667] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1669]
              - row [ref=e1673]:
                - cell [ref=e1674]:
                  - generic [ref=e1675] [cursor=pointer]
                - cell [ref=e1676]:
                  - button [ref=e1681] [cursor=pointer]
                - cell [ref=e1686]:
                  - link "A.G. Parr PLC" [ref=e1691] [cursor=pointer]:
                    - /url: "#/accounts/record/f06d8d8a-55dd-4ca2-8470-41247b08cdc9?offset=15"
                - cell "Kansas City" [ref=e1692]
                - cell "USA" [ref=e1698]
                - cell [ref=e1704]:
                  - link "(696) 905-7007" [ref=e1710] [cursor=pointer]:
                    - /url: tel:(696)905-7007
                - cell "Will Westin" [ref=e1711]
                - cell "vegan.beans@example.biz" [ref=e1717]
                - cell [ref=e1724]:
                  - generic [ref=e1731]:
                    - button "Log Call" [ref=e1733] [cursor=pointer]:
                      - generic "Log Call" [ref=e1735]
                    - button "Schedule Meeting" [ref=e1740] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1742]
                    - button "Create Task" [ref=e1761] [cursor=pointer]:
                      - generic "Create Task" [ref=e1763]
                    - button "Compose Email" [ref=e1772] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1774]
              - row [ref=e1778]:
                - cell [ref=e1779]:
                  - generic [ref=e1780] [cursor=pointer]
                - cell [ref=e1781]:
                  - button [ref=e1786] [cursor=pointer]
                - cell [ref=e1791]:
                  - link "Calm Sailing Inc" [ref=e1796] [cursor=pointer]:
                    - /url: "#/accounts/record/758766b0-7f57-460b-9904-34b318512fc8?offset=16"
                - cell "Austin" [ref=e1797]
                - cell "USA" [ref=e1803]
                - cell [ref=e1809]:
                  - link "(754) 150-9056" [ref=e1815] [cursor=pointer]:
                    - /url: tel:(754)150-9056
                - cell "Max Jensen" [ref=e1816]
                - cell "info.sugar.section@example.cn" [ref=e1822]
                - cell [ref=e1829]:
                  - generic [ref=e1836]:
                    - button "Log Call" [ref=e1838] [cursor=pointer]:
                      - generic "Log Call" [ref=e1840]
                    - button "Schedule Meeting" [ref=e1845] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1847]
                    - button "Create Task" [ref=e1866] [cursor=pointer]:
                      - generic "Create Task" [ref=e1868]
                    - button "Compose Email" [ref=e1877] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1879]
              - row [ref=e1883]:
                - cell [ref=e1884]:
                  - generic [ref=e1885] [cursor=pointer]
                - cell [ref=e1886]:
                  - button [ref=e1891] [cursor=pointer]
                - cell [ref=e1896]:
                  - link "Sandeon Consolidation Corp" [ref=e1901] [cursor=pointer]:
                    - /url: "#/accounts/record/d030dbef-dc88-4091-9fb9-9b98e46a8bc9?offset=17"
                - cell "Dover" [ref=e1902]
                - cell "USA" [ref=e1908]
                - cell [ref=e1914]:
                  - link "(460) 072-3232" [ref=e1920] [cursor=pointer]:
                    - /url: tel:(460)072-3232
                - cell "Will Westin" [ref=e1921]
                - cell "dev27@example.de" [ref=e1927]
                - cell [ref=e1934]:
                  - generic [ref=e1941]:
                    - button "Log Call" [ref=e1943] [cursor=pointer]:
                      - generic "Log Call" [ref=e1945]
                    - button "Schedule Meeting" [ref=e1950] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1952]
                    - button "Create Task" [ref=e1971] [cursor=pointer]:
                      - generic "Create Task" [ref=e1973]
                    - button "Compose Email" [ref=e1982] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1984]
              - row [ref=e1988]:
                - cell [ref=e1989]:
                  - generic [ref=e1990] [cursor=pointer]
                - cell [ref=e1991]:
                  - button [ref=e1996] [cursor=pointer]
                - cell [ref=e2001]:
                  - link "Aim Capital Inc" [ref=e2006] [cursor=pointer]:
                    - /url: "#/accounts/record/7fca75df-f011-489d-95b5-051d1bed003e?offset=18"
                - cell "Salt Lake City" [ref=e2007]
                - cell "USA" [ref=e2013]
                - cell [ref=e2019]:
                  - link "(989) 248-3141" [ref=e2025] [cursor=pointer]:
                    - /url: tel:(989)248-3141
                - cell "Max Jensen" [ref=e2026]
                - cell "sugar.kid.hr@example.name" [ref=e2032]
                - cell [ref=e2039]:
                  - generic [ref=e2046]:
                    - button "Log Call" [ref=e2048] [cursor=pointer]:
                      - generic "Log Call" [ref=e2050]
                    - button "Schedule Meeting" [ref=e2055] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2057]
                    - button "Create Task" [ref=e2076] [cursor=pointer]:
                      - generic "Create Task" [ref=e2078]
                    - button "Compose Email" [ref=e2087] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2089]
              - row [ref=e2093]:
                - cell [ref=e2094]:
                  - generic [ref=e2095] [cursor=pointer]
                - cell [ref=e2096]:
                  - button [ref=e2101] [cursor=pointer]
                - cell [ref=e2106]:
                  - link "Complete Holding" [ref=e2111] [cursor=pointer]:
                    - /url: "#/accounts/record/472da898-2a80-466c-8c6b-293fc90ac5f5?offset=19"
                - cell "Frankfort" [ref=e2112]
                - cell "USA" [ref=e2118]
                - cell [ref=e2124]:
                  - link "(591) 477-3084" [ref=e2130] [cursor=pointer]:
                    - /url: tel:(591)477-3084
                - cell "Sally Bronsen" [ref=e2131]
                - cell "beans.vegan@example.co.jp" [ref=e2137]
                - cell [ref=e2144]:
                  - generic [ref=e2151]:
                    - button "Log Call" [ref=e2153] [cursor=pointer]:
                      - generic "Log Call" [ref=e2155]
                    - button "Schedule Meeting" [ref=e2160] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2162]
                    - button "Create Task" [ref=e2181] [cursor=pointer]:
                      - generic "Create Task" [ref=e2183]
                    - button "Compose Email" [ref=e2192] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2194]
              - row [ref=e2198]:
                - cell [ref=e2199]:
                  - generic [ref=e2200] [cursor=pointer]
                - cell [ref=e2201]:
                  - button [ref=e2206] [cursor=pointer]
                - cell [ref=e2211]:
                  - link "Jungle Systems Inc" [ref=e2216] [cursor=pointer]:
                    - /url: "#/accounts/record/8092a009-50ed-48f0-9e1d-e43dc1647a28?offset=20"
                - cell "Los Angeles" [ref=e2217]
                - cell "USA" [ref=e2223]
                - cell [ref=e2229]:
                  - link "(322) 533-7657" [ref=e2235] [cursor=pointer]:
                    - /url: tel:(322)533-7657
                - cell "Chris Olliver" [ref=e2236]
                - cell "sales51@example.org" [ref=e2242]
                - cell [ref=e2249]:
                  - generic [ref=e2256]:
                    - button "Log Call" [ref=e2258] [cursor=pointer]:
                      - generic "Log Call" [ref=e2260]
                    - button "Schedule Meeting" [ref=e2265] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2267]
                    - button "Create Task" [ref=e2286] [cursor=pointer]:
                      - generic "Create Task" [ref=e2288]
                    - button "Compose Email" [ref=e2297] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2299]
          - generic [ref=e2305]:
            - generic [ref=e2306]:
              - generic [ref=e2308]:
                - button [aria-hidden] [ref=e2310] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2315] [cursor=pointer]
              - button "Columns" [ref=e2322] [cursor=pointer]:
                - generic "Columns" [ref=e2324]
            - generic [ref=e2336]:
              - button "Navigate to first page" [ref=e2337] [cursor=pointer]
              - button "Previous page" [ref=e2343] [cursor=pointer]
              - text: (1 - 20 of 55)
              - button "Next page" [ref=e2349] [cursor=pointer]
              - button "Navigate to last page" [ref=e2355] [cursor=pointer]
        - generic [ref=e2368]:
          - generic [ref=e2369]: Quick Charts
          - combobox [ref=e2383]:
            - option "New Accounts by Month" [selected]
  - generic [ref=e2408]:
    - generic [ref=e2409]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2410]: Back To Top
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
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('listbox', { name: 'Option List', exact: true }).getByText('Numpy Update Amount Account', { exact: true }) resolved to 2 elements:
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