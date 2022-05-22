import { Page } from "playwright";

export default class StaffEditorPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //SELECTORES

    //Buttons

    public get eleUserConfigurationButton() {
        const ele = this.page.$("button.gh-btn.gh-btn-white.gh-btn-icon.only-has-icon.user-actions-cog");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No UserConfigurationButton element");
        }
    }

    public get eleSuspendUserButton() {
        const ele = this.page.$("//button[text()[normalize-space()='Suspend User']]");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No SuspendUserButton element");
        }
    }

    public get eleSuspendUserConfirmationButton() {
        const ele = this.page.$("div.modal-footer button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No SuspendUserConfirmationButton element");
        }
    }

    public get eleUnSuspendUserButton() {
        const ele = this.page.$("//button[text()[normalize-space()='Un-suspend User']]");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No UnSuspendUserButton element");
        }
    }

    public get eleUnSuspendUserConfirmationButton() {
        const ele = this.page.$("div.modal-footer button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No UnSuspendUserConfirmationButton element");
        }
    }

    public get eleSavedPasswordButton() {
        const ele = this.page.$("//button[text()='Saved']");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No Saved password element");
        }
    }

    public get eleChangePasswordButton() {
        const ele = this.page.$("//span[text()='Change Password']");
        //const ele = this.page.$("//button[text()[normalize-space()='Change Password']]");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No change password button element");
        }
    }

    public get eleNotificationCloseButton() {
        //cy.get('button[class*="gh-notification-close"]').click()
        const ele = this.page.$("//button[@class='gh-notification-close']");
        //const ele = this.page.$("//button[text()[normalize-space()='Change Password']]");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No Close notification button element");
        }
    }

    public get eleSaveButton() {
        const ele = this.page.$("//span[text()='Save']");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No Save button element");
        }
    }

    public get eleSavedButton() {
        const ele = this.page.$("//button[text()='Saved']");
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No Saved button element");
        }
    }

    public get eleRetryButton() {
        const ele = this.page.$("//span[text()='Retry']");//or button?
        if(ele != null) {
            return ele;
        } else {
            throw new Error("No Retry button element");
        }
    }

    //Input fields

    public get eleCurrentPasswordInput() {
        const currentPasswordInput = this.page.locator("//input[@autocomplete='current-password']");
        if(currentPasswordInput != null) {
            return currentPasswordInput;
        } else {
            throw new Error("No current password input element");
        }
    }

    public get eleNewPasswordInput() {
        const newPasswordInput = this.page.locator("//input[@autocomplete='new-password']");
        if(newPasswordInput != null) {
            return newPasswordInput;
        } else {
            throw new Error("No new password input element");
        }
    }

    public get elePasswordVerificationInput() {
        const passwordVerificationInput = this.page.locator("//input[@id='user-new-password-verification']");
        if(passwordVerificationInput != null) {
            return passwordVerificationInput;
        } else {
            throw new Error("No password verification input element");
        }
    }

    public get eleEmailInput() {
        //input[name*="email"]
        const emailInput = this.page.locator("//input[@name='email']");
        if(emailInput != null) {
            return emailInput;
        } else {
            throw new Error("No email input element");
        }
    }

    public get eleFullNameInput() {
        const fullNameInput = this.page.locator("//input[@id='user-name']");
        if(fullNameInput != null) {
            return fullNameInput;
        } else {
            throw new Error("No full name input element");
        }
    }

    public get eleSlugInput() {
        const slugInput = this.page.locator("//input[@id='user-slug']");
        if(slugInput != null) {
            return slugInput;
        } else {
            throw new Error("No slug input element");
        }
    }

    public get eleLocationInput() {
        const locationInput = this.page.locator("//input[@id='user-location']");
        if(locationInput != null) {
            return locationInput;
        } else {
            throw new Error("No location input element");
        }
    }

    public get eleWebsiteInput() {
        const websiteInput = this.page.locator("//input[@id='user-website']");
        if(websiteInput != null) {
            return websiteInput;
        } else {
            throw new Error("No website input element");
        }
    }

    public get eleFacebookProfileInput() {
        const facebookProfileInput = this.page.locator("//input[@id='user-facebook']");
        if(facebookProfileInput != null) {
            return facebookProfileInput;
        } else {
            throw new Error("No facebook profile input element");
        }
    }

    public get eleTwitterProfileInput() {
        const twitterProfileInput = this.page.locator("//input[@id='user-twitter']");
        if(twitterProfileInput != null) {
            return twitterProfileInput;
        } else {
            throw new Error("No twitter profile input element");
        }
    }

    public get eleBioTextarea() {
        const bioTextarea = this.page.locator("//textarea[@id='user-bio']");
        if(bioTextarea != null) {
            return bioTextarea;
        } else {
            throw new Error("No bio textarea element");
        }
    }

    //ACTUADORES

    //clickers

    public async clickUserSuspendConfigurationButton(){
        const userConfiguration = await this.eleUserConfigurationButton;
        await userConfiguration?.click();
        await this.page.waitForSelector("//button[text()[normalize-space()='Suspend User']]")
    }

    public async clickUserUnSuspendConfigurationButton(){
        const userConfiguration = await this.eleUserConfigurationButton;
        await userConfiguration?.click();
        await this.page.waitForSelector("//button[text()[normalize-space()='Un-suspend User']]")
    }

    public async clickSuspendUserButton(){
        const suspendUserBtn = await this.eleSuspendUserButton;
        await suspendUserBtn?.click();
        await this.page.waitForSelector("//button[contains(text(),'Suspend')]");
    }

    public async clickSuspendUserConfirmationButton(){
        const suspendUserConfirmationBtn = await this.eleSuspendUserConfirmationButton;
        await suspendUserConfirmationBtn?.click();
        await this.page.waitForSelector("//span[text()='Saved']")
    }

    public async clickUnSuspendUserButton(){
        const suspendUserBtn = await this.eleUnSuspendUserButton;
        await suspendUserBtn?.click();
        await this.page.waitForSelector("//button[contains(text(),'Un-suspend')]");
    }

    public async clickUnSuspendUserConfirmationButton(){
        const suspendUserConfirmationBtn = await this.eleUnSuspendUserConfirmationButton;
        await suspendUserConfirmationBtn?.click();
        await this.page.waitForSelector("//span[text()='Saved']")
    }

    public async clickChangePasswordButton() {
        const changePasswordButton = await this.eleChangePasswordButton;
        await changePasswordButton?.click();
        await this.eleSaveButton;
        await this.page.waitForSelector("//span[text()='Password updated']");
    }

    public async clickSaveButton() {
        const saveButton = await this.eleSaveButton;
        await saveButton?.click();
        await this.eleSavedButton;
    }

    public async clickCloseNotification() {
        const notificationCloseBtn = await this.eleNotificationCloseButton;
        await notificationCloseBtn?.click();
    }

    //Form fillers

    public async refillFullName(email:string) {
        const fullNameInput = await this.eleFullNameInput;
        await fullNameInput?.fill(email);
    }

    public async refillSlug(slug:string) {
        const slugInput = await this.eleSlugInput;
        await slugInput?.fill(slug);
    }

    public async refillEmail(email:string) {
        const emailInput = await this.eleEmailInput;
        await emailInput?.fill(email);
    }

    public async fillLocation(email:string) {
        const locationInput = await this.eleLocationInput;
        await locationInput?.fill(email);
    }

    public async fillWebsite(website:string) {
        const websiteInput = await this.eleWebsiteInput;
        await websiteInput?.fill(website);
    }

    public async fillFacebookProfile(facebookProfile:string) {
        const facebookProfileInput = await this.eleFacebookProfileInput;
        await facebookProfileInput?.fill(facebookProfile);
    }

    public async fillTwitterProfile(twitterProfile:string) {
        const twitterProfileInput = await this.eleTwitterProfileInput;
        await twitterProfileInput?.fill(twitterProfile);
    }

    public async fillBio(bio:string) {
        const bioTextarea = await this.eleBioTextarea;
        await bioTextarea?.fill(bio);
    }

    public async fillCurrentPaswordInput(password: string) {
        const currentPassInput = await this.eleCurrentPasswordInput;
        await currentPassInput?.fill(password);
    }

    public async fillNewPasswordInput(password: string) {
        const newPassInput = await this.eleNewPasswordInput;
        await newPassInput?.fill(password);
    }

    public async fillPasswordVerificationInput(password: string) {
        //await new Promise(r => setTimeout(r, 500));
        const passVerificationInput = await this.elePasswordVerificationInput;
        await passVerificationInput?.fill(password);
    }


}