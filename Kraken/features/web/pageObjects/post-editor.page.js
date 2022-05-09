
module.exports =  class PostEditorPage {

    constructor(driver) {
        this.driver = driver;
    }

    get eleTitle() {
        const title = this.driver.$("textarea[placeholder='Post Title']");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }

    get eleDescription() {
        const description = this.driver.$("div[data-kg='editor']");
        if(description != null) {
            return description;
        } else {
            throw new Error("No description element");
        }
    }

    get elePostsLink() {
        const postsLink = this.driver.$("text='Posts'");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    get elePublishLink() {
        const publishLink = this.driver.$("//span[text()='Publish']");
        if(publishLink != null) {
            return publishLink;
        } else {
            throw new Error("No publishLink element");
        }
    }

    get elePublishBtn() {
        const publishButton = this.driver.$("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    get eleUpdateLink() {
        const publishButton = this.driver.$("//span[text()='Update']");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    get eleScheduleBtn() {
        const publishButton = this.driver.$("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    get eleScheduleRadioBtn(){
        const schedulePublishBtn = this.driver.$("gh-publishmenu-radio-button");
        if(schedulePublishBtn != null){
            return schedulePublishBtn;
        }else{
            throw new Error("No SchedulePublishButton element");
        }
    }

    get eleScheduleDateField(){
        const scheduleDateField = this.driver.$("input[placeholder='YYYY-MM-DD']");
        if(scheduleDateField !== null){
            return scheduleDateField;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }

    get elePostSettings(){
        const postSettings = this.driver.$("button.post-settings");
        if(postSettings !== null){
            return postSettings;
        }else{
            throw new Error("No postSettings element");
        }
    }
    get eleConfig(){
        const scheduleDateField = this.driver.$("button.post-settings");
        if(scheduleDateField !== null){
            return scheduleDateField;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }
    get eleCloseConfig(){
        const closeBtn = this.driver.$("//button[@class='close settings-menu-header-action']");
        if(closeBtn !== null){
            return closeBtn;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }
    get eleTag(){
        const scheduleDateField = this.driver.$("#tag-input");
        if(scheduleDateField !== null){
            return scheduleDateField;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }
    get eleSelectedTag(){
        const selectedTag = this.driver.$("//li[@class='ember-power-select-option'][@data-option-index='1']")
        if(selectedTag !== null){
            return selectedTag;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }
    
    get eleUnpublishOption() {
        const unpublishOption = this.driver.$("//div[@class='gh-publishmenu-radio-label'][contains(., 'Unpublished')]");
        if(unpublishOption != null) {
            return unpublishOption;
        } else {
            throw new Error("No publishButton element");
        }
    }

    get elePostTagsMenu(){
        const postTagsMenu = this.driver.$("input[type='search']");
        if(postTagsMenu !== null){
            return postTagsMenu;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }

    get eleTagElement() {
        const tagElement = this.driver.$(`//li[text()='Getting Started']`);
        if(tagElement != null) {
            return tagElement;
        } else {
            throw new Error("No publishLink element");
        }
    }

    get eleClosePostSettings(){
        const closePostSettings = this.driver.$("button.close");
        if(closePostSettings !== null){
            return closePostSettings;
        }else{
            throw new Error("No closePostSettings element");
        }

    }

    
    get eleViewPost() {
        const viewPost = this.driver.$("a.post-view-link");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
}