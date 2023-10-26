import {EnvType} from "./EnvType";


export abstract class GlobalConfig {
    readonly ENV: string = process.env.ENV ? process.env.ENV.toLowerCase() : '';
    readonly WEB_URL: string = process.env.EPOCH_CONVERTER_WEB ? process.env.EPOCH_CONVERTER_WEB.toLowerCase() : '';
    readonly API_URL: string = process.env.POSTMAN_API ? process.env.POSTMAN_API.toLowerCase() : '';
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