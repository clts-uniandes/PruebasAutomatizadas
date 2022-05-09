describe('Probando', () => {

    beforeEach(() => {
        cy.login();
    })
    
    it('paso...', () => {

        

        //cy.visit('http://localhost:2368/ghost')

        //cy.get('input[name*="identification"]').type("c.toros@uniandes.edu.co")

        //cy.get('input[name*="password"]').type("WhatABeautifulDay")

        //cy.get('input[placeholder*="Eg. John H. Watson"]').type("Pepito Admin")

        //cy.get('input[name*="email"][placeholder*="Eg. john@example.com"]').type("c.toros@uniandes.edu.co")

        

        //cy.get('span').contains('Last step: Invite staff users ').click()

        //cy.get('textarea[name*="users"]').type("one user then another")

        //cy.get('input[name*="password"]').type("WhatABeautifulDay")

        //cy.get('span').contains('Sign in').click()

        //cy.get('button').contains('I\'ll do this later, take me to my site!').click()

        cy.get('a[href*="#/settings/design"]').contains('Design').click()

        cy.get('input[placeholder*="Label"][1]').type("Mi página a borrar")

        cy.get('span').contains(/^http:\/\/localhost:2368\/$/).type("pagina/")
        
        //cy.get('span').contains('Create a new page').click()

        cy.get('span').contains('New page').click()

        cy.get('textarea[placeholder*="Page Title"]').type("Mi página a borrar")

        cy.get('div[data-placeholder*="Begin writing your page..."]').type("Érase una vez una página a borrar")

        /////cy.get('button').contains('Add').click()

        /////cy.get('span').contains('Save').click()

        

        cy.get('span').contains('Publish').click()

        //diferenciar
        cy.get('span').contains('Publish').click()

        // NO usar, pierde contexto de escenario
        //cy.get('a').contains('View Page').click()

        
        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('h3').contains('Mi página a borrar').click()

        cy.get('button[title*="Settings"]').click()

        cy.get('span').contains('Delete').click()
        
        
        cy.get('div[class*="modal-footer"]>button').contains('Delete').click()

        //cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.url().should('include', '/ghost/#/pages')
        

    })
  })