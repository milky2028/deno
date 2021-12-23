#!/bin/zsh

alias serve="deno run --allow-net --allow-read src/server.ts"
alias compile="echo 'Setting up build directory...' && \
               rm -rf build && \
               mkdir build && \
               echo 'Checking formatting...' && \
               deno fmt --check && \
               echo 'Linting...' && \
               deno lint && \
               echo 'Compiling...' && \
               deno compile --output ./build/server --allow-net --allow-read ./src/server.ts"
alias serve:prod="compile && ./build/server"