Feature: Crear tag y adicionarlo en post de Ghost

@user1 @web

Scenario: Tag en Ghost

    Given I navigate to page "<LOGIN_URL>"
    And I take a screenshot on "PA012"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I take a screenshot on "PA012"
    And I wait
    Then I expect that url contain "/dashboard"
    When I click on post in the navbar
    And I take a screenshot on "PA012"
    And I click on new post
    And I take a screenshot on "PA012"
    And I enter post title "Nuevo Post Draft 1" 
    And I take a screenshot on "PA012"
    And I enter post description "Descripcion del Post Draft 1"
    And I take a screenshot on "PA012"
    And I click on pubish post link
    And I take a screenshot on "PA012"
    And I click on publish post button
    And I take a screenshot on "PA012"
    Then I should see text "published"
    And I wait for 2 seconds
    When I click on post in the navbar
    And I take a screenshot on "PA012"
    And I found the post has been created "Nuevo Post Draft 1" click
    And I take a screenshot on "PA012"
    And I click on update post link
    And I take a screenshot on "PA012"
    And I click on unpublish post option
    And I take a screenshot on "PA012"
    And I click on publish post button
    And I take a screenshot on "PA012"
    Then I should see text "saved"
    When I click on post in the navbar
    And I take a screenshot on "PA012"
    When I click on pages in the navbar
    And I take a screenshot on "PA012"
    And I click on one page
    And I take a screenshot on "PA012"
    And I enter page title "Pagina Editada" 
    And I take a screenshot on "PA012"
    And I begin writing page description "Pagina con publicacion con caracteres especiales editada"
    And I take a screenshot on "PA012"
    And I click on update page link
    And I take a screenshot on "PA012"
    And I click on publish page button
    And I take a screenshot on "PA012"
    And I wait for 2 seconds
    Then I should see text "Published"
    When I click on pages in the navbar
    And I take a screenshot on "PA012"
    Then I found the page has been created "Pagina Editada"
    And I wait for 10 seconds