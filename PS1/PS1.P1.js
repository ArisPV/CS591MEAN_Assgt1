// Problem 1
//
// Takes a string as input and returns a new string that contains all of the letters in the original string.
// This should be done in alphabetic order. Ignore punctuation and numbers.

const alphabetize = word => {
    let chars = word.split('').sort().join('');
    return chars;
};

// Test
console.log(`The string alphabetized is: ${alphabetize('supercalifragilisticexpialidocious')}`);