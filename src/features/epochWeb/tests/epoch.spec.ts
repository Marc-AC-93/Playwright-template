import {test} from "../helpers/epochFixture";


test.describe("Epoch", ()=>{
    const testData = ["1698210611", "1698211611"]

    testData.forEach( epoch => {
        test(`Epoch '${epoch}' conversion from timestamp to human date @web @epoch`,
            async ({epochPage}) => {
                await epochPage.whenTypesAnEpoch(epoch)
                await epochPage.thenVerifiesTheEpochConversionResult()
        });
    })
})