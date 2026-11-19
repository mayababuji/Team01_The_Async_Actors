
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures.js';
import testData from '../Testdata/leads-testdata.example.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

// Leads Navigation
When('the user hovers over the Leads navigation menu', async ({ leadsPage }) => {
    await leadsPage.hoverOverLeadsMenu();
});

Then('the Leads dropdown should display the following options:', async ({ leadsPage }, dataTable) => {
    const expectedOptions = dataTable.rows().map(([option]) => option);
    await leadsPage.assertLeadsMenuOptionsVisible(expectedOptions);
});

When('the user selects {string} from the Leads navigation menu', async ({ leadsPage }, option) => {
    await leadsPage.navigateToLeadsPage(option);
});

Then('the user should be navigated to the {string} page', async ({ leadsPage }, pageName) => {
    await leadsPage.assertCurrentLeadsPage(pageName);
});

// Create Lead
When('the user opens the Create Lead page', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('Create Lead');
});

Then('the Create Lead page should display the following elements:', async ({ leadsPage }, dataTable) => {
    for (const [element] of dataTable.rows()) {
        await leadsPage.assertCreateLeadElementVisible(element);
    }
});

When('the user submits the Create Lead form without entering any data', async ({ leadsPage }) => {
    await leadsPage.submitEmptyLeadForm();
});

Then('the lead form should display the validation message {string}', async ({ leadsPage }, message) => {
    await leadsPage.assertValidationMessageVisible(message);
});

When('the user submits the Create Lead form with invalid {string}', async ({ leadsPage }, field) => {
    await leadsPage.submitLeadFormWithInvalidValue(field);
});

When('the user creates a lead using valid test data', async ({ leadsPage }) => {
    await leadsPage.createLeadFromTestData();
});

Then('the newly created lead record should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertCreatedLeadRecordVisible();
});

When('the user enters valid lead data and selects Cancel', async ({ leadsPage }) => {
    await leadsPage.enterValidLeadData();
    await leadsPage.cancelLeadCreation();
});

Then('the lead cancellation confirmation dialog should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertConfirmationDialogVisible();
});

When('the user confirms the cancellation', async ({ leadsPage }) => {
    await leadsPage.confirmDialogAction('Ok');
});

// Edit Lead
Given('a lead record has been created for the current test', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('Create Lead');
    await leadsPage.createLeadFromTestData();
    await leadsPage.assertCreatedLeadRecordVisible();
});

When('the user edits the lead record and updates its details', async ({ leadsPage }) => {
    await leadsPage.openLeadEditForm();
    await leadsPage.updateLeadUsingTestData();
});

Then('the updated lead details should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertUpdatedLeadDetailsVisible();
});

// Lead Insights
When('the user opens the lead insights panel', async ({ leadsPage }) => {
    await leadsPage.openLeadInsights();
});

Then('the lead insights control should be available', async ({ leadsPage }) => {
    await leadsPage.assertLeadInsightsAvailable();
});

// Lead Actions
When('the user opens the lead record Actions menu', async ({ leadsPage }) => {
    await leadsPage.openLeadActionsMenu();
});

Then('the Actions menu should display the following options:', async ({ leadsPage }, dataTable) => {
    const expectedOptions = dataTable.rows().map(([option]) => option);
    await leadsPage.assertLeadActionsOptionsVisible(expectedOptions);
});

When('the user selects View Change Log from the Actions menu', async ({ leadsPage }) => {
    await leadsPage.openLeadActionsMenu();
    await leadsPage.selectLeadAction('View Change Log');
});

Then('the lead change log dialog should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertChangeLogDialogVisible();
});

When('the user selects Delete from the Actions menu', async ({ leadsPage }) => {
    await leadsPage.openLeadActionsMenu();
    await leadsPage.selectLeadAction('Delete');
});

Then('the lead deletion confirmation dialog should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertConfirmationDialogVisible();
});

// vCard Import
When('the user opens the Create Lead From vCard page', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('Create Lead From vCard');
});

When('the user selects the valid vCard test file', async ({ leadsPage }) => {
    await leadsPage.attachVCardFile('lead.vcf');
});

Then('the selected vCard file should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertVCardFileSelected('lead.vcf');
});

When('the user imports the selected vCard file', async ({ leadsPage }) => {
    await leadsPage.importSelectedVCard();
});

Then('the imported lead record details should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertImportedLeadDetailsVisible();
});

When('the user selects the vCard file {string} from test data', async ({ leadsPage }, fileName) => {
    await leadsPage.attachVCardFile(fileName);
});

Then('the vCard import validation message should contain {string}', async ({ leadsPage }, message) => {
    await leadsPage.assertVCardValidationMessage(message);
});

// View Leads
When('the user opens the View Leads page', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('View Leads');
});

Then('the View Leads page should display the following elements:', async ({ leadsPage }, dataTable) => {
    for (const [element] of dataTable.rows()) {
        await leadsPage.assertViewLeadsElementVisible(element);
    }
});

// Bulk Actions
When('the user opens the Bulk Action menu', async ({ leadsPage }) => {
    await leadsPage.openBulkActionsMenu();
});

Then('the Bulk Action menu should display the following options:', async ({ leadsPage }, dataTable) => {
    const expectedOptions = dataTable.rows().map(([option]) => option);
    await leadsPage.assertBulkActionOptionsVisible(expectedOptions);
});

When('the user selects all records on the current page', async ({ leadsPage }) => {
    await leadsPage.selectAllLeadsOnCurrentPage();
});

Then('all visible lead records on the current page should be selected', async ({ leadsPage }) => {
    await leadsPage.assertCurrentPageLeadsSelected();
});

// Lead List Filters
When('the user opens the lead list filters', async ({ leadsPage }) => {
    await leadsPage.openLeadListFilters();
});

Then('the lead list filter controls should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertLeadListFiltersVisible();
});

Given('the lead list filters are expanded and the configured last name is entered', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('View Leads');
    await leadsPage.openLeadListFilters();
    await leadsPage.fillLastNameFilter(testData.validLead.lastName);
});

Then('the last name filter should contain the configured value', async ({ leadsPage }) => {
    await leadsPage.assertLastNameFilterValue(testData.validLead.lastName);
});

When('the user searches for leads using the last name filter', async ({ leadsPage }) => {
    await leadsPage.searchLeadsByLastName();
});

Then('the lead list should contain matching last name results', async ({ leadsPage }) => {
    await leadsPage.assertLeadsMatchLastName(testData.validLead.lastName);
});

// CSV Import
When('the user opens the Import Leads page and selects the valid leads CSV file', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('Import Leads');
    await leadsPage.attachLeadsImportFile('leads.csv');
});

Then('the selected import file name should be displayed', async ({ leadsPage }) => {
    await leadsPage.assertLeadsImportFileSelected('leads.csv');
});

When('the user opens the Import Leads page and continues without selecting an import file', async ({ leadsPage }) => {
    await leadsPage.navigateToLeadsPage('Import Leads');
    await leadsPage.continueImportWithoutFile();
});

Then('the import wizard should display the file selection validation state', async ({ leadsPage }) => {
    await leadsPage.assertImportFileRequiredState();
});











