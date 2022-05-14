// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, password) => {
  
    cy.visit('http://localhost:2368/ghost')

    cy.get('input[name*="identification"]').type(user)

    cy.get('input[name*="password"]').type(password)

    cy.get('span').contains('Sign in').click()
    
})

Cypress.Commands.add('purgePage', (pageName) => {

    cy.get('a[href*="#/pages/"]').contains('Pages').click({force: true})

    cy.get('h3').contains(pageName)

    cy.get('h3').contains(pageName).click({force: true})

    cy.get('button[title*="Settings"]').click()

    cy.get('span').contains('Delete').click({force: true})
    
    cy.get('div[class*="modal-footer"]>button').contains('Delete').click({force: true})

})

Cypress.Commands.add('purgePost', (postName) => {

    cy.get('a[href*="#/posts/"]').contains('Posts').click()

    cy.get('h3').contains(postName).click()

    cy.get('button[title*="Settings"]').click()

    cy.get('span').contains('Delete').click()
    
    cy.get('div[class*="modal-footer"]>button').contains('Delete').click()

})

Cypress.Commands.add('purgeNavItem', () => {

    cy.get('a[href*="#/settings/design"]').contains('Design').click({force: true})
    
    cy.get('form').first().within(() => {
            return cy.get('button.gh-blognav-delete').last().click({force: true})
        })
    
    cy.get('span').contains('Save').click({force: true})
    
})

Cypress.Commands.add('restorePassword', () => {
    
    cy.get('div[class*="gh-nav-bottom"]').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.get('a').contains(' Your Profile ').click()

    cy.get('h2').contains('Pepito Admin')

    cy.get('input[autocomplete*="current-password"]').type("WhatABeautifulDay123")

    cy.get('input[autocomplete*="new-password"]').type("WhatABeautifulDay")

    cy.get('input[id*="user-new-password-verification"]').type("WhatABeautifulDay")

    cy.get('button').contains('Change Password').click()

    cy.get('button').contains('Saved')

})

Cypress.Commands.add('restoreUser', () => {
    
    cy.get('div[class*="gh-nav-bottom"]').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.get('a').contains(' Your Profile ').click()

    cy.get('h2').contains('Pepito Admin')

    cy.get('input[name*="email"]').clear().type("c.toros@uniandes.edu.co",{force: true})

    cy.get('span').contains('Save').click()

    cy.get('button').contains('Saved')

})
