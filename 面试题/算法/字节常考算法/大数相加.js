let a = "90071992547409922"
let b = "754634524"

function sum(a, b) {
   
    const len = Math.max(a.length, b.length)

    a = a.padStart(len, '0')
    console.log(a);
    
    b = b.padStart(len, '0')
    console.log(b);
    
    let result = ''
    let carry = 0
    for (let i = len - 1; i >= 0; i--){
        const n = +a[i] + +b[i] + carry
        carry = Math.floor(n / 10)
        result = (n % 10) + result
        if (i === len - 1) {
            console.log(n, carry, result);
            
        }
    }
    if (carry) {
        result = '1' + result
    }
    return result
}

console.log(sum(a, b));
