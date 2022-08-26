/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcdddaa";
const expected1 = "a4b2c1d3a2";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 * 
 *      my psuedo code...
 *      - take in a string
 *      - identify and count the number of times the letters repeat = while loop?
 *      - move the letter into a new string, followed by the count of the string
 *      - repeat going through the string until end of string
 *      - return new encoded string
 *     Profe psuedo code...
 *      - create a function that takes in a string
 *      - if length of the given string < 3
 *          - return given string
 *      - create a count variable
 *      - create a new string variable
 *      - loop through a given string
 *          - compare current char with the next char
 *          - if they are the same 
 *              - count++
 *          -if they are not the same
 *              - count++
 *              - add the cuyrrent char to the newSttring variable
 *              - add the count
 *              - reset count = 0
 *          - if the length of the newString = the length of the given string
 *              - return the given string
 *          - return the new string
 */
function encodeStr(str) {
    if (str.length < 3) {
        console.log("return before work")
        return str
    }
    var count = 0
    var newString = ""
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let nextChar = str[i + 1]
        if (currentChar === nextChar) {
            count++
        } else {
            count++
            newString += currentChar + count
            count = 0
        }
    }
    if (newString.length >= str.length) {
        return str
    }
    return newString
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))


/*****************************************************************************/

/* 
String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 * 
 *  * psuedo code...
 * - take in a string
 * - identify and pass through the count until the next letter
 * - move the letter into a new string the same number of times the count states behind the letter
 * - repeat going through the string until end of string
 * - return new decoded string
 */
function decodeStr(str = "") {
    let decoded = "";
    let i = 0;

    while (i < str.length) {
        // Retrieve letter at current index then increment the idx (post increment)
        // to get to the num that comes after the char.
        let char = str[i++];
        // the num is a string so multiple digits need to be concatenated before
        // converted to a number. '1' + '1' => '11'. 1 + 1 => 2
        let numStr = "";
        /* 
        parseInt returns NaN if it fails to parse. NaN is a weird special value
        that requires using isNaN to check b/c NaN === NaN => false.
        */
        let isNumber = isNaN(parseInt(str[i])) === false;

        /* 
        Iterate over all the nums that come after this string until the next
        non-number.
        */
        while (i < str.length && isNumber) {
            // concatenate the string-num digit then increment.
            numStr += str[i++];
            isNumber = isNaN(parseInt(str[i])) === false;
        }

        // .repeat will automatically convert numStr to a number if it can.
        decoded += char.repeat(numStr);
    }
    return decoded;
}