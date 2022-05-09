import ContentMainPage from "./pageObjects/ContentMainPage";
import ContentNavPagePage from "./pageObjects/ContentNavPagePage";
import DesignPage from "./pageObjects/DesignPage";
import HomeAdminPage from "./pageObjects/HomeAdminPage";
import PageEditorPage from "./pageObjects/PageEditorPage";
import PagesPage from "./pageObjects/PagesPage";
import SignInAdminPage from "./pageObjects/SignInAdminPage";

describe('PA020: Quitar suspensión usuario colaborador', () => {

    before(() => {
        cy.fixture('loginData.json').as('credenciales')
    })
    
    it('Ejecuto caso', function () {

        // Given He hecho login al sitio de administración Ghost
        
        const homeAdminPage = new HomeAdminPage()
        const signInAdminPage = new SignInAdminPage()
        const pagesPage = new PagesPage()
        const pageEditorPage = new PageEditorPage()
        const designPage = new DesignPage()
        const contentMainPage = new ContentMainPage()
        const contentNavPagePage = new ContentNavPagePage()

        signInAdminPage.loginUser(this.credenciales.username1, this.credenciales.password1)
        homeAdminPage.confirmAdminPage()

        //Given tengo un usuario suspendido en el sitio

        cy.get('a[href*="#/staff/"]').contains('Staff').click()
        
        cy.get('h2').contains('Staff users')

        cy.xpath('//span[text()="Active users"]/following-sibling::div//h3[text()="Ghost"]')

        cy.get('h3').contains('Ghost').click()

        cy.get('span').contains('User Settings').click()

        cy.get('button').contains(' Suspend User ').click()

        cy.get('button').contains('Suspend').click()

        cy.get('a[href*="#/staff/"]').contains('Staff').click()

        cy.get('a[href*="#/staff/ghost"]').contains('Suspended')

        cy.get('h3').contains('Ghost').click()

        cy.get('span').contains('Suspended')

        //When Decida quitar la suspensión al usuario

        cy.get('a[href*="#/staff/"]').contains('Staff').click()
        
        cy.xpath('//span[text()="Suspended users"]/following-sibling::div//h3[text()="Ghost"]')

        cy.get('h3').contains('Ghost').click()

        cy.get('span').contains('User Settings').click()

        cy.get('button').contains(' Un-suspend User ').click()

        cy.get('button').contains('Un-suspend').click()

        cy.get('button').contains('Saved')

        //Then El usuario no estará suspendido

        cy.get('a[href*="#/staff/"]').contains('Staff').click()
        
        cy.get('h2').contains('Staff users')

        cy.xpath('//span[text()="Active users"]/following-sibling::div//h3[text()="Ghost"]')
        
    })

    after(() => {
        //nada que limpiar
    })
    
  })