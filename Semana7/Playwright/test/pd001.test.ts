import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import StaffEditorPage from "../page-object/staff-editor.page";
//import Utilities from "../functions/utilities";

//let screenshotNumber = 1;

const fs = require('fs');
let selected = 0;

test.describe("PDxxx30 - Probando formulario perfil de usuario, todos los valores bajo el límite", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    //let utilities: Utilities;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let pageGhost: PageGhostPage;
    let pageEditor: PageEditorPage;
    let staffEditorPage: StaffEditorPage;

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
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
        staffEditorPage = new StaffEditorPage(page);
        selected = Math.floor(Math.random() * 500)-1;
    });

    test("P: Pool (a-priori), F: frontera, por debajo", async () => {
        console.log(foundList[selected].nombre);
        //await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});

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
        await staffEditorPage.refillFullName(foundList[selected].nombre_completo)
        await staffEditorPage.refillSlug(foundList[selected].nombre);
        await staffEditorPage.refillEmail(foundList[selected].e_mail);
        await staffEditorPage.fillLocation(foundList[selected].palabra);//crear lugar en pool
        await staffEditorPage.fillWebsite(foundList[selected].url);
        await staffEditorPage.fillFacebookProfile('https://www.facebook.com/'.concat(foundList[selected].nombre));//clear
        await staffEditorPage.fillTwitterProfile('https://twitter.com/'.concat(foundList[selected].nombre));//clear
        await staffEditorPage.fillBio(foundList[selected].contenido);//clear
        await staffEditorPage.clickSaveButton();
        expect(await staffEditorPage.eleSavedButton).toBeTruthy;
        await new Promise(r => setTimeout(r, 3000));
    });

    test.afterAll(async () => {
        // Update profile page with clean data
        //await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        //await home.clickUserMenu();
        //await home.clickUserProfileLink();
        // staffEditorPage.eleSaveButton;
        await staffEditorPage.refillFullName(Env.FULL_NAME)
        await staffEditorPage.refillSlug(Env.USER_SLUG);
        await staffEditorPage.refillEmail(Env.USER);
        await staffEditorPage.fillLocation('');//await staffEditorPage.fillLocation(Env.LOCATION);//clear
        await staffEditorPage.fillWebsite('');//clear
        await staffEditorPage.fillFacebookProfile('');//clear
        await staffEditorPage.fillTwitterProfile('');//clear
        await staffEditorPage.fillBio('');//clear
        await new Promise(r => setTimeout(r, 10000));
        await staffEditorPage.clickSaveButton();
        expect(await staffEditorPage.eleSavedButton).toBeTruthy;
        await page.close();
        await context.close();
        await browser.close();
    })

});