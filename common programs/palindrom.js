/**
 * Palindrome Number
 * */

let palindrome = (n) => {
    let size = n.toString().length; let reverse = 0;
    let num = n;
    for(let i = 0; i < size; i++) {
        let rem = num%10;
        num = Math.floor(num/10);
        reverse = reverse * 10 + rem;
    }
    return n === reverse ? true : false;
}
console.log(palindrome(121));