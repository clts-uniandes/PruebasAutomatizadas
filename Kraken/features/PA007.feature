Feature: Login - Editar Titulo Pagina - Click en Navbar - Observar enlace roto

    @user1 @web

    Scenario: Login
        Given I navigate to page "<LOGIN_URL>"
        When I login with "<USERNAME>" and "<PASSWORD>"
        And I wait
        Then I expect that url contain "/site"
        When I click on pages in the navbar
        And I wait for 2 seconds
        And I click on new page
        And I wait for 2 seconds
        And I enter page title "Test Nav Editar"
        And I begin writing page description "Descripcion de la pagina Test Nav Editar"
        And I click on pubish page link
        And I click on publish page button
        And I wait for 2 seconds
        Then I should see text "Published"
        When I click on pages in the navbar
        Then I found the page has been created "Descripcion de la pagina Test Nav Editar"
        And I wait for 2 seconds
        And I click on Design in the navbar
        And I enter "Test Nav Editar" nav label
        And I enter "http://localhost:2369/test-nav-editar" nav url
        And I click on add navbar
        And I click on save navbar
        Then I should see text "Saved"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2369/test-nav-editar"
        Then I should see text "Test Nav Editar"
        And I should see text "Descripcion de la pagina Test Nav Editar"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2369/ghost/#/site"
        And I click on pages in the navbar
        And I found the page has been created "Test Nav Editar" click
        And I wait for 2 seconds
        And I enter page title "Test Nav Editado"
        And I click on config page
        And I enter url page slug "test-nav-editado"
        And I click on config close
        And I click on update page link
        And I click on publish page button
        And I wait for 2 seconds
        Then I should see text "Updated"
        When I navigate to page "http://localhost:2369/test-nav-editar"
        Then I should see text "404"
        Then I should see text "Page not found"
        And I wait for 2 seconds
        
