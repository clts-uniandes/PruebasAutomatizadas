import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import Utilities from "../functions/utilities";
import RandomElement from "../util/utilsFaker";
import { FakerCategories } from "../util/faker.enum";

let screenshotNumber = 1;
let testCode: string =  'DP002';
let testNumber:number = 0;

let randomElement: RandomElement = new RandomElement();

const titles = [randomElement.useFaker(FakerCategories.WORDS, 10),
    randomElement.useFaker(FakerCategories.NUMBERS, 10), randomElement.useFaker(FakerCategories.CHARS, 100)];

for (const title of titles) {
    test.describe(`${testCode} - Page Feature`, () => {

        let browser: Browser;
        let context: BrowserContext;
        let page: Page;
        let utilities: Utilities;

        //Random Elements
        let randomTitle: string;

        //My pageObjects
        let login: LoginPage;
        let home: HomePage;
        let pageGhost: PageGhostPage;
        let pageEditor: PageEditorPage;

        test.beforeEach( async() => {
            browser = await chromium.launch({
                headless: Env.HEADLESS
            });
            context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
            page = await context.newPage();
            testNumber++;
            screenshotNumber = 1;
            utilities = new Utilities(`${testCode}-${testNumber}`);

            //TODO GIVEN url tol login
            await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
            await page.waitForSelector("input[name='identification']");
            login = new LoginPage(page);
            home = new HomePage(page);
            pageGhost = new PageGhostPage(page);
            pageEditor = new PageEditorPage(page);
        });

        test(`should create a page with random title and random content after that update page with title: ${title}`, async () => {
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await login.signInWith(Env.USER, Env.PASS);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await home.clickPagesLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(page.url()).toContain("/#/pages");
            await pageGhost.clickNewPageLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(page.url()).toContain("/#/editor/page");
            randomTitle = randomElement.useFaker(FakerCategories.WORDS, 20);
            await pageEditor.fillPageTitle(randomTitle);
            await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 10));
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.clickPublishLink();
            await pageEditor.clickPublishButton();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.clickPagesLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
            expect(linkCreatedPage).not.toBeNull();
            await pageGhost.navigateToEditionLink(linkCreatedPage);
            await pageEditor.fillPageTitle(title);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.clickUpdateLink();
            await pageEditor.clickUpdateButton();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.clickPagesLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            const linkEditedPage = await pageGhost.findPageByTitle(title);
            expect(linkEditedPage).not.toBeNull();
        });

        test.afterEach(async () => {
            //TODO THEN I delete page in order to clean test
            const pageToDelete = await pageGhost.findPageByTitle(title);
            if(pageToDelete) {
                expect(pageToDelete).not.toBeNull();
                await pageGhost.navigateToEditionLink(pageToDelete);
                await pageEditor.deletePage();
            }
            await page.close();
            await context.close();
            await browser.close()
        })

    });
}
