Feature: Pruebas aleatoreas en creacion de staff

    @user1 @web
    Scenario: 1. Crear un usuario con caracteres aleatoreas fuera del limite
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on staff in the navbar
        Then I expect that url contain "/staff"
        When I click on new user
        And I wait
        Then I enter email new user "#chars-100"
        And I click on Send invitation now
        And I wait
        Then I should see element with class "response" and text "Please enter an email."

    @user2 @web
    Scenario: 2. Crear un usuario con numeros aleatores
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on staff in the navbar
        Then I expect that url contain "/staff"
        When I click on new user
        And I wait
        Then I enter email new user "#numbers-100"
        And I click on Send invitation now
        And I wait
        Then I should see element with class "response" and text "Please enter an email."


