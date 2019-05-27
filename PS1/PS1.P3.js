// Problem 3
//
// A function that takes in a string and a function. It executes the function with the passed string and
// returns the result.

const execute = (callback, str) => {
    return callback(str);
};

let count = 0;

class obj {
    constructor(str) {
        this.originalString = str;
        this.modifiedString = str.replace(/a/g, function() {
            count++;
            return 'A';
        });
        this.numberReplaced = count;
        this.length = this.modifiedString.length;
    }
}

const testString = 'supercalifragilisticexpialidocious';

console.log(execute(lambdaFunc1 = str => {
    return str.split(/(?=c)/)
}, testString));

console.log(execute(lambdaFunc2 = str => {
    return new obj(str)
}, testString));