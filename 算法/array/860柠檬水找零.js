/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let obj = {}
    obj[5] = 0
    obj[10] = 0
    for(let i = 0; i < bills.length; i++){
        if(bills[i] == 5){
            obj[5]++
        }
        if(bills[i] == 10){
            if(obj[5] < 1){
                return false
            }
            else{
                obj[5]--
                obj[10]++
            }
        }
        if(bills[i] == 20){
            if(obj[10] < 1){
                if(obj[5] < 3){
                    return false
                }else{
                    obj[5] = obj[5] - 3
                }
            }else{
                obj[10] = obj[10] - 1
                if(obj[5] < 1 ){
                    return false
                }else{
                    obj[5] = obj[5] - 1
                }
            }
        }
    }
    return true
};