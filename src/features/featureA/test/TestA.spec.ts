import { test } from "../helper/FixtureA"
import {Language} from "../../../common/testData/testConfig/Language";

test.describe( "Feature A", ()=>{
    const scenarios = [
        { lang: Language.En},
        { lang: Language.Es}]

    scenarios.forEach( testData => {
        test(`Verify feature A in language '${testData.lang}' @lang`,
            async ({home, pageA}) => {
            await pageA.givenAcceptsCookies();
            await pageA.whenUserSearchText('QA');
            await pageA.then();
            });
    });
});