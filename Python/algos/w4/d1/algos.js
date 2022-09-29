/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 * 
 * Remeber
 * - base case -> if conditional
 * - Recursive statement -> tends to have a return attached
 */
function sumArr(nums, i = 0) {
    if (nums.length === 0) return 0

    if (i === nums.length) {
        return 0
    }
    return nums[i] + sumArr(nums, i + 1)
}
// let sum = 0;
// for (let x = 0; x<nums.length; x++)
// if (nums[x] === 0){
//     console.log(nums)
// }
// else if (nums[x] > 0){
//     sum = sum + nums[x]
// }
// return sum

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))

/*****************************************************************************/

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(n) {
    // get rid of decimals
    const int = parseInt(n);

    // Termination Condition if it's bad data (not a number)
    if (isNaN(int)) {
        return null;
    }

    // base case
    if (int < 1) {
        return 0;
    }
    // if the return keyword is missing below, undefined because returns that
    // happen deeper in the recursion don't get returned all the way out.
    return int + recursiveSigma(int - 1);
}