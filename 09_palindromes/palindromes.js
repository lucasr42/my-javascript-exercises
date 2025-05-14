const isValidChar = function (char) {
    // Check if character is one of the following:
    // - lowercase letter
    // - number
    // - Not a space
    const ascii = char.charCodeAt(0);
    let ans = true;
    if ((ascii < 48 || ascii > 57) && (ascii < 97 || ascii > 122)) {
        console.log(`Char ${char} is not valid letter or number`);
        ans = false;
    } else if (ascii == 32) {
        console.log(`Char ${char} is a space`);
        ans = false;
    }
    console.log(`Is char: ${char} valid? ${ans}`);
    return ans;
}

const palindromes = function (word) {
    console.log(`Testing: ${word}`);
    // 1. normal
    // 2. ignore punctuation
    // 3. make everything lowercase to count it
    // 4. ignore spaces
    // 5. numbers count if they match
    let end = word.length - 1;
    for (let i = 0; i < word.length/2; i++) {
        let first = word[i].toLowerCase();
        let last = word[end].toLowerCase();

        while (!isValidChar(first)) {
            console.log(`first letter - word[${i}] = ${word[i]}`);
            i++;
            first = word[i];
        }
        while (!isValidChar(last)) {
            console.log(` last letter - word[${i}] = ${word[i]}`)
            end--;
            last = word[end];
        }

        if (first !== last) {
            return false;
        }
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
