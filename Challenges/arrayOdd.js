function oddNumbers(){
    var arr=[];
    for(varx=0;x<50;x++){
        if(x%2 !==0){
            arr.push(x);
        }
    }
    return arr;
}
console.log(oddNumbers);
