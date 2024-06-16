const http = require('http')

const server = http.createServer((req, res) => {
    // 解决跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    if (req.url === '/upload') {
        res.end('hello world')
    }
})

server.listen(3000, () => {
    console.log('server is running at port 3000')
})