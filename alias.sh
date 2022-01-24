#!/bin/zsh

alias update-deps:dev="DENO_DIR=.cache deno test --lock=dev-lock.json --lock-write"
alias update-deps="DENO_DIR=.cache deno cache --lock=lock.json --lock-write src/server.ts"
alias test="DENO_DIR=.cache deno test"
alias serve="DENO_DIR=.cache deno run --allow-net --allow-read src/server.ts"
alias compile="DENO_DIR=.cache deno compile --output ./build/server --allow-net --allow-read ./src/server.ts"
alias build:prod="echo 'Setting up build directory...' && \
                  rm -rf build && \
                  mkdir build && \
                  echo 'Checking formatting...' && \
                  deno fmt --check && \
                  echo 'Linting...' && \
                  deno lint && \
                  echo 'Testing...' && \
                  test && \
                  echo 'Compiling...' && \
                  compile"
alias serve:prod="build:prod && ./build/server"