Feature: Login - crear post  - eliminar post creado

  @user1 @web
  Scenario: As a user I want to create and publish post
    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA011"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA011"
    And I wait
    Then I expect that url contain "/dashboard"
    When I click on post in the navbar
    And I take a screenshot on "PA011"
    And I click on new post
    And I take a screenshot on "PA011"
    And I enter post title "Nuevo Post Eliminar" 
    And I take a screenshot on "PA011"
    And I enter post description "Descripcion del Post Draft"
    And I take a screenshot on "PA011"
    And I click on pubish post link
    And I take a screenshot on "PA011"
    And I click on publish post button
    And I take a screenshot on "PA011"
    Then I should see text "published"
    And I wait for 2 seconds
    When I click on post in the navbar
    And I take a screenshot on "PA011"
    And I found the post has been created "Nuevo Post Eliminar" click
    And I take a screenshot on "PA011"
    And I wait for 2 seconds
    And I click on post settings
    And I take a screenshot on "PA011"
    And I scroll on config post
    And I take a screenshot on "PA011"
    And I click on delete post
    And I take a screenshot on "PA011"
    And I click on confrim delete post
    And I take a screenshot on "PA011"
    And I wait for 5 seconds
    Then I expect that url contain "/posts"
    And I wait for 5 seconds