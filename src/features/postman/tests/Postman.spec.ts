import { test } from "../helpers/PostmanFixture"
import {Language} from "../../../common/testData/testConfig/Language";

test.describe( "Postman", ()=>{
    test('Echo post - OK @api', async ({ verifications, postmanApi }) => {
        let response: formattedResponse = await postmanApi.whenPostRequestToEchoService()
        await verifications.thenStatusCodeToBeEqual(response, 200)

        response = await postmanApi.whenGetRequestToEchoService();
        await verifications.thenStatusCodeToBeEqual(response, 200)
        });
});