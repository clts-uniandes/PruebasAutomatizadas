module.exports = class TagsPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewTagLink() {
        const newTagLink = this.driver.$(`a[href="#/tags/new/"]`);
        if(newTagLink != null) {
            return newTagLink;
        } else {
            throw new Error("No newTagLink element");
        }
    }

    get eleReturnTagLink() {
        const returnTagLink = this.driver.$(`a[href="#/tags/"]`);
        if(returnTagLink != null) {
            return returnTagLink;
        } else {
            throw new Error("No newTagLink element");
        }
    }

    get eleTagName(){
        const tagName = this.driver.$('#tag-name');
        if(tagName != null){
            return tagName;
        }else {
            throw new Error("No tagName element");
        }
    }

    get eleTagColor(){
        const tagColor = this.driver.$('input[placeholder="15171A"]');
        if(tagColor != null){
            return tagColor;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleTagDescription(){
        const tagDescription = this.driver.$('#tag-description');
        if(tagDescription != null){
            return tagDescription;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleTagDescription(){
        const tagDescription = this.driver.$('#tag-description');
        if(tagDescription != null){
            return tagDescription;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleSavenBtn() {
        const saveBtn = this.driver.$("//span[text()='Save']");
        if(saveBtn != null) {
            return saveBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }

    get eleDeleteTagBtn() {
        const deleteBtn = this.driver.$("//span[text()='Delete tag']");
        if(deleteBtn != null) {
            return deleteBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }

    get eleDeleteBtn() {
        const deleteBtn = this.driver.$("//span[text()='Delete']");
        if(deleteBtn != null) {
            return deleteBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }
    listPages(text){
        const listPages = this.driver.$(`//li[@class='gh-list-row gh-tags-list-item ember-view']/a/h3[@class='gh-tag-list-name'][contains(., '${text}')]`);
        console.log(listPages)
        if(listPages != null) {
            return listPages;
        } else {
            throw new Error("No listPages element");
        }
    }



}