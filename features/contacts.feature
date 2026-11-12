@contacts
Feature: Contacts Management Module

    Background:
        Given the authenticated user is on the Suite8Demo home page

    @ContactsDropdownVisible
    Scenario: Verify Contacts dropdown menu expands on hover
        When the user hovers over the Contacts tab
        Then the Contacts dropdown menu should be displayed

    @ContactsDropdown
    Scenario: Verify Contacts module navigation
        When the user hovers over the Contacts module in the top navigation
        Then the user should see the Contacts dropdown options
            | Create Contact            |
            | View Contacts             |
            | Import Contacts           |
            | Create Contact From Vcard |

    @ContactsNavigation
    Scenario: Verify that the user is redirected to the selected Contacts page
        When The user clicks on the <ContactsMenu> option
        Then The user should be redirected to the <Contactspage> successfully

            | ContactsMenu              | Contactspage              |
            | Create Contact            | Create Contact            |
            | Create Contact From vCard | Create Contact From vCard |
            | View Contacts             | View Contacts             |
            | Import Contacts           | Import Contacts           |


