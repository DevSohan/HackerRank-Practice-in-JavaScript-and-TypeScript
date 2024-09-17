function diagonalDifference(arr) {
    // Write your code here
    let toRight = 0;
    let toLeft = 0;
    for(let i=0; i<arr.length; i++){
        toRight += arr[i][i]
        console.log(arr[i][i])
    }
    
    
    for(let j=0; j<arr.length; j++){
        toLeft += arr[j][arr.length -1 - j]
        console.log(arr[j][arr.length -1 - j])
    }
    
    return Math.abs(toRight - toLeft)
}