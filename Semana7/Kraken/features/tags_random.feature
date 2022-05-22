Feature: Pruebas a random en creacion de tags

    @user1 @web
    Scenario: 1. Crear tag con nombre fuera de rango
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "#paragraph-4"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "Tag names cannot be longer than 191 characters."


    @user2 @web
    Scenario: 2. Crear tag con nombre y descripcion fuera de rango
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "#words"
        And I enter tag description "#paragraph-5"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "Description cannot be longer than 500 characters."

    @user3 @web
    Scenario: 3. Crear tag con slug fuera de rango
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "#words"
        And I enter tag slug "#paragraph-10"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "Slug cannot be longer than 500 characters."