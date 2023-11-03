import {expect, test} from "../helpers/DesignPatternFixtures"
import {Singleton, ValueTypes} from "../steps/Singleton";

test.describe( "Design Patterns: singleton", ()=>{
    test('Instance not duplicated @singleton', async ({  }) => {
        let s1 = await test.step(`Given instance1 is created`, async ():Promise<Singleton> => {
            return Singleton.getInstance()
        })

        let s2 = await test.step(`When instance2 is created`, async ():Promise<Singleton> => {
            return Singleton.getInstance()
        })
        await test.step(`Then instance1 is the same one than instance2`, async () => {
            expect(s1).toBe(s2)
        })
    })

    test('Update value via different instances @singleton', async ({  }) => {
        let s1 = await test.step(`Given instance1 is created`, async ():Promise<Singleton> => {
            return Singleton.getInstance()
        })

        let s2 = await test.step(`Given instance2 is created`, async ():Promise<Singleton> => {
            return Singleton.getInstance()
        })

        await test.step(`When instance1 adds a value in the Singleton class`, async () => {
            await s1.addValue(ValueTypes.valueA)
        })
        await test.step(`Then instance2 gets the value in the list`, async () => {
            expect(s2.values[0]).toBe(ValueTypes.valueA)
        })
    })
});