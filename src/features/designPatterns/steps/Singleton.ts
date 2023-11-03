export enum ValueTypes {
    valueA="A",
    valueB="B",
    valueC="C"
}
export class Singleton{
    private static instance: Singleton;
    public values: ValueTypes[] = []
    private constructor() {}
    public static getInstance(): Singleton {
        if(!(Singleton.instance)){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
    public async addValue(valueType: ValueTypes): Promise<void>{
        this.values.push(valueType)
    }

    public async removeLastElement(): Promise<void>{
        this.values.pop()
    }
}