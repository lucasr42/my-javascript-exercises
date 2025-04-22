
/**
 * Uses the builtin "arguments" attribute of all Javascript functions to allow any number of 
 * arguments to be passed and to access their values.
 *
 * @returns An array with items removed
 */
const removeFromArray = function() {
    const arr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        const foundIndex = arr.findIndex((value, index, arr) => value === arguments[i]);
        if (foundIndex !== -1) {
            arr.splice(foundIndex, 1);
            i--; // Look again to account for shrinking array size
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
