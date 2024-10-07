function validAnagram(a, b){
    if(a.length !== b.length) return false

    let lookup = {}
    for(let i = 0; i < a.length; i++){
        lookup[a[i]] ? lookup[a[i]] += 1 : lookup[a[i]] = 1
    }
    for(let i = 0; i < b.length; i++){
        if(!lookup[b[i]]) return false
        lookup[b[i]] -= 1
    }
    return true
}

validAnagram('anagram', 'nagaram') // true