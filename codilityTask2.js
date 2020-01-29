// int[] lattice(int ax, int ay, int bx, int by) {
//     int dx = bx - ax, dy = by - ay;

//     // rotate 90
//     int rx = dy, ry = -dx;

//     // reduce
//     int gcd = Math.abs(gcd(rx, ry));
//     rx /= gcd;
//     ry /= gcd;
    
//     return new int[]{bx + rx, by + ry};
// }

// private int gcd(int x, int y) {
//     return y == 0 ? x : gcd(y, x % y);
// }


    // write your code in JavaScript (Node.js 8.9.4)
    // Hey Haikal im sorry but i have already solved a questio LIKE this one in a interview question founnd onn leet code. needed to be honest with you !!
    // still without revising the solutionn will be attemptinng it again for sake of my sanity and truthfulness.
    
    // That was a different question (just an update) this one is tricky !

    let distX = BX - AX;
    let distY = BY - AY;
     // taking a 90 degrees turn 
     
     //Alice wants to go from A to B. we caculate distance because on point B it rotates 90 degree
     // and to find equation of linne after rotatinng 90 degrees will be 
     // (dy, -dx)  <= commo maths (geometry)

     let rotateX = distY;
     let rotateY = -distX;
     
     // now to reach from A to B. If we consider Alice takes 1 step each, Alice has to take distX steps first in horizonntal directionn (each of step size 1). Then distY steps in vertical direction.
     // But, What will be the step size of vertical dimensional steps? We will evennly distribute it. Therefore, distY/distX is the step size For Y.
     
     // Now step sizes should be integer only. so we find LCM of LCM(distY,distX). for a sinngle step. for n steps it would be n*LCM(distY,distX);
     // IF ALICE TAKES k STEPS TOWARDS B (I.E. ALONG LINNE JOINING A AND B - AB). THEN NEW COORDINATES WILL BE (AX + k, AY + k * distY/distX ).
     // Therefore, whenn alice rotates 90 and take a step ahead. we kow that her horizontal move will be 'k' and vertical move will be 'k * distY/distX'.
     //horizontalMove = k = LCM(distY,distX)/distY
     // verticalMove = k*distY/distX = LCM(distY,distX)/distX
     //PROPERTY OF GCD = LCM(A*B) * GCD(A*B) = A*B.
     let GCD = Math.abs(greatestCommonDivisor(rotateX, rotateY));
     rotateX /= GCD;
     rotateY /= GCD;

     return `${BX + rotateX},${BY + rotateY}`;
    
}

function greatestCommonDivisor(x, y) {
    return y === 0 ? x : greatestCommonDivisor(y, x % y);
}
t = solution (2,2,2,-3);
console.log(t);