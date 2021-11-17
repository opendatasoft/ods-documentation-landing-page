#!/bin/bash
set -ev

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  cd ods-helphub
  rsync -avz -e "ssh -i ../.travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P dist/index.html dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_PROD_PATH_HELPHUB"
fi

if [ "${TRAVIS_BRANCH}" = "develop" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  cd ods-helphub
  rsync -avz -e "ssh -i ../.travis.deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --delete -P dist/index.html dist/assets "$DEPLOY_USER"@"$DEPLOY_IP":"$DEPLOY_BETA_PATH_HELPHUB"
fi