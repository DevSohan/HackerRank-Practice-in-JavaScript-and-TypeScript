function getTotalX(a: number[], b: number[]): number {
    const sortA:number[] = a.sort()
    const sortB:number[] = b.sort()
    const factorArr:number[] = []
    const resultArr:number[] = []
    
    for(let i:number = 0; i <=100; i++){
        if(sortA.every((item:number) => i % item == 0 && i <= sortB[0])){
            factorArr.push(i)
        }
    }
    
    for(let j:number = 0; j < factorArr.length; j++){
        if(sortB.every((item:number) => item % factorArr[j] == 0)){
            resultArr.push(factorArr[j])
        }
    }
    
    return resultArr.length

}