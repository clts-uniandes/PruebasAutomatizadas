class HomeAdminPage {

    confirmAdminPage() {
        return cy.get('a[href*="#/site/"]').contains(' View site ')
    }

    getPagesPage() {
        return cy.get('a[href*="#/pages/"]').contains('Pages')
    }

    getDesignPage() {
        return cy.get('a[href*="#/settings/design"]').contains('Design')
    }

}

export default HomeAdminPage;