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
5. Install playwright in local:
   - `npm run update`
6. Install allure:
   - `npm install -g allure-commandline --save-dev`

## Test runners

### Command
```
./runTests.sh [env] [config] -t [tag]
```

#### Env
```
env: Environment where tests are launched
   · local: launched directly in your local machine.
   · docker: build test repository in docker + launch the tests in docker container.
```

#### Config
```
- config: Used config file to setup the test run
   · local: using local application
   · stage: using staging enviroenment
   · prod: using production enviroenment
```

#### Tag
```
tag: any tag to filter tests (optional), if this tag is not setup all the tests will be launched.
```

#### Example
```
./runTests.sh docker local
./runTests.sh docker stage -t game
```

### Test execution filters

Filter test using grep `npm run stage -- <test_parameter>`

Test parameters:

- show browsers: `--headed`
- filter by project: `--project=safari`
- sequential tests: `--workers=1`
- invert filter: `--grep-invert '@parallel'`
- regular expressions: `-g "(?=.*@parallel)((?=.*@regression))"`
- combined regular expressions: `-g "(?=.*@parallel)((?=.*@regression)|(?=.*@$param))"`
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
