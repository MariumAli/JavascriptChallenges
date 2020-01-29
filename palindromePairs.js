/* 
Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
*/
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let x =[];
    for (let i= 0; i <words.length; i++) { 
        words.forEach((item, index) => {
            if (index != i && checkIfPalindrome((words[i] + item))) {
                x.push([i, index]);
            }
        }); //check for all elements that will result in a palindrome.

        // console.log('x = ' + x);
        // console.log(x);
    }
    // console.log('x = ' + x);
    return x;
};

function checkIfPalindrome(word) {
    // console.log("Checking for palindrome for: " + word)
    for (let i = 0, x = word.length-1; i < x ; i++, x-- ) {
        if(word[i] !== word[x]) {
            return false;
        }
    }
    // console.log("is palindrome");
    return true;
}

// const tst = console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));
const tst = console.log(palindromePairs(["bat","tab","cat"]));

/* TRIE SOLN NNEED TO EXPLORE 

class Trie extends Map {
    constructor () {
      super();
      this.index = -1;
      this.list = [];
    }
  
    insert(word, index) {
      let root = this;
      for (let i = word.length - 1; i >= 0; i--) {
        let j = word[i];
        
        if (!root.has(j)) {
          root.set(j, new Trie());
        }
  
        if (isPalindrome(word, 0, i)) {
          root.list.push(index);
        }
  
        root = root.get(j);
      }
  
      root.list.push(index);
      root.index = index;
    }
  
  }
  
  function palindromePairs (words) {
    let res = [];
    let trie = new Trie();
  
    for (let i = 0; i < words.length; i++) {
      trie.insert(words[i], i);
    }
  
    for (let i = 0; i < words.length; i++) {
      search(words, i, trie, res);
    }
  
    return res;
  }
  
  function search (words, currentWordIndex, root, res) {
    for (let i = 0; i < words[currentWordIndex].length; i++) {
      // Current word is as long or longer than word in trie branch
      if (
        root.index >= 0
        && root.index !== currentWordIndex
        && isPalindrome(words[currentWordIndex], i, words[currentWordIndex].length - 1)
      ) {
        res.push([currentWordIndex, root.index])
      }
  
      root = root.get(words[currentWordIndex][i]);
  
      if (!root) {
        return;
      }
    }
  
    // Trie branch longer than word
    for (let i of root.list) {
      if (currentWordIndex !== i) {
        res.push([currentWordIndex, i])
      }
    }
  }
  
  function isPalindrome (word, start, end) {
    while (start < end) {
      if (word[start++] !== word[end--]) return false;
    }
    return true;
  }
}*/