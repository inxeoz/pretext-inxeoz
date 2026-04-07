import indexHtml from "./index.html";

Bun.serve({
  routes: {
    "/": indexHtml,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Server running at http://localhost:3000");