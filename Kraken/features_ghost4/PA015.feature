Feature: Login, Cambiar contraseña de usuario, probar login y dejar como estaba

  @user1 @web
  Scenario: As a user I want to change password
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA015"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA015"
    And I wait
    Then I expect that url contain "/dashboard"
    When I click on staff in the navbar
    And I take a screenshot on "PA015"
    And I click on one user
    And I take a screenshot on "PA015"
    And I change password old password user "<PASSWORD>" to "Admin12345"
    And I take a screenshot on "PA015"
    And I click on change password button
    And I take a screenshot on "PA015"
    Then I should see text "Password updated"
    And I wait for 5 seconds
    When I click on config user link
    And I take a screenshot on "PA015"
    And I wait for 2 seconds
    And I click on logout link
    And I take a screenshot on "PA015"
    And I login with new password "<USERNAME>" and "Admin12345"
    And I take a screenshot on "PA015"
    And I wait
    Then I expect that url contain "/dashboard"
    When I click on staff in the navbar
    And I take a screenshot on "PA015"
    And I click on one user
    And I take a screenshot on "PA015"
    And I change password original password user "Admin12345" to "<PASSWORD>"
    And I take a screenshot on "PA015"
    And I click on change password button
    And I take a screenshot on "PA015"
    Then I should see text "Password updated"
    And I wait for 10 seconds