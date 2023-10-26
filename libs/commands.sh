#!/bin/bash

ACTION=$1

[[ $(uname -a) != *"Darwin"* ]] && sudo=sudo;

case $ACTION in
  kill) COMMAND="$sudo docker stop playwrightDemo && $sudo docker rm playwrightDemo" ;;
  build) COMMAND="$sudo docker compose -f docker-compose.yml up -d --build";;
  clean) COMMAND="$sudo rm -rf allure-report/* && $sudo rm -rf allure-results/* && $sudo rm -rf test-results/* && $sudo rm -rf test-results/*/ && $sudo rm -rf playwright-report && $sudo rm -rf dist";;
  setup) COMMAND="npm install @playwright/test@latest && npx playwright install && echo '--------------------' && echo '| Playwright setup |' && echo '--------------------'  && npx @playwright/test --version"
esac

eval "$COMMAND"