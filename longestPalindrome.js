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

// Expand Around Center solution
// T O(N^2)
// S O(1)
var longestPalindrome = function(s) {
    var max = '';
    console.log('max = ' + max);
    console.log('s = ' + s);
    for (var i = 0; i < s.length; i++) {
        console.log('max = ' + max);
        console.log('s = ' + s);
        console.log('i = ' + i);
        console.log('-----------------------------------');
      // this loop is to take into account 
      // different palindromes like 'aba' and 'abba'
      for (var j = 0; j < 2; j++) {
        console.log('-----------------------------------');
        console.log('j = ' + j);
        var left = i;
        var right = i + j;
        console.log('left = ' + left);
        console.log('right = ' + right);
        console.log('s = ' + s);
        while (s[left] && s[left] === s[right]) {
          left--;
          right++;
        }
        // here imagine we get into string like
        // "sabbad", then
        // right = 5
        // left = 0
        // and actual length of "abba" should be "4"
        // 5 - 0 - 1 === 4
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
        }
        console.log('max = ' + max);
        console.log('left = ' + left);
        console.log('right = ' + right);
        console.log('-----------------------------------');
        console.log('-----------------------------------');
          
      }
    }
    return max;
  };

  const tst = console.log(longestPalindrome('aabba'));
