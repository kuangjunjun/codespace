const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

// 前后端不分离，把一个静态资源返回给前端
const server = http.createServer((req, res) => {
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)//读取文件的详细参数
        const isDir = stats.isDirectory()// 用来判断读到的是文件还是文件夹
        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        // --------------------------------------------------
        if (!isDir || fs.existsSync(filePath)) {
            // 读取资源文件向前端返回
            const content = fs.readFileSync(filePath) // 读取文件
            const { ext } = path.parse(filePath)
            console.log(ext);
           
            res.writeHead(200, {
                'Content-Type': mime.lookup(ext),
                'Cache-control': 'max-age=86400'  // 一天
            })

            return res.end(content)
        }
    }

    res.writeHead(404, { 'Content-Type': 'text/html' })
    return res.end('<h1>Not Found</h1>')

})

server.listen(3000, () => {
    console.log('server is running at port 3000')
});