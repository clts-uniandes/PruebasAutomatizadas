class PagesPage {

    getNewPage() {
        return cy.get('span').contains('New page')
    }

    getPageToEdit(pageName) {
        return cy.get('h3').contains(pageName)
    }
    
    getUrl() {
        return cy.url()
    }

}

export default PagesPage;