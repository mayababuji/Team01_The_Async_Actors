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

      @opportunities @CreateOpportunityWithAmount
  Scenario: Create an opportunity with an amount
    Given a new account is created and the Create Opportunity page is opened for "create_opportunity_with_amount"
    When the user enters the mandatory opportunity data and saves
    Then the opportunity should be created with the amount from Excel

      @opportunities @CreateOpportunityWithCurrency
  Scenario: Create an opportunity with a selected currency and amount
    Given a new account is created and the Create Opportunity page is opened for "create_opportunity_with_currency"
     When the user enters the mandatory opportunity data and saves
    Then the opportunity should be created with the currency and amount from Excel

      @opportunities @positive @CreateOpportunityWithType
  Scenario Outline: Create an opportunity with <type>
    Given a new account is created and the Create Opportunity page is opened for "<scenario>"
    When the user enters mandatory opportunity data, selects the type from Excel, and saves
    Then the opportunity should be created with the selected type from Excel

    Examples:
      | scenario                             | type              |
      | create_opportunity_existing_business | Existing Business |
      | create_opportunity_new_business      | New Business      |

        @opportunities @positive @CreateOpportunityWithLeadSource
  Scenario Outline: Create an opportunity with lead source <leadSource>
    Given a new account is created and the Create Opportunity page is opened for "<scenario>"
    When the user enters mandatory opportunity data, selects the lead source from Excel, and saves
    Then the opportunity should be created with the selected lead source from Excel

    Examples:
      | scenario                                           | leadSource        |
      | create_opportunity_lead_source_cold_call            | Cold Call         |
      | create_opportunity_lead_source_existing_customer    | Existing Customer |
      | create_opportunity_lead_source_self_generated       | Self Generated    |
      | create_opportunity_lead_source_employee             | Employee          |
      | create_opportunity_lead_source_partner              | Partner           |
      | create_opportunity_lead_source_public_relations     | Public Relations  |
      | create_opportunity_lead_source_direct_mail          | Direct Mail       |
      | create_opportunity_lead_source_conference           | Conference        |
      | create_opportunity_lead_source_trade_show           | Trade Show        |
      | create_opportunity_lead_source_web_site             | Web Site          |
      | create_opportunity_lead_source_word_of_mouth        | Word of mouth     |
      | create_opportunity_lead_source_email                | Email             |
      | create_opportunity_lead_source_campaign             | Campaign          |
      | create_opportunity_lead_source_other                | Other             |

        @opportunities @positive @CreateOpportunityWithDescription
  Scenario: Create an opportunity with a description
    Given a new account is created and the Create Opportunity page is opened for "create_opportunity_with_description"
    When the user enters mandatory opportunity data, adds the description from Excel, and saves
    Then the opportunity should be created with the entered description from Excel