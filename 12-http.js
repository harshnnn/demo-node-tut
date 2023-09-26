const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my home page')
    } else if (req.url === '/about') {
        res.end('Welcome to my about page');
    } else {
        res.end(`
            <h1>Oops!</h1> 
            <p>We can't seem to find this page</p> 
            <a href="/">Back Home</a>
        `);
    }
})

server.listen(4000, () => {
    console.log('Server is running on port 4000');
})
