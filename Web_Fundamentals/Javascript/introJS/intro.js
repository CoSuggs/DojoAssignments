var num = 1;
var text = "text variable";
var bool = false;

var abc;
console.log(abc);
abc = "text later";
console.log(abc);

var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
console.log(sum);

var name_ = "Elena";
var message = "My name is:";
console.log(message + name_);

console.log(message + num1);
console.log(message + num1 + num2);
console.log(num1 + num2 + message);

var order = 10 + 20 / 6;
console.log(order);

var order2 = (10 + 20) / 6;
console.log(order2)

var n = 14;
n += 4; // n = n + 4

var full_name = "Elena"
full_name += " De Troya"
console.log(full_name);

if(bool) { /* a == b; a !==b; a < b; a > b; a<=b; a>=b; */
    console.log("True var"):
} else {
    console.log("false var");
}

var name1 = "Elana";
var name2 = "elena";
if(name1 === name2){
    console.log("Same Names");
} else {
    console.log("different names")
}

var n1 = 7;
if(n1 >= 15){
    console.log("Number greater than = 15");
}else if(n1 <= 5) {
    console.log("Number is less or equal to 5");
}else{
    console.log("number between 5 AND 15")
}

var var1 = 1;
var var2 = "1";
if(var1 === var2){
    console.log("equals");
}

var tempereture = 20;
var isRaining = false;
if(tempereture >= 18){
    if(!isRaining){
        console.log("Great day for a walk!");
    }
}

var sunny = true;

if(tempereture >= 18 && !isRaining && sunny){
    console.log("Great day for a walk2!")
}

if(tempereture >= || !isRaining){
    console.log("Well, maybe it is raining or maybe it is not the right temp, but I'm walking");
}

if(tempereture >= 18 && !isRaining || sunny){
    console.log("Great day for a walk3");
}

for(i = 0; i < 3; i++){
    console.log(i);
}

var x = 0;
while(x<3){
    console.log(x);
    x++;
}

var start = 0;
var end =10;
while(start<end){
    console.log("start:"+start+",end:"+end);
    start += 2;
    end -=2;
}
