import { readableStreamFromReader } from "../deps.ts";

const relative = (path: string) => new URL(path, import.meta.url);

export default async function serveHtml() {
  const file = await Deno.open(relative("../static/index.html"), {
    read: true,
  });

  return new Response(readableStreamFromReader(file));
}
