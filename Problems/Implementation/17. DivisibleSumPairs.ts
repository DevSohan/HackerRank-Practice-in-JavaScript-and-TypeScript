function divisibleSumPairsTS(n: number, k: number, ar: number[]): number {
    let count:number = 0

    for(let i:number = 0; i < n; i++){
        for(let j:number = 0; j < n; j++){
            if(j > i && (ar[i] + ar[j]) % k == 0){
                count++
            }
        }
    }
    return count

}