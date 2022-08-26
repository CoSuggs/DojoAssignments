function findmaxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    
    for(var x=0;x<arr.length;x++){
        if(max<arr[x]){
            max=arr[x];
        }
        if(min>arr[x]){
            min=arr[x];
        }
        sum=sum + arr[x];
    }
    var avg = sum/arr.length;
        var arrnew=[max,min,avg];
    return arrnew;
}