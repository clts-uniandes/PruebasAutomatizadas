module.exports = class StaffEditorPage {
    
    constructor(driver) {
        this.driver = driver;
    }
    get eleEmail() {
        const title = this.driver.$("#user-email");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }
    get eleOldPassword() {
        const title = this.driver.$("#user-password-old");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }
    get eleNewPassword() {
        const title = this.driver.$("#user-password-new");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }
    get eleVerifyPassword() {
        const title = this.driver.$("#user-new-password-verification");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }
    get eleChangePasswordBtn() {
        const saveBtn = this.driver.$("//button[@class='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']");
        if(saveBtn != null) {
            return saveBtn;
        } else {
            throw new Error("No title element");
        }
    }
    get eleSaveBtn() {
        const saveBtn = this.driver.$("//button[@class='gh-btn gh-btn-blue gh-btn-icon ember-view']/span[contains(.,'Save')]");
        if(saveBtn != null) {
            return saveBtn;
        } else {
            throw new Error("No title element");
        }
    }
    get elementConfigBtn() {
        const staffLink = this.driver.$(`//button[@class='gh-btn gh-btn-white gh-btn-icon only-has-icon user-actions-cog closed ember-view']`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    }  

    get elementSuspendBtn() {
        const staffLink = this.driver.$(`//button[@class='suspend']`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    }
    get elementUnSuspendedBtn() {
        const staffLink = this.driver.$(`//button[@class='unsuspend']`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    } 
    get elementUnSuspendConfirmBtn() {
        const staffLink = this.driver.$(`//button/span[contains(text(), 'Un-suspend')]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    } 
    get elementSuspendConfirmBtn() {
        const staffLink = this.driver.$(`//button/span[contains(text(), 'Suspend')]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    } 

    
}