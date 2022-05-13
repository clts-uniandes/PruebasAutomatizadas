import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import DesignPage from "../page-object/design.page";
import ContentMainPage from "../page-object/content-main.page";
import ContentPagePage from "../page-object/content-page.page";

test.describe("PA005: Crear nueva página y enlazar con nuevo elemento navbar", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    //pageObject variables
    let login: LoginPage;
    let home: HomePage;
    let pageGhost: PageGhostPage;
    let pageEditor: PageEditorPage;
    let design: DesignPage;
    let contentMain: ContentMainPage;
    let contentPage: ContentPagePage;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.headless
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();

        //Given I navigate to admin module
        await page.goto(Env.baseUrl + Env.adminSection);
        login = new LoginPage(page);
        home = new HomePage(page);
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
        design = new DesignPage(page);
        contentMain = new ContentMainPage(page);
        contentPage = new ContentPagePage(page);
    });

    test("should create a page and delete said page - Positive scenario", async () => {
        //Given I log in
        await login.signInWith(Env.user, Env.pass);

        // I navigate to Page module
        await home.clickPagesLink();
        // I create my page to link
        expect(page.url()).toContain("/#/pages");

        await pageGhost.clickNewPageLink();

        expect(page.url()).toContain("/#/editor/page");

        await pageEditor.fillPageTitle("PaginaAEnlazar");
        await pageEditor.fillPostContent("Érase una vez una página a enlazar");
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await pageEditor.clickPagesLink();
        
        const linkCreatedPage = await pageGhost.findPageByTitle("PaginaAEnlazar");
        expect(linkCreatedPage).not.toBeNull();
        
        // When enlazo la nueva pagina en el navbar del sitio
        await home.clickDesignLink();

        // Then puedo navegar a la nueva pagina desde el sitio de contenido
        
        await design.selectNewLabelInput("NuevaPag");
        await design.selectNewLinkInput("nuevaPag");
        await design.clickSaveButton();

        await page.goto('http://localhost:2368/');
        await contentMain.clickNavBarLink("nuevaPag");
        await new Promise(r => setTimeout(r, 2000));
        await contentPage.elePageTitle("NuevaPag");
        // TODO, expect title functional
        await new Promise(r => setTimeout(r, 2000));

        


    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

});