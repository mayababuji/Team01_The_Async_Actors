@contacts
Feature: Contacts Management Module

    Background:
        Given the authenticated user is on the Suite8Demo home page

    @ContactsNavigation
    Scenario: Verify Contacts module navigation
        When the user hovers over the Contacts module in the top navigation
        Then the user should see the Contacts dropdown options
            | Create Contact            |
            | View Contacts             |
            | Import Contacts           |
            | Create Contact From Vcard |


