// globalSetup.ts/js
import {FullConfig} from '@playwright/test';

async function globalTearDown(config: FullConfig) {
    console.log(`[${config.configFile}] Test TearDown`)
}

export default globalTearDown;