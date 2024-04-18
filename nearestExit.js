//neumerotor up denominator down

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
    
    const queue = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+'; 
    
    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();
        
        if ((row !== entrance[0] || col !== entrance[1]) &&
            (row === 0 || row === m - 1 || col === 0 || col === n - 1)) {
            return distance;
        }
        
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && maze[newRow][newCol] === '.') {
                maze[newRow][newCol] = '+'; 
                queue.push([newRow, newCol, distance + 1]);
            }
        }
    }
    
    return -1;
};
