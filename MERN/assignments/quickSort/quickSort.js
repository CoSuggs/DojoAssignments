const arr = [22, 11, 15, 3, 4, 19, 8, 9, 1, 2, 7, 10, 12, 13, 14, 5, 6, 16, 17, 18, 20, 21]
const expectedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

function quickSort(arr = []){
    var pivot = 6
    let j = arr.length-1
    let i = 0
    if(arr[i]<pivot){
        i++
    }else if(arr[j]>pivot){
        j--
    }else{
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }if(i=j){
        pivot = j
    } return arr
}

console.log(quickSort(arr))