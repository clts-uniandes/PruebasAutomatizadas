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
let testCode: string =  'DP001';
let testNumber:number = 0;

test.describe(`${testCode} - Page Feature`, () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let utilities: Utilities;
    let randomElement: RandomElement;

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
        randomElement = new RandomElement();
    });

    test(`1 - should create a page with random title having 20 words and random content having 10 words`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 20)
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
    });

    test(`2 - should create a page with random title having 2000 characters and random content`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.CHARS, 2000);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 11));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(await pageEditor.isTherePublishButton()).toBe(false);
        await pageEditor.clickPagesLinkWithoutPublishConfirmation();
    });

    test(`3 - should create a page with random title and random content having 200 words`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 3);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 200));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`4 - should create a page with empty title and random content having 100 words`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.EMPTY);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 100));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`5 - should create a page with random title having 5 words and empty content`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 5);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.EMPTY));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`6 - should create a page with empty title and empty content`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.EMPTY);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.EMPTY));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`7 - should create a page with random title, random content and random page url`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 5);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 25));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickSettingsButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.refillPageUrlField(randomElement.useFaker(FakerCategories.WORDS, 3));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickCloseSetting();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`8 - should create a page with random title, random content and empty page url`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 5);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 15));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickSettingsButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.refillPageUrlField(randomElement.useFaker(FakerCategories.EMPTY));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickCloseSetting();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`9 - should create a page with random title, random content and page url having 191 characters`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 5);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 15));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickSettingsButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.refillPageUrlField(randomElement.useFaker(FakerCategories.CHARS, 191));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickCloseSetting();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test(`10 - should create a page with random title, random content, page url having 90 characters and random excerpt having 1000 characters`, async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker(FakerCategories.WORDS, 5);
        await pageEditor.fillPageTitle(randomTitle);
        await pageEditor.fillPostContent(randomElement.useFaker(FakerCategories.WORDS, 15));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickSettingsButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.refillPageUrlField(randomElement.useFaker(FakerCategories.CHARS, 191));
        await pageEditor.refillExcerptField(randomElement.useFaker(FakerCategories.CHARS, 1000));
        await new Promise(r => setTimeout(r, 1500));
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickCloseSetting();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.checkIfPageHasBeenPublished(randomTitle);
        expect(linkCreatedPage).not.toBeNull();
    });

    test.afterEach(async () => {
        //TODO THEN I delete page in order to clean test
        const pageToDelete = await pageGhost.findPageByTitle(randomTitle);
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