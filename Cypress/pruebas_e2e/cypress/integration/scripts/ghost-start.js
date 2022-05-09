describe('Pantalla instalación fresca Ghost', () => {
    
    it('paso...', () => {
        cy.visit('http://localhost:2368/ghost')

        cy.contains('Create your account').click()

        cy.get('input[name*="blog-title"]').type("SitioPrueba")

        cy.get('input[placeholder*="Eg. John H. Watson"]').type("Pepito Admin")

        cy.get('input[name*="email"][placeholder*="Eg. john@example.com"]').type("c.toros@uniandes.edu.co")

        cy.get('input[name*="password"]').type("WhatABeautifulDay")

        cy.get('span').contains('Last step: Invite staff users ').click()

        //cy.get('textarea[name*="users"]').type("one user then another")

        cy.get('input[name*="password"]').type("WhatABeautifulDay")

        //cy.get('span').contains('Invite some users').click()

        cy.get('button').contains('I\'ll do this later, take me to my site!').click()
    })
  })