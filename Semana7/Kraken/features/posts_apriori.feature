Feature: Pruebas aleatoreas en creacion de Post

  @user1 @web
  Scenario: 1. Crear post sin titulo
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$vacio"
    And I enter post description "$paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user2 @web
  Scenario: 2. Crear post sin contenido
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$words"
    And I enter post description "$vacio"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user3 @web
  Scenario: 3. Crear post con titulo numerico y descripcion
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$numbers"
    And I enter post description "$paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user4 @web
  Scenario: 4. Crear post con titulo caracteres especiales
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$chars"
    And I enter post description "$paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user8 @web
  Scenario: 8. Crear post con caracteres raros en descripcion
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$words"
    And I enter post description "$chars"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user9 @web
  Scenario: 9. Crear post con nuevo tag
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$words"
    And I enter post description "$paragraph"
    And I click on post settings
    And I select post tag "$words"
    And I click on post tag element
    And I click on close post settings button
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user10 @web
  Scenario: 10. Crear post con nuevo tag numerico
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "$words"
    And I enter post description "$paragraph"
    And I click on post settings
    And I select post tag "$numbers"
    And I click on post tag element
    And I click on close post settings button
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"