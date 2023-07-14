import {test as base} from '@playwright/test';
import {TestBase} from "../../../common/testBase";
import {Home} from "../../../common/page/home";
import {PageA} from "../page/pageA";

type MyFixtures = {
    testBase: TestBase;
    home: Home;
    pageA: PageA;
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ page, context, request }, use ) => {
        const testBase = new TestBase(page, context, request);
        test.info().annotations.push({type: 'Environment', description: testBase.globalConfig.ENV});
        test.info().annotations.push({type: 'Front-end', description: testBase.globalConfig.FRONT_END_URL});
        test.info().annotations.push({type: 'Back-end', description: testBase.globalConfig.BACK_END_URL});
        await use(await testBase);
    },
    home: async ({ testBase }, use ) => {
        const home = new Home(testBase);
        await home.navigateToHomelPage();
        await use(home);
    },
    pageA: async ({ testBase }, use ) => {
        const pageA = new PageA(testBase);
        await use(pageA);
    },
});
export { expect } from '@playwright/test';