/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 * Pseudo code
 * 1: create function that takes in an array
 * 2: create a temp var isSorted (or something) = false
 * 3: create while loop while !isSorted
 *      a: set isSorted to true
 *      b: for loop through our input array (excluding last index)
 *          -- check if current value > then one next to it
 *              -- if current val >, swap the two values & set isSorted to false
 *          -- continue on to next loop in for loop
 * 4: return our array
 */
function bubbleSort(nums = []) {
    var isSorted = false;
    while (!isSorted) {
        isSorted = true
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
                isSorted = false
            }
        }
    } return nums;
}
console.log(bubbleSort(numsOrdered));
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));