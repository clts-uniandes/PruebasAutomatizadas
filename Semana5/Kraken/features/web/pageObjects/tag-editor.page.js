module.exports = class TagsEditorPage {
    
    constructor(driver) {
        this.driver = driver;
    }
    get eleTitle() {
        const title = this.driver.$("#tag-name");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }

    get eleDescription() {
        const description = this.driver.$("#tag-description");
        if(description != null) {
            return description;
        } else {
            throw new Error("No description element");
        }
    }
    get saveBtn() {
        const save = this.driver.$("//button[@class='gh-btn gh-btn-blue gh-btn-icon ember-view']");
        if(save != null) {
            return save;
        } else {
            throw new Error("No description element");
        }
    }
}