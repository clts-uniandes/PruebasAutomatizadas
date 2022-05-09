module.exports =  class PageEditorPage {

    constructor(driver) {
        this.driver = driver;
    }

    get eleTitle() {
        const title = this.driver.$("textarea[placeholder='Page Title']");
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

    get elePagesLink() {
        const postsLink = this.driver.$("text='Pages'");
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
    get eleUpdateLink() {
        const publishLink = this.driver.$("//span[text()='Update']");
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

    get eleScheduleRadioBtn(){
        const schedulePublishBtn = this.driver.$("//div[text()='Schedule it for later']");
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


    get eleViewPage() {
        const viewPost = this.page.$("View Page");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
    get eleConfigPage() {
        const viewPost = this.driver.$("//button[@class='post-settings']");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
    get eleDetelePage() {
        const viewPost = this.driver.$("//span[contains(., 'Delete page')]");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
    get eleDeteleConfirmPage() {
        const viewPost = this.driver.$("//button[@class='gh-btn gh-btn-red gh-btn-icon ember-view']");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
}