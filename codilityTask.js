// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // if (!S.trim().length) {
    //     return N*2;
    // }
    reservedSeats = new Set(S.split(' '));
    let planeStruc = Array(N+1).fill(null).map(c => Array(12).fill(0));
    let mapOfColumn = new Map([[0, 'A'], [1, 'B'], [2, 'C'], [3, 'X'], [4, 'D'], [5, 'E'], [6, 'F'], [7, 'G'], [8, 'X'], [9, 'H'], [10, 'J'], [11, 'K']]);
    result = 0;
    console.log(mapOfColumn);
    for (let row = 0 ; row <= N; row++) {
        for (let col = 0; col < 12; col ++) {
            if (row === 0) {
                continue;
            }
            if(reservedSeats.has((row + mapOfColumn.get(col)))) {
                console.log('This seat is reserved');
                continue;
            }
            planeStruc[row][col] = col === 0 ? 0 : (planeStruc[row][col-1] === 4 ? 1 : planeStruc[row][col-1] + 1);

            if (col === 3 || col === 8) {
                continue;
            }

            if ((col-1) === 3 || (col-1) === 8) {
                console.log('there is a break');
                if (planeStruc[row][col-2] === 2) {
                    planeStruc[row][col] = planeStruc[row][col-1] + 1;
                } else if (planeStruc[row][col-1] === 3) {
                    planeStruc[row][col-3] -= 1;
                    planeStruc[row][col-2] -= 1;
                    planeStruc[row][col] = planeStruc[row][col-1] + 1;
                } 
            }
            // if (col === 3 || col === 8) {
            //     console.log('there is a break');
            //     if (planeStruc[row][col-1] === 2) {
            //         planeStruc[row][col] = planeStruc[row][col-1] + 1;
            //     } else if (planeStruc[row][col-1] === 3) {
            //         planeStruc[row][col-2] -= 1;
            //         planeStruc[row][col-1] -= 1;
            //         planeStruc[row][col] = planeStruc[row][col-1] + 1;
            //     } 
            // } else {
            //     planeStruc[row][col] = col === 0 ? 0 : (planeStruc[row][col-1] === 4 ? 1 : planeStruc[row][col-1] + 1);
            // }

            if (planeStruc[row][col] == 4) {
                result ++;
            }
    
        }
    }
    console.log(planeStruc);
    return result;
}

let t = solution(5, '1A 2F 1C');
console.log('result is ' + t);

