Feature: Crear pagina y eliminarla
  @user1 @web
  Scenario: As a user I want to create and publish page and deleted
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I wait for 2 seconds
    And I click on new page
    And I wait for 2 seconds
    When I enter page title "Crear pagina eliminarla" 
    And I begin writing page description "Pagina con publicacion programada eliminarla"
    When I click on pubish page link
    And I click on publish page button
    Then I should see text "Published"
    And I wait for 2 seconds
    When I click on pages in the navbar
    And I found the page has been created "Crear pagina eliminarla" click
    And I wait for 2 seconds
    And I click on config page
    And I wait for 5 seconds
    And I click on delete page
    #And I wait for 20 seconds
    #And I click on confrim delete page
    #And I wait for 10 seconds