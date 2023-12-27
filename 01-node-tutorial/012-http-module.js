const http = require('http');
// console.log(http);
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/about') {
        res.write('About Page');
        res.end();
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
});