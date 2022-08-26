function findAvg(arr){
    var sum=0;
    for(var x=0;x<arr.length;x++){
        sum=sum+arr[x];
        var avg=sum/arr.length;
    }
    return avg;
}
console.log(findAvg);