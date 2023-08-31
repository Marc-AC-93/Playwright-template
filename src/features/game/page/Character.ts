import {test} from "@playwright/test";

export enum Role {
    Knight = 'knight',
    Paladin =  'paladin'
}

export enum Job {
    Tester = 'tester',
    Developer = 'developer',
    ProductOwner = 'product owner',
}

export class Character {
    static role?: Role
    constructor(public name: string = 'Name',
                private _hp = 100,
                private _level = 1,
                public job?: Job) {}

    get hp(): number{
        test.step(`[Character] Get HP: ${this._hp}`, async () => {})
        return this._hp
    }

    get level(): number{
        test.step(`[Character] Get Level: ${this._level}`, async () => {})
        return this._level
    }

    set editLevel(editLevel: number){
        test.step(`[Character] Edit level: (Old Level) ${this._level} - (new level) ${this._level+editLevel}`,
            async () => {})
        this._level += editLevel
    }

    showData(){
        test.step('[Character] Display data from character (see logs)', async () => {})
        console.log(`Name: ${this.name}\nHP: ${this.hp}\nLVL: ${this.level}\nRole: ${Character.role}`)
    }
}