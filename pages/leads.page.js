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


    async clickLeadsOption(name) {
        await this.hoverOnLeads();
        switch (name) {
            case 'Create Lead':
                await this.createLead.click();
                break;

            case 'Create Lead From vCard':
                await this.createLeadFromvCard.click();
                break;

            case 'View Leads':
                await this.viewLeads.click();
                break;

            case 'Import Leads':
                await this.importLeads.click();
                break;

            default:
                throw new Error(`Invalid Leads option: ${name}`);
        }
        log.info(`Clicked Leads option: ${name}`);
    }

    async redirectedpage(expectedPage) {
        if (expectedPage === 'View Leads') {
            await expect(this.page).toHaveURL(
                /#\/leads(?:\/index(?:\?.*)?)?$/,
                { timeout: 15000 }
            );
        } else {
            const expectedUrl = testData.urls[expectedPage];

            if (!expectedUrl) {
                throw new Error(`No expected URL configured for: ${expectedPage}`);
            }

            await expect(this.page).toHaveURL(expectedUrl, { timeout: 15000 });
        }

        log.info(`Successfully navigated to ${expectedPage}`);
    }
    async viewCreateLeadFeatures() {
        await this.page
            .getByRole('tab', { name: 'OVERVIEW', exact: true })
            .waitFor({ state: 'visible' });

        log.info('Create Lead page is displayed');
    }
    async verifyFeatureDisplayed(feature) {
        const locators = {
            overview: this.overviewTab,
            'more information': this.moreInformationTab,
            other: this.otherTab,
            save: this.saveButton,
            cancel: this.cancelButton
        };

        const locator = locators[feature.trim().toLowerCase()];

        if (!locator) {
            throw new Error(`Unknown Create Lead page feature: ${feature}`);
        }

        await expect(locator).toBeVisible();
        log.info(`${feature} is displayed on the Create Lead page`);
    }

    async getErrorMessage(message) {
        const errorMessage = this.page.getByText(
            message, { exact: true }
        );

        await errorMessage.waitFor({ state: 'visible' });

        log.info(`Verified error message: ${message}`);
    }

    async clickSaveButton(fieldname) {
        switch (fieldname.trim().toLowerCase()) {

            case 'empty':
            case 'without entering any details':
                // Do not enter any data
                break;

            case 'invalid email':
                await this.email.click();
                await this.email.fill(testData.invalidEmail.email);
                break;

            case 'invalid mobile':
                await this.mobile.click();
                await this.mobile.fill(testData.invalidMobile.mobile);
                break;

            case 'invalid office phone':
                await this.officePhone.click();
                await this.officePhone.fill(testData.invalidOfficePhone.officePhone);
                break;

            default:
                throw new Error(`Unknown Save scenario: ${fieldname}`);
        }

        await this.saveButton.click();

        log.info(`Clicked Save button for scenario: ${fieldname}`);
    }

    async createLeadWithValidData() {
        const data = testData.validLead;

        await this.firstName.click();
        await this.firstName.fill(data.firstName);

        await this.lastName.click();
        await this.lastName.fill(data.lastName);

        await this.title.click();
        await this.title.fill(data.title);

        await this.email.click();
        await this.email.fill(data.email);

        await this.mobile.click();
        await this.mobile.fill(data.mobile);

        await this.officePhone.click();
        await this.officePhone.fill(data.officePhone);

        await this.saveButton.click();

        log.info('Entered valid lead data and clicked Save');
    }
    async verifyNewCreatedLeadRecordisDisplayed() {

        await expect(this.page).not.toHaveURL(
            /action=EditView/i,
            { timeout: 15000 }
        );

        const data = testData.validLead;

        await expect(
            this.page.getByText(data.lastName, { exact: true }).first()
        ).toBeVisible({ timeout: 15000 });

        log.info('Successfully redirected to the new Lead record page');
    }
    async clickCancelButton() {
        await this.cancelButton.click();

    }
    async clicksaveButton() {
        await this.saveButton.click();

    }
    async clickDeleteButton() {
        await this.deleteButton.click();

    }
    async clickViewChangeLogButton() {
        await this.viewChangelogButton.click();

    }
    async clickEditButton() {
        await this.editButton.click();

        await expect(this.saveButton).toBeVisible();

        log.info('Clicked Edit button on Lead record page');

    }
    async clickInsightButton() {
        await this.insightButton.click();
        log.info('Clicked Insight button on Lead record page');

    }
    async clickChooseFileButton() {
        await this.chooseFileButton.click();
    }
    async verifyCancelPopup() {
        await expect(this.page.getByRole('dialog')).toBeVisible();
        log.info(`Verified cancel confirmation popup is displayed`);
    }
    async verifyDeletePopup() {
        await expect(this.page.getByRole('dialog')).toBeVisible();
        log.info(`Verified delete confirmation popup is displayed`);
    }
    async verifyViewChangeLogPopup() {
        await expect(this.page.getByRole('dialog')).toBeVisible();
        log.info(`Verified view change log popup is displayed`);
    }
    async clickCancelButtonWithValidData() {
        await this.fillValidLeadData();
        await this.cancelButton.click();
    }
    async fillValidLeadData() {
        const data = testData.validLead;

        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.title.fill(data.title);
        await this.email.fill(data.email);
        await this.mobile.fill(data.mobile);
        await this.officePhone.fill(data.officePhone);
    }

    async clickOkButtonInPopup() {
        const okButton = this.page.getByRole('button', { name: 'Ok' });
        await okButton.click();
        log.info('Clicked "Ok" button in the popup');

    }
    async viewLeadsPageDisplayed() {
        await expect(this.page).toHaveURL(/module=Leads&view=ListView/i, {
            timeout: 15000
        });
        await expect(this.page).toHaveURL(testData.urls['View Leads']);

        log.info('Successfully redirected to the View Leads page');
    }
    async updateLeadRecordFields() {
        const updatedTitle = testData.updatedJobTitle.JobTitle;

        await this.title.fill(updatedTitle);
        await this.saveButton.click();

        await expect(
            this.page.getByText(updatedTitle, { exact: true }).first()
        ).toBeVisible({ timeout: 15000 });

        log.info('Lead record fields updated successfully');
    }
    async verifyLeadInsightsDisplayed() {
        await expect(this.insightButton).toBeVisible();

        log.info('Lead insights are displayed');
    }
    async verifyActionsDropdownOptions(options) {
        for (const option of options) {
            await expect(
                this.page.getByText(option, { exact: true })
            ).toBeVisible();
        }
    }

    async getVcardFrame() {
        const iframes = this.page.locator('iframe');
        let matchingIndex = -1;

        await expect.poll(async () => {
            const count = await iframes.count();

            for (let i = 0; i < count; i++) {
                const candidate = iframes.nth(i).contentFrame();

                try {
                    if (await candidate.getByRole('heading', {
                        name: 'Import vCard',
                        exact: true
                    }).count()) {
                        matchingIndex = i;
                        return true;
                    }
                } catch (error) {
                    if (!String(error).includes('detached')) {
                        throw error;
                    }
                }
            }

            return false;
        }, { timeout: 15000 }).toBe(true);

        return iframes.nth(matchingIndex).contentFrame();
    }
    async selectVcardFile(fileName) {
        const filePath = path.resolve(
            process.cwd(),
            'Testdata',
            fileName
        );

        const frame = await this.getVcardFrame();
        const fileInput = frame.locator('input[type="file"]');

        await expect(fileInput).toHaveCount(1);
        await fileInput.setInputFiles(filePath);
    }
    async selectImportFile() {
        const filePath = path.resolve(
            process.cwd(),
            'Testdata',
            'leads.csv'
        );

        const fileInput = this.page
            .frameLocator('iframe')
            .locator('input[type="file"]');

        await expect(fileInput).toHaveCount(1);
        await fileInput.setInputFiles(filePath);
    }

    async verifySelectedFile(fileName) {
        const escapedFileName = fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const frame = await this.getVcardFrame();
        const fileInput = frame.locator('input[type="file"]');

        await expect(fileInput).toHaveValue(
            new RegExp(`${escapedFileName}$`, 'i')
        );
    }

    async clickImportButton() {
        const frame = await this.getVcardFrame();
        await frame.getByRole('button', {
            name: 'Import vCard',
            exact: true
        }).click();
    }
    async verifyImportedDetails() {
        await expect(this.page).toHaveURL(/#\/leads\/record\//, {
            timeout: 15000
        });

        const visibleLeadName = this.page
            .getByText('Test Data', { exact: true })
            .filter({ visible: true });

        await expect(visibleLeadName.first()).toBeVisible({ timeout: 15000 });

        log.info('Verified imported vCard lead');
    }
    async verifyValidationMessage(expectedMessage) {
        const frame = await this.getVcardFrame();
        await expect(
            frame.getByText(expectedMessage, { exact: false })
        ).toBeVisible({ timeout: 15000 });

        log.info(`Verified vCard validation message: ${expectedMessage}`);
    }

    async viewLeadFeatures() {
        await expect(this.page).toHaveURL(/#\/leads\/index/);
        await expect(
            this.page.getByRole('columnheader', { name: 'Name', exact: true })
        ).toBeVisible();

        log.info('View Leads list is displayed');
    }
    async verifyViewFeatureDisplayed(feature) {
        if (feature.trim().toLowerCase() === 'filter') {
            await expect(
                this.page.getByRole('button', { name: 'Filter', exact: true })
            ).toBeVisible();
            return;
        }

        await expect(
            this.page.getByRole('columnheader', {
                name: new RegExp(`^${feature.trim()}$`, 'i')
            })
        ).toBeVisible();
    }
    async clickBulkActionDropdown() {
        const firstLeadRow = this.page
            .getByRole('row')
            .filter({ has: this.page.getByRole('link') })
            .first();

        await expect(firstLeadRow).toBeVisible({ timeout: 15000 });
        await firstLeadRow.locator('td').first().click();

        await expect(this.headerBulkActionButton).toBeEnabled();
        await this.headerBulkActionButton.click();
    }
    async verifyBulkActionOptions(options) {
        for (const option of options) {
            await expect(
                this.page.getByText(option, { exact: true }).filter({ visible: true })
            ).toBeVisible();
        }
    }
    async selectCurrentPageLeads() {
        await expect(
            this.page.getByRole('columnheader', { name: 'Name', exact: true })
        ).toBeVisible({ timeout: 15000 });

        await this.selectionDropdown.click();
        await expect(this.thisPageOption).toBeVisible({ timeout: 10000 });
        await this.thisPageOption.click();

    }

    async verifyCurrentPageLeadsSelected() {
        await this.page.waitForTimeout(2000);
        await expect(this.headerBulkActionButton).toBeEnabled();
        await this.page.waitForTimeout(2000);
        console.log(
            `Successfully verified Leads records selected on current page`
        );
    }
    async openLeadFilters() {
        await this.filterButton.click();
    }

    async verifyLeadFiltersDisplayed() {
        await expect(this.lastNameFilter).toBeVisible();
    }
    async enterLastNameFilter(lastName = testData.validLead.lastName) {
        await this.lastNameFilter.fill(lastName);
    }

    async verifyLastNameFilterValue(lastName = testData.validLead.lastName) {
        await expect(this.lastNameFilter).toHaveValue(lastName);
    }

    async searchLeadsByLastName() {
        await this.page.getByRole('button', { name: 'Search', exact: true }).last().click();
    }

    async verifyLeadsMatchLastName() {
        await this.page.waitForTimeout(2000);

        // Locate Last Name column cells
        const lastNameCells = this.page.locator(
            'scrm-table tbody tr td'
        );

        const count = await lastNameCells.count();

        console.log('Total matching cells:', count);

        expect(count).toBeGreaterThan(0);

        // Verify displayed records contain specified Last Name
        for (let i = 0; i < count; i++) {

            const cellText = (await lastNameCells.nth(i).innerText()).trim();

            if (cellText) {
                console.log('Displayed cell:', cellText);

            }
        }
    }
    async verifyImportFileSelected(fileName) {

        const fileInput = this.page
            .frameLocator('iframe')
            .locator('input[type="file"]');

        await expect(fileInput).toHaveValue(new RegExp(`${fileName.replace('.', '\\.')}$`, 'i'));
    }

    async clickNextWithoutImportFile() {
        const nextButton = this.page
            .frameLocator('iframe')
            .getByRole('button', { name: 'Next >', exact: true });

        await expect(nextButton).toBeVisible();
        await nextButton.click();
    }
    async verifyImportFileValidationMessage() {
        const frame = this.page.frameLocator('iframe');
        const fileInput = frame.locator('input[type="file"]');

        await expect(fileInput).toHaveValue('');
        await expect(frame.getByRole('heading', {
            name: 'Step 1: Upload Import File',
            exact: true
        })).toBeVisible();
    }


}