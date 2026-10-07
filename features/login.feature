@login
Feature: Login to Suite8

  Background:
    Given the user is on the Suite8 login page

  @TestScenario_login_01
  Scenario: User logs in with valid credentials
    When the user enters valid login credentials
    Then the user should be logged in successfully