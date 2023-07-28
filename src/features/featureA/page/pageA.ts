import {TestBase, test, Page, Locator, expect} from "../../../common/testBase";

export class PageA {
    constructor(
        readonly testBase: TestBase,
        private page: Page = testBase.page,
        private acceptCookiesBtn: Locator = page.locator('#L2AGLb'),
        private searchBarInput: Locator = page.locator('//*[@name="q"]'),
    ) {}

    async givenAcceptsCookies(): Promise<void> {
        await test.step('Given user accepts the cookies', async () => {
            await this.acceptCookiesBtn.click()
        })
    }
    async whenUserSearchText(text: string = 'Barcelona'): Promise<void> {
        await test.step(`When user search for ${text}`, async () => {
            await this.searchBarInput.type(text)

        })
    }
    async then(): Promise<void> {
        await test.step('Then', async () => {
        })
    }
}