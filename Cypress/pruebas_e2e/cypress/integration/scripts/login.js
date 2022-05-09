describe('Probando', () => {
    
    it('paso...', () => {
        cy.visit('http://localhost:2368/ghost')

        cy.get('input[name*="identification"]').type("c.toros@uniandes.edu.co")

        cy.get('input[name*="password"]').type("WhatABeautifulDay")

        cy.get('span').contains('Sign in').click()
        
        cy.get('a[href*="#/site/"]').contains(' View site ')
    })
  })