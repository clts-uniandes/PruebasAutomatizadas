module.exports = class PagesPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewPageLink() {
        const newPostLink = this.driver.$(`a[href="#/editor/page/"]`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get eleOnePageLink() {
        const newPostLink = this.driver.$(`//a[@class='ember-view permalink gh-list-data gh-post-list-title']`);
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