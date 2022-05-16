import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import DesignPage from "../page-object/design.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import SitePage from "../page-object/site.page";
import Utilities from "../functions/utilities";

let screenshotNumber = 1;

test.describe("PA006 - Renombrar página y componentes navbar asociados", () => { 

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let utilities: Utilities;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let pageGhost: PageGhostPage;
    let pageEditor: PageEditorPage;
    let design: DesignPage;
    let site: SitePage;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();
        utilities = new Utilities("PA006");

        //TODO GIVEN url tol login
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        login = new LoginPage(page);
        home = new HomePage(page);
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
        design = new DesignPage(page);
        site = new SitePage(page);
    });

    test("should edit page title, edit navbar link and verify if home page show nav bar correctly - positive scenario", async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO WHEN I log in
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO WHEN I navigate to Page module
        await home.clickPagesLink();
        //TODO THEN I expected that url will updated
        expect(page.url()).toContain("/#/pages");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to Page Editor
        await pageGhost.clickNewPageLink();
        expect(page.url()).toContain("/#/editor/page");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I create a page
        await pageEditor.fillPageTitle("title-pa006");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.fillPostContent("Contenido de pagina utilizando playwright");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        //TODO THEN I expected is there the page in general list
        const linkCreatedPage = await pageGhost.findPageByTitle("title-pa006");
        expect(linkCreatedPage).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to design page
        await home.clickDesignLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I crate a navbar
        await design.fillLabelForNewNav("NAV PA006");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await design.fillUrlForNewNav("title-pa006");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await design.clickAddNewNavButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await design.clickSaveButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to home page in order to see the navbar work
        await home.clickViewSiteLink();
        const linkNavCreated = await site.findNavByTitle("NAV PA006");
        expect(linkNavCreated).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await site.navigateToNavLink(linkNavCreated);
        expect(await site.isThereDescriptionWith("Contenido de pagina utilizando playwright")).toBe(true);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to Page module
        await home.clickPagesLink();
        //TODO THEN I expected that url will updated
        expect(page.url()).toContain("/#/pages");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO THEN I expected is there the page in general list
        const linkCreatedPageSearch2 = await pageGhost.findPageByTitle("title-pa006");
        expect(linkCreatedPageSearch2).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO WHEN I edited the created page before
        await pageGhost.navigateToEditionLink(linkCreatedPageSearch2);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.fillPageTitle("title-pa006-edited");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO EDIT page link
        await pageEditor.updatePageURLWith("title-pa006-edited");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickUpdateLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickUpdateButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        //TODO THEN I expected is there the edited page in general list
        const linkEditedPage = await pageGhost.findPageByTitle("title-pa006-edited");
        expect(linkEditedPage).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to design page
        await home.clickDesignLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I edit the navbar created
        await design.updateNavBar("NAV PA006", "NAV PA006 EDITED",Env.BASE_URL+"/title-pa006-edited");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        //TODO WHEN I navigate to home page in order to see if navbar works
        await home.clickViewSiteLink();
        const linkNavEdited = await site.findNavByTitle("NAV PA006 EDITED");
        expect(linkNavEdited).not.toBeNull();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await site.navigateToNavLink(linkNavEdited);
        //TODO THEN I navigate to home page in order to see the navbar work
        expect(await site.isThereDescriptionWith("Contenido de pagina utilizando playwright")).toBe(true);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
    });

    test.afterAll(async () => {
        //TODO THEN I delete the created page
        await home.clickPagesLink();
        expect(page.url()).toContain("/#/pages");
        const linkCreatedPage = await pageGhost.findPageByTitle("title-pa006");
        expect(linkCreatedPage).not.toBeNull();
        await pageGhost.navigateToEditionLink(linkCreatedPage)
        await pageEditor.deletePage();

        //TODO THEN I delete the created page
        await home.clickDesignLink();
        await design.deleteNavBar("NAV PA006 EDITED");

        await page.close();
        await context.close();
        await browser.close()
    })

});