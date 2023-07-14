// globalSetup.ts/js
import {FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
    console.log('[globalSetup] Starting test execution')
}

export default globalSetup;