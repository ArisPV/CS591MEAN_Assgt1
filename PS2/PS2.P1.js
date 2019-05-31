// Problem 1
//
// Use two generators to implement a series of even Fibonacci numbers. The first one should return all
// Fibonacci numbers, the second should use the first to obtain the even Fibonacci numbers.

function* fibonacci () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        yield val1;
        result = val1+val2;
        val1 = val2;
        val2 = result;
    }
};

function* evenFibonacci () {
    myFibs = fibonacci();
    while (true) {
        temp = myFibs.next().value;
        if (temp % 2 == 0) {
            yield temp;
        }
    }
};

myFibss = evenFibonacci();

let count = 5;
while (count --> 0) {
    console.log(myFibss.next().value)
};