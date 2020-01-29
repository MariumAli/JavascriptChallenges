/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
let findLadders = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    wordSet.add(beginWord);
    
    if (!wordSet.has(endWord)) return [];
    
    const distanceMap = new Map();
    const wordMap = new Map();
    
    // 1. BFS construct distanceMap and wordMap from end to start
    const queue = [];
    const visited = new Set();
    
    // Flag to check if we can reach start from end
    let reached = false;
    
    queue.push(endWord);
    visited.add(endWord);
    let distance = 0;
    distanceMap.set(endWord, distance);
    while(queue.length !== 0) {
        let size = queue.length;
        distance++;
        for(let i = 0; i < size; i++) {
            const word = queue.shift();
            for(let w of getNextWords(word, wordSet)) {
                // push into wordMap from start to end
                // we need to push here before visited check
                if (!wordMap.has(w)) wordMap.set(w, []);
                wordMap.get(w).push(word);
                
                if (visited.has(w)) continue;
                if (w === beginWord) reached = true;
                
                // put into distance map
                distanceMap.set(w, distance);
                
                queue.push(w);
                visited.add(w);
            }
        }
    }
    
    console.log(distanceMap);
    console.log(wordMap);
    // short circuit if can not reach
    if (!reached) return [];
    
    // 2. DFS find path where distance - 1
    const result = [];
    dfs(result, [beginWord], beginWord, endWord, wordMap, distanceMap);
    
    console.log(result)
    return result;
};

var dfs = function(result, tmpPath, word, endWord, wordMap, distanceMap) {
    if (word === endWord) {
        result.push([...tmpPath]);
        // console.log('result  ->  ' + result);
        return;
    }
    
    for (let nextWord of wordMap.get(word)) {
        // console.log('nextWord in loop ->  ' + nextWord);
        if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
            // console.log('nextWord inside if ->  ' + nextWord);
            // console.log('word inside if  ->  ' + word);
            tmpPath.push(nextWord);
            dfs(result, tmpPath, nextWord, endWord, wordMap, distanceMap);
            tmpPath.pop();
            // console.log('pop   ->   ' + tmpPath);
            // console.log('nextWord  ->  ' + nextWord);
            // console.log('word  ->  ' + word);
        }
    }
}

var getNextWords = function(word, wordSet) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        let currentCode = word.charCodeAt(i);
        for (let c = 97; c <= 122; c++) {
            if (c !== currentCode) {
                const chars = word.split('');
                chars[i] = String.fromCharCode(c);
                let newWord = chars.join('');
                if (wordSet.has(newWord)) {
                    result.push(newWord);
                }
            }
        }
    } 

    return result;
}

const tst = findLadders("hit","cog",["hot","dot","dog","lot","log","cog"]);