module.exports = class DesignPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleInputLabel() {
        const newDesignElement = this.driver.$(`//div[@class='gh-blognav-item ember-view']/div/span[@class='gh-blognav-label ember-view']/input[@class='ember-text-field gh-input ember-view']`);
        if(newDesignElement != null) {
            return newDesignElement;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get eleInputUrl() {
        const newDesignElement = this.driver.$(`//div[@class='gh-blognav-item ember-view']/div/span[@class='gh-blognav-url ember-view']/input[@class='ember-text-field gh-input ember-view']`);
        if(newDesignElement != null) {
            return newDesignElement;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get eleBtnAdd() {
        const newDesignElement = this.driver.$(`//button[@class='gh-blognav-add']`);
        if(newDesignElement != null) {
            return newDesignElement;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    get eleBtnSave() {
        const newDesignElement = this.driver.$(`//span[contains(., 'Save')]`);
        if(newDesignElement != null) {
            return newDesignElement;
        } else {
            throw new Error("No newPostLink element");
        }
    }
}