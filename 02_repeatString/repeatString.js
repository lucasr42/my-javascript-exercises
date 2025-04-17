const repeatString = function(str, num) {
    if (num === 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    }
    let newStr = str;
    for (let i = 0; i < num-1; i++) {
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
