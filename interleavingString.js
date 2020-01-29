/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 /*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
      return false;
    }

    let str1Len = s1.length;
    let str2Len = s2.length;

    let DP = [...Array(str1Len+1)].map(r => Array(str2Len+1).fill(false));
    for (let i=0 ; i<=str1Len; i++) {
        for (let j=0; j<=str2Len; j++) {
            if (i === 0 && j === 0) {
                DP[i][j] = true;
            }
            
            else if (i === 0) {
                DP[i][j] = s3[j-1] === s2[j-1] && DP[i][j-1];
            }
            
            else if (j === 0) {
                DP[i][j] = s3[i-1] === s1[i-1] && DP[i-1][j];
            }

            else {
                DP[i][j] = ((DP[i-1][j] && s3[i+j-1] === s1[i-1])) || (DP[i][j-1] && s3[i+j-1] === s2[j-1]);
            }
            console.log('\n');
            console.log("i = " + i + " j = " + j);
            console.log(DP);
            console.log('\n');
        }
    }
    return DP[str1Len][str2Len];


};


// const tst = console.log(isInterleave("b", "?*?"));
//const tst = console.log(isInterleave("aa", "a*"));
 //const tst = console.log(isInterleave("mississippi", "m??*ss*?i*pi"));
//const tst = console.log(isInterleave("abefcdgiescdfimde","ab*cd?i*de"));
//const tst = console.log(isInterleave("aaaa", "***a"));
//const tst = console.log(isInterleave("aa", "a"));
const tst = console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));

/*var isInterleave = function(s1, s2, s3) {    
  let queue = [[0, 0, 0]];
  let set = new Set();
  
  while (queue.length) {
    let [one, two, three] = queue.shift();
	
    if (set.has(`${one}-${two}`)) continue;   // Skipping any duplicates.
    
    set.add(`${one}-${two}`); 
    
    if (three === s3.length && one === s1.length && two === s2.length) return true;
    
    if (one < s1.length && s3[three] === s1[one]) queue.push([one + 1, two, three + 1]);
    if (two < s2.length && s3[three] === s2[two]) queue.push([one, two + 1, three + 1]);
  }
  
  return false; 
};*/


/*var isInterleave = function(s1, s2, s3) {
    const s1Len = s1.length, s2Len = s2.length, s3Len = s3.length, mem = {};
    const isInterleaveRec = function(i1 = 0, i2 = 0, i3 = 0){
        if(i1 === s1Len && i2 === s2Len && i3 === s3Len){
            return true;
        }
        else if(i1 === s1Len){
            return s2.slice(i2) === s3.slice(i3);
        }
        else if(i2 === s2Len){
            return s1.slice(i1) === s3.slice(i3);
        }
        else if(i3 === s3Len){
            //Should not happened
            return false;
        }
        
        let flag = [i1, i2, i3].join(',');
        if(mem[flag] === undefined){
            let res = false;
            if(s3[i3] !== s1[i1] && s3[i3] !== s2[i2]){
                mem[flag] = false;
            }
            if(s3[i3] === s1[i1]){
                res = res || isInterleaveRec(i1 + 1, i2, i3 + 1);
            }
            if(!res && s3[i3] === s2[i2]){
                res = res || isInterleaveRec(i1, i2 + 1, i3 + 1);
            }
            mem[flag] = res;
        }
        return mem[flag];
    }
    
    if(s1Len + s2Len !== s3Len){
        return false;
    }
    else{
        return isInterleaveRec();
    }
};*/