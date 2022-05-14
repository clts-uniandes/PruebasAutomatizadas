Feature: Login, programar post y publicar post

  @user1 @web
  Scenario: As a user I want to create and publish page
    Given I navigate to page "<LOGIN_URL>"
    When I take a screenshot on "PA002"
    And I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA002"
    And I wait
    Then I expect that url contain "#/site"
    And I take a screenshot on "PA002"
    When I click on pages in the navbar
    And I take a screenshot on "PA002"
    And I wait for 2 seconds
    And I click on new page
    And I take a screenshot on "PA002"
    And I wait for 2 seconds
    And I enter page title "Crear pagina programada" 
    And I take a screenshot on "PA002"
    And I begin writing page description "Pagina con publicacion programada"
    And I take a screenshot on "PA002"
    And I click on pubish page link
    And I take a screenshot on "PA002"
    And I click on schedule page publish it for later
    And I take a screenshot on "PA002"
    And I click on schedule page button
    And I take a screenshot on "PA002"
    Then I should see text "Will be published in"
    And I take a screenshot on "PA002"