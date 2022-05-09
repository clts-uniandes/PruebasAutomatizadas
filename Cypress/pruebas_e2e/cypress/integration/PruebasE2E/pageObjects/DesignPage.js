class DesignPage {

    getNewLabel() {
        return cy.xpath('(//form[@id="settings-navigation"]//input[@placeholder="Label"])[last()]')
    }

    getNewLink() {
        return cy.xpath('(//form[@id="settings-navigation"]//input)[last()]')
    }

    getSaveButton() {
        return cy.get('span').contains('Save')
    }

    getPublished() {
        return cy.get('span').contains('Published')
    }
    
}

export default DesignPage;