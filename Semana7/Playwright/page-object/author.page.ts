import { Page } from "playwright";

export default class AuthorPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //SELECTORES

    //header

    public get eleRecentArticleHeader() {
        //const authorSpan = this.page.locator("//input[@autocomplete='current-password']");
        const authorSpan = this.page.locator("(//h2[@class='post-card-title'])[1]");
        if(authorSpan != null) {
            return authorSpan;
        } else {
            throw new Error("Couldn't select last author's post");
        }
    }

    public get eleLocationDiv() {
        const locationDiv = this.page.locator("(//div[@class='author-location'])");
        if(locationDiv != null) {
            return locationDiv;
        } else {
            throw new Error("Couldn't find the author's location div");
        }
    }

    public get eleLocationDivNoWait() {
        const locationDiv = this.page.$("(//div[@class='author-location'])");
        if(locationDiv != null) {
            return locationDiv;
        } else {
            throw new Error("Couldn't find the author's location div");
        }
    }

    public get eleBioHeader() {
        const bioHeader = this.page.locator("(//h2[@class='author-bio'])");
        if(bioHeader != null) {
            return bioHeader;
        } else {
            throw new Error("Couldn't find the author's location div");
        }
    }

    public get eleBioHeaderNoWait() {
        const bioHeader = this.page.$("(//h2[@class='author-bio'])");
        if(bioHeader != null) {
            return bioHeader;
        } else {
            throw new Error("Couldn't find the author's location div");
        }
    }

    public get eleNotFoundHeader() {
        //const authorSpan = this.page.locator("//input[@autocomplete='current-password']");
        const notFoundHeader = this.page.$("(//h1[text()='404'])[1]");
        if(notFoundHeader != null) {
            return notFoundHeader;
        } else {
            throw new Error("Couldn't find a 404 (not found) header");
        }
    }


}
