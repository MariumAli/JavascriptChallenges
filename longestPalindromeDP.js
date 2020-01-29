/**
 * @param {string} s
 * @return {string}
 */
/*
  dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
*/

/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function(s) {
    const m = s.length;
    const dp = [...new Array(m)].map(() => new Array(m).fill(false));
    console.log(dp);
    let max = '';
    for (let length = 1; length <= m; length++) {
        console.log('-----------------------------------');
        console.log('length = ' + length);
        console.log('max = ' + max);
        console.log('m - length + 1 = ' + (m - length + 1));
        console.log('-----------------------------------');
      for (let i = 0; i < m - length + 1; i++) {
        const j = i + length - 1;
        console.log('-----------------------------------');
        console.log('i = ' + i);
        console.log('j = ' + j);
        console.log('s = ' + s);
        console.log('-----------------------------------');
        dp[i][j] = s[i] === s[j] && (length <= 2 || dp[i + 1][j - 1]);
        console.log('dp[i][j] = ' + dp[i][j]);
        if (dp[i][j] && length > max.length) {
          max = s.substring(i, i + length);
        }
        console.log('max = ' + max);
        console.log('-----------------------------------');
        console.log('-----------------------------------');
      }
    }
    return max;
  };

  const tst = console.log(longestPalindrome('aabba'));
