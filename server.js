const http = require('node:http');
const server = http.createServer((request, response) => {
  response.end("Hello, Galvanize!");
});
let HOST = "localhost";
let PORT = 3000;
server.listen(`${PORT}`, `${HOST}`, () => {
  console.log(`Server is running on ${HOST}:${PORT}`)
});