import {TestBase, test} from "../../../common/testBase";

export class PageA {
    //common
    private testBase: TestBase;

    constructor(testBase: TestBase) {
        this.testBase = testBase;
    }

    async given(): Promise<void> {
        await test.step('Given', async () => {
            this.testBase.createLog("Given");
        })
    }
    async when(): Promise<void> {
        await test.step('When', async () => {
            this.testBase.createLog("When");
        })
    }
    async then(): Promise<void> {
        await test.step('Then', async () => {
            this.testBase.createLog("Then");
        })
    }
}