import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import StaffEditorPage from "../page-object/staff-editor.page";
import PostEditorPage from "../page-object/post-editor.page";
import PostPage from "../page-object/post.page";
//import Utilities from "../functions/utilities";

//let screenshotNumber = 1;

const fs = require('fs');
let selected = 0;
let nombreLimite = '';

test.describe("PDxxx03 - Actualizacion perfil de usuario, todos los valores bajo el límite pero nombre arriba del limite, \
no se puede cambiar nombre, pero post author encaja con nombre perfil actual", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    //let utilities: Utilities;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let staffEditorPage: StaffEditorPage;
    let posts: PostPage;
    let postEditor: PostEditorPage;

    //Data pool loading
    const path = require("path");
    const directoryPath = path.join(__dirname, "../data/MOCK_DATA.json");
    let rawdata = fs.readFileSync(directoryPath);
    const dataPool = JSON.parse(rawdata);
    const foundList = dataPool;
    
    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();
        //utilities = new Utilities("PDxxx01");

        //Given I have arrived to admin (login) page
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        login = new LoginPage(page);
        home = new HomePage(page);
        staffEditorPage = new StaffEditorPage(page);
        posts = new PostPage(page);
        postEditor = new PostEditorPage(page);
        selected = Math.floor(Math.random() * 500)-1;
        nombreLimite = (foundList[selected].contenido_limite).substring(1,193);
    });

    test("A: A-priori (pool), M: Sobre la frontera, Mid", async () => {
        console.log("The selected element is " + selected);
        //Given I log in
        await login.signInWith(Env.USER, Env.PASS);
        //When I enter the user profile settings
        await home.clickUserMenu();
        await home.clickUserProfileLink();
        await staffEditorPage.eleSaveButton;
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        await home.clickUserMenu();
        await home.clickUserProfileLink();
        await staffEditorPage.eleSaveButton;
        await staffEditorPage.refillFullName(nombreLimite)
        await staffEditorPage.refillSlug(foundList[selected].nombre);
        await staffEditorPage.refillEmail(foundList[selected].e_mail);
        await staffEditorPage.fillLocation(foundList[selected].ciudad);
        await staffEditorPage.fillWebsite(foundList[selected].url);
        await staffEditorPage.fillFacebookProfile('https://www.facebook.com/'.concat(foundList[selected].nombre));
        await staffEditorPage.fillTwitterProfile('https://twitter.com/'.concat(foundList[selected].nombre));
        await staffEditorPage.fillBio(foundList[selected].contenido.substring(1,100));
        await staffEditorPage.clickSaveButton();
        //Then the data is saved successfully
        expect(await staffEditorPage.eleRetryButton).toBeTruthy;
        await new Promise(r => setTimeout(r, 3000));
        await home.clickPostsLinkNoWait();
        await staffEditorPage.clickLeaveButton();
        expect(page.url()).toContain("/#/posts");
        await posts.clickNewPostLink();
        expect(page.url()).toContain("/#/editor/post");
        //When I create a post
        await postEditor.fillPostTitle("PostObservado");
        await postEditor.fillPostContent("Contenido de post observado");
        await postEditor.clickPublishLink();
        await postEditor.clickPublishButton();
        //When I return to post list
        await postEditor.clickPostsLink();
        const postAuthor = await posts.eleLastPostAuthorSpan.textContent();
        expect(postAuthor).toContain(Env.FULL_NAME);
        await new Promise(r => setTimeout(r, 3000));
    });

    test.afterAll(async () => {
        // Update profile page with clean data and delete created post
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        await new Promise(r => setTimeout(r, 2500));
        await home.clickPostsLink();
        expect(page.url()).toContain("/#/posts");
        const linkPostToDelete = await posts.findPostByTitleAndStatus("PostObservado", "PUBLISHED");
        await posts.navigateToEditionLink(linkPostToDelete);
        await postEditor.clickSettingButton();
        await postEditor.clickDeletePostButton();
        await postEditor.clickConfirmationDeletePostButton();
        await page.close();
        await context.close();
        await browser.close();
    })

});