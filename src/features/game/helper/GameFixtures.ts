import {test as base} from '@playwright/test';
import {TestBase} from "../../../common/testBase";
import {Character} from "../page/Character";


type MyFixtures = {
    testBase: TestBase;
    character: Character;
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ page, context, request }, use, worker ) => {
        const testBase = new TestBase(page, context, request, worker);
        test.info().annotations.push({type: 'Environment', description: testBase.ENV});
        test.info().annotations.push({type: 'Front-end', description: testBase.FRONT_END_URL});
        test.info().annotations.push({type: 'Back-end', description: testBase.BACK_END_URL});
        await use(await testBase);
    },
    character: async ({ testBase }, use ) => {
        const character = new Character();
        await use(character);
    },
});
export { expect } from '@playwright/test';