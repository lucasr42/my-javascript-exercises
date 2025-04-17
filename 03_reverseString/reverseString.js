const reverseString = function(word) {
    if (word.length === 0) return '';
    if (word.length === 1) return word;
    
    let splitWord = [...word];
    let length = splitWord.length-1;

    for (let i = 0; i <= length/2; i++) {
        const temp = splitWord[i];
        splitWord[i] = splitWord[length-i];
        splitWord[length-i] = temp;
    }
    
    return splitWord.reduce((acc, cur) => acc + cur);
};

// Do not edit below this line
module.exports = reverseString;
