describe('Probando', () => {

    beforeEach(() => {
        cy.login();
    })
    
    it('paso...', () => {
        
        //Given

        
        
        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('span').contains('New page').click()

        cy.get('textarea[placeholder*="Page Title"]').type("Titulo1")

        cy.get('div[data-placeholder*="Begin writing your page..."]').type("Página a desasociar")

        cy.get('span').contains('Publish').click()

        //diferenciar
        cy.get('span').contains('Publish').click()

        //agregar verificacion pagina
        cy.get('h3').contains('Titulo1').first()

        cy.get('a[href*="#/settings/design"]').contains('Design').click()

        cy.get('form').first().within(() => {
            return cy.get('input[placeholder*="Label"]').last().type("Titulo1")
        });

        cy.get('form').first().within(() => {
            return cy.get('input').last().type("titulo1")
        });
        
        cy.get('span').contains('Save').click()
        
        //verifica
        cy.get('span').contains('Save')

        //cy.get('span').contains(/^http:\/\/localhost:2368\/$/).type("pagina/")
        
        //cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')

        //When
        
        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.get('h3').contains('Titulo1').click()

        cy.get('textarea[placeholder*="Page Title"]').clear().type("TituloRoto")

        cy.get('span').contains('Update').click()

        cy.get('button').contains('Update').click()

        cy.get('a[href*="#/pages/"]').contains('Pages').click()

        cy.visit('http://localhost:2368/')

        cy.get('a[href*="http://localhost:2368/titulo1/"]').contains('Titulo1').click()
        
        cy.intercept('GET', '/titulo1*', {
            statusCode: 404
          })


    })
  })