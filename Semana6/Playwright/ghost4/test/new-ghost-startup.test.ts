import { Browser, BrowserContext, chromium, Page } from "playwright";
import Env from "../util/environment";
import { test } from '@playwright/test';

test.describe("Auto-setear ghost instalado, para v4.44", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll( async() => {
        browser = await chromium.launch({
            headless: Env.HEADLESS
        });
        context = await browser.newContext({ viewport: { width: 1200, height: 600 } });
        page = await context.newPage();

    });

    test("should set up Ghost", async () => {
        await page.goto('http://localhost:2368/ghost');
        await page.fill('input[name="blog-title"]', 'SitioPrueba');
        await page.fill('input[name="name"]', 'Pepito Admin');
        await page.fill('input[name="email"]', 'c.toros@uniandes.edu.co');
        await page.fill('input[name="password"]', 'WhatABeautifulDay');
        await page.click("//span[contains(text(),'Create account & start publishing')]");
        
        //alt
        /*await page.type('input[name="blog-title"]', 'SitioPrueba');
        await page.type('input[name="name"]', 'Pepito Admin');
        await page.type('input[name="email"]', 'c.toros@uniandes.edu.co');
        await page.type('input[name="password"]', 'WhatABeautifulDay');
        await page.locator('text=Create account & start publishing →').click();*/
        await new Promise(r => setTimeout(r, 3000));
        
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })

});