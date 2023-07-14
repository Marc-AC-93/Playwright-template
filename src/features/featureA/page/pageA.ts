import {TestBase, test} from "../../../common/testBase";

export class PageA {
    //common
    private testBase: TestBase;

    constructor(testBase: TestBase) {
        this.testBase = testBase;
    }

    async given(): Promise<void> {
        await test.step('Given', async () => {
        })
    }
    async when(): Promise<void> {
        await test.step('When', async () => {
        })
    }
    async then(): Promise<void> {
        await test.step('Then', async () => {
        })
    }
}