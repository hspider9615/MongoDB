const http = require('http');

const port = process.env.PORT || 2;

const server = http.createServer((req, res) => {
    res.statesCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is HetWithCodexMania</h1> <p>Hey this is way to rock the world!</p>');
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})