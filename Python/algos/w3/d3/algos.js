// /* 
//   Given a SORTED array of integers, dedupe the array 
//   Because array elements are already in order, all duplicate values will be grouped together.
//   Ok to use a new array
//   Bonus: do it in O(n) time (no nested loops, new array ok)
//   Bonus: Do it in-place (no new array)
//   Bonus: Do it in-place in O(n) time and no new array
//   Bonus: Keep it O(n) time even if it is not sorted
// */

// const nums1 = [1, 1, 1, 1];
// const expected1 = [1];

// const nums2 = [1, 1, 2, 2, 3, 3];
// const expected2 = [1, 2, 3];

// const nums3 = [1, 1, 2, 3, 3, 4];
// const expected3 = [1, 2, 3, 4];

// const nums4 = [1, 1];
// const expected4 = [1];

// /**
//  * De-dupes the given sorted array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {Array<number>} The given array deduped.
//  * Psuedo code
//  * take in an array
//  * deupe the array by keeping the first value, and deleteing the deuped values
//  */
// function dedupeSorted(nums) {
//     new_arr = []
//     new_arr.push(nums[0])
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] != new_arr[new_arr.length - 1]) {
//             new_arr.push(nums[i])
//         }
//     } return new_arr
// }
// console.log(dedupeSorted(nums1));
// console.log(dedupeSorted(nums2));
// console.log(dedupeSorted(nums3));
// console.log(dedupeSorted(nums4));
/******************************************************************************************************************* */
/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 7, 5];
const expect1 = 6;

const nums2 = [3, 5, 5];
const expect2 = 3;

const nums3 = [3, 3, 5];
const expect3 = 5;

const nums4 = [5];
const expect4 = 5;

const nums = [];
const expect5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 * take in an array
 * iterated through the array
 * if there are any duplications then ignore those
 * return the first non-repeated value from the array.
 */
function firstNonRepeated(nums) {
    const freq = {};

    for (const num of nums){
        if(freq.hasOwnProperty(num)){
            freq[num]++;
        }else {
            freq[num] = 1;
        }
    }

    for (const num of nums){
        if (freq[num] ===1 ){
            return num;
        }
    }return null;
//     for (let i = 0; i < num.length; i++) {
//         for (let j = 0; j < num.length; j++)
//         if (num[j] != num[i]) {
//             num.pop(num[i])
//             num.pop(num[j])
//         // }else if ()
//     } return num
// }
}
console.log(firstNonRepeated(nums1));
