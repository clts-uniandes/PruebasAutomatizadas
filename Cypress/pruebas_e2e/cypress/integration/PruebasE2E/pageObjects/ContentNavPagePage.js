class ContentNavPagePage {

    getPageLoadNotFound() {
        return cy.intercept('GET', '/titulo1*', {
            statusCode: 404
          })
    }

    getPage404() {
        return cy.get('h1').contains('404')
    }

    getPageNotFound() {
        return cy.get('p').contains('Page not found')
    }
    
}

export default ContentNavPagePage;