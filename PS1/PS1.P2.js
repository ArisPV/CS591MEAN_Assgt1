// Problem 2
//
// A function that takes a string in, and execute the basic mathematical formula that would be found in
// the string. It will always be in the format of digit operator digit.

const operators = {
    '+': (x, y) => {
        return x + y;
    },
    '-': (x, y) => {
        return x - y;
    },
    '*': (x, y) => {
        return x * y;
    },
    '/': (x, y) => {
        return x / y;
    }
};

const evaluate = expression => {
    const digit1 = parseInt(expression[0]);
    const digit2 = parseInt(expression[2]);

    return operators[expression[1]](digit1, digit2);
};

// Test
const test1 = '4+2';
console.log(`${test1} = ${evaluate(test1)}`);
const test2 = '5*7';
console.log(`${test2} = ${evaluate(test2)}`);
const test3 = '6-1';
console.log(`${test3} = ${evaluate(test3)}`);
const test4 = '9/2';
console.log(`${test4} = ${evaluate(test4)}`);