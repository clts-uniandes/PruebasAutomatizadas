Feature: Create Page schedule for later 

  @user1 @web
  Scenario: As a user I want to create and publish page
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on pages in the navbar
    And I wait for 2 seconds
    And I click on new page
    And I wait for 2 seconds
    When I enter page title "Crear pagina programada" 
    And I begin writing page description "Pagina con publicacion programada"
    When I click on pubish page link
    And I click on schedule page publish it for later
    And I click on schedule page button
    Then I should see text "Will be published in"