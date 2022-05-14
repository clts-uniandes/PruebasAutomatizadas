import { Page } from "playwright";

export default class PageEditorPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //selectores

    public get eleTitle() {
        const title = this.page.$("textarea[placeholder='Page Title']");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }

    public get eleContent() {
        const description = this.page.$("div[data-placeholder='Begin writing your page...']");
        if(description != null) {
            return description;
        } else {
            throw new Error("No content element");
        }
    }

    public get elePageUrlInput() {
        const pageUrlInput = this.page.$("input[name='post-setting-slug']");
        if(pageUrlInput != null) {
            return pageUrlInput;
        } else {
            throw new Error("No page URL input element");
        }
    }

    public get elePagesLink() {
        const postsLink = this.page.$("text='Pages'");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    public get elePublishLink() {
        const publishLink = this.page.locator(`//div[contains(@class, 'gh-btn gh-btn-outline gh-publishmenu-trigger')]`);
        if(publishLink != null) {
            return publishLink;
        } else {
            throw new Error("No publishLink element");
        }
    }

    public get eleUpdateLink() {
        const publishLink = this.page.$(`//div[contains(@class, 'gh-btn gh-btn-outline gh-publishmenu-trigger')]`);
        if(publishLink != null) {
            return publishLink;
        } else {
            throw new Error("No publishLink element");
        }
    }

    public get elePublishBtn() {
        const publishButton = this.page.$("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    public get eleUpdateBtn() {
        const publishButton = this.page.waitForSelector("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    public get eleViewPage() {
        const viewPost = this.page.$("View Post");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }

    public get eleErrorMessage() {
        const errorMessage = this.page.$("Error");
        if(errorMessage != null) {
            return errorMessage;
        } else {
            throw new Error("No viewPost element");
        }
    }

    public get eleSettingsButton() {
        const buttonSettings = this.page.$("//button[@title='Settings']");
        if(buttonSettings != null) {
            return buttonSettings;
        } else {
            throw new Error("No settings Button element");
        }
    }

    public get eleDeleteButton() {
        
        const buttonDelete = this.page.$("//span[contains(text(),'Delete')]");
        
        if(buttonDelete != null) {
            return buttonDelete;
        } else {
            throw new Error("No button delete element");
        }
    }

    public get eleConfirmDeleteButton() {
        const buttonDelete = this.page.$("//span[text()='Delete']");
        if(buttonDelete != null) {
            return buttonDelete;
        } else {
            throw new Error("No delete confirmation Button element");
        }
    }

    public get eleCloseSettingsButton() {
        const buttonDelete = this.page.$("//button[@aria-label='Close']");
        if(buttonDelete != null) {
            return buttonDelete;
        } else {
            throw new Error("No close settings button");
        }
    }

    //actuadores
    public async fillPageTitle(title:string){
        const titleArea = await this.eleTitle;
        await titleArea?.fill(title);
    }

    public async fillPostContent(content:string){
        const contentArea = await this.eleContent;
        await contentArea?.fill(content);
    }

    public async clickPublishLink(){
        await this.page.waitForSelector(`//div[contains(@class, 'gh-btn gh-btn-outline gh-publishmenu-trigger')]`);
        const publishLink = await this.elePublishLink;
        await publishLink?.click();
    }

    public async clickUpdateLink(){
        await this.page.waitForSelector("div.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
        const publishLink = await this.eleUpdateLink;
        await publishLink?.click();
    }

    public async clickPublishButton(){
        await this.page.waitForSelector("button.gh-publishmenu-button");
        const publishButton = await this.elePublishBtn;
        await publishButton?.click();
    }

    public async clickUpdateButton(){
        const publishButton = await this.eleUpdateBtn;
        await publishButton?.click();
        await this.page.waitForSelector("(//span[text()='Updated'])[2]");
    }

    public async clickPagesLink(){
        await this.page.waitForSelector("span.gh-notification-actions");
        const postsLink = await this.elePagesLink;
        await postsLink?.click();
        await this.page.waitForLoadState();
    }

    public async findErrorMessage() {
        const errorMessage = await this.eleErrorMessage;
        console.log("Error message: " + errorMessage);
        return errorMessage;
    }

    public async clickDeleteButton() {
        const buttonSave = await this.eleDeleteButton;
        await buttonSave?.scrollIntoViewIfNeeded();
        await buttonSave?.click();
        await this.page.waitForLoadState();
    }

    public async clickSettingsButton() {
        const buttonSave = await this.eleSettingsButton;
        await buttonSave?.click();
    }

    public async clickConfirmDeleteButton() {
        const buttonSave = await this.eleConfirmDeleteButton;
        await buttonSave?.click();
    }

    public async refillPageUrlField(url:string){
        const pageUrlInput = await this.elePageUrlInput;
        //await pageUrlInput?.fill('');
        await pageUrlInput?.fill(url);
    }

    public async clickCloseSettingsButton() {
        const closeSettingsButton = await this.eleCloseSettingsButton;
        await closeSettingsButton?.click();
    }

}