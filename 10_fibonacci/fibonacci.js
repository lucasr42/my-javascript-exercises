const fibonacci = function(num) {
    const cleanNum = parseInt(num);
    if (cleanNum === 0) return 0;
    if (cleanNum < 0) return "OOPS";
    
    const arr = [1, 1];
    for (let i = 1; i < cleanNum-1; i++) {
        const nextNum = arr[i] + arr[i-1];
        console.log(nextNum);
        arr.push(nextNum);
        console.log(arr.toString());
    }
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
