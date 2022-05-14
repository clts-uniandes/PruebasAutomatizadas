import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';

test.describe("PA003: Borrar página existente'", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    //pageObject variables
    let login: LoginPage;
    let home: HomePage;
    let pageGhost: PageGhostPage;
    let pageEditor: PageEditorPage;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();

        //Given I navigate to admin module
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        login = new LoginPage(page);
        home = new HomePage(page);
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
    });

    test("should create a page and delete said page - Positive scenario", async () => {
        //Given I log in
        await login.signInWith(Env.USER, Env.PASS);

        // I navigate to Page module
        await home.clickPagesLink();

        expect(page.url()).toContain("/#/pages");

        await pageGhost.clickNewPageLink();

        expect(page.url()).toContain("/#/editor/page");
        // Given I have a new page
        await pageEditor.fillPageTitle("Mi página a borrar");
        await pageEditor.fillPostContent("Érase una vez una página a borrar");
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await pageEditor.clickPagesLink();

        //When I navigate to it
        
        const linkCreatedPage = await pageGhost.findPageByTitle("Mi página a borrar");
        expect(linkCreatedPage).not.toBeNull();
        
        await pageGhost.navigateToEditionLink(linkCreatedPage);
        
        //When I enter into its settings menu

        await pageEditor.clickSettingsButton();

        //When I click delete
        await pageEditor.clickDeleteButton();

        // When I confirm the delete
        await pageEditor.clickConfirmDeleteButton();

        // Then I should be back to the pages Module
        await page.waitForURL('**/#/pages');
        /*const linkEditedPage = await pageGhost.findPageByTitle("Mi página a borrar");
        expect(linkEditedPage).not.toBeNull();*/
        
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

});