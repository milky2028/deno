import { readableStreamFromReader } from "../deps.ts";

export default async function serverHtml() {
  const file = await Deno.open(
    new URL("../static/index.html", import.meta.url),
  );
  return new Response(readableStreamFromReader(file));
}
