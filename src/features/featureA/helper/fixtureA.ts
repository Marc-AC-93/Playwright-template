import {test as base} from '@playwright/test';
import {TestBase} from "../../../common/testBase";
import {UserData} from "../../../common/data/user/userData";
import {RandomData} from "../../../common/utils/randomData";
import {Home} from "../../../common/page/home";
import {PageA} from "../page/pageA";


type MyFixtures = {
    testBase: TestBase;
    userData: UserData;
    home: Home;
    pageA: PageA;
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ page, context, request }, use, worker ) => {
        const testBase = new TestBase(page, context, request, worker);
        test.info().annotations.push({type: 'Environment', description: testBase.ENV});
        test.info().annotations.push({type: 'Front-end', description: testBase.FRONT_END_URL});
        test.info().annotations.push({type: 'Back-end', description: testBase.BACK_END_URL});
        await use(await testBase);
    },
    userData: async ({  }, use, worker) => {
        const userData = new UserData(new RandomData().randomEmail(worker.workerIndex.toString()));
        await use(await userData);
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