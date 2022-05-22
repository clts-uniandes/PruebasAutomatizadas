Feature: Pruebas a priori en creacion de tags

    @user1 @web
    Scenario: 1. Crear tag sin nombre
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$vacio"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "You must specify a name for the tag."

    @user2 @web
    Scenario: 2. Crear tag con color valido Hexadecimal 
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "Prueba 2"
        And I enter tag color "000000"
        And I click on save tag
        And I wait for 2 seconds
        When I click on tags in the navbar
        Then I found the tag has been created "Prueba 2"

    @user3 @web
    Scenario: 3. Crear tag con color con un solo digito hexadecimal
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "Prueba 3"
        And I enter tag color "0"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "The color should be in valid hex format"

    @user4 @web
    Scenario: 4. Crear tag con color fuera del rango hexadecimal
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "Prueba 4"
        And I enter tag color "GGGGGG"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "The color should be in valid hex format"

    @user5 @web
    Scenario: 5. Crear tag con color pero sin nombre
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$vacio"
        And I enter tag color "F2F2F2"
        And I click on save tag
        And I wait for 2 seconds
        Then I should see element with class "response" and text "You must specify a name for the tag."

    @user6 @web
    Scenario: 6. Crear tag con nombre vacio y luego colocar nombre valido
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on tags in the navbar
        And I wait
        Then I expect that url contain "/tags"
        And I click on new tag
        And I enter tag title "$vacio"
        And I enter tag color "F2F2F2"
        And I wait
        And I click on save tag
        And I enter tag title "Prueba 6"
        And I click on retry tag
        When I click on tags in the navbar
        Then I found the tag has been created "Prueba 6"
