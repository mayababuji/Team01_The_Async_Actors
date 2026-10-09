@accounts
Feature: Accounts module navigation

Background:
  Given the authenticated user is on the Suite8Demo home page

  @AccountsNavigation
  Scenario: Verify Accounts module navigation
    When the user hovers over the Accounts module in the top navigation
    Then the user should see the Accounts dropdown options
      | Create Account  |
      | Import Accounts |
      | View Accounts   |

  @AccountsNavigation
Scenario: Verify Create Account page navigation
  When the user clicks on the Accounts module from the top navigation
  Then the user should be navigated to the Create Account page

    @AccountsNavigation 
Scenario: Verify Import Accounts page navigation
  When the user clicks on the Import module from the top navigation
  Then the user should be navigated to the Import module page

      @AccountsNavigation @maya
Scenario: Verify View Accounts page navigation
  When the user clicks on the View Accounts module from the top navigation
  Then the user should be navigated to the View Accounts module page