import {APIRequestContext, test} from "@playwright/test";
import {ApiUtil} from "../../../common/utils/ApiUtil";

export class PostmanApi extends ApiUtil {
    constructor(private request: APIRequestContext,
                private postman: string ) {
        super(request)
    }

    public async whenPostRequestToEchoService(): Promise<formattedResponse>{
        return await test.step(`When echo POST request is launched`, async ():Promise<formattedResponse> => {
            return await this.post(`${this.postman}/post`, {}, {})
        })
    }

    public async whenGetRequestToEchoService(): Promise<formattedResponse>{
        return await test.step(`When echo GET request is launched`, async ():Promise<formattedResponse> => {
            return await this.get(`${this.postman}/get`, {})
        })
    }
}