/**
 * Find the Greatest Common Divisor of 2 numbers
 * Example:
 * Input: 9, 21
 * Output: 3
 * */

let gcd = (a,b) => {
    if(b == 0) return a;
    return gcd(b, a%b);
}
console.log(gcd(9,21));