module.exports = class StaffPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewStaffLink() {
        const newStaffLink = this.driver.$(`//button[@class='gh-btn gh-btn-green']/span[contains(.,'Invite people')]`);
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