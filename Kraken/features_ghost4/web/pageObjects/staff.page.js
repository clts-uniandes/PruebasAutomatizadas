module.exports = class StaffPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewStaffLink() {
        const newStaffLink = this.driver.$(`//button[@class='gh-btn gh-btn-primary']/span[contains(.,'Invite people')]`);
        if(newStaffLink != null) {
            return newStaffLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get eleOnePageLink() {
        const newPostLink = this.driver.$(`//div[@class='apps-grid-cell tooltip-centered']/a`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get elementInputEmail() {
        const newPostLink = this.driver.$(`//input[@id='new-user-email']`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get elementBtnSend() {
        const newPostLink = this.driver.$(`//span[contains(text(), 'Send invitation now')]`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get elementErrorInvite() {
        const newPostLink = this.driver.$(`//div[@class='gh-alert-content']`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get elementRevokeBtn() {
        const staffLink = this.driver.$(`a[href="#revoke"]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    }   
    get elementAuthorBtn() {
        const staffLink = this.driver.$(`//div[@class='apps-grid-cell tooltip-centered']//div[@class='apps-configured']//span[contains(text(), 'Contributor')]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    } 
    get elementSuspendedBtn() {
        const staffLink = this.driver.$(`//div[@class='apps-grid-cell tooltip-centered']//div[@class='apps-configured']//span[contains(text(), 'Suspended')]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    } 
    listPages(text){
        const listPages = this.driver.$(`//li[@class='gh-list-row gh-posts-list-item']/a/h3[@class='gh-content-entry-title'][contains(., '${text}')]`);
        console.log(listPages)
        if(listPages != null) {
            return listPages;
        } else {
            throw new Error("No listPages element");
        }
    }
}