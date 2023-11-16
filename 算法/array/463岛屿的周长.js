/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let land = 0, border = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                land++
                if(i < grid.length - 1 && grid[i + 1][j] == 1) border++
                if(j < grid[0].length - 1 && grid[i][j + 1] == 1) border++
            }
        }
    }
    return 4 * land - 2 * border
};