/**
 * Find the factorial of a number
 * Example:
 * 5! = 1*2*3*4*5 = 120
 * 0! = 1;
 * */

let factorial = (n) => {
    if(n == 0 || n == 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));


/**
 * Trailing zeroes in factorial
 * */

let trailingZeroes = (n) => {
    let res = 0;
    for(let i = 5; i <= n; i = i * 5) {
        res = res + Math.floor(n/i);
    }
    return res;
}
console.log(trailingZeroes(30));