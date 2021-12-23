import { readableStreamFromReader } from "../deps.ts";

const relative = (path: string) => new URL(path, import.meta.url);

export default async function serverHtml() {
  const file = await Deno.open(relative("../static/index.html"));
  return new Response(readableStreamFromReader(file));
}
