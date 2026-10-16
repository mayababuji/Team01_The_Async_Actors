@accounts
Feature: Accounts management

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
  Scenario: Create an account with valid mandatory data
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

  @accounts @CreateAccountInvalidEmail
  Scenario: Validate an invalid email address during account creation
    Given the user is on the Create Account page
    When the user enters a valid account name, an invalid email address, and clicks the Save button
    Then the user should see an email-address validation message

  @accounts @CancelCreateAccountWithoutData
  Scenario: Verify Cancel button on Create Account page without entered data
    Given the user is on the Create Account page
    When the user clicks the Cancel button without entering data
    Then the user should be navigated back to the Accounts Dashboard page

  @accounts @CancelCreateAccountWithData
  Scenario: Verify Cancel button on Create Account page with entered data
    Given the user enters account data entered on the Create Account page
    When the user clicks the Cancel button
    Then the user should see a confirmation popup for unsaved changes


  @accounts @DiscardUnsavedAccountData
  Scenario: Discard unsaved account data from cancellation popup
    Given the user enters account data entered on the Create Account page
    When the user discards the unsaved account data from the cancellation popup
    Then the user should be navigated back to the Accounts Dashboard page


  @accounts @ContinueEditingAfterCancel
  Scenario: Continue editing account after dismissing cancellation popup
    Given the user enters account data entered on the Create Account page
    When the user dismisses the cancellation popup
    Then the user should remain on the Create Account page with entered data retained


  @accounts @SearchExistingAccountByName 
Scenario: Search for an existing account by name
  Given an account exists for the account name search 'search_existing_account_by_name'
  When the user searches for an existing account by name 'search_existing_account_by_name'
  Then the matching account should be displayed for 'search_existing_account_by_name'


    @accounts @SearchAccountPartialName 
Scenario: Search for an account using partial account name
   Given an account exists for the account name search 'search_account_partial_name'
  When the user searches with a partial existing account name 'search_account_partial_name'
  Then the matching account should be displayed for 'search_account_partial_name'



  @accounts @SearchNonExistingAccount
Scenario: Search for a non-existing account
  Given the user is on the View Accounts page
  When the user searches for a non-existing account name
  Then a no-results message should be displayed

  @accounts @OpenAccountFromList
Scenario: Open an account from the Accounts list
  Given an account is available on the View Accounts page
  When the user selects an account name from the list
  Then the selected account detail page should be displayed

  @accounts @AccountRecentlyViewed
Scenario: Verify existing account appears in Recently Viewed
  Given the user has opened an existing account detail page
  When the user opens Recently Viewed from the Accounts module
  Then the existing account should be displayed in Recently Viewed


  @accounts @SortAccountsByName
Scenario: Sort accounts by name
  Given the user can see multiple accounts displayed while on view page
  When the user sorts the account list by name in ascending order
  Then accounts should be displayed in ascending name order

  @accounts @UpdateAccountWebsite
Scenario: Update account website
  Given a new account exists for updating its website 'update_account_website'
  When the user updates the account website and saves the changes
  Then the account website should be updated successfully

    @UpdateAccountOfficePhone
  Scenario: Update account office phone number
    Given a new account exists for updating its office phone number 'update_account_office_phone'
    When the user updates the office phone number and saves the changes
    Then the account office phone number should be updated successfully


      @CancelAccountEdit
  Scenario: Cancel changes while editing an account
    Given the user is editing a newly created account 'cancel_account_edit'
    When the user cancels the account changes
    Then the existing account details should remain unchanged

    @ImportAccounts @Positive @DownloadAccountImportTemplate
  Scenario: Download the account import template
    Given the user is on the Import Accounts page
    When the user downloads the account import template
    Then the account import template should be downloaded successfully


      @ImportAccounts @Positive @SelectAccountImportFile
  Scenario: Select a valid account import file
    Given the user is on the Import Accounts page
    When the user selects a valid account import file
    Then the selected import filename should be displayed

  # @ImportAccounts @Positive @ProceedWithValidImportFile
  # Scenario: Proceed with a valid account import file
  #   Given the user is on the Import Accounts page with a valid account import file selected
  #   When the user clicks Next on the Import Accounts page
  #   Then the next account import configuration step should be displayed

  # @ImportAccounts @Positive @ImportNewAccounts
  # Scenario: Import new accounts from a valid file
  #   Given a valid import file containing new account data is available
  #   When the user completes the account import using Create new records only
  #   Then the imported accounts should contain the values provided in the file

  # @ImportAccounts @Negative @ImportWithoutFile
  # Scenario: Prevent account import without selecting a file
  #   Given the user is on the Import Accounts page without a file selected
  #   When the user attempts to proceed to the next import step
  #   Then the user should remain on the Upload Import File page without starting an import