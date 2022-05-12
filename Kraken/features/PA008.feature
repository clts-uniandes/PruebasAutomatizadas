Feature: Crear tag y adicionarlo en post de Ghost

@user1 @web

Scenario: Tag en Ghost

    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "#/site"
    When I click on tags in the navbar
    And I click on new tag
    And I enter tag title "Nuevo Tag" 
    And I enter tag description "Descripcion del Tag"
    And I click on save page link
    When I click on tags in the navbar
    Then I found the tag has been created "Nuevo Tag"
    When I click on post in the navbar
    And I click on one post
    And I click on config post
    And I enter tag on post "Nuevo Tag"
    And I click on close config post
    And I click on update post link
    And I click on publish page button
    Then I should see text "Updated"
    