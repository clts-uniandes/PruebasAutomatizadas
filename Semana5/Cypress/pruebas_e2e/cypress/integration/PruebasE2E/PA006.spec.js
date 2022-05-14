import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA006: Cambiar titulo de pagina y enlace asociado en navbar y verificar que se pueda acceder aun a la pagina editada', () => {

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

        // Given Tenga una pagina ya enlazada en navbar del sitio
        
        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('span').contains('New page').click()

        cy.get('textarea[placeholder*="Page Title"]').type("PaginaAEditar")

        cy.get('div[data-placeholder*="Begin writing your page..."]').type("Página a editar")

        cy.get('span').contains('Publish').click()

        cy.get('span').contains('Publish').click()

        cy.get('a[href*="#/pages/"]').contains('Pages').click() 

        cy.get('h3').contains('PaginaAEditar').first()

        cy.get('a[href*="#/settings/design"]').contains('Design').click()

        cy.get('form').first().within(() => {
            return cy.get('input[placeholder*="Label"]').last().type("PaginaAEditar")
        })

        cy.get('form').first().within(() => {
            return cy.get('input').last().type("paginaaeditar")
        })
        
        cy.get('span').contains('Save').click()
        
        cy.get('span').contains('Save')

        cy.visit('http://localhost:2368/')

        cy.get('a[href*="http://localhost:2368/paginaaeditar/"]').contains('PaginaAEditar').click()

        cy.get('h1').contains('PaginaAEditar')

        //when Edite el titulo de la pagina

        cy.visit('http://localhost:2368/ghost')

        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('h3').contains('PaginaAEditar').click()

        cy.get('textarea[placeholder*="Page Title"]').clear().type("PaginaEditada")

        cy.get('span').contains('Update').click()

        cy.get('button').contains('Update').click()

        cy.get('a[href*="#/pages/"]').contains('Pages').click()
        
        //When Edite el enlance en navbar asociado para que haya correspondencia
        
        cy.get('a[href*="#/settings/design"]').contains('Design').click()

        cy.xpath('(//form[@id="settings-navigation"]//input[@placeholder="Label"])[last()-1]').clear().type("PaginaEditada",{force: true})

        cy.xpath('((//form[@id="settings-navigation"]//div[@class="gh-blognav-line"])[last()-1]//input)[2]').clear().type("http://localhost:2368/paginaeditada",{force: true})
        
        cy.get('span').contains('Save').click()

        // Then Al visitar el sitio de contenido pueda acceder al mismo contenido pero con el nuevo enlace

        cy.visit('http://localhost:2368/')

        cy.get('a[href*="http://localhost:2368/paginaeditada/"]').contains('PaginaEditada').click()

        cy.get('h1').contains('PaginaEditada')

    })

    after(() => {
        cy.visit('http://localhost:2368/ghost/#/site')
        cy.wait(2000)
        cy.purgeNavItem()
        cy.purgePage('PaginaEditada')
    })
    
})