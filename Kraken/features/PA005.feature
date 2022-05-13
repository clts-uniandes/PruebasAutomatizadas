Feature: Login - Crear Pagina - Crear Elemento NavBar - Click en Navbar - Observar pagina creada

    @user1 @web

    Scenario: Login
        Given I navigate to page "<LOGIN_URL>"
        And I take a screenshot on "PA005"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I take a screenshot on "PA005"
        And I wait
        Then I expect that url contain "/site"
        And I take a screenshot on "PA005"
        When I click on pages in the navbar
        And I take a screenshot on "PA005"
        And I wait for 2 seconds
        And I click on new page
        And I take a screenshot on "PA005"
        And I wait for 2 seconds
        And I enter page title "Test Nav"
        And I take a screenshot on "PA005"
        And I begin writing page description "Descripcion de la pagina Test Nav"
        And I take a screenshot on "PA005"
        And I click on pubish page link
        And I take a screenshot on "PA005"
        And I click on publish page button
        And I take a screenshot on "PA005"
        And I wait for 2 seconds
        Then I should see text "Published"
        And I take a screenshot on "PA005"
        When I click on pages in the navbar
        And I take a screenshot on "PA005"
        Then I found the page has been created "Descripcion de la pagina Test Nav"
        And I wait for 2 seconds
        And I click on Design in the navbar
        And I take a screenshot on "PA005"
        And I enter "test Nav" nav label
        And I take a screenshot on "PA005"
        And I enter "http://localhost:2369/test-nav" nav url
        And I take a screenshot on "PA005"
        And I click on add navbar
        And I take a screenshot on "PA005"
        And I click on save navbar
        And I take a screenshot on "PA005"
        Then I should see text "Saved"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2369/test-nav"
        And I take a screenshot on "PA005"
        Then I should see text "Test Nav"
        And I should see text "Descripcion de la pagina Test Nav"
        And I wait for 2 seconds
