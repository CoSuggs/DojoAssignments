// function reverse(arr) {
//     for (i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//         return arr;
//     }
// }
// var reverse_arr = reverse([1, 2, 3, 4, 5]);
// console.log(reverse_arr);


// function reverse(arr) {
//     var start = 0;
//     var end = arr.length - 1;

//     while (start < end) {
//         temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }

//     return arr;
// }

// var reverse_array = reverse([1, 2, 3, 4]);
// console.log(reverse_array)


// function reverse(arr) {
//     let arrnew = arr.reverse;
//     return arrnew;
// }
// console.log(reverse([1, 2, 3, 4, 5]))

// var arr = [1,2,3]

// arr[2] -> 3
// arr[1]-> 2
// arr[0] -> 1
//          0           1         2
// var arr2d[[2,3,4], [11,12,13], [7,8,9]];
// //         0 1 2    0   1  2    0 1 2
// arr2d[1][1];

// function isPresent(arr2d, 2) -> true
// function isPresent(arr2d, 11) -> false

//var arr2d= [[1,2,3],[4,5,6],[7,8,9]];
//value=4
//i=0
//i<3
//  x=0
//  arr2d[0].length -> 3; x <3
//  arr2d[0][0] === 4-> 1 === 4
//
//  x=1
//  arr2d[0][1] === 4 -> 2 === 4
//  x=2
//  arr2d[0][2] === 4 -> 3 === 4
//  x=3
//  arr2d[0][3] === 4 -> 11 ====4
//i=1
//i<3
//  x=0
//  arr2d[1].length -> 3; x <3
//  arr2d[1][0] === 4-> 4 === 4

//var arr2d= [[1,2,3,11],[4,5,6],[7,8,9]];
// var arr2d = [[11, 12], [1, 2]];
var arr2d = [[1, 4, 5], [2, 1]];

// function isPresent(arr2d, value) {
//     for (let i = 0; i<arr2d.length; i++) {
//         for (let x = 0; x < arr2d[i].length; x++) {
//             if (arr2d[i][x] === value) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(isPresent(arr2d, 4));

// function flatten(arr2d) {
//     var arr = [];
//     for (let i = 0; i < arr2d.length; i++) {
//         for (let x = 0; x < arr2d[i].length; x++) {
//             arr.push (arr2d[i][x]);
//         }
//     }
//     return arr;
// }

// console.log(flatten(arr2d));


// /*
// Function that receives 2 arrays and returns the sum of the arrays
// */

// var arr1 = [20, 10, 30];
// var arr2 = [10, 30, 20];
// // var result = [30, 40, 50]

// function sumArrColumns (nums1, nums2) {
//     var result = [];
//     for(let x=0;x<Math.max(arr1.length, arr2.length);x++){
//             result.push (arr1[x] + arr2[x]);
//         }
//     return result;
// }

// console.log(sumArrColumns(arr1, arr2));

/*
Function that receives 2 arrays and returns the sum of the arrays
*/

// var result = [30, 40, 50]

function sumArrColumns(nums1, nums2) {
    var result = [];

    if (nums1.length === nums2.length) {

        for (let i = 0; i < nums1.length; i++) {
            result.push(nums1[i] + nums2[i]);
        }
    } else {
        console.log("Lengths not the same");
    }
    return result;
}

var arr1 = [20, 10, 30];
var arr2 = [10, 30, 20];
console.log(sumArrColumns(arr1, arr2));


