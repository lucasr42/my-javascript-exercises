const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
    // let sum = 0;
	// for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    // }
    // return sum;
    if (nums.length === 0) return 0;
    return nums.reduce((sum, num) => {
        return sum + num;
    })
};

const multiply = function(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((prod, num) => {
        return prod * num;
    })
};

const power = function(num1, num2) {
    let res = 1;
    for (let i = 0; i < num2; i++) {
        res *= num1;
    }
    return res;
    // return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0) return 1;
    console.log("num: ", num);
    return num *= factorial(num-1);
    // let res = 1;
    // for (let i = 1; i <= num; i++) {
    //     res *= i;
    // }
    // return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
