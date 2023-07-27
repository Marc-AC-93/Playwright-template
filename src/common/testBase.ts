import {test, Page, Locator, BrowserContext, expect, APIRequestContext, TestInfo} from '@playwright/test';
import {GlobalConfig} from "./data/globalConfig/globalTestConfig";


export class TestBase extends GlobalConfig{
    constructor(
        readonly page: Page,
        readonly context: BrowserContext,
        readonly request: APIRequestContext,
        readonly workerInfo: TestInfo,
        )
    {
        super()
    }

    async createLog(text: string){
        console.log(`[${this.workerInfo.project.name}] ${text}`);
    }

    async getNewTab(element: Locator): Promise<Page> {
        let pagePromise;
        let newPage: Page;

        pagePromise = this.context.waitForEvent('page');
        await element.click();
        newPage = await pagePromise;
        await newPage.content();
        return newPage;
    }

    async openNewTab(element: Locator): Promise<void> {
        await test.step(`When user clicks on element ${element} to open a new tab`, async () => {
            await this.getNewTab(element);
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
        return {};
    }
}

export { test, Page, Locator, BrowserContext, expect, APIRequestContext } from '@playwright/test';