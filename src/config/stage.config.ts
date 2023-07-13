import { defineConfig, devices } from '@playwright/test';
require('dotenv').config({ path: `${__dirname}/env/prod.env` });


export default defineConfig({
    testDir: '../features',
    timeout: Number(process.env.TEST_TIME_OUT),
    expect: {
        timeout: 30000
    },
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html', { open: 'on-failure' }], ['line'],
        ["allure-playwright",
            {detail: false,
                suiteTitle: true,
                environmentInfo: {
                    NODE_VERSION: process.version,
                    OS: process.platform,
                    ENV: process.env.ENV,
                    BACK_END: process.env.BACK_END_URL,
                    FRONT_END: process.env.FRONT_END_URL,
                }}]],
    globalSetup: require.resolve('./testSetup/globalSetup'),
    globalTeardown: require.resolve('./testSetup/globalTearDown'),

    use: {
        actionTimeout: 0,
        trace: 'on',
        video: 'off',
    },

    projects: [
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'safari',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'MobileChrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'MobileSafari',
            use: { ...devices['iPhone 13'] },
        },
    ],
});
