Feature: Edit Tag 

  @user1 @web
  Scenario: As a user I want to create and edit a Tag
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on tags in the navbar
    And I wait for 2 seconds
    Then I expect that url contain "#/tags"
    When I click on new tag
    Then I expect that url contain "#/tags/new"
    And I wait for 2 seconds
    When I enter tag name "Test"
    And I enter tag color "000080"
    And I enter tag description "test"
    And I click on save tag
    And I return to tags list 
    Then I expect tag created with name "Test"

    