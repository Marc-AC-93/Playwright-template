#!/bin/bash

env=$1
config=$2

shift 2

while getopts :p:t:r: flag; do
    case $flag in
        p)
          project=$(echo "${OPTARG}");;
        t)
          tag=$(echo "${OPTARG}");;
        r)
          reporter=$(echo "${OPTARG}");;
    esac
done

calculate_time_difference() {
    timestamp1="$1"
    timestamp2="$2"
    difference=$((timestamp2 - timestamp1))

    hours=$((difference / 3600))
    minutes=$(( (difference % 3600) / 60 ))
    seconds=$((difference % 60 ))

    echo "[Execution time] ${hours}h:${minutes}m:${seconds}s"
}

browser="--project=chrome --project=safari --project=mobileChrome --project=mobileSafari"

[[ ! $env =~ ^(local|docker)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config:\n   · local\n   · docker" && exit 1;
[[ ! $config =~ ^(local|stage|prod)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid config:\n   · local\n   · stage\n   · prod" && exit 2;
[[ ! -z $tag ]] && filter="-g (?=.*@$tag)" || filter=""
if [[ ! -z $project ]]; then
  [[ ! $project =~ ^(worker|chrome|mobileChrome|safari|mobileSafari)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid project:\n   · worker\n   · chrome\n   · mobileChrome\n   · safari\n   · mobileSafari" && exit 3;
  worker="--project=$project";
else
  worker=$browser
fi

if [[ ! -z $reporter ]]; then
  [[ ! $reporter =~ ^(allure|playwright)$ ]] &&  echo -e "[Error] Rerun the script selecting a valid reporter:\n   · allure\n   · playwright" && exit 3;
fi

if [ $env == "docker" ]; then
  npm run docker:build
  start_time=$(date "+%s")
  npm run docker:run_$config -- $worker $filter
else
  start_time=$(date "+%s")
  npm run $config -- $worker $filter
fi

end_time=$(date "+%s")

calculate_time_difference "$start_time" "$end_time"

if [[ ! -z $reporter ]]; then
  npm run report_$reporter
fi
