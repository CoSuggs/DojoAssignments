function sum_odd_5000(){
    var sum =0;
    for(var x=0;x<5001;x++){
        if(x%2 ===1){
            sum += x;
        }
    }
    return sum;
}
console.log(sum_odd_5000);
