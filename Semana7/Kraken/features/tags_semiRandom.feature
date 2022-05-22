Feature: Pruebas a semirandom en creacion de tags

@user1 @web
    Scenario: 1. Crear tag con nombre aleatorio
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"

@user2 @web
    Scenario: 2. Crear tag con nombre en caracteres de datapool
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$chars"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"


@user3 @web
    Scenario: 3. Crear tag con diferente slug al nombre
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I enter tag slug "$words"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"


@user4 @web
    Scenario: 4. Crear tag con descripcion de parrafos en datapooll
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I enter tag description "$paragraph"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"

@user5 @web
    Scenario: 5. Crear tag con slug en caracteres especiales
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I enter tag slug "$chars"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"


@user6 @web
    Scenario: 6. Crear tag con color en numero de datapool con mas digitos del limite permitido
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I enter tag color "$numbers"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I expect that url contain "/tags"

@user7 @web
    Scenario: 7. Crear tag con color de datapool caracteres no permitidos
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$words"
        And I enter tag color "$chars"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "The color should be in valid hex format"
        
        

