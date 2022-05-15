Feature: Login, Cambiar email de usuario, probar login y dejar como estaba

  @user1 @web
  Scenario: As a user I want to change email
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA016"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA016"
    And I wait
    Then I expect that url contain "#/dashboard"
    When I click on staff in the navbar
    And I take a screenshot on "PA016"
    And I click on one user
    And I take a screenshot on "PA016"
    And I change email user "davidzub@gmail.com"
    And I take a screenshot on "PA016"
    And I click on save button
    And I take a screenshot on "PA016"
    Then I should see text "saved"
    When I click on config user link
    And I take a screenshot on "PA016"
    And I wait for 2 seconds
    And I click on logout link
    And I take a screenshot on "PA016"
    And I login with new email "davidzub@gmail.com" and "<PASSWORD>"
    And I take a screenshot on "PA016"
    And I wait
    Then I expect that url contain "#/dashboard"
    When I click on staff in the navbar
    And I take a screenshot on "PA016"
    And I click on one user
    And I take a screenshot on "PA016"
    And I change email original user "<USERNAME>"
    And I take a screenshot on "PA016"
    And I click on save button
    And I take a screenshot on "PA016"
    Then I should see text "Saved"
    And I wait for 10 seconds