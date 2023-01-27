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
console.log(factorial(150));