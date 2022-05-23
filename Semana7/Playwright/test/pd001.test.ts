import { Browser, BrowserContext, chromium, Page } from "playwright";
import { test, expect } from '@playwright/test';
import Env from "../util/environment";
//import Utilities from "../functions/utilities";

import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import StaffEditorPage from "../page-object/staff-editor.page";
import PostEditorPage from "../page-object/post-editor.page";
import PostPage from "../page-object/post.page";

//let screenshotNumber = 1;

const fs = require('fs');
let selected = 0;

test.describe("PDAFL01 - Actualizacion perfil de usuario, todos los valores bajo el límite, \
               nuevo post author encaja con nombre perfil nuevo", () => {

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
    });

    test("A: A-priori (pool), F: frontera,  L: por debajo, Low", async () => {
        //await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        console.log("The selected element is " + selected);
        //Given I log in
        await login.signInWith(Env.USER, Env.PASS);
        //When I enter the user profile settings
        await home.clickUserMenu();
        await home.clickUserProfileLink();
        await staffEditorPage.eleSaveButton;
        //When I edit the relevant fields
        await staffEditorPage.refillFullName(foundList[selected].nombre_completo)//191, no explicito pero avisa, expected 191 and no numbers
        await staffEditorPage.refillSlug(foundList[selected].nombre);//186, ni avisa pasado ese valor, ni se revienta, expected 191
        await staffEditorPage.refillEmail(foundList[selected].e_mail);//80, no explicito pero avida, formatted, expected 191
        await staffEditorPage.fillLocation(foundList[selected].ciudad);//150 any alphas, expected no limit and not numbers
        await staffEditorPage.fillWebsite(foundList[selected].url);//formatted, READS 2000 characters max from input, formats with protocol if no one thus it can indirectly exceed 2000 chars, expected 2000
        await staffEditorPage.fillFacebookProfile('https://www.facebook.com/'.concat(foundList[selected].nombre));//blocks any non fb url, but doesnt report it correctly nor regulates correctly, the actual limit is is the unique user resource url (everything after .com/), expected 2000 as a whole, if name < 2 it generates error
        await staffEditorPage.fillTwitterProfile('https://twitter.com/'.concat(foundList[selected].nombre));//allows any user as long as isnt plain twitter.com, assumes whatever is writtem is the user (autoformat), can only hold 15 id characters, ergo string length total is 39, expected 2000
        await staffEditorPage.fillBio(foundList[selected].contenido.substring(1,100));//respects 200 form, expected none
        await staffEditorPage.clickSaveButton();
        //Then the data is saved successfully
        expect(await staffEditorPage.eleSavedButton).toBeTruthy;
        await new Promise(r => setTimeout(r, 3000));
        await home.clickPostsLink();
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
        //Then Author has changed
        const postAuthor = await posts.eleLastPostAuthorSpan.textContent();
        expect(postAuthor).toContain(foundList[selected].nombre_completo);
        await new Promise(r => setTimeout(r, 3000));
    });

    test.afterAll(async () => {
        // Update profile page with clean data and delete created post
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        await new Promise(r => setTimeout(r, 2500));
        await home.clickUserMenu();
        await home.clickUserProfileLink();
        await staffEditorPage.eleSaveButton;
        await staffEditorPage.refillFullName(Env.FULL_NAME)
        await staffEditorPage.refillSlug(Env.USER_SLUG);
        await staffEditorPage.refillEmail(Env.USER);
        await staffEditorPage.fillLocation('');
        await staffEditorPage.fillWebsite('');
        await staffEditorPage.fillFacebookProfile('');
        await staffEditorPage.fillTwitterProfile('');
        await staffEditorPage.fillBio('');
        await new Promise(r => setTimeout(r, 3000));
        await staffEditorPage.clickSaveButton();
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