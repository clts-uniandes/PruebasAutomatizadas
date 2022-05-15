Feature: Crear pagina con caracteres especiales en Ghost

@user1 @web

Scenario: Create Page

    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on pages in the navbar
    And I wait for 2 seconds
    And I click on new page
    And I wait for 2 seconds
    And I enter page title "Titulo con caracteres especiales ñ!@#¢∞¬÷" 
    And I begin writing page description "Pagina con publicacion con caracteres especiales"
    And I click on pubish page link
    And I click on publish page button
    And I wait for 2 seconds
    Then I should see text "Published"
    When I click on pages in the navbar
    Then I found the page has been created "Titulo con caracteres especiales ñ!@#¢∞¬÷"
    And I wait for 2 seconds