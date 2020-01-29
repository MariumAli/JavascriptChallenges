 /**
  * @param {string} s
  * @param {string} p
  * @return {boolean}
  */
 /*
 Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
*/
 var isMatch = function(s, p) {
    console.log("s = " + s);
    console.log("p = " + p);
    if (s == null || p == null) {
        return false;
    }
    let lens = s.length + 1, lenp = p.length + 1;
    // use Array(n) to create array with size n
    // use Array.fill(v) to fill it with values and make it iterable
    // NOTE: if the value passed to Array.fill is a object, it won't get copied
    // but only its reference get copied
    let dp = Array(lens).fill(null).map(c => Array(lenp).fill(false));
    console.log(dp);
    // start the nested for-loop
    for (let i = 0; i < lens; i++) {
        for (let j = 0; j < lenp; j++) {
            console.log("i = " + i);
            console.log("j = " + j);
            console.log("s = " + s);
            console.log("p = " + p);
            if (i === 0 && j === 0) {
                dp[i][j] = true;
                continue;
            }
            if (j === 0) {
                dp[i][j] = false;
                continue;
            }
            // case: if current char of s and p are the same or if current char
            // of p is the '?'
            if (p[j-1] !== '*') {
                console.log('j-1 = ' + p[j-1]);
                if (i > 0 && (s[i-1] === p[j-1] || p[j-1] === '?')) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
            // case when current char of p is '*'
            else {
                console.log('**j-1 = ' + p[j-1]);
                // for case '*' match 0 character of s
                dp[i][j] |= dp[i][j-1];
                console.log(dp[i][j]);
                // for case '*' match 1 or n characters
                if (i > 0) {
                    console.log('i > 0');
                    dp[i][j] |= dp[i-1][j];
                }
                console.log(dp[i][j]);
                // convert back to boolean
                dp[i][j] = !!dp[i][j];
                console.log(dp[i][j]);
            }
            console.log(dp);
        }
    }
    return dp[lens-1][lenp-1];
};


// const tst = console.log(isMatch("b", "?*?"));
//const tst = console.log(isMatch("aa", "a*"));
 //const tst = console.log(isMatch("mississippi", "m??*ss*?i*pi"));
//const tst = console.log(isMatch("abefcdgiescdfimde","ab*cd?i*de"));
//const tst = console.log(isMatch("aaaa", "***a"));
//const tst = console.log(isMatch("aa", "a"));
const tst = console.log(isMatch("abca", "a?*"));