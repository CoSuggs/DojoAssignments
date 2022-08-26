//make a random number between 1-100
var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

function guessNumber() {
    var input = document.querySelector('#number');
    var x = input.value;
    x = parseInt(x);
    var message = '';

    if (x === randomNumber) {
        message = 'Congratz!! You are correct!';
    } else if (x > randomNumber) {
        message = 'Random number is smaller.';
    } else if (x < randomNumber) {
        message = 'Random number is bigger.';
    }
    document.querySelector('.didYouGuess').innerText = message
}
console.log(guessNumber());




//select the number in the input and compare it to the random number

//write in didYouGuess if it's the right, or if their number is higher/lower

