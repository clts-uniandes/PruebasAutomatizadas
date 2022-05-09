class ContentMainPage {

    getNavPageLink(pageLink, pageName) {
        return cy.get(`a[href*="http://localhost:2368/${pageLink}/"]`).contains(pageName)
    }
    
}

export default ContentMainPage;