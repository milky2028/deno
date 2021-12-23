# Deno Simple Proxy Server Example

- Both the proxy server and the file server use streams.

## Endpoints

- `/` and `/index.html` serve the `index.html` file. All that file does is fetch
  data from the local proxy and inject it into the DOM.
- All other endpoints are proxied to
  [JSON Placeholder](https://jsonplaceholder.typicode.com).

## Usage

Package commands can be found in `alias.sh`. Run `source ./alias.sh` to enable
access to these commmands. These commands will disappear if you close your
shell. Put `source <absolute-path>/alias.sh` in your `~/.zshrc` if you don't
want to have to keep doing this.

- **serve**: Runs the server with correct permissions.
- **compile**: Compiles the server into a single excutable binary with correct
  permissions.
- **serve:prod**: Compiles, then starts the serve from the executable binary.
