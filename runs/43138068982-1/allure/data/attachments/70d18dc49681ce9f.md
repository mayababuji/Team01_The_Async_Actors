# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/leads.feature.spec.js >> Leads Management Module >> Verify Leads module navigation
- Location: tests/generated/features/leads.feature.spec.js:10:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByText('Leads', { exact: true }).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - list [ref=e7]:
        - listitem [ref=e8]
    - generic [ref=e19]:
      - textbox "Username" [ref=e21]
      - generic [ref=e22]:
        - generic:
          - generic:
            - img [aria-hidden]:
              - generic: "***"
        - textbox "Password" [ref=e23]
      - button "Log In" [ref=e24] [cursor=pointer]
  - generic [ref=e25]: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  49  |         });
  50  |         this.jobTitle = this.page
  51  |             .getByText('JOB TITLE', { exact: true })
  52  | 
  53  |         this.department = this.page
  54  |             .getByText('DEPARTMENT', { exact: true })
  55  | 
  56  |         this.accountName = this.page.getByText('ACCOUNT NAME', { exact: true });
  57  | 
  58  |         this.primary = this.page.getByText('Primary', { exact: true });
  59  |         this.editButton = this.page.getByRole('button', {
  60  |             name: 'Edit', exact: true
  61  |         });
  62  |         this.insightButton = this.page.getByRole('button', {
  63  |             name: ' Insights ', exact: true
  64  |         });
  65  |         this.deleteButton = this.page.getByText('Delete', {
  66  |             exact: true
  67  |         });
  68  |         this.viewChangelogButton = this.page.getByText('View Change Log', {
  69  |             exact: true
  70  |         });
  71  |         this.actionsDropdown = this.page.getByRole('button', {
  72  |             name: 'Actions',
  73  |             exact: true
  74  |         });
  75  |         this.chooseFileButton = this.page.getByRole('button', {
  76  |             name: 'vcard',
  77  |             exact: true
  78  |         });
  79  |         this.firstLeadSelectionCell = this.page
  80  |             .getByRole('row')
  81  |             .nth(1)
  82  |             .locator('td')
  83  |             .first();
  84  | 
  85  |         this.headerBulkActionButton = this.page.locator('scrm-table-header').getByRole('button', {
  86  |             name: 'Bulk Action'
  87  |         });
  88  | 
  89  |         this.selectRecordsMenuButton = this.page.locator('scrm-table-header').getByLabel('Select Action Menu');
  90  |         this.filterButton = this.page.getByRole('button', {
  91  |             name: 'Filter',
  92  |             exact: true
  93  |         });
  94  |         this.lastNameFilter = this.page.getByText('Last Name', {
  95  |             exact: true
  96  |         })
  97  |             .locator('xpath=following::input[1]');
  98  |         this.email = this.page
  99  |             .getByText('Email Address', { exact: true })
  100 |             .locator('xpath=ancestor::div[.//input][1]')
  101 |             .locator('input');
  102 |         this.mobile = this.page
  103 |             .getByText('MOBILE', { exact: true })
  104 |             .locator('xpath=ancestor::div[.//input][1]')
  105 |             .locator('input');
  106 |         this.officePhone = this.page
  107 |             .getByText('OFFICE PHONE', { exact: true })
  108 |             .locator('xpath=ancestor::div[.//input][1]')
  109 |             .locator('input');
  110 |         this.firstName = this.page
  111 |             .getByText('First Name', { exact: true })
  112 |             .locator('xpath=ancestor::div[.//input][1]')
  113 |             .locator('input');
  114 | 
  115 |         this.lastName = this.page
  116 |             .getByText('Last Name', { exact: true })
  117 |             .locator('xpath=ancestor::div[.//input][1]')
  118 |             .locator('input');
  119 | 
  120 |         this.title = this.page
  121 |             .getByText('JOB TITLE', { exact: true })
  122 |             .locator('xpath=ancestor::div[.//input][1]')
  123 |             .locator('input');
  124 |         this.selectionDropdown = this.page
  125 |             .locator('scrm-table-header')
  126 |             .locator('button[aria-label="Select Action Menu"]');
  127 | 
  128 |         this.thisPageOption = this.page.locator('scrm-table-header a').filter({
  129 |             hasText: 'Select This Page'
  130 |         });
  131 | 
  132 |         this.headerBulkActionButton = this.page
  133 |             .locator('scrm-table-header')
  134 |             .getByRole('button', {
  135 |                 name: 'Bulk Action',
  136 |                 exact: true
  137 |             });
  138 | 
  139 |         this.status = this.page.getByText('STATUS', { exact: true });
  140 |         this.statusDescription = this.page.getByText('STATUS DESCRIPTION', { exact: true });
  141 |         this.campaignSelectbox = this.page.getByRole('combobox', { name: 'Select an item' });
  142 |         this.leadSource = this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Cold Call Existing Customer' }).getByRole('combobox')
  143 |         this.headerSelectionCheckbox = this.selectionDropdown
  144 |             .locator('input[type="checkbox"]');
  145 |     }
  146 | 
  147 |     async hoverLeadsModule() {
  148 | 
> 149 |         await this.leadsDropdownMenu.waitFor({
      |                                      ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  150 |             state: 'visible',
  151 |             timeout: 15000
  152 |         });
  153 | 
  154 |         await this.leadsDropdownMenu.hover();
  155 |     }
  156 | 
  157 |     getLeadsDropdownmenu(optionName) {
  158 | 
  159 |         const options = {
  160 |             'Create Lead': this.createLead,
  161 |             'View Leads': this.viewLeads,
  162 |             'Import Leads': this.importLeads,
  163 |             'Create Lead From vCard': this.createLeadFromvCard
  164 |         };
  165 |         const option = options[optionName];
  166 |         if (!option) {
  167 |             throw new Error(`Unknown Leads dropdown menu: "${optionName}"`);
  168 |         }
  169 | 
  170 |         return option;
  171 |     }
  172 | 
  173 | }
```