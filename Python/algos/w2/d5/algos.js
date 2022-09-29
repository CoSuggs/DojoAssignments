/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello   world     ";
const expected2 = "hello   world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 * * PSEUDO CODE
 * create a function that takes in a string 
 * use a for loop to iterate through the string from from end and from back end
 * use if statment to recognice space up until the first alphanumerical value 
 *  then delete all spaces from begining and end of string (ambiguous)
 *  returning a new string 
 *  OR OG string without space
 */
function trim(str) {
    // newStr = str.split(" ")
    // for (let i = 0; i < str.length; i++) {
    //     if(newStr[i] === ' '){
    //         newStr.pop(newStr[i])
    //     } else{
    //         continue
    //     }
    // }return newStr

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            str = str.slice(i, str.length - 1);
            break;
        }
    }
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            str = str.slice(0, i + 1);
            break;
        }
    }
    return str;
}
console.log(trim(str1))
/*****************************************************************************/

/*
//   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once.
//   Is there a quick way to determine if they aren't an anagram before spending more time?
//   Given two strings
//   return whether or not they are anagrams
// */

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        return str2.includes(str1[i]) ? true : false
    }
}
console.log(isAnagram(two_strA1, two_strA2))