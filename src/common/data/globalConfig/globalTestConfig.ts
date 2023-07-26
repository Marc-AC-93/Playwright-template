import {EnvType} from "./envType";

function checkTestConfig(env: string|undefined|null) {
    if( !env || env === ''){
        throw new Error(`[Error] ENV: '${env}' cannot be undefined`);
    }
    if( !(Object.values(EnvType).toString().includes(env)) ){
        throw new Error(`[Error] ENV: '${env}' not valid`);
    }
}

export class GlobalConfig {
    public ENV: string = process.env.ENV ? process.env.ENV.toLowerCase() : '';
    public FRONT_END_URL: string = process.env.FRONT_END_URL ? process.env.FRONT_END_URL.toLowerCase() : '';
    public BACK_END_URL: string = process.env.BACK_END_URL ? process.env.BACK_END_URL.toLowerCase() : '';
    constructor(){
        checkTestConfig(this.ENV);
    }
}