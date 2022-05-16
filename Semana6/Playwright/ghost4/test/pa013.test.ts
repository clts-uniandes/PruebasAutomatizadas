import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page";
import PostPage from "../page-object/post.page";
import PostEditorPage from "../page-object/post-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import Util from "../util/util";

let screenshotNumber = 0;
let scenarioName = 'PA013/';

test.describe("PA013 - ", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let posts: PostPage;
    let postEditor: PostEditorPage;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS,
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();

        //TODO GIVEN url tol login
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        await page.waitForSelector("input[name='identification']");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        login = new LoginPage(page);
        home = new HomePage(page);
        posts = new PostPage(page);
        postEditor = new PostEditorPage(page);
    });

    test("should create post , keep in draft and finally delete post - positive scenario", async () => {
        //TODO WHEN I log in
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await home.clickPostsLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/posts");
        await posts.clickNewPostLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/editor/post");

        //TODO WHEN I create a post
        await postEditor.fillPostTitle("Titulo de post utilizando playwright");
        await postEditor.fillPostContent("Contenido de post utilizando playwright");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO WHEN I draft the post
        await postEditor.clickPostsLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I expected the post will be draft status
        const linkDraftPost = await posts.findPostByTitleAndStatus("Titulo de post utilizando playwright", "DRAFT");
        expect(linkDraftPost).not.toBeNull();

        //TODO WHEN I delete the post
        await posts.navigateToEditionLink(linkDraftPost);
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickSettingButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickDeletePostButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickConfirmationDeletePostButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I expected the post will be deleted
        const linkDeletedPost = await posts.findPostByTitleAndStatus("Titulo de post utilizando playwright", "DRAFT");
        expect(linkDeletedPost).toBeUndefined();
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })

});