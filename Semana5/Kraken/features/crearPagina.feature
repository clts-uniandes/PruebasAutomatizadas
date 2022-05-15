Feature: Create Page

  @user1 @web
  
  Scenario: As a user I want to create and publish page
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    When I wait
    Then I expect that url contain "#/site"
    When I click on link having href "#/pages/"
    When I click on link having href "#/editor/page/"
    When I enter "Titulo pagina usando Kraken" into input field having css selector "textarea[placeholder='Page Title']"
    When I enter "Descripcion pagina usando Kraken" into input field having css selector "div.koenig-editor__editor.__mobiledoc-editor"
    When I click on element having css selector "div.gh-publishmenu"
    When I click on element having css selector "button.gh-publishmenu-button"
    Then I should see text "Published"
    When I click on link having href "#/pages/"
    Then I should see text in post list "Titulo pagina usando Kraken"