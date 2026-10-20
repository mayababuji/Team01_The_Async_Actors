@opportunities
Feature: Opportunities management

  Background:
    Given the authenticated user is on the Suite8Demo home page

  @OpportunitiesNavigation
  Scenario: Verify Opportunities module navigation
    When the user hovers over the Opportunities module in the top navigation
    Then the user should see the Opportunities dropdown options
      | Create Opportunity   |
      | Import Opportunities |
      | View Opportunities   | 