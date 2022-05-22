Feature: Pruebas de creacion de staff apriori

  @user1 @web
  Scenario: 1. Crear un usuario con un correo vacio
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on staff in the navbar
    Then I expect that url contain "/staff"
    When I click on new user
    And I wait
    Then I enter email new user "$vacio"
    And I click on Send invitation now
    And I wait
    Then I should see element with class "response" and text "Please enter an email."

@user2 @web
  Scenario: 2. Crear un usuario con un correo existente
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on staff in the navbar
    Then I expect that url contain "/staff"
    When I click on new user
    And I wait
    Then I enter email existing user "<USERNAME>"
    And I click on Send invitation now
    And I wait
    Then I should see element with class "response" and text "A user with that email address was already invited."