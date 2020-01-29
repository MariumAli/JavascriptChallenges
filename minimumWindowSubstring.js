/*Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return '';
    if (s.length < t.length) return '';
    if (s === t) {
        return s; 
    }
    
    const map = createFrequencyTable(t);
    console.log(map);
    let counter = Object.keys(map).length;
    let start = 0;
    let answer = '';
    let end = 0;
    let min = Infinity;
    console.log('counter = ' + counter);
    console.log('start = ' + start);
    console.log('answer = ' + answer);
    console.log('end = ' + end);
    console.log('min = ' + min);
    console.log('s = ' + s);
    console.log('t = ' + t);

    while (end < s.length) {
        if (map.hasOwnProperty(s[end])) {
            map[s[end]]--;
            if (map[s[end]] === 0){
                counter--;
            }
        }
        console.log('\n');
        console.log('-------------------------');
        console.log('counter = ' + counter);
        console.log('start = ' + start);
        console.log('answer = ' + answer);
        console.log('end = ' + end);
        console.log('min = ' + min);
        console.log('s[end] = ' + s[end]);
        console.log(map);
        console.log('s = ' + s);
        console.log('t = ' + t);
        console.log('-------------------------');
        console.log('\n');       
        end++;
        
        while(counter ===  0) {
            console.log('\n');
            console.log('counter == ' + counter);
            console.log('start == ' + start);
            console.log(map);
            if (map.hasOwnProperty(s[start])) {
                map[s[start]]++;
                if (map[s[start]] > 0){
                    counter++;
                }
            }
            if (end-start < min) {
                min = end-start;
                answer = s.substr(start, min);
            }
            console.log('\n');
            console.log('min == ' + min);
            console.log('answer == ' + answer);
            console.log(map);          
            start++;
            console.log('start == ' + start);
        }
        
    }
    
    return answer;
};

function createFrequencyTable(s) {
    var map = {};
    for (let i = 0; i < s.length; i++) {
        if(map.hasOwnProperty(s[i])) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    return map;
}

const tst = console.log(minWindow("ADOBECODEBANC", "ABC"));