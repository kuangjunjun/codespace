console.log(process.argv[process.argv.length - 1]);

let player = process.argv[process.argv.length - 1]

// 电脑生成一个
let arr = ['rock', 'scissors', 'paper']
let index = Math.floor(Math.random() * 3)
let computer = arr[index]

if (computer === player) {
    console.log('平局');
} else if (
    (computer === 'rock' && player === 'scissors')||
    (computer === 'scissors' && player === 'paper')||
    (computer === 'paper' && player === 'rock')
) {
    console.log('你输了');
} else {
    console.log('你赢了');
}