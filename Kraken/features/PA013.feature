Feature: Login - crear post  - eliminar post creado

  @user1 @web
  Scenario: As a user I want to create and publish post
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "Nuevo Post Draft" 
    And I enter post description "Descripcion del Post Draft"
    And I wait for 2 seconds
    And I click on post in the navbar
    And I wait for 2 seconds
    And I found the post has been created "Nuevo Post Draft" click
    And I wait for 2 seconds
    And I click on post settings
    And I scroll on config post
    And I click on delete post
    And I click on confrim delete post
    And I wait for 5 seconds
    Then I expect that url contain "/posts"
    And I wait for 5 seconds