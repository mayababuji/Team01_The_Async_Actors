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

   @ViewOpportunitiesNavigation
  Scenario: Verify View Opportunities page navigation
    When the user opens the Opportunities module and clicks View Opportunities
    Then the user should be navigated to the View Opportunities page

      @ImportOpportunitiesNavigation
  Scenario: Verify Import Opportunities page navigation
    When the user opens the Opportunities module and clicks Import Opportunities
    Then the user should be navigated to the Import Opportunities page