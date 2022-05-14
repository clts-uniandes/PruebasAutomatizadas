Feature: Login - Configuracion de usuario invitado - Suspender usuario  -Configuracion de usuario invitado - Verificar que usuario este supendido

  @user1 @web
  Scenario: As a user I want to suspend de user
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA019"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA019"
    And I wait
    Then I expect that url contain "/site"
    When I click on staff in the navbar
    And I take a screenshot on "PA019"
    And I click on one user type Author
    And I take a screenshot on "PA019"
    And I click on config user
    And I take a screenshot on "PA019"
    And I Click on suspend button
    And I take a screenshot on "PA019"
    And I Click on confirm suspend button
    And I take a screenshot on "PA019"
    And I click on staff in the navbar
    And I take a screenshot on "PA019"
    Then  I should see text "Suspended users"
    And I wait for 5 seconds