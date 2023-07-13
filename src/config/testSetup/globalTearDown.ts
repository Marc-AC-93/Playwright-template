// globalSetup.ts/js
import {FullConfig} from '@playwright/test';

async function globalTearDown(config: FullConfig) {
    console.log('[globalTearDown] Finishing test execution')
}

export default globalTearDown;