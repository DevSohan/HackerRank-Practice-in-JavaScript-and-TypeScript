function divisibleSumPairs(n, k, ar) {
    let count = 0

    for(let i = 0; i < n; i++){
        //console.log(target)
        for(let j = 0; j < n; j++){
            if(j > i && (ar[i] + ar[j]) % k == 0){
                //console.log(`${ar[i]} + ${ar[j]} == ${k}`)
                count++
            }
        }
    }
    return count

}