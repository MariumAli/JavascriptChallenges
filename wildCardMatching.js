/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// time: Looks like O(n+m) but worst case is O(nm) space: O(1)
// For case like s ="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" to match p ="*aaaaaab"( '*' in the beginning)
var isMatch = function(s, p) {
    let sp = 0, pp = 0, match = 0, star = -1, sl = s.length, pl = p.length;
    //The point of match variable is to only increment
    //sp on the round when pp is in bound and using star to match
    //without match, ++sp will increment on the iteration when pp is out of bound
    //getting set back to proper letter, making sp ending faster for
    //case like aaaa ***a
    
    //disect s loop and p loop instead of doing it at once
    while(sp < sl){
        if(pp < pl && (s[sp] === p[pp] || p[pp] === '?')){
            ++sp;
            ++pp;
        }else if(pp < pl && p[pp] === '*'){
            star = pp;
            match = sp;
            ++pp;
        }else if(star != -1){
            pp = star + 1;
            ++match;
            sp = match;
        }
        else return false;
    }
    
    //left over pattern could have *s so still could be true like a***********
    while(pp < pl && p[pp] === '*'){
        ++pp;
    }
    
    //if pattern has all been matched
    return pp === pl;
};
// const tst = console.log(isMatch("b", "?*?"));
//const tst = console.log(isMatch("aa", "a*"));
 //const tst = console.log(isMatch("mississippi", "m??*ss*?i*pi"));
//const tst = console.log(isMatch("abefcdgiescdfimde","ab*cd?i*de"));
const tst = console.log(isMatch("aaaa", "***a"));
//const tst = console.log(isMatch("aa", "a"));


/* var isMatch = function(s, p) {
    var j = 0;
    var starj = -2;
    var i = 0;
    var match = -2
    while(i < s.length){
        if(p[j] == '?' || p[j] == s[i]){
            i++;
            j++;
        }else if(p[j] == '*'){
            match = i;
            starj = j;
            j++;
        }else if(starj != -2){
            j = starj + 1;
            i = match;
            match++;
        }else{
            return false
        }
    }

    if(j == p.length){
        return true
    }
    for(var i = 0;i < p.slice(j).length;i++){
        if(p.slice(j)[i]!='*'){
           return false
        }
    }
    return true
};  */

// i was trying to avoid
/* 
Analysis:
For each element in s
If s=p or p == ? which means this is a match, then goes to next element s++ p++.
If p=='*', this is also a match, but one or many chars may be available, so let us save this '*'  position and the matched 's' position.
If not match, then we check if there is a * previously showed up,
       if there is no *,  return false;
       if there is an *,  we set current p to the next element of *, and set current s to the next saved s position.
*/