import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import Utilities from "../functions/utilities";

let screenshotNumber = 1;

test.describe("PA004 - Creación de página con título que trae carácteres no permitidos", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let utilities: Utilities;

    //My pageObjects
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
        utilities = new Utilities("PA004");

        //TODO GIVEN url tol login
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        login = new LoginPage(page);
        home = new HomePage(page);
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
    });

    test("should create and edit a page with unallowed chars - positive scenario", async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO WHEN I log in
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO WHEN I navigate to Page module
        await home.clickPagesLink();
        //TODO THEN I expected that url will updated
        expect(page.url()).toContain("/#/pages");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageGhost.clickNewPageLink();
        expect(page.url()).toContain("/#/editor/page");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.fillPageTitle("Titulo de pagina con caracteres especiales @$@@$^&%$@#$@# utilizando playwright");
        expect(await pageEditor.findErrorMessage()).toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.fillPostContent("Contenido de pagina con caracteres especiales utilizando playwright");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.findPageByTitle("Titulo de pagina con caracteres especiales @$@@$^&%$@#$@# utilizando playwright");
        expect(linkCreatedPage).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })

});