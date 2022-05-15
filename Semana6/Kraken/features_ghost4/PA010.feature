Feature: Login, crear un tag y editarlo 

  @user1 @web
  Scenario: As a user I want to create and edit a Tag
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA010"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA010"
    And I wait
    Then I expect that url contain "#/dashboard"
    When I click on tags in the navbar
    And I take a screenshot on "PA010"
    And I wait for 2 seconds
    Then I expect that url contain "#/tags"
    When I click on new tag
    And I take a screenshot on "PA010"
    Then I expect that url contain "#/tags/new"
    And I wait for 2 seconds
    When I enter tag name "Test"
    And I take a screenshot on "PA010"
    And I enter tag color "000080"
    And I take a screenshot on "PA010"
    And I enter tag description "test"
    And I take a screenshot on "PA010"
    And I click on save tag
    And I take a screenshot on "PA010"
    And I return to tags list 
    And I take a screenshot on "PA010"
    Then I expect tag created with name "Test"

    