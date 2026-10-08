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