const fs = require('fs')

fs.appendFileSync('./data.txt', '曲项向天歌')
// fs.renameSync('./data.txt', './data.md')
// fs.renameSync('./data.md', './pic/data.md')

// fs.unlinkSync('./pic/data.md')

// fs.rmSync('./pic', { recursive: true })