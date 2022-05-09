import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA012: Comenzar creación de post pero no publicar, acceder a draft, y luego publicarlo', () => {

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

        cy.get('a[href*="#/posts/"]').contains('Posts').click()

        // When Comienzo a crear un nuevo post
        
        cy.get('span').contains('New post').click()

        cy.get('textarea[placeholder*="Post Title"]').type("Mi post draft")

        /*Desmarcar para continuar prueba, bug encontrado en Ghost
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })*/

        // When decido no publicar el post, pero dejarlo en draft
        cy.get('a[href*="#/posts/"]').first().click()
        cy.get('a[href*="#/posts/"]').first().click()

        // When decido ver los posts en draft

        cy.get('a[href*="#/posts/?type=draft"]').contains('Drafts').click() 

        // When retorno a mi post en draft para continuar su edicion

        cy.get('h3').contains('Mi post draft').click()

        cy.get('div[data-placeholder*="Begin writing your post..."]').type("Érase una vez un post draft")

        cy.get('span').contains('Publish').click()

        // When publico el post en draft

        cy.xpath('//footer[@class="gh-publishmenu-footer"]//button[2]').click()

        // Then debo poder ver el nuevo post en el sitio de contenido

        cy.visit('http://localhost:2368/')

        cy.get('h2').contains('Mi post draft')
        
    })

  after(() => {
    cy.visit('http://localhost:2368/ghost/#/site')
    //cy.wait(5000)
    cy.url().should('include', '/ghost/#/site')
    cy.purgePost('Mi post draft')
    })

})