import { test } from "../helper/GameFixtures"
import {Character, Role} from "../page/Character";

test.describe( "Character @game", ()=>{
    test(`Verify character data`,
        async ({character}) => {
            character.editLevel = 10
            Character.role = Role.Knight;
            character.showData()
        });
});