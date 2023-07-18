# PLAYWRIGHT


## Objective

Automate end-to-end test scenarios.


## Technical details

- **Language:** Typescript
- **Framework:** Playwright
    - **Test runner:** managed internally by config files in playwright
    - **Browsers:** Chrome, Safari, mobile chrome, mobile safari.
    - **Reporter:** Playwright / Allure

## Project structure

- **common:** Common files to be reused into all domains/features like api/data/pages/utils
- **configs:** Files to setup the environment according the execution
- **features:** Folders with specific tests and steps

## Setup

### Preconditions
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [docker desktop](https://www.docker.com/products/docker-desktop/)


### Steps to install the repository

1. Open the terminal
2. `cd <your_desired_folder>`
3. `git clone git@github.com:Marc-AC-93/Playwright-template.git`
4. Create your local env files:
   - src/configs/local.config.ts
   - src/configs/env/local/local.env
5. `npx playwright install`
6. Install allure:
   - `npm install -g allure-commandline --save-dev`

## Test runners

- **Locally:** 
```
npm run [config]
- config: local|stage|prod
```

- **Docker:** local
```
npm run docker:build
npm run docker:run_[config]
- config: local|stage|prod
```

- **Docker:** CI
```
./runPlaywrightDocker [config]
- config: local|stage|prod
```

### Test execution filters

Filter test using grep `npm run stage -- <test_parameter>`

Test parameters:

- show browsers: `--headed`
- filter by project: `--project=safari`
- sequential tests: `--workers=1`
- invert filter: `--grep-invert '@parallel'`
- regular expressions: `-g '(?=.*@parallel)((?=.*@regression))'`
- combined regular expressions: `-g '(?=.*@parallel)((?=.*@regression)|(?=.*@$param))'`
- sequential test with filters: `--workers=1 --project=safari -g '@param|@regression' --grep-invert '@parallel'`


## Test reports

- **Playwright:** Technical report for QA/DEVs
```
npm run report
```

- **Allure:** Business report for PO/PM or any project stakeholder
```
npm run allure
```

## References

- Playwright: [Documentation](https://playwright.dev/docs/intro)
