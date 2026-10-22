@opportunities
Feature: Opportunities management

  Background:
    Given the authenticated user is on the Suite8Demo home page

    @opportunities @OpportunitiesNavigation
  Scenario: Verify Opportunities module navigation
    When the user hovers over the Opportunities module in the top navigation
    Then the user should see the Opportunities dropdown options
      | Create Opportunity   |
      | Import Opportunities |
      | View Opportunities   | 

   @opportunities  @ViewOpportunitiesNavigation
  Scenario: Verify View Opportunities page navigation
    When the user opens the Opportunities module and clicks View Opportunities
    Then the user should be navigated to the View Opportunities page

    @opportunities   @ImportOpportunitiesNavigation
  Scenario: Verify Import Opportunities page navigation
    When the user opens the Opportunities module and clicks Import Opportunities
    Then the user should be navigated to the Import Opportunities page

 @opportunities   @CreateOpportunityRequiredFields
  Scenario: Verify required field validation on Create Opportunity page
    Given the user is on the Create Opportunity page
    When the user saves the opportunity without entering mandatory fields
    Then required-field validation messages should be displayed for:
      | Opportunity Name    |
      | Account Name        |
      | Opportunity Amount  |
      | Sales Stage         |
      | Expected Close Date |

    @opportunities     @CreateOpportunityPositive
  Scenario: Create an opportunity with valid mandatory data
    Given a new account is created and the Create Opportunity page is opened for "create_opportunity_valid_mandatory"
    When the user enters the mandatory opportunity data and saves
    Then the newly created opportunity detail page should be displayed