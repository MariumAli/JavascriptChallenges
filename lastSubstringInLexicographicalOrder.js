
/*Given a string s, return the last substring of s in lexicographical order.

 

Example 1:

Input: "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".
Example 2:

Input: "leetcode"
Output: "tcode"
 

Note:

1 <= s.length <= 4 * 10^5
s contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */

var lastSubstring = function(s) {
    console.log(s);
    let max = '';
    for (let i = 0; i < s.length; i++) {
        console.log("i = " + i);
        console.log("s.substring(i) = " + s.substring(i));
        console.log("max = " + max);
      if (s.substring(i) > max) {
        max = s.substring(i);
      }
    }
    return max;
  };


//   const tst = console.log(lastSubstring("abab"));
  const tst = console.log(lastSubstring("leetcodetest"));