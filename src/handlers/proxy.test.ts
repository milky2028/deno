import proxy from "./proxy.ts";
import { assertEquals } from "../devDeps.ts";

globalThis.fetch = (req) => Promise.resolve(req as unknown as Response);

Deno.test("proxy test", async () => {
  const url = new URL("http://localhost:3003/photos");
  const response = await proxy(
    url,
    new Request(url.href),
  );

  assertEquals(
    structuredClone(response),
    structuredClone(new Request("https://jsonplaceholder.typicode.com/photos")),
  );
});
