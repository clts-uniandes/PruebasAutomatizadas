import { Page } from "playwright";
import Env from "../util/environment";

export default class PageGhostPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //selectores

    public get eleNewPageLink() {
        const newPageLink = this.page.$("text='New page'");
        if(newPageLink != null) {
            return newPageLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }

    public async pagesList() {
        await this.page.waitForSelector(`section ol li`);
        const pages = await this.page.$$(`section ol li`);
        if(pages != null) {
            return pages;
        } else {
            throw new Error("No selectedPostTitle element");
        }
    }


    //actuadores

    public async clickNewPageLink() {
        console.log("Creando una pagina en el editor...");
        const ele = await this.eleNewPageLink;
        await ele?.click();
        await this.page.waitForURL('**/#/editor/page');
    }

    public async findPageByTitle(pageTitle: string) {
        if(pageTitle == "") {
            pageTitle = Env.DEFAULT_PAGE_TITLE;
        }
        const pagesGhost = await this.pagesList();
        const allHref = await Promise.all(pagesGhost
            .map(async (pageGhost, i) => {
                const elementText = await pageGhost.innerText();
                if(elementText.includes(pageTitle)) {
                    return await pageGhost.$("a.gh-post-list-title");
                }
            })
        );

        const filteredAllHref = allHref.filter(elm => elm);
        return filteredAllHref[0];
    }

    public async navigateToEditionLink(link: any) {
        const href = await link.getAttribute("href");
        const formattedHref = href.substring(0,href.length-1)
        await link.click();
        await this.page.waitForURL(`**/${formattedHref}`);
    }

    public async checkIfPageHasBeenPublished(pageTitle: string) {
        const linkCreatedPage = await this.findPageByTitle(pageTitle);
        console.log("Verificando que pagina fue publicada correctamente...");

        if(linkCreatedPage != null) {
            console.log("Pagina publicada correctamente...");
        } else {
            console.log("Pagina no fue publicada...");
        }

    }

}