function sameFrequency(a,b){
    if(a.length != b.length) return false
    a = a.toString()
    b = b.toString()
    let aCounter = {}

    for(let i = 0; i < a.length; i++){
        aCounter[a[i]] ? aCounter[a[i]] += 1 : aCounter[a[i]] = 1
    }

    for(let i = 0; i < b.length; i++){
        if(!aCounter[b[i]]) return false
        aCounter[b[i]] -= 1
    }
    return true
    
}


sameFrequency(182,281) // true
//sameFrequency(34,14)
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222)