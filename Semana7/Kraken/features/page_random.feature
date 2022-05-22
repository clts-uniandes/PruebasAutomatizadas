Feature: Pruebas aleatoreas en creacion de Pages
  @user1 @web
  Scenario: 1. Crear page sin titulo
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#vacio"
    And I begin writing page description "#paragraph"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user2 @web
  Scenario: 2. Crear page sin contenido
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#words-5"
    And I begin writing page description "#vacio"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user3 @web
  Scenario: 3. Crear page con titulo numerico y descripcion
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#numbers-12"
    And I begin writing page description "#paragraph"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user4 @web
  Scenario: 4. Crear page con titulo caracteres especiales
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#chars-100"
    And I begin writing page description "#paragraph"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user5 @web
  Scenario: 5. Crear page con titulo con 255 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#chars-255"
    And I begin writing page description "#paragraph"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user6 @web
  Scenario: 6. Crear page con titulo con 256 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#chars-256"
    And I begin writing page description "#paragraph"
    Then I can't click on the publish link

  @user7 @web
  Scenario: 7. Crear page con titulo con 254 caracteres
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#chars-254"
    And I begin writing page description "#paragraph"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user8 @web
  Scenario: 8. Crear page con 20 parrafos de descripcion
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#words-5"
    And I begin writing page description "#paragraph-20"
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"

  @user9 @web
  Scenario: 9. Crear page con nuevo tag
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#words-5"
    And I begin writing page description "#paragraph-3"
    And I click on post settings
    And I select post tag "#words"
    And I click on post tag element
    And I click on close post settings button
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"
    
  @user10 @web
  Scenario: 10. Crear page con nuevo tag numerico
    Given I navigate to page "<LOGIN_URL>"
    When I login with "<USERNAME>" and "<PASSWORD>"
    And I wait
    Then I expect that url contain "/site"
    When I click on pages in the navbar
    And I click on new page
    And I enter page title "#words-5"
    And I begin writing page description "#paragraph-3"
    And I click on post settings
    And I select post tag "#numbers-7"
    And I click on post tag element
    And I click on close post settings button
    And I click on pubish page link
    And I click on publish page button
    Then I should see text "published"


