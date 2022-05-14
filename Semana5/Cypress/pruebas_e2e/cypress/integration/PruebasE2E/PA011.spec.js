import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA011: Borrar post recien creado', () => {

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

        // When creo un nuevo post para el sitio

        cy.get('a[href*="#/posts/"]').contains('Posts').click()
        
        cy.get('span').contains('New post').click()

        cy.get('textarea[placeholder*="Post Title"]').type("Mi post a borrar")

        cy.get('div[data-placeholder*="Begin writing your post..."]').type("Érase una vez un post a borrar")

        cy.get('span').contains('Publish').click()

        cy.get('span').contains('Publish').click()

        cy.visit('http://localhost:2368/')

        // When el post es publico

        cy.get('h2').contains('Mi post a borrar').click()

        cy.get('h1').contains('Mi post a borrar').click()

        // When borro el post desde administracion

        cy.visit('http://localhost:2368/ghost')

        cy.get('a[href*="#/posts/"]').contains('Posts').click()

        cy.get('h3').contains('Mi post a borrar').click()

        cy.get('button[title*="Settings"]').click()

        cy.get('span').contains('Delete').click()
        
        cy.get('div[class*="modal-footer"]>button').contains('Delete').click()

        // Then retorno a la pagina de posts y el post no es visible

        cy.url().should('include', '/ghost/#/posts')
        
    })

    after(() => {
        //nada que limpiar
    })

})