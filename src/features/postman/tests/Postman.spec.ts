import { test } from "../helpers/PostmanFixture"
import {Language} from "../../../common/testData/testConfig/Language";

test.describe( "Postman", ()=>{
    test('Echo post - OK @api', async ({ apiCommon, postmanApi }) => {
        let response: formattedResponse = await postmanApi.whenPostRequestToEchoService()
        await apiCommon.thenStatusCodeToBeEqual(response, 200)

        response = await postmanApi.whenGetRequestToEchoService();
        await apiCommon.thenStatusCodeToBeEqual(response, 200)
        });
});