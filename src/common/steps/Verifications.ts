import {expect, test} from "@playwright/test";

export class Verifications {
    constructor() {
    }

    public async thenStatusCodeToBeEqual(response:formattedResponse, expectedStatusCode: number): Promise<void>{
        await test.step(`Then asserts the status code received (${response.statusCode}) is equal than expected (${expectedStatusCode})`, async () => {
            expect(response.statusCode).toBe(expectedStatusCode)
        })
    }
}