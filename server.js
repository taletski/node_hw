/* Hello, World! server in node.js */
var port = require('./myModule');
var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World!\n');
}).listen(port.getPort()); // Bind to the port

// Print the status to console
console.log('Server running at http://127.0.0.1:' + port.getPort());
