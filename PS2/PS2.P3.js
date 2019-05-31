// Problem 3
//
// Write a function that prints the cube value of its input. Next write a single line of code to call the
// function on each value of the array.

const cube = (x) => {
    return x*x*x;
};

const y = [1,2,3,4,5,6,7].map(x => {return cube(x); } );

console.log(y);