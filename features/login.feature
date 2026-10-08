@login
Feature: Login to Suite8

  Background:
    Given the user is on the Suite8 login page

  @Positive
  Scenario: User logs in with valid credentials
    When the user enters valid login credentials
    Then the user should be logged in successfully

  # @NegativeLogin
  # Scenario: User cannot log in with an invalid username
  #   When the user logs in using Excel data for scenario "invalid_username"
  #   Then the login error message from Excel should be displayed

  # @NegativeLogin
  # Scenario: User cannot log in with an invalid password
  #   When the user logs in using Excel data for scenario "invalid_password"
  #   Then the login error message from Excel should be displayed

  @PasswordHidden
Scenario: Verify password is hidden when user enters password
  When the user enters a password
  Then the user should see the password displayed as hidden characters

  @Negative @EmptyPassword
  Scenario: User cannot log in with an empty password
    When the user logs in using Excel data for scenario "empty_password"
    Then the login error message from Excel should be displayed

    @Negative @EmptyLogin
  Scenario: User cannot log in with an empty login
    When the user logs in using Excel data for scenario "empty_login"
    Then the login error message from Excel should be displayed