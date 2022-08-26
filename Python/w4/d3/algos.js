/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "python is almost done";
const expected2 = "enod tsomla si nohtyp";

const str3 = "";
const expected3 = "";

const str4 = "roll for initiative";
const expected4 = "evitaitini rof llor";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 * 
 * WHAT WE NEED
 * - base case -> what is going to stop the recursion
 * - recursive call
 * 
 * WHAT WE SHOULD LOOK FOR
 * - edge case
 */
function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    else {
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}
console.log("this is the original:", str1);
console.log("this is the reverse:", reverse(str1));
console.log("this is the original:", str2);
console.log("this is the reverse:", reverse(str2));
console.log("this is the original:", str3);
console.log("this is the reverse:", reverse(str3));
console.log("this is the original:", str4);
console.log("this is the reverse:", reverse(str4));

/***************************************************************************************************************************************************************/

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
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

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    let half = Math.floor((sortedNums.length - 1) / 2)
    // console.log("half " + sortedNums[half] + ", half-1 " + sortedNums[half-1] + ", half+1 " + sortedNums[half+1])
    if (sortedNums[half] === searchNum || sortedNums[half - 1] === searchNum || sortedNums[half + 1] === searchNum) {
        return true
    }
    if (sortedNums[half] > searchNum) {
        return binarySearch(sortedNums.slice(0, half), searchNum)
    }
    else if (sortedNums[half] < searchNum) {
        return binarySearch(sortedNums.slice(half, -1), searchNum)
    }
    return false
}

console.log(binarySearch(two_nums1, two_searchNum1));
console.log(binarySearch(two_nums2, two_searchNum2));
console.log(binarySearch(two_nums3, two_searchNum3));