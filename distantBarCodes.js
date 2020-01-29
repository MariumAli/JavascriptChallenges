/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

 /*In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

 

Example 1:

Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,2,1,2,1]
 

Note:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000 
*/

 var rearrangeBarcodes = function(barcodes) {
	const map = {};
    barcodes.forEach(b => map[b] = (map[b] || 0) + 1);
    console.log(map);
    const keys = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]);
    console.log(keys);
	let idx = 1;
	for (let k of keys) {
        let t = map[k];
        console.log('-------------');
        console.log('k = '+k);
		for (let i = 0; i < t; i++) {
            console.log("i = " + i);
			if (idx >= barcodes.length) idx = 0;
            console.log("idx = " + idx);
			barcodes[idx] = k;
			idx += 2;
            console.log("bc = " + barcodes);
		}
        console.log('-------------');
	}

	return barcodes;
};
const tst = console.log(rearrangeBarcodes([1,1,1,1,3,4,4,4,4,5,5,5,5,5,5,5,5,2,1,2,1,1,2,3,3]));



/*
var rearrangeBarcodes = function(barcodes) {
    const counts = Array(10001).fill(0)
    
    let maxCount = 0
    let maxCode = 0
    
    for (const barcode of barcodes) {
        maxCount = Math.max(maxCount, ++counts[barcode])
        maxCode = maxCount === counts[barcode] ? barcode : maxCode
    }
    
    let pos = 0
    
    for (let i = 0; i < counts.length; i++) {
        let code = i === 0 ? maxCode : i
        
        while (counts[code]-- > 0) {
            barcodes[pos] = code
            pos = pos + 2 < barcodes.length ? pos + 2 : 1
        }
    }
    
    return barcodes
};*/