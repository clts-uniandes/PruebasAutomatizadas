Feature: Cambiar email de usuario, probar login y dejar como estaba

  @user1 @web
  Scenario: As a user I want to change email
    Given I navigate to page "<LOGIN_URL>"
    
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on staff in the navbar
    And I click on one user
    And I change email user "davidzub@gmail.com"
    And I click on save button
    Then I should see text "saved"
    When I click on config user link
    And I wait for 2 seconds
    And I click on logout link
    And I login with new email "davidzub@gmail.com" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on staff in the navbar
    And I click on one user
    And I change email original user "<USERNAME>"
    And I click on save button
    Then I should see text "saved"
    And I wait for 10 seconds