const fs = require('fs')

// fs.writeFileSync('./target.md', '举头望明月')

const img = fs.readFileSync('./下载.jpg')
// tex
fs.writeFileSync('./pic/下载.jpg', img)