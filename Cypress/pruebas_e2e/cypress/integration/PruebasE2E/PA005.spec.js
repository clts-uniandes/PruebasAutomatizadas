import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA005: Crear nueva página y enlazar con nuevo elemento navbar', () => {

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

        // Given Tengo una nueva pagina a enlazar
        
        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('span').contains('New page').click()

        cy.get('textarea[placeholder*="Page Title"]').type("NuevaPag")

        cy.get('div[data-placeholder*="Begin writing your page..."]').type("Página a enlazar")

        cy.get('span').contains('Publish').click()

        cy.get('span').contains('Publish').click()

        cy.get('a[href*="#/pages/"]').contains('Pages').click() 

        cy.get('h3').contains('NuevaPag').first()

        // When enlazo la nueva pagina en el navbar del sitio

        cy.get('a[href*="#/settings/design"]').contains('Design').click()

        cy.get('form').first().within(() => {
            return cy.get('input[placeholder*="Label"]').last().type("NuevaPag")
        })

        cy.get('form').first().within(() => {
            return cy.get('input').last().type("nuevaPag")
        })
        
        cy.get('span').contains('Save').click()
        
        cy.get('span').contains('Save')

        // Then puedo navegar a la nueva pagina desde el sitio de contenido

        cy.visit('http://localhost:2368/')

        cy.get('a[href*="http://localhost:2368/nuevaPag/"]').contains('NuevaPag').click()

        cy.get('h1').contains('NuevaPag')
        
    })

    after(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.purgePage('NuevaPag')
        cy.purgeNavItem()
    })

})