

/*
On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

 

Example 1:

Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
Example 2:

Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
Example 3:

Input: [[0,1],[2,0]]
Output: 0
Explanation: 
There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
 

Note:

1 <= grid.length * grid[0].length <= 20

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    var start;
    var end;
    var emptyCount = 1;
    var result = 0;
    
    if (!grid.length) {
        return result;
    }
    
    var lastRowIndex = grid.length - 1;
    var lastColIndex = grid[0].length - 1;
    
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                emptyCount++;
            } else if (grid[i][j] === 1) {
                start = [i, j];
            } else if (grid[i][j] === 2) {
                end = [i, j];
            }
        }
    }
    
    var search = function(row, col, visit) {
        if (grid[row][col] === -1 || grid[row][col] === 3) {
            return;
        }
        
        if (row === end[0] && col === end[1]) {
            if (visit === emptyCount) {
                result++;
            }
            return;
        }
        
        grid[row][col] = 3;
        
        if (row > 0) {
            search(row - 1, col, visit + 1);
        }
        if (col > 0) {
            search(row, col - 1, visit + 1);
        }
        if (row < lastRowIndex) {
            search(row + 1, col, visit + 1);
        }
        if (col < lastColIndex) {
            search(row, col + 1, visit + 1);
        }
        
        grid[row][col] = 0;
    };
    search(start[0], start[1], 0);
    
    return result;
};

/*
var uniquePathsIII = function(grid) {
    var start = [];
    var end = [];
    var walks = 2;
    var steps = [];
    res = [];
    
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) start = [i, j];
            else if (grid[i][j] == 2) end = [i, j];
            else if (grid[i][j] == 0) walks++;
        }
    }
    
    steps.push(start);
    dfs(grid, start, end, walks, steps);

    return res.length;
};
var res;

function dfs(grid, position, end, walks, steps) {
    if (position[0] == end[0] && position[1] == end[1] && steps.length == walks) {
        res.push(steps.slice(0));
        return
    }
    
    if (steps.length < walks) {
        var dir = [[0, 1], [1,0], [0, -1], [-1, 0]];
        for (var i = 0; i < dir.length; i++) {
            var nextMove = [position[0] + dir[i][0], position[1] + dir[i][1]];
            if (nextMove[0] >= 0 && nextMove[0] < grid.length 
                && nextMove[1] >= 0 && nextMove[1] < grid[0].length 
                && grid[nextMove[0]][nextMove[1]] != -1
                && !steps.some(s => s[0] == nextMove[0] && s[1] == nextMove[1])) {
                    steps.push(nextMove);
                    dfs(grid, nextMove, end, walks, steps);
                    steps.pop()
            }
        }
    }
    return true;
}

*/