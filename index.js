const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World.","utf8");
  response.end();
});

server.listen(3000);

