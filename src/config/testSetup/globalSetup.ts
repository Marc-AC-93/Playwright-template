// globalSetup.ts/js
import {FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
    console.log(`[${config.configFile}] Test Setup`)
}

export default globalSetup;