/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 5, 1, 1, 4, 4];
const expected6 = [];

const nums7 = [5, 2, 1, 8, 8, 8, 4, 2, 2, 1, 5];
const expected7 = [2,8];


//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 * psuedo code
 * take in an array
 * pass through the array and count the number of times each value repeats (for or while loop better for this?)
 * print the values that iterate the most
 * 
 */
 function mode(nums) {
    if(nums.length === 0){
        return [];
    }
    
    var temp = {};
    for(var i=0; i<nums.length; i++){
        if(nums[i] in temp){
        temp[nums[i]]++;
        } else {
        temp[nums[i]] = 1;
        }
    }

    var result = [];
    var max_num = 0;
    for(var i in temp){
        if(temp[i] > max_num){
        max_num = temp[i];
        }
    }

    for(var i in temp){
        if(temp[i] === max_num){
        result.push(parseInt(i));
        }
    }

    if(result.length === Object.keys(temp).length && result.length !== 1){
        return [];
    }
    return result;
}
console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));
console.log(mode(nums6));
console.log(mode(nums7));