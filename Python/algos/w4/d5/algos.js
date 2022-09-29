/* 
  Recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60 
  75
  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
// function lowestCommonMultiple(a, b, a1 = a, b1 = b) {
//     if (a1 === b1) {
//         return a1
//     }

//     if (a1 < b1) {
//         return lowestCommonMultiple(a, b, a1 + a, b1)
//     } else {
//         return lowestCommonMultiple(a, b, a1, b1 + b)
//     }


// }

// function lowestCommonMultiple(a, b, num = 1) {
//     if(num % a == 0 && num % b == 0){
//         return num
//     }
//     return lowestCommonMultiple(a,b,num+1)
// }

// console.log(lowestCommonMultiple(num1A, num1B));
// console.log(lowestCommonMultiple(num2A, num2B));
// console.log(lowestCommonMultiple(num3A, num3B));
// console.log(lowestCommonMultiple(num4A, num4B));
// console.log(lowestCommonMultiple(num5A, num5B));
/*****************************************************************************/

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
const two_str2 = "1?0?1?";
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, solutions = [], partial = "") {
    const indx = str.indexOf("?")

    if (indx < 0) {
        solutions.push(partial + str)
    } else {
        const front = str.slice(0, indx)
        const back = str.slice(indx + 1)
        const prefix = partial + front
        console.log(`indx: ${indx} || front: ${front} || back: ${back} || partial: ${partial} || prefix: ${prefix}`);
        binaryStringExpansion(back, solutions, prefix + "0")
        binaryStringExpansion(back, solutions, prefix + "1")
    }
    return solutions
}
console.log(binaryStringExpansion(two_str1));

/*****************************************************************************/


function greatestCommonDenominator(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}
// console.log(greatestCommonDenominator(num1A,num1B));
// console.log(greatestCommonDenominator(num2A,num2B));
// console.log(greatestCommonDenominator(num3A,num3B));
// console.log(greatestCommonDenominator(num4A,num4B));
// console.log(greatestCommonDenominator(num5A,num5B));

const lcm = (...arr) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
};

// console.log(lcm(num1A,num1B))
// console.log(lcm(num2A,num2B))
// console.log(lcm(num3A,num3B))
// console.log(lcm(num4A,num4B))
// console.log(lcm(num5A,num5B))