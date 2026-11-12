# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with <type> >> Create an opportunity with New Business
- Location: tests/generated/features/opportunities.feature.spec.js:57:5

# Error details

```
AggregateError: Failed to delete one or more test-created opportunities.
```

```
TimeoutError: page.waitForURL: Timeout 45000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
    - alert [ref=e140]:
      - text: Error occurred while retrieving records
      - generic "Close" [ref=e141] [cursor=pointer]: ×
    - generic [ref=e143]:
      - generic [ref=e145]:
        - generic [ref=e146]:
          - generic [ref=e147]: ACCOUNTS
          - generic [ref=e154]:
            - group [ref=e156]:
              - button "Filter" [ref=e158] [cursor=pointer]
            - button "Insights" [ref=e160] [cursor=pointer]
        - separator [ref=e167]
      - generic [ref=e170]:
        - generic [ref=e173]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e179]:
                - button [aria-hidden] [ref=e181] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e186] [cursor=pointer]
              - button "Columns" [ref=e193] [cursor=pointer]:
                - generic "Columns" [ref=e195]
            - generic [ref=e207]:
              - button "Navigate to first page" [ref=e208] [cursor=pointer]
              - button "Previous page" [ref=e214] [cursor=pointer]
              - text: (1 - 20 of 70)
              - button "Next page" [ref=e220] [cursor=pointer]
              - button "Navigate to last page" [ref=e226] [cursor=pointer]
          - table [ref=e234]:
            - rowgroup [ref=e235]:
              - row [ref=e236]:
                - columnheader [ref=e237]
                - columnheader [ref=e238]
                - columnheader "Name" [ref=e239]:
                  - generic [ref=e242] [cursor=pointer]
                - columnheader "City" [ref=e249]:
                  - generic [ref=e252] [cursor=pointer]
                - columnheader "Billing Country" [ref=e259]:
                  - generic [ref=e262] [cursor=pointer]
                - columnheader "Phone" [ref=e269]:
                  - generic [ref=e272] [cursor=pointer]
                - columnheader "User" [ref=e279]:
                  - generic [ref=e282] [cursor=pointer]
                - columnheader "Email Address" [ref=e289]
                - columnheader [ref=e291]
            - rowgroup [ref=e292]:
              - row [ref=e293]:
                - cell [ref=e294]:
                  - generic [ref=e295] [cursor=pointer]
                - cell [ref=e296]:
                  - button [ref=e301] [cursor=pointer]
                - cell [ref=e306]:
                  - link "24/7 Couriers" [ref=e311] [cursor=pointer]:
                    - /url: "#/accounts/record/bc6353e7-2c67-47c1-a0d0-d2aee3a65a44?offset=1"
                - cell "San Jose" [ref=e312]
                - cell "USA" [ref=e318]
                - cell [ref=e324]:
                  - link "(049) 925-3469" [ref=e330] [cursor=pointer]:
                    - /url: tel:(049)925-3469
                - cell "Sarah Smith" [ref=e331]
                - cell "beans.the@example.net" [ref=e337]
                - cell [ref=e344]:
                  - generic [ref=e351]:
                    - button "Log Call" [ref=e353] [cursor=pointer]:
                      - generic "Log Call" [ref=e355]
                    - button "Schedule Meeting" [ref=e360] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e362]
                    - button "Create Task" [ref=e381] [cursor=pointer]:
                      - generic "Create Task" [ref=e383]
                    - button "Compose Email" [ref=e392] [cursor=pointer]:
                      - generic "Compose Email" [ref=e394]
              - row [ref=e398]:
                - cell [ref=e399]:
                  - generic [ref=e400] [cursor=pointer]
                - cell [ref=e401]:
                  - button [ref=e406] [cursor=pointer]
                - cell [ref=e411]:
                  - link "360 Vacations" [ref=e416] [cursor=pointer]:
                    - /url: "#/accounts/record/a269b00b-b426-4702-b922-9c0dff82c373?offset=2"
                - cell "San Mateo" [ref=e417]
                - cell "USA" [ref=e423]
                - cell [ref=e429]:
                  - link "(503) 507-4714" [ref=e435] [cursor=pointer]:
                    - /url: tel:(503)507-4714
                - cell "Sarah Smith" [ref=e436]
                - cell "vegan.section.info@example.net" [ref=e442]
                - cell [ref=e449]:
                  - generic [ref=e456]:
                    - button "Log Call" [ref=e458] [cursor=pointer]:
                      - generic "Log Call" [ref=e460]
                    - button "Schedule Meeting" [ref=e465] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e467]
                    - button "Create Task" [ref=e486] [cursor=pointer]:
                      - generic "Create Task" [ref=e488]
                    - button "Compose Email" [ref=e497] [cursor=pointer]:
                      - generic "Compose Email" [ref=e499]
              - row [ref=e503]:
                - cell [ref=e504]:
                  - generic [ref=e505] [cursor=pointer]
                - cell [ref=e506]:
                  - button [ref=e511] [cursor=pointer]
                - cell [ref=e516]:
                  - link "5D Investments" [ref=e521] [cursor=pointer]:
                    - /url: "#/accounts/record/964765f1-6620-4c24-9f20-0a01335db2c2?offset=3"
                - cell "Los Angeles" [ref=e522]
                - cell "USA" [ref=e528]
                - cell [ref=e534]:
                  - link "(404) 043-0225" [ref=e540] [cursor=pointer]:
                    - /url: tel:(404)043-0225
                - cell "Chris Olliver" [ref=e541]
                - cell "sugar30@example.net" [ref=e547]
                - cell [ref=e554]:
                  - generic [ref=e561]:
                    - button "Log Call" [ref=e563] [cursor=pointer]:
                      - generic "Log Call" [ref=e565]
                    - button "Schedule Meeting" [ref=e570] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e572]
                    - button "Create Task" [ref=e591] [cursor=pointer]:
                      - generic "Create Task" [ref=e593]
                    - button "Compose Email" [ref=e602] [cursor=pointer]:
                      - generic "Compose Email" [ref=e604]
              - row [ref=e608]:
                - cell [ref=e609]:
                  - generic [ref=e610] [cursor=pointer]
                - cell [ref=e611]:
                  - button [ref=e616] [cursor=pointer]
                - cell [ref=e621]:
                  - link "A.D. Importing Company Inc" [ref=e626] [cursor=pointer]:
                    - /url: "#/accounts/record/0c912634-dbd5-49ae-89ad-2511cf3337e9?offset=4"
                - cell "San Mateo" [ref=e627]
                - cell "USA" [ref=e633]
                - cell [ref=e639]:
                  - link "(904) 583-8739" [ref=e645] [cursor=pointer]:
                    - /url: tel:(904)583-8739
                - cell "Sarah Smith" [ref=e646]
                - cell "phone.the@example.edu" [ref=e652]
                - cell [ref=e659]:
                  - generic [ref=e666]:
                    - button "Log Call" [ref=e668] [cursor=pointer]:
                      - generic "Log Call" [ref=e670]
                    - button "Schedule Meeting" [ref=e675] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e677]
                    - button "Create Task" [ref=e696] [cursor=pointer]:
                      - generic "Create Task" [ref=e698]
                    - button "Compose Email" [ref=e707] [cursor=pointer]:
                      - generic "Compose Email" [ref=e709]
              - row [ref=e713]:
                - cell [ref=e714]:
                  - generic [ref=e715] [cursor=pointer]
                - cell [ref=e716]:
                  - button [ref=e721] [cursor=pointer]
                - cell [ref=e726]:
                  - link "A.G. Parr PLC" [ref=e731] [cursor=pointer]:
                    - /url: "#/accounts/record/f5cd734f-0b0a-4a86-9861-7a7827e1f906?offset=5"
                - cell "Kansas City" [ref=e732]
                - cell "USA" [ref=e738]
                - cell [ref=e744]:
                  - link "(696) 905-7007" [ref=e750] [cursor=pointer]:
                    - /url: tel:(696)905-7007
                - cell "Will Westin" [ref=e751]
                - cell "vegan.beans@example.biz" [ref=e757]
                - cell [ref=e764]:
                  - generic [ref=e771]:
                    - button "Log Call" [ref=e773] [cursor=pointer]:
                      - generic "Log Call" [ref=e775]
                    - button "Schedule Meeting" [ref=e780] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e782]
                    - button "Create Task" [ref=e801] [cursor=pointer]:
                      - generic "Create Task" [ref=e803]
                    - button "Compose Email" [ref=e812] [cursor=pointer]:
                      - generic "Compose Email" [ref=e814]
              - row [ref=e818]:
                - cell [ref=e819]:
                  - generic [ref=e820] [cursor=pointer]
                - cell [ref=e821]:
                  - button [ref=e826] [cursor=pointer]
                - cell [ref=e831]:
                  - link "AB Drivers Limited" [ref=e836] [cursor=pointer]:
                    - /url: "#/accounts/record/5ea9410e-05d7-4714-8f45-c0c38d510612?offset=6"
                - cell "Denver" [ref=e837]
                - cell "USA" [ref=e843]
                - cell [ref=e849]:
                  - link "(279) 362-6344" [ref=e855] [cursor=pointer]:
                    - /url: tel:(279)362-6344
                - cell "Sarah Smith" [ref=e856]
                - cell "beans.sugar@example.co.jp" [ref=e862]
                - cell [ref=e869]:
                  - generic [ref=e876]:
                    - button "Log Call" [ref=e878] [cursor=pointer]:
                      - generic "Log Call" [ref=e880]
                    - button "Schedule Meeting" [ref=e885] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e887]
                    - button "Create Task" [ref=e906] [cursor=pointer]:
                      - generic "Create Task" [ref=e908]
                    - button "Compose Email" [ref=e917] [cursor=pointer]:
                      - generic "Compose Email" [ref=e919]
              - row [ref=e923]:
                - cell [ref=e924]:
                  - generic [ref=e925] [cursor=pointer]
                - cell [ref=e926]:
                  - button [ref=e931] [cursor=pointer]
                - cell [ref=e936]:
                  - link "Aim Capital Inc" [ref=e941] [cursor=pointer]:
                    - /url: "#/accounts/record/1cec9be7-1ba2-491b-a44f-24afd8d042b7?offset=7"
                - cell "Salt Lake City" [ref=e942]
                - cell "USA" [ref=e948]
                - cell [ref=e954]:
                  - link "(989) 248-3141" [ref=e960] [cursor=pointer]:
                    - /url: tel:(989)248-3141
                - cell "Max Jensen" [ref=e961]
                - cell "sugar.kid.hr@example.name" [ref=e967]
                - cell [ref=e974]:
                  - generic [ref=e981]:
                    - button "Log Call" [ref=e983] [cursor=pointer]:
                      - generic "Log Call" [ref=e985]
                    - button "Schedule Meeting" [ref=e990] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e992]
                    - button "Create Task" [ref=e1011] [cursor=pointer]:
                      - generic "Create Task" [ref=e1013]
                    - button "Compose Email" [ref=e1022] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1024]
              - row [ref=e1028]:
                - cell [ref=e1029]:
                  - generic [ref=e1030] [cursor=pointer]
                - cell [ref=e1031]:
                  - button [ref=e1036] [cursor=pointer]
                - cell [ref=e1041]:
                  - link "Air Safety Inc" [ref=e1046] [cursor=pointer]:
                    - /url: "#/accounts/record/9b0b99cb-60f3-4f94-948e-6bbac0216261?offset=8"
                - cell "Hartford" [ref=e1047]
                - cell "USA" [ref=e1053]
                - cell [ref=e1059]:
                  - link "(209) 808-1770" [ref=e1065] [cursor=pointer]:
                    - /url: tel:(209)808-1770
                - cell "Sally Bronsen" [ref=e1066]
                - cell "dev86@example.org" [ref=e1072]
                - cell [ref=e1079]:
                  - generic [ref=e1086]:
                    - button "Log Call" [ref=e1088] [cursor=pointer]:
                      - generic "Log Call" [ref=e1090]
                    - button "Schedule Meeting" [ref=e1095] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1097]
                    - button "Create Task" [ref=e1116] [cursor=pointer]:
                      - generic "Create Task" [ref=e1118]
                    - button "Compose Email" [ref=e1127] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1129]
              - row [ref=e1133]:
                - cell [ref=e1134]:
                  - generic [ref=e1135] [cursor=pointer]
                - cell [ref=e1136]:
                  - button [ref=e1141] [cursor=pointer]
                - cell [ref=e1146]:
                  - link "Airline Maintenance Co" [ref=e1151] [cursor=pointer]:
                    - /url: "#/accounts/record/36c5a8cd-5edb-4a6b-92a4-ffe08c1bc793?offset=9"
                - cell "Austin" [ref=e1152]
                - cell "USA" [ref=e1158]
                - cell [ref=e1164]:
                  - link "(809) 694-9940" [ref=e1170] [cursor=pointer]:
                    - /url: tel:(809)694-9940
                - cell "Will Westin" [ref=e1171]
                - cell "qa35@example.co.uk" [ref=e1177]
                - cell [ref=e1184]:
                  - generic [ref=e1191]:
                    - button "Log Call" [ref=e1193] [cursor=pointer]:
                      - generic "Log Call" [ref=e1195]
                    - button "Schedule Meeting" [ref=e1200] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1202]
                    - button "Create Task" [ref=e1221] [cursor=pointer]:
                      - generic "Create Task" [ref=e1223]
                    - button "Compose Email" [ref=e1232] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1234]
              - row [ref=e1238]:
                - cell [ref=e1239]:
                  - generic [ref=e1240] [cursor=pointer]
                - cell [ref=e1241]:
                  - button [ref=e1246] [cursor=pointer]
                - cell [ref=e1251]:
                  - link "Anytime Air Support Inc" [ref=e1256] [cursor=pointer]:
                    - /url: "#/accounts/record/10b6b6d2-494c-454c-99c0-404174815d6b?offset=10"
                - cell "Sunnyvale" [ref=e1257]
                - cell "USA" [ref=e1263]
                - cell [ref=e1269]:
                  - link "(753) 588-6170" [ref=e1275] [cursor=pointer]:
                    - /url: tel:(753)588-6170
                - cell "Sally Bronsen" [ref=e1276]
                - cell "support.phone.kid@example.cn" [ref=e1282]
                - cell [ref=e1289]:
                  - generic [ref=e1296]:
                    - button "Log Call" [ref=e1298] [cursor=pointer]:
                      - generic "Log Call" [ref=e1300]
                    - button "Schedule Meeting" [ref=e1305] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1307]
                    - button "Create Task" [ref=e1326] [cursor=pointer]:
                      - generic "Create Task" [ref=e1328]
                    - button "Compose Email" [ref=e1337] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1339]
              - row [ref=e1343]:
                - cell [ref=e1344]:
                  - generic [ref=e1345] [cursor=pointer]
                - cell [ref=e1346]:
                  - button [ref=e1351] [cursor=pointer]
                - cell [ref=e1356]:
                  - link "Arts & Crafts Inc" [ref=e1361] [cursor=pointer]:
                    - /url: "#/accounts/record/71ed35b8-002e-40c9-8d2d-52592cd1e704?offset=11"
                - cell "Kansas City" [ref=e1362]
                - cell "USA" [ref=e1368]
                - cell [ref=e1374]:
                  - link "(923) 894-6573" [ref=e1380] [cursor=pointer]:
                    - /url: tel:(923)894-6573
                - cell "Sarah Smith" [ref=e1381]
                - cell "hr.phone.qa@example.it" [ref=e1387]
                - cell [ref=e1394]:
                  - generic [ref=e1401]:
                    - button "Log Call" [ref=e1403] [cursor=pointer]:
                      - generic "Log Call" [ref=e1405]
                    - button "Schedule Meeting" [ref=e1410] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1412]
                    - button "Create Task" [ref=e1431] [cursor=pointer]:
                      - generic "Create Task" [ref=e1433]
                    - button "Compose Email" [ref=e1442] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1444]
              - row [ref=e1448]:
                - cell [ref=e1449]:
                  - generic [ref=e1450] [cursor=pointer]
                - cell [ref=e1451]:
                  - button [ref=e1456] [cursor=pointer]
                - cell [ref=e1461]:
                  - link "AtoZ Co Ltd" [ref=e1466] [cursor=pointer]:
                    - /url: "#/accounts/record/eaabfeaf-63ab-4e3e-94f4-abb52ebc39fd?offset=12"
                - cell "Denver" [ref=e1467]
                - cell "USA" [ref=e1473]
                - cell [ref=e1479]:
                  - link "(938) 468-6090" [ref=e1485] [cursor=pointer]:
                    - /url: tel:(938)468-6090
                - cell "Sarah Smith" [ref=e1486]
                - cell "qa32@example.us" [ref=e1492]
                - cell [ref=e1499]:
                  - generic [ref=e1506]:
                    - button "Log Call" [ref=e1508] [cursor=pointer]:
                      - generic "Log Call" [ref=e1510]
                    - button "Schedule Meeting" [ref=e1515] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1517]
                    - button "Create Task" [ref=e1536] [cursor=pointer]:
                      - generic "Create Task" [ref=e1538]
                    - button "Compose Email" [ref=e1547] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1549]
              - row [ref=e1553]:
                - cell [ref=e1554]:
                  - generic [ref=e1555] [cursor=pointer]
                - cell [ref=e1556]:
                  - button [ref=e1561] [cursor=pointer]
                - cell [ref=e1566]:
                  - link "Avery Software Co" [ref=e1571] [cursor=pointer]:
                    - /url: "#/accounts/record/51dfbc2e-086e-4f15-9463-97e3acdba965?offset=13"
                - cell "Austin" [ref=e1572]
                - cell "USA" [ref=e1578]
                - cell [ref=e1584]:
                  - link "(720) 230-8973" [ref=e1590] [cursor=pointer]:
                    - /url: tel:(720)230-8973
                - cell "Max Jensen" [ref=e1591]
                - cell "vegan42@example.net" [ref=e1597]
                - cell [ref=e1604]:
                  - generic [ref=e1611]:
                    - button "Log Call" [ref=e1613] [cursor=pointer]:
                      - generic "Log Call" [ref=e1615]
                    - button "Schedule Meeting" [ref=e1620] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1622]
                    - button "Create Task" [ref=e1641] [cursor=pointer]:
                      - generic "Create Task" [ref=e1643]
                    - button "Compose Email" [ref=e1652] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1654]
              - row [ref=e1658]:
                - cell [ref=e1659]:
                  - generic [ref=e1660] [cursor=pointer]
                - cell [ref=e1661]:
                  - button [ref=e1666] [cursor=pointer]
                - cell [ref=e1671]:
                  - link "B.C. Investing International" [ref=e1676] [cursor=pointer]:
                    - /url: "#/accounts/record/73a9389f-453d-49b9-bd47-4fb7a134112a?offset=14"
                - cell "Phoenix" [ref=e1677]
                - cell "USA" [ref=e1683]
                - cell [ref=e1689]:
                  - link "(028) 490-5377" [ref=e1695] [cursor=pointer]:
                    - /url: tel:(028)490-5377
                - cell "Sally Bronsen" [ref=e1696]
                - cell "qa94@example.info" [ref=e1702]
                - cell [ref=e1709]:
                  - generic [ref=e1716]:
                    - button "Log Call" [ref=e1718] [cursor=pointer]:
                      - generic "Log Call" [ref=e1720]
                    - button "Schedule Meeting" [ref=e1725] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1727]
                    - button "Create Task" [ref=e1746] [cursor=pointer]:
                      - generic "Create Task" [ref=e1748]
                    - button "Compose Email" [ref=e1757] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1759]
              - row [ref=e1763]:
                - cell [ref=e1764]:
                  - generic [ref=e1765] [cursor=pointer]
                - cell [ref=e1766]:
                  - button [ref=e1771] [cursor=pointer]
                - cell [ref=e1776]:
                  - link "B.H. Edwards Inc" [ref=e1781] [cursor=pointer]:
                    - /url: "#/accounts/record/40445ebd-dd11-4602-960e-e45a31ae7dbd?offset=15"
                - cell "Kansas City" [ref=e1782]
                - cell "USA" [ref=e1788]
                - cell [ref=e1794]:
                  - link "(427) 794-8519" [ref=e1800] [cursor=pointer]:
                    - /url: tel:(427)794-8519
                - cell "Sally Bronsen" [ref=e1801]
                - cell "vegan.vegan.kid@example.org" [ref=e1807]
                - cell [ref=e1814]:
                  - generic [ref=e1821]:
                    - button "Log Call" [ref=e1823] [cursor=pointer]:
                      - generic "Log Call" [ref=e1825]
                    - button "Schedule Meeting" [ref=e1830] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1832]
                    - button "Create Task" [ref=e1851] [cursor=pointer]:
                      - generic "Create Task" [ref=e1853]
                    - button "Compose Email" [ref=e1862] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1864]
              - row [ref=e1868]:
                - cell [ref=e1869]:
                  - generic [ref=e1870] [cursor=pointer]
                - cell [ref=e1871]:
                  - button [ref=e1876] [cursor=pointer]
                - cell [ref=e1881]:
                  - link "Bay Funding Co" [ref=e1886] [cursor=pointer]:
                    - /url: "#/accounts/record/fe8b3645-b9b4-4036-86b7-c8017152a288?offset=16"
                - cell "Atlanta" [ref=e1887]
                - cell "USA" [ref=e1893]
                - cell [ref=e1899]:
                  - link "(950) 451-2834" [ref=e1905] [cursor=pointer]:
                    - /url: tel:(950)451-2834
                - cell "Chris Olliver" [ref=e1906]
                - cell "vegan.kid.sales@example.tv" [ref=e1912]
                - cell [ref=e1919]:
                  - generic [ref=e1926]:
                    - button "Log Call" [ref=e1928] [cursor=pointer]:
                      - generic "Log Call" [ref=e1930]
                    - button "Schedule Meeting" [ref=e1935] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1937]
                    - button "Create Task" [ref=e1956] [cursor=pointer]:
                      - generic "Create Task" [ref=e1958]
                    - button "Compose Email" [ref=e1967] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1969]
              - row [ref=e1973]:
                - cell [ref=e1974]:
                  - generic [ref=e1975] [cursor=pointer]
                - cell [ref=e1976]:
                  - button [ref=e1981] [cursor=pointer]
                - cell [ref=e1986]:
                  - link "Calm Sailing Inc" [ref=e1991] [cursor=pointer]:
                    - /url: "#/accounts/record/bb473c52-0a9c-4c84-93fc-cd902331df52?offset=17"
                - cell "Austin" [ref=e1992]
                - cell "USA" [ref=e1998]
                - cell [ref=e2004]:
                  - link "(754) 150-9056" [ref=e2010] [cursor=pointer]:
                    - /url: tel:(754)150-9056
                - cell "Max Jensen" [ref=e2011]
                - cell "info.sugar.section@example.cn" [ref=e2017]
                - cell [ref=e2024]:
                  - generic [ref=e2031]:
                    - button "Log Call" [ref=e2033] [cursor=pointer]:
                      - generic "Log Call" [ref=e2035]
                    - button "Schedule Meeting" [ref=e2040] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2042]
                    - button "Create Task" [ref=e2061] [cursor=pointer]:
                      - generic "Create Task" [ref=e2063]
                    - button "Compose Email" [ref=e2072] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2074]
              - row [ref=e2078]:
                - cell [ref=e2079]:
                  - generic [ref=e2080] [cursor=pointer]
                - cell [ref=e2081]:
                  - button [ref=e2086] [cursor=pointer]
                - cell [ref=e2091]:
                  - link "Cancel Edit Test Account" [ref=e2096] [cursor=pointer]:
                    - /url: "#/accounts/record/694a3516-e86e-4454-a5c7-acbd96384aa5?offset=18"
                - cell [ref=e2097]
                - cell [ref=e2098]
                - cell [ref=e2099]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e2100]
                - cell [ref=e2106]
                - cell [ref=e2107]:
                  - generic [ref=e2114]:
                    - button "Log Call" [ref=e2116] [cursor=pointer]:
                      - generic "Log Call" [ref=e2118]
                    - button "Schedule Meeting" [ref=e2123] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2125]
                    - button "Create Task" [ref=e2144] [cursor=pointer]:
                      - generic "Create Task" [ref=e2146]
                    - button "Compose Email" [ref=e2155] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2157]
              - row [ref=e2161]:
                - cell [ref=e2162]:
                  - generic [ref=e2163] [cursor=pointer]
                - cell [ref=e2164]:
                  - button [ref=e2169] [cursor=pointer]
                - cell [ref=e2174]:
                  - link "Cancel Edit Test Account" [ref=e2179] [cursor=pointer]:
                    - /url: "#/accounts/record/86ed7653-9986-4805-8b13-50677be0eae1?offset=19"
                - cell [ref=e2180]
                - cell [ref=e2181]
                - cell [ref=e2182]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e2183]
                - cell [ref=e2189]
                - cell [ref=e2190]:
                  - generic [ref=e2197]:
                    - button "Log Call" [ref=e2199] [cursor=pointer]:
                      - generic "Log Call" [ref=e2201]
                    - button "Schedule Meeting" [ref=e2206] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2208]
                    - button "Create Task" [ref=e2227] [cursor=pointer]:
                      - generic "Create Task" [ref=e2229]
                    - button "Compose Email" [ref=e2238] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2240]
              - row [ref=e2244]:
                - cell [ref=e2245]:
                  - generic [ref=e2246] [cursor=pointer]
                - cell [ref=e2247]:
                  - button [ref=e2252] [cursor=pointer]
                - cell [ref=e2257]:
                  - link "Cancel Edit Test Account" [ref=e2262] [cursor=pointer]:
                    - /url: "#/accounts/record/b57a83de-c9a3-4164-9028-dd9a4123a942?offset=20"
                - cell [ref=e2263]
                - cell [ref=e2264]
                - cell [ref=e2265]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell "Will Westin" [ref=e2266]
                - cell [ref=e2272]
                - cell [ref=e2273]:
                  - generic [ref=e2280]:
                    - button "Log Call" [ref=e2282] [cursor=pointer]:
                      - generic "Log Call" [ref=e2284]
                    - button "Schedule Meeting" [ref=e2289] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2291]
                    - button "Create Task" [ref=e2310] [cursor=pointer]:
                      - generic "Create Task" [ref=e2312]
                    - button "Compose Email" [ref=e2321] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2323]
          - generic [ref=e2329]:
            - generic [ref=e2330]:
              - generic [ref=e2332]:
                - button [aria-hidden] [ref=e2334] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2339] [cursor=pointer]
              - button "Columns" [ref=e2346] [cursor=pointer]:
                - generic "Columns" [ref=e2348]
            - generic [ref=e2360]:
              - button "Navigate to first page" [ref=e2361] [cursor=pointer]
              - button "Previous page" [ref=e2367] [cursor=pointer]
              - text: (1 - 20 of 70)
              - button "Next page" [ref=e2373] [cursor=pointer]
              - button "Navigate to last page" [ref=e2379] [cursor=pointer]
        - generic [ref=e2392]:
          - generic [ref=e2393]: Quick Charts
          - generic [ref=e2403]:
            - combobox [ref=e2407]:
              - option "New Accounts by Month" [selected]
            - img [ref=e2411]:
              - generic [ref=e2412]:
                - generic [ref=e2416]:
                  - generic "2025-12" [ref=e2417]
                  - generic "2026-01" [ref=e2419]
                  - generic "2026-02" [ref=e2421]
                  - generic "2026-03" [ref=e2423]
                  - generic "2026-04" [ref=e2425]
                  - generic "2026-05" [ref=e2427]
                  - generic "2026-06" [ref=e2429]
                  - generic "2026-07" [ref=e2431]
                  - generic "2026-08" [ref=e2433]
                  - generic "2026-09" [ref=e2435]
                  - generic "2026-10" [ref=e2437]
                  - generic "2026-11" [ref=e2439]
                - generic [ref=e2480]:
                  - generic "0" [ref=e2481]
                  - generic "5" [ref=e2483]
                  - generic "10" [ref=e2485]
                  - generic "15" [ref=e2487]
                  - generic "20" [ref=e2489]
  - generic [ref=e2519]:
    - generic [ref=e2520]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2521]: Back To Top
```

# Test source

```ts
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
  481 |     await this.opportunityRecordActionsButton.waitFor({
  482 |       state: 'visible'
  483 |     });
  484 | 
  485 | 
  486 |     const expanded =
  487 |       await this.opportunityRecordActionsButton.getAttribute(
  488 |         'aria-expanded'
  489 |       );
  490 | 
  491 | 
  492 |     if (expanded !== 'true') {
  493 |       await this.opportunityRecordActionsButton.click();
  494 |     }
  495 | 
  496 | 
  497 |     await this.deleteOpportunityAction.click();
  498 | 
  499 | 
  500 |     await this.deleteOpportunityConfirmationMessage.waitFor({
  501 |       state: 'visible'
  502 |     });
  503 | 
  504 | 
  505 |     await this.confirmDeleteOpportunityButton.click();
  506 | 
  507 | 
  508 |     await this.deleteOpportunityConfirmationMessage.waitFor({
  509 |       state: 'hidden'
  510 |     });
  511 | 
  512 | 
> 513 |     await this.page.waitForURL(url => {
      |                     ^ TimeoutError: page.waitForURL: Timeout 45000ms exceeded.
  514 |       return (
  515 |         url.origin === target.origin &&
  516 |         /^#\/opportunities\/?(?:\?.*)?$/.test(url.hash)
  517 |       );
  518 |     });
  519 |   }
  520 | 
  521 | 
  522 |   // --------------------------------------------------
  523 |   // Opportunity editing
  524 |   // --------------------------------------------------
  525 | 
  526 | 
  527 |   async waitForOpportunityDetailPage(opportunityName) {
  528 |     await this.getOpportunityDetailHeading(
  529 |       opportunityName
  530 |     ).waitFor({
  531 |       state: 'visible'
  532 |     });
  533 | 
  534 | 
  535 |     await this.editOpportunityButton.waitFor({
  536 |       state: 'visible'
  537 |     });
  538 |   }
  539 | 
  540 | 
  541 |   async openOpportunityForEditing() {
  542 |     await this.editOpportunityButton.click();
  543 | 
  544 | 
  545 |     await this.opportunityAmountInput.waitFor({
  546 |       state: 'visible'
  547 |     });
  548 |   }
  549 | 
  550 | 
  551 |   async saveOpportunityChanges(opportunityName) {
  552 |     await this.saveOpportunity();
  553 | 
  554 | 
  555 |     await this.saveOpportunityButton.waitFor({
  556 |       state: 'hidden'
  557 |     });
  558 | 
  559 | 
  560 |     await this.waitForOpportunityDetailPage(
  561 |       opportunityName
  562 |     );
  563 |   }
  564 | 
  565 | 
  566 |   async reloadOpportunityDetailPage(opportunityName) {
  567 |     await this.page.reload();
  568 | 
  569 | 
  570 |     await this.waitForOpportunityDetailPage(
  571 |       opportunityName
  572 |     );
  573 |   }
  574 | 
  575 | 
  576 |   async getDisplayedOpportunityAmount() {
  577 |     const displayedAmount =
  578 |       await this.opportunityAmountDetail.innerText();
  579 | 
  580 | 
  581 |     const normalizedAmount = displayedAmount
  582 |       .replace(/USD/gi, '')
  583 |       .replace(/\$/g, '')
  584 |       .replace(/[,\s]/g, '');
  585 | 
  586 | 
  587 |     if (
  588 |       !/^\d+(?:\.\d+)?$/.test(normalizedAmount)
  589 |     ) {
  590 |       throw new Error(
  591 |         'Could not read the saved opportunity amount. ' +
  592 |         `Received: ${JSON.stringify(displayedAmount)}.`
  593 |       );
  594 |     }
  595 | 
  596 | 
  597 |     return Number(normalizedAmount);
  598 |   }
  599 | }
```