Feature: Login y creacion de pagina con caracteres especiales en Ghost

    @user1 @web

    Scenario: Create Page

        Given I navigate to page "<LOGIN_URL>"
        And I take a screenshot on "PA004"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I take a screenshot on "PA004"
        And I wait
        Then I expect that url contain "#/dashboard"
        And I take a screenshot on "PA004"
        When I click on pages in the navbar
        And I take a screenshot on "PA004"
        And I wait for 2 seconds
        And I click on new page
        And I take a screenshot on "PA004"
        And I wait for 2 seconds
        And I enter page title "Titulo con caracteres especiales ñ!@#¢∞¬÷"
        And I take a screenshot on "PA004"
        And I begin writing page description "Pagina con publicacion con caracteres especiales"
        And I take a screenshot on "PA004"
        And I click on pubish page link
        And I take a screenshot on "PA004"
        And I click on publish page button
        And I take a screenshot on "PA004"
        And I wait for 2 seconds
        Then I should see text "Published"
        And I take a screenshot on "PA004"
        When I click on pages in the navbar
        And I take a screenshot on "PA004"
        Then I found the page has been created "Titulo con caracteres especiales ñ!@#¢∞¬÷"
        And I take a screenshot on "PA004"
        And I wait for 2 seconds