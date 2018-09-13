#!/bin/bash
set -ev

cd ods-helphub

yarn install
yarn run build

cd ..