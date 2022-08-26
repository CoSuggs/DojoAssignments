function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
/*
arrayOfNumbers = [1, 3, 5]
sum = 1
i = 0
i < 3
sum += arrayOfNumbers[0] ->1 -> 1+1 -> 2
PRINT the current sum is: 2

i = 1
sum += arrayOfNumbers[1] -> 2 + 3 -> 5
PRINT the current sum is: 5

i = 2
sum += arrayOfNumbers[2] -> 5 + 5 ->10
PRINT the current sum is: 10

i = 3

the total is: 10
*/
