const http = require('http');
const port = 3000;

const routes = {
    "/": 'Hello Node Server',
    "/about": "This is a Node server"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});