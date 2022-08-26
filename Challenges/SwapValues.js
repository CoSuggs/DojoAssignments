function swaparr(arr){
    var x=[arr.length-1];
    var y=0;
    var temp = arr[y];
    arr[y]=arr[x];
    arr[x]=temp;
    var arrnew= arr;
    return arrnew;
}
console.log(swaparr);
