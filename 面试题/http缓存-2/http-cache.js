const http = require('http')
const url = require('url')// url模块  做字符串url路径的解析
const path = require('path')// path 解析路径 解析绝对相对
const fs = require('fs') // 文件模块
const mime = require('mime-types')

const server = http.createServer((req, res) => {
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        console.log(stats);
        const isDir = stats.isDirectory()
        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir || fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath)
            const { ext } = path.parse(filePath)
            const timeStamp = req.headers['if-modified-since']
            let status = 200
            if (timeStamp && Number(timeStamp) === stats.mtimeMs) { // 该资源没有被修改
                status = 304 // 资源未修改
            }

            res.writeHead(status, {
                'Content-Type': mime.lookup(ext),
                'Cache-Control': 'max-age=86400', // 一天
                'Last-Modified': stats.mtimeMs  // 时间戳  资源修改的时间
            })

            return res.end(content) 
        }
    }
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found</h1>')
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})
