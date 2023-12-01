// fs 读取文件的能力
// promise + then   /    async await  解决方案
const fs = require('fs')
function readFilePromise(str){
    return  new Promise((resolve,reject)=>{
      fs.readFile(str,'utf-8',(err,data)=>{
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
      })
    })
  }

//   readFilePromise('./a.txt').then(data => {
//     console.log(data)
//     return readFilePromise('./b.txt')
//   }).then((data) => {
//     console.log(data)
//     return readFilePromise('./c.txt')
//   }).then((data) => {
//     console.log(data)
//   })
//   .catch(err => {
//      console.log(err);
//   })

(async function () {
    try {
        const f1 = await readFilePromise('./a.txt')
        const f2 = await readFilePromise('./b.txt')
        const f3 = await readFilePromise('./c.txt')
        console.log(f1, f2, f3);
        } catch (e) {
            
        }
    }
)()
    
    