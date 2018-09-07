#!/bin/bash
set -ev

if [ "${TRAVIS_BRANCH}" = "master" ]; then
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-helphub/dist/index.html ./ods-helphub/dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_PROD_PATH_HELPHUB"
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-tutorial/build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_PROD_PATH_TUTORIAL"
fi

if [ "${TRAVIS_BRANCH}" = "develop" ]; then
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-helphub/dist/index.html ./ods-helphub/dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_HELPHUB"
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-tutorial/build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_TUTORIAL"
fi

if [ "${TRAVIS_BRANCH}" = "feature/14572_setup_the_infrastructure_ods_tutorial" ]; then
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-helphub/dist/index.html ./ods-helphub/dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_HELPHUB"
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P ./ods-tutorial/build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_TUTORIAL"
fi