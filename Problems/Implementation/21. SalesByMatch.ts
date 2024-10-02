function sockMerchant(n: number, ar: number[]): number {
    // sort the array
    // count
    // 2 pointer issue
    // if start and next matches, +2 or ++
    let count:number = 0
    let start:number = 0
    let next:number = 1

    const sorted = ar.sort((a,b) => a - b)

    while(next < n){
        if( sorted[start] == sorted[next]){
            count++
            start += 2
            next += 2
        }else{
            next++
            start++
        }
    }
    console.log(count)
    return count
}