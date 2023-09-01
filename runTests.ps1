param(
    [string]$env,
    [string]$config
)

$args = $args[2..($args.Length - 1)]

foreach ($arg in $args) {
    if ($arg -match "^-p") {
        $project = $arg.Substring(2)
    } elseif ($arg -match "^-t") {
        $tag = $arg.Substring(2)
    } elseif ($arg -match "^-r") {
        $reporter = $arg.Substring(2)
    }
}

$browser = "--project=chrome --project=safari --project=mobileChrome --project=mobileSafari"

if ($env -ne "local" -and $env -ne "docker") {
    Write-Host "[Error] Rerun the script selecting a valid config:`n   · local`n   · docker"
    exit 1
}

if ($config -ne "local" -and $config -ne "stage" -and $config -ne "prod") {
    Write-Host "[Error] Rerun the script selecting a valid config:`n   · local`n   · stage`n   · prod"
    exit 2
}

$filter = ""
if ($tag) {
    $filter = "-g @$tag"
}

if ($project -match "^(worker|chrome|mobileChrome|safari|mobileSafari)$") {
    $worker = "--project=$project"
} else {
    $worker = $browser
}

if ($reporter -ne $null -and $reporter -ne "allure" -and $reporter -ne "playwright") {
    Write-Host "[Error] Rerun the script selecting a valid reporter:`n   · allure`n   · playwright"
    exit 3
}

if ($env -eq "docker") {
    npm run docker:build
    $start_time = Get-Date
    npm run "docker:run_$config" "--" $worker $filter
} else {
    $start_time = Get-Date
    npm run $config "--" $worker $filter
}

$end_time = Get-Date
Write-Host "Starting tests at: $start_time"
Write-Host "Ending tests at: $end_time"

if ($reporter -ne $null) {
    npm run "report_$reporter"
}
