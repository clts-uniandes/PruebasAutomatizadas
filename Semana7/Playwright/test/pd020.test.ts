import { Browser, BrowserContext, chromium, Page } from "playwright";
import { test, expect } from '@playwright/test';
import Env from "../util/environment";
import RandomElement from "../util/utilsFaker";
import {ProfileFields} from "../util/profile.enum";
import {FakerCategories} from "../util/faker.enum";
import PseudoRandomData from "../util/pseudo-random-data";
//import Utilities from "../functions/utilities";

import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page";
import StaffEditorPage from "../page-object/staff-editor.page";
import PostEditorPage from "../page-object/post-editor.page";
import PostPage from "../page-object/post.page";
import AuthorPage from "../page-object/author.page";

//let screenshotNumber = 1;
let pseudoRandomData: PseudoRandomData = new PseudoRandomData();
let formDataList = pseudoRandomData.getProfileDataListWithFullData();
let selected = 0;

test.describe("PDPRX20 - Actualizacion perfil de usuario, todos los valores bajo el límite pero location no-ascii/Unicode, \
               nuevo post author sin problemas y la location es la correcta", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let randomElement: RandomElement;
    //let utilities: Utilities;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let staffEditorPage: StaffEditorPage;
    let posts: PostPage;
    let postEditor: PostEditorPage;
    let authorPage: AuthorPage;
    
    //Random Elements
    let randomFullName: string;
    let randomEmail: string;
    let randomLocation: string;
    let randomWebsite: string;
    let randomFacebookProfile: string;
    let randomTwitterProfile: string;
    let randomBio: string;
    let randomSlug: string;
    
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
        authorPage = new AuthorPage(page);
        randomElement = new RandomElement();
        selected = Math.floor(Math.random() * 49);
        
        //Random data pool extraction
        randomFullName = formDataList[selected].get(ProfileFields.FULL_NAME);
        randomSlug = formDataList[selected].get(ProfileFields.NAME);
        randomEmail = formDataList[selected].get(ProfileFields.E_MAIL);
        randomLocation = formDataList[selected].get(ProfileFields.LOCATION)+"ÅÍÎÏ˝ÓÔÒÚÆ☃";
        randomWebsite = formDataList[selected].get(ProfileFields.WEBSITE);
        randomFacebookProfile = formDataList[selected].get(ProfileFields.FACEBOOK_PROFILE);
        randomTwitterProfile = formDataList[selected].get(ProfileFields.TWITTER_PROFILE);
        randomBio = formDataList[selected].get(ProfileFields.BIO_PROFILE);
    });

    test("P: Pseudorandom (pool) dynamic, R: Robustez, unicode", async () => {
        console.log("The selected element is " + selected);
        console.log("The generated pool drawn full name is: " + randomFullName);
        console.log("The generated pool drawn slug is: " + randomSlug);
        console.log("The generated pool drawn e-mail is: " + randomEmail);
        console.log("The generated pool drawn location is: " + randomLocation);
        console.log("The generated pool drawn website is: " + randomWebsite);
        console.log("The generated pool drawn facebook profile is: " + randomFacebookProfile);
        console.log("The generated pool drawn twitter profile is: " + randomTwitterProfile);
        console.log("The generated pool drawn bio fragment is: " + randomBio);
        //Given I log in
        await login.signInWith(Env.USER, Env.PASS);
        //When I enter the user profile settings
        await home.clickUserMenu();
        await home.clickUserProfileLink();
        await staffEditorPage.eleSaveButton;
        //When I edit the relevant fields
        await staffEditorPage.refillFullName(randomFullName)
        await staffEditorPage.refillSlug(randomSlug);
        await staffEditorPage.refillEmail(randomEmail);
        await staffEditorPage.fillLocation(randomLocation);
        await staffEditorPage.fillWebsite(randomWebsite);
        await staffEditorPage.fillFacebookProfile(randomFacebookProfile);
        await staffEditorPage.fillTwitterProfile(randomTwitterProfile);
        await staffEditorPage.fillBio(randomBio);
        await staffEditorPage.clickSaveButton();
        //Then the data is saved successfully
        expect(await staffEditorPage.eleSavedButton).toBeTruthy;
        await new Promise(r => setTimeout(r, 2000));
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
        await page.goto(Env.BASE_URL + '/author/' + randomSlug);
        //Then the profile can be seen
        const pageStatus = await authorPage.eleNotFoundHeader;
        expect(pageStatus).toBeFalsy();
        //Then the location can be seen
        const authorLocation = await authorPage.eleLocationDiv.textContent();
        expect(authorLocation).toContain(randomLocation);
        await new Promise(r => setTimeout(r, 2000));
        //Then the post can be seen
        const lastArticleTitle = await authorPage.eleRecentArticleHeader.textContent();
        expect(lastArticleTitle).toContain("PostObservado");
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