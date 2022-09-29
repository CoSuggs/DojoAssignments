/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 * Psuedo Code
 * take in two arrays
 * create a new array
 * push the indexes of both arrays in to the new array
 * 
 */
function interleaveArrays(arr1, arr2) {
    // let longest = arr1.length > arr2.length ? arr1 : arr2
    // let newArr = [];
    // for (let i = 0; i < longest.length; i++) {
    //     if(longest === undefined){
    //         newArr.push(arr2[i])
    //     }
    //     else if(arr2[i] === undefined){
    //         newArr.push(arr1[i])
    //     }else{
    //         newArr.push(arr1[i], arr2[i]);
    //     }
    // }return newArr;
    //     let longestArr = arr1.length > arr2.length ? arr1 : arr2
    //     let returnArr = []
    //************************************************************* */
    //     for (let i = 0; i<longestArr.length; i++){
    //         if (i < arr1.length && i < arr2.length){
    //             returnArr.push(arr1[i], arr2[i])
    //         } else {
    //             returnArr.push(longestArr[i])
    //         }
    //     }return returnArr
    //********************************************************************** */
    // let new_arr = []
    // if (arr1.length >= arr2.length) {
    //     for (let i = 0; i < arr1.length; i++) {
    //         new_arr.push(arr1[i], arr2[i])
    //     }
    // } else {
    //     for (let i = 0; i < arr2.length; i++) {
    //         new_arr.push(arr1[i], arr2[i])
    //     }
    // } return new_arr
    //************************************************************************** */
    //     newArr = []
    //     for(i=0;i <arr1.length || i < arr2.length; i++){
    //         if(i <arr1.length == false && i < arr2.length == true){
    //             newArr += arr2[i]
    //         }else if(i <arr1.length == true && i < arr2.length == false){
    //             newArr += arr1[i]
    //         }else if((i <arr1.length || i < arr2.length) == true){
    //             newArr += arr1[i]
    //             newArr += arr2[i]
    //         }
    //     }return newArr
    //******************************************************************************* */
    var result = [];
    var len1 = arr1.length;
    var len2 = arr2.length;
    if (len1 < len2) {
        var len = len1;
        var arr_longer = arr2;
    } else {
        var len = len2;
        var arr_longer = arr1;
    }
    for (var i = 0; i < len; i++) {
        result.push(arr1[i], arr2[i]);
    }
    for (var i = len; i < arr_longer.length; i++) {
        result.push(arr_longer[i]);
    }
    return result;
}


console.log(interleaveArrays(arrA1, arrB1));
console.log(interleaveArrays(arrA2, arrB2));
console.log(interleaveArrays(arrA3, arrB3));
console.log(interleaveArrays(arrA4, arrB4));
/* ************************************************************************************************************* */
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

// bonus, how many times does the search num appear?
const two_nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const two_searchNum4 = 2;
const two_expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let leftIdx = 0
    let rightIdx = sortedNums.length - 1

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor(rightIdx - leftIdx / 2)

        if (sortedNums[midIdx] === searchNum) {
            return true
        }
        if (searchNum < sortedNums[midIdx]) {
            rightIdx = midIdx - 1
        } else {
            leftIdx = midIdx + 1
        }
    }
    return false
}

console.log(binarySearch(two_nums1, two_searchNum1));
console.log(binarySearch(two_nums2, two_searchNum2));
console.log(binarySearch(two_nums3, two_searchNum3));