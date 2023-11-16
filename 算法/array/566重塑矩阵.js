/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const ret = new Array(r)
    for(let i = 0; i < r; i++){
        ret[i] = new Array(c)
    }
    if(mat.length * mat[0].length != r * c) return mat
    let rows = 0, cols = 0
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            ret[rows][cols] = mat[i][j]
            cols++
            if(cols == c){
                rows++
                cols = 0
            }
        }
    }
    return ret
};