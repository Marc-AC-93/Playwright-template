#!/bin/bash

env=$1
config=$2

shift 2

while getopts t: flag;
do
    case $flag in
        t)
            tag=$(echo "${OPTARG}");;
    esac
done

[[ ! $env =~ ^(local|docker)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config:\n   · local\n   · docker" && exit 1;
[[ ! $config =~ ^(local|stage|prod)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config:\n   · local\n   · stage\n   · prod" && exit 2;
[[ ! -z "$tag" ]] && filter="-g @$tag" || filter=""

if [ $env == "docker" ]; then
  npm run docker:build
  npm run docker:run_$config -- $filter
else
  npm run $config -- $filter
fi