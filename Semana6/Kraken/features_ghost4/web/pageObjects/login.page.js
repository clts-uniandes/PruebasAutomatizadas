
module.exports = class LoginPage {
    
    constructor(driver) {
        this.driver = driver;
    }

    get eleEmailAddressTextField() {
        const emailAddressText = this.driver.$(`input[name='identification']`);
        if(emailAddressText != null) {
            return emailAddressText;
        } else {
            throw new Error("No emailAddressText element");
        }
    }

    get elePasswordTextField() {
        const passwordText = this.driver.$("input[name='password']");
        if(passwordText != null) {
            return passwordText;
        } else {
            throw new Error("No passwordText element");
        }
    }

    get eleLoginBtn() {
        const loginBtn = this.driver.$("//span[text()[normalize-space()='Sign in →']]");
        if(loginBtn != null) {
            return loginBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }

}