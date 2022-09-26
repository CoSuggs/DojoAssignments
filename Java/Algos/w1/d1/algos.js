class UtilClass {
    totalCount(numArr) {
        // Given an array of numbers,  return the sum of the array
        let count = 0
        for (let i = 0; i < numArr.length; i++) {
            count += numArr[i]
        }
        return count
    }

    printMessages(msgArr) {
        // Given an array of String, write a function to print messages 
        for (const msg of msgArr) {
            console.log(msg);
        }
    }
}


console.log("Hello World")

var messagesPerDay = [5, 8, 6]
var messages = ["Please call back!", "Make sure you install jdk", "Help debug please!"]

var newBot = new UtilClass()

console.log(newBot.totalCount(messagesPerDay));
newBot.printMessages(messages);



