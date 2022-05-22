import { Page } from "playwright";

export default class PageEditorPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //selectores

    public get eleTitle() {
        const title = this.page.locator("//textarea[@placeholder='Page title'] | //textarea[@placeholder='Page Title']");
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

    public get elePagesLink() {
        const postsLink = this.page.$("text='Pages'");
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

    public get eleUpdateLink() {
        const publishLink = this.page.locator("//span[contains(.,'Update')]");
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

    public get eleSettingButton() {
        const ele = this.page.locator("//button[@title='Settings']");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No SettingButton element");
        }
    }

    public get elePageURLInput() {
        const ele = this.page.$("input[name='post-setting-slug']");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No SettingButton element");
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

    public get eleFormSetting() {
        const formSetting = this.page.$("div.settings-menu-container");
        if(formSetting != null) {
            return formSetting;
        } else {
            throw new Error("No FormSetting element");
        }
    }

    public get eleDeletePageButton() {
        const deletePost = this.page.locator("//span[contains(., 'Delete page')]");
        if(deletePost != null) {
            return deletePost;
        } else {
            throw new Error("No DeletePageButton element");
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

    public get eleSettingsButton() {
        const buttonSettings = this.page.$("//button[@title='Settings']");
        if(buttonSettings != null) {
            return buttonSettings;
        } else {
            throw new Error("No settings Button element");
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

    public get eleExcerptTextArea() {
        const excerptTextArea = this.page.locator("//div[label[contains(text(),'Excerpt')]]//textarea");
        if(excerptTextArea != null) {
            return excerptTextArea;
        } else {
            throw new Error("No page URL input element");
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

    public get eleLeaveButton() {
        const leaveButton = this.page.locator("text='Leave'").first();
        if(leaveButton != null) {
            return leaveButton;
        } else {
            throw new Error("No LeaveButton button");
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
    public async fillPageTitle(title:string){
        console.log("Ingresando titulo de pagina...");
        const titleArea = await this.eleTitle;
        await titleArea?.fill(title);
    }

    public async fillPostContent(content:string){
        console.log("Ingresando contenido de pagina...");
        const contentArea = await this.eleContent;
        await contentArea?.fill(content);
    }

    public async clickPublishLink(){
        const publishLink = await this.elePublishLink;
        await publishLink?.click();
    }

    public async clickUpdateLink(){
        const publishLink = await this.eleUpdateLink;
        await publishLink?.click();
    }

    public async clickPublishButton(){
        console.log("Publicando pagina...");
        await this.page.waitForSelector("button.gh-publishmenu-button");
        const publishButton = await this.elePublishBtn;
        await publishButton?.click();
    }

    public async clickUpdateButton(){
        console.log("Actualizando pagina...");
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

    public async clickPagesLinkWithoutPublishConfirmation(){
        const postsLink = await this.elePagesLink;
        await postsLink?.click();
        const leaveButton = await this.eleLeaveButton;
        await leaveButton?.click();
    }

    public async findErrorMessage() {
        const errorMessage = await this.eleErrorMessage;
        console.log("Error message: " + errorMessage);
        return errorMessage;
    }

    public async clickSettingButton() {
        const ele = await this.eleSettingButton;
        await ele?.click();
    }

    public async fillPageURL(pageURL: string) {
        const ele = await this.elePageURLInput;
        await ele?.fill(pageURL);
    }

    public async clickCloseSetting() {
        console.log("Cerrando formulario setting...");
        const closeSetting = await this.eleCloseSetting;
        await closeSetting?.click();
        const formSetting = await this.eleFormSetting;
        await formSetting?.evaluate(node => node.setAttribute("style", "display: none"));
    }

    public async updatePageURLWith(pageURL: string) {
        await this.clickSettingButton();
        await this.fillPageURL(pageURL);
        await this.clickCloseSetting();
    }

    public async clickDeletePageButton() {
        const deleteButton = await this.eleDeletePageButton;
        await deleteButton?.click();
    }

    public async clickConfirmationDeletePostButton() {
        const deleteButton = await this.eleConfirmationDeletePostButton;
        await deleteButton?.click();
        await this.page.waitForURL('**/#/pages');
    }

    public async deletePage() {
        console.log("Eliminando pagina para limpiar datos creados...");
        await this.clickSettingButton();
        await this.clickDeletePageButton();
        await this.clickConfirmationDeletePostButton();
    }

    public async clickSettingsButton() {
        console.log("Abriendo formulario setting...");
        const buttonSave = await this.eleSettingsButton;
        await buttonSave?.click();
    }

    public async refillPageUrlField(url:string){
        console.log("Estableciendo valor de page url...");
        const pageUrlInput = await this.elePageUrlInput;
        await pageUrlInput?.fill(url);
    }

    public async refillExcerptField(url:string){
        console.log("Estableciendo valor de excerpt...");
        const excerptTextArea = await this.eleExcerptTextArea;
        await excerptTextArea?.fill(url);
    }

    public async clickDeleteButton() {
        const buttonSave = await this.eleDeleteButton;
        await buttonSave?.scrollIntoViewIfNeeded();
        await buttonSave?.click();
        await this.page.waitForLoadState();
    }

    public async clickConfirmDeleteButton() {
        const buttonSave = await this.eleConfirmDeleteButton;
        await buttonSave?.click();
    }

    public async clickCloseSettingsButton() {
        const closeSettingsButton = await this.eleCloseSettingsButton;
        await closeSettingsButton?.click();
    }

    public async isTherePublishButton() {
        console.log("Checking if there is publish button...");
        try {
            await this.page.waitForSelector("//span[contains(.,'Publish')]", { timeout: 3000 });
            return true;
        } catch (error) {
            console.log("The element didn't appear.");
            return false;
        }
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