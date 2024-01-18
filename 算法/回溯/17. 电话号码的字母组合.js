/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const k = digits.length;
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    if(!k) return []
    if(k === 1) return map[digits].split("")

    const res = [], path = []
    backtracking(digits, k, 0);
    return res;

    function backtracking(n, k, a){
        if(path.length === k){
            res.push(path.join(""))
            return 
        }
        for(const v of map[n[a]]){
            path.push(v)
            backtracking(n, k, a + 1)
            path.pop()
        }
    }
};