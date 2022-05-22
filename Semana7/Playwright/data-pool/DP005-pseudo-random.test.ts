import {Browser, BrowserContext, chromium, Page} from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import {test, expect} from '@playwright/test';
import Utilities from "../functions/utilities";
import RandomElement from "../util/utilsFaker";
import {FakerCategories} from "../util/faker.enum";
import {PageFields} from "../util/page-fields.enum";
import PseudoRandomData from "../util/pseudo-random-data";

let screenshotNumber = 1;
let testCode: string =  'DP005';
let testNumber:number = 0;
let i:number=1;

let randomElement: RandomElement = new RandomElement();
let pseudoRandomData: PseudoRandomData = new PseudoRandomData();
let dataPageList = pseudoRandomData.getPageDataListWithTitleAndContentAndPageUrlAndExcerptAndFacebookCardData();

for (const pageData of dataPageList) {
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

        test(`${i++} - should create a page with random title and random content after that update page with random preload data`, async () => {
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
            await pageEditor.fillPageTitle(pageData.get(PageFields.TITLE));
            await pageEditor.fillPostContent(pageData.get(PageFields.CONTENT));
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            await pageEditor.clickSettingsButton();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.refillPageUrlField(pageData.get(PageFields.PAGE_URL));
            await pageEditor.refillExcerptField(pageData.get(PageFields.EXCERPT));
            await new Promise(r => setTimeout(r, 1500));
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            //FACEBOOK
            await pageEditor.clickFacebookSection();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.fillFacebookTitle(pageData.get(PageFields.FACEBOOK_TITLE));
            await pageEditor.fillFacebookDescription(pageData.get(PageFields.FACEBOOK_DESCRIPTION));
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.closeFacebookSection();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            await pageEditor.clickCloseSetting();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            await pageEditor.clickUpdateLink();
            await pageEditor.clickUpdateButton();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await pageEditor.clickPagesLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            const linkEditedPage = await pageGhost.findPageByTitle(pageData.get(PageFields.TITLE));
            expect(linkEditedPage).not.toBeNull();
        });

        test.afterEach(async ( ) => {
            //TODO THEN I delete page in order to clean test
            const pageToDelete = await pageGhost.findPageByTitle(pageData.get(PageFields.TITLE));
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
