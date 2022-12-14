/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const wexpected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const wexpected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const wexpected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function musicRuntime(busDuration, songDurations) {
    let longestSong = 0
    let target = busDuration - 30
    let ans = []
    let ansIdx = []
    for (let i = 0; i < songDurations.length; i++) {
        if (songDurations[i] > longestSong) {
            longestSong = songDurations[i]
        }
        for (let j = i; j < songDurations.length; j++) {
            if (songDurations[i] + songDurations[j] === target) {
                ans.push([songDurations[i], songDurations[j]])
                ansIdx.push([i, j])
            }
        }
    }
    console.log(ans)
    console.log(longestSong)
    for (let i = 0; i < ans.length; i++) {
        if (ans[i].includes(longestSong)) {
            return ansIdx[i]
        }
    }
    return [-1, -1]
}
console.log(musicRuntime(busDuration1, songDurations1));
console.log('/*********************************************************************************************/')
console.log(musicRuntime(busDuration2, songDurations2));
console.log('/*********************************************************************************************/')
console.log(musicRuntime(busDuration3, songDurations3));
console.log('/*********************************************************************************************/')


/************************************************************************************************************************************ */

/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

function canBuildS1FromS2(s1, s2) {
    let map = {}
    for (let i = 0; i < s2.length; i++) {
        if (s2.charAt(i) in map) {
            map[s2.charAt(i).toLowerCase()] += 1
        } else {
            map[s2.charAt(i).toLowerCase()] = 1
        }
    }
    for (let i = 0; i < s1.length; i++) {
        if(s1.charAt(i).toLowerCase() in map){
            if(map[s1.charAt(i).toLowerCase()] > 0){
                map[s1.charAt(i).toLowerCase()] -= 1
            }else{
                return false
            }
        }else{
            return false
        }
    }
    return true
}

console.log(canBuildS1FromS2(strA1,strB1));
console.log('/*********************************************************************************************/')
console.log(canBuildS1FromS2(strA2,strB2));
console.log('/*********************************************************************************************/')
console.log(canBuildS1FromS2(strA3,strB3));
console.log('/*********************************************************************************************/')
console.log(canBuildS1FromS2(strA4,strB4));
console.log('/*********************************************************************************************/')
console.log(canBuildS1FromS2(strA5,strB5));
console.log('/*********************************************************************************************/')