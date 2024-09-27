function breakingRecords(scores: number[]): number[] {
    let max:number = scores[0]
    let min:number = scores[0]
    let record:number = 0
    let drop:number = 0
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i]
            record++
        }
        if(scores[i] < min){
            min = scores[i]
            drop++
        }
    }
    return [record, drop]
}