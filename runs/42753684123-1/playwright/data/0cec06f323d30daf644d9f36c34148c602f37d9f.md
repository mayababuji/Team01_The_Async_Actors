# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Sort accounts by name
- Location: tests/generated/features/accounts.feature.spec.js:114:3

# Error details

```
TimeoutError: page.waitForFunction: Timeout 20000ms exceeded.
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
              - text: (1 - 20 of 52)
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
                  - link "Import Account QA One" [ref=e307] [cursor=pointer]:
                    - /url: "#/accounts/record/274c1d97-61fc-4bb7-b323-5ae7a4af525b?offset=1"
                - cell [ref=e308]
                - cell [ref=e309]
                - cell [ref=e310]:
                  - link "(555) 010-1001" [ref=e316] [cursor=pointer]:
                    - /url: tel:(555)010-1001
                - cell "Will Westin" [ref=e317]
                - cell "import.one@example.com" [ref=e323]
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
                  - link "Import Account QA Two" [ref=e402] [cursor=pointer]:
                    - /url: "#/accounts/record/a980f7dd-6f45-461f-9c06-abbe5e133174?offset=2"
                - cell [ref=e403]
                - cell [ref=e404]
                - cell [ref=e405]:
                  - link "(555) 010-1002" [ref=e411] [cursor=pointer]:
                    - /url: tel:(555)010-1002
                - cell "Will Westin" [ref=e412]
                - cell "import.two@example.com" [ref=e418]
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
                  - link "B.C. Investing International" [ref=e497] [cursor=pointer]:
                    - /url: "#/accounts/record/21527875-1431-4a48-856f-44c405aef39e?offset=3"
                - cell "Phoenix" [ref=e498]
                - cell "USA" [ref=e504]
                - cell [ref=e510]:
                  - link "(028) 490-5377" [ref=e516] [cursor=pointer]:
                    - /url: tel:(028)490-5377
                - cell "Sally Bronsen" [ref=e517]
                - cell "qa94@example.info" [ref=e523]
                - cell [ref=e530]:
                  - generic [ref=e537]:
                    - button "Log Call" [ref=e539] [cursor=pointer]:
                      - generic "Log Call" [ref=e541]
                    - button "Schedule Meeting" [ref=e546] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e548]
                    - button "Create Task" [ref=e567] [cursor=pointer]:
                      - generic "Create Task" [ref=e569]
                    - button "Compose Email" [ref=e578] [cursor=pointer]:
                      - generic "Compose Email" [ref=e580]
              - row [ref=e584]:
                - cell [ref=e585]:
                  - generic [ref=e586] [cursor=pointer]
                - cell [ref=e587]:
                  - button [ref=e592] [cursor=pointer]
                - cell [ref=e597]:
                  - link "AtoZ Co Ltd" [ref=e602] [cursor=pointer]:
                    - /url: "#/accounts/record/8d255de9-28e7-4b35-98b3-35787a90da90?offset=4"
                - cell "Denver" [ref=e603]
                - cell "USA" [ref=e609]
                - cell [ref=e615]:
                  - link "(938) 468-6090" [ref=e621] [cursor=pointer]:
                    - /url: tel:(938)468-6090
                - cell "Sarah Smith" [ref=e622]
                - cell "qa32@example.us" [ref=e628]
                - cell [ref=e635]:
                  - generic [ref=e642]:
                    - button "Log Call" [ref=e644] [cursor=pointer]:
                      - generic "Log Call" [ref=e646]
                    - button "Schedule Meeting" [ref=e651] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e653]
                    - button "Create Task" [ref=e672] [cursor=pointer]:
                      - generic "Create Task" [ref=e674]
                    - button "Compose Email" [ref=e683] [cursor=pointer]:
                      - generic "Compose Email" [ref=e685]
              - row [ref=e689]:
                - cell [ref=e690]:
                  - generic [ref=e691] [cursor=pointer]
                - cell [ref=e692]:
                  - button [ref=e697] [cursor=pointer]
                - cell [ref=e702]:
                  - link "Green Tractor Group Limited" [ref=e707] [cursor=pointer]:
                    - /url: "#/accounts/record/403860e6-19c1-46e3-a2e7-c10ff79af139?offset=5"
                - cell "Atlanta" [ref=e708]
                - cell "USA" [ref=e714]
                - cell [ref=e720]:
                  - link "(671) 043-3201" [ref=e726] [cursor=pointer]:
                    - /url: tel:(671)043-3201
                - cell "Chris Olliver" [ref=e727]
                - cell "qa.sales@example.tv" [ref=e733]
                - cell [ref=e740]:
                  - generic [ref=e747]:
                    - button "Log Call" [ref=e749] [cursor=pointer]:
                      - generic "Log Call" [ref=e751]
                    - button "Schedule Meeting" [ref=e756] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e758]
                    - button "Create Task" [ref=e777] [cursor=pointer]:
                      - generic "Create Task" [ref=e779]
                    - button "Compose Email" [ref=e788] [cursor=pointer]:
                      - generic "Compose Email" [ref=e790]
              - row [ref=e794]:
                - cell [ref=e795]:
                  - generic [ref=e796] [cursor=pointer]
                - cell [ref=e797]:
                  - button [ref=e802] [cursor=pointer]
                - cell [ref=e807]:
                  - link "JAB Funds Ltd." [ref=e812] [cursor=pointer]:
                    - /url: "#/accounts/record/c934741a-cd04-4f24-a63b-d14b9a606110?offset=6"
                - cell "Denver" [ref=e813]
                - cell "USA" [ref=e819]
                - cell [ref=e825]:
                  - link "(166) 266-6277" [ref=e831] [cursor=pointer]:
                    - /url: tel:(166)266-6277
                - cell "Chris Olliver" [ref=e832]
                - cell "phone.the.beans@example.co.uk" [ref=e838]
                - cell [ref=e845]:
                  - generic [ref=e852]:
                    - button "Log Call" [ref=e854] [cursor=pointer]:
                      - generic "Log Call" [ref=e856]
                    - button "Schedule Meeting" [ref=e861] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e863]
                    - button "Create Task" [ref=e882] [cursor=pointer]:
                      - generic "Create Task" [ref=e884]
                    - button "Compose Email" [ref=e893] [cursor=pointer]:
                      - generic "Compose Email" [ref=e895]
              - row [ref=e899]:
                - cell [ref=e900]:
                  - generic [ref=e901] [cursor=pointer]
                - cell [ref=e902]:
                  - button [ref=e907] [cursor=pointer]
                - cell [ref=e912]:
                  - link "Kringle Bell IncK.A. Tower & Co" [ref=e917] [cursor=pointer]:
                    - /url: "#/accounts/record/3de1fb9e-f1b9-4e5a-b575-8b43d5b4bec1?offset=7"
                - cell "Sacramento" [ref=e918]
                - cell "USA" [ref=e924]
                - cell [ref=e930]:
                  - link "(490) 913-8041" [ref=e936] [cursor=pointer]:
                    - /url: tel:(490)913-8041
                - cell "Max Jensen" [ref=e937]
                - cell "support89@example.info" [ref=e943]
                - cell [ref=e950]:
                  - generic [ref=e957]:
                    - button "Log Call" [ref=e959] [cursor=pointer]:
                      - generic "Log Call" [ref=e961]
                    - button "Schedule Meeting" [ref=e966] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e968]
                    - button "Create Task" [ref=e987] [cursor=pointer]:
                      - generic "Create Task" [ref=e989]
                    - button "Compose Email" [ref=e998] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1000]
              - row [ref=e1004]:
                - cell [ref=e1005]:
                  - generic [ref=e1006] [cursor=pointer]
                - cell [ref=e1007]:
                  - button [ref=e1012] [cursor=pointer]
                - cell [ref=e1017]:
                  - link "Bay Funding Co" [ref=e1022] [cursor=pointer]:
                    - /url: "#/accounts/record/4211f804-8067-4056-9e50-cdc1cce0f414?offset=8"
                - cell "Atlanta" [ref=e1023]
                - cell "USA" [ref=e1029]
                - cell [ref=e1035]:
                  - link "(950) 451-2834" [ref=e1041] [cursor=pointer]:
                    - /url: tel:(950)451-2834
                - cell "Chris Olliver" [ref=e1042]
                - cell "vegan.kid.sales@example.tv" [ref=e1048]
                - cell [ref=e1055]:
                  - generic [ref=e1062]:
                    - button "Log Call" [ref=e1064] [cursor=pointer]:
                      - generic "Log Call" [ref=e1066]
                    - button "Schedule Meeting" [ref=e1071] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1073]
                    - button "Create Task" [ref=e1092] [cursor=pointer]:
                      - generic "Create Task" [ref=e1094]
                    - button "Compose Email" [ref=e1103] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1105]
              - row [ref=e1109]:
                - cell [ref=e1110]:
                  - generic [ref=e1111] [cursor=pointer]
                - cell [ref=e1112]:
                  - button [ref=e1117] [cursor=pointer]
                - cell [ref=e1122]:
                  - link "AB Drivers Limited" [ref=e1127] [cursor=pointer]:
                    - /url: "#/accounts/record/12b650bf-040e-4c3d-b87b-6b798e7582c9?offset=9"
                - cell "Denver" [ref=e1128]
                - cell "USA" [ref=e1134]
                - cell [ref=e1140]:
                  - link "(279) 362-6344" [ref=e1146] [cursor=pointer]:
                    - /url: tel:(279)362-6344
                - cell "Sarah Smith" [ref=e1147]
                - cell "beans.sugar@example.co.jp" [ref=e1153]
                - cell [ref=e1160]:
                  - generic [ref=e1167]:
                    - button "Log Call" [ref=e1169] [cursor=pointer]:
                      - generic "Log Call" [ref=e1171]
                    - button "Schedule Meeting" [ref=e1176] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1178]
                    - button "Create Task" [ref=e1197] [cursor=pointer]:
                      - generic "Create Task" [ref=e1199]
                    - button "Compose Email" [ref=e1208] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1210]
              - row [ref=e1214]:
                - cell [ref=e1215]:
                  - generic [ref=e1216] [cursor=pointer]
                - cell [ref=e1217]:
                  - button [ref=e1222] [cursor=pointer]
                - cell [ref=e1227]:
                  - link "B.H. Edwards Inc" [ref=e1232] [cursor=pointer]:
                    - /url: "#/accounts/record/24626d23-27a1-4b24-a9f1-fe17adc8ed4c?offset=10"
                - cell "Kansas City" [ref=e1233]
                - cell "USA" [ref=e1239]
                - cell [ref=e1245]:
                  - link "(427) 794-8519" [ref=e1251] [cursor=pointer]:
                    - /url: tel:(427)794-8519
                - cell "Sally Bronsen" [ref=e1252]
                - cell "vegan.vegan.kid@example.org" [ref=e1258]
                - cell [ref=e1265]:
                  - generic [ref=e1272]:
                    - button "Log Call" [ref=e1274] [cursor=pointer]:
                      - generic "Log Call" [ref=e1276]
                    - button "Schedule Meeting" [ref=e1281] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1283]
                    - button "Create Task" [ref=e1302] [cursor=pointer]:
                      - generic "Create Task" [ref=e1304]
                    - button "Compose Email" [ref=e1313] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1315]
              - row [ref=e1319]:
                - cell [ref=e1320]:
                  - generic [ref=e1321] [cursor=pointer]
                - cell [ref=e1322]:
                  - button [ref=e1327] [cursor=pointer]
                - cell [ref=e1332]:
                  - link "360 Vacations" [ref=e1337] [cursor=pointer]:
                    - /url: "#/accounts/record/d84c36b4-7162-491b-a5ed-9d1267aed5ff?offset=11"
                - cell "San Mateo" [ref=e1338]
                - cell "USA" [ref=e1344]
                - cell [ref=e1350]:
                  - link "(503) 507-4714" [ref=e1356] [cursor=pointer]:
                    - /url: tel:(503)507-4714
                - cell "Sarah Smith" [ref=e1357]
                - cell "vegan.section.info@example.net" [ref=e1363]
                - cell [ref=e1370]:
                  - generic [ref=e1377]:
                    - button "Log Call" [ref=e1379] [cursor=pointer]:
                      - generic "Log Call" [ref=e1381]
                    - button "Schedule Meeting" [ref=e1386] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1388]
                    - button "Create Task" [ref=e1407] [cursor=pointer]:
                      - generic "Create Task" [ref=e1409]
                    - button "Compose Email" [ref=e1418] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1420]
              - row [ref=e1424]:
                - cell [ref=e1425]:
                  - generic [ref=e1426] [cursor=pointer]
                - cell [ref=e1427]:
                  - button [ref=e1432] [cursor=pointer]
                - cell [ref=e1437]:
                  - link "A.G. Parr PLC" [ref=e1442] [cursor=pointer]:
                    - /url: "#/accounts/record/7748b890-84d8-4479-8175-7f1235d4d614?offset=12"
                - cell "Kansas City" [ref=e1443]
                - cell "USA" [ref=e1449]
                - cell [ref=e1455]:
                  - link "(696) 905-7007" [ref=e1461] [cursor=pointer]:
                    - /url: tel:(696)905-7007
                - cell "Will Westin" [ref=e1462]
                - cell "vegan.beans@example.biz" [ref=e1468]
                - cell [ref=e1475]:
                  - generic [ref=e1482]:
                    - button "Log Call" [ref=e1484] [cursor=pointer]:
                      - generic "Log Call" [ref=e1486]
                    - button "Schedule Meeting" [ref=e1491] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1493]
                    - button "Create Task" [ref=e1512] [cursor=pointer]:
                      - generic "Create Task" [ref=e1514]
                    - button "Compose Email" [ref=e1523] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1525]
              - row [ref=e1529]:
                - cell [ref=e1530]:
                  - generic [ref=e1531] [cursor=pointer]
                - cell [ref=e1532]:
                  - button [ref=e1537] [cursor=pointer]
                - cell [ref=e1542]:
                  - link "Calm Sailing Inc" [ref=e1547] [cursor=pointer]:
                    - /url: "#/accounts/record/85fc522f-6dcb-44a5-8a19-766fe85f6a44?offset=13"
                - cell "Austin" [ref=e1548]
                - cell "USA" [ref=e1554]
                - cell [ref=e1560]:
                  - link "(754) 150-9056" [ref=e1566] [cursor=pointer]:
                    - /url: tel:(754)150-9056
                - cell "Max Jensen" [ref=e1567]
                - cell "info.sugar.section@example.cn" [ref=e1573]
                - cell [ref=e1580]:
                  - generic [ref=e1587]:
                    - button "Log Call" [ref=e1589] [cursor=pointer]:
                      - generic "Log Call" [ref=e1591]
                    - button "Schedule Meeting" [ref=e1596] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1598]
                    - button "Create Task" [ref=e1617] [cursor=pointer]:
                      - generic "Create Task" [ref=e1619]
                    - button "Compose Email" [ref=e1628] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1630]
              - row [ref=e1634]:
                - cell [ref=e1635]:
                  - generic [ref=e1636] [cursor=pointer]
                - cell [ref=e1637]:
                  - button [ref=e1642] [cursor=pointer]
                - cell [ref=e1647]:
                  - link "Sandeon Consolidation Corp" [ref=e1652] [cursor=pointer]:
                    - /url: "#/accounts/record/29a07339-a0a9-42c5-9e3c-439ddf85d297?offset=14"
                - cell "Dover" [ref=e1653]
                - cell "USA" [ref=e1659]
                - cell [ref=e1665]:
                  - link "(460) 072-3232" [ref=e1671] [cursor=pointer]:
                    - /url: tel:(460)072-3232
                - cell "Will Westin" [ref=e1672]
                - cell "dev27@example.de" [ref=e1678]
                - cell [ref=e1685]:
                  - generic [ref=e1692]:
                    - button "Log Call" [ref=e1694] [cursor=pointer]:
                      - generic "Log Call" [ref=e1696]
                    - button "Schedule Meeting" [ref=e1701] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1703]
                    - button "Create Task" [ref=e1722] [cursor=pointer]:
                      - generic "Create Task" [ref=e1724]
                    - button "Compose Email" [ref=e1733] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1735]
              - row [ref=e1739]:
                - cell [ref=e1740]:
                  - generic [ref=e1741] [cursor=pointer]
                - cell [ref=e1742]:
                  - button [ref=e1747] [cursor=pointer]
                - cell [ref=e1752]:
                  - link "Aim Capital Inc" [ref=e1757] [cursor=pointer]:
                    - /url: "#/accounts/record/6e2897e5-e606-4e4e-9743-dfde891b49a0?offset=15"
                - cell "Salt Lake City" [ref=e1758]
                - cell "USA" [ref=e1764]
                - cell [ref=e1770]:
                  - link "(989) 248-3141" [ref=e1776] [cursor=pointer]:
                    - /url: tel:(989)248-3141
                - cell "Max Jensen" [ref=e1777]
                - cell "sugar.kid.hr@example.name" [ref=e1783]
                - cell [ref=e1790]:
                  - generic [ref=e1797]:
                    - button "Log Call" [ref=e1799] [cursor=pointer]:
                      - generic "Log Call" [ref=e1801]
                    - button "Schedule Meeting" [ref=e1806] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1808]
                    - button "Create Task" [ref=e1827] [cursor=pointer]:
                      - generic "Create Task" [ref=e1829]
                    - button "Compose Email" [ref=e1838] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1840]
              - row [ref=e1844]:
                - cell [ref=e1845]:
                  - generic [ref=e1846] [cursor=pointer]
                - cell [ref=e1847]:
                  - button [ref=e1852] [cursor=pointer]
                - cell [ref=e1857]:
                  - link "Complete Holding" [ref=e1862] [cursor=pointer]:
                    - /url: "#/accounts/record/334f28ce-b4c9-4272-9d50-ce97897711d1?offset=16"
                - cell "Frankfort" [ref=e1863]
                - cell "USA" [ref=e1869]
                - cell [ref=e1875]:
                  - link "(591) 477-3084" [ref=e1881] [cursor=pointer]:
                    - /url: tel:(591)477-3084
                - cell "Sally Bronsen" [ref=e1882]
                - cell "beans.vegan@example.co.jp" [ref=e1888]
                - cell [ref=e1895]:
                  - generic [ref=e1902]:
                    - button "Log Call" [ref=e1904] [cursor=pointer]:
                      - generic "Log Call" [ref=e1906]
                    - button "Schedule Meeting" [ref=e1911] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1913]
                    - button "Create Task" [ref=e1932] [cursor=pointer]:
                      - generic "Create Task" [ref=e1934]
                    - button "Compose Email" [ref=e1943] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1945]
              - row [ref=e1949]:
                - cell [ref=e1950]:
                  - generic [ref=e1951] [cursor=pointer]
                - cell [ref=e1952]:
                  - button [ref=e1957] [cursor=pointer]
                - cell [ref=e1962]:
                  - link "Jungle Systems Inc" [ref=e1967] [cursor=pointer]:
                    - /url: "#/accounts/record/4ade8fa6-5cd6-4a5f-bcff-60a97662a7c6?offset=17"
                - cell "Los Angeles" [ref=e1968]
                - cell "USA" [ref=e1974]
                - cell [ref=e1980]:
                  - link "(322) 533-7657" [ref=e1986] [cursor=pointer]:
                    - /url: tel:(322)533-7657
                - cell "Chris Olliver" [ref=e1987]
                - cell "sales51@example.org" [ref=e1993]
                - cell [ref=e2000]:
                  - generic [ref=e2007]:
                    - button "Log Call" [ref=e2009] [cursor=pointer]:
                      - generic "Log Call" [ref=e2011]
                    - button "Schedule Meeting" [ref=e2016] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2018]
                    - button "Create Task" [ref=e2037] [cursor=pointer]:
                      - generic "Create Task" [ref=e2039]
                    - button "Compose Email" [ref=e2048] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2050]
              - row [ref=e2054]:
                - cell [ref=e2055]:
                  - generic [ref=e2056] [cursor=pointer]
                - cell [ref=e2057]:
                  - button [ref=e2062] [cursor=pointer]
                - cell [ref=e2067]:
                  - link "Avery Software Co" [ref=e2072] [cursor=pointer]:
                    - /url: "#/accounts/record/3a1aa1cf-2ec3-4163-978a-a214467cf872?offset=18"
                - cell "Austin" [ref=e2073]
                - cell "USA" [ref=e2079]
                - cell [ref=e2085]:
                  - link "(720) 230-8973" [ref=e2091] [cursor=pointer]:
                    - /url: tel:(720)230-8973
                - cell "Max Jensen" [ref=e2092]
                - cell "vegan42@example.net" [ref=e2098]
                - cell [ref=e2105]:
                  - generic [ref=e2112]:
                    - button "Log Call" [ref=e2114] [cursor=pointer]:
                      - generic "Log Call" [ref=e2116]
                    - button "Schedule Meeting" [ref=e2121] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2123]
                    - button "Create Task" [ref=e2142] [cursor=pointer]:
                      - generic "Create Task" [ref=e2144]
                    - button "Compose Email" [ref=e2153] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2155]
              - row [ref=e2159]:
                - cell [ref=e2160]:
                  - generic [ref=e2161] [cursor=pointer]
                - cell [ref=e2162]:
                  - button [ref=e2167] [cursor=pointer]
                - cell [ref=e2172]:
                  - link "Gifted Holdings AG" [ref=e2177] [cursor=pointer]:
                    - /url: "#/accounts/record/6d567a7d-165e-4388-9907-dfa0e7b901d1?offset=19"
                - cell "Kansas City" [ref=e2178]
                - cell "USA" [ref=e2184]
                - cell [ref=e2190]:
                  - link "(260) 204-7215" [ref=e2196] [cursor=pointer]:
                    - /url: tel:(260)204-7215
                - cell "Sarah Smith" [ref=e2197]
                - cell "support.dev@example.net" [ref=e2203]
                - cell [ref=e2210]:
                  - generic [ref=e2217]:
                    - button "Log Call" [ref=e2219] [cursor=pointer]:
                      - generic "Log Call" [ref=e2221]
                    - button "Schedule Meeting" [ref=e2226] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2228]
                    - button "Create Task" [ref=e2247] [cursor=pointer]:
                      - generic "Create Task" [ref=e2249]
                    - button "Compose Email" [ref=e2258] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2260]
              - row [ref=e2264]:
                - cell [ref=e2265]:
                  - generic [ref=e2266] [cursor=pointer]
                - cell [ref=e2267]:
                  - button [ref=e2272] [cursor=pointer]
                - cell [ref=e2277]:
                  - link "Ink Conglomerate Inc" [ref=e2282] [cursor=pointer]:
                    - /url: "#/accounts/record/ff91859b-ded7-47bf-b486-e4c41ff0bbd5?offset=20"
                - cell "San Jose" [ref=e2283]
                - cell "USA" [ref=e2289]
                - cell [ref=e2295]:
                  - link "(431) 834-1137" [ref=e2301] [cursor=pointer]:
                    - /url: tel:(431)834-1137
                - cell "Sarah Smith" [ref=e2302]
                - cell "hr.sales@example.cn" [ref=e2308]
                - cell [ref=e2315]:
                  - generic [ref=e2322]:
                    - button "Log Call" [ref=e2324] [cursor=pointer]:
                      - generic "Log Call" [ref=e2326]
                    - button "Schedule Meeting" [ref=e2331] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2333]
                    - button "Create Task" [ref=e2352] [cursor=pointer]:
                      - generic "Create Task" [ref=e2354]
                    - button "Compose Email" [ref=e2363] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2365]
          - generic [ref=e2371]:
            - generic [ref=e2372]:
              - generic [ref=e2374]:
                - button [aria-hidden] [ref=e2376] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2381] [cursor=pointer]
              - button "Columns" [ref=e2388] [cursor=pointer]:
                - generic "Columns" [ref=e2390]
            - generic [ref=e2402]:
              - button "Navigate to first page" [ref=e2403] [cursor=pointer]
              - button "Previous page" [ref=e2409] [cursor=pointer]
              - text: (1 - 20 of 52)
              - button "Next page" [ref=e2415] [cursor=pointer]
              - button "Navigate to last page" [ref=e2421] [cursor=pointer]
        - generic [ref=e2434]:
          - generic [ref=e2435]: Quick Charts
          - generic [ref=e2445]:
            - combobox [ref=e2449]:
              - option "New Accounts by Month" [selected]
            - img [ref=e2453]:
              - generic [ref=e2454]:
                - generic [ref=e2458]:
                  - generic "2025-12" [ref=e2459]
                  - generic "2026-01" [ref=e2461]
                  - generic "2026-02" [ref=e2463]
                  - generic "2026-03" [ref=e2465]
                  - generic "2026-04" [ref=e2467]
                  - generic "2026-05" [ref=e2469]
                  - generic "2026-06" [ref=e2471]
                  - generic "2026-07" [ref=e2473]
                  - generic "2026-08" [ref=e2475]
                  - generic "2026-09" [ref=e2477]
                  - generic "2026-10" [ref=e2479]
                  - generic "2026-11" [ref=e2481]
                - generic [ref=e2486]:
                  - generic "0" [ref=e2487]
                  - generic "0.5" [ref=e2489]
                  - generic "1" [ref=e2491]
                  - generic "1.5" [ref=e2493]
                  - generic "2" [ref=e2495]
  - generic [ref=e2510]:
    - generic [ref=e2511]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2512]: Back To Top
```

# Test source

```ts
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
  905  |     await this.deleteAccountAction.click();
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
> 970  |     await this.page.waitForFunction(() => {
       |                     ^ TimeoutError: page.waitForFunction: Timeout 20000ms exceeded.
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
  1006 |       await this.waitForNameSortDescending();
  1007 |     }
  1008 | 
  1009 | 
  1010 |     await this.clickAccountNameSortButton();
  1011 |     await this.waitForNameSortNotDescending();
  1012 |   }
  1013 | 
  1014 | 
  1015 |   // --------------------------------------------------
  1016 |   // Import: template and file selection
  1017 |   // --------------------------------------------------
  1018 | 
  1019 | 
  1020 |   async downloadAccountImportTemplate() {
  1021 |     const downloadPromise = this.page.waitForEvent('download');
  1022 | 
  1023 | 
  1024 |     await this.accountImportTemplateLink.click();
  1025 | 
  1026 | 
  1027 |     return await downloadPromise;
  1028 |   }
  1029 | 
  1030 | 
  1031 |   async selectAccountImportFile(filePath) {
  1032 |     await this.accountImportFileInput.setInputFiles(filePath);
  1033 |   }
  1034 | 
  1035 | 
  1036 |   async clearAccountImportFile() {
  1037 |     await this.accountImportFileInput.setInputFiles([]);
  1038 |   }
  1039 | 
  1040 | 
  1041 |   async getSelectedAccountImportFileName() {
  1042 |     return await this.accountImportFileInput.evaluate(
  1043 |       input => input.files?.[0]?.name ?? null
  1044 |     );
  1045 |   }
  1046 | 
  1047 | 
  1048 |   // --------------------------------------------------
  1049 |   // Import: wizard navigation
  1050 |   // --------------------------------------------------
  1051 | 
  1052 | 
  1053 |   async clickAccountImportNextButton() {
  1054 |     await this.accountImportNextButton.click();
  1055 |   }
  1056 | 
  1057 | 
  1058 |   async confirmImportFileProperties() {
  1059 |     await this.importFilePropertiesHeading.waitFor({
  1060 |       state: 'visible'
  1061 |     });
  1062 | 
  1063 | 
  1064 |     await this.importFilePropertiesNextButton.click();
  1065 |   }
  1066 | 
  1067 | 
  1068 |   async confirmAccountFieldMappings() {
  1069 |     await this.importFieldMappingsHeading.waitFor({
  1070 |       state: 'visible'
```