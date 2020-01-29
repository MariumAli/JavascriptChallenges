
/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        console.log('start = ' +start);
        console.log('current = ' +current);
        if(current.length == k) {
            result.push(current);
            console.log('result = ' +result);
            return;
        }
        for(let i = start; i <= n; i++) {
            console.log('--------------------');
            dfs([...current, i], i + 1);
            console.log('returned = ');
            console.log('start = ' +start);
            console.log('current = ' +current);
            console.log('--------------------');
            
        }
    }
    
    dfs([], 1);
    return result;
};

console.log(combine(4,2));