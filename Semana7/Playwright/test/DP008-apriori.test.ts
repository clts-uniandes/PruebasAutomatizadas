import { Browser, BrowserContext, chromium, Page } from "playwright";
import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import path from 'path';

import PostEditorPage from "../page-object/post-editor.page";
import PostPage from "../page-object/post.page";
import Utilities from "../functions/utilities";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page";
import Env from "../util/environment";
import {PostStatus} from "../util/post-status.enum";
import {FakerCategories} from "../util/faker.enum";
import RandomElement from "../util/utilsFaker";
import {PageFields} from "../util/page-fields.enum";

let screenshotNumber = 1;
let testCode: string =  'DP008';
let testNumber:number = 0;
let i:number=1;

let randomElement: RandomElement = new RandomElement();
let rawData = fs.readFileSync(path.join(__dirname, "../data/MOCK_DATA.json")).toString();
const records = JSON.parse(rawData);

for (let _i = 9; _i < 12; _i++) {
    const record = records[_i];

    test.describe(`${testCode} - Post Feature`, () => {

        let browser: Browser;
        let context: BrowserContext;
        let page: Page;
        let utilities: Utilities;
        let randomTitle: any;

        //My pageObjects
        let login: LoginPage;
        let home: HomePage;
        let posts: PostPage;
        let postEditor: PostEditorPage;

        test.beforeEach( async() => {
            browser = await chromium.launch({
                headless: Env.HEADLESS
            });
            context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
            page = await context.newPage();
            testNumber++;
            screenshotNumber = 1;
            utilities = new Utilities(`${testCode}-${testNumber}`);

            //Given I have arrived to admin (login) page
            await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
            await page.waitForSelector("input[name='identification']");
            login = new LoginPage(page);
            home = new HomePage(page);
            posts = new PostPage(page);
            postEditor = new PostEditorPage(page);
        });

        test(`${i++} - should create post with random values, keep in draft , edit the created post using data from apriori data pool and after that publish it`, async () => {
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            //TODO WHEN I log in
            await login.signInWith(Env.USER, Env.PASS);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await home.clickPostsLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(page.url()).toContain("/#/posts");
            await posts.clickNewPostLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(page.url()).toContain("/#/editor/post");

            //TODO WHEN I create a post
            randomTitle = randomElement.useFaker(FakerCategories.WORDS, 20);
            await postEditor.fillPostTitle(randomTitle);
            await postEditor.fillPostContent(randomElement.useFaker(FakerCategories.PARAGRAPH, 5));
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            //TODO WHEN I draft the post
            await postEditor.clickPostsLink();

            //TODO THEN I expected the post will be draft status
            const linkDraftPost = await posts.findPostByTitleAndStatus(randomTitle, PostStatus.DRAFT);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(linkDraftPost).not.toBeNull();

            //TODO WHEN I edit the created post
            await posts.navigateToEditionLink(linkDraftPost);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            randomTitle = record.nombre_completo
            await postEditor.fillPostTitle(randomTitle);
            await postEditor.fillPostContent(record.contenido);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            //TODO WHEN I edit twitter setting
            await postEditor.clickSettingButton();
            await postEditor.clickTwitterSection();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await postEditor.fillTwitterTitle(record.fecha);
            await postEditor.fillTwitterDescription(record.texto_llave);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await postEditor.closeTwitterSection();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await postEditor.clickCloseSetting();

            //TODO WHEN I publish the post
            await postEditor.clickPublishLink();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            await postEditor.clickPublishButton();
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

            //TODO WHEN I return to post list
            await postEditor.clickPostsLink();
            //TODO THEN I expected the post will be deleted
            const linkPublishedPost = await posts.findPostByTitleAndStatus(randomTitle, PostStatus.PUBLISHED);
            await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
            expect(linkPublishedPost).not.toBeUndefined();
        });

        test.afterEach(async () => {
            //TODO WHEN I delete the post
            console.log("Eliminando post para limpiar datos creados...");
            const linkPublishedPost = await posts.findPostByTitleAndStatus(randomTitle, PostStatus.PUBLISHED);
            await posts.navigateToEditionLink(linkPublishedPost);
            await postEditor.clickSettingButton();
            await postEditor.clickDeletePostButton();
            await postEditor.clickConfirmationDeletePostButton();

            await page.close();
            await context.close();
            await browser.close();
        })

    });
}