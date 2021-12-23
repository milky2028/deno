# Deno Simple Proxy Server Example

- Both the proxy server and the file server use
  [streams](https://deno.land/std@0.119.0/streams).
- Content is also written to the DOM using streams. This requires a
  [browser that supports `WritableStream`](https://caniuse.com/?search=writable%20stream).
  To really see this in action, throttle your network speed to `slow 3G`.

## Endpoints

- `/` and `/index.html` serve the `index.html` file. All that file does is fetch
  data from the local proxy and inject it into the DOM.
- All other endpoints are proxied to
  [JSON Placeholder](https://jsonplaceholder.typicode.com).

## Usage

Get started by installing [Deno](https://deno.land/#installation) with
`brew install deno`.

Package commands can be found in `alias.sh`. Run `source ./alias.sh` to enable.
These commands will disappear if you close your shell. Put
`source <absolute-path>/alias.sh` in your `~/.zshrc` if you don't want to have
to keep doing this.

- **serve**: Runs the server with correct permissions.
- **compile**: Checks formatting, checks linting, then compiles the server into
  a single excutable with correct permissions.
- **serve:prod**: Compiles, then starts the server from the executable binary.
