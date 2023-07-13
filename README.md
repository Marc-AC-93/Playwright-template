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

```
cd your_desired_folder
git clone git@github.com:Marc-AC-93/Playwright-template.git
# create your local env files
# src/configs/local.config.ts
# src/configs/env/local/local.env

```

## Test runners
- **Locally:** without using docker process
```
bash playwrightLauncher.sh [param]
- param: values allowed
```


## References

- Playwright: [Documentation](https://playwright.dev/docs/intro)