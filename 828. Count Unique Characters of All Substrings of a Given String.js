/**
 * 828. Count Unique Characters of All Substrings of a Given String
 * Let's define a function countUniqueChars(s) that return the number of unique characters on s.
 *
 * Example: calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since
 * they appear only once in s, therefore countUniqueChars(s) = 5.
 *
 * Given a string s, return the sum of countUniqueChars(t) where t is the substring of s. The text cases are generated
 * such that the answer fit in a 32-bit integer.
 *
 * Notice that some substrings can be repeated so it this case you have to count the repeated once too.
 *
 * Example:
 * Input: s = "ABC"
 * Output: 10
 * Explanation: All possible substrings are: "A", "B", "C", "AB", "BC", and "ABC".
 *
 * Input: s = "ABA"
 * Output: 8
 * Explanation: The same as example above, except countUniqueChars("ABA") = 1.
 *
 * Input: s = "LEETCODE"
 * Output: 92
 * */

/**
 * @param {string} s
 * @return {number}
 * */
let uniqueLetterString = (s) => {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        let l = i - 1;
        let r = i + 1;
        while(l >= 0 && s[l] !== char) l--;
        while(r < s.length && s[r] != char) r++;
        count += (i-l) * (r-i);
    }
    return count;
}
console.log(uniqueLetterString('LEETCODE'));

