import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA003: Borrar página existente', () => {

    before(() => {
        cy.fixture('loginData.json').as('credenciales')
    })
    
    it('Ejecuto caso', function () {

        const homeAdminPage = new HomeAdminPage();
        const signInAdminPage = new SignInAdminPage();
        const pagesPage = new PagesPage();
        const pageEditorPage = new PageEditorPage();

        // Given he hecho login al sitio de administración Ghost
        signInAdminPage.loginUser(this.credenciales.username1, this.credenciales.password1);
        homeAdminPage.confirmAdminPage()
        
        // When voy a la página de gestión de páginas Ghost y acciono
        homeAdminPage.getPagesPage().click()

        pagesPage.getNewPage().click()

        pageEditorPage.getPageTitle().type("Mi página a borrar")

        pageEditorPage.getPageContent().type("Érase una vez una página a borrar")

        pageEditorPage.getPublishDropdown().click()

        pageEditorPage.getPublishButton().click()
        
        pageEditorPage.getReturnToPagesLink().click()
        
        pagesPage.getPageToEdit('Mi página a borrar').click()

        pageEditorPage.getSettingsButton().click()

        pageEditorPage.getSettingsDeleteButton().click()
        
        pageEditorPage.getModalDeleteButton().click()

        //Then debe regresar a la página de Ghost pages
        pagesPage.getUrl().should('include', '/ghost/#/pages')
        
    })

    after(() => {
      //nada que limpiar
    })
})