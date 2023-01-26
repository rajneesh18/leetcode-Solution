/**
 * First Unique Character in a String
 * Given a string s, find the first non-repeating character in it and return the index. If it does not exist, return -1.
 * Example:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Input: s = "aabb"
 * Output: -1
 */


/**
 * @param {string} s
 * @return {number}
 * */
let firstUniqChar = (s) => {
    let count = new Map();
    for(let i = 0; i < s.length; i++) {
        let val = getMapValue(count, s[i]) + 1;
        count.set(s[i], val);
    }
    for(let i = 0; i < s.length; i++) {
        if(count.get(s[i]) == 1) return i;
    }

    return -1;
}
let getMapValue = (map, key) => { return map.get(key) || 0 }