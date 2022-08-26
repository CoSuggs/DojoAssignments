function greaterY(arr,Y){
    var count=0;
    for(var x=0;x<arr.length;x++){
        if(arr[x]>Y){
            count++
        }
    }
    return count;
}
console.log(greaterY)