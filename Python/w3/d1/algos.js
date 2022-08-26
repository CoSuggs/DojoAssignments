/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 * 
 * psuedo code
 * take in an array
 * count the zeroes between the 1's 
 * if there is less than six, return false
 * if equal are greater than 6 return true
 * 
 */
function socialDistancingEnforcer(queue) {
    var distance = 6
    for (var i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            if (distance < 6) {
                return false
            }
            distance = 0
        }
        if (queue[i] == 0) {
            distance += 1
        }
    }
    return true
}
console.log(socialDistancingEnforcer(queue1));
console.log(socialDistancingEnforcer(queue2));
console.log(socialDistancingEnforcer(queue3));
console.log(socialDistancingEnforcer(queue4));
/*********************************************************************************************************** */
/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected11 = 2;

const nums2 = [9, 9];
const expected21 = -1;

const nums3 = [9,18,9];
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 * Psuedo code 
 * take in an array of nums
 * take the heighes value in the array
 * add the values on either side of the array
 * if both sides are equal to each other print the value of the larger number of indexes that equal the other side
 * if false return -1
 * 
*/
function balanceIndex(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (add_before(nums, i) === add_after(nums, i)) {
            return i;
        } else {
            continue;
        }
    }
    return -1;
}

function add_before(nums, idx) {
    var sum = 0;
    for (var i = 0; i < idx; i++) {
        sum += nums[i];
    }
    return sum;
}
function add_after(nums, idx) {
    var sum = 0;
    for (var i = idx + 1; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
console.log(balanceIndex(nums3));