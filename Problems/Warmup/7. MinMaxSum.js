function miniMaxSum(arr) {
    const sortedArr = arr.sort()
    let minSum = 0
    let maxSum = 0
    for(let i = 0; i < sortedArr.length -1; i++){
        minSum += sortedArr[i]
    }
    for(let i = arr.length -1; i > 0; i--){
        maxSum += sortedArr[i]
    }
    
    console.log(minSum + " " + maxSum)

}