@leads
Feature: Leads Management Module

    Background:
        Given the authenticated user is on the Suite8Demo home page

    @LeadsNavigation
    Scenario: Verify Leads module navigation
        When the user hovers over the Leads module in the top navigation
        Then the user should see the Leads dropdown options
            | Create Lead            |
            | View Leads             |
            | Import Leads           |
            | Create Lead From vCard |