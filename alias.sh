#!/bin/zsh

alias serve="deno run --allow-net --allow-read src/server.ts"
alias compile="rm -rf build && \
                   mkdir build && \
                   deno compile --output ./build/server --allow-net --allow-read ./src/server.ts"