import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page"
import PageGhostPage from "../page-object/page-ghost.page";
import PageEditorPage from "../page-object/page-editor.page";
import Env from "../util/environment";

import { test, expect } from '@playwright/test';
import Utilities from "../functions/utilities";
import RandomElement from "../util/utilsFaker";

let screenshotNumber = 1;

test.describe("DP001 - Funcionalidad Page", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let utilities: Utilities;
    let randomElement: RandomElement;
    let randomTitle: string;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let pageGhost: PageGhostPage;
    let pageEditor: PageEditorPage;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();
        utilities = new Utilities("DP001");

        //TODO GIVEN url tol login
        await page.goto(Env.BASE_URL + Env.ADMIN_SECTION);
        await page.waitForSelector("input[name='identification']");
        login = new LoginPage(page);
        home = new HomePage(page);
        pageGhost = new PageGhostPage(page);
        pageEditor = new PageEditorPage(page);
        randomElement = new RandomElement();
    });

    test("should create a page with random title", async () => {
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        console.log("Iniciando sesion...");
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await home.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        console.log("Navegando en funcionalidad pagina...");
        expect(page.url()).toContain("/#/pages");
        await pageGhost.clickNewPageLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        console.log("Creando una pagina en el editor de pagina...");
        expect(page.url()).toContain("/#/editor/page");
        randomTitle = randomElement.useFaker("#words", 20)
        await pageEditor.fillPageTitle(randomTitle);
        console.log("Ingresando titulo de pagina...");
        await pageEditor.fillPostContent("Contenido de pagina utilizando playwright");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        console.log("Ingresando contenido de pagina...");
        await pageEditor.clickPublishLink();
        await pageEditor.clickPublishButton();
        console.log("Publicando pagina...");
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        await pageEditor.clickPagesLink();
        await page.screenshot({path: utilities.generateScreenshotPath(screenshotNumber++)});
        const linkCreatedPage = await pageGhost.findPageByTitle("Titulo de pagina utilizando playwright");
        console.log("Verificando que pagina fue publicada correctamente...");
        if(linkCreatedPage != null) {
            console.log("Pagina publicada correctamente...");
        } else {
            console.log("Pagina no fue publicada...");
        }
        expect(linkCreatedPage).not.toBeNull();


    });

    test.afterAll(async () => {
        //TODO THEN I delete page in order to clean test
        const pageToDelete = await pageGhost.findPageByTitle(randomTitle);
        expect(pageToDelete).not.toBeNull();
        await pageGhost.navigateToEditionLink(pageToDelete);
        console.log("Eliminando pagina para limpiar datos creados...");
        await pageEditor.deletePage();

        await page.close();
        await context.close();
        await browser.close()
    })

});