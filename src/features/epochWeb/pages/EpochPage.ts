import {expect, test, TestBase} from "../../../common/testBase";

export class EpochPage {
    constructor(
        private testBase: TestBase,
        private page = testBase.page,
        private acceptCookies = page.locator("//button[contains(@class, 'fc-cta-consent')]"),
        private epochInput = page.locator("//*[@id='ecinput']"),
        private epochConverterBtn = page.locator("//*[@id='ef']//button[@type='submit']"),
        private epochResultBox = page.locator("//*[@id='result1']")
    ) {
    }
    async givenNavigatesToEpochConverterPage(){
        await test.step(`Given navigates to epoch web converter page`, async () => {
            await this.page.goto(this.testBase.WEB_URL)
            await this.acceptCookies.click()
            await this.page.waitForLoadState()
        })
    }

    async whenTypesAnEpoch(epochInSeconds: string): Promise<void>{
        await test.step(`When types the epoch '${epochInSeconds}' and clicks to convert to human date`, async () => {
            await this.epochInput.fill(epochInSeconds)
            await this.epochConverterBtn.click()
        })
    }

    async thenVerifiesTheEpochConversionResult(): Promise<void>{
        await test.step(`Then validates the epoch result is displayed`, async () => {
            await expect(this.epochResultBox).toBeVisible();
        })
    }
}