Feature: Logueo del usuario, crear una pagina y eliminarla
  @user1 @web
  Scenario: As a user I want to create and publish page and deleted
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA003"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA003"
    And I wait
    Then I expect that url contain "/dashboard"
    And I take a screenshot on "PA003"
    When I click on pages in the navbar
    And I take a screenshot on "PA003"
    And I wait for 2 seconds
    And I click on new page
    And I take a screenshot on "PA003"
    And I wait for 2 seconds
    When I enter page title "Crear pagina eliminarla" 
    And I take a screenshot on "PA003"
    And I begin writing page description "Pagina con publicacion programada eliminarla"
    And I take a screenshot on "PA003"
    When I click on pubish page link
    And I take a screenshot on "PA003"
    And I click on publish page button
    And I take a screenshot on "PA003"
    Then I should see text "Published"
    And I take a screenshot on "PA003"
    And I wait for 2 seconds
    When I click on pages in the navbar
    And I take a screenshot on "PA003"
    And I found the page has been created "Crear pagina eliminarla" click
    And I take a screenshot on "PA003"
    And I wait for 2 seconds
    And I click on config page
    And I take a screenshot on "PA003"
    And I scroll on config page
    And I take a screenshot on "PA003"
    And I wait for 5 seconds
    And I click on delete page
    And I take a screenshot on "PA003"
    And I click on confrim delete page
    And I take a screenshot on "PA003"
    Then I expect that url contain "/pages"
    And I take a screenshot on "PA003"
    And I wait for 5 seconds