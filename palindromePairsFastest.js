/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const map = words.reduce((acc, curr, i) => {
        acc.set(curr, i);
        return acc;
    }, new Map());
    
    console.log(map);
    const output = [];
    for (const word of words) {
        for (let j=0; j<=word.length; j++) {
            console.log('word = ' + word);
            console.log('j = ' + j);

            if (j < word.length && isPalindrome(word, j, word.length)) {
                const rLeft = reverseSubstring(word, 0, j);
                console.log('rLeft = ' + rLeft);
                if (map.has(rLeft)) {
                    output.push([map.get(word), map.get(rLeft)]);
                }
            }
            if (isPalindrome(word, 0, word.length-j)) {
                const rRight = reverseSubstring(word, word.length-j, word.length);
                if (map.has(rRight) && rRight !== word) {
                    output.push([map.get(rRight), map.get(word)]);
                }
            }
        }
    }
    
    return output;
};

function reverseSubstring(word, start, end) {
    console.log('\n');
    console.log('==============');
    console.log('word = '+ word );
    console.log('start = '+ start );
    console.log('end = '+ end );
    let newStr="";
    for (let p=end-1; p>=start; p--) newStr+=word[p];
    console.log('reversed substrign' + newStr);
    console.log('\n');
    return newStr;
}

function isPalindrome(word,start,end) {
    console.log('\n');
    console.log('-------***********------------');
    console.log('\n');
    console.log('word = '+ word );
    console.log('start = '+ start );
    console.log('end = '+ end );
    let left = start;
    let right = end-1;
    
    while (left < right) {
        if (word[left] !== word[right]) return false;
        left++;
        right--;
    }
    console.log('is palindrome');
    console.log('\n');
    return true;
}
const tst = console.log(palindromePairs(["bat","tab","cat"]));
