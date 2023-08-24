export enum Role {
    Strike = 'strike',
    Defense =  'defense'
}

export enum Job {
    Tester = 'tester',
    Developer = 'developer',
    ProductOwner = 'product owner',
}

export class Character {
    static role: Role
    constructor(public name: string = 'Name',
                private _hp = 100,
                private _level = 0,
                public job?: Job) {}

    get hp(): number{
        return this._hp
    }

    get level(): number{
        return this._level
    }

    set editLevel(editLevel: number){
        this._level += editLevel
    }

    updateTeam(rol: Role){
        Character.role = rol
    }

    showData(){
        console.log(`Name: ${this.name}\nHP: ${this.hp}\nLVL: ${this.level}\nRole: ${Character.role}`)
    }
}