/**
 * @param {string} n
 * @return {string}
 */
// var map={'0':'1'}
// for(let i = 0; i < 10; i++){
//     map[(i+1).toString()] = i.toString();
// }
// console.log(map);
function reverse(str){
    return str.split("").reverse().join("");
}
function largerPalindromic(n){
    console.log('Larger Palindrome');
    console.log('num = ' + n);
    let l = n.length;
    let floor = Math.floor(l/2);
    let ceil = Math.ceil(l/2);
    console.log('floor = ' + floor);
    console.log('ceil = ' + ceil);
    let h = n.slice(0,ceil);
    h = parseInt(h) + 1 + '';
    console.log('h = ' + h);
    let lengthH = h.length;
    console.log('lengthH = ' +lengthH);
    if(floor < ceil){
        if(lengthH === ceil){
            console.log('h + reverse(h.substr(0,floor)) = ' + (h + reverse(h.substr(0,floor))));
            return h + reverse(h.substr(0,floor));
        }else{
            console.log('h.substr(0, ceil) +reverse(h.substr(0,ceil)) = ' + (h.substr(0, ceil) +reverse(h.substr(0,ceil))));
            return h.substr(0, ceil) +reverse(h.substr(0,ceil));
        }
    }else{
         if(lengthH === ceil){
            console.log('h + reverse(h.substr(0,floor)) = ' + (h + reverse(h.substr(0,floor))));
            return h + reverse(h.substr(0,floor));
        }else{
            console.log('h.substr(0, ceil) + 0 +reverse(h.substr(0,ceil)) = ' + (h.substr(0, ceil) + '0' +reverse(h.substr(0,ceil))));
            return h.substr(0, ceil) + '0' +reverse(h.substr(0,ceil));
        }
    }
}
function lessPalindromic(n){
    console.log('Less Palindrome');
    console.log('num = ' + n);
    if(n==11){
        return '9';
    }
    let l = n.length;
    let floor = Math.floor(l/2);
    let ceil = Math.ceil(l/2);
    console.log('floor = ' + floor);
    console.log('ceil = ' + ceil);
    let h = n.slice(0,ceil);
    h = parseInt(h) - 1 + '';
    console.log('h = ' + h);
    let lengthH = h.length;
    console.log('lengthH = ' +lengthH);
    if(floor < ceil){
        if(lengthH === ceil){
            console.log('h + reverse(h.substr(0,floor)) = ' + (h + reverse(h.substr(0,floor))));
            return h + reverse(h.substr(0,floor));
        }else{
            console.log('h.substr(0, floor) +reverse(h.substr(0,floor)) = ' + (h.substr(0, floor) +reverse(h.substr(0,floor))));
            return h.substr(0, floor) +reverse(h.substr(0,floor));
        }
    }else{
         if(lengthH === ceil){
            console.log('h + reverse(h.substr(0,floor)) = ' + (h + reverse(h.substr(0,floor))));
            return h + reverse(h.substr(0,floor));
        }else{
            console.log('h.substr(0, floor) + 9 + reverse(h.substr(0,floor)) = ' + (h.substr(0, floor) + '9' + reverse(h.substr(0,floor))));
            return h.substr(0, floor) + '9' +reverse(h.substr(0,floor));
        }
    }
}

var nearestPalindromic = function(n) {

    let l = n.length;
    if(l===1){
        return n === '0' ? '1' : (n-1).toString();
    }
    let floor = Math.floor(l/2);
    let ceil = Math.ceil(l/2);
    console.log('floor = ' + floor);
    console.log('ceil = ' + ceil);
    let res = n.slice(0, ceil);
    if(floor === ceil){
        res = res + reverse(res);
    }else{
        res = res + reverse(res.substr(0,floor));
    }
    console.log('res = ' + res);
    console.log('n = ' + n);
    let intN = parseInt(n); // Simply converting input String n to Integer n
    if(res == n){
        // the input string is a palindrome
        let less = lessPalindromic(n);
        let larger = largerPalindromic(n);
        if(intN - parseInt(less) <= parseInt(larger) - intN){
            return less
        }else{
            return larger;
        }
      
    }
    else {
        // This is the case when input string is not a palindrome.
        let iRes = parseInt(res) ; // Simply converting res String res to Integer res
        let delta = iRes -  intN ;
        console.log("delta = " + delta);
        if(delta > 0){
            // when difference between res(palinndrome if first half of strinng is reversed to be second half and form a plaindrome) and n is positive
            let less = lessPalindromic(res);
            // you find the larger palodromic num and select the one which is nearest ot n
            if(delta >= intN - parseInt(less) ){
                return less;
            }else{
                return res;
            }
        } else {
            // when difference between res(palinndrome if first half of strinng is reversed to be second half and form a plaindrome) and n is negative or equal
            //
            let larger = largerPalindromic(res);
            // you find the larger palodromic nnum and select the one which is nearest ot n
            if(-delta > parseInt(larger) - intN){
                return larger;
            }else{
                return res;
            }
        }
    }
};

const tst = console.log(nearestPalindromic("1000"));