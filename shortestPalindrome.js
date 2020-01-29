/*
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {  
const prefix = createPrefixTable(s + '#' + reverse(s));
const length = prefix[prefix.length - 1];
console.log('length = ' + length);
console.log('s.substring(length) = ' + s.substring(length));
return reverse(s.substring(length)) + s;
};

function createPrefixTable(str) {
    console.log('create prefix strinng = ' + str);
    const arr = new Array(str.length).fill(0);
    let j = 0;
    for (let i = 1; i < str.length; i++) {
      while (str[i] !== str[j] && j > 0) {
        j = arr[j - 1];
      }
      if (str[i] === str[j]) {
        j += 1;
      }
      arr[i] = j;
    }
    console.log('prefix table = ' + arr);
    console.log(arr);
    return arr;
  };
  
  function reverse(s) {
    console.log('reverse strinng = ' + s);
    let output = '';
    for (const c of s) {
      output = c + output;
    }
    console.log('reverse output = ' + output);
    return output;
  }

//   const tst = console.log(shortestPalindrome('aacecaaa'));
  const tst = console.log(shortestPalindrome('aabba'));
