import { Browser, BrowserContext, chromium, Page } from "playwright";
import HomePage from "../page-object/home.page";
import LoginPage from "../page-object/login.page";
import Env from "../util/environment";
import StaffPage from "../page-object/staff.page";
import InviteNewUserPage from "../page-object/invite-new-user.page";

import { test, expect } from '@playwright/test';
import Util from "../util/util";

let screenshotNumber = 0;
let scenarioName = 'PA017/';

test.describe("PA017 - ", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    //My pageObjects
    let login: LoginPage;
    let home: HomePage;
    let staff: StaffPage;
    let inviteNewUser: InviteNewUserPage;

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
        staff = new StaffPage(page);
        inviteNewUser = new InviteNewUserPage(page);
    });

    test("should send invitation and see error message - positive scenario", async () => {
        //TODO WHEN I log in
        await login.signInWith(Env.USER, Env.PASS);
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        //TODO WHEN I navigate to Page module
        await home.clickStaffLink();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await staff.clickRevokeLinkOfEmail("l.solier@uniandes.edu.co");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I expected that url will updated
        expect(page.url()).toContain("/#/staff");

        await staff.clickInvitePeopleButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I complete data for new User and send invitation
        await inviteNewUser.fillEmailAddress("l.solier@uniandes.edu.co");
        await inviteNewUser.selectRoleByName("Editor");
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});
        await inviteNewUser.clickSendInvitationButton();
        await page.screenshot({path: `${Env.SCREENSHOT_FOLDER_GHOST_3}${scenarioName}${Util.getScreenName(screenshotNumber++)}`});

        //TODO THEN I expected to see error message
        const isThereErrorMessage = await staff.validateErrorMessageContain("Error sending email!");
        expect(isThereErrorMessage).toBe(true);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })

});