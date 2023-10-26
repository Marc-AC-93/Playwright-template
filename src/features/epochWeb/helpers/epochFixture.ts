import {test as base} from '@playwright/test';
import {TestBase} from "../../../common/testBase";
import {EpochPage} from "../pages/EpochPage";


type MyFixtures = {
    testBase: TestBase;
    epochPage: EpochPage
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ page, context, request }, use, worker ) => {
        const testBase = new TestBase(page, context, request, worker);
        test.info().annotations.push({type: 'Environment', description: testBase.ENV});
        test.info().annotations.push({type: 'Epoch web', description: testBase.WEB_URL});
        await use(testBase);
    },
    epochPage: async ({ testBase }, use ) => {
        const epochPage = new EpochPage(testBase);
        await epochPage.givenNavigatesToEpochConverterPage();
        await use(epochPage);
    },
});
export { expect } from '@playwright/test';