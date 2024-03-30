const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');
const checkSum = require('./checkSum')

const server = http.createServer((req, res) => {
  
  let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:///${req.url}`)))
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)//读取文件的详细参数
    const isDir = stats.isDirectory()// 用来判断读到的是文件还是文件夹
    if (isDir) {
      filePath = path.join(filePath, 'index.html')
      }
      // ------------------------------------------
    if (!isDir || fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath) // 读取文件
      const { ext } = path.parse(filePath) 
      // const timeStamp = req.headers['if-modified-since']
      // let status = 200
      // if (timeStamp && Number(timeStamp) === stats.mtimeMs) {  // 该资源没有修改
      //   status = 304
      // }

      // res.writeHead(200, {
      //   'Content-Type': mime.lookup(ext),
      //   'cache-control': 'max-age=86400',  // 一天
      //   'etag': `${content}`   //签名
      //   // 'Last-Modified': 'stats.mtimeMs'  // 时间戳
      // })

      checkSum.file(filePath, (err, sum) => {
        const resStream = fs.createReadStream(filePath)
        sum = `"${sum}"`
        if (req.headers['if-none-match'] === sum) {
          res.writeHead(304, {
            'Content-Type': mime.lookup(ext),
            'etag': sum   //签名
          })
        } else {
          res.writeHead(200, {
            'Content-Type': mime.lookup(ext),
            'etag': sum
          })
        }
      })


      return res.end(content)
    }

  }
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end('<h1>Not Found</h1>')

})

server.listen(3000, () => {
  console.log('server is running at port 3000')
});