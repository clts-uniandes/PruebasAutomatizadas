Feature: Crear tag y adicionarlo en post de Ghost

@user1 @web

Scenario: Tag en Ghost

    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA008"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA008"
    And I wait
    Then I expect that url contain "#/site"
    When I click on tags in the navbar
    And I take a screenshot on "PA008"
    And I click on new tag
    And I take a screenshot on "PA008"
    And I enter tag title "Nuevo Tag" 
    And I take a screenshot on "PA008"
    And I enter tag description "Descripcion del Tag"
    And I take a screenshot on "PA008"
    And I click on save page link
    And I take a screenshot on "PA008"
    When I click on tags in the navbar
    And I take a screenshot on "PA008"
    Then I found the tag has been created "Nuevo Tag"
    When I click on post in the navbar
    And I take a screenshot on "PA008"
    And I click on one post
    And I take a screenshot on "PA008"
    And I click on config post
    And I take a screenshot on "PA008"
    And I enter tag on post "Nuevo Tag"
    And I take a screenshot on "PA008"
    And I click on close config post
    And I take a screenshot on "PA008"
    And I click on update post link
    And I take a screenshot on "PA008"
    And I click on publish page button
    And I take a screenshot on "PA008"
    Then I should see text "Updated"
    