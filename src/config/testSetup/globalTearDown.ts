// globalSetup.ts/js
import {FullConfig} from '@playwright/test';

async function globalTearDown(config: FullConfig) {
    const fileNameIndex: number = config.configFile?.lastIndexOf('/') ?? 0;
    const fileName: string | undefined = config.configFile?.substring(fileNameIndex +1)

    console.log(`[${fileName}] Test TearDown`)
}

export default globalTearDown;