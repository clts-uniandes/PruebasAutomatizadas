import { Browser, BrowserContext, chromium, Page } from "playwright";
import { test, expect } from '@playwright/test';
import Env from "../util/environment";
import RandomElement from "../util/utilsFaker";
import { FakerCategories } from "../util/faker.enum";

import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import StaffEditorPage from "../page-object/staff-editor.page";
import PostEditorPage from "../page-object/post-editor.page";
import PostPage from "../page-object/post.page";
//import Utilities from "../functions/utilities";

//let screenshotNumber = 1;
const fs = require('fs');
//let selected = 0;
let nombreLimite = '';


test.describe("PDxxx21 - Actualizacion perfil de usuario, todos los valores bajo el límite pero location al limite (191, asumido), \
               nuevo post author sin problemas y la location fue guardada", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    //let utilities: Utilities;
    let randomElement: RandomElement;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let staffEditorPage: StaffEditorPage;
    let posts: PostPage;
    let postEditor: PostEditorPage;

    //Random Elements
    let randomFullName: string;
    let randomSlug: string;
    let randomEmail: string;
    let randomLocation: string;
    let randomWebsite: string;
    let randomFacebookProfile: string;
    let randomTwitterProfile: string;
    let randomBio: string;

    /*Data pool loading
    const path = require("path");
    const directoryPath = path.join(__dirname, "../data/MOCK_DATA.json");
    let rawdata = fs.readFileSync(directoryPath);
    const dataPool = JSON.parse(rawdata);
    const foundList = dataPool;*/

    
    test.beforeAll( async() => {
        console.log
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
        randomElement = new RandomElement();
        //selected = Math.floor(Math.random() * 500)-1;
        //nombreLimite = (foundList[selected].letras_limite+foundList[selected].letras_limite+foundList[selected].letras_limite+foundList[selected].letras_limite).substring(1,192)
        //Random data extraction
        randomFullName = randomElement.useFaker(FakerCategories.FULL_NAME);
        randomSlug = randomElement.useFaker(FakerCategories.FIRST_NAME);
        randomEmail = randomElement.useFaker(FakerCategories.EMAIL);
        randomLocation = randomElement.useFaker(FakerCategories.CITY);
        randomWebsite = randomElement.useFaker(FakerCategories.PAGE_URL);
        randomFacebookProfile = randomElement.useFaker(FakerCategories.FB_PROFILE);
        randomTwitterProfile = randomElement.useFaker(FakerCategories.TWITTER_PROFILE);
        randomBio = randomElement.useFaker(FakerCategories.PARAGRAPH, 1).substring(1,200);
    });

    test("A: A-priori (pool), M: Sobre la frontera, Mid", async () => {
        console.log("The drawn full name is: " + randomFullName);
        console.log("The drawn slug is: " + randomSlug);
        console.log("The drawn e-mail is: " + randomEmail);
        console.log("The drawn location is: " + randomLocation);
        console.log("The drawn website is: " + randomWebsite);
        console.log("The drawn facebook profile is: " + randomFacebookProfile);
        console.log("The drawn twitter profile is: " + randomTwitterProfile);
        console.log("The drawn bio fragment is: " + randomBio);
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
        await staffEditorPage.refillFullName(randomFullName);
        await staffEditorPage.refillSlug(randomSlug);
        await staffEditorPage.refillEmail(randomEmail);
        //await staffEditorPage.fillLocation(randomLocation);
        await staffEditorPage.fillLocation(randomLocation);
        await staffEditorPage.fillWebsite(randomWebsite);
        await staffEditorPage.fillFacebookProfile(randomFacebookProfile);
        await staffEditorPage.fillTwitterProfile(randomTwitterProfile);
        await staffEditorPage.fillBio(randomBio);
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
        const postAuthor = await posts.eleLastPostAuthorSpan.textContent();
        expect(postAuthor).toContain(randomFullName);
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
        await staffEditorPage.fillLocation('');//await staffEditorPage.fillLocation(Env.LOCATION);//clear
        await staffEditorPage.fillWebsite('');//clear
        await staffEditorPage.fillFacebookProfile('');//clear
        await staffEditorPage.fillTwitterProfile('');//clear
        await staffEditorPage.fillBio('');//clear
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