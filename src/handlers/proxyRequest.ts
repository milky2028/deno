export default function proxyRequest(req: Request, url: URL) {
  url.hostname = "jsonplaceholder.typicode.com";
  url.protocol = "https:";
  url.port = "443";

  const proxyReq = new Request(url.href, req);
  return fetch(proxyReq);
}
