/**
 * @param {string} n
 * @return {string}
 */

let nearestPalindromic = function(n) {
    if (n.length === 1 || (n-1).length === 1) {
        return (n-1).toString();
    }
    let num = [...n];
    numPlus = num.join('');
    numMinus = num.join('');
    while (true) {

        numMinus--;
        console.log("numMinus = " + numMinus);
        if (checkIfPalindrome(numMinus.toString())) {
            return numMinus.toString();
        }

        numPlus++;
        console.log("numPlus = " + numPlus);
        if (checkIfPalindrome(numPlus.toString())) {
            return numPlus.toString();
        }

    }
};

//     for (let i = n.length-1; i>=0; i--) {
//         let num = [...n];
//         for (let j = 0; j < 10; j++ ) {
//             console.log("i = " + i);
//             console.log("j = " + j);
//             console.log("num[i] = " + num[i]);
//             if ((i === 0 && j === 0) || num[i] === j) {
//                 continue;
//             }

//             num[i] = j;
//             console.log("After Change num[i] = " + num[i]);
//             if (checkIfPalindrome(num.join(''))) {
//                 console.log(num);
//                 return num.join('');
//             }
//         }
//     }
// };

function checkIfPalindrome(num) {
    console.log("Checking for palindrome for: " + num)
    for (let i = 0, x = num.length-1; i < x ; i++, x-- ) {
        if(num[i] !== num[x]) {
            return false;
        }
    }
    console.log("is palindrome");
    return true;
}

const tst = nearestPalindromic("444444444");