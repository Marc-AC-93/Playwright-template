#!/bin/bash

config=$1

[[ ! $config =~ ^(local|stage|prod)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config: \n   · local\n   · stage\n   · prod" && exit 1;

npm run docker:build
npm run docker:run_$config