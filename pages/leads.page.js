import { expect } from '@playwright/test';

import path from 'node:path';

export class LeadsPage {
    constructor(page) {
        this.page = page;


        this.leadsDropdownMenu = this.page.getByText('Leads', {
            exact: true
        }).first();

        this.leadsDropdownMenus = this.page.locator('.nav-link').filter({
            hasText: /^Leads$/
        });

        this.createLead = this.page.getByRole('link', {
            name: 'Create Lead',
            exact: true
        });
        this.createLeadFromvCard = this.page.getByRole('link', {
            name: 'Create Lead From vCard',
            exact: true
        });
        this.viewLeads = this.page.getByRole('link', {
            name: 'View Leads',
            exact: true
        });
        this.importLeads = this.page.getByRole('link', {
            name: 'Import Leads',
            exact: true
        });
        this.saveButton = this.page.getByRole('button', {
            name: 'Save', exact: true
        });
        this.cancelButton = this.page.getByRole('button', {
            name: 'Cancel', exact: true
        });
        this.overviewTab = this.page.getByRole('tab', {
            name: 'OVERVIEW',
            exact: true
        });
        this.moreInformationTab = this.page.getByText('MORE INFORMATION', {
            exact: true
        });
        this.otherTab = this.page.getByText('OTHER', {
            exact: true
        });
        this.jobTitle = this.page
            .getByText('JOB TITLE', { exact: true })

        this.department = this.page
            .getByText('DEPARTMENT', { exact: true })

        this.accountName = this.page.getByText('ACCOUNT NAME', { exact: true });

        this.primary = this.page.getByText('Primary', { exact: true });
        this.editButton = this.page.getByRole('button', {
            name: 'Edit', exact: true
        });
        this.insightButton = this.page.getByRole('button', {
            name: ' Insights ', exact: true
        });
        this.deleteButton = this.page.getByText('Delete', {
            exact: true
        });
        this.viewChangelogButton = this.page.getByText('View Change Log', {
            exact: true
        });
        this.actionsDropdown = this.page.getByRole('button', {
            name: 'Actions',
            exact: true
        });
        this.chooseFileButton = this.page.getByRole('button', {
            name: 'vcard',
            exact: true
        });
        this.firstLeadSelectionCell = this.page
            .getByRole('row')
            .nth(1)
            .locator('td')
            .first();

        this.headerBulkActionButton = this.page.locator('scrm-table-header').getByRole('button', {
            name: 'Bulk Action'
        });

        this.selectRecordsMenuButton = this.page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.filterButton = this.page.getByRole('button', {
            name: 'Filter',
            exact: true
        });
        this.lastNameFilter = this.page.getByText('Last Name', {
            exact: true
        })
            .locator('xpath=following::input[1]');
        this.email = this.page
            .getByText('Email Address', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');
        this.mobile = this.page
            .getByText('MOBILE', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');
        this.officePhone = this.page
            .getByText('OFFICE PHONE', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');
        this.firstName = this.page
            .getByText('First Name', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');

        this.lastName = this.page
            .getByText('Last Name', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');

        this.title = this.page
            .getByText('JOB TITLE', { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');
        this.selectionDropdown = this.page
            .locator('scrm-table-header')
            .locator('button[aria-label="Select Action Menu"]');

        this.thisPageOption = this.page.locator('scrm-table-header a').filter({
            hasText: 'Select This Page'
        });

        this.headerBulkActionButton = this.page
            .locator('scrm-table-header')
            .getByRole('button', {
                name: 'Bulk Action',
                exact: true
            });

        this.status = this.page.getByText('STATUS', { exact: true });
        this.statusDescription = this.page.getByText('STATUS DESCRIPTION', { exact: true });
        this.campaignSelectbox = this.page.getByRole('combobox', { name: 'Select an item' });
        this.leadSource = this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Cold Call Existing Customer' }).getByRole('combobox')
        this.headerSelectionCheckbox = this.selectionDropdown
            .locator('input[type="checkbox"]');
    }

    async hoverLeadsModule() {

        await this.leadsDropdownMenu.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.leadsDropdownMenu.hover();
    }

    getLeadsDropdownmenu(optionName) {

        const options = {
            'Create Lead': this.createLead,
            'View Leads': this.viewLeads,
            'Import Leads': this.importLeads,
            'Create Lead From vCard': this.createLeadFromvCard
        };
        const option = options[optionName];
        if (!option) {
            throw new Error(`Unknown Leads dropdown menu: "${optionName}"`);
        }

        return option;
    }

}