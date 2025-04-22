const sumAll = function(num1, num2) {
    if (num1 < 0 || 
        num2 < 0 || 
        !Number.isInteger(num1) || 
        !Number.isInteger(num2)) return "ERROR";
    
    let smaller;
    let larger;
    if (num1 < num2) {
        smaller = num1;
        larger = num2;
    } else {
        smaller = num2;
        larger = num1;
    }

    for (let i = smaller+1; i <= larger; i++) {
        smaller += i;
    }

    return smaller;
};

// Do not edit below this line
module.exports = sumAll;
