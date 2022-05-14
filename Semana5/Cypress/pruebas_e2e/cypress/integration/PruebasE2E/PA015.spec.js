import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA015: Verificar cambio de contraseña exitoso', () => {

    before(() => {
        cy.fixture('loginData.json').as('credenciales')
    })
    
    it('Ejecuto caso', function () {
                
        const homeAdminPage = new HomeAdminPage()
        const signInAdminPage = new SignInAdminPage()
        const pagesPage = new PagesPage()
        const pageEditorPage = new PageEditorPage()
        const designPage = new DesignPage()
        const contentMainPage = new ContentMainPage()
        const contentNavPagePage = new ContentNavPagePage()

        // Given He hecho login al sitio de administración Ghost

        signInAdminPage.loginUser(this.credenciales.username1, this.credenciales.password1)
        homeAdminPage.confirmAdminPage()

        //When Voy a la pagina de gestion de la cuenta logueada

        cy.get('div[class*="gh-nav-bottom"]').click()

        /* Desmarcar para continuar prueba, bug encontrado en Ghost
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        */
        cy.get('a').contains(' Your Profile ').click()

        cy.get('h2').contains('Pepito Admin')

        // When cambio la contraseña por una nueva

        cy.get('input[autocomplete*="current-password"]').type("WhatABeautifulDay")

        cy.get('input[autocomplete*="new-password"]').type("WhatABeautifulDay123")

        cy.get('input[id*="user-new-password-verification"]').type("WhatABeautifulDay123")

        // When Guardo los cambios de clave

        cy.get('button').contains('Change Password').click()

        cy.get('button').contains('Saved')

        cy.get('button[class*="gh-notification-close"]').click()

        // When hago logout del sitio

        cy.get('div[role*="button"]').first().click()

        cy.get('a').contains(' Sign Out ').click()

        // When trate de hacer login con las credenciales viejas

        cy.login('c.toros@uniandes.edu.co','WhatABeautifulDay');

        // Then El login fracasa

        cy.get('p').contains('Your password is incorrect.')

        // Then El login opera con las nuevas credenciales
        
        cy.login('c.toros@uniandes.edu.co','WhatABeautifulDay123');

        cy.get('a[href*="#/site/"]').contains(' View site ')
        
    })

    after(() => {
        cy.restorePassword()
    })

})