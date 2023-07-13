// @ts-nocheck
import {test, Page, Locator, BrowserContext, expect, APIRequestContext} from '@playwright/test';
import {GlobalConfig} from "./data/globalConfig/globalTestConfig";


export class TestBase {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly request: APIRequestContext;
    readonly globalConfig: GlobalConfig;

    constructor(page: Page, context: BrowserContext, request: APIRequestContext){
        this.page = page;
        this.context = context;
        this.request = request;
        this.globalConfig = new GlobalConfig();
    }

    private async openNewTab(element: Locator): Promise<void> {
        await test.step(`When user clicks on element ${element} to open a new tab`, async () => {
            let pagePromise;
            let newPage: Page;

            pagePromise = this.context.waitForEvent('page');
            await element.click();
            newPage = await pagePromise;
            await newPage.content();
        });
    }

    async waitForAttributeToChange(element: Locator, attribute: string, newValue: string): Promise<void>{
        await test.step(`When user waits until new attribute is loaded: ${newValue}`,
            async () => {
            await expect(element).toHaveAttribute(attribute, newValue);
        })
    }

    async getNetworkData(element: Locator, requestPath: RegExp): Promise<object>{
        await test.step(`When user waits until request is captured on network: ${requestPath}`,
            async () => {
            const responsePromise = this.page.waitForResponse(requestPath);
            await element.click();
            return  await responsePromise;
        })
    }
}

export { test, Page, Locator, BrowserContext, expect, APIRequestContext } from '@playwright/test';