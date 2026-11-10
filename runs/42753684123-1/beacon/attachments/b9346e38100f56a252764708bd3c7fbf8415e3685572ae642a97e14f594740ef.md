# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/accounts.feature.spec.js >> Accounts management >> Open an account from the Accounts list
- Location: tests/generated/features/accounts.feature.spec.js:102:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Open Numpy  Email Account', exact: true }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
        - list [ref=e45]:
          - listitem [ref=e46]:
            - generic [ref=e47]: More
      - generic [ref=e49]:
        - list [ref=e51]:
          - listitem [ref=e52]:
            - generic "Quick Create" [ref=e53] [cursor=pointer]
        - list [ref=e60]:
          - listitem [ref=e61]:
            - generic "Recently Viewed" [ref=e62] [cursor=pointer]
        - generic [ref=e72]:
          - textbox "Search" [ref=e73]:
            - /placeholder: Search...
          - button "Search" [ref=e75] [cursor=pointer]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - generic [ref=e87] [cursor=pointer]
      - list [ref=e95]:
        - listitem [ref=e96]
    - alert [ref=e108]:
      - text: Record deleted successfully
      - generic "Close" [ref=e109] [cursor=pointer]: ×
    - generic [ref=e111]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]: ACCOUNTS
          - generic [ref=e122]:
            - group [ref=e124]:
              - button "Filter" [ref=e126] [cursor=pointer]
            - button "Insights" [ref=e128] [cursor=pointer]
        - separator [ref=e135]
      - generic [ref=e138]:
        - generic [ref=e141]:
          - generic [ref=e144]:
            - generic [ref=e145]:
              - generic [ref=e147]:
                - button [aria-hidden] [ref=e149] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e154] [cursor=pointer]
              - button "Columns" [ref=e161] [cursor=pointer]:
                - generic "Columns" [ref=e163]
            - generic [ref=e175]:
              - button "Navigate to first page" [ref=e176] [cursor=pointer]
              - button "Previous page" [ref=e182] [cursor=pointer]
              - text: (1 - 20 of 54)
              - button "Next page" [ref=e188] [cursor=pointer]
              - button "Navigate to last page" [ref=e194] [cursor=pointer]
          - table [ref=e202]:
            - rowgroup [ref=e203]:
              - row [ref=e204]:
                - columnheader [ref=e205]
                - columnheader [ref=e206]
                - columnheader "Name" [ref=e207]:
                  - generic [ref=e210] [cursor=pointer]
                - columnheader "City" [ref=e217]:
                  - generic [ref=e220] [cursor=pointer]
                - columnheader "Billing Country" [ref=e227]:
                  - generic [ref=e230] [cursor=pointer]
                - columnheader "Phone" [ref=e237]:
                  - generic [ref=e240] [cursor=pointer]
                - columnheader [ref=e247]
            - rowgroup [ref=e248]:
              - row [ref=e249]:
                - cell [ref=e250]:
                  - generic [ref=e251] [cursor=pointer]
                - cell [ref=e252]:
                  - button [ref=e257] [cursor=pointer]
                - cell [ref=e262]:
                  - link "24/7 Couriers" [ref=e267]:
                    - /url: "#/accounts/record/c136f31a-52f3-4f25-8cd6-ef2b8991bece?offset=1"
                - cell "San Jose" [ref=e268]
                - cell "USA" [ref=e274]
                - cell [ref=e280]:
                  - link "(049) 925-3469" [ref=e286]:
                    - /url: tel:(049)925-3469
                - cell [ref=e287]:
                  - generic [ref=e294]:
                    - button "Log Call" [ref=e296] [cursor=pointer]:
                      - generic "Log Call" [ref=e298]
                    - button "Schedule Meeting" [ref=e303] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e305]
                    - button "Create Task" [ref=e324] [cursor=pointer]:
                      - generic "Create Task" [ref=e326]
                    - button "Compose Email" [ref=e335] [cursor=pointer]:
                      - generic "Compose Email" [ref=e337]
              - row [ref=e341]:
                - cell [ref=e342]:
                  - generic [ref=e343] [cursor=pointer]
                - cell [ref=e344]:
                  - button [ref=e349] [cursor=pointer]
                - cell [ref=e354]:
                  - link "360 Vacations" [ref=e359]:
                    - /url: "#/accounts/record/d84c36b4-7162-491b-a5ed-9d1267aed5ff?offset=2"
                - cell "San Mateo" [ref=e360]
                - cell "USA" [ref=e366]
                - cell [ref=e372]:
                  - link "(503) 507-4714" [ref=e378]:
                    - /url: tel:(503)507-4714
                - cell [ref=e379]:
                  - generic [ref=e386]:
                    - button "Log Call" [ref=e388] [cursor=pointer]:
                      - generic "Log Call" [ref=e390]
                    - button "Schedule Meeting" [ref=e395] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e397]
                    - button "Create Task" [ref=e416] [cursor=pointer]:
                      - generic "Create Task" [ref=e418]
                    - button "Compose Email" [ref=e427] [cursor=pointer]:
                      - generic "Compose Email" [ref=e429]
              - row [ref=e433]:
                - cell [ref=e434]:
                  - generic [ref=e435] [cursor=pointer]
                - cell [ref=e436]:
                  - button [ref=e441] [cursor=pointer]
                - cell [ref=e446]:
                  - link "5D Investments" [ref=e451]:
                    - /url: "#/accounts/record/f3497e1f-5565-4bd7-98b6-5a217975e93d?offset=3"
                - cell "Los Angeles" [ref=e452]
                - cell "USA" [ref=e458]
                - cell [ref=e464]:
                  - link "(404) 043-0225" [ref=e470]:
                    - /url: tel:(404)043-0225
                - cell [ref=e471]:
                  - generic [ref=e478]:
                    - button "Log Call" [ref=e480] [cursor=pointer]:
                      - generic "Log Call" [ref=e482]
                    - button "Schedule Meeting" [ref=e487] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e489]
                    - button "Create Task" [ref=e508] [cursor=pointer]:
                      - generic "Create Task" [ref=e510]
                    - button "Compose Email" [ref=e519] [cursor=pointer]:
                      - generic "Compose Email" [ref=e521]
              - row [ref=e525]:
                - cell [ref=e526]:
                  - generic [ref=e527] [cursor=pointer]
                - cell [ref=e528]:
                  - button [ref=e533] [cursor=pointer]
                - cell [ref=e538]:
                  - link "A.D. Importing Company Inc" [ref=e543]:
                    - /url: "#/accounts/record/f79e9354-bf5a-46a5-bf93-7b4fe134e8f0?offset=4"
                - cell "San Mateo" [ref=e544]
                - cell "USA" [ref=e550]
                - cell [ref=e556]:
                  - link "(904) 583-8739" [ref=e562]:
                    - /url: tel:(904)583-8739
                - cell [ref=e563]:
                  - generic [ref=e570]:
                    - button "Log Call" [ref=e572] [cursor=pointer]:
                      - generic "Log Call" [ref=e574]
                    - button "Schedule Meeting" [ref=e579] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e581]
                    - button "Create Task" [ref=e600] [cursor=pointer]:
                      - generic "Create Task" [ref=e602]
                    - button "Compose Email" [ref=e611] [cursor=pointer]:
                      - generic "Compose Email" [ref=e613]
              - row [ref=e617]:
                - cell [ref=e618]:
                  - generic [ref=e619] [cursor=pointer]
                - cell [ref=e620]:
                  - button [ref=e625] [cursor=pointer]
                - cell [ref=e630]:
                  - link "A.G. Parr PLC" [ref=e635]:
                    - /url: "#/accounts/record/7748b890-84d8-4479-8175-7f1235d4d614?offset=5"
                - cell "Kansas City" [ref=e636]
                - cell "USA" [ref=e642]
                - cell [ref=e648]:
                  - link "(696) 905-7007" [ref=e654]:
                    - /url: tel:(696)905-7007
                - cell [ref=e655]:
                  - generic [ref=e662]:
                    - button "Log Call" [ref=e664] [cursor=pointer]:
                      - generic "Log Call" [ref=e666]
                    - button "Schedule Meeting" [ref=e671] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e673]
                    - button "Create Task" [ref=e692] [cursor=pointer]:
                      - generic "Create Task" [ref=e694]
                    - button "Compose Email" [ref=e703] [cursor=pointer]:
                      - generic "Compose Email" [ref=e705]
              - row [ref=e709]:
                - cell [ref=e710]:
                  - generic [ref=e711] [cursor=pointer]
                - cell [ref=e712]:
                  - button [ref=e717] [cursor=pointer]
                - cell [ref=e722]:
                  - link "AB Drivers Limited" [ref=e727]:
                    - /url: "#/accounts/record/12b650bf-040e-4c3d-b87b-6b798e7582c9?offset=6"
                - cell "Denver" [ref=e728]
                - cell "USA" [ref=e734]
                - cell [ref=e740]:
                  - link "(279) 362-6344" [ref=e746]:
                    - /url: tel:(279)362-6344
                - cell [ref=e747]:
                  - generic [ref=e754]:
                    - button "Log Call" [ref=e756] [cursor=pointer]:
                      - generic "Log Call" [ref=e758]
                    - button "Schedule Meeting" [ref=e763] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e765]
                    - button "Create Task" [ref=e784] [cursor=pointer]:
                      - generic "Create Task" [ref=e786]
                    - button "Compose Email" [ref=e795] [cursor=pointer]:
                      - generic "Compose Email" [ref=e797]
              - row [ref=e801]:
                - cell [ref=e802]:
                  - generic [ref=e803] [cursor=pointer]
                - cell [ref=e804]:
                  - button [ref=e809] [cursor=pointer]
                - cell [ref=e814]:
                  - link "Aim Capital Inc" [ref=e819]:
                    - /url: "#/accounts/record/6e2897e5-e606-4e4e-9743-dfde891b49a0?offset=7"
                - cell "Salt Lake City" [ref=e820]
                - cell "USA" [ref=e826]
                - cell [ref=e832]:
                  - link "(989) 248-3141" [ref=e838]:
                    - /url: tel:(989)248-3141
                - cell [ref=e839]:
                  - generic [ref=e846]:
                    - button "Log Call" [ref=e848] [cursor=pointer]:
                      - generic "Log Call" [ref=e850]
                    - button "Schedule Meeting" [ref=e855] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e857]
                    - button "Create Task" [ref=e876] [cursor=pointer]:
                      - generic "Create Task" [ref=e878]
                    - button "Compose Email" [ref=e887] [cursor=pointer]:
                      - generic "Compose Email" [ref=e889]
              - row [ref=e893]:
                - cell [ref=e894]:
                  - generic [ref=e895] [cursor=pointer]
                - cell [ref=e896]:
                  - button [ref=e901] [cursor=pointer]
                - cell [ref=e906]:
                  - link "Air Safety Inc" [ref=e911]:
                    - /url: "#/accounts/record/8b31eb97-37aa-4af3-a3e3-60e8ae3b2fc5?offset=8"
                - cell "Hartford" [ref=e912]
                - cell "USA" [ref=e918]
                - cell [ref=e924]:
                  - link "(209) 808-1770" [ref=e930]:
                    - /url: tel:(209)808-1770
                - cell [ref=e931]:
                  - generic [ref=e938]:
                    - button "Log Call" [ref=e940] [cursor=pointer]:
                      - generic "Log Call" [ref=e942]
                    - button "Schedule Meeting" [ref=e947] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e949]
                    - button "Create Task" [ref=e968] [cursor=pointer]:
                      - generic "Create Task" [ref=e970]
                    - button "Compose Email" [ref=e979] [cursor=pointer]:
                      - generic "Compose Email" [ref=e981]
              - row [ref=e985]:
                - cell [ref=e986]:
                  - generic [ref=e987] [cursor=pointer]
                - cell [ref=e988]:
                  - button [ref=e993] [cursor=pointer]
                - cell [ref=e998]:
                  - link "Airline Maintenance Co" [ref=e1003]:
                    - /url: "#/accounts/record/86ff8927-38d2-43ae-8983-b8621335cec3?offset=9"
                - cell "Austin" [ref=e1004]
                - cell "USA" [ref=e1010]
                - cell [ref=e1016]:
                  - link "(809) 694-9940" [ref=e1022]:
                    - /url: tel:(809)694-9940
                - cell [ref=e1023]:
                  - generic [ref=e1030]:
                    - button "Log Call" [ref=e1032] [cursor=pointer]:
                      - generic "Log Call" [ref=e1034]
                    - button "Schedule Meeting" [ref=e1039] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1041]
                    - button "Create Task" [ref=e1060] [cursor=pointer]:
                      - generic "Create Task" [ref=e1062]
                    - button "Compose Email" [ref=e1071] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1073]
              - row [ref=e1077]:
                - cell [ref=e1078]:
                  - generic [ref=e1079] [cursor=pointer]
                - cell [ref=e1080]:
                  - button [ref=e1085] [cursor=pointer]
                - cell [ref=e1090]:
                  - link "Anytime Air Support Inc" [ref=e1095]:
                    - /url: "#/accounts/record/8c3e7ec8-b789-44d2-bc7b-d6072a144dcb?offset=10"
                - cell "Sunnyvale" [ref=e1096]
                - cell "USA" [ref=e1102]
                - cell [ref=e1108]:
                  - link "(753) 588-6170" [ref=e1114]:
                    - /url: tel:(753)588-6170
                - cell [ref=e1115]:
                  - generic [ref=e1122]:
                    - button "Log Call" [ref=e1124] [cursor=pointer]:
                      - generic "Log Call" [ref=e1126]
                    - button "Schedule Meeting" [ref=e1131] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1133]
                    - button "Create Task" [ref=e1152] [cursor=pointer]:
                      - generic "Create Task" [ref=e1154]
                    - button "Compose Email" [ref=e1163] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1165]
              - row [ref=e1169]:
                - cell [ref=e1170]:
                  - generic [ref=e1171] [cursor=pointer]
                - cell [ref=e1172]:
                  - button [ref=e1177] [cursor=pointer]
                - cell [ref=e1182]:
                  - link "Arts & Crafts Inc" [ref=e1187]:
                    - /url: "#/accounts/record/3dd4caae-324e-4c29-a1dc-36ef0fe4a290?offset=11"
                - cell "Kansas City" [ref=e1188]
                - cell "USA" [ref=e1194]
                - cell [ref=e1200]:
                  - link "(923) 894-6573" [ref=e1206]:
                    - /url: tel:(923)894-6573
                - cell [ref=e1207]:
                  - generic [ref=e1214]:
                    - button "Log Call" [ref=e1216] [cursor=pointer]:
                      - generic "Log Call" [ref=e1218]
                    - button "Schedule Meeting" [ref=e1223] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1225]
                    - button "Create Task" [ref=e1244] [cursor=pointer]:
                      - generic "Create Task" [ref=e1246]
                    - button "Compose Email" [ref=e1255] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1257]
              - row [ref=e1261]:
                - cell [ref=e1262]:
                  - generic [ref=e1263] [cursor=pointer]
                - cell [ref=e1264]:
                  - button [ref=e1269] [cursor=pointer]
                - cell [ref=e1274]:
                  - link "AtoZ Co Ltd" [ref=e1279]:
                    - /url: "#/accounts/record/8d255de9-28e7-4b35-98b3-35787a90da90?offset=12"
                - cell "Denver" [ref=e1280]
                - cell "USA" [ref=e1286]
                - cell [ref=e1292]:
                  - link "(938) 468-6090" [ref=e1298]:
                    - /url: tel:(938)468-6090
                - cell [ref=e1299]:
                  - generic [ref=e1306]:
                    - button "Log Call" [ref=e1308] [cursor=pointer]:
                      - generic "Log Call" [ref=e1310]
                    - button "Schedule Meeting" [ref=e1315] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1317]
                    - button "Create Task" [ref=e1336] [cursor=pointer]:
                      - generic "Create Task" [ref=e1338]
                    - button "Compose Email" [ref=e1347] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1349]
              - row [ref=e1353]:
                - cell [ref=e1354]:
                  - generic [ref=e1355] [cursor=pointer]
                - cell [ref=e1356]:
                  - button [ref=e1361] [cursor=pointer]
                - cell [ref=e1366]:
                  - link "Avery Software Co" [ref=e1371]:
                    - /url: "#/accounts/record/3a1aa1cf-2ec3-4163-978a-a214467cf872?offset=13"
                - cell "Austin" [ref=e1372]
                - cell "USA" [ref=e1378]
                - cell [ref=e1384]:
                  - link "(720) 230-8973" [ref=e1390]:
                    - /url: tel:(720)230-8973
                - cell [ref=e1391]:
                  - generic [ref=e1398]:
                    - button "Log Call" [ref=e1400] [cursor=pointer]:
                      - generic "Log Call" [ref=e1402]
                    - button "Schedule Meeting" [ref=e1407] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1409]
                    - button "Create Task" [ref=e1428] [cursor=pointer]:
                      - generic "Create Task" [ref=e1430]
                    - button "Compose Email" [ref=e1439] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1441]
              - row [ref=e1445]:
                - cell [ref=e1446]:
                  - generic [ref=e1447] [cursor=pointer]
                - cell [ref=e1448]:
                  - button [ref=e1453] [cursor=pointer]
                - cell [ref=e1458]:
                  - link "B.C. Investing International" [ref=e1463]:
                    - /url: "#/accounts/record/21527875-1431-4a48-856f-44c405aef39e?offset=14"
                - cell "Phoenix" [ref=e1464]
                - cell "USA" [ref=e1470]
                - cell [ref=e1476]:
                  - link "(028) 490-5377" [ref=e1482]:
                    - /url: tel:(028)490-5377
                - cell [ref=e1483]:
                  - generic [ref=e1490]:
                    - button "Log Call" [ref=e1492] [cursor=pointer]:
                      - generic "Log Call" [ref=e1494]
                    - button "Schedule Meeting" [ref=e1499] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1501]
                    - button "Create Task" [ref=e1520] [cursor=pointer]:
                      - generic "Create Task" [ref=e1522]
                    - button "Compose Email" [ref=e1531] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1533]
              - row [ref=e1537]:
                - cell [ref=e1538]:
                  - generic [ref=e1539] [cursor=pointer]
                - cell [ref=e1540]:
                  - button [ref=e1545] [cursor=pointer]
                - cell [ref=e1550]:
                  - link "B.H. Edwards Inc" [ref=e1555]:
                    - /url: "#/accounts/record/24626d23-27a1-4b24-a9f1-fe17adc8ed4c?offset=15"
                - cell "Kansas City" [ref=e1556]
                - cell "USA" [ref=e1562]
                - cell [ref=e1568]:
                  - link "(427) 794-8519" [ref=e1574]:
                    - /url: tel:(427)794-8519
                - cell [ref=e1575]:
                  - generic [ref=e1582]:
                    - button "Log Call" [ref=e1584] [cursor=pointer]:
                      - generic "Log Call" [ref=e1586]
                    - button "Schedule Meeting" [ref=e1591] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1593]
                    - button "Create Task" [ref=e1612] [cursor=pointer]:
                      - generic "Create Task" [ref=e1614]
                    - button "Compose Email" [ref=e1623] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1625]
              - row [ref=e1629]:
                - cell [ref=e1630]:
                  - generic [ref=e1631] [cursor=pointer]
                - cell [ref=e1632]:
                  - button [ref=e1637] [cursor=pointer]
                - cell [ref=e1642]:
                  - link "Bay Funding Co" [ref=e1647]:
                    - /url: "#/accounts/record/4211f804-8067-4056-9e50-cdc1cce0f414?offset=16"
                - cell "Atlanta" [ref=e1648]
                - cell "USA" [ref=e1654]
                - cell [ref=e1660]:
                  - link "(950) 451-2834" [ref=e1666]:
                    - /url: tel:(950)451-2834
                - cell [ref=e1667]:
                  - generic [ref=e1674]:
                    - button "Log Call" [ref=e1676] [cursor=pointer]:
                      - generic "Log Call" [ref=e1678]
                    - button "Schedule Meeting" [ref=e1683] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1685]
                    - button "Create Task" [ref=e1704] [cursor=pointer]:
                      - generic "Create Task" [ref=e1706]
                    - button "Compose Email" [ref=e1715] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1717]
              - row [ref=e1721]:
                - cell [ref=e1722]:
                  - generic [ref=e1723] [cursor=pointer]
                - cell [ref=e1724]:
                  - button [ref=e1729] [cursor=pointer]
                - cell [ref=e1734]:
                  - link "Calm Sailing Inc" [ref=e1739]:
                    - /url: "#/accounts/record/85fc522f-6dcb-44a5-8a19-766fe85f6a44?offset=17"
                - cell "Austin" [ref=e1740]
                - cell "USA" [ref=e1746]
                - cell [ref=e1752]:
                  - link "(754) 150-9056" [ref=e1758]:
                    - /url: tel:(754)150-9056
                - cell [ref=e1759]:
                  - generic [ref=e1766]:
                    - button "Log Call" [ref=e1768] [cursor=pointer]:
                      - generic "Log Call" [ref=e1770]
                    - button "Schedule Meeting" [ref=e1775] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1777]
                    - button "Create Task" [ref=e1796] [cursor=pointer]:
                      - generic "Create Task" [ref=e1798]
                    - button "Compose Email" [ref=e1807] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1809]
              - row [ref=e1813]:
                - cell [ref=e1814]:
                  - generic [ref=e1815] [cursor=pointer]
                - cell [ref=e1816]:
                  - button [ref=e1821] [cursor=pointer]
                - cell [ref=e1826]:
                  - link "Chandler Logistics Inc" [ref=e1831]:
                    - /url: "#/accounts/record/5385080e-00b3-4ee3-9be7-79a2c9798d0a?offset=18"
                - cell "Kansas City" [ref=e1832]
                - cell "USA" [ref=e1838]
                - cell [ref=e1844]:
                  - link "(662) 328-5916" [ref=e1850]:
                    - /url: tel:(662)328-5916
                - cell [ref=e1851]:
                  - generic [ref=e1858]:
                    - button "Log Call" [ref=e1860] [cursor=pointer]:
                      - generic "Log Call" [ref=e1862]
                    - button "Schedule Meeting" [ref=e1867] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1869]
                    - button "Create Task" [ref=e1888] [cursor=pointer]:
                      - generic "Create Task" [ref=e1890]
                    - button "Compose Email" [ref=e1899] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1901]
              - row [ref=e1905]:
                - cell [ref=e1906]:
                  - generic [ref=e1907] [cursor=pointer]
                - cell [ref=e1908]:
                  - button [ref=e1913] [cursor=pointer]
                - cell [ref=e1918]:
                  - link "Cloud Cover Trust" [ref=e1923]:
                    - /url: "#/accounts/record/06d72d8a-45a4-4d9f-8d3a-339dfeca26b8?offset=19"
                - cell "San Jose" [ref=e1924]
                - cell "USA" [ref=e1930]
                - cell [ref=e1936]:
                  - link "(780) 119-7817" [ref=e1942]:
                    - /url: tel:(780)119-7817
                - cell [ref=e1943]:
                  - generic [ref=e1950]:
                    - button "Log Call" [ref=e1952] [cursor=pointer]:
                      - generic "Log Call" [ref=e1954]
                    - button "Schedule Meeting" [ref=e1959] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1961]
                    - button "Create Task" [ref=e1980] [cursor=pointer]:
                      - generic "Create Task" [ref=e1982]
                    - button "Compose Email" [ref=e1991] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1993]
              - row [ref=e1997]:
                - cell [ref=e1998]:
                  - generic [ref=e1999] [cursor=pointer]
                - cell [ref=e2000]:
                  - button [ref=e2005] [cursor=pointer]
                - cell [ref=e2010]:
                  - link "Complete Holding" [ref=e2015]:
                    - /url: "#/accounts/record/334f28ce-b4c9-4272-9d50-ce97897711d1?offset=20"
                - cell "Frankfort" [ref=e2016]
                - cell "USA" [ref=e2022]
                - cell [ref=e2028]:
                  - link "(591) 477-3084" [ref=e2034]:
                    - /url: tel:(591)477-3084
                - cell [ref=e2035]:
                  - generic [ref=e2042]:
                    - button "Log Call" [ref=e2044] [cursor=pointer]:
                      - generic "Log Call" [ref=e2046]
                    - button "Schedule Meeting" [ref=e2051] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e2053]
                    - button "Create Task" [ref=e2072] [cursor=pointer]:
                      - generic "Create Task" [ref=e2074]
                    - button "Compose Email" [ref=e2083] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2085]
          - generic [ref=e2091]:
            - generic [ref=e2092]:
              - generic [ref=e2094]:
                - button [aria-hidden] [ref=e2096] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2101] [cursor=pointer]
              - button "Columns" [ref=e2108] [cursor=pointer]:
                - generic "Columns" [ref=e2110]
            - generic [ref=e2122]:
              - button "Navigate to first page" [ref=e2123] [cursor=pointer]
              - button "Previous page" [ref=e2129] [cursor=pointer]
              - text: (1 - 20 of 54)
              - button "Next page" [ref=e2135] [cursor=pointer]
              - button "Navigate to last page" [ref=e2141] [cursor=pointer]
        - generic [ref=e2154]:
          - generic [ref=e2155]: Quick Charts
          - generic [ref=e2165]:
            - combobox [ref=e2169]:
              - option "New Accounts by Month" [selected]
            - img [ref=e2173]:
              - generic [ref=e2174]:
                - generic [ref=e2178]:
                  - generic "2025-12" [ref=e2179]
                  - generic "2026-01" [ref=e2181]
                  - generic "2026-02" [ref=e2183]
                  - generic "2026-03" [ref=e2185]
                  - generic "2026-04" [ref=e2187]
                  - generic "2026-05" [ref=e2189]
                  - generic "2026-06" [ref=e2191]
                  - generic "2026-07" [ref=e2193]
                  - generic "2026-08" [ref=e2195]
                  - generic "2026-09" [ref=e2197]
                  - generic "2026-10" [ref=e2199]
                  - generic "2026-11" [ref=e2201]
                - generic [ref=e2206]:
                  - generic "0" [ref=e2207]
                  - generic "1" [ref=e2209]
                  - generic "2" [ref=e2211]
                  - generic "3" [ref=e2213]
                  - generic "4" [ref=e2215]
  - generic [ref=e2230]:
    - generic [ref=e2231]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2232]: Back To Top
```

# Test source

```ts
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
  901  |     await expect(noResultsMessage).toBeVisible();
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
> 959  |       .waitFor({
       |        ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
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
  1002 |   }) => {
  1003 |     const { account, recordUrl } = accountListTestData;
  1004 | 
  1005 | 
  1006 |     if (!account || !recordUrl) {
  1007 |       throw new Error(
  1008 |         'Account test data or record URL was not initialized by the Given step.'
  1009 |       );
  1010 |     }
  1011 | 
  1012 | 
  1013 |     await expect(
  1014 |       accountsPage.getAccountDetailName(
  1015 |         account.expectedResult
  1016 |       )
  1017 |     ).toBeVisible();
  1018 | 
  1019 | 
  1020 |     logger.info('Selected account detail page displayed', {
  1021 |       scenario: account.scenario,
  1022 |       accountName: account.expectedResult,
  1023 |       recordUrl
  1024 |     });
  1025 |   }
  1026 | );
  1027 | 
  1028 | 
  1029 | // --------------------------------------------------
  1030 | // Recently Viewed
  1031 | // --------------------------------------------------
  1032 | 
  1033 | 
  1034 | Given(
  1035 |   'the user has opened an existing account detail page',
  1036 |   async ({
  1037 |     accountsPage,
  1038 |     logger,
  1039 |     accountCleanup
  1040 |   }) => {
  1041 |     const account = getAccountDataByScenario(
  1042 |       'account_recently_viewed'
  1043 |     );
  1044 | 
  1045 | 
  1046 |     const recordUrl =
  1047 |       await accountsPage.createAccount(account);
  1048 | 
  1049 | 
  1050 |     accountCleanup.register(recordUrl);
  1051 | 
  1052 | 
  1053 |     await accountsPage
  1054 |       .getAccountDetailName(account.name)
  1055 |       .waitFor({
  1056 |         state: 'visible'
  1057 |       });
  1058 | 
  1059 | 
```