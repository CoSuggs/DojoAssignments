/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 555;
const expected4 = 6;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {

    if (num < 10) {
        return num;
    } else {
        num = num.toString().split('');
        numArr = num.reduce((a, b) => parseInt(a) + parseInt(b));
        return sumToOneDigit(numArr);
    }
}
// function sumToOneDigit(num, sum = 0) {
//     if(num < 10){
//         return num
//     }
//     if(sum < 10 && sum > 0){
//         return sum
//     }
//     strnum = num.toString()
//     numArr = strnum.split('')
//     var intnum
//     for(i = 0; i< strnum.length; i++){
//         intnum = parseInt(strnum[i])
//         sum += intnum
//     }
//     return sumToOneDigit(num, sum)
// }
// function sumToOneDigit(n) {
//     // Termination Condition if it's bad data (not a number)
//     if (isNaN(parseInt(n))) {
//         return null;
//     }

//     // base case: return solution
//     if (n < 10) {
//         return n;
//     }

//     const strNum = n.toString();
//     let sum = 0;

//     for (const strDigit of strNum) {
//         sum += parseInt(strDigit);
//     }

//     return sumToOneDigit(sum);
// }

console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));
console.log(sumToOneDigit(num4));
/*****************************************************************************/

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];

const two_str2 = "cody";
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 * Psuedo Code
 * create a function that takes in a string
 * seperate the string into sub strings using split
 * then using a for-loop uterate through the string
 * 
 */
function generateAnagrams(str, solutions = [], partial = "") {
    if (!str) {
        solutions.push(partial);
    }

    for (let i = 0; i < str.length; i++) {
        const leftSlice = str.slice(0, i);
        const rightSlice = str.slice(i + 1); // skips current letter
        generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
}

console.log(generateAnagrams(two_str1));
console.log(generateAnagrams(two_str2));