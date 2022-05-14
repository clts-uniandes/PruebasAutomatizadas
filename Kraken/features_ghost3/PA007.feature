Feature: Login - Editar Titulo Pagina - Click en Navbar - Observar enlace roto

    @user1 @web

    Scenario: Login
        Given I navigate to page "<LOGIN_URL>"
        And I take a screenshot on "PA007"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I take a screenshot on "PA007"
        And I wait
        Then I expect that url contain "/site"
        When I click on pages in the navbar
        And I take a screenshot on "PA007"
        And I wait for 2 seconds
        And I click on new page
        And I take a screenshot on "PA007"
        And I wait for 2 seconds
        And I enter page title "Test Nav Editar"
        And I take a screenshot on "PA007"
        And I begin writing page description "Descripcion de la pagina Test Nav Editar"
        And I take a screenshot on "PA007"
        And I click on pubish page link
        And I take a screenshot on "PA007"
        And I click on publish page button
        And I take a screenshot on "PA007"
        And I wait for 2 seconds
        Then I should see text "Published"
        When I click on pages in the navbar
        And I take a screenshot on "PA007"
        Then I found the page has been created "Descripcion de la pagina Test Nav Editar"
        And I wait for 2 seconds
        And I click on Design in the navbar
        And I take a screenshot on "PA007"
        And I enter "Test Nav Editar" nav label
        And I take a screenshot on "PA007"
        And I enter "http://localhost:2369/test-nav-editar" nav url
        And I take a screenshot on "PA007"
        And I click on add navbar
        And I take a screenshot on "PA007"
        And I click on save navbar
        And I take a screenshot on "PA007"
        Then I should see text "Saved"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2369/test-nav-editar"
        And I take a screenshot on "PA007"
        Then I should see text "Test Nav Editar"
        And I should see text "Descripcion de la pagina Test Nav Editar"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2369/ghost/#/site"
        And I take a screenshot on "PA007"
        And I click on pages in the navbar
        And I take a screenshot on "PA007"
        And I found the page has been created "Test Nav Editar" click
        And I take a screenshot on "PA007"
        And I wait for 2 seconds
        And I enter page title "Test Nav Editado"
        And I take a screenshot on "PA007"
        And I click on config page
        And I take a screenshot on "PA007"
        And I enter url page slug "test-nav-editado"
        And I take a screenshot on "PA007"
        And I click on config close
        And I take a screenshot on "PA007"
        And I click on update page link
        And I take a screenshot on "PA007"
        And I click on publish page button
        And I take a screenshot on "PA007"
        And I wait for 2 seconds
        Then I should see text "Updated"
        When I navigate to page "http://localhost:2369/test-nav-editar"
        And I take a screenshot on "PA007"
        Then I should see text "404"
        Then I should see text "Page not found"
        And I wait for 2 seconds
        
