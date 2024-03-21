/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid.length; j++) {
             let areEqual = true;
             for (let k = 0; k < grid.length; k++) {
                 if (grid[i][k] !== grid[k][j]) {
                     areEqual = false;
                     break;
                 }
             }
             if (areEqual) {
                 count++;
             }
         }
     }
     return count;
 };