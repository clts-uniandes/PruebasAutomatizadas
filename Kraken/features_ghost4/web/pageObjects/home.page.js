module.exports = class HomePage {

    constructor(driver) {
        this.driver = driver;
    }

    get elePostsLink() {
        const postsLink = this.driver.$(`a[href="#/posts/"]`);
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    get elePagesLink() {
        const pagesLink = this.driver.$(`a[href="#/pages/"]`);
        if(pagesLink != null) {
            return pagesLink;
        } else {
            throw new Error("No pagesLink element");
        }
    }

    get eleTagsLink() {
        const tagsLink = this.driver.$(`a[href="#/tags/"]`);
        if(tagsLink != null) {
            return tagsLink;
        } else {
            throw new Error("No tagsLink element");
        }
    }
    
    get eleStaffLink() {
        const staffLink = this.driver.$(`a[href="#/staff/"]`);
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    }
    get eleUserConfigLink() {
        const userConfigLink = this.driver.$(`//div[@class='gh-user-avatar relative']`);
        if(userConfigLink != null) {
            return userConfigLink;
        } else {
            throw new Error("No staffLink element");
        }
    }
    get eleSignOutLink() {
        const signOutLink = this.driver.$(`a[href='#/signout/']`);
        if(signOutLink != null) {
            return signOutLink;
        } else {
            throw new Error("No staffLink element");
        }
    }
    get eleDesign() {
        const signOutLink = this.driver.$(`a[href='#/settings/']`);
        if(signOutLink != null) {
            return signOutLink;
        } else {
            throw new Error("No staffLink element");
        }
    }
}