#!/bin/bash

config=$1

[[ ! $config =~ ^(local|stage|prod)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config: \n   · local\n   · stage\n   · prod" && exit 1;


rm -rf playwright-report/
rm -rf test-results/
rm -rf allure-report/
rm -rf allure-results/
echo $config
docker compose -f "docker-compose.yml" up -d --build
docker exec -it playwright bash -c "npm run $config"
docker cp playwright:/playwright/test-results .
docker cp playwright:/playwright/playwright-report .
docker cp playwright:/playwright/allure-results .