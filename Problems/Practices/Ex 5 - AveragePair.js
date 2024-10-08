//Two Pointer

function averagePair(arr, average){
    let end = arr.length - 1
    let start = 0

    while(start < end){
        let avg = (arr[start] + arr[end])/2
        if(avg == average) return true
        else if(avg < average) start++
        else end--
    }
    return false
    
}

//averagePair([1,2,3],2.5) // true
//averagePair([1,3,3,5,6,7,10,12,19],8) // true
//averagePair([-1,0,3,4,5,6], 4.1) // false
//averagePair([],4) // false