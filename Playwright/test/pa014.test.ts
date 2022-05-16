import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page";
import PostPage from "../page-object/post.page";
import PostEditorPage from "../page-object/post-editor.page";
import TagPage from "../page-object/tag.page";
import TagEditorPage from "../page-object/tag-editor.page";
import PublicPostPage from "../page-object/public-post.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import Util from "../util/util";

let screenshotNumber = 0;
let scenarioName = 'PA014/';

test.describe("PA014 - ", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let posts: PostPage;
    let postEditor: PostEditorPage;
    let tags: TagPage;
    let tagEditor: TagEditorPage;
    let publicPost: PublicPostPage;

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
        tags = new TagPage(page);
        tagEditor = new TagEditorPage(page);
        publicPost = new PublicPostPage(page);
    });

    test("should create post assign tag and view client side - positive scenario", async () => {
        //TODO WHEN I log in
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        //TODO WHEN I navigate to Page module
        await home.clickTagsLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        //TODO THEN I expected that url will updated
        expect(page.url()).toContain("/#/tags");

        await tags.clickNewTagLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/tags/new");

        //TODO WHEN I create a tag
        await tagEditor.fillTagName("Nombre tag publico con playwright");
        await tagEditor.fillTagSlug("Slug utilizando publico con playwright");
        await tagEditor.fillTagDescription("Descripcion publico utilizando playwright");
        await tagEditor.clickButtonSave();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await tagEditor.clickTagsLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/tags");

        const linkCreatedTag = await tags.findPageByTitle("Nombre tag publico con playwright");
        expect(linkCreatedTag).not.toBeNull();

        await home.clickPostsLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/posts");
        await posts.clickNewPostLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        expect(page.url()).toContain("/#/editor/post");

        //TODO WHEN I create a post
        await postEditor.fillPostTitle("Titulo de post publico utilizando playwright");
        await postEditor.fillPostContent("Contenido de post publico utilizando playwright");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO WHEN I set tag
        await postEditor.clickSettingButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.selectTagWithName("Nombre tag publico con playwright");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickCloseSetting();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO WHEN I publish the post
        await postEditor.clickPublishLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickPublishButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await postEditor.clickViewPostLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I expected the post will be published on client site
        const validatedCheck = await publicPost.validatePostInfoPublished("Titulo de post publico utilizando playwright",
            "Contenido de post publico utilizando playwright", "NOMBRE TAG PUBLICO CON PLAYWRIGHT");
        expect(validatedCheck).toBe(true);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })

});