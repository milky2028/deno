#!/bin/zsh

alias serve="DENO_DIR=.cache deno run --allow-net --allow-read src/server.ts"
alias compile="DENO_DIR=.cache deno compile --output ./build/server --allow-net --allow-read ./src/server.ts"
alias build:prod="echo 'Setting up build directory...' && \
                  rm -rf build && \
                  mkdir build && \
                  echo 'Checking formatting...' && \
                  deno fmt --ignore=./.cache --check && \
                  echo 'Linting...' && \
                  deno lint --ignore=./.cache && \
                  echo 'Compiling...' && \
                  compile"
alias serve:prod="build:prod && ./build/server"