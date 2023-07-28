import { test } from "../helper/fixtureA"
import {Language} from "../../../common/data/globalConfig/language";

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