import {APIRequestContext, APIResponse, test} from '@playwright/test';

export class ApiExample {
    private request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }
    async postExample(): Promise<void> {
        await  test.step('Given user creates data by API post example', async ()=>{
            const response: APIResponse = await this.request.post(`url`,
                {
                    data: {key: "value"}
                });

            let responseObject: object = JSON.parse(await response.text());
            console.log(`[apiExample]\nStatus code: ${response.status()}\nResponse: `);
            console.log(responseObject);
        })
    }
}