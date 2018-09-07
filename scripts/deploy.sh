#!/bin/bash
set -ev

if [ "${TRAVIS_BRANCH}" = "master" ]; then
  cd ods-helphub
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P dist/index.html dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_PROD_PATH_HELPHUB"
  cd ods-tutorial
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_PROD_PATH_TUTORIAL"
fi

if [ "${TRAVIS_BRANCH}" = "develop" ]; then
  cd ods-helphub
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P dist/index.html dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_HELPHUB"
  cd ods-tutorial
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_TUTORIAL"
fi

if [ "${TRAVIS_BRANCH}" = "feature/14572_setup_the_infrastructure_ods_tutorial" ]; then
  cd ods-helphub
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P dist/index.html dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_HELPHUB"
  cd ods-tutorial
  rsync -avz -e "ssh -i .travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P build/ "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_TUTORIAL"
fi