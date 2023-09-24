import {EnvType} from "./EnvType";


export abstract class GlobalConfig {
    readonly ENV: string = process.env.ENV ? process.env.ENV.toLowerCase() : '';
    readonly FRONT_END_URL: string = process.env.FRONT_END_URL ? process.env.FRONT_END_URL.toLowerCase() : '';
    readonly BACK_END_URL: string = process.env.BACK_END_URL ? process.env.BACK_END_URL.toLowerCase() : '';
    protected constructor(){
        this.checkTestConfig(this.ENV)
    }

    checkTestConfig(env: string|undefined|null) {
        if( !env || env === ''){
            throw new Error(`[Error] ENV: '${env}' cannot be undefined`);
        }
        if( !(Object.values(EnvType).toString().includes(env)) ){
            throw new Error(`[Error] ENV: '${env}' not valid`);
        }
    }
}