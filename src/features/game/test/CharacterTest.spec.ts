import { test } from "../helper/GameFixtures"
import {Language} from "../../../common/data/globalConfig/Language";

test.describe( "Character @game", ()=>{
    test(`Verify character data`,
        async ({character}) => {
            character.editLevel = 10
            character.showData()
        });
});