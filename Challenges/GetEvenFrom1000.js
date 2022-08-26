function sum_even_numbers(){
    var sum=0;
    for(var x=1; x<1001;x++){
        if(x%2 === 0){
            sum += x;
        }
    }
    return sum;
}
console.log(sum_even_numbers);