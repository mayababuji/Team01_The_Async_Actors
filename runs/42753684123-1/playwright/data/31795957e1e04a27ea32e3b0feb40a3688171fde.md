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
    - generic [ref=e107]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - generic [ref=e111]: ACCOUNTS
          - generic [ref=e118]:
            - group [ref=e120]:
              - button "Filter" [ref=e122] [cursor=pointer]
            - button "Insights" [ref=e124] [cursor=pointer]
        - separator [ref=e131]
      - generic [ref=e134]:
        - generic [ref=e137]:
          - generic [ref=e140]:
            - generic [ref=e141]:
              - generic [ref=e143]:
                - button [aria-hidden] [ref=e145] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e150] [cursor=pointer]
              - button "Columns" [ref=e157] [cursor=pointer]:
                - generic "Columns" [ref=e159]
            - generic [ref=e171]:
              - button "Navigate to first page" [ref=e172] [cursor=pointer]
              - button "Previous page" [ref=e178] [cursor=pointer]
              - text: (1 - 20 of 55)
              - button "Next page" [ref=e184] [cursor=pointer]
              - button "Navigate to last page" [ref=e190] [cursor=pointer]
          - table [ref=e198]:
            - rowgroup [ref=e199]:
              - row [ref=e200]:
                - columnheader [ref=e201]
                - columnheader [ref=e202]
                - columnheader "Name" [ref=e203]:
                  - generic [ref=e206] [cursor=pointer]
                - columnheader "City" [ref=e213]:
                  - generic [ref=e216] [cursor=pointer]
                - columnheader "Billing Country" [ref=e223]:
                  - generic [ref=e226] [cursor=pointer]
                - columnheader "Phone" [ref=e233]:
                  - generic [ref=e236] [cursor=pointer]
                - columnheader [ref=e243]
            - rowgroup [ref=e244]:
              - row [ref=e245]:
                - cell [ref=e246]:
                  - generic [ref=e247] [cursor=pointer]
                - cell [ref=e248]:
                  - button [ref=e253] [cursor=pointer]
                - cell [ref=e258]:
                  - link "Numpy Delete Opportunity Account" [ref=e263]:
                    - /url: "#/accounts/record/159ed652-12e2-4689-91f5-c4f6d8dea71e?offset=1"
                - cell [ref=e264]
                - cell [ref=e265]
                - cell [ref=e266]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - link:
                              - /url: ""
                - cell [ref=e267]:
                  - generic [ref=e274]:
                    - button "Log Call" [ref=e276] [cursor=pointer]:
                      - generic "Log Call" [ref=e278]
                    - button "Schedule Meeting" [ref=e283] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e285]
                    - button "Create Task" [ref=e304] [cursor=pointer]:
                      - generic "Create Task" [ref=e306]
                    - button "Compose Email" [ref=e315] [cursor=pointer]:
                      - generic "Compose Email" [ref=e317]
              - row [ref=e321]:
                - cell [ref=e322]:
                  - generic [ref=e323] [cursor=pointer]
                - cell [ref=e324]:
                  - button [ref=e329] [cursor=pointer]
                - cell [ref=e334]:
                  - link "Import Account QA One" [ref=e339]:
                    - /url: "#/accounts/record/56e8d154-c8e0-4cb0-9f54-59fec37b629b?offset=2"
                - cell [ref=e340]
                - cell [ref=e341]
                - cell [ref=e342]:
                  - link "(555) 010-1001" [ref=e348]:
                    - /url: tel:(555)010-1001
                - cell [ref=e349]:
                  - generic [ref=e356]:
                    - button "Log Call" [ref=e358] [cursor=pointer]:
                      - generic "Log Call" [ref=e360]
                    - button "Schedule Meeting" [ref=e365] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e367]
                    - button "Create Task" [ref=e386] [cursor=pointer]:
                      - generic "Create Task" [ref=e388]
                    - button "Compose Email" [ref=e397] [cursor=pointer]:
                      - generic "Compose Email" [ref=e399]
              - row [ref=e403]:
                - cell [ref=e404]:
                  - generic [ref=e405] [cursor=pointer]
                - cell [ref=e406]:
                  - button [ref=e411] [cursor=pointer]
                - cell [ref=e416]:
                  - link "Import Account QA Two" [ref=e421]:
                    - /url: "#/accounts/record/f68bf7da-d048-44c9-ade5-6f446be143a4?offset=3"
                - cell [ref=e422]
                - cell [ref=e423]
                - cell [ref=e424]:
                  - link "(555) 010-1002" [ref=e430]:
                    - /url: tel:(555)010-1002
                - cell [ref=e431]:
                  - generic [ref=e438]:
                    - button "Log Call" [ref=e440] [cursor=pointer]:
                      - generic "Log Call" [ref=e442]
                    - button "Schedule Meeting" [ref=e447] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e449]
                    - button "Create Task" [ref=e468] [cursor=pointer]:
                      - generic "Create Task" [ref=e470]
                    - button "Compose Email" [ref=e479] [cursor=pointer]:
                      - generic "Compose Email" [ref=e481]
              - row [ref=e485]:
                - cell [ref=e486]:
                  - generic [ref=e487] [cursor=pointer]
                - cell [ref=e488]:
                  - button [ref=e493] [cursor=pointer]
                - cell [ref=e498]:
                  - link "Import Account QA One" [ref=e503]:
                    - /url: "#/accounts/record/274c1d97-61fc-4bb7-b323-5ae7a4af525b?offset=4"
                - cell [ref=e504]
                - cell [ref=e505]
                - cell [ref=e506]:
                  - link "(555) 010-1001" [ref=e512]:
                    - /url: tel:(555)010-1001
                - cell [ref=e513]:
                  - generic [ref=e520]:
                    - button "Log Call" [ref=e522] [cursor=pointer]:
                      - generic "Log Call" [ref=e524]
                    - button "Schedule Meeting" [ref=e529] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e531]
                    - button "Create Task" [ref=e550] [cursor=pointer]:
                      - generic "Create Task" [ref=e552]
                    - button "Compose Email" [ref=e561] [cursor=pointer]:
                      - generic "Compose Email" [ref=e563]
              - row [ref=e567]:
                - cell [ref=e568]:
                  - generic [ref=e569] [cursor=pointer]
                - cell [ref=e570]:
                  - button [ref=e575] [cursor=pointer]
                - cell [ref=e580]:
                  - link "Import Account QA Two" [ref=e585]:
                    - /url: "#/accounts/record/a980f7dd-6f45-461f-9c06-abbe5e133174?offset=5"
                - cell [ref=e586]
                - cell [ref=e587]
                - cell [ref=e588]:
                  - link "(555) 010-1002" [ref=e594]:
                    - /url: tel:(555)010-1002
                - cell [ref=e595]:
                  - generic [ref=e602]:
                    - button "Log Call" [ref=e604] [cursor=pointer]:
                      - generic "Log Call" [ref=e606]
                    - button "Schedule Meeting" [ref=e611] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e613]
                    - button "Create Task" [ref=e632] [cursor=pointer]:
                      - generic "Create Task" [ref=e634]
                    - button "Compose Email" [ref=e643] [cursor=pointer]:
                      - generic "Compose Email" [ref=e645]
              - row [ref=e649]:
                - cell [ref=e650]:
                  - generic [ref=e651] [cursor=pointer]
                - cell [ref=e652]:
                  - button [ref=e657] [cursor=pointer]
                - cell [ref=e662]:
                  - link "B.C. Investing International" [ref=e667]:
                    - /url: "#/accounts/record/21527875-1431-4a48-856f-44c405aef39e?offset=6"
                - cell "Phoenix" [ref=e668]
                - cell "USA" [ref=e674]
                - cell [ref=e680]:
                  - link "(028) 490-5377" [ref=e686]:
                    - /url: tel:(028)490-5377
                - cell [ref=e687]:
                  - generic [ref=e694]:
                    - button "Log Call" [ref=e696] [cursor=pointer]:
                      - generic "Log Call" [ref=e698]
                    - button "Schedule Meeting" [ref=e703] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e705]
                    - button "Create Task" [ref=e724] [cursor=pointer]:
                      - generic "Create Task" [ref=e726]
                    - button "Compose Email" [ref=e735] [cursor=pointer]:
                      - generic "Compose Email" [ref=e737]
              - row [ref=e741]:
                - cell [ref=e742]:
                  - generic [ref=e743] [cursor=pointer]
                - cell [ref=e744]:
                  - button [ref=e749] [cursor=pointer]
                - cell [ref=e754]:
                  - link "AtoZ Co Ltd" [ref=e759]:
                    - /url: "#/accounts/record/8d255de9-28e7-4b35-98b3-35787a90da90?offset=7"
                - cell "Denver" [ref=e760]
                - cell "USA" [ref=e766]
                - cell [ref=e772]:
                  - link "(938) 468-6090" [ref=e778]:
                    - /url: tel:(938)468-6090
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
                  - link "Green Tractor Group Limited" [ref=e851]:
                    - /url: "#/accounts/record/403860e6-19c1-46e3-a2e7-c10ff79af139?offset=8"
                - cell "Atlanta" [ref=e852]
                - cell "USA" [ref=e858]
                - cell [ref=e864]:
                  - link "(671) 043-3201" [ref=e870]:
                    - /url: tel:(671)043-3201
                - cell [ref=e871]:
                  - generic [ref=e878]:
                    - button "Log Call" [ref=e880] [cursor=pointer]:
                      - generic "Log Call" [ref=e882]
                    - button "Schedule Meeting" [ref=e887] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e889]
                    - button "Create Task" [ref=e908] [cursor=pointer]:
                      - generic "Create Task" [ref=e910]
                    - button "Compose Email" [ref=e919] [cursor=pointer]:
                      - generic "Compose Email" [ref=e921]
              - row [ref=e925]:
                - cell [ref=e926]:
                  - generic [ref=e927] [cursor=pointer]
                - cell [ref=e928]:
                  - button [ref=e933] [cursor=pointer]
                - cell [ref=e938]:
                  - link "JAB Funds Ltd." [ref=e943]:
                    - /url: "#/accounts/record/c934741a-cd04-4f24-a63b-d14b9a606110?offset=9"
                - cell "Denver" [ref=e944]
                - cell "USA" [ref=e950]
                - cell [ref=e956]:
                  - link "(166) 266-6277" [ref=e962]:
                    - /url: tel:(166)266-6277
                - cell [ref=e963]:
                  - generic [ref=e970]:
                    - button "Log Call" [ref=e972] [cursor=pointer]:
                      - generic "Log Call" [ref=e974]
                    - button "Schedule Meeting" [ref=e979] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e981]
                    - button "Create Task" [ref=e1000] [cursor=pointer]:
                      - generic "Create Task" [ref=e1002]
                    - button "Compose Email" [ref=e1011] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1013]
              - row [ref=e1017]:
                - cell [ref=e1018]:
                  - generic [ref=e1019] [cursor=pointer]
                - cell [ref=e1020]:
                  - button [ref=e1025] [cursor=pointer]
                - cell [ref=e1030]:
                  - link "Kringle Bell IncK.A. Tower & Co" [ref=e1035]:
                    - /url: "#/accounts/record/3de1fb9e-f1b9-4e5a-b575-8b43d5b4bec1?offset=10"
                - cell "Sacramento" [ref=e1036]
                - cell "USA" [ref=e1042]
                - cell [ref=e1048]:
                  - link "(490) 913-8041" [ref=e1054]:
                    - /url: tel:(490)913-8041
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
                  - link "Bay Funding Co" [ref=e1127]:
                    - /url: "#/accounts/record/4211f804-8067-4056-9e50-cdc1cce0f414?offset=11"
                - cell "Atlanta" [ref=e1128]
                - cell "USA" [ref=e1134]
                - cell [ref=e1140]:
                  - link "(950) 451-2834" [ref=e1146]:
                    - /url: tel:(950)451-2834
                - cell [ref=e1147]:
                  - generic [ref=e1154]:
                    - button "Log Call" [ref=e1156] [cursor=pointer]:
                      - generic "Log Call" [ref=e1158]
                    - button "Schedule Meeting" [ref=e1163] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1165]
                    - button "Create Task" [ref=e1184] [cursor=pointer]:
                      - generic "Create Task" [ref=e1186]
                    - button "Compose Email" [ref=e1195] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1197]
              - row [ref=e1201]:
                - cell [ref=e1202]:
                  - generic [ref=e1203] [cursor=pointer]
                - cell [ref=e1204]:
                  - button [ref=e1209] [cursor=pointer]
                - cell [ref=e1214]:
                  - link "AB Drivers Limited" [ref=e1219]:
                    - /url: "#/accounts/record/12b650bf-040e-4c3d-b87b-6b798e7582c9?offset=12"
                - cell "Denver" [ref=e1220]
                - cell "USA" [ref=e1226]
                - cell [ref=e1232]:
                  - link "(279) 362-6344" [ref=e1238]:
                    - /url: tel:(279)362-6344
                - cell [ref=e1239]:
                  - generic [ref=e1246]:
                    - button "Log Call" [ref=e1248] [cursor=pointer]:
                      - generic "Log Call" [ref=e1250]
                    - button "Schedule Meeting" [ref=e1255] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1257]
                    - button "Create Task" [ref=e1276] [cursor=pointer]:
                      - generic "Create Task" [ref=e1278]
                    - button "Compose Email" [ref=e1287] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1289]
              - row [ref=e1293]:
                - cell [ref=e1294]:
                  - generic [ref=e1295] [cursor=pointer]
                - cell [ref=e1296]:
                  - button [ref=e1301] [cursor=pointer]
                - cell [ref=e1306]:
                  - link "B.H. Edwards Inc" [ref=e1311]:
                    - /url: "#/accounts/record/24626d23-27a1-4b24-a9f1-fe17adc8ed4c?offset=13"
                - cell "Kansas City" [ref=e1312]
                - cell "USA" [ref=e1318]
                - cell [ref=e1324]:
                  - link "(427) 794-8519" [ref=e1330]:
                    - /url: tel:(427)794-8519
                - cell [ref=e1331]:
                  - generic [ref=e1338]:
                    - button "Log Call" [ref=e1340] [cursor=pointer]:
                      - generic "Log Call" [ref=e1342]
                    - button "Schedule Meeting" [ref=e1347] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1349]
                    - button "Create Task" [ref=e1368] [cursor=pointer]:
                      - generic "Create Task" [ref=e1370]
                    - button "Compose Email" [ref=e1379] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1381]
              - row [ref=e1385]:
                - cell [ref=e1386]:
                  - generic [ref=e1387] [cursor=pointer]
                - cell [ref=e1388]:
                  - button [ref=e1393] [cursor=pointer]
                - cell [ref=e1398]:
                  - link "360 Vacations" [ref=e1403]:
                    - /url: "#/accounts/record/d84c36b4-7162-491b-a5ed-9d1267aed5ff?offset=14"
                - cell "San Mateo" [ref=e1404]
                - cell "USA" [ref=e1410]
                - cell [ref=e1416]:
                  - link "(503) 507-4714" [ref=e1422]:
                    - /url: tel:(503)507-4714
                - cell [ref=e1423]:
                  - generic [ref=e1430]:
                    - button "Log Call" [ref=e1432] [cursor=pointer]:
                      - generic "Log Call" [ref=e1434]
                    - button "Schedule Meeting" [ref=e1439] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1441]
                    - button "Create Task" [ref=e1460] [cursor=pointer]:
                      - generic "Create Task" [ref=e1462]
                    - button "Compose Email" [ref=e1471] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1473]
              - row [ref=e1477]:
                - cell [ref=e1478]:
                  - generic [ref=e1479] [cursor=pointer]
                - cell [ref=e1480]:
                  - button [ref=e1485] [cursor=pointer]
                - cell [ref=e1490]:
                  - link "A.G. Parr PLC" [ref=e1495]:
                    - /url: "#/accounts/record/7748b890-84d8-4479-8175-7f1235d4d614?offset=15"
                - cell "Kansas City" [ref=e1496]
                - cell "USA" [ref=e1502]
                - cell [ref=e1508]:
                  - link "(696) 905-7007" [ref=e1514]:
                    - /url: tel:(696)905-7007
                - cell [ref=e1515]:
                  - generic [ref=e1522]:
                    - button "Log Call" [ref=e1524] [cursor=pointer]:
                      - generic "Log Call" [ref=e1526]
                    - button "Schedule Meeting" [ref=e1531] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1533]
                    - button "Create Task" [ref=e1552] [cursor=pointer]:
                      - generic "Create Task" [ref=e1554]
                    - button "Compose Email" [ref=e1563] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1565]
              - row [ref=e1569]:
                - cell [ref=e1570]:
                  - generic [ref=e1571] [cursor=pointer]
                - cell [ref=e1572]:
                  - button [ref=e1577] [cursor=pointer]
                - cell [ref=e1582]:
                  - link "Calm Sailing Inc" [ref=e1587]:
                    - /url: "#/accounts/record/85fc522f-6dcb-44a5-8a19-766fe85f6a44?offset=16"
                - cell "Austin" [ref=e1588]
                - cell "USA" [ref=e1594]
                - cell [ref=e1600]:
                  - link "(754) 150-9056" [ref=e1606]:
                    - /url: tel:(754)150-9056
                - cell [ref=e1607]:
                  - generic [ref=e1614]:
                    - button "Log Call" [ref=e1616] [cursor=pointer]:
                      - generic "Log Call" [ref=e1618]
                    - button "Schedule Meeting" [ref=e1623] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1625]
                    - button "Create Task" [ref=e1644] [cursor=pointer]:
                      - generic "Create Task" [ref=e1646]
                    - button "Compose Email" [ref=e1655] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1657]
              - row [ref=e1661]:
                - cell [ref=e1662]:
                  - generic [ref=e1663] [cursor=pointer]
                - cell [ref=e1664]:
                  - button [ref=e1669] [cursor=pointer]
                - cell [ref=e1674]:
                  - link "Sandeon Consolidation Corp" [ref=e1679]:
                    - /url: "#/accounts/record/29a07339-a0a9-42c5-9e3c-439ddf85d297?offset=17"
                - cell "Dover" [ref=e1680]
                - cell "USA" [ref=e1686]
                - cell [ref=e1692]:
                  - link "(460) 072-3232" [ref=e1698]:
                    - /url: tel:(460)072-3232
                - cell [ref=e1699]:
                  - generic [ref=e1706]:
                    - button "Log Call" [ref=e1708] [cursor=pointer]:
                      - generic "Log Call" [ref=e1710]
                    - button "Schedule Meeting" [ref=e1715] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1717]
                    - button "Create Task" [ref=e1736] [cursor=pointer]:
                      - generic "Create Task" [ref=e1738]
                    - button "Compose Email" [ref=e1747] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1749]
              - row [ref=e1753]:
                - cell [ref=e1754]:
                  - generic [ref=e1755] [cursor=pointer]
                - cell [ref=e1756]:
                  - button [ref=e1761] [cursor=pointer]
                - cell [ref=e1766]:
                  - link "Aim Capital Inc" [ref=e1771]:
                    - /url: "#/accounts/record/6e2897e5-e606-4e4e-9743-dfde891b49a0?offset=18"
                - cell "Salt Lake City" [ref=e1772]
                - cell "USA" [ref=e1778]
                - cell [ref=e1784]:
                  - link "(989) 248-3141" [ref=e1790]:
                    - /url: tel:(989)248-3141
                - cell [ref=e1791]:
                  - generic [ref=e1798]:
                    - button "Log Call" [ref=e1800] [cursor=pointer]:
                      - generic "Log Call" [ref=e1802]
                    - button "Schedule Meeting" [ref=e1807] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1809]
                    - button "Create Task" [ref=e1828] [cursor=pointer]:
                      - generic "Create Task" [ref=e1830]
                    - button "Compose Email" [ref=e1839] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1841]
              - row [ref=e1845]:
                - cell [ref=e1846]:
                  - generic [ref=e1847] [cursor=pointer]
                - cell [ref=e1848]:
                  - button [ref=e1853] [cursor=pointer]
                - cell [ref=e1858]:
                  - link "Complete Holding" [ref=e1863]:
                    - /url: "#/accounts/record/334f28ce-b4c9-4272-9d50-ce97897711d1?offset=19"
                - cell "Frankfort" [ref=e1864]
                - cell "USA" [ref=e1870]
                - cell [ref=e1876]:
                  - link "(591) 477-3084" [ref=e1882]:
                    - /url: tel:(591)477-3084
                - cell [ref=e1883]:
                  - generic [ref=e1890]:
                    - button "Log Call" [ref=e1892] [cursor=pointer]:
                      - generic "Log Call" [ref=e1894]
                    - button "Schedule Meeting" [ref=e1899] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1901]
                    - button "Create Task" [ref=e1920] [cursor=pointer]:
                      - generic "Create Task" [ref=e1922]
                    - button "Compose Email" [ref=e1931] [cursor=pointer]:
                      - generic "Compose Email" [ref=e1933]
              - row [ref=e1937]:
                - cell [ref=e1938]:
                  - generic [ref=e1939] [cursor=pointer]
                - cell [ref=e1940]:
                  - button [ref=e1945] [cursor=pointer]
                - cell [ref=e1950]:
                  - link "Jungle Systems Inc" [ref=e1955]:
                    - /url: "#/accounts/record/4ade8fa6-5cd6-4a5f-bcff-60a97662a7c6?offset=20"
                - cell "Los Angeles" [ref=e1956]
                - cell "USA" [ref=e1962]
                - cell [ref=e1968]:
                  - link "(322) 533-7657" [ref=e1974]:
                    - /url: tel:(322)533-7657
                - cell [ref=e1975]:
                  - generic [ref=e1982]:
                    - button "Log Call" [ref=e1984] [cursor=pointer]:
                      - generic "Log Call" [ref=e1986]
                    - button "Schedule Meeting" [ref=e1991] [cursor=pointer]:
                      - generic "Schedule Meeting" [ref=e1993]
                    - button "Create Task" [ref=e2012] [cursor=pointer]:
                      - generic "Create Task" [ref=e2014]
                    - button "Compose Email" [ref=e2023] [cursor=pointer]:
                      - generic "Compose Email" [ref=e2025]
          - generic [ref=e2031]:
            - generic [ref=e2032]:
              - generic [ref=e2034]:
                - button [aria-hidden] [ref=e2036] [cursor=pointer]
                - button "Bulk Action" [disabled] [ref=e2041] [cursor=pointer]
              - button "Columns" [ref=e2048] [cursor=pointer]:
                - generic "Columns" [ref=e2050]
            - generic [ref=e2062]:
              - button "Navigate to first page" [ref=e2063] [cursor=pointer]
              - button "Previous page" [ref=e2069] [cursor=pointer]
              - text: (1 - 20 of 55)
              - button "Next page" [ref=e2075] [cursor=pointer]
              - button "Navigate to last page" [ref=e2081] [cursor=pointer]
        - generic [ref=e2094]:
          - generic [ref=e2095]: Quick Charts
          - generic [ref=e2105]:
            - combobox [ref=e2109]:
              - option "New Accounts by Month" [selected]
            - img [ref=e2113]:
              - generic [ref=e2114]:
                - generic [ref=e2118]:
                  - generic "2025-12" [ref=e2119]
                  - generic "2026-01" [ref=e2121]
                  - generic "2026-02" [ref=e2123]
                  - generic "2026-03" [ref=e2125]
                  - generic "2026-04" [ref=e2127]
                  - generic "2026-05" [ref=e2129]
                  - generic "2026-06" [ref=e2131]
                  - generic "2026-07" [ref=e2133]
                  - generic "2026-08" [ref=e2135]
                  - generic "2026-09" [ref=e2137]
                  - generic "2026-10" [ref=e2139]
                  - generic "2026-11" [ref=e2141]
                - generic [ref=e2146]:
                  - generic "0" [ref=e2147]
                  - generic "2" [ref=e2149]
                  - generic "4" [ref=e2151]
  - generic [ref=e2166]:
    - generic [ref=e2167]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e2168]: Back To Top
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