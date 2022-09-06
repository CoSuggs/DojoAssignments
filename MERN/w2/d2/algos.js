# Sets

    - A set is a mathematical term for a collection of values
        - We will mostly use arrays when doing `set` based operations because, although a `Set` datatype exists and can be useful, JS doesn't natively have a multi-set data type.

---

## `Set` Type in JS

    - `new Set(val1, val2, valn)`
    - can pass in an array and when converted to a set it will be auto deduped
        - iterate
        - `.size`
        - `.add(val)`
        - `.has(val)`
        - `.delete(val)`
        - returns`true` if value found & deleted

---

## Types of Sets

### Normal Set

    - No dupes allowed, attempting to add a dupe will result in nothing being added.Creating a set from an array or string with dupes will remove the dupes.
- does not track count of values b / c no dupes

---

### Multiset(contains dupes)

    - tracks count of values because there are dupes

---

### Ordered Set / Multiset

---

### Unordered Set / Multiset

---

### Intersection

    - only values that are shared between the sets deduped

---

### Union

    - [Union Example](https://i.ytimg.com/vi/WqYQ3OakKP0/maxresdefault.jpg)
        - all values from both sets included but deduped
    - ![Union vs Intersection](https://i.pinimg.com/originals/c9/45/d1/c945d12fcf677cc2f783a5c2f2b6acbc.png)

        ---

### Union Multiset

    - the higher count of duped values are kept
    - if there are 3 number ones in one set and 2 number ones in the other set, 3 number ones would be kept

/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let i = 0
    let j = 0
    let arr = []
    //looping as long as i and j are within bonds.
    while (i < sortedA.length && j < sortedB.length) {

        //compare values at i and j to see if they are equal.
        if (sortedA[i] == sortedB[j]) {

            //if they are equal check if it already has the same value. 
            if (!arr.includes(sortedA[i])) {
                arr.push(sortedA[i])

            }

            //if no other smaller value increment both.
            i++
            j++;
        }
        else if (sortedA[i] < sortedB[j]) {
            // if not equal increment the smallest.
            i++
        }
        else {
            j++
        }

    }
    return arr
}