import { Page } from "playwright";

export default class DesignPage {
    
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //selectores

    public get eleEmailAddressTextField() {
        const emailAddressText = this.page.waitForSelector("input[placeholder='Email Address']");
        if(emailAddressText != null) {
            return emailAddressText;
        } else {
            throw new Error("No emailAddressText element");
        }
    }

    public get elePasswordTextField() {
        const passwordText = this.page.waitForSelector("input[placeholder='Password']");
        if(passwordText != null) {
            return passwordText;
        } else {
            throw new Error("No passwordText element");
        }
    }

    
    public get eleLoginBtn() {
        const loginBtn = this.page.waitForSelector("//span[text()[normalize-space()='Sign in']]");
        if(loginBtn != null) {
            return loginBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }

    public get eleClosePopup() {
        const loginBtn = this.page.waitForSelector("//button[@class='gh-notification-close']");
        if(loginBtn != null) {
            return loginBtn;
        } else {
            throw new Error("No eleClosePopup element");
        }
    }

    public get eleNewLabelInputField() {
        const newLabelInput = this.page.$("(//form[@id='settings-navigation']//input[@placeholder='Label'])[last()]");
        if(newLabelInput != null) {
            return newLabelInput;
        } else {
            throw new Error("No new label input element");
        }
    }

    public get eleNewLinkInputField() {
        const newLinkInput = this.page.$("(//form[@id='settings-navigation']//input)[last()]");
        if(newLinkInput != null) {
            return newLinkInput;
        } else {
            throw new Error("No new link input element");
        }
    }

    public get eleSaveButton() {
        const saveButton = this.page.$("//span[text()='Save']");
        if(saveButton != null) {
            return saveButton;
        } else {
            throw new Error("No Save button");
        }
    }

    public get eleSavedButton() {
        const savedButton = this.page.$("//span[text()='Saved']");
        if(savedButton != null) {
            return savedButton;
        } else {
            throw new Error("No Saved button");
        }
    }

    //actuadores

    public async enterEmailAddress(user:string) {
        const ele = await this.eleEmailAddressTextField;
        await ele?.fill(user);
    }

    public async enterPassword(pass:string) {
        const ele = await this.elePasswordTextField;
        await ele?.fill(pass);
    }

    public async clickSignIn() {
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }

    public async signInWith(user:string, pass:string) {
        await this.enterEmailAddress(user);
        await this.enterPassword(pass);
        await this.clickSignIn();
        await this.page.waitForNavigation();
    }

    public async selectNewLabelInput(labelName: string) {
        const ele = await this.eleNewLabelInputField;
        await ele!.fill(labelName);
    }

    public async selectNewLinkInput(linkPath: string) {
        
        const ele = await this.eleNewLinkInputField;
        await ele?.fill(linkPath);
    }

    /*public async clickClosePopup() {
        const ele = await this.eleClosePopup;
        await ele?.click();
    }*/

    public async clickSaveButton() {
        const saveButton = await this.eleSaveButton;
        await saveButton?.click();
        await this.eleSavedButton;
    }

    
}