Feature: Login, creacion de pagina y verificar que exista

  @user1 @web
  
  Scenario: As a user I want to create and publish page
    Given I navigate to page "<LOGIN_URL>"
    When I take a screenshot on "PA001"
    And I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA001"
    And I wait
    Then I expect that url contain "#/site"
    And I take a screenshot on "PA001"
    When I click on pages in the navbar
    And I take a screenshot on "PA001"
    And I click on link having href "#/editor/page/"
    And I take a screenshot on "PA001"
    And I enter page title "Titulo pagina usando Kraken"
    And I take a screenshot on "PA001"
    And I begin writing page description "Descripcion pagina usando Kraken" 
    And I take a screenshot on "PA001"
    And I click on pubish page link
    And I take a screenshot on "PA001"
    And I click on publish page button
    And I take a screenshot on "PA001"
    And I should see text "Published"
    And I take a screenshot on "PA001"
    And I click on pages in the navbar
    And I take a screenshot on "PA001"
    Then I should see text in post list "Titulo pagina usando Kraken"
    And I take a screenshot on "PA001"