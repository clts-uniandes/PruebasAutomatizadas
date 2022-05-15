Feature: Login - enviar invitacion usuario staft - ver mensaje de error

  @user1 @web
  Scenario: As a user I want to change email
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA018"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA018"
    And I wait
    Then I expect that url contain "#/site"
    When I click on staff in the navbar
    And I take a screenshot on "PA018"
    And I click on new user
    And I take a screenshot on "PA018"
    And I enter email new user "invite@revoke.com"
    And I take a screenshot on "PA018"
    And I click on Send invitation now
    And I take a screenshot on "PA018"
    And I wait for 2 seconds
    Then I should see error send email
    And I take a screenshot on "PA018"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2369/ghost/#/site"
    And I take a screenshot on "PA018"
    When I click on staff in the navbar
    And I take a screenshot on "PA018"
    And I click on revoke the invite
    And I take a screenshot on "PA018"
    And I wait for 2 seconds
    Then I should see text "Invitation revoked"
    And I wait for 5 seconds