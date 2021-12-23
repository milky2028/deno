import { serve } from "./deps.ts";
import serveHtml from "./handlers/serveHtml.ts";
import proxyRequest from "./handlers/proxyRequest.ts";

const port = 3003;
console.log(`Listening on port ${port}`);

serve((req) => {
  const url = new URL(req.url);
  switch (url.pathname) {
    case "/index.html":
      return serveHtml();
    default:
      return proxyRequest(url, req);
  }
}, { port });
