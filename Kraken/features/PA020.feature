Feature: Login - Configuracion de usuario invitado - Suspender usuario  -Configuracion de usuario invitado - Verificar que usuario este supendido

  @user1 @web
  Scenario: As a user I want to suspend de user
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on staff in the navbar
    And I click on one user type Suspended
    And I click on config user
    And I Click on un-suspend button
    And I Click on confirm un-suspend button
    Then  I should see text "Saved"
    And I click on staff in the navbar
    And I wait for 5 seconds