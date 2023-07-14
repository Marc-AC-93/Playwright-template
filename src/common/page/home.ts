import {TestBase, test, Page} from "../testBase";

export class Home {
    private testBase: TestBase;
    private page: Page;

    constructor(testBase: TestBase) {
        this.testBase = testBase;
        this.page = testBase.page;
    }

    async navigateToHomelPage(): Promise<void> {
        await test.step('When user navigates to home page', async () => {
            await this.page.goto(this.testBase.globalConfig.FRONT_END_URL);
            await this.page.content();
        })
    }
}