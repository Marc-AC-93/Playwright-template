import {test as base} from '@playwright/test';
import {TestBase} from "../../../common/testBase";
import {PostmanApi} from "../postmanSteps/postmanApi";
import {ApiCommon} from "../../../common/apiSteps/ApiCommon";


type MyFixtures = {
    testBase: TestBase;
    postmanApi: PostmanApi;
    apiCommon: ApiCommon
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ page, context, request }, use, worker ) => {
        const testBase = new TestBase(page, context, request, worker);
        test.info().annotations.push({type: 'Environment', description: testBase.ENV});
        test.info().annotations.push({type: 'Postman API', description: testBase.API_URL});
        await use(testBase);
    },
    postmanApi: async ({ testBase }, use ) => {
        const postmanApi = new PostmanApi(testBase.request, testBase.API_URL);
        await use(postmanApi);
    },
    apiCommon: async ({  }, use ) => {
        const apiCommon = new ApiCommon();
        await use(apiCommon);
    },
});
export { expect } from '@playwright/test';