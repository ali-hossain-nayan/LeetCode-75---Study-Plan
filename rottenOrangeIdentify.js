/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rows = grid.length;
    let columns = grid[0].length;

    let gridDirection = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let freshOrangeCount = 0;
    let queue = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            } else if (grid[i][j] === 1) {
                freshOrangeCount += 1;
            }
        }
    }

    let minutes = -1; // Initialize minutes to -1
    while (queue.length > 0) {
        let [row, col, minute] = queue.shift();
        minutes = minute; // Update minutes when popping an orange from the queue

        for (let [x, y] of gridDirection) {
            let newRow = row + x;
            let newCol = col + y;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns && grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2;
                freshOrangeCount--;
                queue.push([newRow, newCol, minute + 1]);
            }
        }
    }

    return freshOrangeCount === 0 ? Math.max(minutes, 0) : -1; // Return -1 if fresh oranges remain
};
