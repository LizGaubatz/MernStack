// 1
Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// 2

// Recursive would be faster because it avoids repetative problems. 
// If something has already been done it has no need to run it again. 

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

const story = "Lorem ipsum dolor sit amet";
function reverse(story) {
    let reversed1 = "";
    for (let i = story.length - 1; i >= 0; i--){
        reversed1 += story[i]
        }
        return reversed1
}
console.log(reverse(story))

