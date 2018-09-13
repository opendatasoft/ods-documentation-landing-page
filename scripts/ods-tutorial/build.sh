#!/bin/bash
set -ev

cd ods-tutorial

rm -rf build/ tmp/

sphinx-build -aE -nW -Dlanguage='en' -b html -d tmp source/ build/en
sphinx-build -aE -nW -Dlanguage='fr' -b html -d tmp source/ build/fr
sphinx-build -aE -nW -Dlanguage='es' -b html -d tmp source/ build/es
sphinx-build -aE -nW -Dlanguage='de' -b html -d tmp source/ build/de
sphinx-build -aE -nW -Dlanguage='nl' -b html -d tmp source/ build/nl

cd ..