#!/bin/bash

config=$1

[[ ! $config =~ ^(local|stage|prod)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config: \n   · local\n   · stage\n   · prod" && exit 1;


rm -rf playwright-report/
rm -rf test-results/
rm -rf allure-report/
rm -rf allure-results/
docker compose -f "docker-compose.yml" up -d --build
docker exec playwright npm run $config
