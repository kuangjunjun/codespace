// function timeout(time, num) {
//     setTimeout(() => {
//         console.log(num + '号任务已执行');
//     }, time);
// }

// timeout(10000, 1)
// timeout(5000, 2)
// timeout(3000, 3)
// timeout(4000, 4)
// timeout(5000, 5)

// function test(time, num) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log(num);
//             reslove()
//         }, time);
//     })
// }

// test(3000, 1).then((res) => {
//     test(5000, 2)
// })
