function squareVal(arr){
    var y=0;
    for(var x=0;x<arr.length;x++){
        y=arr[x]*arr[x];
        arr[x]+y;
    }
    return arr;
}
console.log(squareVal);
