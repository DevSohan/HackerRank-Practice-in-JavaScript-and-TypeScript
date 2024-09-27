function birthday(s: number[], d: number, m: number): number {
    // Write your code here
    let match:number = 0
    
    for(let i = 0; i < s.length; i++){
        let sum:number = 0
        if(s.length == d){
            sum += s[i]
        }else{ 
            for(let j = 0; j < m; j++){
                sum += s[i + j]
            }
        }
        if(d == sum) match ++
    }
    return match
}