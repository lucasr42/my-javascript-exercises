
/**
 * Doing the ...args is called a "rest parameter". It does what it looks like and is more clear than
 * using the arguments attribute. Do that instead!
 * 
 * This uses the Array.filter() function to return an array that does not include any value 
 * from the rest parameter. It's a nice clean one liner.
 * 
 * @param {*} array The array to remove items from
 * @param  {...any} args The items to remove from the array
 * @returns A filtered array
 */
const removeFromArray = function(array, ...args) {
    return array.filter(value => !args.includes(value));
}

/**
 * Uses the builtin "arguments" attribute of all Javascript functions to allow any number of 
 * arguments to be passed and to access their values.
 *
 * @returns An array with items removed
 */
// const removeFromArray = function() {
//     const arr = arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         const foundIndex = arr.findIndex((value, index, arr) => value === arguments[i]);
//         if (foundIndex !== -1) {
//             arr.splice(foundIndex, 1);
//             i--; // Look again to account for shrinking array size
//         }
//     }

//     return arr;
// };

// Do not edit below this line
module.exports = removeFromArray;
