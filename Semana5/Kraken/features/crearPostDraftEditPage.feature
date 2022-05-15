Feature: Crear tag y adicionarlo en post de Ghost

@user1 @web

Scenario: Tag en Ghost

    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "Nuevo Post Draft" 
    And I enter post description "Descripcion del Post Draft"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"
    And I wait for 2 seconds
    When I click on post in the navbar
    And I found the post has been created "Nuevo Post Draft" click
    And I click on update post link
    And I click on unpublish post option
    And I click on publish post button
    Then I should see text "saved"
    When I click on post in the navbar
    When I click on pages in the navbar
    And I click on one page
    And I enter page title "Pagina Editada" 
    And I begin writing page description "Pagina con publicacion con caracteres especiales editada"
    And I click on update page link
    And I click on publish page button
    And I wait for 2 seconds
    Then I should see text "Published"
    When I click on pages in the navbar
    Then I found the page has been created "Pagina Editada"
    And I wait for 10 seconds