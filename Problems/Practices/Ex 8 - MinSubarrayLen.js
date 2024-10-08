function minSubArrayLen(arr, sum){
    //solve it with sliding window pattern
    // first point start and end at 0
    //loop through each items to add in total
        //if total is less than target value, add end to toal and increase end until array length
        // if total is greater or equal to target value, check for mininum between mininumlength and start - end, 
        //deduct start to total, increase start pision
    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity
    console.log(minLen)

    while(start < arr.length){
        console.log(start, end)
        if(total < sum && end < arr.length){
            total += arr[end]
            end++
        }else if(total >= sum){
            minLen = Math.min(minLen, end - start)
            total -= arr[start]
            start++
        }else{
            break
        }
    }

    console.log(minLen)
    
}


minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0