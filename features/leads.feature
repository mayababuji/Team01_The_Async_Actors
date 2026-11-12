@leads
Feature: Leads Management Module

    Background:
        Given the authenticated user is on the Suite8Demo home page

    @leadsDropdownMenu
    Scenario: Verify Leads module navigation
        When the user hovers over the Leads module in the top navigation
        Then the user should see the Leads dropdown options
            | Create Lead            |
            | View Leads             |
            | Import Leads           |
            | Create Lead From vCard |

# @leadsMenuNavigation
# Scenario Outline: Verify that the user is redirected to the selected Contacts page
#     When The user clicks on the "<LeadssMenu>" option
#     Then The user should be redirected to the "<LeadsPage>" successfully

#     Examples:
#         | LeadsMenu              | LeadsPage              |
#         | Create Lead            | Create Lead            |
#         | Create Lead From vCard | Create Lead From vCard |
#         | View Leads             | View Leads             |
#         | Import Leads           | Import Leads           |

# @createLead
# Scenario: Verify user can see Create Lead page with features
#     Given user is on Create Lead page
#     When User views features on Create Lead page
#     Then user should see the following features in the Create Lead page is Displayed:
#         | features         |
#         | OVERVIEW         |
#         | MORE INFORMATION |
#         | OTHER            |
#         | Save             |
#         | Cancel           |