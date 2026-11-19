@leads @authenticated
Feature: Leads management

    Background:
        Given the authenticated user is on the Suite8Demo home page

    @leadsdropdown
    Scenario: Verify the Leads navigation menu options
        When the user hovers over the Leads navigation menu
        Then the Leads dropdown should display the following options:
            | option                 |
            | Create Lead            |
            | Create Lead From vCard |
            | View Leads             |
            | Import Leads           |

    @createlead
    Scenario: Verify the Create Lead page controls and sections
        When the user opens the Create Lead page
        Then the Create Lead page should display the following elements:
            | element          |
            | OVERVIEW         |
            | MORE INFORMATION |
            | OTHER            |
            | Save             |
            | Cancel           |

    @insightslead
    Scenario: View insights for a lead record
        Given a lead record has been created for the current test
        When the user opens the lead insights panel
        Then the lead insights control should be available

    @actionsdropdown
    Scenario: Verify the lead record Actions menu
        Given a lead record has been created for the current test
        When the user opens the lead record Actions menu
        Then the Actions menu should display the following options:
            | option          |
            | Duplicate       |
            | Delete          |
            | Convert Lead    |
            | Print as PDF    |
            | Find Duplicates |
            | View Change Log |

    @viewchangelog
    Scenario: View the change log for a lead record
        Given a lead record has been created for the current test
        When the user selects View Change Log from the Actions menu
        Then the lead change log dialog should be displayed

    @viewleads
    Scenario: Verify the View Leads list columns and controls
        When the user opens the View Leads page
        Then the View Leads page should display the following elements:
            | element      |
            | Name         |
            | Status       |
            | Account Name |
            | Office Phone |
            | Email        |
            | User         |
            | Filter       |

    @editlead
    Scenario: Update an existing lead record
        Given a lead record has been created for the current test
        When the user edits the lead record and updates its details
        Then the updated lead details should be displayed

    @filterbylastname
    Scenario: Filter lead records by last name
        Given the lead list filters are expanded and the configured last name is entered
        When the user searches for leads using the last name filter
        Then the lead list should contain matching last name results

    @validfileforimportlead
    Scenario: Select a valid CSV file for lead import
        When the user opens the Import Leads page and selects the valid leads CSV file
        Then the selected import file name should be displayed

    @invalidfileforimportlead
    Scenario: Validate lead import when no file is selected
        When the user opens the Import Leads page and continues without selecting an import file
        Then the import wizard should display the file selection validation state