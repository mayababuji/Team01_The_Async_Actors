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

      @AccountsNavigation
Scenario: Verify View Accounts page navigation
  When the user clicks on the View Accounts module from the top navigation
  Then the user should be navigated to the View Accounts module page

   @RequiredNameValidation  
  Scenario: Verify required Name field validation on Create Account page
    Given the user is on the Create Account page
    When the user clicks Save without entering the required Name field
    Then the Name validation message "Missing required field: Name" should be displayed

     @CreateAccountPositive
  Scenario Outline: Create an account with valid mandatory data
   Given the user is on the Create Account page
  When the user enters valid account details and clicks Save
  Then the user should be navigated to the newly created account detail page

  @CreateAccountCompleteOverview 
Scenario: Create an account with complete overview information
  Given the user is on the Create Account page
  When the user enters complete overview information from Excel and saves the account
  Then the account should be created with all entered overview information



  @accounts @CreateAccountPrimaryEmail 
Scenario: Create an account with a primary email address
  Given the user is on the Create Account page
  When the user enters a valid account name, email address, selects primary email, and saves the account
  Then the account should be created with the email address marked as primary