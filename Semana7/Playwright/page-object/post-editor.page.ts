import { Page } from "playwright";

export default class PostEditorPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //selectores

    public get eleTitle() {
        const title = this.page.$("//textarea[@placeholder='Post title'] | //textarea[@placeholder='Post Title']");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }

    public get eleContent() {
        const description = this.page.$("div[data-placeholder='Begin writing your post...']");
        if(description != null) {
            return description;
        } else {
            throw new Error("No content element");
        }
    }

    public get elePostsLink() {
        const postsLink = this.page.$("text='Posts'");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    public get eleLeaveButton() {
        const postsLink = this.page.$("//button[@class='gh-btn gh-btn-red']");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    public get elePublishLink() {
        const publishLink = this.page.locator("//span[contains(.,'Publish')]");
        if(publishLink != null) {
            return publishLink;
        } else {
            throw new Error("No publishLink element");
        }
    }

    public get eleSettingButton() {
        const settingButton = this.page.$("//button[@title='Settings']");
        if(settingButton != null) {
            return settingButton;
        } else {
            throw new Error("No SettingButton element");
        }
    }

    public get elePublishBtn() {
        const publishButton = this.page.locator("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    public get eleScheduleBtn() {
        const publishButton = this.page.waitForSelector("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    public get eleViewPost() {
        const viewPost = this.page.$("//span[@class='gh-notification-actions']//a[1]");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }

    public get eleScheduleTime() {
        const scheduleTimeInput = this.page.$("div.gh-date-time-picker-time input");
        if(scheduleTimeInput != null) {
            return scheduleTimeInput;
        } else {
            throw new Error("No scheduleTimeInput element");
        }
    }

    public get eleTagComboBoxInput() {
        const tagComboBox = this.page.$("div.ember-basic-dropdown-trigger--in-place.ember-power-select-multiple-trigger");
        if(tagComboBox != null) {
            return tagComboBox;
        } else {
            throw new Error("No tagComboBox element");
        }
    }

    public get tagList() {
        const tagComboBox = this.page.$$("div ul li");
        if(tagComboBox != null) {
            return tagComboBox;
        } else {
            throw new Error("No tagComboBox element");
        }
    }

    public get eleCloseSetting() {
        const closeSetting = this.page.$("button[aria-label='Close']");
        if(closeSetting != null) {
            return closeSetting;
        } else {
            throw new Error("No closeSetting element");
        }
    }

    public get eleDeletePostButton() {
        const deletePost = this.page.$("button.gh-btn.gh-btn-hover-red.settings-menu-delete-button");
        if(deletePost != null) {
            return deletePost;
        } else {
            throw new Error("No DeletePostButton element");
        }
    }

    public get eleConfirmationDeletePostButton() {
        const confirmationDeletePost = this.page.$("button.gh-btn.gh-btn-red");
        if(confirmationDeletePost != null) {
            return confirmationDeletePost;
        } else {
            throw new Error("No ConfirmationDeletePostButton element");
        }
    }

    public get eleFormSetting() {
        const formSetting = this.page.$("div.settings-menu-container");
        if(formSetting != null) {
            return formSetting;
        } else {
            throw new Error("No FormSetting element");
        }
    }

    public get eleScheduleRadioButton() {
        const scheduleRadioBtn = this.page.locator("//div[text()='Schedule it for later']");
        if (scheduleRadioBtn != null) {
            return scheduleRadioBtn;
        } else {
            throw new Error("No scheduleRadioBtn element");
        }
    }

    public get eleMetaDataSection() {
        const metaDataSection = this.page.locator("//button[b[text()='Meta data']]");
        if(metaDataSection != null) {
            return metaDataSection;
        } else {
            throw new Error("No metaDataSection button");
        }
    }

    public get eleMetaTitle() {
        const metaTitle = this.page.locator("//div[label[text()='Meta title']]/input");
        if(metaTitle != null) {
            return metaTitle;
        } else {
            throw new Error("No metaTitle input");
        }
    }

    public get eleMetaDescription() {
        const metaDescription = this.page.locator("//div[label[text()='Meta description']]/textarea");
        if(metaDescription != null) {
            return metaDescription;
        } else {
            throw new Error("No metaDescription textarea");
        }
    }

    public get eleMetaCanocialUrl() {
        const metaCanonicalUrl = this.page.locator("//div[label[text()='Canonical URL']]/input");
        if(metaCanonicalUrl != null) {
            return metaCanonicalUrl;
        } else {
            throw new Error("No metaCanonicalUrl input");
        }
    }

    public get eleCloseMetaDataSection() {
        const closeMetaDataSection = this.page.locator("//button[span[text()='Back']]");
        if(closeMetaDataSection != null) {
            return closeMetaDataSection;
        } else {
            throw new Error("No closeMetaDataSection button");
        }
    }

    public get eleTwitterSection() {
        const twitterSection = this.page.locator("//button[b[text()='Twitter card']]");
        if(twitterSection != null) {
            return twitterSection;
        } else {
            throw new Error("No metaDataSection button");
        }
    }

    public get eleTwitterTitle() {
        const twitterTitle = this.page.locator("//div[label[text()='Twitter title']]/input");
        if(twitterTitle != null) {
            return twitterTitle;
        } else {
            throw new Error("No twitterTitle input");
        }
    }

    public get eleTwitterDescription() {
        const twitterDescription = this.page.locator("//div[label[text()='Twitter description']]/textarea");
        if(twitterDescription != null) {
            return twitterDescription;
        } else {
            throw new Error("No twitterDescription textarea");
        }
    }

    public get eleCloseTwitterSection() {
        const closeTwitterSection = this.page.locator("//button[span[text()='Back']]");
        if(closeTwitterSection != null) {
            return closeTwitterSection;
        } else {
            throw new Error("No eleCloseTwitterSection button");
        }
    }

    public get eleFacebookSection() {
        const facebookSection = this.page.locator("//button[b[text()='Facebook card']]");
        if(facebookSection != null) {
            return facebookSection;
        } else {
            throw new Error("No facebookSection button");
        }
    }

    public get eleFacebookTitle() {
        const facebookTitle = this.page.locator("//div[label[text()='Facebook title']]/input");
        if(facebookTitle != null) {
            return facebookTitle;
        } else {
            throw new Error("No facebookTitle input");
        }
    }

    public get eleFacebookDescription() {
        const facebookDescription = this.page.locator("//div[label[text()='Facebook description']]/textarea");
        if(facebookDescription != null) {
            return facebookDescription;
        } else {
            throw new Error("No facebookDescription textarea");
        }
    }

    public get eleCloseFacebookSection() {
        const closeFacebookSection = this.page.locator("//button[span[text()='Back']]");
        if(closeFacebookSection != null) {
            return closeFacebookSection;
        } else {
            throw new Error("No closeFacebookSection button");
        }
    }

    //actuadores
    public async fillPostTitle(title:string){
        console.log("Ingresando titulo del post...");
        const titleArea = await this.eleTitle;
        await titleArea?.fill(title);
    }

    public async fillPostContent(title:string){
        console.log("Ingresando contenido del post...");
        const contentArea = await this.eleContent;
        await contentArea?.fill(title);
    }

    public async clickSettingButton(){
        console.log("Abriendo setting de un post...");
        const publishLink = await this.eleSettingButton;
        await publishLink?.click();
        await this.page.waitForSelector("//label[text()='Tags']")
    }

    public async clickPublishLink(){
        await this.page.waitForSelector(`//div[contains(@class, 'gh-btn gh-btn-outline gh-publishmenu-trigger')]`);
        const publishLink = await this.elePublishLink;
        await publishLink?.click();
    }

    public async clickPublishButton(){
        console.log("Publicando post...");
        const publishButton = await this.elePublishBtn;
        await publishButton?.click();
        await this.page.waitForSelector("(//span[text()='Published'])[2]");
    }

    public async clickScheduleButton(){
        const publishButton = await this.eleScheduleBtn;
        await publishButton?.click();
    }

    public async clickPostsLink(){
        const postsLink = await this.elePostsLink;
        await postsLink?.click();
    }

    public async clickLeaveButton(){
        const postsLink = await this.eleLeaveButton;
        await postsLink?.click();
    }

    public async clickScheduleRadioButton() {
        const scheduleRadioButton = await this.eleScheduleRadioButton;
        await scheduleRadioButton?.click();
    }

    public async updateTimeToPublish() {
        await this.page.waitForSelector("div.gh-date-time-picker-time input");
        await this.clickScheduleRadioButton();
        await this.clickScheduleButton();
        await this.page.waitForSelector("(//span[text()='Scheduled'])[2]");
    }

    public async selectTagWithName(tagName: string) {
        const tagComboBoxInput = await this.eleTagComboBoxInput;
        await tagComboBoxInput?.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const tagList = await this.tagList;
        console.log("Total tags: " + tagList.length);

        const allTagsInDropDown = await Promise.all(tagList
            .map(async (tag, i) => {
                const elementText = await tag.innerText();
                if(elementText.includes(tagName)) {
                    return tag;
                }
            })
        );

        const filteredAllTagsInDropDown = allTagsInDropDown.filter(elm => elm);
        console.log("ver: " + await filteredAllTagsInDropDown[0]?.innerText());
        await filteredAllTagsInDropDown[0]?.click();
        await this.page.waitForSelector("button[aria-label='Close']");
    }

    public async clickCloseSetting() {
        console.log("Cerrando settings");
        const closeSetting = await this.eleCloseSetting;
        await closeSetting?.click();
        const formSetting = await this.eleFormSetting;
        await formSetting?.evaluate(node => node.setAttribute("style", "display: none"));
        await this.page.waitForSelector("//span[text()='Publish']");
    }

    public async clickDeletePostButton() {
        const deleteButton = await this.eleDeletePostButton;
        await deleteButton?.click();
    }

    public async clickConfirmationDeletePostButton() {
        console.log("Eliminando post...");
        const deleteButton = await this.eleConfirmationDeletePostButton;
        await deleteButton?.click();
    }

    public async clickViewPostLink() {
        await this.page.waitForSelector("span.gh-notification-actions");
        const viewPostLink = await this.eleViewPost;
        await viewPostLink?.evaluate(node => node.removeAttribute("target"));
        return await viewPostLink?.click();
    }

    public async clickMetaDataSection() {
        console.log("Ingresando a seccion meta data...");
        const metaDataSection = await this.eleMetaDataSection;
        await metaDataSection?.click();
    }

    public async fillMetaTitle(metaTitle: string) {
        console.log("Estableciendo valor de meta title...");
        const metaTitleInput = await this.eleMetaTitle;
        await metaTitleInput?.fill(metaTitle);
    }

    public async fillMetaDescription(metaDescription: string) {
        console.log("Estableciendo valor de meta description...");
        const metaDescriptionInput = await this.eleMetaDescription;
        await metaDescriptionInput?.fill(metaDescription);
    }

    public async fillMetaCanonicalUrl(metaCanonicalUrl: string) {
        console.log("Estableciendo valor de meta canonical url...");
        const metaCanonicalUrlInput = await this.eleMetaCanocialUrl;
        await metaCanonicalUrlInput?.fill(metaCanonicalUrl);
    }

    public async closeMetaDataSection() {
        console.log("Cerrando seccion meta data...");
        const metaCanonicalUrlInput = await this.eleCloseMetaDataSection;
        await metaCanonicalUrlInput?.click();
    }

    public async clickTwitterSection() {
        console.log("Ingresando a seccion twitter...");
        const twitterSection = await this.eleTwitterSection;
        await twitterSection?.click();
    }

    public async fillTwitterTitle(twitterTitle: string) {
        console.log("Estableciendo valor de twitter title...");
        const twitterTitleInput = await this.eleTwitterTitle;
        await twitterTitleInput?.fill(twitterTitle);
    }

    public async fillTwitterDescription(twitterDescription: string) {
        console.log("Estableciendo valor de twitter description...");
        const twitterDescriptionInput = await this.eleTwitterDescription;
        await twitterDescriptionInput?.fill(twitterDescription);
    }

    public async closeTwitterSection() {
        console.log("Cerrando seccion twitter...");
        const twitterSection = await this.eleCloseTwitterSection;
        await twitterSection?.click();
    }

    public async clickFacebookSection() {
        console.log("Ingresando a seccion facebook...");
        const facebookSection = await this.eleFacebookSection;
        await facebookSection?.click();
    }

    public async fillFacebookTitle(facebookTitle: string) {
        console.log("Estableciendo valor de facebook title...");
        const facebookTitleInput = await this.eleFacebookTitle;
        await facebookTitleInput?.fill(facebookTitle);
    }

    public async fillFacebookDescription(facebookDescription: string) {
        console.log("Estableciendo valor de facebook description...");
        const facebookDescriptionInput = await this.eleFacebookDescription;
        await facebookDescriptionInput?.fill(facebookDescription);
    }

    public async closeFacebookSection() {
        console.log("Cerrando seccion facebook...");
        const facebookSection = await this.eleCloseFacebookSection;
        await facebookSection?.click();
    }

}