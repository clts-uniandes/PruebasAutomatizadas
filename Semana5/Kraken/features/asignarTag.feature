Feature: Assign Tag to Post

  @user1 @web
  Scenario: As a user I want to assign a tag to a post
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on posts in the navbar
    And I wait for 2 seconds
    Then I expect that url contain "#/posts"
    When I click on new post
    And I wait for 2 seconds
    Then I expect that url contain "#/editor/post"
    When I enter post title "Test asignar tag a post" 
    And I wait for 2 seconds
    And I begin writing post description "test description"
    And I wait for 2 seconds
    And I click on post settings
    And I select post tag "Getting Started"
    And I click on post tag element
    And I wait for 2 seconds
    When I click on close post settings button     
    When I click on pubish post link
    And I wait for 2 seconds
    And I click on publish post button
    And I click on post settings
    And I click on view post 
    And I wait for 3 seconds
    Then I should see text "Getting Started"
  