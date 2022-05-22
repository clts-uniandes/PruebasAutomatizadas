Feature: Pruebas aleatoreas en creacion de Post

  @user1 @web
  Scenario: 1. Crear post sin titulo
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "#vacio"
    And I enter post description "#paragraph"
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
    And I enter post title "#words-5"
    And I enter post description "#vacio"
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
    And I enter post title "#numbers-12"
    And I enter post description "#paragraph"
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
    And I enter post title "#chars-100"
    And I enter post description "#paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user5 @web
  Scenario: 5. Crear post con titulo con 255 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "#chars-255"
    And I enter post description "#paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user6 @web
  Scenario: 6. Crear post con titulo con 256 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "#chars-256"
    And I enter post description "#paragraph"
    Then I can't click on the publish link

  @user7 @web
  Scenario: 7. Crear post con titulo con 254 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "#chars-254"
    And I enter post description "#paragraph"
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"

  @user8 @web
  Scenario: 8. Crear post con 15 parrafos de descripcion
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on post in the navbar
    And I click on new post
    And I enter post title "#words-7"
    And I enter post description "#paragraph-15"
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
    And I enter post title "#words-7"
    And I enter post description "#paragraph-2"
    And I click on post settings
    And I select post tag "#words"
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
    And I enter post title "#words-2"
    And I enter post description "#paragraph-3"
    And I click on post settings
    And I select post tag "#numbers-8"
    And I click on post tag element
    And I click on close post settings button
    And I click on pubish post link
    And I click on publish post button
    Then I should see text "published"