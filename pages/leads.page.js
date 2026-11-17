import { expect } from '@playwright/test';
import path from 'node:path';
import testData from '../Testdata/leads-testdata.example.json' with { type: 'json' };


export class LeadsPage {
    constructor(page) {
        this.page = page;

        // Leads navigation
        this.leadsMenu = page.getByText('Leads', { exact: true }).first();
        this.createLeadLink = page.getByRole('link', { name: 'Create Lead', exact: true });
        this.createLeadFromVCardLink = page.getByRole('link', { name: 'Create Lead From vCard', exact: true });
        this.viewLeadsLink = page.getByRole('link', { name: 'View Leads', exact: true });
        this.importLeadsLink = page.getByRole('link', { name: 'Import Leads', exact: true });

        // Create Lead form
        this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
        this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
        this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW', exact: true });
        this.moreInformationTab = page.getByText('MORE INFORMATION', { exact: true });
        this.otherTab = page.getByText('OTHER', { exact: true });
        this.firstNameInput = this.fieldInput('First Name');
        this.lastNameInput = this.fieldInput('Last Name');
        this.jobTitleInput = this.fieldInput('JOB TITLE');
        this.emailInput = this.fieldInput('Email Address');
        this.mobileInput = this.fieldInput('MOBILE');
        this.officePhoneInput = this.fieldInput('OFFICE PHONE');

        // Record view and actions
        this.editButton = page.getByRole('button', { name: 'Edit', exact: true });
        this.insightsButton = page.getByRole('button', { name: /Insights/i });
        this.actionsMenuButton = page.getByRole('button', { name: 'Actions', exact: true });
        this.bulkActionsButton = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action', exact: true });
        this.selectionMenuButton = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.selectCurrentPageOption = page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });

        // List view filters
        this.filterButton = page.getByRole('button', { name: 'Filter', exact: true });
        this.lastNameFilterInput = page.getByText('Last Name', { exact: true })
            .locator('xpath=following::input[1]');
    }

    fieldInput(label) {
        return this.page.getByText(label, { exact: true })
            .locator('xpath=ancestor::div[.//input][1]')
            .locator('input');
    }

    async hoverOverLeadsMenu() {
        await expect(this.leadsMenu).toBeVisible();
        await this.leadsMenu.hover();
        //log.info('Hovered over the Leads navigation menu');
    }

    async assertLeadsMenuOptionsVisible(expectedOptions) {
        await this.hoverOverLeadsMenu();
        for (const option of expectedOptions) {
            await expect(this.page.getByRole('link', { name: option, exact: true })).toBeVisible();
        }
    }
    async navigateToLeadsPage(option) {
        const menuItems = {
            'Create Lead': this.createLeadLink,
            'Create Lead From vCard': this.createLeadFromVCardLink,
            'View Leads': this.viewLeadsLink,
            'Import Leads': this.importLeadsLink
        };
        const target = menuItems[option];
        if (!target) throw new Error(`Unsupported Leads navigation option: ${option}`);

        await this.hoverOverLeadsMenu();
        await target.click();
        //log.info(`Navigated to Leads page: ${option}`);
    }

    async assertCurrentLeadsPage(pageName) {
        const expectedUrls = testData.urls ?? {};
        if (expectedUrls[pageName]) {
            await expect(this.page).toHaveURL(expectedUrls[pageName], { timeout: 20000 });
            return;
        }

        const routePatterns = {
            'View Leads': /#\/leads(?:\/index)?(?:\?.*)?$/i,
            'Create Lead': /#\/leads\/edit/i,
            'Create Lead From vCard': /#\/leads\/vcard/i,
            'Import Leads': /#\/leads\/import/i
        };
        const pattern = routePatterns[pageName];
        if (!pattern) throw new Error(`No URL assertion configured for Leads page: ${pageName}`);
        await expect(this.page).toHaveURL(pattern, { timeout: 20000 });
    }

    async assertCreateLeadElementVisible(element) {
        const elements = {
            'OVERVIEW': this.overviewTab,
            'MORE INFORMATION': this.moreInformationTab,
            'OTHER': this.otherTab,
            'Save': this.saveButton,
            'Cancel': this.cancelButton
        };
        const locator = elements[element];
        if (!locator) throw new Error(`Unknown Create Lead page element: ${element}`);
        await expect(locator).toBeVisible();
    }

    async submitEmptyLeadForm() {
        await this.saveButton.click();
        // log.info('Submitted an empty Create Lead form');
    }

    async assertValidationMessageVisible(message) {
        await expect(this.page.getByText(message, { exact: true })).toBeVisible({ timeout: 15000 });
    }

    async submitLeadFormWithInvalidValue(field) {
        const invalidValues = {
            Email: [this.emailInput, testData.invalidEmail.email],
            Mobile: [this.mobileInput, testData.invalidMobile.mobile],
            'Office Phone': [this.officePhoneInput, testData.invalidOfficePhone.officePhone]
        };
        const entry = invalidValues[field];
        if (!entry) throw new Error(`Unsupported invalid lead field: ${field}`);
        const [locator, value] = entry;
        await locator.fill(value);
        await this.saveButton.click();
        //log.info(`Submitted Create Lead form with invalid ${field}`);
    }

    async enterValidLeadData() {
        const data = testData.validLead;
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.jobTitleInput.fill(data.title);
        await this.emailInput.fill(data.email);
        await this.mobileInput.fill(data.mobile);
        await this.officePhoneInput.fill(data.officePhone);
    }

    async createLeadFromTestData() {
        await this.enterValidLeadData();
        await this.saveButton.click();
        // log.info('Created a lead using configured test data');
    }

    async assertCreatedLeadRecordVisible() {
        await expect(this.page.getByText(testData.validLead.lastName, { exact: true }).first())
            .toBeVisible({ timeout: 20000 });
    }

    async cancelLeadCreation() {
        await this.cancelButton.click();
    }

    async assertConfirmationDialogVisible() {
        await expect(this.page.getByRole('dialog')).toBeVisible({ timeout: 10000 });
    }

    async confirmDialogAction(buttonName) {
        await this.page.getByRole('button', { name: buttonName, exact: true }).click();
    }

    async openLeadEditForm() {
        await this.editButton.click();
        await expect(this.saveButton).toBeVisible();
    }

    async updateLeadUsingTestData() {
        const updatedTitle = testData.updatedJobTitle.JobTitle;
        await this.jobTitleInput.fill(updatedTitle);
        await this.saveButton.click();
        //  log.info('Updated lead job title');
    }

    async assertUpdatedLeadDetailsVisible() {
        await expect(this.page.getByText(testData.updatedJobTitle.JobTitle, { exact: true }).first())
            .toBeVisible({ timeout: 15000 });
    }

    async openLeadInsights() {
        await this.insightsButton.click();
    }

    async assertLeadInsightsAvailable() {
        await expect(this.insightsButton).toBeVisible();
    }

    async openLeadActionsMenu() {
        await this.actionsMenuButton.click();
    }

    async assertLeadActionsOptionsVisible(expectedOptions) {
        for (const option of expectedOptions) {
            await expect(this.page.getByText(option, { exact: true }).last()).toBeVisible();
        }
    }

    async selectLeadAction(actionName) {
        await this.page.getByText(actionName, { exact: true }).last().click();
    }

    async assertChangeLogDialogVisible() {
        await this.assertConfirmationDialogVisible();
    }

    async getVCardFrame() {
        const frames = this.page.frames();
        for (const frame of frames) {
            try {
                if (await frame.getByRole('heading', { name: 'Import vCard', exact: true }).count()) {
                    return frame;
                }
            } catch {
                // Ignore frames that detach while the application is rendering.
            }
        }
        throw new Error('Could not locate the Import vCard frame.');
    }

    async attachVCardFile(fileName) {
        const filePath = path.resolve(process.cwd(), 'Testdata', fileName);
        const frame = await this.getVCardFrame();
        const fileInput = frame.locator('input[type="file"]');
        await expect(fileInput).toHaveCount(1);
        await fileInput.setInputFiles(filePath);
        // log.info(`Attached vCard test file: ${fileName}`);
    }

    async assertVCardFileSelected(fileName) {
        const frame = await this.getVCardFrame();
        const fileInput = frame.locator('input[type="file"]');
        await expect(fileInput).toHaveValue(new RegExp(`${this.escapeRegExp(fileName)}$`, 'i'));
    }

    async importSelectedVCard() {
        const frame = await this.getVCardFrame();
        await frame.getByRole('button', { name: 'Import vCard', exact: true }).click();
    }

    async assertImportedLeadDetailsVisible() {
        await expect(this.page).toHaveURL(/#\/leads\/record\//i, { timeout: 20000 });
        await expect(this.page.getByText('Test Data', { exact: true }).first()).toBeVisible({ timeout: 15000 });
    }

    async assertVCardValidationMessage(message) {
        const frame = await this.getVCardFrame();
        await expect(frame.getByText(message, { exact: false })).toBeVisible({ timeout: 15000 });
    }

    async assertViewLeadsElementVisible(element) {
        if (element.toLowerCase() === 'filter') {
            await expect(this.filterButton).toBeVisible();
            return;
        }
        await expect(this.page.getByRole('columnheader', {
            name: new RegExp(`^${this.escapeRegExp(element)}$`, 'i')
        })).toBeVisible();
    }

    async openBulkActionsMenu() {
        const firstLeadRow = this.page.getByRole('row').filter({ has: this.page.getByRole('link') }).first();
        await expect(firstLeadRow).toBeVisible({ timeout: 15000 });
        await firstLeadRow.locator('td').first().click();
        await expect(this.bulkActionsButton).toBeEnabled();
        await this.bulkActionsButton.click();
    }

    async assertBulkActionOptionsVisible(expectedOptions) {
        for (const option of expectedOptions) {
            await expect(this.page.getByText(option, { exact: true }).last()).toBeVisible();
        }
    }

    async selectAllLeadsOnCurrentPage() {
        await this.selectionMenuButton.click();
        await expect(this.selectCurrentPageOption).toBeVisible();
        await this.selectCurrentPageOption.click();
    }

    async assertCurrentPageLeadsSelected() {
        await expect(this.bulkActionsButton).toBeEnabled({ timeout: 10000 });
    }

    async openLeadListFilters() {
        await this.filterButton.click();
    }

    async assertLeadListFiltersVisible() {
        await expect(this.lastNameFilterInput).toBeVisible();
    }

    async fillLastNameFilter(lastName) {
        await this.lastNameFilterInput.fill(lastName);
    }

    async assertLastNameFilterValue(expectedValue) {
        await expect(this.lastNameFilterInput).toHaveValue(expectedValue);
    }

    async searchLeadsByLastName() {
        await this.page.getByRole('button', { name: 'Search', exact: true }).last().click();
    }

    async assertLeadsMatchLastName(lastName) {
        const matchingCell = this.page.locator('scrm-table tbody tr td').filter({
            hasText: new RegExp(this.escapeRegExp(lastName), 'i')
        }).first();
        await expect(matchingCell).toBeVisible({ timeout: 15000 });
    }

    async attachLeadsImportFile(fileName) {
        const filePath = path.resolve(process.cwd(), 'Testdata', fileName);
        const fileInput = this.page.frameLocator('iframe').locator('input[type="file"]');
        await expect(fileInput).toHaveCount(1);
        await fileInput.setInputFiles(filePath);
    }

    async assertLeadsImportFileSelected(fileName) {
        const fileInput = this.page.frameLocator('iframe').locator('input[type="file"]');
        await expect(fileInput).toHaveValue(new RegExp(`${this.escapeRegExp(fileName)}$`, 'i'));
    }

    async continueImportWithoutFile() {
        const nextButton = this.page.frameLocator('iframe')
            .getByRole('button', { name: /Next/ });
        await expect(nextButton).toBeVisible();
        await nextButton.click();
    }

    async assertImportFileRequiredState() {
        const frame = this.page.frameLocator('iframe');
        await expect(frame.getByRole('heading', { name: /Step 1: Upload Import File/i })).toBeVisible();
        await expect(frame.locator('input[type="file"]')).toHaveValue('');
    }

    escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
