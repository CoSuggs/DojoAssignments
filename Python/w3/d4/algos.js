/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const num1 = 25;
const expected11 = { quarter: 1 };

const num2 = 50;
const expected21 = { quarter: 2 };

const num3 = 9;
const expected31 = { nickel: 1, penny: 4 };

const num4 = 99;
const expected41 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
// function fewestCoinChange(cents) {}
function makesNoCents(num){
    money = {
        'quarter': 0,
        'dime': 0,
        'nickel': 0,
        'penny': 0,

    }

    while(num >= 0){
        if(num >= 25){
            money["quarter"]++
            num -= 25
            continue;
        }
        else if(num >= 10){
            money["dime"]++
            num -=10
            continue;
        }
        else if(num >= 5){
            money["nickel"]++
            num -= 5
            continue;
        }
        else if(num >= 1){
            money["penny"]++
            num -=1
            continue;
        }
        return money
    }
    

}

console.log(makesNoCents(num1))
console.log(makesNoCents(num2))
console.log(makesNoCents(num3))
console.log(makesNoCents(num4))

/********************************************************************************************************************************* */
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
 function missingValue(unorderedNums) {
    unorderedNums.sort(function(a,b){return a-b})
    
    for(let i = 1; i < unorderedNums.length; i++){
        if(unorderedNums[i-1] !== unorderedNums[i] - 1){
            return unorderedNums[i] - 1
        }
    }
    return unorderedNums
}
console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));
console.log(missingValue(nums4));