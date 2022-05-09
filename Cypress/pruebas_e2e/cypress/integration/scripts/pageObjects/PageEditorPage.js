class PageEditorPage {

    getPageTitle() {
        return cy.get('textarea[placeholder*="Page Title"]')
    }

    getPageContent() {
        return cy.get('div[data-placeholder*="Begin writing your page..."]')
    }

    getPublishDropdown() {
        return cy.get('span').contains('Publish')
    }

    getUpdateDropdown() {
        return cy.get('span').contains('Update')
    }

    getUpdateButton() {
        return cy.get('button').contains('Update')
    }

    getPublishButton() { //TODO, buscar alternativa html más expresiva
        return cy.get('span').contains('Publish')
    }

    getReturnToPagesLink() {
        return cy.get('a[href*="#/pages/"]').contains('Pages')
    }

    getSettingsButton() {
        return cy.get('button[title*="Settings"]')
    }

    getSettingsDeleteButton() {
        return cy.get('span').contains('Delete')
    }

    getModalDeleteButton() {
        return cy.get('div[class*="modal-footer"]>button').contains('Delete')
    }

}

export default PageEditorPage;