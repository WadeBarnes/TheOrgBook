# Setting for the TheOrgBook-BC environments.
# Uses the existing `devex-von-tools` environment for builds and images
export TOOLS="devex-von-tools"
export PROJECT_NAMESPACE="devex-bcgov-dac"

# The project components
export components="tob-db tob-solr tob-api tob-web tob-wallet"

# Used for tmp deployment scripts
export images="postgresql solr django angular-on-nginx schema-spy"

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# Danger, Danger, Will Robinson!
# ----------------------------------------------
# Override environments, since there is only one:
# devex-bcgov-dac-dev
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export DEPLOYMENT_ENV_NAME="dev"
export DEV="dev"
export TEST="dev"
export PROD="dev"

