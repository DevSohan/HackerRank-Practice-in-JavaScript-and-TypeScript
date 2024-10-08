function maxSubarraySum(arr, subArrCount){
    if(arr.length < subArrCount) return null;
    let maxSum = 0;
    let start = 0;
    
    while(start < arr.length - subArrCount + 1){
        let sum = 0
        for(i = 0; i < subArrCount; i++){
            sum += arr[start + i]
        }
        if(sum > maxSum) maxSum = sum
        start++
    }
    
    console.log(maxSum)
}

maxSubarraySum([100,200,300,400], 2) // 700
