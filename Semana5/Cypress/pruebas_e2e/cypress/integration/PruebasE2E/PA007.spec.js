import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA007: Modificar titulo de página y verificar enlace antiguo no opere', () => {

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

        // Given he hecho login al sitio de administración Ghost

        signInAdminPage.loginUser(this.credenciales.username1, this.credenciales.password1)
        homeAdminPage.confirmAdminPage()

        //Given Tengo una página a modificar
        
        homeAdminPage.getPagesPage().click()

        pagesPage.getNewPage().click()

        pageEditorPage.getPageTitle().type("Paginaamodificar")

        pageEditorPage.getPageContent().type("Érase una vez una página a modificar")

        pageEditorPage.getPublishDropdown().click()

        pageEditorPage.getPublishButton().click()

        pageEditorPage.getReturnToPagesLink().click()
        
        pagesPage.getPageToEdit('Paginaamodificar')

        homeAdminPage.getDesignPage().click()

        designPage.getNewLabel().type("Paginaamodificar")

        designPage.getNewLink().type("paginaamodificar")
        
        designPage.getSaveButton().click()
        
        designPage.getPublished()

        //When modifico el nombre de la pagina
        
        homeAdminPage.getPagesPage().click()

        pagesPage.getPageToEdit('Paginaamodificar').click()

        pageEditorPage.getPageTitle().clear().type("TituloRoto")

        pageEditorPage.getUpdateDropdown().click()

        pageEditorPage.getUpdateButton().click()

        pageEditorPage.getReturnToPagesLink().click()

        // Then navego al contenido e interactuo con el item del navbar asociado

        cy.visit('http://localhost:2368/')

        contentMainPage.getNavPageLink('paginaamodificar','Paginaamodificar').click()

        // Then se deber recibir una pagina tipo 404 Page not found
        contentNavPagePage.getPage404()
        contentNavPagePage.getPageNotFound()

    })

    after(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(2000)
        cy.purgeNavItem()
        cy.purgePage('TituloRoto')
    })

})